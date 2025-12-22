"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Globe, CheckCircle2, Users, Heart, Target } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
  const stats = [
    { icon: <Users className="w-6 h-6 text-blue-600" />, label: "Community Members", value: "100,000+" },
    { icon: <Globe className="w-6 h-6 text-blue-600" />, label: "Cities Covered", value: "250+" },
    { icon: <Heart className="w-6 h-6 text-blue-600" />, label: "Positive Reviews", value: "4.9/5" },
    { icon: <Target className="w-6 h-6 text-blue-600" />, label: "Carbon Offset", value: "2,500 Tons" },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-blue-900 text-white py-20 lg:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Driving Change, <br />
              One Ride at a Time.
            </h1>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              RideShare Hub was founded with a simple mission: to make travel more sustainable, affordable, and social for everyone.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <Globe className="w-full h-full scale-150 rotate-12" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-blue-50 rounded-2xl">
                  {stat.icon}
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-1">{stat.value}</h3>
                <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-6">Our Core Values</h2>
              <div className="space-y-6">
                {[
                  { title: "Trust & Safety", desc: "We prioritize the security of our community through verification and ratings." },
                  { title: "Sustainability", desc: "Reducing cars on the road means lower emissions and a healthier planet." },
                  { title: "Community First", desc: "We believe in the power of sharing and connecting people during their journeys." }
                ].map((value, i) => (
                  <div key={i} className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-blue-900 mb-1">{value.title}</h4>
                      <p className="text-gray-600">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="h-48 rounded-2xl bg-blue-100" />
                <div className="h-64 rounded-2xl bg-blue-600" />
              </div>
              <div className="space-y-4 pt-8">
                <div className="h-64 rounded-2xl bg-blue-200" />
                <div className="h-48 rounded-2xl bg-blue-50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-[2rem] shadow-2xl border border-slate-100 overflow-hidden flex flex-col lg:flex-row">
            <div className="lg:w-2/5 bg-blue-600 p-12 text-white">
              <h2 className="text-3xl font-bold mb-6">Get in touch</h2>
              <p className="text-blue-100 mb-12">
                Have questions about how it works? Our team is here to help you 24/7.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-200">Email us at</p>
                    <p className="font-bold">support@ridesharehub.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-200">Call us</p>
                    <p className="font-bold">+44 (0) 20 7946 0123</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-blue-200">Our Office</p>
                    <p className="font-bold">London, United Kingdom</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-3/5 p-12">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="How can we help?" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Type your message here..." className="h-32" />
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 text-lg font-bold rounded-xl">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
