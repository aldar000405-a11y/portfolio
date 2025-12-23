import { Badge } from "@/components/ui/badge";
import { cn } from "@/utils/cn";

interface StatusBadgeProps {
    status: string;
    className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
    const getVariant = (s: string) => {
        switch (s.toLowerCase()) {
            case "active":
            case "completed":
                return "default"; // or a custom green variant if available
            case "pending":
            case "processing":
            case "draft":
                return "secondary";
            case "cancelled":
            case "out of stock":
            case "inactive":
                return "destructive";
            default:
                return "outline";
        }
    };

    const getCustomColors = (s: string) => {
        switch (s.toLowerCase()) {
            case "active":
            case "completed":
                return "bg-green-100 text-green-800 hover:bg-green-100 dark:bg-green-900/30 dark:text-green-400";
            case "pending":
            case "processing":
                return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100 dark:bg-yellow-900/30 dark:text-yellow-400";
            case "draft":
                return "bg-gray-100 text-gray-800 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400";
            default:
                return "";
        }
    };

    return (
        <Badge
            variant={getVariant(status) as any}
            className={cn("capitalize shadow-none", getCustomColors(status), className)}
        >
            {status}
        </Badge>
    );
}
