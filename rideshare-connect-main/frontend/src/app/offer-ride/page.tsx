"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Calendar, Users, Banknote, Car, Info, Shield, Loader2, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import dynamic from 'next/dynamic';
import { createRide } from "@backend/actions/ride";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const MapPicker = dynamic(() => import('@/components/MapPicker'), {
  ssr: false,
  loading: () => <div className="h-[200px] w-full bg-slate-100 animate-pulse rounded-xl" />
});

const steps = [
  { label: "Route", icon: <MapPin className="w-4 h-4" /> },
  { label: "Schedule", icon: <Calendar className="w-4 h-4" /> },
  { label: "Pricing", icon: <Banknote className="w-4 h-4" /> },
];

export default function OfferRidePage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [originCoords, setOriginCoords] = useState<{ lat: number, lng: number } | null>(null);
  const [destCoords, setDestCoords] = useState<{ lat: number, lng: number } | null>(null);
  const [currentStep, setCurrentStep] = useState(0);

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
          <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-2">Share Your Journey</p>
          <h1 className="text-3xl font-bold text-blue-900 mb-2">Offer a Ride</h1>
          <p className="text-gray-600 text-lg">Share your journey and split the costs with others.</p>
        </div>

        {/* Step Progress Indicator */}
        <div className="mb-10 flex items-center justify-center gap-2 bg-white rounded-2xl p-4 shadow-sm border border-slate-100">
          {steps.map((step, i) => (
            <div key={i} className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setCurrentStep(i)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all ${i === currentStep
                    ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                    : i < currentStep
                      ? "bg-blue-50 text-blue-600"
                      : "bg-slate-50 text-gray-400"
                  }`}
              >
                {i < currentStep ? (
                  <CheckCircle className="w-4 h-4" />
                ) : (
                  step.icon
                )}
                <span className="hidden sm:inline">{step.label}</span>
              </button>
              {i < steps.length - 1 && (
                <div className={`w-8 h-0.5 rounded-full ${i < currentStep ? "bg-blue-400" : "bg-slate-200"}`} />
              )}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Step 1: Route */}
            <Card className={`border-none shadow-md overflow-hidden ${currentStep === 0 ? "ring-2 ring-blue-100" : ""}`}
              onClick={() => setCurrentStep(0)}>
              <div className="h-1 bg-gradient-to-r from-blue-500 to-cyan-500" />
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-blue-600" />
                  </div>
                  Route Details
                </CardTitle>
                <CardDescription>Where are you starting and where are you going?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="from">Departure City</Label>
                    <Input id="from" name="from" placeholder="e.g. Hyderabad" required className="h-11" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="to">Arrival City</Label>
                    <Input id="to" name="to" placeholder="e.g. Bangalore" required className="h-11" />
                  </div>
                </div>

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

            {/* Step 2: Schedule */}
            <Card className={`border-none shadow-md overflow-hidden ${currentStep === 1 ? "ring-2 ring-blue-100" : ""}`}
              onClick={() => setCurrentStep(1)}>
              <div className="h-1 bg-gradient-to-r from-violet-500 to-purple-500" />
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <div className="w-8 h-8 rounded-lg bg-violet-50 flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-violet-600" />
                  </div>
                  Date and Time
                </CardTitle>
                <CardDescription>When do you plan to leave?</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="date">Departure Date</Label>
                    <Input id="date" name="date" type="date" required className="h-11" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time">Departure Time</Label>
                    <Input id="time" name="time" type="time" required className="h-11" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Step 3: Pricing */}
            <Card className={`border-none shadow-md overflow-hidden ${currentStep === 2 ? "ring-2 ring-blue-100" : ""}`}
              onClick={() => setCurrentStep(2)}>
              <div className="h-1 bg-gradient-to-r from-emerald-500 to-teal-500" />
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-900">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center">
                    <Users className="w-4 h-4 text-emerald-600" />
                  </div>
                  Ride Capacity & Pricing
                </CardTitle>
                <CardDescription>Set your price and available seats.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="seats">Available Seats</Label>
                    <Input id="seats" name="seats" type="number" min="1" max="8" defaultValue="3" required className="h-11" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="price">Price per Passenger (₹)</Label>
                    <div className="relative">
                      <Banknote className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
                      <Input id="price" name="price" type="number" placeholder="0.00" className="pl-10 h-11" required />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Additional Notes</Label>
                  <Textarea id="description" name="description" placeholder="Tell passengers about your car, luggage space, or music preferences..." className="h-32 resize-none" />
                </div>
              </CardContent>
            </Card>

            <Button disabled={isSubmitting} className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white h-13 text-lg font-bold rounded-xl shadow-lg shadow-blue-200/50">
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Publishing...
                </>
              ) : (
                <>
                  <Car className="mr-2 h-5 w-5" />
                  Publish Ride
                </>
              )}
            </Button>
          </div>

          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-blue-900 to-indigo-900 text-white border-none shadow-xl overflow-hidden relative">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-blue-100">
                  <Info className="w-5 h-5" />
                  Driver Tips
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 relative z-10">
                <div className="space-y-4">
                  {[
                    "Be clear about your meeting point to avoid confusion.",
                    "Price your ride fairly to attract more passengers quickly.",
                    "Communicate with passengers as soon as they book.",
                  ].map((tip, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="h-7 w-7 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 text-xs font-bold backdrop-blur-sm">
                        {i + 1}
                      </div>
                      <p className="text-sm text-blue-100 leading-relaxed">{tip}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
              <div className="absolute -bottom-6 -right-6 opacity-10">
                <Car className="w-32 h-32 rotate-12" />
              </div>
            </Card>

            <Card className="border border-dashed border-blue-200 bg-blue-50/30">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">Safety First</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">All rides are monitored for safety. Never share personal contact details publicly.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
