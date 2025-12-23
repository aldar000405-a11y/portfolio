import { Hero } from "@/components/sections/hero";
import { TechStack } from "@/components/sections/tech-stack";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { CTA } from "@/components/sections/cta";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <TechStack />
      <FeaturedProjects />
      <CTA />
    </div>
  );
}
