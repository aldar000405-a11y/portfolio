"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
import { MotionSection, MotionDiv } from "@/components/motion/motion";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";

export function FeaturedProjects() {
    const featuredOnly = projects.filter((project) => project.featured).slice(0, 2);

    return (
        <MotionSection
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4 py-12 md:py-24"
        >
            <div className="flex flex-col space-y-8">
                <div className="flex flex-col space-y-4 text-center sm:text-left">
                    <h2 className="text-2xl font-bold tracking-tighter md:text-3xl font-heading">
                        Featured Work
                    </h2>
                    <p className="text-muted-foreground text-base max-w-[42rem]">
                        A selection of projects that showcase my passion for building
                        accessible and performant interfaces.
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
                    {featuredOnly.map((project, index) => (
                        <MotionDiv
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card className="flex flex-col h-full overflow-hidden transition-all hover:shadow-lg dark:hover:shadow-primary/5">
                                {project.image && (
                                    <div className="relative w-full h-48 overflow-hidden bg-muted">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-300 hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            priority={index === 0}
                                        />
                                    </div>
                                )}
                                <CardHeader>
                                    <CardTitle>{project.title}</CardTitle>
                                    <CardDescription className="line-clamp-2">
                                        {project.description}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="flex-1">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech) => (
                                            <Badge key={tech} variant="secondary">
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter className="flex gap-4">
                                    {project.github && (
                                        <Button variant="outline" size="sm" asChild>
                                            <Link href={project.github} target="_blank">
                                                <Github className="mr-2 h-4 w-4" /> Code
                                            </Link>
                                        </Button>
                                    )}
                                    {project.demo && (
                                        <Button size="sm" asChild>
                                            <Link href={project.demo} target="_blank">
                                                <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                                            </Link>
                                        </Button>
                                    )}
                                    <Button variant="ghost" size="sm" asChild className="ml-auto">
                                        <Link href={`/projects/${project.slug}`}>
                                            Details <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </MotionDiv>
                    ))}
                </div>
                <div className="flex justify-center pt-8">
                    <Button variant="outline" size="lg" asChild>
                        <Link href="/projects">
                            View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </MotionSection>
    );
}
