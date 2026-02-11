"use client";

import { Card } from "@/components/Card";
import { TrendingUp, Users, Package, DollarSign, ArrowUpRight, CheckCircle2, Calendar } from "lucide-react";
import { useAppContext } from "@/context/AppContext";
import Link from "next/link";

export default function DashboardOverview() {
    const { sales, members, products, attendance } = useAppContext();

    const totalRevenue = sales.reduce((acc, sale) => acc + sale.total, 0);
    const activeMembers = members.filter(m => m.status === "active").length;
    const lowStockProducts = products.filter(p => p.stock < 20).length;
    const salesTodayCount = sales.filter(s => s.date === new Date().toISOString().split('T')[0]).length;

    const stats = [
        { label: "Total Revenue", value: `$${totalRevenue.toFixed(2)}`, icon: DollarSign, color: "text-green-500", trend: "+12.5%" },
        { label: "Active Members", value: activeMembers.toString(), icon: Users, color: "text-blue-500", trend: `+${members.filter(m => m.joinedDate.startsWith('2024-03')).length}` },
        { label: "Low Stock Items", value: lowStockProducts.toString(), icon: Package, color: "text-yellow-500", trend: lowStockProducts > 0 ? "Action needed" : "Healthy" },
        { label: "Sales Today", value: salesTodayCount.toString(), icon: TrendingUp, color: "text-primary", trend: "+18%" },
    ];

    // Data for the custom chart (dummy daily sales)
    const chartData = [40, 70, 45, 90, 65, 85, 100]; // Height percentages
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    const recentSales = [...sales].reverse().slice(0, 5);
    const recentAttendance = attendance.slice(0, 5);

    return (
        <div className="space-y-8 pb-10">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <Card key={i} className="relative overflow-hidden group hover:neon-border transition-all">
                        <div className="flex justify-between items-start mb-4">
                            <div className={cn("p-2 rounded-xl bg-white/5", stat.color)}>
                                <stat.icon className="w-5 h-5" />
                            </div>
                            <span className="text-[10px] font-black text-primary flex items-center gap-1 uppercase">
                                {stat.trend}
                                <ArrowUpRight className="w-3 h-3" />
                            </span>
                        </div>
                        <div className="space-y-1">
                            <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-black">{stat.label}</p>
                            <p className="text-3xl font-black italic tracking-tighter">{stat.value}</p>
                        </div>
                    </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Revenue Overview Chart */}
                <Card className="lg:col-span-2 flex flex-col">
                    <div className="flex justify-between items-center mb-10">
                        <div>
                            <h3 className="text-2xl font-black uppercase italic tracking-tighter">Revenue Overview</h3>
                            <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest mt-1">Weekly Performance</p>
                        </div>
                        <div className="flex gap-2 text-[10px] font-black uppercase">
                            <span className="flex items-center gap-1.5 px-3 py-1.5 bg-primary/10 text-primary rounded-full border border-primary/20">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                Revenue
                            </span>
                        </div>
                    </div>

                    <div className="flex-grow flex items-end justify-between gap-4 h-64 px-4 pt-10">
                        {chartData.map((val, i) => (
                            <div key={i} className="flex-grow flex flex-col items-center gap-4 group">
                                <div className="relative w-full flex justify-center">
                                    <div
                                        className="w-full max-w-[40px] bg-white/5 group-hover:bg-primary/20 rounded-t-xl transition-all duration-500 ease-out border-t border-x border-white/5 group-hover:border-primary/40 relative overflow-hidden"
                                        style={{ height: `${val}%` }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-primary/5 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                    <div className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform bg-primary text-primary-foreground text-[10px] font-black px-2 py-1 rounded-lg shadow-xl uppercase italic">
                                        ${(val * 12.5).toFixed(0)}
                                    </div>
                                </div>
                                <span className="text-[10px] font-black uppercase text-muted-foreground group-hover:text-white transition-colors tracking-widest">{days[i]}</span>
                            </div>
                        ))}
                    </div>
                </Card>

                {/* Quick Actions / Activity */}
                <div className="space-y-8">
                    <Card className="bg-primary/5 border-primary/20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <CheckCircle2 className="w-20 h-20 text-primary" />
                        </div>
                        <h3 className="text-lg font-black uppercase italic mb-4 relative z-10">Recent Check-ins</h3>
                        <div className="space-y-4 relative z-10">
                            {recentAttendance.map((record) => (
                                <div key={record.id} className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/5 animate-fade-in-up">
                                    <div className="w-8 h-8 rounded-xl bg-green-500/20 flex items-center justify-center text-green-500">
                                        <CheckCircle2 className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-black uppercase italic tracking-tight">{record.memberName}</p>
                                        <p className="text-[9px] text-muted-foreground font-bold uppercase">{new Date(record.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                                    </div>
                                </div>
                            ))}
                            {recentAttendance.length === 0 && (
                                <div className="text-center py-6 text-muted-foreground text-[10px] font-black uppercase italic border border-dashed border-white/10 rounded-2xl">
                                    No activity recorded
                                </div>
                            )}
                        </div>
                    </Card>

                    <Card>
                        <h3 className="text-lg font-black uppercase italic mb-6">Demo Quick Links</h3>
                        <div className="grid grid-cols-2 gap-3">
                            <Link href="/dashboard/billing" className="p-4 bg-primary text-primary-foreground rounded-2xl flex flex-col items-center justify-center gap-2 hover:translate-y-[-2px] transition-all shadow-lg text-center">
                                <DollarSign className="w-5 h-5" />
                                <span className="text-[10px] font-black uppercase leading-none">Billing & POS</span>
                            </Link>
                            <Link href="/dashboard/members" className="p-4 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center justify-center gap-2 hover:bg-white/10 transition-all text-center">
                                <Users className="w-5 h-5" />
                                <span className="text-[10px] font-black uppercase leading-none">Members</span>
                            </Link>
                        </div>
                    </Card>
                </div>
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                    <div className="flex justify-between items-center mb-8">
                        <h3 className="text-xl font-black uppercase italic tracking-tighter">Transaction History</h3>
                        <Link href="/dashboard/sales" className="text-[10px] font-black uppercase text-primary hover:underline">View All</Link>
                    </div>
                    <div className="space-y-4">
                        {recentSales.map((sale) => (
                            <div key={sale.id} className="flex justify-between items-center p-4 rounded-[2rem] bg-white/5 border border-white/5 hover:border-primary/20 transition-all group">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black italic shadow-inner group-hover:scale-110 transition-transform">
                                        {sale.type === "membership" ? "M" : "P"}
                                    </div>
                                    <div>
                                        <p className="text-sm font-black uppercase italic tracking-tight">{sale.type === "membership" ? "Membership Plan" : "Retail Product"}</p>
                                        <div className="flex items-center gap-2 mt-0.5">
                                            <Calendar className="w-3 h-3 text-muted-foreground" />
                                            <span className="text-[10px] text-muted-foreground font-bold uppercase">{sale.date}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-xl font-black italic text-white tracking-tighter">${sale.total.toFixed(2)}</p>
                                    <p className="text-[9px] uppercase text-primary font-black tracking-widest mt-0.5 bg-primary/10 px-2 py-0.5 rounded-full inline-block">Verified</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>

                <Card className="bg-gradient-to-br from-neutral-900 to-black overflow-hidden relative border-primary/10">
                    <div className="absolute -bottom-10 -right-10 opacity-5 grayscale group-hover:grayscale-0 transition-all duration-1000">
                        <Package className="w-64 h-64 text-primary" />
                    </div>
                    <h3 className="text-xl font-black uppercase italic mb-8 relative z-10">Stock Alerts</h3>
                    <div className="space-y-4 relative z-10">
                        {products.filter(p => p.stock < 20).slice(0, 4).map(p => (
                            <div key={p.id} className="flex justify-between items-center p-4 bg-red-500/5 border border-red-500/10 rounded-2xl animate-fade-in-up">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center text-red-500">
                                        <Package className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-black uppercase italic leading-none">{p.name}</p>
                                        <p className="text-[10px] text-muted-foreground font-bold uppercase mt-1.5">{p.category}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-lg font-black text-red-500">{p.stock} Units</p>
                                    <p className="text-[10px] uppercase font-black text-red-400/50 mt-0.5 tracking-tighter">Restock needed</p>
                                </div>
                            </div>
                        ))}
                        {products.filter(p => p.stock < 20).length === 0 && (
                            <div className="text-center py-10 italic text-muted-foreground text-xs font-bold uppercase tracking-widest">
                                All inventory levels normal
                            </div>
                        )}
                    </div>
                </Card>
            </div>
        </div>
    );
}

// Inline helper for convenience in this specific file
function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(" ");
}
