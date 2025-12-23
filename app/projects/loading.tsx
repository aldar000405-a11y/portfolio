import { Skeleton } from "@/components/ui/skeleton";

export default function ProjectsLoading() {
    return (
        <div className="space-y-8">
            <div className="space-y-4">
                <Skeleton className="h-10 w-[200px]" />
                <Skeleton className="h-6 w-[400px]" />
            </div>
            <div className="grid gap-6 md:grid-cols-2">
                {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="rounded-lg border bg-card text-card-foreground shadow-sm h-[300px]">
                        <div className="p-6 space-y-4">
                            <Skeleton className="h-6 w-1/2" />
                            <Skeleton className="h-20 w-full" />
                            <div className="flex gap-2">
                                <Skeleton className="h-5 w-16" />
                                <Skeleton className="h-5 w-16" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
