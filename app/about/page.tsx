import type { Metadata } from "next";
import { MotionDiv } from "@/components/motion/motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "About Me",
    description: "Learn more about my background, experience, and philosophy.",
};

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-12 space-y-12 animate-in fade-in-50 duration-500">
            <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col space-y-4"
            >
                <h1 className="text-3xl font-bold tracking-tight lg:text-4xl font-heading">
                    About Me
                </h1>
                <p className="text-muted-foreground text-base max-w-2xl">
                    Turning Ideas Into Fast, Reliable, and Conversion-Focused Web Experiences
                </p>
            </MotionDiv>

            <div className="grid gap-12 md:grid-cols-2 lg:gap-24 items-start">
                <MotionDiv
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6 text-base text-muted-foreground leading-relaxed"
                >
                    <p>
                        I&apos;m a Front-End Developer focused on building modern, high-quality web interfaces that help ideas grow into real, usable products. I develop responsive and user-friendly interfaces using HTML, CSS, and JavaScript, with strong attention to performance, structure, and clean code.
                    </p>
                    <p>
                        Many of my core projects are built with Vanilla JavaScript to demonstrate a deep understanding of front-end fundamentals and browser behavior. For more complex and scalable applications, I work with React and Next.js 16 using TypeScript to deliver production-ready, scalable solutions.
                    </p>
                    <p>
                        I have experience designing and implementing business-oriented web platforms, including structured layouts, product-driven interfaces, and smooth user flows. My focus is always on clarity, usability, and building interfaces that support user engagement and conversions.
                    </p>
                    <p>
                        What sets me apart is my transparent approach and adaptability. I choose the right tools based on project needs, not trends, allowing me to deliver reliable, maintainable, and future-ready solutions.
                    </p>
                    <p>
                        If you&apos;re looking for a front-end developer who combines strong fundamentals with modern frameworks, I&apos;m ready to help bring your idea to life.
                    </p>
                </MotionDiv>

                <MotionDiv
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="space-y-8"
                >
                    <MotionDiv
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="p-6 border rounded-lg bg-card"
                    >
                        <h3 className="text-xl font-bold mb-4 font-heading">My Focus Areas</h3>
                        <ul className="space-y-4 list-disc list-inside text-muted-foreground">
                            <li>High-performance and scalable front-end interfaces</li>
                            <li>Responsive and accessible design</li>
                            <li>Clean, maintainable code</li>
                            <li>Performance optimization and best practices</li>
                            <li>Clear communication and on-time delivery</li>
                        </ul>
                    </MotionDiv>

                    <div className="flex gap-4">
                        <Button size="lg" asChild>
                            <Link href="/contact">
                                Let&apos;s Talk <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                        <Button variant="outline" size="lg" asChild>
                            <Link href="/projects">
                                View Projects
                            </Link>
                        </Button>
                    </div>
                </MotionDiv>
            </div>
        </div>
    );
}
