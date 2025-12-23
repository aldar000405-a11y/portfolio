import { Product, Order, Customer, DashboardStats, SalesMetric } from "@/types/demos/ecommerce";

export const stats: DashboardStats = {
    revenue: { value: 54230, trend: 12.5 },
    orders: { value: 1250, trend: 5.2 },
    customers: { value: 340, trend: -2.1 },
    activeProducts: { value: 120, trend: 0.0 },
};

export const products: Product[] = [
    { id: "PROD-001", name: "Wireless Noise Cancelling Headphones", category: "Electronics", price: 299.99, stock: 45, status: "Active", sales: 124 },
    { id: "PROD-002", name: "Ergonomic Mesh Office Chair", category: "Furniture", price: 199.50, stock: 12, status: "Active", sales: 85 },
    { id: "PROD-003", name: "4K Ultra HD Gaming Monitor", category: "Electronics", price: 449.00, stock: 0, status: "Out of Stock", sales: 20 },
    { id: "PROD-004", name: "Mechanical Gaming Keyboard", category: "Electronics", price: 129.99, stock: 85, status: "Active", sales: 230 },
    { id: "PROD-005", name: "Smart Home Security Camera", category: "Smart Home", price: 89.99, stock: 5, status: "Draft", sales: 0 },
    { id: "PROD-006", name: "Minimalist Leather Backpack", category: "Fashion", price: 145.00, stock: 20, status: "Active", sales: 45 },
    { id: "PROD-007", name: "Stainless Steel Water Bottle", category: "Accessories", price: 24.99, stock: 150, status: "Active", sales: 500 },
    { id: "PROD-008", name: "Bluetooth Portable Speaker", category: "Electronics", price: 59.99, stock: 30, status: "Active", sales: 110 },
    { id: "PROD-009", name: "Standing Desk Converter", category: "Furniture", price: 120.00, stock: 8, status: "Active", sales: 32 },
    { id: "PROD-010", name: "Organic Cotton T-Shirt", category: "Fashion", price: 29.50, stock: 200, status: "Active", sales: 150 },
];

export const orders: Order[] = [
    { id: "ORD-7521", customer: { name: "Alice Johnson", email: "alice@example.com" }, total: 299.99, status: "Completed", date: "2023-10-25", items: 1 },
    { id: "ORD-7522", customer: { name: "Bob Smith", email: "bob@example.com" }, total: 49.99, status: "Processing", date: "2023-10-26", items: 2 },
    { id: "ORD-7523", customer: { name: "Charlie Davis", email: "charlie@example.com" }, total: 199.50, status: "Completed", date: "2023-10-26", items: 1 },
    { id: "ORD-7524", customer: { name: "Diana Prince", email: "diana@example.com" }, total: 149.00, status: "Cancelled", date: "2023-10-27", items: 1 },
    { id: "ORD-7525", customer: { name: "Evan Wright", email: "evan@example.com" }, total: 35.00, status: "Completed", date: "2023-10-27", items: 3 },
    { id: "ORD-7526", customer: { name: "Fiona Gallagher", email: "fiona@example.com" }, total: 450.00, status: "Pending", date: "2023-10-28", items: 2 },
    { id: "ORD-7527", customer: { name: "George Martin", email: "george@example.com" }, total: 24.99, status: "Completed", date: "2023-10-28", items: 1 },
];

export const customers: Customer[] = [
    { id: "CUST-001", name: "Alice Johnson", email: "alice@example.com", status: "Active", totalSpent: 1250.50, lastOrder: "2023-10-25" },
    { id: "CUST-002", name: "Bob Smith", email: "bob@example.com", status: "Active", totalSpent: 450.00, lastOrder: "2023-10-26" },
    { id: "CUST-003", name: "Charlie Davis", email: "charlie@example.com", status: "Inactive", totalSpent: 199.50, lastOrder: "2023-09-15" },
    { id: "CUST-004", name: "Diana Prince", email: "diana@example.com", status: "Active", totalSpent: 800.00, lastOrder: "2023-10-27" },
    { id: "CUST-005", name: "Evan Wright", email: "evan@example.com", status: "Active", totalSpent: 35.00, lastOrder: "2023-10-27" },
];

export const monthlyRevenue: SalesMetric[] = [
    { name: "Jan", value: 12000 },
    { name: "Feb", value: 18000 },
    { name: "Mar", value: 15000 },
    { name: "Apr", value: 24000 },
    { name: "May", value: 28000 },
    { name: "Jun", value: 32000 },
    { name: "Jul", value: 38000 },
    { name: "Aug", value: 35000 },
    { name: "Sep", value: 45000 },
    { name: "Oct", value: 54000 },
];

export const salesByCategory: SalesMetric[] = [
    { name: "Electronics", value: 45 },
    { name: "Furniture", value: 25 },
    { name: "Fashion", value: 20 },
    { name: "Accessories", value: 10 },
];
