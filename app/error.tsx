"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-4 px-4">
            <h2 className="text-4xl font-extrabold tracking-tight lg:text-5xl font-heading">
                Something went wrong!
            </h2>
            <p className="text-xl text-muted-foreground max-w-lg">
                An unexpected error has occurred. We apologize for the inconvenience.
            </p>
            <Button onClick={() => reset()}>Try again</Button>
        </div>
    );
}
