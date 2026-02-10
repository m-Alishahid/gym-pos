"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Dumbbell, LayoutDashboard, Menu, X, Zap } from "lucide-react";
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
        isScrolled ? "py-2" : "py-4"
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
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div
          className={cn(
            "glass flex items-center justify-between w-full transition-all duration-500",
            isScrolled ? "rounded-xl px-4 py-2.5" : "rounded-2xl px-5 py-3"
          )}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className={`w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform duration-300`}>
                <Dumbbell className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 md:w-3 md:h-3 bg-green-500 rounded-full border-2 border-black animate-pulse" />
            </div>
            <div className="flex items-center gap-1">
              <span className="text-sm md:text-xl font-black tracking-tighter uppercase italic text-luxury">GYM</span>
              <span className="text-sm md:text-xl font-black tracking-tighter uppercase italic text-primary">PRO</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Link
            href="/dashboard"
            className="hidden md:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-full font-bold text-sm hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
          >
            <LayoutDashboard className="w-4 h-4" />
            <span>POS System</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 glass rounded-lg hover:bg-white/10 transition-all duration-300"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 glass rounded-2xl p-4 md:hidden animate-fade-in-up">
            <div className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-2 text-sm font-medium text-muted-foreground hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 border-t border-white/10">
                <Link
                  href="/dashboard"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-2.5 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-bold text-sm transition-all duration-300"
                >
                  <LayoutDashboard className="w-4 h-4" />
                  <span>POS System</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
