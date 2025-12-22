import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Toaster } from "@/components/ui/sonner";

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
      <body className="antialiased min-h-screen flex flex-col bg-slate-50">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Toaster />
        <footer className="border-t bg-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <h3 className="text-xl font-bold text-blue-900 mb-4">RideShare Hub</h3>
                <p className="text-gray-600 max-w-sm">
                  Connecting drivers and passengers for a sustainable and cost-effective travel experience. Join our community and start sharing today.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="/find-ride" className="text-gray-600 hover:text-blue-600">Find a Ride</a></li>
                  <li><a href="/offer-ride" className="text-gray-600 hover:text-blue-600">Offer a Ride</a></li>
                  <li><a href="/about" className="text-gray-600 hover:text-blue-600">About Us</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Support</h4>
                <ul className="space-y-2">
                  <li><a href="/contact" className="text-gray-600 hover:text-blue-600">Contact Us</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-blue-600">Privacy Policy</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-blue-600">Terms of Service</a></li>
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t text-center text-gray-500 text-sm">
              © {new Date().getFullYear()} RideShare Hub. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
