export interface Member {
    id: string;
    name: string;
    plan: "Starter" | "Pro" | "Elite";
    status: "active" | "expired";
    joinedDate: string;
}

export interface Product {
    id: string;
    name: string;
    price: number;
    stock: number;
    category: "supplements" | "apparel" | "equipment";
}

export interface Sale {
    id: string;
    date: string;
    items: { productId: string; quantity: number; price: number }[];
    total: number;
    type: "membership" | "product";
}

export const MOCK_MEMBERS: Member[] = [
    { id: "1", name: "John Doe", plan: "Pro", status: "active", joinedDate: "2024-01-15" },
    { id: "2", name: "Jane Smith", plan: "Elite", status: "active", joinedDate: "2024-02-10" },
    { id: "3", name: "Mike Johnson", plan: "Starter", status: "expired", joinedDate: "2023-11-20" },
];

export const MOCK_PRODUCTS: Product[] = [
    { id: "p1", name: "Whey Protein", price: 59.99, stock: 25, category: "supplements" },
    { id: "p2", name: "Titan T-Shirt", price: 24.99, stock: 40, category: "apparel" },
    { id: "p3", name: "Lifting Straps", price: 14.99, stock: 15, category: "equipment" },
];

export const MOCK_SALES: Sale[] = [
    { id: "s1", date: "2024-03-01", items: [{ productId: "p1", quantity: 1, price: 59.99 }], total: 59.99, type: "product" },
    { id: "s2", date: "2024-03-02", items: [], total: 99.00, type: "membership" },
];
