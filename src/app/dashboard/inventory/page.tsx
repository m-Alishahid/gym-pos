"use client";

import { Card } from "@/components/Card";
import { MOCK_PRODUCTS } from "@/lib/data";
import { div } from "framer-motion/client";
import { Package, Plus, Search, AlertCircle } from "lucide-react";

export default function InventoryPage() {
    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center bg-white/5 p-4 rounded-3xl border border-white/5">
                <div className="relative flex-grow max-w-md">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="w-full bg-black/20 border border-white/10 rounded-2xl py-2 pl-12 pr-4 text-sm focus:outline-none focus:border-primary transition-all"
                    />
                </div>
                <button className="flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground rounded-2xl font-bold hover:bg-primary/90 transition-all">
                    <Plus className="w-4 h-4" />
                    Add Product
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {MOCK_PRODUCTS.map((product) => (
                    <Card key={product.id} className="group hover:neon-border transition-all">
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                                <Package className="w-6 h-6" />
                            </div>
                            {product.stock < 20 && (
                                <div className="flex items-center gap-1 text-[10px] font-black text-yellow-500 uppercase bg-yellow-500/10 px-2 py-1 rounded-full">
                                    <AlertCircle className="w-3 h-3" />
                                    Low Stock
                                </div>
                            )}
                        </div>

                        <h3 className="text-xl font-black uppercase italic mb-1">{product.name}</h3>
                        <p className="text-xs text-muted-foreground uppercase mb-6">{product.category}</p>

                        <div className="flex justify-between items-end border-t border-white/5 pt-4 mt-auto">
                            <div>
                                <p className="text-[10px] uppercase text-muted-foreground font-bold mb-1">Stock Level</p>
                                <p className="text-lg font-black">{product.stock} Units</p>
                            </div>
                            <div className="text-right">
                                <p className="text-[10px] uppercase text-muted-foreground font-bold mb-1">Price</p>
                                <p className="text-lg font-black text-primary">${product.price}</p>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>


        </div>
    );
}

