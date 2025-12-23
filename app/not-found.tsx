import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-4 px-4">
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl font-heading">
                404
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg">
                The page you are looking for does not exist or has been moved.
            </p>
            <Button asChild>
                <Link href="/">Return Home</Link>
            </Button>
        </div>
    );
}
