"use client";

import * as React from "react";


import { cn } from "@/utils/cn";

// Since I don't have radix-ui installed, I will create a simple custom one for now
// to avoid dependency hell without access to terminal output confirmation easily.
// Actually, I can use a simple div.

const Progress = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & { value?: number }
>(({ className, value, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
            className
        )}
        {...props}
    >
        <div
            className="h-full w-full flex-1 bg-primary transition-all duration-500 ease-in-out"
            style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
        />
    </div>
));
Progress.displayName = "Progress";

export { Progress };
