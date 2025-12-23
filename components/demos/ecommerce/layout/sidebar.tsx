"use client";

import { cn } from "@/utils/cn";
import { Button } from "@/components/ui/button";
import {
    LayoutDashboard,
    Package,
    ShoppingCart,
    Users,
    BarChart2,
    Settings,
    Menu,
    X
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const sidebarItems = [
    { title: "Overview", href: "/demos/ecommerce", icon: LayoutDashboard },
    { title: "Products", href: "/demos/ecommerce/products", icon: Package },
    { title: "Orders", href: "/demos/ecommerce/orders", icon: ShoppingCart },
    { title: "Analytics", href: "/demos/ecommerce/analytics", icon: BarChart2 },
    { title: "Customers", href: "/demos/ecommerce/customers", icon: Users },
    { title: "Settings", href: "#", icon: Settings },
];

export function Sidebar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Mobile Trigger */}
            <div className="md:hidden p-4 flex items-center justify-between bg-card border-b">
                <span className="font-bold text-lg">Admin</span>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </Button>
            </div>

            {/* Mobile Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: -250 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -250 }}
                        className="fixed inset-0 z-50 bg-background md:hidden p-4"
                    >
                        <div className="flex justify-between items-center mb-8">
                            <span className="font-bold text-lg">Menu</span>
                            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                                <X />
                            </Button>
                        </div>
                        <nav className="flex flex-col gap-2">
                            {sidebarItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                >
                                    <Button
                                        variant={pathname === item.href ? "secondary" : "ghost"}
                                        className="w-full justify-start"
                                    >
                                        <item.icon className="mr-2 h-4 w-4" />
                                        {item.title}
                                    </Button>
                                </Link>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>


            {/* Desktop Sidebar */}
            <div className="hidden border-r bg-muted/40 md:block w-64 min-h-screen">
                <div className="flex h-14 items-center border-b px-4 lg:h-[60px] bg-background">
                    <Link href="/demos/ecommerce" className="flex items-center gap-2 font-semibold">
                        <Package className="h-6 w-6" />
                        <span>Acme Inc</span>
                    </Link>
                </div>
                <div className="flex-1">
                    <nav className="grid items-start px-2 text-sm font-medium lg:px-4 py-4 gap-1">
                        {sidebarItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                            >
                                <Button
                                    variant={pathname === item.href ? "secondary" : "ghost"}
                                    className="w-full justify-start"
                                >
                                    <item.icon className="mr-2 h-4 w-4" />
                                    {item.title}
                                </Button>
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </>
    );
}
