"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, FileText, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
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
            automated solutions.
          </h1>
        </div>

        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl leading-relaxed">
          5+ years crafting web applications, management systems, and automated workflows. Specialized in API integrations, clean architecture, and real-world problem solving.
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
              <Link href="https://www.linkedin.com/in/tomas-montesinos/" target="_blank">
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
