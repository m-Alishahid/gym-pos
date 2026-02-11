"use client";

import { Card } from "@/components/Card";
import { useAppContext } from "@/context/AppContext";
import { FileDown, Calendar } from "lucide-react";

export default function SalesPage() {
    const { sales } = useAppContext();
    const totalSales = sales.reduce((acc, s) => acc + s.total, 0);

    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="md:col-span-2 flex justify-between items-center bg-primary/5 border-primary/20">
                    <div>
                        <p className="text-sm text-muted-foreground mb-1 font-bold uppercase tracking-widest">Total Revenue (All Time)</p>
                        <h2 className="text-4xl font-black italic">${totalSales.toFixed(2)}</h2>
                    </div>
                    <button className="flex items-center gap-2 px-6 py-3 glass rounded-2xl font-bold hover:bg-white/10 transition-all text-sm">
                        <FileDown className="w-4 h-4" />
                        Export Report
                    </button>
                </Card>

                <Card className="flex flex-col justify-center">
                    <div className="flex items-center gap-3 text-primary mb-2">
                        <Calendar className="w-5 h-5" />
                        <span className="text-xs font-bold uppercase">Current Period</span>
                    </div>
                    <p className="text-lg font-black italic">{new Date().toLocaleString('default', { month: 'long', year: 'numeric' })}</p>
                </Card>
            </div>

            <Card>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-white/5 uppercase text-[10px] font-black text-muted-foreground tracking-widest">
                                <th className="pb-4 px-2">Transaction ID</th>
                                <th className="pb-4 px-2">Date</th>
                                <th className="pb-4 px-2">Type</th>
                                <th className="pb-4 px-2">Total Amount</th>
                                <th className="pb-4 px-2">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {[...sales].reverse().map((sale) => (
                                <tr key={sale.id} className="group hover:bg-white/5 transition-colors">
                                    <td className="py-4 px-2 font-mono text-xs uppercase">TXN-{sale.id.slice(-6)}</td>
                                    <td className="py-4 px-2 text-sm">{sale.date}</td>
                                    <td className="py-4 px-2">
                                        <span className={`text-[10px] font-black px-2 py-1 rounded-full uppercase ${sale.type === 'membership' ? 'bg-blue-500/10 text-blue-500' : 'bg-green-500/10 text-green-500'
                                            }`}>
                                            {sale.type}
                                        </span>
                                    </td>
                                    <td className="py-4 px-2 font-black">${sale.total.toFixed(2)}</td>
                                    <td className="py-4 px-2">
                                        <div className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                                            <span className="text-xs font-bold uppercase text-green-500">Completed</span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {sales.length === 0 && (
                                <tr>
                                    <td colSpan={5} className="py-20 text-center italic text-muted-foreground text-xs font-bold uppercase"> No transactions recorded yet</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </Card>
        </div>
    );
}
