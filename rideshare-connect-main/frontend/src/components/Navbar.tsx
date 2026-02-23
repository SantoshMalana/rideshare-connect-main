"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Car, Search, PlusCircle, User, Menu, LogOut, Info } from "lucide-react";
import { useState, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { getCurrentUser, logout } from "@backend/actions/auth";
import { useRouter, usePathname } from "next/navigation";
import { toast } from "sonner";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    async function checkUser() {
      const userData = await getCurrentUser();
      setUser(userData);
    }
    checkUser();
  }, [pathname]);

  // Scroll-aware styling
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    await logout();
    setUser(null);
    toast.success("Logged out successfully");
    router.push("/");
  };

  const navLinks = [
    { href: "/find-ride", label: "Find Ride", icon: <Search className="w-4 h-4" /> },
    { href: "/offer-ride", label: "Offer Ride", icon: <PlusCircle className="w-4 h-4" /> },
    { href: "/about", label: "About", icon: <Info className="w-4 h-4" /> },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled
          ? "glass-strong shadow-sm border-b border-slate-100"
          : "bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60"
        }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-2 rounded-xl group-hover:shadow-lg group-hover:shadow-blue-200 transition-shadow duration-300">
            <Car className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-blue-900">
            RideShare Hub
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative text-sm font-medium px-4 py-2 rounded-full transition-all duration-200 flex items-center gap-1.5 ${isActive(link.href)
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-600 hover:text-blue-600 hover:bg-slate-50"
                }`}
            >
              {link.icon}
              {link.label}
              {isActive(link.href) && (
                <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-600" />
              )}
            </Link>
          ))}
          <div className="h-6 w-px bg-gray-200 mx-2" />

          {user ? (
            <div className="flex items-center gap-2">
              <Link href="/profile">
                <Button variant="ghost" size="sm" className="text-gray-600 flex gap-2 rounded-full hover:bg-blue-50 hover:text-blue-600">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-[11px] font-bold text-white">
                    {(user.name || user.email || "U").charAt(0).toUpperCase()}
                  </div>
                  <span className="max-w-[100px] truncate">{user.name || "Profile"}</span>
                </Button>
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleLogout}
                className="text-red-400 hover:text-red-600 hover:bg-red-50 rounded-full h-9 w-9"
              >
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link href="/login">
                <Button variant="ghost" size="sm" className="text-gray-600 rounded-full hover:bg-slate-50">
                  Log in
                </Button>
              </Link>
              <Link href="/register">
                <Button size="sm" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full shadow-md shadow-blue-200 hover:shadow-lg hover:shadow-blue-300 transition-shadow">
                  Sign up
                </Button>
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[360px]">
              <div className="flex flex-col gap-8 mt-8">
                {/* Logo in mobile */}
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-2 rounded-xl">
                    <Car className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-lg font-bold tracking-tight text-blue-900">
                    RideShare Hub
                  </span>
                </div>

                <div className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-base font-medium py-3 px-4 rounded-xl transition-all flex items-center gap-3 ${isActive(link.href)
                          ? "text-blue-600 bg-blue-50"
                          : "text-gray-700 hover:text-blue-600 hover:bg-slate-50"
                        }`}
                    >
                      <span className={isActive(link.href) ? "text-blue-600" : "text-slate-400"}>{link.icon}</span>
                      {link.label}
                    </Link>
                  ))}
                </div>
                <div className="flex flex-col gap-3 border-t pt-6">
                  {user ? (
                    <>
                      <Link href="/profile" onClick={() => setIsOpen(false)}>
                        <Button variant="outline" className="w-full justify-start gap-3 h-12 rounded-xl">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-xs font-bold text-white">
                            {(user.name || user.email || "U").charAt(0).toUpperCase()}
                          </div>
                          {user.name || "My Profile"}
                        </Button>
                      </Link>
                      <Button
                        variant="ghost"
                        onClick={() => { handleLogout(); setIsOpen(false); }}
                        className="w-full justify-start gap-3 h-12 rounded-xl text-red-500 hover:text-red-600 hover:bg-red-50"
                      >
                        <LogOut className="h-4 w-4" />
                        Log out
                      </Button>
                    </>
                  ) : (
                    <>
                      <Link href="/login" onClick={() => setIsOpen(false)}>
                        <Button variant="outline" className="w-full justify-center gap-2 h-12 rounded-xl">
                          Log in
                        </Button>
                      </Link>
                      <Link href="/register" onClick={() => setIsOpen(false)}>
                        <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white h-12 rounded-xl">
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
