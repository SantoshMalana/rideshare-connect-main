"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Car, Search, PlusCircle, Shield, Users, MapPin, ArrowRight, Leaf, Clock, Star, Quote } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

/* ─── Animated Counter ─── */
function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function Home() {
  const features = [
    {
      icon: <Search className="w-7 h-7" />,
      title: "Find a Ride",
      description: "Search for rides going your way. Filter by date, time, and budget.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <PlusCircle className="w-7 h-7" />,
      title: "Offer a Ride",
      description: "Sharing your commute? Post your ride and save on fuel costs.",
      color: "from-violet-500 to-purple-500",
    },
    {
      icon: <Shield className="w-7 h-7" />,
      title: "Verified Users",
      description: "Our community is built on trust. All members are verified for safety.",
      color: "from-emerald-500 to-teal-500",
    },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Regular Passenger",
      quote: "Saved over ₹12,000 in 3 months! The bookings are seamless and I've met some incredible people.",
      avatar: "PS",
      rating: 5,
    },
    {
      name: "Arjun Mehta",
      role: "Driver",
      quote: "Fuel costs cut by half. I offer my empty seats and the extra income covers my EMI every month.",
      avatar: "AM",
      rating: 5,
    },
    {
      name: "Sneha Reddy",
      role: "Student",
      quote: "As a student, this is a lifesaver. Affordable rides between campus and home every weekend!",
      avatar: "SR",
      rating: 5,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* ─── Hero Section ─── */}
      <section className="relative py-20 lg:py-36 overflow-hidden gradient-blue-soft">
        {/* Background Decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-blue-200/40 blur-3xl animate-float" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-indigo-200/30 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-violet-100/20 blur-3xl" />
          {/* Dot pattern overlay */}
          <div className="absolute inset-0 dot-pattern opacity-30" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                Now available across 120+ cities
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-blue-900 tracking-tight leading-[1.08] mb-6">
                Travel Together, <br />
                <span className="gradient-text-blue">Save More.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 max-w-xl leading-relaxed">
                Connect with drivers and passengers heading in the same direction. Reduce your carbon footprint and make travel affordable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/find-ride">
                  <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 h-14 text-lg rounded-full shadow-lg shadow-blue-200/50 hover:shadow-xl hover:shadow-blue-300/50 transition-all duration-300">
                    Find a Ride
                    <Search className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/offer-ride">
                  <Button size="lg" variant="outline" className="border-2 border-blue-200 text-blue-600 hover:bg-blue-50 hover:border-blue-300 px-8 h-14 text-lg rounded-full transition-all duration-300">
                    Offer a Ride
                    <PlusCircle className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
              <div className="mt-10 flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center">
                    <Shield className="w-4 h-4 text-green-500" />
                  </div>
                  <span>OTP Verified</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center">
                    <Users className="w-4 h-4 text-blue-500" />
                  </div>
                  <span>50,000+ members</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center">
                    <Leaf className="w-4 h-4 text-emerald-500" />
                  </div>
                  <span>Eco-friendly</span>
                </div>
              </div>
            </motion.div>

            {/* Hero Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="hidden lg:flex justify-end"
            >
              <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl shadow-blue-100/50 border border-white/60 max-w-sm w-full relative">
                {/* Floating decorative ring */}
                <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full border-4 border-blue-100 animate-pulse-ring" />

                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-3 rounded-2xl shadow-lg shadow-blue-200">
                    <Car className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Recent Ride</p>
                    <p className="text-lg font-bold text-blue-900">Bangalore to Hyderabad</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 flex-shrink-0 shadow-sm shadow-blue-200" />
                    <span className="text-gray-600 text-sm">Niloufer Cafe · Hitech City</span>
                  </div>
                  <div className="h-px bg-gradient-to-r from-transparent via-blue-100 to-transparent mx-2" />
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex-shrink-0 shadow-sm shadow-indigo-200" />
                    <span className="text-gray-600 text-sm">Church Street · Bangalore</span>
                  </div>
                  <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                    <div className="flex -space-x-2">
                      {["S", "A", "R"].map((initial, i) => (
                        <div key={i} className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 border-2 border-white flex items-center justify-center text-[11px] font-bold text-white shadow-sm">
                          {initial}
                        </div>
                      ))}
                      <div className="w-9 h-9 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-gray-500">+2</div>
                    </div>
                    <div className="text-right">
                      <p className="text-blue-600 font-black text-2xl">₹295</p>
                      <p className="text-xs text-gray-400">per seat</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Stats Section ─── */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 py-16 text-white relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { label: "Active Users", value: 50000, suffix: "+" },
              { label: "Rides Shared", value: 200000, suffix: "+" },
              { label: "CO₂ Saved", value: 15, suffix: "t" },
              { label: "Cities Covered", value: 120, suffix: "" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <p className="text-4xl lg:text-5xl font-black mb-2">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-blue-200 uppercase tracking-widest text-xs font-semibold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How it Works ─── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Simple Process</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">How it Works</h2>
              <p className="text-gray-600">Get started in minutes. It's safe, simple, and secure.</p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-14 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100" />

            {[
              {
                step: "01",
                title: "Create Profile",
                description: "Sign up and verify your identity to ensure community safety.",
                icon: <Users className="w-6 h-6" />,
              },
              {
                step: "02",
                title: "Find or Offer",
                description: "Search for a ride or post your empty seats.",
                icon: <Search className="w-6 h-6" />,
              },
              {
                step: "03",
                title: "Travel Together",
                description: "Book, meet, and enjoy your journey while saving money.",
                icon: <Car className="w-6 h-6" />,
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="text-center bg-white relative"
              >
                <div className="w-28 h-28 mx-auto bg-gradient-to-br from-blue-50 to-indigo-50 rounded-3xl flex items-center justify-center mb-6 relative shadow-sm">
                  <span className="text-3xl font-black gradient-text-blue">{item.step}</span>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-xl bg-white shadow-md flex items-center justify-center text-blue-600">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Features Section ─── */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Why Us</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">Why Choose RideShare Hub?</h2>
              <p className="text-gray-600">We make carpooling simple, safe, and efficient for everyone involved.</p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-blue-100 transition-all duration-300 group"
              >
                <div className={`mb-6 inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} text-white shadow-lg`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{feature.description}</p>
                <Link href="/register" className="text-blue-600 font-semibold flex items-center gap-1 group-hover:gap-2 transition-all text-sm">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials Section ─── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Testimonials</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">Loved by Thousands</h2>
              <p className="text-gray-600">See what our community members have to say about their experience.</p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative bg-slate-50 p-8 rounded-2xl border border-slate-100 group hover:bg-white hover:shadow-lg hover:border-blue-100 transition-all duration-300"
              >
                <Quote className="absolute top-6 right-6 w-8 h-8 text-blue-100 group-hover:text-blue-200 transition-colors" />
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-sm font-bold text-white">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-blue-900 text-sm">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 rounded-[2.5rem] p-12 lg:p-24 relative overflow-hidden"
          >
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">Ready to hit the road?</h2>
              <p className="text-blue-100 text-xl mb-10 leading-relaxed">
                Join thousands of drivers and passengers who are already saving money and making new friends.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/register">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-10 h-14 text-lg rounded-full font-bold shadow-lg shadow-blue-900/20 hover:shadow-xl transition-all duration-300">
                    Join for Free
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/find-ride">
                  <Button size="lg" variant="outline" className="border-2 border-white/30 text-white hover:bg-white/10 px-10 h-14 text-lg rounded-full font-bold transition-all duration-300">
                    Browse Rides
                  </Button>
                </Link>
              </div>
            </div>
            {/* Decorations */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-500/30 blur-xl" />
            <div className="absolute bottom-0 right-20 mb-10 w-48 h-48 rounded-full bg-indigo-400/20 blur-lg" />
            <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-60 h-60 rounded-full bg-violet-500/10 blur-xl" />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
