"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function RetreatsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Coming Soon Section */}
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted/20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl md:text-6xl font-serif text-foreground mb-4 text-balance">Retreats</h1>
                <p className="text-2xl text-primary font-semibold mb-4">Coming Soon</p>
              </div>

              <p className="text-xl text-muted-foreground leading-relaxed text-balance">
                We're designing immersive somatic retreats that combine embodied leadership training with the healing
                power of community and nature.
              </p>

              <div className="bg-card border border-border rounded-lg p-8 space-y-4">
                <h3 className="text-lg font-semibold text-foreground">What to Expect:</h3>
                <ul className="text-muted-foreground space-y-3 text-left max-w-md mx-auto">
                  <li className="flex gap-3">
                    <span className="text-primary">✓</span>
                    Multi-day immersive experiences
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">✓</span>
                    Grounded in somatic practice
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">✓</span>
                    Community and connection
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">✓</span>
                    Beautiful natural settings
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary">✓</span>
                    Practical tools for lasting change
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <p className="text-muted-foreground">Be among the first to know when retreats are available.</p>
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <a href="/#newsletter">Join the Waitlist</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
