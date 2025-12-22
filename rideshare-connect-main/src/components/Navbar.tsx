"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Car, Search, PlusCircle, User, Menu, LogOut } from "lucide-react";
import { useState, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { getCurrentUser, logout } from "@/actions/auth";
import { useRouter, usePathname } from "next/navigation";
import { toast } from "sonner";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    async function checkUser() {
      const userData = await getCurrentUser();
      setUser(userData);
    }
    checkUser();
  }, [pathname]);

  const handleLogout = async () => {
    await logout();
    setUser(null);
    toast.success("Logged out successfully");
    router.push("/");
  };

  const navLinks = [
    { href: "/find-ride", label: "Find Ride", icon: <Search className="w-4 h-4" /> },
    { href: "/offer-ride", label: "Offer Ride", icon: <PlusCircle className="w-4 h-4" /> },
    { href: "/about", label: "About", icon: null },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Car className="h-6 w-6 text-blue-600" />
          <span className="text-xl font-bold tracking-tight text-blue-900">
            RideShare Hub
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-1"
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
          <div className="h-6 w-px bg-gray-200" />

          {user ? (
            <div className="flex items-center gap-4">
              <Link href="/profile">
                <Button variant="ghost" size="sm" className="text-gray-600 flex gap-2">
                  <User className="h-4 w-4" />
                  My Profile
                </Button>
              </Link>
              <Button variant="ghost" size="sm" onClick={handleLogout} className="text-red-500 hover:text-red-600">
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <>
              <Link href="/login">
                <Button variant="ghost" size="sm" className="text-gray-600">
                  Log in
                </Button>
              </Link>
              <Link href="/register">
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Sign up
                </Button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-8 mt-8">
                <div className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium text-gray-900 hover:text-blue-600 transition-colors flex items-center gap-3"
                    >
                      {link.icon && <span className="text-blue-600">{link.icon}</span>}
                      {link.label}
                    </Link>
                  ))}
                </div>
                <div className="flex flex-col gap-3 border-t pt-8">
                  {user ? (
                    <>
                      <Link href="/profile" onClick={() => setIsOpen(false)}>
                        <Button variant="outline" className="w-full justify-start gap-2">
                          <User className="h-4 w-4" />
                          My Profile
                        </Button>
                      </Link>
                      <Button variant="ghost" onClick={() => { handleLogout(); setIsOpen(false); }} className="w-full justify-start gap-2 text-red-500">
                        <LogOut className="h-4 w-4" />
                        Log out
                      </Button>
                    </>
                  ) : (
                    <>
                      <Link href="/login" onClick={() => setIsOpen(false)}>
                        <Button variant="outline" className="w-full justify-start gap-2">
                          <User className="h-4 w-4" />
                          Log in
                        </Button>
                      </Link>
                      <Link href="/register" onClick={() => setIsOpen(false)}>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                          Sign up
                        </Button>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
