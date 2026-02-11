"use client";

import { useState } from "react";
import { Card } from "@/components/Card";
import { useAppContext } from "@/context/AppContext";
import { Package, Plus, Search, AlertCircle, Trash2, Edit2, Filter } from "lucide-react";
import { Modal } from "@/components/Modal";

export default function InventoryPage() {
    const { products, addProduct, deleteProduct, updateProduct } = useAppContext();
    const [searchQuery, setSearchQuery] = useState("");
    const [filterCategory, setFilterCategory] = useState("All");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingProduct, setEditingProduct] = useState<any>(null);

    const [formData, setFormData] = useState({
        name: "",
        price: 0,
        stock: 0,
        category: "Supplements" as const,
        image: ""
    });

    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = filterCategory === "All" || product.category === filterCategory;
        return matchesSearch && matchesCategory;
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (editingProduct) {
            updateProduct(editingProduct.id, formData);
        } else {
            addProduct(formData);
        }
        closeModal();
    };

    const openEditModal = (product: any) => {
        setEditingProduct(product);
        setFormData({
            name: product.name,
            price: product.price,
            stock: product.stock,
            category: product.category,
            image: product.image || ""
        });
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setEditingProduct(null);
        setFormData({
            name: "",
            price: 0,
            stock: 0,
            category: "Supplements",
            image: ""
        });
    };

    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white/5 p-6 rounded-[2rem] border border-white/5">
                <div className="relative flex-grow max-w-md w-full">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-black/20 border border-white/10 rounded-2xl py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-primary transition-all"
                    />
                </div>

                <div className="flex items-center gap-4 w-full md:w-auto">
                    <div className="relative flex-grow md:flex-grow-0">
                        <Filter className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                        <select
                            value={filterCategory}
                            onChange={(e) => setFilterCategory(e.target.value)}
                            className="w-full md:w-40 bg-white/5 border border-white/10 rounded-2xl py-3 pl-10 pr-4 text-xs font-bold uppercase focus:outline-none appearance-none"
                        >
                            <option value="All">All Categories</option>
                            <option value="Supplements">Supplements</option>
                            <option value="Apparel">Apparel</option>
                            <option value="Equipment">Equipment</option>
                            <option value="Accessories">Accessories</option>
                        </select>
                    </div>

                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-2xl font-black uppercase italic hover:bg-primary/90 transition-all text-sm whitespace-nowrap"
                    >
                        <Plus className="w-4 h-4" />
                        Add Product
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                    <Card key={product.id} className="group hover:neon-border transition-all flex flex-col h-full">
                        <div className="flex justify-between items-start mb-6">
                            <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                                <Package className="w-6 h-6" />
                            </div>
                            <div className="flex gap-2">
                                {product.stock < 10 && (
                                    <div className="flex items-center gap-1 text-[10px] font-black text-red-500 uppercase bg-red-500/10 px-2 py-1 rounded-full border border-red-500/20">
                                        <AlertCircle className="w-3 h-3" />
                                        Critical Stock
                                    </div>
                                )}
                                <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button
                                        onClick={() => openEditModal(product)}
                                        className="p-2 hover:bg-white/10 rounded-xl text-blue-400"
                                    >
                                        <Edit2 className="w-4 h-4" />
                                    </button>
                                    <button
                                        onClick={() => deleteProduct(product.id)}
                                        className="p-2 hover:bg-red-500/10 rounded-xl text-red-400"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <h3 className="text-xl font-black uppercase italic mb-1">{product.name}</h3>
                        <p className="text-xs text-muted-foreground uppercase mb-6 tracking-widest">{product.category}</p>

                        <div className="flex justify-between items-end border-t border-white/5 pt-4 mt-auto">
                            <div>
                                <p className="text-[10px] uppercase text-muted-foreground font-bold mb-1">Stock Level</p>
                                <p className={`text-lg font-black ${product.stock < 10 ? 'text-red-500' : ''}`}>{product.stock} Units</p>
                            </div>
                            <div className="text-right">
                                <p className="text-[10px] uppercase text-muted-foreground font-bold mb-1">Price</p>
                                <p className="text-lg font-black text-primary">${product.price.toFixed(2)}</p>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            {filteredProducts.length === 0 && (
                <div className="text-center py-20 bg-white/5 rounded-[2rem] border border-dashed border-white/10">
                    <p className="text-muted-foreground italic font-black uppercase tracking-widest">No products found matching your search</p>
                </div>
            )}

            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                title={editingProduct ? "Edit Product" : "Add New Product"}
            >
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-xs uppercase font-black text-muted-foreground">Product Name</label>
                        <input
                            required
                            type="text"
                            placeholder="e.g. Whey Protein"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-black/40 border border-white/10 rounded-2xl py-3 px-4 focus:outline-none focus:border-primary"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-xs uppercase font-black text-muted-foreground">Price ($)</label>
                            <input
                                required
                                type="number"
                                step="0.01"
                                placeholder="0.00"
                                value={formData.price}
                                onChange={(e) => setFormData({ ...formData, price: parseFloat(e.target.value) })}
                                className="w-full bg-black/40 border border-white/10 rounded-2xl py-3 px-4 focus:outline-none focus:border-primary"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs uppercase font-black text-muted-foreground">Stock Quantity</label>
                            <input
                                required
                                type="number"
                                placeholder="0"
                                value={formData.stock}
                                onChange={(e) => setFormData({ ...formData, stock: parseInt(e.target.value) })}
                                className="w-full bg-black/40 border border-white/10 rounded-2xl py-3 px-4 focus:outline-none focus:border-primary"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs uppercase font-black text-muted-foreground">Category</label>
                        <select
                            value={formData.category}
                            onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                            className="w-full bg-black/40 border border-white/10 rounded-2xl py-3 px-4 focus:outline-none focus:border-primary appearance-none"
                        >
                            <option value="Supplements">Supplements</option>
                            <option value="Apparel">Apparel</option>
                            <option value="Equipment">Equipment</option>
                            <option value="Accessories">Accessories</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="w-full py-4 bg-primary text-primary-foreground rounded-2xl font-black uppercase italic hover:bg-primary/90 transition-all shadow-lg"
                    >
                        {editingProduct ? "Save Changes" : "Create Product"}
                    </button>
                </form>
            </Modal>
        </div>
    );
}
