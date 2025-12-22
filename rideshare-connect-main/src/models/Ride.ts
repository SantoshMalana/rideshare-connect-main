import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IRide extends Document {
    from: string;
    to: string;
    date: string;
    time: string;
    price: number;
    seats: number;
    driverName: string;
    driverEmail: string;
    driverAvatar: string;
    description?: string;
    route?: {
        origin: [number, number]; // [lat, lng]
        destination: [number, number]; // [lat, lng]
    };
    createdAt: Date;
}

const RideSchema: Schema = new Schema({
    from: { type: String, required: true },
    to: { type: String, required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    price: { type: Number, required: true },
    seats: { type: Number, required: true },
    driverName: { type: String, required: true },
    driverEmail: { type: String, required: true },
    driverAvatar: { type: String, required: true },
    description: { type: String },
    route: {
        origin: { type: [Number], index: '2d' }, // [lat, lng]
        destination: { type: [Number], index: '2d' } // [lat, lng]
    },
    createdAt: { type: Date, default: Date.now },
});

const Ride: Model<IRide> = mongoose.models.Ride || mongoose.model<IRide>('Ride', RideSchema);

export default Ride;
