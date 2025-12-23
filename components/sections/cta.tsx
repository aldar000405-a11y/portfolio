"use client";

import Link from "next/link";
import { MotionSection } from "@/components/motion/motion";
import { Button } from "@/components/ui/button";

export function CTA() {
    return (
        <MotionSection
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4 py-12 md:py-24 border-t"
        >
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl font-heading">
                    Ready to Work Together?
                </h2>
                <p className="text-muted-foreground text-lg max-w-[42rem]">
                    I&apos;m currently available for freelance projects and open to full-time
                    opportunities.
                </p>
                <div className="flex gap-4 pt-4">
                    <Button size="lg" asChild>
                        <Link href="/contact">Get in Touch</Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                        <Link href="/about">About Me</Link>
                    </Button>
                </div>
            </div>
        </MotionSection>
    );
}
