"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, Mail, Key, Loader2, CheckCircle, Shield, MapPin, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { sendOtp, verifyOtp } from "@backend/actions/auth";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [step, setStep] = useState<'email' | 'otp'>('email');
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  async function handleSendOtp(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.currentTarget);
    const result = await sendOtp(formData);
    setLoading(false);

    if (result.success) {
      setEmail(formData.get('email') as string);
      setStep('otp');
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }
  }

  async function handleVerifyOtp(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.currentTarget);
    formData.append('email', email);
    const result = await verifyOtp(null, formData);
    setLoading(false);

    if (result.success) {
      toast.success(result.message);
      router.push('/find-ride');
    } else {
      toast.error(result.message);
    }
  }

  return (
    <div className="min-h-[calc(100vh-64px)] flex">
      {/* Left illustration panel — desktop only */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 relative overflow-hidden items-center justify-center p-16">
        <div className="relative z-10 text-white max-w-md">
          <div className="bg-white/10 backdrop-blur-sm p-3 rounded-2xl w-fit mb-8">
            <Car className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl font-bold mb-4 leading-tight">Welcome back to RideShare Hub</h2>
          <p className="text-blue-100 text-lg leading-relaxed mb-10">
            Log in to find rides, connect with drivers, and continue your sustainable travel journey.
          </p>
          <div className="space-y-4">
            {[
              { icon: <Shield className="w-5 h-5" />, text: "OTP-secured authentication" },
              { icon: <MapPin className="w-5 h-5" />, text: "Access your saved routes" },
              { icon: <Users className="w-5 h-5" />, text: "Connect with your community" },
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
        {/* Decorations */}
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-blue-500/30 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full bg-indigo-400/20 blur-2xl" />
        <div className="absolute inset-0 dot-pattern opacity-10" />
      </div>

      {/* Right form panel */}
      <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-8 bg-slate-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
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
            <h2 className="text-3xl font-bold text-gray-900">Welcome back</h2>
            <p className="text-gray-600 mt-2">Log in securely with OTP.</p>
          </div>

          <Card className="border-none shadow-xl overflow-hidden">
            <AnimatePresence mode="wait">
              {step === 'email' ? (
                <motion.div
                  key="email-step"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.25 }}
                >
                  <CardHeader>
                    <CardTitle className="text-xl">Login / Sign Up</CardTitle>
                    <CardDescription>We'll send a one-time password to your email.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSendOtp} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="john@example.com"
                            className="pl-10 h-11"
                            required
                            autoFocus
                          />
                        </div>
                      </div>
                      <Button disabled={loading} className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white h-11 text-lg rounded-xl">
                        {loading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending OTP...
                          </>
                        ) : (
                          "Send OTP"
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </motion.div>
              ) : (
                <motion.div
                  key="otp-step"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                >
                  <CardHeader>
                    <CardTitle className="text-xl">Verify OTP</CardTitle>
                    <CardDescription>Enter the code sent to <span className="font-semibold text-blue-600">{email}</span></CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleVerifyOtp} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="otp">One-Time Password</Label>
                        <div className="relative">
                          <Key className="absolute left-3 top-3.5 h-4 w-4 text-gray-400" />
                          <Input
                            id="otp"
                            name="otp"
                            type="text"
                            placeholder="123456"
                            className="pl-10 tracking-widest font-mono text-lg h-11"
                            maxLength={6}
                            required
                            autoFocus
                          />
                        </div>
                      </div>
                      <Button disabled={loading} className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white h-11 text-lg rounded-xl">
                        {loading ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Verifying...
                          </>
                        ) : (
                          <>
                            Verify & Login <CheckCircle className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                      <Button
                        type="button"
                        variant="ghost"
                        className="w-full text-sm text-gray-500"
                        onClick={() => setStep('email')}
                      >
                        Wrong email? Go back
                      </Button>
                    </form>
                  </CardContent>
                </motion.div>
              )}
            </AnimatePresence>

            <CardFooter className="flex flex-col gap-4 border-t pt-6 bg-slate-50/50 rounded-b-xl text-center">
              <p className="text-xs text-gray-500">
                By continuing, you agree to our Terms of Service using our Secure OTP Protocol.
              </p>
            </CardFooter>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
