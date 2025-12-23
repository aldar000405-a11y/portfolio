"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    ShoppingBag,
    ShoppingCart,
    Users,
    Settings,
    LogOut,
    Menu
} from "lucide-react";
import { cn } from "../../../utils/cn";
import { Button } from "../../ui/button";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const sidebarItems = [
    { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
    { href: "/dashboard/products", label: "Products", icon: ShoppingBag },
    { href: "/dashboard/orders", label: "Orders", icon: ShoppingCart },
    { href: "/dashboard/customers", label: "Customers", icon: Users },
    { href: "/dashboard/settings", label: "Settings", icon: Settings },
];

export function Sidebar() {
    const pathname = usePathname();
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    return (
        <>
            {/* Mobile Trigger */}
            <div className="md:hidden p-4 border-b flex items-center justify-between bg-card text-card-foreground">
                <Link href="/dashboard" className="font-bold text-xl">Admin</Link>
                <Button variant="ghost" size="icon" onClick={() => setIsMobileOpen(!isMobileOpen)}>
                    <Menu className="h-6 w-6" />
                </Button>
            </div>

            {/* Mobile Overlay */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm md:hidden"
                        onClick={() => setIsMobileOpen(false)}
                    >
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            className="fixed inset-y-0 left-0 z-50 h-full w-3/4 border-r bg-background p-6 shadow-lg sm:max-w-sm"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex flex-col h-full gap-4">
                                <div className="font-bold text-2xl px-2 mb-4">Admin</div>
                                <nav className="flex flex-col gap-2">
                                    {sidebarItems.map((item) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            onClick={() => setIsMobileOpen(false)}
                                            className={cn(
                                                "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                                                pathname === item.href ? "bg-accent text-accent-foreground" : "text-muted-foreground"
                                            )}
                                        >
                                            <item.icon className="h-4 w-4" />
                                            {item.label}
                                        </Link>
                                    ))}
                                </nav>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Desktop Sidebar */}
            <div className="hidden border-r bg-muted/40 md:block w-64 min-h-screen">
                <div className="flex h-full max-h-screen flex-col gap-2">
                    <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                        <Link href="/" className="flex items-center gap-2 font-semibold">
                            <span className="">E-Commerce Admin</span>
                        </Link>
                    </div>
                    <div className="flex-1">
                        <nav className="grid items-start px-2 text-sm font-medium lg:px-4 gap-1 mt-4">
                            {sidebarItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={cn(
                                        "flex items-center gap-3 rounded-lg px-3 py-2 transition-all hover:text-primary",
                                        pathname === item.href ? "bg-muted text-primary" : "text-muted-foreground"
                                    )}
                                >
                                    <item.icon className="h-4 w-4" />
                                    {item.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                    <div className="mt-auto p-4">
                        <Button variant="outline" className="w-full justify-start gap-2" asChild>
                            <Link href="/">
                                <LogOut className="h-4 w-4" /> Exit Demo
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}
