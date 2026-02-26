import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const projects = [
    {
        title: "Healthcare Management Platform",
        description: "Comprehensive web system for medical affiliate management with automated workflows, internal process optimization, and specialized tools for healthcare professionals.",
        tags: ["React", "PHP", "MySQL", "C#/.NET", "Automation"],
        demoUrl: "#",
        codeUrl: "#",
    },
    {
        title: "Electronic Invoicing System",
        description: "Complete ARCA/AFIP integration platform for automated electronic invoicing with real-time validation, compliance management, and service integrations.",
        tags: ["Python", "PHP", "PostgreSQL", "API Integration", "AFIP"],
        demoUrl: "#",
        codeUrl: "#",
    },
    {
        title: "WhatsApp Automation Platform",
        description: "Real-time messaging integration system for automated customer communication with WebSocket support and multi-channel management capabilities.",
        tags: ["Node.js", "WhatsApp API", "WebSockets", "React", "Real-time"],
        demoUrl: "#",
        codeUrl: "#",
    },
    {
        title: "IoT Domotics Control System",
        description: "Full-stack robot control system with responsive UI, real-time device monitoring, and automated home automation workflows.",
        tags: ["Python", "React", "IoT", "Real-time", "Automation"],
        demoUrl: "#",
        codeUrl: "#",
    },
]

export function Projects() {
    return (
        <section id="projects" className="py-24 px-6 md:px-20 max-w-5xl mx-auto bg-muted/30">
            <div data-reveal className="space-y-12">
                    <div className="space-y-4 text-center md:text-left">
                        <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
                        <p className="text-muted-foreground max-w-2xl">
                            A selection of projects that demonstrate my technical skills and problem-solving abilities.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((project, index) => (
                            <div
                                key={index}
                                data-reveal
                                data-reveal-delay={index * 100}
                                className="h-full"
                            >
                                <Card className="h-full flex flex-col border-none shadow-sm hover:shadow-md transition-shadow bg-background">
                                    <CardHeader>
                                        <CardTitle className="text-xl">{project.title}</CardTitle>
                                        <CardDescription className="line-clamp-2 mt-2">
                                            {project.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-grow">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map((tag) => (
                                                <Badge key={tag} variant="outline" className="font-normal text-xs">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                    <CardFooter className="flex flex-col sm:flex-row gap-2 pt-4">
                                        <Button asChild variant="outline" size="sm" className="w-full sm:flex-1">
                                            <Link href={project.codeUrl} target="_blank">
                                                <Github className="mr-2 h-4 w-4" /> Code
                                            </Link>
                                        </Button>
                                        <Button asChild size="sm" className="w-full sm:flex-1 bg-brand hover:bg-brand/90 text-white">
                                            <Link href={project.demoUrl} target="_blank">
                                                <ExternalLink className="mr-2 h-4 w-4" /> Demo
                                            </Link>
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </div>
                        ))}
                    </div>
            </div>
        </section>
    )
}
