"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function OfferingsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Header Section */}
        <section className="py-16 bg-muted/20 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-serif text-foreground text-balance mb-4">Our Offerings</h1>
            <p className="text-lg text-muted-foreground max-w-2xl text-balance">
              Comprehensive support tailored to your unique needs, whether you're an individual seeking growth or an
              organization building resilience.
            </p>
          </div>
        </section>

        {/* Offerings Details */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="individuals" className="w-full">
              <TabsList className="grid w-full md:w-auto md:grid-cols-3 mb-12">
                <TabsTrigger value="individuals">For Individuals</TabsTrigger>
                <TabsTrigger value="professionals">For Professionals</TabsTrigger>
                <TabsTrigger value="organizations">For Organizations</TabsTrigger>
              </TabsList>

              {/* Individuals Tab */}
              <TabsContent value="individuals" className="space-y-12">
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="flex flex-col gap-6">
                    <h2 className="text-3xl font-serif text-foreground">Somatic Coaching for Individuals</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      One-on-one coaching designed to help you regulate your nervous system, improve your communication,
                      and navigate life with greater clarity and presence.
                    </p>
                    <div className="bg-muted/50 border border-border rounded-lg p-8">
                      <h3 className="font-semibold text-foreground mb-4">What You'll Receive:</h3>
                      <ul className="space-y-3">
                        <li className="flex gap-3 text-foreground">
                          <span className="text-primary">✓</span>
                          Nervous system regulation strategies
                        </li>
                        <li className="flex gap-3 text-foreground">
                          <span className="text-primary">✓</span>
                          Communication & relational intelligence skills
                        </li>
                        <li className="flex gap-3 text-foreground">
                          <span className="text-primary">✓</span>
                          Support navigating stress, conflict, and decision-making
                        </li>
                        <li className="flex gap-3 text-foreground">
                          <span className="text-primary">✓</span>
                          Grounded emotional processing
                        </li>
                        <li className="flex gap-3 text-foreground">
                          <span className="text-primary">✓</span>
                          Clear action steps and structured accountability
                        </li>
                        <li className="flex gap-3 text-foreground">
                          <span className="text-primary">✓</span>
                          Strengthening boundaries and self-trust
                        </li>
                      </ul>
                    </div>
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-fit">
                      <a href="https://calendly.com/elenawalom" target="_blank" rel="noopener noreferrer">
                        Book Your First Session
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-8 flex items-center justify-center min-h-96">
                    <p className="text-muted-foreground text-center">[Image: Individual in peaceful setting]</p>
                  </div>
                </div>
              </TabsContent>

              {/* Professionals Tab */}
              <TabsContent value="professionals" className="space-y-12">
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="flex flex-col gap-6">
                    <h2 className="text-3xl font-serif text-foreground">Embodied Leadership Training</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Leadership grounded in clarity, emotional steadiness, and relational harmony. Perfect for
                      founders, executives, and professional teams.
                    </p>
                    <div className="bg-muted/50 border border-border rounded-lg p-8">
                      <h3 className="font-semibold text-foreground mb-4">What's Included:</h3>
                      <ul className="space-y-3">
                        <li className="flex gap-3 text-foreground">
                          <span className="text-primary">✓</span>
                          Nervous-system-aware leadership development
                        </li>
                        <li className="flex gap-3 text-foreground">
                          <span className="text-primary">✓</span>
                          Effective communication under pressure
                        </li>
                        <li className="flex gap-3 text-foreground">
                          <span className="text-primary">✓</span>
                          Conflict navigation and repair
                        </li>
                        <li className="flex gap-3 text-foreground">
                          <span className="text-primary">✓</span>
                          Relational intelligence for team cohesion
                        </li>
                        <li className="flex gap-3 text-foreground">
                          <span className="text-primary">✓</span>
                          Presence that fosters trust and psychological safety
                        </li>
                        <li className="flex gap-3 text-foreground">
                          <span className="text-primary">✓</span>
                          Decision-making clarity and reduced reactivity
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <p className="text-sm text-muted-foreground font-medium">Available Formats:</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-4 py-2 bg-primary/10 border border-primary text-primary rounded-full text-sm">
                          Workshops
                        </span>
                        <span className="px-4 py-2 bg-primary/10 border border-primary text-primary rounded-full text-sm">
                          Executive Coaching
                        </span>
                        <span className="px-4 py-2 bg-primary/10 border border-primary text-primary rounded-full text-sm">
                          Ongoing Consulting
                        </span>
                      </div>
                    </div>
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-fit">
                      <a href="https://calendly.com/elenawalom" target="_blank" rel="noopener noreferrer">
                        Schedule a Consultation
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-8 flex items-center justify-center min-h-96">
                    <p className="text-muted-foreground text-center">[Image: Professional leadership team]</p>
                  </div>
                </div>
              </TabsContent>

              {/* Organizations Tab */}
              <TabsContent value="organizations" className="space-y-12">
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="flex flex-col gap-6">
                    <h2 className="text-3xl font-serif text-foreground">Organizational Workshops & Consulting</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      For companies, nonprofits, startups, and institutions seeking to build nervous-system-aware
                      culture and sustainable team resilience.
                    </p>
                    <div className="bg-muted/50 border border-border rounded-lg p-8">
                      <h3 className="font-semibold text-foreground mb-4">Our Approach Includes:</h3>
                      <ul className="space-y-3">
                        <li className="flex gap-3 text-foreground">
                          <span className="text-primary">✓</span>
                          Nervous-system-aware culture building
                        </li>
                        <li className="flex gap-3 text-foreground">
                          <span className="text-primary">✓</span>
                          Improved communication norms and practices
                        </li>
                        <li className="flex gap-3 text-foreground">
                          <span className="text-primary">✓</span>
                          Regulation tools for teams under chronic stress
                        </li>
                        <li className="flex gap-3 text-foreground">
                          <span className="text-primary">✓</span>
                          Leadership presence training
                        </li>
                        <li className="flex gap-3 text-foreground">
                          <span className="text-primary">✓</span>
                          Repair and conflict resolution frameworks
                        </li>
                        <li className="flex gap-3 text-foreground">
                          <span className="text-primary">✓</span>
                          Long-term relational intelligence development
                        </li>
                      </ul>
                    </div>
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-fit">
                      <a href="mailto:elen@elenawalom.com">
                        Inquire for a Proposal
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg p-8 flex items-center justify-center min-h-96">
                    <p className="text-muted-foreground text-center">[Image: Organizational team workshop]</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-serif text-foreground mb-4 text-balance">
              Not sure which offering is right for you?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">Let's have a conversation about your needs and goals.</p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href="mailto:elen@elenawalom.com">
                Get in Touch
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
