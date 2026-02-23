'use server';

import dbConnect from '@backend/lib/mongodb';
import Message from '@backend/models/Message';
import { pusherServer } from '@backend/lib/pusher';
import { cookies } from 'next/headers';

export async function sendMessage(receiverEmail: string, content: string, rideId?: string) {
    try {
        await dbConnect();
        const senderEmail = (await cookies()).get('user_email')?.value;

        if (!senderEmail) {
            return { success: false, message: 'Not authenticated' };
        }

        const newMessage = new Message({
            senderEmail,
            receiverEmail,
            content,
            rideId,
        });

        await newMessage.save();

        // Trigger real-time event via Pusher
        // Channel name is a unique combination of both users to keep it private
        const channelName = [senderEmail, receiverEmail].sort().join('-').replace(/[@.]/g, '_');

        await pusherServer.trigger(channelName, 'new-message', {
            senderEmail,
            content,
            timestamp: newMessage.timestamp,
            rideId,
        });

        return { success: true, message: 'Message sent' };
    } catch (error) {
        console.error('Send Message Error:', error);
        return { success: false, message: 'Failed to send message' };
    }
}

export async function getChatHistory(otherUserEmail: string, rideId?: string) {
    try {
        await dbConnect();
        const currentUserEmail = (await cookies()).get('user_email')?.value;

        if (!currentUserEmail) return [];

        const query: any = {
            $or: [
                { senderEmail: currentUserEmail, receiverEmail: otherUserEmail },
                { senderEmail: otherUserEmail, receiverEmail: currentUserEmail },
            ],
        };

        if (rideId) {
            query.rideId = rideId;
        }

        const messages = await Message.find(query).sort({ timestamp: 1 }).lean();

        return messages.map((msg: any) => ({
            id: msg._id.toString(),
            senderEmail: msg.senderEmail,
            receiverEmail: msg.receiverEmail,
            content: msg.content,
            timestamp: msg.timestamp,
        }));
    } catch (error) {
        console.error('Fetch Chat History Error:', error);
        return [];
    }
}
