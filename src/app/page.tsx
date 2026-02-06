"use client";

import { Navbar } from "@/components/Navbar";
import { ArrowRight, Trophy, Zap, Users, Plus, Minus, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";
import { MOCK_PRODUCTS } from "@/lib/data";
import { useState } from "react";

interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
}

export default function Home() {
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

  return (
    <div className="relative min-h-screen overflow-hidden">
      <Navbar />

      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/20 blur-[120px] -z-10 rounded-full" />
      <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-neon-green/10 blur-[100px] -z-10 rounded-full" />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-bold uppercase tracking-widest mb-8">
          <Zap className="w-3 h-3 fill-primary" />
          Next Generation Fitness
        </div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-8 max-w-4xl text-gradient uppercase italic">
          Forge Your <span className="text-primary italic">Legacy</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl leading-relaxed">
          The most advanced POS and management system for premium gym facilities. Integrated revenue tracking, sales, and inventory management.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold text-lg hover:bg-primary/90 transition-all hover:scale-105 flex items-center gap-2">
            Start Training Now
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="px-8 py-4 glass text-foreground rounded-full font-bold text-lg hover:bg-white/10 transition-all">
            View POS Demo
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-12 mb-32">
          {[
            { icon: Users, label: "Active Members", value: "2,500+", color: "text-blue-500" },
            { icon: Trophy, label: "Expert Trainers", value: "50+", color: "text-primary" },
            { icon: Zap, label: "Equipment Sets", value: "200+", color: "text-neon-green" },
          ].map((stat, i) => (
            <div key={i} className="glass p-8 rounded-3xl text-center group hover:neon-border transition-all duration-300">
              <stat.icon className={`w-10 h-10 mx-auto mb-4 ${stat.color}`} />
              <div className="text-3xl font-black mb-1">{stat.value}</div>
              <div className="text-muted-foreground text-sm font-medium uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <section id="features" className="w-full py-20 border-t border-white/5">
          <h2 className="text-4xl md:text-5xl font-black mb-16 uppercase italic">Elite <span className="text-primary italic">Features</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Smart POS", desc: "Process payments and memberships instantly.", icon: Zap },
              { title: "Inventory", desc: "Real-time stock tracking and alerts.", icon: Trophy },
              { title: "Revenue", desc: "Detailed financial insights and logs.", icon: ArrowRight },
              { title: "Management", desc: "Seamless member and staff control.", icon: Users },
            ].map((f, i) => (
              <div key={i} className="glass p-6 rounded-3xl text-left border border-white/5 hover:border-primary/50 transition-all">
                <f.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Membership Section */}
        <section id="membership" className="w-full py-20 border-t border-white/5">
          <h2 className="text-4xl md:text-5xl font-black mb-16 uppercase italic">Join the <span className="text-primary italic">Elite</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Starter", price: "$49", features: ["Access to Gym", "Mobile App", "Basic Support"], primary: false },
              { name: "Pro", price: "$99", features: ["24/7 Access", "Personal Trainer", "Pool & Sauna", "Nutrition Plan"], primary: true },
              { name: "Elite", price: "$199", features: ["VIP Lounge", "Private Locker", "unlimited classes", "Recovery Spa"], primary: false },
            ].map((plan, i) => (
              <div key={i} className={cn("glass p-8 rounded-[40px] flex flex-col border border-white/5 relative overflow-hidden", plan.primary && "neon-border scale-105 z-10")}>
                {plan.primary && <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] font-bold px-4 py-1 uppercase tracking-tighter">Most Popular</div>}
                <div className="text-xl font-black mb-2 uppercase italic">{plan.name}</div>
                <div className="text-4xl font-black mb-8">{plan.price}<span className="text-sm font-normal text-muted-foreground">/mo</span></div>
                <ul className="space-y-4 mb-8 text-left flex-grow">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Zap className="w-3 h-3 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button className={cn("w-full py-3 rounded-full font-bold transition-all", plan.primary ? "bg-primary text-primary-foreground hover:bg-primary/90" : "glass hover:bg-white/10")}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* POS Section */}
        <section id="pos" className="w-full py-20 border-t border-white/5">
          <h2 className="text-4xl md:text-5xl font-black mb-16 uppercase italic">Gym <span className="text-primary italic">Store</span></h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Products */}
            <div>
              <h3 className="text-2xl font-bold mb-8 uppercase tracking-widest">Available Products</h3>
              <div className="space-y-6">
                {MOCK_PRODUCTS.map((product) => (
                  <div key={product.id} className="glass p-6 rounded-3xl flex justify-between items-center">
                    <div>
                      <h4 className="text-xl font-bold">{product.name}</h4>
                      <p className="text-muted-foreground">${product.price.toFixed(2)} | Stock: {product.stock}</p>
                    </div>
                    <button
                      onClick={() => addToCart(product.id, product.name, product.price)}
                      className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-2xl hover:bg-primary/90 transition-all"
                    >
                      <Plus className="w-4 h-4" />
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Cart */}
            <div>
              <h3 className="text-2xl font-bold mb-8 uppercase tracking-widest flex items-center gap-2">
                <ShoppingCart className="w-6 h-6" />
                Your Cart
              </h3>
              {cart.length === 0 ? (
                <div className="glass p-8 rounded-3xl text-center">
                  <ShoppingCart className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.productId} className="glass p-6 rounded-3xl flex justify-between items-center">
                      <div>
                        <h4 className="font-bold">{item.name}</h4>
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
                  <div className="glass p-6 rounded-3xl border-t border-white/5">
                    <div className="flex justify-between items-center text-2xl font-black">
                      <span>Total:</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                    <button className="w-full mt-4 px-6 py-3 bg-primary text-primary-foreground rounded-2xl hover:bg-primary/90 transition-all font-bold">
                      Checkout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
