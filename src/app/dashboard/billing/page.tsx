"use client";

import { useState } from "react";
import Image from "next/image";
import { MOCK_PRODUCTS } from "@/lib/data";
import { Plus, Minus, Receipt, Printer, X, CreditCard, DollarSign, Smartphone, Search, Package, Trash2, ArrowRight, Menu } from "lucide-react";
import { toast } from "@/components/Toast";

interface CartItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  category?: string;
}

const categories = ["All", "Supplements", "Equipment", "Apparel", "Accessories"];

export default function BillingPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showBillForm, setShowBillForm] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showCart, setShowCart] = useState(false);

  const filteredProducts = MOCK_PRODUCTS.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (productId: string, name: string, price: number, image?: string, category?: string) => {
    setCart(prev => {
      const existing = prev.find(item => item.productId === productId);
      if (existing) {
        return prev.map(item =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { productId, name, price, quantity: 1, image, category }];
    });
    toast.success(`${name} added to cart`);
  };

  const removeFromCart = (productId: string, name: string) => {
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
    toast.info(`${name} removed`);
  };

  const clearCart = () => {
    setCart([]);
    toast.info("Cart cleared");
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  const handleGenerateBill = () => {
    if (cart.length === 0) {
      toast.warning("Please add items to cart first!");
      return;
    }
    setShowBillForm(true);
  };

  const handleSubmitBill = (e: React.FormEvent) => {
    e.preventDefault();
    const bill = {
      customerName,
      paymentMethod,
      items: cart,
      total,
      date: new Date().toISOString(),
    };
    console.log("Generated Bill:", bill);
    toast.success(`Bill generated for ${customerName}! Total: $${total.toFixed(2)}`);
    setShowBillForm(false);
    setCustomerName("");
    setPaymentMethod("cash");
    setCart([]);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-black uppercase italic text-luxury">Billing & POS</h1>
          <p className="text-muted-foreground text-sm">Process sales and generate bills</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowCart(!showCart)}
            className="lg:hidden flex items-center gap-2 px-4 py-2 glass rounded-xl"
          >
            <Receipt className="w-5 h-5" />
            <span className="font-bold">{cart.length}</span>
          </button>
          <div className="glass px-3 py-2 rounded-xl hidden sm:block">
            <span className="text-xs text-muted-foreground">Total: </span>
            <span className="font-black text-primary">${total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Mobile Cart Sidebar */}
      {showCart && (
        <div className="lg:hidden glass-premium rounded-3xl p-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold uppercase italic">Cart ({cart.length})</h2>
            <button onClick={() => setShowCart(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>
          {cart.length === 0 ? (
            <p className="text-muted-foreground text-center py-4">Cart is empty</p>
          ) : (
            <>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {cart.map((item) => (
                  <div key={item.productId} className="flex items-center gap-2 p-2 glass rounded-xl">
                    {item.image && (
                      <div className="relative w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
                        <Image src={item.image} alt={item.name} fill className="object-cover" />
                      </div>
                    )}
                    <div className="flex-grow min-w-0">
                      <p className="font-bold text-sm truncate">{item.name}</p>
                      <p className="text-primary text-xs">${item.price.toFixed(2)} x {item.quantity}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <button onClick={() => removeFromCart(item.productId, item.name)} className="p-1 bg-red-500/20 text-red-500 rounded-lg">
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-5 text-center text-sm font-bold">{item.quantity}</span>
                      <button onClick={() => addToCart(item.productId, item.name, item.price, item.image, item.category)} className="p-1 bg-green-500/20 text-green-500 rounded-lg">
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="flex justify-between font-black mb-3">
                  <span>Total:</span>
                  <span className="text-primary">${total.toFixed(2)}</span>
                </div>
                <button onClick={handleGenerateBill} className="w-full py-3 btn-premium text-white rounded-xl font-bold flex items-center justify-center gap-2">
                  <Printer className="w-4 h-4" />
                  Generate Bill
                </button>
              </div>
            </>
          )}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Products Section */}
        <div className="lg:col-span-2 space-y-4">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 glass rounded-2xl border border-white/10 focus:border-primary/50 outline-none"
            />
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-1.5 rounded-lg text-sm font-bold transition-all ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "glass hover:bg-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {filteredProducts.map((product) => (
              <div key={product.id} className="glass-premium rounded-2xl p-3 overflow-hidden hover-lift transition-all">
                {/* Product image */}
                <div className="relative w-full h-28 mb-3 rounded-xl overflow-hidden bg-primary/5">
                  <Image src={product.image} alt={product.name} fill className="object-cover" />
                </div>

                {/* Product info */}
                <div className="mb-2">
                  <h3 className="font-bold text-sm truncate">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-black text-primary">${product.price.toFixed(2)}</span>
                  </div>
                </div>

                {/* Add to cart button */}
                <button
                  onClick={() => addToCart(product.id, product.name, product.price, product.image, product.category)}
                  className="w-full py-2 bg-primary text-primary-foreground rounded-xl font-bold text-sm flex items-center justify-center gap-1"
                >
                  <Plus className="w-4 h-4" />
                  Add
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Cart Section */}
        <div className="hidden lg:block glass-premium rounded-3xl p-5 h-fit sticky top-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold uppercase italic">Cart ({cart.length})</h2>
            {cart.length > 0 && (
              <button onClick={clearCart} className="text-red-500 text-sm">Clear</button>
            )}
          </div>

          {cart.length === 0 ? (
            <div className="text-center py-8">
              <Package className="w-12 h-12 mx-auto mb-2 text-primary/30" />
              <p className="text-muted-foreground text-sm">Cart is empty</p>
            </div>
          ) : (
            <>
              <div className="space-y-2 max-h-64 overflow-y-auto">
                {cart.map((item) => (
                  <div key={item.productId} className="flex items-center gap-2 p-2 glass rounded-xl">
                    {item.image && (
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                        <Image src={item.image} alt={item.name} fill className="object-cover" />
                      </div>
                    )}
                    <div className="flex-grow min-w-0">
                      <p className="font-bold text-sm truncate">{item.name}</p>
                      <p className="text-primary text-xs">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <button onClick={() => removeFromCart(item.productId, item.name)} className="p-1 bg-red-500/20 text-red-500 rounded-lg hover:bg-red-500/30">
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-6 text-center text-sm font-bold">{item.quantity}</span>
                      <button onClick={() => addToCart(item.productId, item.name, item.price, item.image, item.category)} className="p-1 bg-green-500/20 text-green-500 rounded-lg hover:bg-green-500/30">
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Tax (8%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-black text-lg">
                    <span>Total</span>
                    <span className="text-primary">${total.toFixed(2)}</span>
                  </div>
                </div>
                <button onClick={handleGenerateBill} className="w-full py-3 btn-premium text-white rounded-xl font-bold flex items-center justify-center gap-2">
                  <Printer className="w-5 h-5" />
                  Generate Bill
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      {/* Bill Generation Modal */}
      {showBillForm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-premium rounded-3xl p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-black uppercase italic">Generate Bill</h3>
              <button onClick={() => setShowBillForm(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmitBill} className="space-y-4">
              <div>
                <label className="block text-sm font-bold mb-2">Customer Name</label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-4 py-3 glass rounded-xl border border-white/10 focus:border-primary/50 outline-none"
                  placeholder="Enter name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Payment Method</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { value: "cash", icon: DollarSign, label: "Cash" },
                    { value: "card", icon: CreditCard, label: "Card" },
                    { value: "upi", icon: Smartphone, label: "UPI" }
                  ].map((method) => (
                    <button
                      key={method.value}
                      type="button"
                      onClick={() => setPaymentMethod(method.value)}
                      className={`flex flex-col items-center gap-1 p-3 rounded-xl transition-all ${
                        paymentMethod === method.value
                          ? "bg-primary text-primary-foreground"
                          : "glass hover:bg-white/10"
                      }`}
                    >
                      <method.icon className="w-5 h-5" />
                      <span className="text-xs font-bold">{method.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <div className="flex justify-between font-black text-lg mb-4">
                  <span>Total:</span>
                  <span className="text-primary">${total.toFixed(2)}</span>
                </div>
                <button type="submit" className="w-full py-3 btn-premium text-white rounded-xl font-bold flex items-center justify-center gap-2">
                  <Printer className="w-5 h-5" />
                  Print Bill
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
