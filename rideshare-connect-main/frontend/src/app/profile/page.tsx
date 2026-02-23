"use client";

import { useEffect, useState } from "react";
import { getUserProfile } from "@backend/actions/auth";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Car, Star, DollarSign, Calendar, MapPin, User as UserIcon, Loader2, Mail, MessageSquare, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import ChatWindow from "@/components/ChatWindow";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProfilePage() {
    const [user, setUser] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [activeChat, setActiveChat] = useState<{ email: string, name: string } | null>(null);
    const router = useRouter();

    useEffect(() => {
        async function fetchProfile() {
            try {
                const userData = await getUserProfile();
                if (!userData) {
                    toast.error("Please login to view profile");
                    router.push("/login");
                    return;
                }
                setUser(userData);
            } catch (error) {
                console.error("Profile fetch error:", error);
                toast.error("Failed to load profile");
            } finally {
                setLoading(false);
            }
        }
        fetchProfile();
    }, [router]);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[60vh]">
                <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
            </div>
        );
    }

    if (!user) return null;

    const totalRides = user.rides?.length || 0;
    const totalEarnings = user.rides?.reduce((sum: number, r: any) => sum + (r.fare || 0), 0) || 0;

    return (
        <div className="min-h-screen">
            {/* ─── Gradient Hero Header ─── */}
            <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 relative overflow-hidden">
                <div className="absolute inset-0 dot-pattern opacity-10" />
                <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-blue-500/30 blur-3xl" />

                <div className="container mx-auto px-4 py-16 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex flex-col md:flex-row items-center md:items-start gap-6"
                    >
                        <div className="w-20 h-20 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center text-3xl font-bold text-white border border-white/20">
                            {(user.name || user.email || "U").charAt(0).toUpperCase()}
                        </div>
                        <div className="text-center md:text-left">
                            <h1 className="text-3xl font-bold text-white flex items-center gap-2 justify-center md:justify-start">
                                {user.name || "Welcome, User"}
                                {!user.name && <span className="text-sm font-normal text-blue-200">(No name set)</span>}
                            </h1>
                            <div className="flex flex-col md:flex-row gap-3 mt-2">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/15 text-white backdrop-blur-sm capitalize w-fit mx-auto md:mx-0">
                                    {user.role}
                                </span>
                                <div className="flex items-center gap-2 text-blue-100 text-sm">
                                    <Mail className="h-4 w-4" />
                                    {user.email}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8 max-w-5xl -mt-6 relative z-20">
                {/* ─── Stat Cards ─── */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                        <Card className="border-none shadow-lg bg-white">
                            <CardContent className="p-6 flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                                    <Car className="h-6 w-6 text-blue-600" />
                                </div>
                                <div>
                                    <p className="text-2xl font-black text-blue-900">{totalRides}</p>
                                    <p className="text-xs text-gray-500 font-medium">Total Rides</p>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                        <Card className="border-none shadow-lg bg-white">
                            <CardContent className="p-6 flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center">
                                    <DollarSign className="h-6 w-6 text-emerald-600" />
                                </div>
                                <div>
                                    <p className="text-2xl font-black text-blue-900">₹{totalEarnings}</p>
                                    <p className="text-xs text-gray-500 font-medium">{user.role === "driver" ? "Total Earnings" : "Total Spent"}</p>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                        <Card className="border-none shadow-lg bg-white">
                            <CardContent className="p-6 flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center">
                                    <Star className="h-6 w-6 text-amber-500" />
                                </div>
                                <div>
                                    <p className="text-2xl font-black text-blue-900">{user.reviews?.length || 0}</p>
                                    <p className="text-xs text-gray-500 font-medium">Reviews</p>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>

                {/* ─── Ride History ─── */}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                    <Card className="border-none shadow-lg mb-8">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                                    <Car className="h-4 w-4 text-blue-600" />
                                </div>
                                {user.role === "driver" ? "Rides Driven" : "My Rides"}
                            </CardTitle>
                            <CardDescription>
                                {user.role === "driver" ? "History of rides you have driven." : "History of rides you have taken."}
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            {user.rides && user.rides.length > 0 ? (
                                <div className="space-y-3">
                                    {user.rides.map((ride: any, index: number) => (
                                        <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-blue-50/50 transition-colors">
                                            <div className="flex items-start gap-3">
                                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${user.role === "driver" ? "bg-emerald-100" : "bg-blue-100"}`}>
                                                    {user.role === "driver" ? (
                                                        <Car className="h-5 w-5 text-emerald-600" />
                                                    ) : (
                                                        <MapPin className="h-5 w-5 text-blue-600" />
                                                    )}
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-gray-900">{ride.origin} → {ride.destination}</p>
                                                    <div className="flex items-center gap-2 mt-1">
                                                        <Calendar className="h-3 w-3 text-gray-400" />
                                                        <p className="text-sm text-gray-500">{new Date(ride.date).toLocaleDateString()}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="text-right flex flex-col items-end gap-2">
                                                <div>
                                                    <p className={`font-bold text-lg ${user.role === "driver" ? "text-emerald-600" : "text-blue-900"}`}>
                                                        {user.role === "driver" ? "+" : ""}₹{ride.fare}
                                                    </p>
                                                    <span className={`text-xs px-2.5 py-0.5 rounded-full capitalize font-medium ${ride.status === "booked"
                                                            ? "bg-blue-100 text-blue-700"
                                                            : "bg-gray-100 text-gray-600"
                                                        }`}>
                                                        {ride.status}
                                                    </span>
                                                </div>
                                                <button
                                                    onClick={() => setActiveChat({
                                                        email: ride.otherPartyEmail,
                                                        name: ride.otherPartyName
                                                    })}
                                                    className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 font-medium bg-blue-50 px-2.5 py-1 rounded-full hover:bg-blue-100 transition-colors"
                                                >
                                                    <MessageSquare className="h-3 w-3" />
                                                    Chat
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-4">
                                        <Car className="h-8 w-8 text-blue-300" />
                                    </div>
                                    <h3 className="font-semibold text-gray-900 mb-1">No rides yet</h3>
                                    <p className="text-gray-500 text-sm mb-4">
                                        {user.role === "driver" ? "Start by offering your first ride!" : "Start by finding your first ride!"}
                                    </p>
                                    <Link href={user.role === "driver" ? "/offer-ride" : "/find-ride"}>
                                        <button className="text-blue-600 font-semibold text-sm flex items-center gap-1 mx-auto hover:gap-2 transition-all">
                                            {user.role === "driver" ? "Offer a Ride" : "Find a Ride"}
                                            <ArrowRight className="h-4 w-4" />
                                        </button>
                                    </Link>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </motion.div>

                {/* ─── Reviews Section (Driver only) ─── */}
                {user.role === "driver" && (
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                        <Card className="border-none shadow-lg">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center">
                                        <Star className="h-4 w-4 text-amber-500" />
                                    </div>
                                    Passenger Reviews
                                </CardTitle>
                                <CardDescription>What passengers are saying about you.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                {user.reviews && user.reviews.length > 0 ? (
                                    <div className="space-y-4">
                                        {user.reviews.map((review: any, index: number) => (
                                            <div key={index} className="p-5 rounded-xl bg-slate-50 border border-slate-100">
                                                <div className="flex items-center gap-1 mb-3">
                                                    {Array.from({ length: 5 }).map((_, i) => (
                                                        <Star key={i} className={`h-4 w-4 ${i < review.rating ? "text-amber-400 fill-amber-400" : "text-gray-200"}`} />
                                                    ))}
                                                </div>
                                                <p className="text-gray-700 italic leading-relaxed">&ldquo;{review.comment}&rdquo;</p>
                                                <p className="text-xs text-gray-400 mt-3">{new Date(review.date).toLocaleDateString()}</p>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-12">
                                        <div className="w-16 h-16 mx-auto bg-amber-50 rounded-full flex items-center justify-center mb-4">
                                            <Star className="h-8 w-8 text-amber-300" />
                                        </div>
                                        <h3 className="font-semibold text-gray-900 mb-1">No reviews yet</h3>
                                        <p className="text-gray-500 text-sm">Reviews will appear after passengers rate their rides.</p>
                                    </div>
                                )}
                            </CardContent>
                        </Card>
                    </motion.div>
                )}
            </div>

            {activeChat && (
                <ChatWindow
                    currentUserEmail={user.email}
                    otherUserEmail={activeChat.email}
                    otherUserName={activeChat.name}
                    isOpen={!!activeChat}
                    onClose={() => setActiveChat(null)}
                />
            )}
        </div>
    );
}
