"use client";

import { MotionSection } from "@/components/motion/motion";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/data/skills";

export function TechStack() {
    // Combine top skills for display
    const highlightedSkills = [...skills.core, ...skills.styling].slice(0, 8);

    return (
        <MotionSection
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="container mx-auto px-4 py-12 border-t"
        >
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl font-heading">
                    Tech Stack
                </h2>
                <div className="flex flex-wrap justify-center gap-2 max-w-2xl">
                    {highlightedSkills.map((skill) => (
                        <Badge key={skill.name} variant="secondary" className="px-4 py-2 text-sm">
                            {skill.name}
                        </Badge>
                    ))}
                    <Badge variant="outline" className="px-4 py-2 text-sm">
                        + More
                    </Badge>
                </div>
            </div>
        </MotionSection>
    );
}
