import { StatsCard } from "@/components/dashboard/ui/stats-card";
import { RevenueChart } from "@/components/dashboard/charts/revenue-chart";
import { RecentOrders } from "@/components/dashboard/tables/recent-orders";
import { mockStats } from "@/data/dashboard/mock-data";
import { DollarSign, ShoppingBag, Users, Activity } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dashboard Overview",
    description: "E-Commerce Analytics and Business Insights",
};

export default function DashboardPage() {
    return (
        <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <StatsCard
                    title="Total Revenue"
                    value={`$${mockStats.totalRevenue.toLocaleString()}`}
                    icon={DollarSign}
                    trend={{ value: 12.5, label: "from last month" }}
                />
                <StatsCard
                    title="Orders"
                    value={`+${mockStats.totalOrders}`}
                    icon={ShoppingBag}
                    trend={{ value: 20.1, label: "from last month" }}
                />
                <StatsCard
                    title="Active Products"
                    value={`+${mockStats.activeProducts}`}
                    icon={Activity}
                    description="Currently listed in store"
                />
                <StatsCard
                    title="Active Now"
                    value="+573"
                    icon={Users}
                    description="+201 since last hour"
                />
            </div>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
                <div className="col-span-1 md:col-span-2 lg:col-span-4">
                    <RevenueChart />
                </div>
                <div className="col-span-1 md:col-span-2 lg:col-span-3">
                    <RecentOrders />
                </div>
            </div>
        </div>
    );
}
