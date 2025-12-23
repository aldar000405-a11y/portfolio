"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MotionDiv, MotionH1, MotionP } from "@/components/motion/motion";
import { ArrowRight, Github, Mail } from "lucide-react";
import { siteConfig } from "@/config/site.config";

export function Hero() {
    return (
        <section className="container mx-auto px-4 py-12 md:py-24 lg:py-32 flex flex-col items-center text-center space-y-8">
            <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4 max-w-3xl"
            >
                <MotionH1
                    className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl font-heading"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    Turning Ideas Into{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                        Fast, Reliable, and Conversion-Focused
                    </span>{" "}
                    Web Experiences
                </MotionH1>
                <MotionP
                    className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-[42rem] mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    I'm a Front-End Developer focused on building modern, high-quality web interfaces that help ideas grow into real, usable products. I develop responsive and user-friendly interfaces using HTML, CSS, and JavaScript, with strong attention to performance, structure, and clean code. For complex applications, I work with React and Next.js 16 using TypeScript to deliver production-ready, scalable solutions.
                </MotionP>
            </MotionDiv>

            <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center gap-4"
            >
                <Button size="lg" asChild>
                    <Link href="/projects">
                        View Work <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                    <Link href="/contact">Contact Me</Link>
                </Button>
            </MotionDiv>

            <MotionDiv
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-center gap-6 pt-8"
            >
                <Link
                    href={siteConfig.links.github}
                    target="_blank"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                >
                    <Github className="h-6 w-6" />
                    <span className="sr-only">GitHub</span>
                </Link>
                <Link
                    href={siteConfig.links.email}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                >
                    <Mail className="h-6 w-6" />
                    <span className="sr-only">Email</span>
                </Link>
            </MotionDiv>
        </section>
    );
}
