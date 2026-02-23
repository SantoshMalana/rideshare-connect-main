import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";
import Link from "next/link";
import { Car, Github, Twitter, Linkedin, Mail, ArrowRight } from "lucide-react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "RideShare Hub | Carpooling & Ride Sharing Platform",
  description: "Share rides, save money, and reduce traffic with our modern carpooling platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col bg-slate-50`}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Toaster />

        {/* ─── Premium Footer ─── */}
        <footer className="relative bg-slate-900 text-white overflow-hidden">
          {/* Gradient accent line */}
          <div className="h-1 w-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600" />

          <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {/* Brand */}
              <div className="lg:col-span-1">
                <Link href="/" className="flex items-center gap-2 mb-4">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-2 rounded-xl">
                    <Car className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-xl font-bold tracking-tight">RideShare Hub</span>
                </Link>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Connecting drivers and passengers for a sustainable and affordable travel experience.
                </p>
                <div className="flex items-center gap-3">
                  {[
                    { icon: <Twitter className="h-4 w-4" />, href: "#" },
                    { icon: <Github className="h-4 w-4" />, href: "#" },
                    { icon: <Linkedin className="h-4 w-4" />, href: "#" },
                  ].map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      className="w-9 h-9 rounded-full bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors duration-200"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold text-sm uppercase tracking-wider text-slate-300 mb-5">Quick Links</h4>
                <ul className="space-y-3">
                  {[
                    { label: "Find a Ride", href: "/find-ride" },
                    { label: "Offer a Ride", href: "/offer-ride" },
                    { label: "About Us", href: "/about" },
                    { label: "My Profile", href: "/profile" },
                  ].map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-1 group">
                        <ArrowRight className="h-3 w-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div>
                <h4 className="font-semibold text-sm uppercase tracking-wider text-slate-300 mb-5">Support</h4>
                <ul className="space-y-3">
                  {[
                    { label: "Contact Us", href: "/about#contact" },
                    { label: "Privacy Policy", href: "#" },
                    { label: "Terms of Service", href: "#" },
                    { label: "FAQ", href: "#" },
                  ].map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="text-slate-400 hover:text-white transition-colors text-sm flex items-center gap-1 group">
                        <ArrowRight className="h-3 w-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div>
                <h4 className="font-semibold text-sm uppercase tracking-wider text-slate-300 mb-5">Stay Updated</h4>
                <p className="text-slate-400 text-sm mb-4">Get the latest news and ride offers straight to your inbox.</p>
                <form className="flex gap-2" action="#">
                  <div className="relative flex-grow">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-10 pr-3 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 rounded-lg text-sm font-semibold transition-colors shrink-0"
                  >
                    Join
                  </button>
                </form>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-slate-500 text-sm">
                © {new Date().getFullYear()} RideShare Hub. All rights reserved.
              </p>
              <p className="text-slate-600 text-xs">
                Built with 💙 for a greener tomorrow.
              </p>
            </div>
          </div>

          {/* Subtle background decoration */}
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-blue-600/5 blur-3xl pointer-events-none" />
          <div className="absolute top-0 left-0 w-60 h-60 rounded-full bg-indigo-600/5 blur-3xl pointer-events-none" />
        </footer>
      </body>
    </html>
  );
}
