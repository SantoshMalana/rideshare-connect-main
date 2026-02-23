"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Car, Search, PlusCircle, Shield, Users, MapPin, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const features = [
    {
      icon: <Search className="w-8 h-8 text-blue-600" />,
      title: "Find a Ride",
      description: "Search for rides going your way. Filter by date, time, and budget."
    },
    {
      icon: <PlusCircle className="w-8 h-8 text-blue-600" />,
      title: "Offer a Ride",
      description: "Sharing your commute? Post your ride and save on fuel costs."
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Verified Users",
      description: "Our community is built on trust. All members are verified for safety."
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-36 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-white">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-blue-100/60 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-indigo-100/40 blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                Now available across 120+ cities
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-blue-900 tracking-tight leading-[1.1] mb-6">
                Travel Together, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Save More.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 max-w-xl leading-relaxed">
                Connect with drivers and passengers heading in the same direction. Reduce your carbon footprint and make travel affordable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/find-ride">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 h-14 text-lg rounded-full shadow-lg shadow-blue-200 hover:shadow-blue-300 transition-all">
                    Find a Ride
                    <Search className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/offer-ride">
                  <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 h-14 text-lg rounded-full">
                    Offer a Ride
                    <PlusCircle className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
              <div className="mt-10 flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-green-500" />
                  <span>OTP Verified Users</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-500" />
                  <span>50,000+ community members</span>
                </div>
              </div>
            </motion.div>

            {/* Hero Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="hidden lg:flex justify-end"
            >
              <div className="bg-white p-8 rounded-3xl shadow-2xl border border-blue-100/50 max-w-sm w-full backdrop-blur-sm">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-3 rounded-2xl">
                    <Car className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Recent Ride</p>
                    <p className="text-lg font-bold text-blue-900">Bangalore to Hyderabad</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">Niloufer Cafe · Hitech City</span>
                  </div>
                  <div className="h-px bg-blue-50 mx-2" />
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-indigo-600 flex-shrink-0" />
                    <span className="text-gray-600 text-sm">Church Street · Bangalore</span>
                  </div>
                  <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                    <div className="flex -space-x-2">
                      {["S", "A", "R"].map((initial, i) => (
                        <div key={i} className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 border-2 border-white flex items-center justify-center text-[11px] font-bold text-white">
                          {initial}
                        </div>
                      ))}
                      <div className="w-9 h-9 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-gray-500">+2</div>
                    </div>
                    <div className="text-right">
                      <p className="text-blue-600 font-black text-xl">₹295</p>
                      <p className="text-xs text-gray-400">per seat</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-blue-900 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { label: "Active Users", value: "50k+" },
              { label: "Rides Shared", value: "200k+" },
              { label: "CO2 Saved", value: "15t" },
              { label: "Cities Covered", value: "120" },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-4xl font-bold mb-2">{stat.value}</p>
                <p className="text-blue-200 uppercase tracking-widest text-xs font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">How it Works</h2>
            <p className="text-gray-600">Get started in minutes. It's safe, simple, and secure.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-blue-100 -z-10" />

            {[
              {
                step: "01",
                title: "Create Profile",
                description: "Sign up and verify your identity to ensure community safety."
              },
              {
                step: "02",
                title: "Find or Offer",
                description: "Search for a ride or post your empty seats."
              },
              {
                step: "03",
                title: "Travel Together",
                description: "Book, meet, and enjoy your journey while saving money."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="text-center bg-white"
              >
                <div className="w-24 h-24 mx-auto bg-blue-50 rounded-full flex items-center justify-center mb-6 relative">
                  <span className="text-3xl font-black text-blue-600">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">Why Choose RideShare Hub?</h2>
            <p className="text-gray-600">We make carpooling simple, safe, and efficient for everyone involved.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
              >
                <div className="mb-6 inline-block bg-blue-50 p-4 rounded-2xl">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{feature.description}</p>
                <Link href="/register" className="text-blue-600 font-semibold flex items-center hover:gap-2 transition-all">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="bg-blue-600 rounded-[3rem] p-12 lg:p-24 relative overflow-hidden">
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to hit the road?</h2>
              <p className="text-blue-100 text-xl mb-10">
                Join thousands of drivers and passengers who are already saving money and making new friends.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/register">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-10 h-14 text-lg rounded-full font-bold">
                    Join for Free
                  </Button>
                </Link>
              </div>
            </div>
            {/* Abstract circles */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-blue-500 opacity-50" />
            <div className="absolute bottom-0 right-0 mr-10 mb-10 w-40 h-40 rounded-full bg-blue-400 opacity-30" />
          </div>
        </div>
      </section>
    </div>
  );
}
