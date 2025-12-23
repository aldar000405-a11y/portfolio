"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../../ui/card";
import { mockOrders } from "../../../data/dashboard/mock-data";
import { Badge } from "../../ui/badge";

export function RecentOrders() {
    return (
        <Card className="col-span-3">
            <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>
                    You made {mockOrders.length} sales this month.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-8">
                    {mockOrders.map((order) => (
                        <div key={order.id} className="flex items-center">
                            <div className="ml-4 space-y-1">
                                <p className="text-sm font-medium leading-none">{order.customer}</p>
                                <p className="text-sm text-muted-foreground">
                                    {order.id}
                                </p>
                            </div>
                            <div className="ml-auto font-medium">+${order.amount}</div>
                            <div className="ml-4">
                                <Badge variant={order.status === "Completed" ? "default" : order.status === "Pending" ? "secondary" : "destructive"}>
                                    {order.status}
                                </Badge>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
