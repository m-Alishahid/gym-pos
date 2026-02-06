"use client";

import { useState } from "react";
import { Card } from "@/components/Card";
import { MOCK_PRODUCTS } from "@/lib/data";
import { Plus, Minus, Receipt, Printer } from "lucide-react";

interface CartItem {
    productId: string;
    name: string;
    price: number;
    quantity: number;
}

export default function BillingPage() {
    const [cart, setCart] = useState<CartItem[]>([]);

    const addToCart = (productId: string, name: string, price: number) => {
        setCart(prev => {
            const existing = prev.find(item => item.productId === productId);
            if (existing) {
                return prev.map(item =>
                    item.productId === productId
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prev, { productId, name, price, quantity: 1 }];
        });
    };

    const removeFromCart = (productId: string) => {
        setCart(prev => {
            const existing = prev.find(item => item.productId === productId);
            if (existing && existing.quantity > 1) {
                return prev.map(item =>
                    item.productId === productId
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                );
            }
            return prev.filter(item => item.productId !== productId);
        });
    };

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const generateBill = () => {
        // Simple bill generation - in real app, this would print or save
        const bill = {
            items: cart,
            total,
            date: new Date().toISOString(),
        };
        console.log("Generated Bill:", bill);
        alert("Bill generated! Check console for details.");
    };

    return (
        <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Products Section */}
                <Card>
                    <h2 className="text-xl font-bold mb-6 uppercase tracking-widest">Available Products</h2>
                    <div className="space-y-4">
                        {MOCK_PRODUCTS.map((product) => (
                            <div key={product.id} className="flex justify-between items-center p-4 glass rounded-2xl">
                                <div>
                                    <h3 className="font-bold">{product.name}</h3>
                                    <p className="text-sm text-muted-foreground">${product.price.toFixed(2)} | Stock: {product.stock}</p>
                                </div>
                                <button
                                    onClick={() => addToCart(product.id, product.name, product.price)}
                                    className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-colors"
                                >
                                    <Plus className="w-4 h-4" />
                                    Add
                                </button>
                            </div>
                        ))}
                    </div>
                </Card>

                {/* Cart Section */}
                <Card>
                    <h2 className="text-xl font-bold mb-6 uppercase tracking-widest">Current Bill</h2>
                    {cart.length === 0 ? (
                        <p className="text-muted-foreground">No items in cart</p>
                    ) : (
                        <div className="space-y-4">
                            {cart.map((item) => (
                                <div key={item.productId} className="flex justify-between items-center p-4 glass rounded-2xl">
                                    <div>
                                        <h3 className="font-bold">{item.name}</h3>
                                        <p className="text-sm text-muted-foreground">${item.price.toFixed(2)} x {item.quantity}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => removeFromCart(item.productId)}
                                            className="p-2 bg-red-500/20 text-red-500 rounded-lg hover:bg-red-500/30"
                                        >
                                            <Minus className="w-4 h-4" />
                                        </button>
                                        <span className="font-bold">{item.quantity}</span>
                                        <button
                                            onClick={() => addToCart(item.productId, item.name, item.price)}
                                            className="p-2 bg-green-500/20 text-green-500 rounded-lg hover:bg-green-500/30"
                                        >
                                            <Plus className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                            <div className="border-t border-white/5 pt-4">
                                <div className="flex justify-between items-center text-xl font-black">
                                    <span>Total:</span>
                                    <span>${total.toFixed(2)}</span>
                                </div>
                            </div>
                            <button
                                onClick={generateBill}
                                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-2xl hover:bg-primary/90 transition-colors font-bold"
                            >
                                <Printer className="w-5 h-5" />
                                Generate Bill
                            </button>
                        </div>
                    )}
                </Card>
            </div>
        </div>
    );
}
