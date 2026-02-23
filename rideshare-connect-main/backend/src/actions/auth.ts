'use server';

import dbConnect from '@backend/lib/mongodb';
import User from '@backend/models/User';
import { sendEmail } from '@backend/lib/email';
import otpGenerator from 'otp-generator';
import { cookies } from 'next/headers';

export async function registerUser(formData: FormData) {
    try {
        await dbConnect();
        const email = formData.get('email') as string;
        const name = formData.get('name') as string;
        const role = formData.get('role') as string;

        if (!email || !name || !role) {
            return { success: false, message: 'All fields are required' };
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return { success: false, message: 'User already exists. Please login.' };
        }

        const newUser = new User({
            email,
            name,
            role,
        });

        await newUser.save();
        return { success: true, message: 'Successfully signed up! Please login.' };

    } catch (error) {
        console.error('Registration Error:', error);
        return { success: false, message: 'Registration failed' };
    }
}

export async function sendOtp(formData: FormData) {
    try {
        await dbConnect();
        const email = formData.get('email') as string;

        console.log('--- OTP Request Started ---');
        console.log('Email:', email);

        if (!email) {
            console.log('Error: Email is missing');
            return { success: false, message: 'Email is required' };
        }

        // Check if user exists first
        const userExists = await User.findOne({ email });
        if (!userExists) {
            return { success: false, message: 'Account not found. Please sign up first.' };
        }

        const otp = otpGenerator.generate(6, {
            upperCaseAlphabets: false,
            specialChars: false,
            lowerCaseAlphabets: false
        });

        console.log('Generated OTP:', otp);

        const otpExpires = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

        // Update existing user with OTP
        const user = await User.findOneAndUpdate(
            { email },
            { $set: { otp, otpExpires } },
            { new: true }
        );

        console.log('User updated with OTP:', user ? user._id : 'Failed');

        const emailResult = await sendEmail(email, 'Your Login OTP', `Your OTP is: ${otp}`);
        console.log('Email Service Result:', emailResult);

        if (emailResult.success) {
            console.log('OTP sent successfully to:', email);
            return { success: true, message: 'OTP sent! Check your inbox (and spam folder).' };
        } else {
            console.error('Failed to send OTP to:', email, emailResult.message);
            return { success: false, message: `Could not send OTP email. ${emailResult.message || 'Please check server configuration.'}` };
        }
    } catch (error: any) {
        console.error('Error sending OTP:', error);
        return { success: false, message: error?.message || 'Something went wrong' };
    }
}

export async function verifyOtp(prevState: any, formData: FormData) {
    try {
        await dbConnect();
        // Handle both (formData) and (prevState, formData) signatures
        const actualFormData = formData instanceof FormData ? formData : (prevState instanceof FormData ? prevState : null);
        if (!actualFormData) {
            console.error('Invalid arguments to verifyOtp:', { prevState, formData });
            return { success: false, message: 'Invalid request' };
        }

        const email = actualFormData.get('email') as string;
        const otp = actualFormData.get('otp') as string;

        console.log('--- OTP Verification Started ---');
        console.log('Email:', email);
        console.log('OTP:', otp);

        const user = await User.findOne({ email });

        if (!user) {
            return { success: false, message: 'User not found' };
        }

        if (user.otp !== otp) {
            return { success: false, message: 'Invalid OTP' };
        }

        if (!user.otpExpires || user.otpExpires < new Date()) {
            return { success: false, message: 'OTP expired' };
        }

        // Clear OTP after successful login
        user.otp = undefined;
        user.otpExpires = undefined;
        await user.save();

        // Simulate login session
        (await cookies()).set('user_email', email, { httpOnly: true, path: '/' });

        return { success: true, message: 'Login successful!' };
    } catch (error) {
        console.error('Error verifying OTP:', error);
        return { success: false, message: 'Verification failed' };
    }
}

export async function getUserProfile() {
    try {
        await dbConnect();
        const email = (await cookies()).get('user_email')?.value;
        if (!email) return null;

        const user = await User.findOne({ email }).lean();
        if (!user) return null;

        // Force type assertion since lean() returns a plain JS object that might miss methods but has data
        const userData = user as any;

        // Serialize pure data
        return {
            name: userData.name,
            email: userData.email,
            role: userData.role,
            earnings: userData.earnings,
            rides: userData.rides,
            reviews: userData.reviews,
        };
    } catch (error) {
        console.error('Error fetching profile:', error);
        return null;
    }
}

export async function getCurrentUser() {
    return await getUserProfile();
}

export async function logout() {
    (await cookies()).delete('user_email');
    return { success: true };
}
