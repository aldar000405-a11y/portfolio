export type Project = {
    id: string;
    slug: string;
    title: string;
    description: string;
    tech: string[];
    github?: string;
    demo?: string;
    image?: string;
    featured: boolean;
};

export const projects: Project[] = [
    {
        id: "1",
        slug: "project-four",
        title: "Dashboard Project",
        description: "A fully-functional admin dashboard featuring multiple pages for managing various aspects of a business. Built with vanilla HTML, CSS, and JavaScript with a custom CSS framework for scalable styling and responsive design.",
        tech: ["HTML", "CSS", "JavaScript", "CSS Framework"],
        github: "https://github.com/aldar000405-a11y/project-4",
        demo: "https://aldar000405-a11y.github.io/project-4/",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
        featured: true,
    },
    {
        id: "2",
        slug: "project-three",
        title: "Professional Landing Page",
        description: "An impressive long-form landing page showcasing modern web design principles. Created with semantic HTML, CSS styling, and JavaScript interactivity to deliver a compelling user experience and drive conversions.",
        tech: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/aldar000405-a11y/project-3",
        demo: "https://aldar000405-a11y.github.io/project-3/",
        image: "https://images.unsplash.com/photo-1460925895917-aae19106c31f?w=800&q=80",
        featured: true,
    },
    {
        id: "3",
        slug: "project-two",
        title: "Web Application Project",
        description: "A responsive web application demonstrating core web development skills. Built with fundamental technologies including HTML for structure, CSS for styling, and JavaScript for dynamic functionality.",
        tech: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/aldar000405-a11y/project-2",
        demo: "https://aldar000405-a11y.github.io/project-2/",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80",
        featured: false,
    },
];
