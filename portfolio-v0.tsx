"use client"

import * as React from "react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { Moon, Sun, Github, Linkedin, FileText, ArrowRight, Mail, MapPin, Send, ExternalLink, Briefcase, User, Code2, Database, Layout, Server, Settings } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

// Theme Toggle Component
function ModeToggle() {
    const { setTheme, theme } = useTheme()

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="rounded-full"
        >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}

// Header Component
function Header() {
    const { scrollY } = useScroll()
    const [isScrolled, setIsScrolled] = React.useState(false)

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50)
    })

    const navItems = [
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ]

    return (
        <motion.header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border/50 py-4" : "bg-transparent py-6"
            )}
        >
            <div className="px-6 md:px-20 max-w-7xl mx-auto flex items-center justify-between">
                <Link href="#" className="text-xl font-bold tracking-tighter">
                    Portfolio<span className="text-brand">.</span>
                </Link>

                <div className="flex items-center gap-4">
                    <nav className="hidden md:flex items-center gap-6">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Button asChild size="sm" className="bg-foreground text-background hover:bg-foreground/90 rounded-full">
                            <Link href="#contact">Hire Me</Link>
                        </Button>
                    </nav>
                    <ModeToggle />
                </div>
            </div>
        </motion.header>
    )
}

// Hero Component
function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-start px-6 md:px-20 max-w-5xl mx-auto pt-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
            >
                <div className="space-y-2">
                    <h2 className="text-brand font-medium tracking-wide text-sm uppercase">Full Stack Developer</h2>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
                        Building scalable & <br className="hidden md:block" />
                        elegant web solutions.
                    </h1>
                </div>

                <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed">
                    I specialize in crafting high-performance applications with a focus on clean code, minimalist design, and exceptional user experience.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                    <Button asChild size="lg" className="rounded-full bg-foreground text-background hover:bg-foreground/90">
                        <Link href="#projects">
                            View Work <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="rounded-full">
                        <Link href="/cv.pdf" target="_blank">
                            <FileText className="mr-2 h-4 w-4" /> Resume
                        </Link>
                    </Button>
                    <div className="flex gap-2 ml-2">
                        <Button asChild variant="ghost" size="icon" className="rounded-full">
                            <Link href="https://github.com" target="_blank">
                                <Github className="h-5 w-5" />
                                <span className="sr-only">GitHub</span>
                            </Link>
                        </Button>
                        <Button asChild variant="ghost" size="icon" className="rounded-full">
                            <Link href="https://linkedin.com" target="_blank">
                                <Linkedin className="h-5 w-5" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                        </Button>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

// About Component
function About() {
    return (
        <section id="about" className="py-24 px-6 md:px-20 max-w-5xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-[1fr_2fr] gap-12 items-start"
            >
                <div className="relative">
                    <div className="aspect-square w-full max-w-[250px] bg-muted rounded-2xl flex items-center justify-center overflow-hidden mx-auto md:mx-0">
                        <User className="w-24 h-24 text-muted-foreground/50" />
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand/10 rounded-full -z-10 blur-2xl" />
                </div>

                <div className="space-y-6">
                    <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <p>
                            I'm a passionate Full Stack Developer with a keen eye for design and a drive for creating seamless digital experiences. With a background in both engineering and design, I bridge the gap between technical functionality and aesthetic appeal.
                        </p>
                        <p>
                            My journey in tech began with a curiosity for how things work, which quickly evolved into a career building robust web applications. I thrive in collaborative environments and enjoy solving complex problems with clean, maintainable code.
                        </p>
                        <p>
                            When I'm not coding, you can find me exploring new technologies, contributing to open source, or enjoying a good cup of coffee while sketching out new ideas.
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

// Skills Component
function Skills() {
    const skills = [
        {
            category: "Frontend",
            icon: Layout,
            items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux"],
        },
        {
            category: "Backend",
            icon: Server,
            items: ["Node.js", "Express", "NestJS", "Python", "Go", "GraphQL"],
        },
        {
            category: "Database",
            icon: Database,
            items: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Supabase"],
        },
        {
            category: "DevOps & Tools",
            icon: Settings,
            items: ["Git", "Docker", "AWS", "CI/CD", "Vercel", "Linux"],
        },
    ]

    return (
        <section id="skills" className="py-24 px-6 md:px-20 max-w-5xl mx-auto bg-muted/30">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-12"
            >
                <div className="space-y-4 text-center md:text-left">
                    <h2 className="text-3xl font-bold tracking-tight">Tech Stack</h2>
                    <p className="text-muted-foreground max-w-2xl">
                        A curated list of technologies I use to build performant and scalable applications.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
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
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

// Experience Component
function Experience() {
    const experiences = [
        {
            company: "Tech Solutions Inc.",
            role: "Senior Full Stack Developer",
            date: "2022 - Present",
            description: "Leading a team of 5 developers in building a SaaS platform. Implemented microservices architecture and improved system performance by 40%.",
        },
        {
            company: "Digital Innovations",
            role: "Frontend Developer",
            date: "2020 - 2022",
            description: "Developed responsive web applications using React and Next.js. Collaborated with designers to implement pixel-perfect UIs.",
        },
        {
            company: "StartUp Hub",
            role: "Junior Developer",
            date: "2018 - 2020",
            description: "Assisted in backend development with Node.js. Built RESTful APIs and managed database migrations.",
        },
    ]

    return (
        <section id="experience" className="py-24 px-6 md:px-20 max-w-5xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-12"
            >
                <div className="space-y-4 text-center md:text-left">
                    <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
                    <p className="text-muted-foreground max-w-2xl">
                        My professional journey and the companies I've had the privilege to work with.
                    </p>
                </div>

                <div className="relative border-l border-border ml-3 md:ml-6 space-y-12 pb-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative pl-8 md:pl-12"
                        >
                            <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-brand ring-4 ring-background" />

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                <h3 className="text-xl font-semibold">{exp.role}</h3>
                                <span className="text-sm text-muted-foreground font-mono bg-muted px-2 py-1 rounded">
                                    {exp.date}
                                </span>
                            </div>

                            <div className="text-lg font-medium text-foreground/80 mb-2 flex items-center gap-2">
                                <Briefcase className="w-4 h-4 text-brand" />
                                {exp.company}
                            </div>

                            <p className="text-muted-foreground leading-relaxed">
                                {exp.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

// Projects Component
function Projects() {
    const projects = [
        {
            title: "E-Commerce Platform",
            description: "A full-featured online store with real-time inventory management, stripe integration, and an admin dashboard.",
            tags: ["Next.js", "TypeScript", "Prisma", "Stripe", "Tailwind"],
            demoUrl: "https://example.com",
            codeUrl: "https://github.com",
        },
        {
            title: "Task Management App",
            description: "A collaborative task manager with real-time updates, drag-and-drop interface, and team workspaces.",
            tags: ["React", "Firebase", "Redux", "Material UI"],
            demoUrl: "https://example.com",
            codeUrl: "https://github.com",
        },
        {
            title: "AI Content Generator",
            description: "An application that uses OpenAI's API to generate blog posts, social media captions, and marketing copy.",
            tags: ["Next.js", "OpenAI API", "Vercel AI SDK", "Shadcn UI"],
            demoUrl: "https://example.com",
            codeUrl: "https://github.com",
        },
    ]

    return (
        <section id="projects" className="py-24 px-6 md:px-20 max-w-5xl mx-auto bg-muted/30">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-12"
            >
                <div className="space-y-4 text-center md:text-left">
                    <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
                    <p className="text-muted-foreground max-w-2xl">
                        A selection of projects that demonstrate my technical skills and problem-solving abilities.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
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
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

// Contact Component
function Contact() {
    return (
        <section id="contact" className="py-24 px-6 md:px-20 max-w-5xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 gap-12 items-start"
            >
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tight">Get in Touch</h2>
                        <p className="text-muted-foreground">
                            Have a project in mind or just want to say hi? I'm always open to new opportunities and collaborations.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center gap-3 text-muted-foreground">
                            <Mail className="w-5 h-5 text-brand" />
                            <span>hello@example.com</span>
                        </div>
                        <div className="flex items-center gap-3 text-muted-foreground">
                            <MapPin className="w-5 h-5 text-brand" />
                            <span>San Francisco, CA</span>
                        </div>
                    </div>
                </div>

                <form className="space-y-6 bg-muted/30 p-6 rounded-2xl border border-border/50" onSubmit={(e) => e.preventDefault()}>
                    <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input id="name" placeholder="John Doe" className="bg-background" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="john@example.com" className="bg-background" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" placeholder="Tell me about your project..." className="min-h-[120px] bg-background" />
                    </div>
                    <Button type="submit" className="w-full bg-brand hover:bg-brand/90 text-white">
                        Send Message <Send className="ml-2 h-4 w-4" />
                    </Button>
                </form>
            </motion.div>
        </section>
    )
}

// WhatsApp Button Component
function WhatsAppButton() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.3 }}
            className="fixed bottom-6 right-6 z-50"
        >
            <Button
                asChild
                size="icon"
                className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#25D366]/90 shadow-lg hover:shadow-xl transition-all hover:scale-110"
            >
                <Link
                    href="https://wa.me/1234567890"
                    target="_blank"
                    aria-label="Contact on WhatsApp"
                >
                    <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-8 h-8 text-white"
                    >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                </Link>
            </Button>
        </motion.div>
    )
}

// Main Portfolio Component
export default function Portfolio() {
    return (
        <main className="min-h-screen bg-background selection:bg-brand/20">
            <Header />
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
            <WhatsAppButton />

            <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border/50">
                <p>© {new Date().getFullYear()} Portfolio. Built with Next.js & Tailwind.</p>
            </footer>
        </main>
    )
}
