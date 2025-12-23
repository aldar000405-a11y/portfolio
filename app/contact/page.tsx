"use client";

import { useState, useRef, useEffect } from "react";
import { MotionDiv } from "@/components/motion/motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Mail, Send, CheckCircle } from "lucide-react";
import { siteConfig } from "@/config/site.config";
import Link from "next/link";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState("");
    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        // Initialize EmailJS with public key
        const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";
        if (!publicKey) {
            console.warn("EmailJS Public Key not found in environment variables");
        }
        emailjs.init(publicKey);
    }, []);

    async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsLoading(true);
        setError("");

        try {
            // Validate environment variables
            const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
            const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
            const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

            if (!serviceId || !templateId || !publicKey) {
                throw new Error(
                    "Missing EmailJS configuration. Please check your .env.local file. " +
                    `Service ID: ${serviceId ? "✓" : "✗"}, ` +
                    `Template ID: ${templateId ? "✓" : "✗"}, ` +
                    `Public Key: ${publicKey ? "✓" : "✗"}`
                );
            }

            const formData = new FormData(event.currentTarget);
            const name = formData.get("name") as string;
            const emailAddress = formData.get("email") as string;
            const subject = formData.get("subject") as string;
            const message = formData.get("message") as string;

            // Validate form fields
            if (!name || !emailAddress || !subject || !message) {
                throw new Error("Please fill in all fields");
            }

            console.log("Sending email with EmailJS...");

            // Send email using EmailJS
            const response = await emailjs.send(
                serviceId,
                templateId,
                {
                    title: "New Contact Message",
                    name: name,
                    from_email: emailAddress,
                    subject: subject,
                    message: message,
                    email: emailAddress,
                }
            );

            console.log("Email sent successfully:", response);
            setIsSuccess(true);
            if (formRef.current) {
                formRef.current.reset();
            }
        } catch (err: any) {
            const errorMessage = err?.message || "Failed to send message";
            
            // Check if it's a quota limit error
            let displayError = errorMessage;
            if (errorMessage.includes("quota") || errorMessage.includes("limit") || errorMessage.includes("429")) {
                displayError = "Our email service has reached its daily limit. Please contact us via WhatsApp: +971 52 202 6061. We'll respond to your message right away!";
            } else {
                displayError = `${errorMessage}. If the issue persists, please message us on WhatsApp: +971 52 202 6061`;
            }
            
            setError(displayError);
            console.error("Contact form error:", {
                message: errorMessage,
                error: err,
                status: err?.status,
            });
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
                                            className="p-4 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700"
                                        >
                                            <p className="text-amber-900 dark:text-amber-100 text-sm font-medium mb-2">
                                                ⚠️ Unable to Send Message
                                            </p>
                                            <p className="text-amber-800 dark:text-amber-200 text-sm mb-3">
                                                {error}
                                            </p>
                                            <p className="text-amber-700 dark:text-amber-300 text-sm font-semibold">
                                                📱 WhatsApp: <a href="https://wa.me/971522026061" target="_blank" rel="noopener noreferrer" className="underline hover:text-amber-900 dark:hover:text-amber-100">+971 52 202 6061</a>
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
                                            "Send Message"
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
