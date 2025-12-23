import type { Metadata } from "next";
import { MotionDiv, MotionSection } from "@/components/motion/motion";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skills } from "@/data/skills";

export const metadata: Metadata = {
    title: "Skills",
    description: "My technical stack and proficiency levels.",
};

export default function SkillsPage() {
    return (
        <div className="container mx-auto px-4 py-12 space-y-12 animate-in fade-in-50 duration-500">
            <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col space-y-4 text-center md:text-left"
            >
                <h1 className="text-3xl font-bold tracking-tight lg:text-4xl font-heading">
                    Technical Skills
                </h1>
                <p className="text-muted-foreground text-base max-w-2xl">
                    My expertise spans the entire frontend spectrum, from core languages to
                    modern frameworks and performance optimization.
                </p>
            </MotionDiv>

            <div className="space-y-8">
                <MotionSection
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-2xl font-bold mb-6 font-heading">Front-End Fundamentals</h2>
                    <div className="grid gap-6 md:grid-cols-3">
                        {skills.core.map((skill, index) => (
                            <div key={skill.name} className="space-y-2">
                                <div className="flex justify-between">
                                    <span className="font-medium">{skill.name}</span>
                                    <span className="text-muted-foreground text-sm">{skill.level}%</span>
                                </div>
                                <Progress value={skill.level} className="h-2" />
                            </div>
                        ))}
                    </div>
                </MotionSection>

                <div className="grid gap-8 md:grid-cols-2">
                    <MotionDiv
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle>Styling & UI Development</CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-wrap gap-2">
                                {skills.styling.map((skill) => (
                                    <Badge key={skill.name} variant="secondary">
                                        {skill.name}
                                    </Badge>
                                ))}
                            </CardContent>
                        </Card>
                    </MotionDiv>

                    <MotionDiv
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle>UI / UX & Experience</CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-wrap gap-2">
                                {skills.uxFocus.map((skill) => (
                                    <Badge key={skill.name} variant="secondary">
                                        {skill.name}
                                    </Badge>
                                ))}
                            </CardContent>
                        </Card>
                    </MotionDiv>

                    <MotionDiv
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle>Performance & Code Quality</CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-wrap gap-2">
                                {skills.performance.map((skill) => (
                                    <Badge key={skill.name} variant="secondary">
                                        {skill.name}
                                    </Badge>
                                ))}
                            </CardContent>
                        </Card>
                    </MotionDiv>

                    <MotionDiv
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle>Business-Focused Development</CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-wrap gap-2">
                                {skills.business.map((skill) => (
                                    <Badge key={skill.name} variant="secondary">
                                        {skill.name}
                                    </Badge>
                                ))}
                            </CardContent>
                        </Card>
                    </MotionDiv>

                    <MotionDiv
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle>Tools & Workflow</CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-wrap gap-2">
                                {skills.tools.map((skill) => (
                                    <Badge key={skill.name} variant="secondary">
                                        {skill.name}
                                    </Badge>
                                ))}
                            </CardContent>
                        </Card>
                    </MotionDiv>

                    <MotionDiv
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle>Development Mindset</CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-wrap gap-2">
                                {skills.mindset.map((skill) => (
                                    <Badge key={skill.name} variant="secondary">
                                        {skill.name}
                                    </Badge>
                                ))}
                            </CardContent>
                        </Card>
                    </MotionDiv>
                </div>
            </div>
        </div>
    );
}
