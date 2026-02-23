"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Globe, CheckCircle2, Users, Heart, Target, Car, Shield, Leaf, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

export default function AboutPage() {
  const [contactLoading, setContactLoading] = useState(false);

  const stats = [
    { icon: <Users className="w-6 h-6 text-blue-600" />, label: "Community Members", value: "100,000+", color: "bg-blue-50" },
    { icon: <Globe className="w-6 h-6 text-indigo-600" />, label: "Cities Covered", value: "250+", color: "bg-indigo-50" },
    { icon: <Heart className="w-6 h-6 text-rose-600" />, label: "Positive Reviews", value: "4.9/5", color: "bg-rose-50" },
    { icon: <Target className="w-6 h-6 text-emerald-600" />, label: "Carbon Offset", value: "2,500 Tons", color: "bg-emerald-50" },
  ];

  const team = [
    { name: "Anika Patel", role: "CEO & Co-founder", avatar: "AP", color: "from-blue-500 to-indigo-600" },
    { name: "Rohan Desai", role: "CTO", avatar: "RD", color: "from-violet-500 to-purple-600" },
    { name: "Megha Iyer", role: "Head of Operations", avatar: "MI", color: "from-emerald-500 to-teal-600" },
  ];

  async function handleContact(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setContactLoading(true);
    // Simulate sending
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setContactLoading(false);
    toast.success("Message sent! We'll get back to you within 24 hours.");
    (e.target as HTMLFormElement).reset();
  }

  return (
    <div className="flex flex-col">
      {/* ─── Hero Section ─── */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white text-sm font-semibold px-4 py-2 rounded-full mb-6">
              <Leaf className="w-4 h-4" />
              Since 2023
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Driving Change, <br />
              <span className="text-blue-300">One Ride at a Time.</span>
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed max-w-xl">
              RideShare Hub was founded with a simple mission: to make travel more sustainable, affordable, and social for everyone.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
          <Globe className="w-full h-full scale-150 rotate-12" />
        </div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-blue-500/20 blur-3xl" />
      </section>

      {/* ─── Stats Section ─── */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className={`mb-4 p-4 ${stat.color} rounded-2xl group-hover:scale-110 transition-transform duration-200`}>
                  {stat.icon}
                </div>
                <h3 className="text-2xl font-black text-blue-900 mb-1">{stat.value}</h3>
                <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Values Section ─── */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">What We Believe</p>
                <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-8">Our Core Values</h2>
                <div className="space-y-6">
                  {[
                    { title: "Trust & Safety", desc: "We prioritize the security of our community through OTP verification and ratings.", icon: <Shield className="w-5 h-5" />, color: "bg-blue-50 text-blue-600" },
                    { title: "Sustainability", desc: "Reducing cars on the road means lower emissions and a healthier planet.", icon: <Leaf className="w-5 h-5" />, color: "bg-emerald-50 text-emerald-600" },
                    { title: "Community First", desc: "We believe in the power of sharing and connecting people during their journeys.", icon: <Heart className="w-5 h-5" />, color: "bg-rose-50 text-rose-600" },
                  ].map((value, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.15 }}
                      className="flex gap-4 p-4 bg-white rounded-2xl border border-slate-100 hover:shadow-md transition-shadow"
                    >
                      <div className={`w-10 h-10 rounded-xl ${value.color} flex items-center justify-center flex-shrink-0`}>
                        {value.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-blue-900 mb-1">{value.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{value.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center overflow-hidden">
                  <div className="text-center p-4">
                    <Car className="w-12 h-12 text-blue-500 mx-auto mb-2" />
                    <p className="text-sm font-semibold text-blue-700">Shared Journeys</p>
                  </div>
                </div>
                <div className="h-64 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center overflow-hidden">
                  <div className="text-center p-4 text-white">
                    <Globe className="w-16 h-16 mx-auto mb-3 opacity-80" />
                    <p className="font-bold text-lg">250+ Cities</p>
                    <p className="text-blue-200 text-sm">And growing</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-64 rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-200 flex items-center justify-center overflow-hidden">
                  <div className="text-center p-4">
                    <Leaf className="w-16 h-16 text-emerald-500 mx-auto mb-3" />
                    <p className="font-bold text-emerald-800 text-lg">Eco Friendly</p>
                    <p className="text-emerald-600 text-sm">2,500t CO₂ saved</p>
                  </div>
                </div>
                <div className="h-48 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-100 flex items-center justify-center overflow-hidden">
                  <div className="text-center p-4">
                    <Users className="w-12 h-12 text-amber-500 mx-auto mb-2" />
                    <p className="text-sm font-semibold text-amber-700">100k+ Community</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Team Section ─── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Our Team</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">Meet the People Behind RideShare Hub</h2>
            <p className="text-gray-600">A passionate team dedicated to transforming how people travel.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center group"
              >
                <div className={`w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center text-2xl font-bold text-white mb-4 shadow-lg group-hover:scale-105 transition-transform duration-200`}>
                  {member.avatar}
                </div>
                <h3 className="font-bold text-blue-900 text-lg">{member.name}</h3>
                <p className="text-gray-500 text-sm">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Contact Section ─── */}
      <section id="contact" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-[2rem] shadow-2xl border border-slate-100 overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-2/5 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 p-12 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-4">Get in touch</h2>
                <p className="text-blue-100 mb-12 leading-relaxed">
                  Have questions about how it works? Our team is here to help you 24/7.
                </p>

                <div className="space-y-6">
                  {[
                    { icon: <Mail className="w-5 h-5" />, label: "Email us at", value: "support@ridesharehub.com" },
                    { icon: <Phone className="w-5 h-5" />, label: "Call us", value: "+91 98765 43210" },
                    { icon: <MapPin className="w-5 h-5" />, label: "Our Office", value: "Hyderabad, India" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-xl bg-white/10 flex items-center justify-center backdrop-blur-sm">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs text-blue-200">{item.label}</p>
                        <p className="font-semibold">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-blue-500/30 blur-xl" />
            </div>

            <div className="lg:w-3/5 p-12">
              <form onSubmit={handleContact} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" placeholder="John" required className="h-11" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" placeholder="Doe" required className="h-11" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" required className="h-11" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="How can we help?" required className="h-11" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Type your message here..." className="h-32 resize-none" required />
                </div>
                <Button
                  type="submit"
                  disabled={contactLoading}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white h-12 text-lg font-bold rounded-xl shadow-lg shadow-blue-200/50"
                >
                  {contactLoading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
