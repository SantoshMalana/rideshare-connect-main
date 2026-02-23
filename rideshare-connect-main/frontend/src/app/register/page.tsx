"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, User, Mail, Loader2, Shield, MapPin, Leaf, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { registerUser } from "@backend/actions/auth";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [role, setRole] = useState<"driver" | "passenger">("passenger");
  const [loading, setLoading] = useState(false);

  async function handleRegister(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.currentTarget);
    formData.append("role", role);
    const result = await registerUser(formData);
    setLoading(false);

    if (result.success) {
      toast.success(result.message);
      router.push("/login");
    } else {
      toast.error(result.message);
    }
  }

  return (
    <div className="min-h-[calc(100vh-64px)] flex">
      {/* Left illustration panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-indigo-600 via-blue-700 to-blue-800 relative overflow-hidden items-center justify-center p-16">
        <div className="relative z-10 text-white max-w-md">
          <div className="bg-white/10 backdrop-blur-sm p-3 rounded-2xl w-fit mb-8">
            <Car className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold mb-4 leading-tight">Join the RideShare Hub community</h2>
          <p className="text-blue-100 text-lg leading-relaxed mb-10">
            Start sharing rides today. Save money, reduce emissions, and make new friends on every trip.
          </p>
          <div className="space-y-4">
            {[
              { icon: <CheckCircle className="w-5 h-5" />, text: "Free to join, no hidden charges" },
              { icon: <Shield className="w-5 h-5" />, text: "OTP-verified for your safety" },
              { icon: <Leaf className="w-5 h-5" />, text: "Help reduce carbon emissions" },
              { icon: <MapPin className="w-5 h-5" />, text: "Available across 120+ cities" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-sm">
                  {item.icon}
                </div>
                <span className="text-blue-100">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-indigo-500/30 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-blue-400/20 blur-2xl" />
        <div className="absolute inset-0 dot-pattern opacity-10" />
      </div>

      {/* Right form panel */}
      <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-8 bg-slate-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-md"
        >
          <div className="text-center mb-8 lg:text-left">
            <Link href="/" className="lg:hidden inline-flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-2 rounded-xl">
                <Car className="h-5 w-5 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-blue-900">
                RideShare Hub
              </span>
            </Link>
            <h2 className="text-3xl font-bold text-gray-900">Create an account</h2>
            <p className="text-gray-600 mt-2">Join our community and start sharing rides today.</p>
          </div>

          <Card className="border-none shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl">Choose your role</CardTitle>
              <CardDescription>Are you offering rides or looking for one?</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setRole("passenger")}
                  className={`flex flex-col items-center justify-center p-5 rounded-xl border-2 transition-all duration-200 ${role === "passenger"
                    ? "border-blue-600 bg-blue-50 text-blue-600 shadow-md shadow-blue-100"
                    : "border-gray-200 hover:border-blue-200 text-gray-500"
                    }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-2 ${role === "passenger" ? "bg-blue-100" : "bg-gray-100"}`}>
                    <User className="w-6 h-6" />
                  </div>
                  <span className="font-semibold text-sm">Passenger</span>
                  <span className="text-xs mt-1 opacity-60">Find rides</span>
                </button>
                <button
                  type="button"
                  onClick={() => setRole("driver")}
                  className={`flex flex-col items-center justify-center p-5 rounded-xl border-2 transition-all duration-200 ${role === "driver"
                    ? "border-blue-600 bg-blue-50 text-blue-600 shadow-md shadow-blue-100"
                    : "border-gray-200 hover:border-blue-200 text-gray-500"
                    }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-2 ${role === "driver" ? "bg-blue-100" : "bg-gray-100"}`}>
                    <Car className="w-6 h-6" />
                  </div>
                  <span className="font-semibold text-sm">Driver</span>
                  <span className="text-xs mt-1 opacity-60">Offer rides</span>
                </button>
              </div>

              <form onSubmit={handleRegister} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="full-name">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
                    <Input id="full-name" name="name" placeholder="John Doe" className="pl-10 h-11" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
                    <Input id="email" name="email" type="email" placeholder="john@example.com" className="pl-10 h-11" required />
                  </div>
                </div>
                <Button disabled={loading} className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white h-11 text-lg rounded-xl">
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Creating Account...
                    </>
                  ) : (
                    `Sign up as ${role.charAt(0).toUpperCase() + role.slice(1)}`
                  )}
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col gap-4 border-t pt-6 bg-slate-50/50 rounded-b-xl">
              <p className="text-sm text-center text-gray-600 w-full">
                Already have an account?{" "}
                <Link href="/login" className="text-blue-600 font-semibold hover:underline">
                  Log in
                </Link>
              </p>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
