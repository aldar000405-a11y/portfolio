import Link from "next/link";
import { siteConfig } from "@/config/site.config";

export function Footer() {
    return (
        <footer className="border-t py-6 md:py-0">
            <div className="container mx-auto px-4 flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                    Built by{" "}
                    <a
                        href={siteConfig.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium underline underline-offset-4"
                    >
                        {siteConfig.authors[0].name}
                    </a>
                    . The source code is available on{" "}
                    <a
                        href={siteConfig.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="font-medium underline underline-offset-4"
                    >
                        GitHub
                    </a>
                    .
                </p>
                <div className="flex items-center space-x-4">
                    {/* Add social icons here if needed, or keeping it minimal */}
                </div>
            </div>
        </footer>
    );
}
