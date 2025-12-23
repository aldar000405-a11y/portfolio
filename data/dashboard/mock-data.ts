export type Product = {
    id: string;
    name: string;
    category: string;
    price: number;
    stock: number;
    status: "Active" | "Draft" | "Out of Stock";
    image?: string;
};

export type Order = {
    id: string;
    customer: string;
    date: string;
    amount: number;
    status: "Pending" | "Completed" | "Cancelled";
};

export type DashboardStats = {
    totalRevenue: number;
    totalOrders: number;
    activeProducts: number;
    growth: number;
};

export const mockProducts: Product[] = [
    { id: "1", name: "Premium Wireless Headset", category: "Electronics", price: 299.99, stock: 45, status: "Active" },
    { id: "2", name: "Ergonomic Office Chair", category: "Furniture", price: 199.50, stock: 12, status: "Active" },
    { id: "3", name: "Mechanical Keyboard", category: "Electronics", price: 149.00, stock: 0, status: "Out of Stock" },
    { id: "4", name: "USB-C Hub Multi-Port", category: "Accessories", price: 49.99, stock: 85, status: "Active" },
    { id: "5", name: "Smart Home Speaker", category: "Electronics", price: 89.99, stock: 5, status: "Draft" },
    { id: "6", name: "Leather Laptop Sleeve", category: "Accessories", price: 35.00, stock: 20, status: "Active" },
];

export const mockOrders: Order[] = [
    { id: "ORD-001", customer: "Alice Johnson", date: "2023-10-25", amount: 299.99, status: "Completed" },
    { id: "ORD-002", customer: "Bob Smith", date: "2023-10-26", amount: 49.99, status: "Pending" },
    { id: "ORD-003", customer: "Charlie Davis", date: "2023-10-26", amount: 199.50, status: "Completed" },
    { id: "ORD-004", customer: "Diana Prince", date: "2023-10-27", amount: 149.00, status: "Cancelled" },
    { id: "ORD-005", customer: "Evan Wright", date: "2023-10-27", amount: 35.00, status: "Completed" },
];

export const mockStats: DashboardStats = {
    totalRevenue: 45231.89,
    totalOrders: 1250,
    activeProducts: 45,
    growth: 12.5,
};

export const revenueData = [
    { name: "Jan", total: 1500 },
    { name: "Feb", total: 2300 },
    { name: "Mar", total: 3200 },
    { name: "Apr", total: 2800 },
    { name: "May", total: 4500 },
    { name: "Jun", total: 4100 },
    { name: "Jul", total: 5200 },
];
