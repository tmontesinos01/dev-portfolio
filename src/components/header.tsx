"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"

export function Header() {
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
