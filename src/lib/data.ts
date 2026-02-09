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
    category: "Supplements" | "Apparel" | "Equipment" | "Accessories";
    image: string;
    description?: string;
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

// Products with Unsplash images
export const MOCK_PRODUCTS: Product[] = [
    // Supplements
    { id: "p1", name: "Whey Protein Pro", price: 59.99, stock: 25, category: "Supplements", image: "https://images.unsplash.com/photo-157468108aky-t3h-22c41b20c249?w=400&h=400&fit=crop", description: "Premium whey protein for muscle recovery" },
    { id: "p2", name: "BCAA Elite", price: 34.99, stock: 30, category: "Supplements", image: "https://images.unsplash.com/photo-1574681086809-5f6c9f86c60c?w=400&h=400&fit=crop", description: "Branch chain amino acids for endurance" },
    { id: "p3", name: "Pre-Workout Blast", price: 44.99, stock: 20, category: "Supplements", image: "https://images.unsplash.com/photo-1593098185482-4dbdb9a6b2a9?w=400&h=400&fit=crop", description: "Energy and focus booster" },
    { id: "p4", name: "Creatine Monohydrate", price: 24.99, stock: 35, category: "Supplements", image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400&h=400&fit=crop", description: "Pure creatine for strength" },
    { id: "p5", name: "Mass Gainer XL", price: 69.99, stock: 15, category: "Supplements", image: "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?w=400&h=400&fit=crop", description: "High calorie mass gainer" },
    { id: "p6", name: "Fat Burner Pro", price: 49.99, stock: 18, category: "Supplements", image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=400&fit=crop", description: "Thermogenic fat burner" },
    
    // Equipment
    { id: "p7", name: "Adjustable Dumbbells", price: 299.99, stock: 8, category: "Equipment", image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=400&fit=crop", description: "Space-saving adjustable weights" },
    { id: "p8", name: "Yoga Mat Premium", price: 39.99, stock: 25, category: "Equipment", image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=400&fit=crop", description: "Non-slip yoga mat" },
    { id: "p9", name: "Resistance Bands Set", price: 29.99, stock: 30, category: "Equipment", image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=400&fit=crop", description: "5-piece resistance band set" },
    { id: "p10", name: "Kettlebell 20kg", price: 79.99, stock: 12, category: "Equipment", image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=400&h=400&fit=crop", description: "Cast iron kettlebell" },
    { id: "p11", name: "Pull-Up Bar", price: 49.99, stock: 10, category: "Equipment", image: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=400&h=400&fit=crop", description: "Doorway pull-up bar" },
    { id: "p12", name: "Foam Roller", price: 24.99, stock: 20, category: "Equipment", image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=400&fit=crop", description: "High-density foam roller" },
    
    // Apparel
    { id: "p13", name: "Gym Tank Top", price: 24.99, stock: 40, category: "Apparel", image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=400&fit=crop", description: "Breathable athletic tank" },
    { id: "p14", name: "Performance Leggings", price: 54.99, stock: 35, category: "Apparel", image: "https://images.unsplash.com/photo-1506619216599-9d16d0903dfd?w=400&h=400&fit=crop", description: "High-waist compression leggings" },
    { id: "p15", name: "Gym Hoodie", price: 64.99, stock: 20, category: "Apparel", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop", description: "Warm-up hoodie" },
    { id: "p16", name: "Athletic Shorts", price: 29.99, stock: 30, category: "Apparel", image: "https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?w=400&h=400&fit=crop", description: "Lightweight training shorts" },
    { id: "p17", name: "Sports Bra", price: 34.99, stock: 25, category: "Apparel", image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=400&fit=crop", description: "High-support sports bra" },
    { id: "p18", name: "Compression Shirt", price: 28.99, stock: 28, category: "Apparel", image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400&h=400&fit=crop", description: "Form-fitting compression shirt" },
    
    // Accessories
    { id: "p19", name: "Lifting Straps", price: 14.99, stock: 50, category: "Accessories", image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=400&fit=crop", description: "Wrist straps for lifting" },
    { id: "p20", name: "Gym Gloves", price: 19.99, stock: 35, category: "Accessories", image: "https://images.unsplash.com/photo-1595078475328-1ab05d0a6a0e?w=400&h=400&fit=crop", description: "Padded workout gloves" },
    { id: "p21", name: "Wrist Wraps", price: 12.99, stock: 45, category: "Accessories", image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=400&fit=crop", description: "Support wrist wraps" },
    { id: "p22", name: "Gym Bag", price: 44.99, stock: 15, category: "Accessories", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop", description: "Spacious workout bag" },
    { id: "p23", name: "Shaker Bottle", price: 16.99, stock: 40, category: "Accessories", image: "https://images.unsplash.com/photo-1603569283847-aa295f0d016a?w=400&h=400&fit=crop", description: "Leak-proof mixing bottle" },
    { id: "p24", name: "Gym Towel", price: 12.99, stock: 50, category: "Accessories", image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400&h=400&fit=crop", description: "Quick-dry microfiber towel" },
];

export const MOCK_SALES: Sale[] = [
    { id: "s1", date: "2024-03-01", items: [{ productId: "p1", quantity: 1, price: 59.99 }], total: 59.99, type: "product" },
    { id: "s2", date: "2024-03-02", items: [], total: 99.00, type: "membership" },
];
