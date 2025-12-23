import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";

type Props = {
    params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const slug = (await params).slug;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return {
            title: "Project Not Found",
        };
    }

    return {
        title: project.title,
        description: project.description,
    };
}

export default async function ProjectPage({
    params,
}: Props) {
    const slug = (await params).slug;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="space-y-8 animate-in fade-in-50 duration-500">
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="sm" asChild>
                    <Link href="/projects">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
                    </Link>
                </Button>
            </div>

            <div className="space-y-4">
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl font-heading">
                    {project.title}
                </h1>
                <p className="text-xl text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-base px-4 py-1">
                            {tech}
                        </Badge>
                    ))}
                </div>
            </div>

            <div className="flex gap-4 border-y py-6">
                {project.github && (
                    <Button size="lg" variant="outline" asChild>
                        <Link href={project.github} target="_blank">
                            <Github className="mr-2 h-4 w-4" /> View Source
                        </Link>
                    </Button>
                )}
                {project.demo && (
                    <Button size="lg" asChild>
                        <Link href={project.demo} target="_blank">
                            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                        </Link>
                    </Button>
                )}
            </div>

            <div className="prose prose-gray dark:prose-invert max-w-none">
                <h2>About the project</h2>
                <p>
                    This is a placeholder description for the project. In the future, this
                    section will contain detailed case study information, challenges faced,
                    and solutions implemented.
                </p>
                <p>
                    It was built using modern frontend technologies and follows best practices for accessibility and performance.
                </p>
            </div>
        </div>
    );
}
