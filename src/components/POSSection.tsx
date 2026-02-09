"use client";

import { Plus, Minus, ShoppingCart, CreditCard, Trash2, Search, Tag, Package, TrendingUp, Sparkles } from "lucide-react";
import { useState } from "react";
import { MOCK_PRODUCTS } from "@/lib/data";
import { cn } from "@/lib/utils";

interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

const categories = ["All", "Supplements", "Equipment", "Apparel", "Accessories"];

export function POSSection() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = MOCK_PRODUCTS.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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

  const removeItem = (productId: string) => {
    setCart(prev => prev.filter(item => item.productId !== productId));
  };

  const clearCart = () => setCart([]);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 via-transparent to-accent/3" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-secondary/5 to-transparent rounded-full" />

      {/* Section header */}
      <div className="relative z-10 mb-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-bold uppercase tracking-widest mb-6">
            <Sparkles className="w-4 h-4" />
            Gym Store
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6 uppercase italic">
            Premium <span className="text-primary italic relative">
              Products
              <div className="absolute -bottom-3 left-0 right-0 h-2 bg-gradient-to-r from-primary via-accent to-secondary rounded-full animate-pulse" />
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Quality supplements, equipment and apparel for your fitness journey
          </p>
        </div>

        {/* Search and filters */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
          {/* Search */}
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 glass rounded-2xl border border-white/10 focus:border-primary/50 transition-all duration-300 outline-none"
            />
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-bold transition-all duration-300",
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "glass hover:bg-white/10"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10">
        {/* Products grid */}
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group glass rounded-3xl p-6 overflow-hidden hover-lift transition-all duration-300"
              >
                {/* Product image placeholder */}
                <div className="relative w-full h-40 mb-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center overflow-hidden">
                  <Package className="w-16 h-16 text-primary/30" />
                  <div className="absolute top-2 right-2">
                    <span className="px-2 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-lg">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Product info */}
                <div className="mb-4">
                  <h4 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors duration-300">
                    {product.name}
                  </h4>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-black text-primary">
                      ${product.price.toFixed(2)}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Stock: {product.stock}
                    </span>
                  </div>
                </div>

                {/* Add to cart button */}
                <button
                  onClick={() => addToCart(product.id, product.name, product.price)}
                  className="w-full py-3 bg-primary text-primary-foreground rounded-2xl font-bold hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2 group-hover-btn"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add to Cart</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Cart sidebar */}
        <div className="lg:col-span-1">
          <div className="glass rounded-3xl p-6 sticky top-6">
            {/* Cart header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-2xl flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold">Your Cart</h3>
                  <p className="text-sm text-muted-foreground">{cart.length} items</p>
                </div>
              </div>
              {cart.length > 0 && (
                <button
                  onClick={clearCart}
                  className="p-2 text-muted-foreground hover:text-red-500 transition-colors duration-300"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Cart items */}
            {cart.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingCart className="w-16 h-16 mx-auto mb-4 text-muted-foreground/30" />
                <p className="text-muted-foreground">Your cart is empty</p>
                <p className="text-sm text-muted-foreground/60">Add products to get started</p>
              </div>
            ) : (
              <div className="space-y-4 max-h-[400px] overflow-y-auto">
                {cart.map((item) => (
                  <div
                    key={item.productId}
                    className="glass p-4 rounded-2xl flex items-center gap-4"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Tag className="w-6 h-6 text-primary/50" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-bold text-sm">{item.name}</h4>
                      <p className="text-primary font-black">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => removeFromCart(item.productId)}
                        className="p-2 bg-red-500/10 text-red-500 rounded-lg hover:bg-red-500/20 transition-all duration-300"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-8 text-center font-bold">{item.quantity}</span>
                      <button
                        onClick={() => addToCart(item.productId, item.name, item.price)}
                        className="p-2 bg-green-500/10 text-green-500 rounded-lg hover:bg-green-500/20 transition-all duration-300"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Cart summary */}
            {cart.length > 0 && (
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Tax (8%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-xl font-black">
                    <span>Total</span>
                    <span className="text-primary">${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Checkout button */}
                <button className="w-full py-4 btn-premium text-white rounded-2xl font-bold hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  <span>Checkout Now</span>
                </button>

                <p className="text-center text-xs text-muted-foreground mt-4">
                  Secure payment powered by Stripe
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
        {[
          { value: "500+", label: "Products", icon: Package },
          { value: "50+", label: "Brands", icon: Tag },
          { value: "10K+", label: "Sold", icon: TrendingUp },
          { value: "4.9", label: "Rating", icon: Sparkles }
        ].map((stat, i) => (
          <div key={i} className="glass rounded-2xl p-6 text-center hover:bg-white/5 transition-all duration-300">
            <stat.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
            <div className="text-2xl font-black text-primary">{stat.value}</div>
            <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
