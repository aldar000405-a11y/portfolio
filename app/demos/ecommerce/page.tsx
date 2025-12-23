import { DollarSign, ShoppingCart, Users, Package } from "lucide-react";
import { StatCard } from "@/components/demos/ecommerce/ui/stat-card";
import { RevenueAreaChart } from "@/components/demos/ecommerce/charts/revenue-area-chart";
import { SalesBarChart } from "@/components/demos/ecommerce/charts/sales-bar-chart";
import { stats } from "@/data/demos/ecommerce/mock-data";

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold tracking-tight">Overview</h1>
            </div>

            {/* KPI Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <StatCard
                    title="Total Revenue"
                    value={`$${stats.revenue.value.toLocaleString()}`}
                    icon={DollarSign}
                    trend={stats.revenue.trend}
                    description="from last month"
                />
                <StatCard
                    title="Orders"
                    value={`+${stats.orders.value}`}
                    icon={ShoppingCart}
                    trend={stats.orders.trend}
                    description="from last month"
                />
                <StatCard
                    title="Active Products"
                    value={`+${stats.activeProducts.value}`}
                    icon={Package}
                    trend={stats.activeProducts.trend}
                    description="currently listed"
                />
                <StatCard
                    title="Active Customers"
                    value={`+${stats.customers.value}`}
                    icon={Users}
                    trend={stats.customers.trend}
                    description="since last hour"
                />
            </div>

            {/* Charts Section */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <RevenueAreaChart />
                <SalesBarChart />
            </div>
        </div>
    );
}
