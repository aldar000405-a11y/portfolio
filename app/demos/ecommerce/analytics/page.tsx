import { RevenueAreaChart } from "@/components/demos/ecommerce/charts/revenue-area-chart";
import { SalesBarChart } from "@/components/demos/ecommerce/charts/sales-bar-chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { stats } from "@/data/demos/ecommerce/mock-data";

export default function AnalyticsPage() {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>

            {/* Detailed Metrics Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {/* We can reuse stats but present them in a detailed list view or small cards */}
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">${stats.revenue.value.toLocaleString()}</div>
                        <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <RevenueAreaChart />
                <SalesBarChart />
            </div>

            <div className="grid gap-4 md:grid-cols-1">
                <Card>
                    <CardHeader>
                        <CardTitle>Platform Performance</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <div className="w-[100px] text-sm font-medium">Desktop</div>
                                <div className="flex-1 bg-muted rounded-full h-2 mx-4">
                                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                                </div>
                                <div className="w-[50px] text-sm text-right">85%</div>
                            </div>
                            <div className="flex items-center">
                                <div className="w-[100px] text-sm font-medium">Mobile</div>
                                <div className="flex-1 bg-muted rounded-full h-2 mx-4">
                                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                                </div>
                                <div className="w-[50px] text-sm text-right">45%</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
