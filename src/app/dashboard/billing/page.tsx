"use client";

import { useState } from "react";
import Image from "next/image";
import { MOCK_PRODUCTS } from "@/lib/data";
import { Plus, Minus, Receipt, Printer, X, CreditCard, DollarSign, Smartphone, Search, Package, Trash2, Sparkles, ArrowRight } from "lucide-react";
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
    toast.info(`${name} removed from cart`);
  };

  const removeItem = (productId: string, name: string) => {
    setCart(prev => prev.filter(item => item.productId !== productId));
    toast.info(`${name} removed from cart`);
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
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-black uppercase italic text-luxury">Billing & POS</h1>
          <p className="text-muted-foreground">Process sales and generate bills</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="glass px-4 py-2 rounded-xl">
            <span className="text-sm text-muted-foreground">Cart: </span>
            <span className="font-bold text-primary">{cart.length} items</span>
          </div>
          <div className="glass px-4 py-2 rounded-xl">
            <span className="text-sm text-muted-foreground">Total: </span>
            <span className="font-black text-primary">${total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Products Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* Search and Filters */}
          <div className="glass rounded-3xl p-6">
            <div className="flex flex-col md:flex-row gap-4 justify-between">
              {/* Search */}
              <div className="relative flex-grow max-w-md">
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
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-xl text-sm font-bold transition-all duration-300 ${
                      selectedCategory === category
                        ? "bg-primary text-primary-foreground"
                        : "glass hover:bg-white/10"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group glass-premium rounded-3xl p-4 overflow-hidden hover-lift transition-all duration-300 cursor-pointer"
              >
                {/* Product image */}
                <div className="relative w-full h-40 mb-4 rounded-2xl overflow-hidden bg-primary/5">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-2 right-2">
                    <span className="px-2 py-1 bg-primary/80 text-primary-foreground text-xs font-bold rounded-lg">
                      {product.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Product info */}
                <div className="mb-3">
                  <h3 className="font-bold mb-1 group-hover:text-primary transition-colors duration-300 truncate">
                    {product.name}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-black text-primary">
                      ${product.price.toFixed(2)}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      Stock: {product.stock}
                    </span>
                  </div>
                </div>

                {/* Add to cart button */}
                <button
                  onClick={() => addToCart(product.id, product.name, product.price, product.image, product.category)}
                  className="w-full py-2.5 bg-primary text-primary-foreground rounded-xl font-bold hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  <span>Add to Cart</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Cart Section */}
        <div className="lg:col-span-1">
          <div className="glass-premium rounded-3xl p-6 sticky top-6">
            {/* Cart header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center">
                  <Receipt className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold uppercase italic">Current Bill</h2>
                  <p className="text-sm text-muted-foreground">{cart.length} items</p>
                </div>
              </div>
              {cart.length > 0 && (
                <button
                  onClick={clearCart}
                  className="p-2 text-muted-foreground hover:text-red-500 transition-colors duration-300"
                  title="Clear Cart"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Cart items */}
            {cart.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  <Package className="w-10 h-10 text-primary/30" />
                </div>
                <p className="text-muted-foreground mb-2">Your cart is empty</p>
                <p className="text-sm text-muted-foreground/60">Add products to get started</p>
              </div>
            ) : (
              <div className="space-y-3 max-h-[400px] overflow-y-auto">
                {cart.map((item) => (
                  <div
                    key={item.productId}
                    className="glass p-3 rounded-2xl flex items-center gap-3"
                  >
                    {item.image && (
                      <div className="relative w-12 h-12 rounded-xl overflow-hidden flex-shrink-0">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    <div className="flex-grow min-w-0">
                      <h4 className="font-bold text-sm truncate">{item.name}</h4>
                      <p className="text-primary font-black text-xs">${item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => removeFromCart(item.productId, item.name)}
                        className="p-1.5 bg-red-500/20 text-red-500 rounded-lg hover:bg-red-500/30 transition-all duration-300"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-6 text-center font-bold text-sm">{item.quantity}</span>
                      <button
                        onClick={() => addToCart(item.productId, item.name, item.price, item.image, item.category)}
                        className="p-1.5 bg-green-500/20 text-green-500 rounded-lg hover:bg-green-500/30 transition-all duration-300"
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
                  <div className="flex justify-between text-muted-foreground text-sm">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground text-sm">
                    <span>Tax (8%)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-2xl font-black">
                    <span>Total</span>
                    <span className="text-primary">${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Generate Bill button */}
                <button
                  onClick={handleGenerateBill}
                  className="w-full py-4 btn-premium text-white rounded-2xl font-bold hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Printer className="w-5 h-5" />
                  <span>Generate Bill</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bill Generation Modal */}
      {showBillForm && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="glass-premium rounded-3xl p-8 w-full max-w-md animate-scale-in">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/20 rounded-2xl flex items-center justify-center">
                  <Receipt className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-black uppercase italic">Generate Bill</h3>
              </div>
              <button
                onClick={() => setShowBillForm(false)}
                className="p-2 hover:bg-white/10 rounded-xl transition-colors duration-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmitBill} className="space-y-4">
              <div>
                <label className="block text-sm font-bold mb-2 uppercase tracking-wider">Customer Name</label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full px-4 py-4 glass rounded-2xl border border-white/10 focus:border-primary/50 transition-all duration-300 outline-none"
                  placeholder="Enter customer name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2 uppercase tracking-wider">Payment Method</label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { value: "cash", icon: DollarSign, label: "Cash" },
                    { value: "card", icon: CreditCard, label: "Card" },
                    { value: "upi", icon: Smartphone, label: "UPI" }
                  ].map((method) => (
                    <button
                      key={method.value}
                      type="button"
                      onClick={() => setPaymentMethod(method.value)}
                      className={`flex flex-col items-center gap-2 p-4 rounded-2xl transition-all duration-300 ${
                        paymentMethod === method.value
                          ? "bg-primary text-primary-foreground"
                          : "glass hover:bg-white/10"
                      }`}
                    >
                      <method.icon className="w-6 h-6" />
                      <span className="text-xs font-bold">{method.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/10 pt-4">
                <div className="flex justify-between items-center text-xl font-black mb-6">
                  <span>Total Amount:</span>
                  <span className="text-primary">${total.toFixed(2)}</span>
                </div>
                <button
                  type="submit"
                  className="w-full py-4 btn-premium text-white rounded-2xl font-bold hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Printer className="w-5 h-5" />
                  <span>Print Bill</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
