"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Member, Product, Sale, MOCK_MEMBERS, MOCK_PRODUCTS, MOCK_SALES } from "@/lib/data";
import { toast } from "@/components/Toast";

interface AttendanceRecord {
    id: string;
    memberId: string;
    timestamp: string;
    memberName: string;
}

interface AppContextType {
    members: Member[];
    products: Product[];
    sales: Sale[];
    attendance: AttendanceRecord[];
    addMember: (member: Omit<Member, "id">) => void;
    updateMember: (id: string, member: Partial<Member>) => void;
    deleteMember: (id: string) => void;
    addProduct: (product: Omit<Product, "id">) => void;
    updateProduct: (id: string, product: Partial<Product>) => void;
    deleteProduct: (id: string) => void;
    addSale: (sale: Omit<Sale, "id">) => void;
    updateProductStock: (productId: string, quantity: number) => void;
    checkInMember: (memberId: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
    const [members, setMembers] = useState<Member[]>([]);
    const [products, setProducts] = useState<Product[]>([]);
    const [sales, setSales] = useState<Sale[]>([]);
    const [attendance, setAttendance] = useState<AttendanceRecord[]>([]);
    const [isInitialized, setIsInitialized] = useState(false);

    // Initialize from localStorage or mock data
    useEffect(() => {
        const savedMembers = localStorage.getItem("gym_members");
        const savedProducts = localStorage.getItem("gym_products");
        const savedSales = localStorage.getItem("gym_sales");
        const savedAttendance = localStorage.getItem("gym_attendance");

        setMembers(savedMembers ? JSON.parse(savedMembers) : MOCK_MEMBERS);
        setProducts(savedProducts ? JSON.parse(savedProducts) : MOCK_PRODUCTS);
        setSales(savedSales ? JSON.parse(savedSales) : MOCK_SALES);
        setAttendance(savedAttendance ? JSON.parse(savedAttendance) : []);
        setIsInitialized(true);
    }, []);

    // Save to localStorage when state changes
    useEffect(() => {
        if (isInitialized) {
            localStorage.setItem("gym_members", JSON.stringify(members));
            localStorage.setItem("gym_products", JSON.stringify(products));
            localStorage.setItem("gym_sales", JSON.stringify(sales));
            localStorage.setItem("gym_attendance", JSON.stringify(attendance));
        }
    }, [members, products, sales, attendance, isInitialized]);

    const addMember = (member: Omit<Member, "id">) => {
        const newMember = { ...member, id: Math.random().toString(36).substr(2, 9) };
        setMembers((prev) => [...prev, newMember]);
        toast.success(`Member ${member.name} registered successfully!`);
    };

    const updateMember = (id: string, updatedFields: Partial<Member>) => {
        setMembers((prev) => prev.map(m => m.id === id ? { ...m, ...updatedFields } : m));
        toast.info("Member updated.");
    };

    const deleteMember = (id: string) => {
        setMembers((prev) => prev.filter(m => m.id !== id));
        toast.warning("Member removed from system.");
    };

    const addProduct = (product: Omit<Product, "id">) => {
        const newProduct = { ...product, id: `p${Math.random().toString(36).substr(2, 9)}` };
        setProducts((prev) => [...prev, newProduct]);
        toast.success(`Product ${product.name} added to inventory.`);
    };

    const updateProduct = (id: string, updatedFields: Partial<Product>) => {
        setProducts((prev) => prev.map(p => p.id === id ? { ...p, ...updatedFields } : p));
        toast.info("Inventory updated.");
    };

    const deleteProduct = (id: string) => {
        setProducts((prev) => prev.filter(p => p.id !== id));
        toast.warning("Product removed from inventory.");
    };

    const addSale = (saleData: Omit<Sale, "id">) => {
        const newSale = { ...saleData, id: `s${Math.random().toString(36).substr(2, 9)}` };
        setSales((prev) => [...prev, newSale]);

        // Update product stocks if it's a product sale
        if (saleData.type === "product") {
            saleData.items.forEach(item => {
                updateProductStock(item.productId, -item.quantity);
            });
        }
        toast.success(`Sale completed! Amount: $${saleData.total.toFixed(2)}`);
    };

    const updateProductStock = (productId: string, delta: number) => {
        setProducts((prev) =>
            prev.map((p) =>
                p.id === productId ? { ...p, stock: Math.max(0, p.stock + delta) } : p
            )
        );
    };

    const checkInMember = (memberId: string) => {
        const member = members.find(m => m.id === memberId);
        if (!member) return;

        if (member.status !== 'active') {
            toast.error("Member status is not active. Access denied.");
            return;
        }

        const newRecord: AttendanceRecord = {
            id: Math.random().toString(36).substr(2, 9),
            memberId,
            memberName: member.name,
            timestamp: new Date().toISOString()
        };

        setAttendance(prev => [newRecord, ...prev].slice(0, 50)); // Keep last 50
        toast.success(`${member.name} checked in!`);
    };

    return (
        <AppContext.Provider
            value={{
                members,
                products,
                sales,
                attendance,
                addMember,
                updateMember,
                deleteMember,
                addProduct,
                updateProduct,
                deleteProduct,
                addSale,
                updateProductStock,
                checkInMember,
            }}
        >
            {children}
        </AppContext.Provider>
    );
}

export function useAppContext() {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error("useAppContext must be used within an AppProvider");
    }
    return context;
}
