"use client";

import Link from "next/link";
import { Dumbbell, LayoutDashboard } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6">
            <div className="glass flex items-center justify-between w-full max-w-6xl px-6 py-3 rounded-full">
                <Link href="/" className="flex items-center gap-2 group">
                    <Dumbbell className="w-8 h-8 text-primary transition-transform group-hover:rotate-12" />
                    <span className="text-xl font-bold tracking-tighter uppercase italic">Titan Gym</span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">Features</Link>
                    <Link href="#membership" className="text-sm font-medium hover:text-primary transition-colors">Membership</Link>
                    <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</Link>
                </div>

                <Link
                    href="/dashboard"
                    className="flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all hover:scale-105"
                >
                    <LayoutDashboard className="w-4 h-4" />
                    <span>Go to POS</span>
                </Link>
            </div>
        </nav>
    );
}
