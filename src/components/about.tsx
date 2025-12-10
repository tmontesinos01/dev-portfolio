"use client"

import { motion } from "framer-motion"
import { User } from "lucide-react"

export function About() {
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
                        {/* Replace with <Image /> when available */}
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand/10 rounded-full -z-10 blur-2xl" />
                </div>

                <div className="space-y-6">
                    <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                        <p>
                            I'm Tomas Alejandro Montesinos Martínez, a Full Stack Developer with over 5 years of professional experience building scalable web applications, management systems, and automated workflows. I specialize in creating end-to-end solutions that solve real-world problems.
                        </p>
                        <p>
                            My expertise spans both frontend and backend development, with a strong focus on database optimization, API integrations, and systems automation. I've worked extensively in the healthcare sector and developed complex systems including electronic invoicing platforms, real-time messaging integrations, and IoT control systems.
                        </p>
                        <p>
                            I believe in clean architecture, minimalist design, and writing maintainable code that stands the test of time. My approach combines technical excellence with practical problem-solving to deliver solutions that truly make a difference.
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
