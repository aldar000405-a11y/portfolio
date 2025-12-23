import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "../../../components/ui/table";
import { mockOrders } from "@/data/dashboard/mock-data";

// Extract unique customers from orders for placeholder
const customers = Array.from(new Set(mockOrders.map(o => o.customer))).map((name, i) => ({
    id: `CUST-${i + 1}`,
    name,
    email: `${name.toLowerCase().replace(' ', '.')}@example.com`,
    spent: mockOrders.filter(o => o.customer === name).reduce((acc, curr) => acc + curr.amount, 0),
    orders: mockOrders.filter(o => o.customer === name).length
}));

export default function CustomersPage() {
    return (
        <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight">Customers</h2>
            </div>

            <div className="rounded-md border bg-card">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Total Orders</TableHead>
                            <TableHead className="text-right">Total Spent</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {customers.map((customer) => (
                            <TableRow key={customer.id}>
                                <TableCell className="font-medium">{customer.name}</TableCell>
                                <TableCell>{customer.email}</TableCell>
                                <TableCell>{customer.orders}</TableCell>
                                <TableCell className="text-right">${customer.spent.toFixed(2)}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
