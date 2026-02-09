"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Dumbbell, LayoutDashboard, Menu, X, Zap, Star, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#services", label: "Programs" },
  { href: "#trainers", label: "Trainers" },
  { href: "#membership", label: "Membership" },
  { href: "#contact", label: "Contact" }
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "py-3" : "py-6"
      )}
    >
      {/* Background blur */}
      <div
        className={cn(
          "absolute inset-0 transition-all duration-500",
          isScrolled ? "bg-black/60 backdrop-blur-xl" : "bg-transparent"
        )}
      />

      {/* Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div
          className={cn(
            "glass flex items-center justify-between w-full transition-all duration-500",
            isScrolled ? "rounded-2xl px-6 py-3" : "rounded-full px-8 py-4"
          )}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform duration-300">
                <Dumbbell className="w-5 h-5 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-black animate-pulse" />
            </div>
            <div className="flex items-center gap-1">
              <span className="text-xl font-black tracking-tighter uppercase italic text-luxury">
                GYM
              </span>
              <span className="text-xl font-black tracking-tighter uppercase italic text-primary">
                PRO
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-white hover:bg-white/5 rounded-xl transition-all duration-300 flex items-center gap-1 group"
              >
                <span>{link.label}</span>
                <ChevronDown className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Badge */}
            <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 rounded-full">
              <Zap className="w-3 h-3 text-primary fill-primary animate-pulse" />
              <span className="text-xs font-bold text-primary">Free Trial</span>
            </div>

            {/* Dashboard Button */}
            <Link
              href="/dashboard"
              className="group flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-primary to-accent text-white rounded-full font-bold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>POS System</span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 glass rounded-xl hover:bg-white/10 transition-all duration-300"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 glass rounded-3xl p-6 lg:hidden animate-fade-in-up">
            <div className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-muted-foreground hover:text-white hover:bg-white/5 rounded-xl transition-all duration-300"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/10">
                <Link
                  href="/dashboard"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-bold hover:shadow-lg transition-all duration-300"
                >
                  <LayoutDashboard className="w-4 h-4" />
                  <span>POS</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
