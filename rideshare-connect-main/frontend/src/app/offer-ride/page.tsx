"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Calendar, Users, Banknote, Car, Info, Shield, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import dynamic from 'next/dynamic';
import { createRide } from "@backend/actions/ride";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

// Dynamic import for MapPicker to avoid SSR issues with Leaflet
const MapPicker = dynamic(() => import('@/components/MapPicker'), {
  ssr: false,
  loading: () => <div className="h-[200px] w-full bg-slate-100 animate-pulse rounded-lg"></div>
});

export default function OfferRidePage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [originCoords, setOriginCoords] = useState<{ lat: number, lng: number } | null>(null);
  const [destCoords, setDestCoords] = useState<{ lat: number, lng: number } | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const formData = new FormData(event.currentTarget);

      if (originCoords) {
        formData.append('originLat', originCoords.lat.toString());
        formData.append('originLng', originCoords.lng.toString());
      }

      if (destCoords) {
        formData.append('destLat', destCoords.lat.toString());
        formData.append('destLng', destCoords.lng.toString());
      }

      const result = await createRide(null, formData);

      if (result.success) {
        toast.success(result.message);
        router.push('/find-ride');
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-900 mb-2">Offer a Ride</h1>
          <p className="text-gray-600 text-lg">Share your journey and split the costs with others.</p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  Route Details
                </CardTitle>
                <CardDescription>Where are you starting and where are you going?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="from">Departure City</Label>
                    <Input id="from" name="from" placeholder="e.g. Hyderabad" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="to">Arrival City</Label>
                    <Input id="to" name="to" placeholder="e.g. Bangalore" required />
                  </div>
                </div>

                {/* Map Pickers */}
                <div className="grid grid-cols-1 gap-6 pt-2">
                  <MapPicker
                    label="📍 Pin Pickup Location"
                    onLocationSelect={(lat, lng) => setOriginCoords({ lat, lng })}
                  />
                  <MapPicker
                    label="🏁 Pin Drop Location"
                    onLocationSelect={(lat, lng) => setDestCoords({ lat, lng })}
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  Date and Time
                </CardTitle>
                <CardDescription>When do you plan to leave?</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Departure Date</Label>
                    <Input id="date" name="date" type="date" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Departure Time</Label>
                    <Input id="time" name="time" type="time" required />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <Users className="w-5 h-5 text-blue-600" />
                  Ride Capacity & Pricing
                </CardTitle>
                <CardDescription>Set your price and available seats.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="seats">Available Seats</Label>
                    <Input id="seats" name="seats" type="number" min="1" max="8" defaultValue="3" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="price">Price per Passenger (₹)</Label>
                    <div className="relative">
                      <Banknote className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input id="price" name="price" type="number" placeholder="0.00" className="pl-10" required />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Additional Notes</Label>
                  <Textarea id="description" name="description" placeholder="Tell passengers about your car, luggage space, or music preferences..." className="h-32" />
                </div>
              </CardContent>
            </Card>

            <Button disabled={isSubmitting} className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 text-lg font-bold rounded-xl shadow-lg shadow-blue-200">
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Publishing...
                </>
              ) : (
                "Publish Ride"
              )}
            </Button>
          </div>

          <div className="space-y-6">
            <Card className="bg-blue-900 text-white border-none shadow-xl overflow-hidden relative">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-100">
                  <Info className="w-5 h-5" />
                  Driver Tips
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 relative z-10">
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <div className="h-6 w-6 rounded-full bg-blue-700 flex items-center justify-center flex-shrink-0 text-xs font-bold">1</div>
                    <p className="text-sm text-blue-100">Be clear about your meeting point to avoid confusion.</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="h-6 w-6 rounded-full bg-blue-700 flex items-center justify-center flex-shrink-0 text-xs font-bold">2</div>
                    <p className="text-sm text-blue-100">Price your ride fairly to attract more passengers quickly.</p>
                  </div>
                  <div className="flex gap-3">
                    <div className="h-6 w-6 rounded-full bg-blue-700 flex items-center justify-center flex-shrink-0 text-xs font-bold">3</div>
                    <p className="text-sm text-blue-100">Communicate with passengers as soon as they book.</p>
                  </div>
                </div>
              </CardContent>
              <div className="absolute -bottom-6 -right-6 opacity-10">
                <Car className="w-32 h-32 rotate-12" />
              </div>
            </Card>

            <Card className="border-dashed border-2 border-gray-200 bg-white">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="mx-auto w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-slate-400" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">Safety First</h4>
                  <p className="text-sm text-gray-500">All rides are monitored for safety. Never share personal contact details publicly.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </form>
      </motion.div>
    </div>
  );
}

