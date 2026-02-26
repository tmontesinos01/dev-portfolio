import { Briefcase } from "lucide-react"

const experiences = [
    {
        company: "Agremiación Médica Platense",
        role: "Full Stack Developer",
        date: "2022 - Present",
        description: "Developing end-to-end web systems for the healthcare sector. Built automated workflows for internal processes, affiliate management modules, and specialized tools for medical professionals. Responsible for continuous maintenance, optimization, and technical support.",
    },
    {
        company: "Keeper Magic",
        role: "Full Stack Developer",
        date: "2019 - 2021",
        description: "Developed comprehensive management systems with electronic invoicing (ARCA/AFIP integration) and external service integrations. Implemented WhatsApp messaging automation, built a complete domotics robot with full-stack architecture, and optimized database performance.",
    },
]

export function Experience() {
    return (
        <section id="experience" className="py-24 px-6 md:px-20 max-w-5xl mx-auto">
            <div data-reveal className="space-y-12">
                    <div className="space-y-4 text-center md:text-left">
                        <h2 className="text-3xl font-bold tracking-tight">Experience</h2>
                        <p className="text-muted-foreground max-w-2xl">
                            My professional journey and the companies I've had the privilege to work with.
                        </p>
                    </div>

                    <div className="relative border-l border-border ml-3 md:ml-6 space-y-12 pb-12">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                data-reveal
                                data-reveal-delay={index * 100}
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
                            </div>
                        ))}
                    </div>
            </div>
        </section>
    )
}
