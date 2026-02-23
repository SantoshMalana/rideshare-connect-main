"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, User, Mail, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { registerUser } from "@backend/actions/auth"; // Import server action
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
      router.push("/login"); // Redirect to login page
    } else {
      toast.error(result.message);
    }
  }

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
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
                className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all ${role === "passenger"
                  ? "border-blue-600 bg-blue-50 text-blue-600"
                  : "border-gray-200 hover:border-blue-200 text-gray-500"
                  }`}
              >
                <User className="w-8 h-8 mb-2" />
                <span className="font-semibold">Passenger</span>
              </button>
              <button
                type="button"
                onClick={() => setRole("driver")}
                className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all ${role === "driver"
                  ? "border-blue-600 bg-blue-50 text-blue-600"
                  : "border-gray-200 hover:border-blue-200 text-gray-500"
                  }`}
              >
                <Car className="w-8 h-8 mb-2" />
                <span className="font-semibold">Driver</span>
              </button>
            </div>

            <form onSubmit={handleRegister} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="full-name">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input id="full-name" name="name" placeholder="John Doe" className="pl-10" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input id="email" name="email" type="email" placeholder="john@example.com" className="pl-10" required />
                </div>
              </div>
              <Button disabled={loading} className="w-full bg-blue-600 hover:bg-blue-700 text-white h-11 text-lg">
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
  );
}
