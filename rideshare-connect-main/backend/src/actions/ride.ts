'use server';

import dbConnect from '@backend/lib/mongodb';
import Ride from '@backend/models/Ride';
import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';
import User from '@backend/models/User';

export async function createRide(prevState: any, formData: FormData) {
    try {
        await dbConnect();

        const from = formData.get('from') as string;
        const to = formData.get('to') as string;
        const date = formData.get('date') as string;
        const time = formData.get('time') as string;
        const seats = Number(formData.get('seats'));
        const price = Number(formData.get('price'));
        const description = formData.get('description') as string;
        const originLat = Number(formData.get('originLat'));
        const originLng = Number(formData.get('originLng'));
        const destLat = Number(formData.get('destLat'));
        const destLng = Number(formData.get('destLng'));

        if (!from || !to || !date || !time || !price || !seats) {
            return { success: false, message: 'Please fill in all required fields' };
        }

        const email = (await cookies()).get('user_email')?.value;
        if (!email) {
            return { success: false, message: 'Please login to offer a ride' };
        }

        const user = await User.findOne({ email });
        if (!user) {
            return { success: false, message: 'User not found' };
        }

        const ride = await Ride.create({
            from,
            to,
            date,
            time,
            price,
            seats,
            description,
            driverName: user.name || 'Anonymous',
            driverEmail: email,
            driverAvatar: (user.name || 'A').charAt(0).toUpperCase(),
            route: {
                origin: [originLat, originLng],
                destination: [destLat, destLng]
            }
        });

        revalidatePath('/find-ride');
        return { success: true, message: 'Ride created successfully!', rideId: ride._id.toString() };
    } catch (error) {
        console.error('Error creating ride:', error);
        return { success: false, message: 'Failed to create ride' };
    }
}

export async function getRides(search?: string) {
    try {
        await dbConnect();

        let query = {};
        if (search) {
            query = {
                $or: [
                    { from: { $regex: search, $options: 'i' } },
                    { to: { $regex: search, $options: 'i' } }
                ]
            };
        }

        const rides = await Ride.find(query).sort({ createdAt: -1 }).lean();

        // Explicitly map to a plain object to avoid any Mongoose leftovers and fix type issues
        return rides.map((ride: any) => ({
            _id: ride._id ? ride._id.toString() : '',
            from: ride.from,
            to: ride.to,
            date: ride.date,
            time: ride.time,
            price: ride.price,
            seats: ride.seats,
            driverName: ride.driverName,
            driverEmail: ride.driverEmail,
            driverAvatar: ride.driverAvatar,
            description: ride.description,
            route: ride.route,
            createdAt: ride.createdAt ? new Date(ride.createdAt).toISOString() : ''
        }));
    } catch (error) {
        console.error('Error fetching rides:', error);
        return [];
    }
}

export async function bookRide(rideId: string) {
    try {
        await dbConnect();
        const passengerEmail = (await cookies()).get('user_email')?.value;
        if (!passengerEmail) {
            return { success: false, message: 'Please login to book a ride' };
        }

        const ride = await Ride.findById(rideId);
        if (!ride) {
            return { success: false, message: 'Ride not found' };
        }

        const passenger = await User.findOne({ email: passengerEmail });
        const driver = await User.findOne({ email: ride.driverEmail });

        if (!passenger || !driver) {
            return { success: false, message: 'User not found' };
        }

        // Add to passenger's history
        passenger.rides = passenger.rides || [];
        passenger.rides.push({
            date: new Date(ride.date),
            origin: ride.from,
            destination: ride.to,
            fare: ride.price,
            status: 'booked',
            otherPartyEmail: ride.driverEmail,
            otherPartyName: ride.driverName
        });
        await passenger.save();

        // Add to driver's history
        driver.rides = driver.rides || [];
        driver.rides.push({
            date: new Date(ride.date),
            origin: ride.from,
            destination: ride.to,
            fare: ride.price,
            status: 'booked',
            otherPartyEmail: passengerEmail,
            otherPartyName: passenger.name || 'Anonymous'
        });
        await driver.save();

        return { success: true, message: 'Ride booked successfully!' };
    } catch (error) {
        console.error('Booking Error:', error);
        return { success: false, message: 'Booking failed' };
    }
}
