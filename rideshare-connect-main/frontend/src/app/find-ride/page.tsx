import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Calendar, Users, Search, ArrowRight, Car } from "lucide-react";
import { getRides } from "@backend/actions/ride";
import Link from 'next/link';
import BookButton from "@/components/BookButton";

const hasCoordinates = (ride: any) => {
  return ride.route?.origin?.length === 2 && ride.route?.destination?.length === 2;
};

export default async function FindRidePage(props: { searchParams: Promise<{ search?: string; sort?: string }> }) {
  const searchParams = await props.searchParams;
  const search = searchParams.search || "";
  const sort = searchParams.sort || "recent";
  const rides = await getRides(search, sort);

  const sortOptions = [
    { value: "recent", label: "Most Recent" },
    { value: "earliest", label: "Earliest Date" },
    { value: "price", label: "Lowest Price" },
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Explore</p>
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Find your next ride</h1>
          <p className="text-gray-600 text-lg">Thousands of rides available. Search by destination or date.</p>
        </div>

        {/* Search Bar */}
        <Card className="mb-10 border-none shadow-xl bg-white/80 backdrop-blur-sm p-2 rounded-2xl md:rounded-full">
          <CardContent className="p-0">
            <form action="/find-ride" className="flex flex-col md:flex-row items-center gap-2 p-2">
              <input type="hidden" name="sort" value={sort} />
              <div className="relative flex-grow w-full">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500 h-5 w-5" />
                <Input
                  name="search"
                  defaultValue={search}
                  placeholder="Where do you want to go?"
                  className="pl-12 h-14 border-none bg-slate-50 focus-visible:ring-0 text-lg rounded-full"
                />
              </div>
              <Button type="submit" className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white h-14 px-8 rounded-full text-lg font-bold shadow-lg shadow-blue-200/50">
                <Search className="mr-2 h-5 w-5" />
                Search
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-none shadow-sm bg-white sticky top-20">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-blue-900">Sort by</h3>
                  {(search || sort !== "recent") && (
                    <Link href="/find-ride">
                      <Button variant="ghost" size="sm" className="text-blue-600 h-7 px-2 text-xs">Clear all</Button>
                    </Link>
                  )}
                </div>

                <div className="space-y-2">
                  {sortOptions.map((option) => (
                    <Link
                      key={option.value}
                      href={`/find-ride?search=${encodeURIComponent(search)}&sort=${option.value}`}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer transition-all text-sm ${sort === option.value
                          ? "bg-blue-50 text-blue-700 font-semibold"
                          : "text-gray-600 hover:bg-slate-50"
                        }`}
                    >
                      <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${sort === option.value
                          ? "border-blue-600"
                          : "border-slate-200"
                        }`}>
                        {sort === option.value && (
                          <div className="w-2 h-2 rounded-full bg-blue-600" />
                        )}
                      </div>
                      {option.label}
                    </Link>
                  ))}
                </div>

                {/* Quick stats */}
                <div className="pt-4 border-t border-slate-100">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Summary</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500">Available rides</span>
                      <span className="font-bold text-blue-900">{rides.length}</span>
                    </div>
                    {rides.length > 0 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">From</span>
                        <span className="font-bold text-blue-900">₹{Math.min(...rides.map((r: any) => r.price))}</span>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Ride List */}
          <div className="lg:col-span-3 space-y-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-gray-600 font-medium">
                {rides.length > 0 ? `${rides.length} ride${rides.length > 1 ? "s" : ""} found` : "No rides found"}
              </h3>
            </div>

            {rides.length === 0 ? (
              <div className="text-center py-24 bg-white rounded-2xl border border-dashed border-slate-200">
                <div className="w-20 h-20 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-6">
                  <Car className="h-10 w-10 text-blue-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No rides found</h3>
                <p className="text-gray-500 mb-6 max-w-sm mx-auto">Try a different search or offer your own ride to the community.</p>
                <Link href="/offer-ride">
                  <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full px-6">
                    Offer a Ride <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            ) : (
              rides.map((ride: any) => (
                <div
                  key={ride._id}
                  className="animate-in fade-in slide-in-from-right-4 duration-500"
                >
                  <Card className="border-none shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer bg-white group overflow-hidden">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row md:items-center">
                        <div className="p-6 flex-grow border-b md:border-b-0 md:border-r border-slate-100">
                          <div className="flex items-start justify-between mb-6">
                            <div className="space-y-6 relative">
                              {/* Route visualizer */}
                              <div className="absolute left-[9px] top-3 bottom-3 w-0.5 bg-gradient-to-b from-blue-400 to-indigo-600" />
                              <div className="flex items-center gap-4 relative">
                                <div className="w-5 h-5 rounded-full border-4 border-white bg-blue-400 shadow-md shadow-blue-100 z-10" />
                                <div>
                                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">{ride.time}</p>
                                  <p className="text-lg font-bold text-blue-900">{ride.from}</p>
                                  {hasCoordinates(ride) && (
                                    <span className="text-xs text-emerald-600 flex items-center gap-1 font-medium">
                                      <MapPin className="w-3 h-3" /> Map Verified
                                    </span>
                                  )}
                                </div>
                              </div>
                              <div className="flex items-center gap-4 relative">
                                <div className="w-5 h-5 rounded-full border-4 border-white bg-indigo-600 shadow-md shadow-indigo-100 z-10" />
                                <div>
                                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Arrival</p>
                                  <p className="text-lg font-bold text-blue-900">{ride.to}</p>
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-3xl font-black gradient-text-blue">₹{ride.price}</p>
                              <p className="text-xs font-semibold text-gray-400">per person</p>
                            </div>
                          </div>

                          <div className="flex items-center gap-6">
                            <div className="flex items-center gap-2">
                              <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center">
                                <Users className="w-3.5 h-3.5 text-blue-500" />
                              </div>
                              <span className="text-sm text-gray-600 font-medium">
                                {ride.seats} seat{ride.seats !== 1 ? "s" : ""} left
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-7 h-7 rounded-lg bg-indigo-50 flex items-center justify-center">
                                <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                              </div>
                              <span className="text-sm text-gray-600 font-medium">{ride.date}</span>
                            </div>
                          </div>
                        </div>

                        <div className="p-6 md:w-64 bg-slate-50/50 flex flex-row md:flex-col items-center justify-between md:justify-center gap-4 group-hover:bg-blue-50/80 transition-colors duration-300">
                          <div className="flex items-center gap-3">
                            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 border-2 border-white flex items-center justify-center text-sm font-bold text-white shadow-md">
                              {ride.driverAvatar}
                            </div>
                            <div>
                              <p className="text-sm font-bold text-blue-900 leading-tight">{ride.driverName}</p>
                              <div className="flex items-center gap-0.5">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <span key={star} className="text-amber-400 text-xs">★</span>
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
