import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Users, Search, Filter, ArrowRight } from "lucide-react";
import { getRides } from "@backend/actions/ride";
import Link from 'next/link';
import BookButton from "@/components/BookButton";

// Helper to check if ride has coordinates
const hasCoordinates = (ride: any) => {
  return ride.route?.origin?.length === 2 && ride.route?.destination?.length === 2;
};

export default async function FindRidePage(props: { searchParams: Promise<{ search?: string }> }) {
  const searchParams = await props.searchParams;
  const search = searchParams.search || "";
  const rides = await getRides(search);

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Find your next ride</h1>
          <p className="text-gray-600 text-lg">Thousands of rides available. Search by destination or date.</p>
        </div>

        {/* Search Bar - Simplified for Server Component */}
        <Card className="mb-12 border-none shadow-xl bg-white p-2 rounded-2xl md:rounded-full">
          <CardContent className="p-0">
            <form action="/find-ride" className="flex flex-col md:flex-row items-center gap-2 p-2">
              <div className="relative flex-grow w-full">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500 h-5 w-5" />
                <Input
                  name="search"
                  defaultValue={search}
                  placeholder="Where do you want to go?"
                  className="pl-12 h-14 border-none bg-slate-50 focus-visible:ring-0 text-lg rounded-full"
                />
              </div>
              <Button type="submit" className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white h-14 px-8 rounded-full text-lg font-bold">
                <Search className="mr-2 h-5 w-5" />
                Search
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters - Sidebar on Desktop */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-none shadow-sm bg-white">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-blue-900">Filters</h3>
                  <Button variant="ghost" size="sm" className="text-blue-600 h-8 px-2">Clear all</Button>
                </div>

                <div className="space-y-4">
                  <Label className="text-xs font-bold uppercase tracking-wider text-gray-400">Sort by</Label>
                  <div className="space-y-2">
                    {["Earliest", "Lowest Price", "Recent"].map((option) => (
                      <label key={option} className="flex items-center gap-3 cursor-pointer group">
                        <div className="w-5 h-5 rounded-full border-2 border-slate-200 group-hover:border-blue-400 transition-colors" />
                        <span className="text-gray-600">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Ride List */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-600 font-medium">Available Rides ({rides.length})</h3>
            </div>

            {rides.length === 0 ? (
              <div className="text-center py-20 bg-slate-50 rounded-2xl">
                <p className="text-gray-500 text-lg">No rides found matching your search.</p>
                <Link href="/offer-ride">
                  <Button variant="link" className="text-blue-600">Offer a ride instead?</Button>
                </Link>
              </div>
            ) : (
              rides.map((ride: any) => (
                <div
                  key={ride._id}
                  className="animate-in fade-in slide-in-from-right-4 duration-500"
                >
                  <Card className="border-none shadow-sm hover:shadow-md transition-shadow cursor-pointer bg-white group overflow-hidden">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row md:items-center">
                        <div className="p-6 flex-grow border-b md:border-b-0 md:border-r border-slate-100">
                          <div className="flex items-start justify-between mb-6">
                            <div className="space-y-6 relative">
                              {/* Route Visualizer */}
                              <div className="absolute left-2.5 top-2.5 bottom-2.5 w-0.5 bg-slate-100" />
                              <div className="flex items-center gap-4 relative">
                                <div className="w-5 h-5 rounded-full border-4 border-white bg-blue-500 shadow-sm z-10" />
                                <div>
                                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{ride.time}</p>
                                  <p className="text-lg font-bold text-blue-900">{ride.from}</p>
                                  {hasCoordinates(ride) && (
                                    <span className="text-xs text-green-600 flex items-center gap-1">
                                      <MapPin className="w-3 h-3" /> Map Verified
                                    </span>
                                  )}
                                </div>
                              </div>
                              <div className="flex items-center gap-4 relative">
                                <div className="w-5 h-5 rounded-full border-4 border-white bg-blue-600 shadow-sm z-10" />
                                <div>
                                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Arrival</p>
                                  <p className="text-lg font-bold text-blue-900">{ride.to}</p>
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-2xl font-black text-blue-600">₹{ride.price}</p>
                              <p className="text-xs font-semibold text-gray-400">per person</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2">
                              <Users className="w-4 h-4 text-slate-400" />
                              <span className="text-sm text-gray-600">{ride.seats} seats left</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-slate-400" />
                              <span className="text-sm text-gray-600">{ride.date}</span>
                            </div>
                          </div>
                        </div>

                        <div className="p-6 md:w-64 bg-slate-50/50 flex flex-row md:flex-col items-center justify-between md:justify-center gap-4 group-hover:bg-blue-50 transition-colors">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-xs font-bold text-blue-600">
                              {ride.driverAvatar}
                            </div>
                            <div>
                              <p className="text-sm font-bold text-blue-900 leading-tight">{ride.driverName}</p>
                              <div className="flex items-center">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <span key={star} className="text-yellow-400 text-xs">★</span>
                                ))}
                              </div>
                            </div>
                          </div>
                          <BookButton rideId={ride._id} />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
