"use client";

import { useState } from "react";
import Image from "next/image";
import { useAppContext } from "@/context/AppContext";
import { Plus, Minus, Receipt, Printer, X, CreditCard, DollarSign, Smartphone, Search, Package, Trash2, ArrowRight, Menu } from "lucide-react";
import { toast } from "@/components/Toast";
import { Modal } from "@/components/Modal";

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
  const { products, addSale } = useAppContext();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showBillForm, setShowBillForm] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showCart, setShowCart] = useState(false);

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (productId: string, name: string, price: number, stock: number, image?: string, category?: string) => {
    setCart(prev => {
      const existing = prev.find(item => item.productId === productId);
      if (existing) {
        if (existing.quantity >= stock) {
          toast.warning("Not enough stock available!");
          return prev;
        }
        return prev.map(item =>
          item.productId === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      if (stock <= 0) {
        toast.error("Product out of stock!");
        return prev;
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

    addSale({
      date: new Date().toISOString().split('T')[0],
      items: cart.map(item => ({
        productId: item.productId,
        quantity: item.quantity,
        price: item.price
      })),
      total: total,
      type: "product"
    });

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
          <h1 className="text-2xl md:text-3xl font-black uppercase italic text-white tracking-tighter">Billing & POS</h1>
          <p className="text-muted-foreground text-xs uppercase font-bold tracking-widest mt-1">Process sales and generate digital bills</p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowCart(!showCart)}
            className="lg:hidden flex items-center gap-2 px-6 py-2 glass rounded-2xl border border-white/10"
          >
            <Receipt className="w-4 h-4" />
            <span className="font-bold text-sm">{cart.length}</span>
          </button>
          <div className="glass px-4 py-2 rounded-2xl border border-white/10 hidden sm:block">
            <span className="text-[10px] font-black uppercase text-muted-foreground mr-2">Due Amount:</span>
            <span className="font-black text-primary italic">${total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Products Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* Controls */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-2xl focus:border-primary/50 outline-none text-sm transition-all"
              />
            </div>

            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap ${selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-white/5 border border-white/10 hover:bg-white/10"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 overflow-y-auto max-h-[calc(100vh-320px)] pr-2 scrollbar-hide pb-10">
            {filteredProducts.map((product) => (
              <div key={product.id} className="glass-premium rounded-3xl p-4 border border-white/5 group hover:border-primary/30 transition-all flex flex-col">
                <div className="relative w-full h-32 mb-4 rounded-2xl overflow-hidden bg-primary/5 border border-white/5">
                  <Image
                    src={product.image || "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded-lg text-[10px] font-black text-white uppercase border border-white/10">
                    {product.stock} Left
                  </div>
                </div>

                <div className="mb-4 flex-grow">
                  <h3 className="font-black text-xs uppercase italic truncate group-hover:text-primary transition-colors">{product.name}</h3>
                  <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-tighter mt-1">{product.category}</p>
                </div>

                <div className="flex items-center justify-between mt-auto mb-4">
                  <span className="text-xl font-black italic tracking-tighter text-white">${product.price.toFixed(2)}</span>
                </div>

                <button
                  onClick={() => addToCart(product.id, product.name, product.price, product.stock, product.image, product.category)}
                  disabled={product.stock <= 0}
                  className="w-full py-2.5 bg-primary text-primary-foreground rounded-2xl font-black text-xs uppercase italic flex items-center justify-center gap-2 hover:bg-primary/90 transition-all disabled:opacity-30 disabled:grayscale shadow-sm"
                >
                  <Plus className="w-3.5 h-3.5" />
                  Add to Cart
                </button>
              </div>
            ))}
            {filteredProducts.length === 0 && (
              <div className="col-span-full py-20 text-center italic text-muted-foreground text-[10px] font-black uppercase border border-dashed border-white/10 rounded-[2rem]">
                No items found matching your search
              </div>
            )}
          </div>
        </div>

        {/* Desktop Cart Section */}
        <div className="hidden lg:flex flex-col glass-premium rounded-[2.5rem] p-6 h-[calc(100vh-180px)] border border-white/5 sticky top-6 bg-black/20">
          <div className="flex items-center justify-between mb-8 border-b border-white/5 pb-4">
            <h2 className="text-xl font-black uppercase italic tracking-tighter flex items-center gap-2">
              <Receipt className="w-5 h-5 text-primary" />
              Current Cart
            </h2>
            {cart.length > 0 && (
              <button
                onClick={clearCart}
                className="text-red-500 text-[10px] font-black uppercase hover:text-red-400 transition-colors"
              >
                Clear All
              </button>
            )}
          </div>

          <div className="flex-grow overflow-y-auto space-y-4 mb-6 pr-2 scrollbar-hide">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center px-4 opacity-50">
                <Package className="w-12 h-12 mb-4 text-white/20" />
                <p className="text-[10px] font-black uppercase tracking-widest leading-relaxed">Your cart is currently empty</p>
                <p className="text-[9px] mt-2 font-bold uppercase tracking-tighter">Add some premium gear or supplements to begin billing</p>
              </div>
            ) : (
              cart.map((item) => (
                <div key={item.productId} className="flex items-center gap-4 p-3 bg-white/5 rounded-[1.5rem] border border-white/5 group hover:border-white/10 transition-all">
                  <div className="flex-grow min-w-0">
                    <p className="font-black text-xs uppercase italic truncate tracking-tight">{item.name}</p>
                    <p className="text-primary text-[10px] font-black mt-0.5">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => removeFromCart(item.productId, item.name)}
                      className="p-1.5 bg-red-500/10 text-red-500 rounded-xl hover:bg-red-500/20 transition-all"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-6 text-center text-xs font-black italic">{item.quantity}</span>
                    <button
                      onClick={() => addToCart(item.productId, item.name, item.price, 999, item.image, item.category)}
                      className="p-1.5 bg-green-500/10 text-green-500 rounded-xl hover:bg-green-500/20 transition-all"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="border-t border-white/5 pt-6 space-y-4 px-2">
            <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-muted-foreground">
              <span>Subtotal</span>
              <span className="text-white">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-muted-foreground">
              <span>Tax (8%)</span>
              <span className="text-white">${tax.toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center pt-4 border-t border-white/5">
              <span className="text-lg font-black uppercase italic tracking-tighter text-primary">Total Amount</span>
              <span className="text-3xl font-black italic text-white tracking-tighter">${total.toFixed(2)}</span>
            </div>
            <button
              onClick={handleGenerateBill}
              disabled={cart.length === 0}
              className="w-full py-4 mt-4 bg-primary text-primary-foreground rounded-[2rem] font-black uppercase italic hover:bg-primary/90 transition-all shadow-lg disabled:opacity-30 disabled:grayscale text-sm"
            >
              <Printer className="w-4 h-4 inline mr-2" />
              Process & Bill
            </button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={showBillForm}
        onClose={() => setShowBillForm(false)}
        title="Finalize Billing"
      >
        <form onSubmit={handleSubmitBill} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] uppercase font-black text-muted-foreground tracking-widest">Customer Name</label>
            <input
              type="text"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              className="w-full px-4 py-3 bg-black/40 border border-white/10 rounded-2xl focus:border-primary/50 outline-none text-sm"
              placeholder="e.g. John Smith"
              required
            />
          </div>

          <div className="space-y-4">
            <label className="text-[10px] uppercase font-black text-muted-foreground tracking-widest">Payment Method</label>
            <div className="grid grid-cols-3 gap-3">
              {[
                { value: "cash", icon: DollarSign, label: "Cash" },
                { value: "card", icon: CreditCard, label: "Card" },
                { value: "upi", icon: Smartphone, label: "Online" }
              ].map((method) => (
                <button
                  key={method.value}
                  type="button"
                  onClick={() => setPaymentMethod(method.value)}
                  className={`flex flex-col items-center gap-2 p-4 rounded-2xl border transition-all ${paymentMethod === method.value
                      ? "bg-primary border-primary text-primary-foreground shadow-lg"
                      : "bg-white/5 border-white/10 text-muted-foreground hover:bg-white/10"
                    }`}
                >
                  <method.icon className="w-5 h-5" />
                  <span className="text-[9px] font-black uppercase tracking-widest">{method.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-white/5">
            <div className="flex justify-between items-center mb-6">
              <span className="text-sm font-black uppercase italic text-muted-foreground tracking-widest">Grand Total:</span>
              <span className="text-3xl font-black italic text-primary">${total.toFixed(2)}</span>
            </div>
            <button
              type="submit"
              className="w-full py-4 bg-primary text-primary-foreground rounded-[2rem] font-black uppercase italic hover:bg-primary/90 transition-all shadow-xl text-lg flex items-center justify-center gap-3"
            >
              <Printer className="w-5 h-5" />
              Generate Receipt
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
