"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react" // Added import

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background pt-10">
      <div className="container px-4 md:px-6 relative z-10 text-center max-w-4xl mx-auto">
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium leading-tight text-foreground">
            Leadership through <span className="text-primary italic">coherence</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Where thought, emotion, and action move in alignment.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-8 py-6 text-lg"
            >
              <a href="https://calendly.com/elenawalom" target="_blank" rel="noopener noreferrer">
                Book a Consultation
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary text-foreground hover:bg-primary/10 rounded-none px-8 py-6 text-lg bg-transparent"
            >
              <a href="#about">Learn More</a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary/50 animate-bounce">
        <ArrowDown className="w-8 h-8" />
      </div>
    </section>
  )
}
