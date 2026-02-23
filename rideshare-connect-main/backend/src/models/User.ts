import mongoose from 'mongoose';

export interface IUser extends mongoose.Document {
    email: string;
    name?: string;
    role: 'driver' | 'passenger';
    otp?: string;
    otpExpires?: Date;
    earnings?: number;
    rides?: {
        date: Date;
        origin: string;
        destination: string;
        fare: number;
        status: string;
        otherPartyEmail: string;
        otherPartyName: string;
    }[];
    reviews?: {
        rating: number;
        comment: string;
        date: Date;
    }[];
    createdAt: Date;
}

const UserSchema = new mongoose.Schema<IUser>({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: false,
    },
    role: {
        type: String,
        enum: ['driver', 'passenger'],
        default: 'passenger',
    },
    otp: {
        type: String,
        required: false,
    },
    otpExpires: {
        type: Date,
        required: false,
    },
    // Driver specific
    earnings: {
        type: Number,
        default: 0,
    },
    // Mocking ride history for now since Ride model might not exist yet
    rides: [{
        date: Date,
        origin: String,
        destination: String,
        fare: Number,
        status: String,
        otherPartyEmail: String,
        otherPartyName: String
    }],
    reviews: [{
        rating: Number,
        comment: String,
        date: { type: Date, default: Date.now }
    }],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

export default (mongoose.models.User as mongoose.Model<IUser>) || mongoose.model<IUser>('User', UserSchema);
