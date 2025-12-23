export interface Product {
    id: string;
    name: string;
    category: string;
    price: number;
    stock: number;
    status: "Active" | "Draft" | "Out of Stock";
    sales: number;
}

export interface Order {
    id: string;
    customer: {
        name: string;
        email: string;
        avatar?: string;
    };
    total: number;
    status: "Pending" | "Processing" | "Completed" | "Cancelled";
    date: string;
    items: number;
}

export interface Customer {
    id: string;
    name: string;
    email: string;
    status: "Active" | "Inactive";
    totalSpent: number;
    lastOrder: string;
}

export interface SalesMetric {
    name: string;
    value: number;
}

export interface DashboardStats {
    revenue: { value: number; trend: number };
    orders: { value: number; trend: number };
    customers: { value: number; trend: number };
    activeProducts: { value: number; trend: number };
}
