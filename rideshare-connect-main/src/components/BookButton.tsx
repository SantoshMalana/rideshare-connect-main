'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Loader2 } from 'lucide-react';
import { bookRide } from '@/actions/ride';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

export default function BookButton({ rideId }: { rideId: string }) {
    const [isBooking, setIsBooking] = useState(false);
    const router = useRouter();

    const handleBook = async () => {
        setIsBooking(true);
        try {
            const result = await bookRide(rideId);
            if (result.success) {
                toast.success(result.message);
                router.push('/profile');
            } else {
                toast.error(result.message);
            }
        } catch (error) {
            toast.error("An error occurred during booking");
        } finally {
            setIsBooking(false);
        }
    };

    return (
        <Button
            onClick={handleBook}
            disabled={isBooking}
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full group-hover:scale-105 transition-transform"
        >
            {isBooking ? (
                <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Booking...
                </>
            ) : (
                <>
                    Book Ride <ArrowRight className="ml-2 h-4 w-4" />
                </>
            )}
        </Button>
    );
}
