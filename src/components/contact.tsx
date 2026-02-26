"use client"

import { Send, Mail, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function Contact() {
    return (
        <section id="contact" className="py-24 px-6 md:px-20 max-w-5xl mx-auto">
            <div data-reveal className="grid md:grid-cols-2 gap-12 items-start">
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
                                <a
                                    href="mailto:montesinost01@gmail.com?subject=Consulta%20desde%20Portfolio&body=Hola%20Tomas%2C%0A%0AVi%20tu%20portfolio%20y%20me%20gustar%C3%ADa%20contactarte%20para%20hablar%20sobre%20un%20proyecto.%0A%0ASaludos"
                                    className="hover:text-brand transition-colors"
                                >
                                    montesinost01@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center gap-3 text-muted-foreground">
                                <MapPin className="w-5 h-5 text-brand" />
                                <span>La Plata, Buenos Aires, Argentina</span>
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
            </div>
        </section>
    )
}
