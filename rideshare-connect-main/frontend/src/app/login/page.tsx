"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, Mail, Key, Loader2, CheckCircle } from "lucide-react";
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
    formData.append('email', email); // Ensure email is passed
    const result = await verifyOtp(null, formData);

    setLoading(false);

    if (result.success) {
      toast.success(result.message);
      router.push('/find-ride'); // Redirect to dashboard/home
    } else {
      toast.error(result.message);
    }
  }

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-4">
            <Car className="h-8 w-8 text-blue-600" />
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
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          className="pl-10"
                          required
                          autoFocus
                        />
                      </div>
                    </div>
                    <Button disabled={loading} className="w-full bg-blue-600 hover:bg-blue-700 text-white h-11 text-lg">
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
                        <Key className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="otp"
                          name="otp"
                          type="text"
                          placeholder="123456"
                          className="pl-10 tracking-widest font-mono text-lg"
                          maxLength={6}
                          required
                          autoFocus
                        />
                      </div>
                    </div>
                    <Button disabled={loading} className="w-full bg-green-600 hover:bg-green-700 text-white h-11 text-lg">
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
  );
}
