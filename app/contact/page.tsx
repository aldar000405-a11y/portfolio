"use client";

import { useState, useRef } from "react";
import { MotionDiv } from "@/components/motion/motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Mail, Send, CheckCircle } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import Link from "next/link";

export default function ContactPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState("");
    const formRef = useRef<HTMLFormElement>(null);

    async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsLoading(true);
        setError("");

        try {
            const formData = new FormData(event.currentTarget);
            const name = formData.get("name") as string;
            const emailAddress = formData.get("email") as string;
            const subject = formData.get("subject") as string;
            const message = formData.get("message") as string;

            // Validate form fields
            if (!name || !emailAddress || !subject || !message) {
                throw new Error("Please fill in all fields");
            }

            // Send email using server-side API (Resend)
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email: emailAddress,
                    subject,
                    message,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || "Failed to send message");
            }

            setIsSuccess(true);
            if (formRef.current) {
                formRef.current.reset();
            }
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : "Failed to send message";
            setError(errorMessage);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="container mx-auto px-4 py-12 animate-in fade-in-50 duration-500">
            <div className="grid gap-12 lg:grid-cols-2">
                <MotionDiv
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="space-y-8"
                >
                    <div className="space-y-4">
                        <h1 className="text-3xl font-bold tracking-tight lg:text-4xl font-heading">
                            Get in Touch
                        </h1>
                        <p className="text-muted-foreground text-base">
                            Have a project in mind or want to say hello? I&apos;d love to hear from you.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-full bg-secondary">
                                <Mail className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="font-medium text-sm">Email</p>
                                <a href={siteConfig.links.email} className="text-muted-foreground hover:text-foreground text-sm">
                                    mohummadsultan0@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-full bg-secondary">
                                <Github className="h-6 w-6" />
                            </div>
                            <div>
                                <p className="font-medium text-sm">GitHub</p>
                                <Link href={siteConfig.links.github} target="_blank" className="text-muted-foreground hover:text-foreground text-sm">
                                    github.com/aldar000405-a11y
                                </Link>
                            </div>
                        </div>
                    </div>
                </MotionDiv>

                <MotionDiv
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Card>
                        <CardHeader>
                            <CardTitle>Send a Message</CardTitle>
                            <CardDescription>
                                Fill out the form below and I&apos;ll get back to you as soon as possible.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            {isSuccess ? (
                                <MotionDiv
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, type: "spring" }}
                                    className="flex flex-col items-center justify-center space-y-4 py-12 text-center"
                                >
                                    <MotionDiv
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
                                    >
                                        <div className="p-4 rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400">
                                            <CheckCircle className="h-8 w-8" />
                                        </div>
                                    </MotionDiv>
                                    <MotionDiv
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.3 }}
                                    >
                                        <h3 className="text-2xl font-bold">Message Sent Successfully!</h3>
                                    </MotionDiv>
                                    <MotionDiv
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.4 }}
                                    >
                                        <p className="text-muted-foreground">
                                            Thank you for reaching out. I&apos;ll get back to you as soon as possible at your email address.
                                        </p>
                                    </MotionDiv>
                                    <MotionDiv
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5, delay: 0.5 }}
                                    >
                                        <Button onClick={() => setIsSuccess(false)} variant="outline">
                                            Send Another Message
                                        </Button>
                                    </MotionDiv>
                                </MotionDiv>
                            ) : (
                                <form ref={formRef} onSubmit={onSubmit} className="space-y-4">
                                    {error && (
                                        <MotionDiv
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700"
                                        >
                                            <p className="text-red-900 dark:text-red-100 text-sm font-medium">
                                                Error: {error}
                                            </p>
                                        </MotionDiv>
                                    )}
                                    <div className="grid gap-4 md:grid-cols-2">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Name</Label>
                                            <Input 
                                                id="name" 
                                                name="name"
                                                required 
                                                placeholder="John Doe" 
                                                disabled={isLoading} 
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input 
                                                id="email" 
                                                name="email"
                                                type="email" 
                                                required 
                                                placeholder="john@example.com" 
                                                disabled={isLoading} 
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="subject">Subject</Label>
                                        <Input 
                                            id="subject" 
                                            name="subject"
                                            required 
                                            placeholder="Project Inquiry" 
                                            disabled={isLoading} 
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="message">Message</Label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            required
                                            placeholder="Tell me about your project..."
                                            className="min-h-[150px]"
                                            disabled={isLoading}
                                        />
                                    </div>
                                    <Button type="submit" className="w-full" disabled={isLoading}>
                                        {isLoading ? (
                                            <span className="flex items-center justify-center gap-2">
                                                <span className="animate-spin">⚙️</span> Sending...
                                            </span>
                                        ) : (
                                            <>
                                                <Send className="mr-2 h-4 w-4" /> Send Message
                                            </>
                                        )}
                                    </Button>
                                </form>
                            )}
                        </CardContent>
                    </Card>
                </MotionDiv>
            </div>
        </div>
    );
}
