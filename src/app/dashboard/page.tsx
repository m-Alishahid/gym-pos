import { Card } from "@/components/Card";
import { TrendingUp, Users, Package, DollarSign, ArrowUpRight } from "lucide-react";
import { MOCK_SALES, MOCK_MEMBERS, MOCK_PRODUCTS } from "@/lib/data";

export default function DashboardOverview() {
    const totalRevenue = MOCK_SALES.reduce((acc, sale) => acc + sale.total, 0);
    const activeMembers = MOCK_MEMBERS.filter(m => m.status === "active").length;
    const lowStockProducts = MOCK_PRODUCTS.filter(p => p.stock < 20).length;

    const stats = [
        { label: "Total Revenue", value: `$${totalRevenue.toFixed(2)}`, icon: DollarSign, color: "text-green-500", trend: "+12.5%" },
        { label: "Active Members", value: activeMembers.toString(), icon: Users, color: "text-blue-500", trend: "+4" },
        { label: "Inventory Alerts", value: lowStockProducts.toString(), icon: Package, color: "text-yellow-500", trend: "Critical" },
        { label: "Sales Today", value: "24", icon: TrendingUp, color: "text-primary", trend: "+18%" },
    ];

    return (
        <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <Card key={i} className="relative overflow-hidden group hover:neon-border transition-all">
                        <div className="flex justify-between items-start mb-4">
                            <div className={cn("p-2 rounded-xl bg-white/5", stat.color)}>
                                <stat.icon className="w-6 h-6" />
                            </div>
                            <span className="text-xs font-bold text-primary flex items-center gap-1">
                                {stat.trend}
                                <ArrowUpRight className="w-3 h-3" />
                            </span>
                        </div>
                        <div className="space-y-1">
                            <p className="text-sm text-muted-foreground uppercase tracking-wider font-medium">{stat.label}</p>
                            <p className="text-3xl font-black italic">{stat.value}</p>
                        </div>
                    </Card>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Activity */}
                <Card className="lg:col-span-2">
                    <h3 className="text-xl font-black uppercase italic mb-6">Recent Transactions</h3>
                    <div className="space-y-4">
                        {MOCK_SALES.map((sale) => (
                            <div key={sale.id} className="flex justify-between items-center p-4 rounded-3xl bg-white/5 border border-white/5 hover:border-primary/20 transition-all">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                                        {sale.type === "membership" ? "M" : "P"}
                                    </div>
                                    <div>
                                        <p className="font-bold uppercase italic text-sm">{sale.type === "membership" ? "Membership Renewal" : "Product Sale"}</p>
                                        <p className="text-xs text-muted-foreground">{sale.date}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="font-black">${sale.total.toFixed(2)}</p>
                                    <p className="text-[10px] uppercase text-primary font-bold">Completed</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>

                {/* Quick Actions */}
                <Card>
                    <h3 className="text-xl font-black uppercase italic mb-6">Quick Actions</h3>
                    <div className="space-y-3">
                        <button className="w-full py-4 glass text-foreground rounded-2xl font-bold hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center gap-2 group">
                            <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            New Member
                        </button>
                        <button className="w-full py-4 glass text-foreground rounded-2xl font-bold hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center gap-2 group">
                            <DollarSign className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            New Sale
                        </button>
                        <button className="w-full py-4 glass text-foreground rounded-2xl font-bold hover:bg-primary hover:text-primary-foreground transition-all flex items-center justify-center gap-2 group">
                            <Package className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            Add Inventory
                        </button>
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
