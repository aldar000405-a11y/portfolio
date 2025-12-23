import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <div className="container mx-auto px-4 py-12 space-y-8">
            <div className="space-y-4">
                <Skeleton className="h-12 w-[300px]" />
                <Skeleton className="h-6 w-[500px]" />
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 3 }).map((_, i) => (
                    <Skeleton key={i} className="h-[200px] w-full rounded-lg" />
                ))}
            </div>
        </div>
    );
}
