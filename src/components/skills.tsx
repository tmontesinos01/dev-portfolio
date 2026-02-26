import { Code2, Database, Layout, Server, Settings, Smartphone } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const skills = [
    {
        category: "Frontend",
        icon: Layout,
        items: ["React.js", "Next.js", "Angular", "JavaScript", "TypeScript", "Tailwind CSS"],
    },
    {
        category: "Backend",
        icon: Server,
        items: ["Python", "PHP", "C#/.NET", "Java", "Node.js"],
    },
    {
        category: "Mobile & Database",
        icon: Database,
        items: ["React Native", "MySQL", "PostgreSQL"],
    },
    {
        category: "DevOps & Tools",
        icon: Settings,
        items: ["Git", "Docker", "Linux", "API Integration", "WebSockets"],
    },
]

export function Skills() {
    return (
        <section id="skills" className="py-24 px-6 md:px-20 max-w-5xl mx-auto bg-muted/30">
            <div data-reveal className="space-y-12">
                    <div className="space-y-4 text-center md:text-left">
                        <h2 className="text-3xl font-bold tracking-tight">Tech Stack</h2>
                        <p className="text-muted-foreground max-w-2xl">
                            A curated list of technologies I use to build performant and scalable applications.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {skills.map((skill, index) => (
                            <div
                                key={skill.category}
                                data-reveal
                                data-reveal-delay={index * 100}
                            >
                                <Card className="h-full border-none shadow-sm bg-background/50 hover:bg-background transition-colors">
                                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                                        <div className="p-2 rounded-md bg-brand/10 text-brand">
                                            <skill.icon className="w-6 h-6" />
                                        </div>
                                        <CardTitle className="text-lg font-medium">{skill.category}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex flex-wrap gap-2">
                                            {skill.items.map((item) => (
                                                <Badge key={item} variant="secondary" className="font-normal text-sm px-3 py-1">
                                                    {item}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        ))}
                    </div>
            </div>
        </section>
    )
}
