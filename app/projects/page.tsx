import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Github, ExternalLink } from "lucide-react";
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

export const metadata: Metadata = {
    title: "Projects",
    description: "A showcase of my recent frontend development work.",
};

export default function ProjectsPage() {
    return (
        <div className="space-y-8 animate-in fade-in-50 duration-500">
            <div className="flex flex-col space-y-4">
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl font-heading">
                    Projects
                </h1>
                <p className="text-muted-foreground text-xl max-w-2xl">
                    Here are some of the projects I&apos;ve worked on, ranging from complex dashboards to accessible landing pages.
                </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
                {projects.map((project) => (
                    <Card key={project.id} className="flex flex-col h-full overflow-hidden transition-all hover:shadow-md">
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
                                        <ExternalLink className="mr-2 h-4 w-4" /> Demo
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
                ))}
            </div>
        </div>
    );
}
