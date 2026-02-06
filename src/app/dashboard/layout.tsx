"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    Dumbbell,
    LayoutDashboard,
    Users,
    Package,
    TrendingUp,
    Receipt,
    Settings,
    ChevronLeft
} from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
    { icon: LayoutDashboard, label: "Overview", href: "/dashboard" },
    { icon: Users, label: "Members", href: "/dashboard/members" },
    { icon: TrendingUp, label: "Sales", href: "/dashboard/sales" },
    { icon: Package, label: "Inventory", href: "/dashboard/inventory" },
    { icon: Receipt, label: "Billing", href: "/dashboard/billing" },
];

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    return (
        <div className="flex min-h-screen bg-background">
            {/* Sidebar */}
            <aside className="w-64 border-r border-white/5 flex flex-col p-6 fixed inset-y-0 left-0 bg-background/50 backdrop-blur-xl z-20">
                <div className="flex items-center gap-2 mb-12 px-2">
                    <Dumbbell className="w-8 h-8 text-primary" />
                    <span className="text-xl font-bold tracking-tighter uppercase italic">Titan POS</span>
                </div>

                <nav className="flex-grow space-y-2">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 px-4 py-3 rounded-2xl transition-all font-medium",
                                pathname === item.href
                                    ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(var(--primary),0.3)]"
                                    : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                            )}
                        >
                            <item.icon className="w-5 h-5" />
                            {item.label}
                        </Link>
                    ))}
                </nav>

                <div className="mt-auto space-y-2">
                    <Link
                        href="/"
                        className="flex items-center gap-3 px-4 py-3 rounded-2xl text-muted-foreground hover:bg-white/5 hover:text-foreground transition-all"
                    >
                        <ChevronLeft className="w-5 h-5" />
                        Back to Site
                    </Link>
                    <button className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-muted-foreground hover:bg-white/5 hover:text-foreground transition-all">
                        <Settings className="w-5 h-5" />
                        Settings
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-grow ml-64 p-8">
                <header className="flex justify-between items-center mb-12">
                    <div>
                        <h1 className="text-3xl font-black uppercase italic tracking-tight">
                            {NAV_ITEMS.find(n => n.href === pathname)?.label || "Dashboard"}
                        </h1>
                        <p className="text-muted-foreground text-sm">Welcome back, Administrator.</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="glass px-4 py-2 rounded-full text-xs font-bold text-primary neon-border">SYSTEM ACTIVE</div>
                        <div className="w-10 h-10 rounded-full bg-primary/20 border border-primary/20" />
                    </div>
                </header>

                {children}
            </main>
        </div>
    );
}
