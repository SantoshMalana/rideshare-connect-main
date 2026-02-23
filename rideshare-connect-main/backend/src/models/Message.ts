import mongoose from 'mongoose';

export interface IMessage extends mongoose.Document {
    senderEmail: string;
    receiverEmail: string;
    content: string;
    rideId?: string;
    timestamp: Date;
}

const MessageSchema = new mongoose.Schema<IMessage>({
    senderEmail: {
        type: String,
        required: true,
        index: true,
    },
    receiverEmail: {
        type: String,
        required: true,
        index: true,
    },
    content: {
        type: String,
        required: true,
    },
    rideId: {
        type: String,
        required: false,
        index: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
});

// Compound index for faster searching of chat history between two users
MessageSchema.index({ senderEmail: 1, receiverEmail: 1, timestamp: 1 });

export default (mongoose.models.Message as mongoose.Model<IMessage>) || mongoose.model<IMessage>('Message', MessageSchema);
