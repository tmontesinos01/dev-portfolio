"use client"

import * as React from "react"

export function RevealInit() {
    React.useEffect(() => {
        const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"))

        for (const el of elements) {
            el.classList.add("reveal")
        }

        if (elements.length === 0) return

        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (!entry.isIntersecting) continue

                    const el = entry.target as HTMLElement
                    const delay = el.dataset.revealDelay
                    if (delay) {
                        el.style.transitionDelay = `${Number(delay)}ms`
                    }

                    el.classList.add("reveal-visible")
                    observer.unobserve(el)
                }
            },
            { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
        )

        for (const el of elements) observer.observe(el)

        return () => observer.disconnect()
    }, [])

    return null
}
