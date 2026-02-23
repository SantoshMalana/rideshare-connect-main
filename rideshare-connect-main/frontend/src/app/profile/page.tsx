"use client";

import { useEffect, useState } from "react";
import { getUserProfile } from "@backend/actions/auth";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Car, Star, DollarSign, Calendar, MapPin, User as UserIcon, Loader2, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import ChatWindow from "@/components/ChatWindow";
import { MessageSquare } from "lucide-react";

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

    return (
        <div className="container mx-auto py-12 px-4 max-w-5xl">
            <div className="mb-8 flex items-center gap-4">
                <div className="bg-blue-100 p-4 rounded-full">
                    <UserIcon className="h-10 w-10 text-blue-600" />
                </div>
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
                        {user.name || "Welcome, User"}
                        {!user.name && <span className="text-sm font-normal text-muted-foreground">(No name set)</span>}
                    </h1>
                    <div className="flex flex-col gap-1 mt-1">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 w-fit capitalize">
                            {user.role}
                        </span>
                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                            <Mail className="h-4 w-4" />
                            {user.email}
                        </div>
                    </div>
                </div>
            </div>

            {user.role === "driver" ? (
                <div className="grid gap-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
                                <DollarSign className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">${user.earnings || 0}</div>
                                <p className="text-xs text-muted-foreground">
                                    Based on completed rides
                                </p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                <CardTitle className="text-sm font-medium">Total Rides</CardTitle>
                                <Car className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">{user.rides?.length || 0}</div>
                                <p className="text-xs text-muted-foreground">
                                    Completed rides
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    <Card>
                        <CardHeader>
                            <CardTitle>Previous Rides</CardTitle>
                            <CardDescription>History of rides you have driven.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            {user.rides && user.rides.length > 0 ? (
                                <div className="space-y-4">
                                    {user.rides.map((ride: any, index: number) => (
                                        <div key={index} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                                            <div className="flex items-start gap-3">
                                                <div className="bg-gray-100 p-2 rounded">
                                                    <Car className="h-5 w-5 text-gray-500" />
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-gray-900">{ride.origin} → {ride.destination}</p>
                                                    <p className="text-sm text-gray-500">{new Date(ride.date).toLocaleDateString()}</p>
                                                </div>
                                            </div>
                                            <div className="text-right flex flex-col items-end gap-2">
                                                <div>
                                                    <p className="font-bold text-green-600">+${ride.fare}</p>
                                                    <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full capitalize">{ride.status}</span>
                                                </div>
                                                <button
                                                    onClick={() => setActiveChat({
                                                        email: ride.otherPartyEmail,
                                                        name: ride.otherPartyName
                                                    })}
                                                    className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 font-medium"
                                                >
                                                    <MessageSquare className="h-3 w-3" />
                                                    Chat
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-8 text-gray-500">
                                    <Car className="h-10 w-10 mx-auto mb-2 opacity-50" />
                                    No rides completion history found.
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Passenger Reviews</CardTitle>
                            <CardDescription>What passengers are saying about you.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            {user.reviews && user.reviews.length > 0 ? (
                                <div className="space-y-4">
                                    {user.reviews.map((review: any, index: number) => (
                                        <div key={index} className="border p-4 rounded-lg bg-gray-50">
                                            <div className="flex items-center gap-1 mb-2 text-yellow-500">
                                                {Array.from({ length: 5 }).map((_, i) => (
                                                    <Star key={i} className={`h-4 w-4 ${i < review.rating ? "fill-current" : "text-gray-300"}`} />
                                                ))}
                                            </div>
                                            <p className="text-gray-700 italic">"{review.comment}"</p>
                                            <p className="text-xs text-gray-400 mt-2">{new Date(review.date).toLocaleDateString()}</p>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-8 text-gray-500">
                                    <Star className="h-10 w-10 mx-auto mb-2 opacity-50" />
                                    No reviews yet.
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            ) : (
                // PASSENGER VIEW
                <div className="grid gap-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>My Rides</CardTitle>
                            <CardDescription>History of rides you have taken.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            {user.rides && user.rides.length > 0 ? (
                                <div className="space-y-4">
                                    {user.rides.map((ride: any, index: number) => (
                                        <div key={index} className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0">
                                            <div className="flex items-start gap-3">
                                                <div className="bg-blue-50 p-2 rounded">
                                                    <MapPin className="h-5 w-5 text-blue-500" />
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-gray-900">{ride.origin} → {ride.destination}</p>
                                                    <p className="text-sm text-gray-500">{new Date(ride.date).toLocaleDateString()}</p>
                                                </div>
                                            </div>
                                            <div className="text-right flex flex-col items-end gap-2">
                                                <div>
                                                    <p className="font-bold text-gray-900">${ride.fare}</p>
                                                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full capitalize">{ride.status}</span>
                                                </div>
                                                <button
                                                    onClick={() => setActiveChat({
                                                        email: ride.otherPartyEmail,
                                                        name: ride.otherPartyName
                                                    })}
                                                    className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 font-medium"
                                                >
                                                    <MessageSquare className="h-3 w-3" />
                                                    Chat
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-8 text-gray-500">
                                    <MapPin className="h-10 w-10 mx-auto mb-2 opacity-50" />
                                    You haven't taken any rides yet.
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>
            )}
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
