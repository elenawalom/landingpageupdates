"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function OfferingsSection() {
  const offerings = [
    {
      title: "Somatic Coaching (Individuals)",
      description: "Practical support for emotional regulation, communication, and presence.",
      features: [
        "Nervous system regulation strategies",
        "Communication & relational intelligence",
        "Support navigating stress, conflict, decision-making",
        "Grounded emotional processing",
        "Clear action steps and structured accountability",
        "Strengthening boundaries, self-trust, and relational clarity",
      ],
      cta: "Book a 1:1 Session",
      href: "https://calendly.com/elenawalom",
    },
    {
      title: "Embodied Leadership Training",
      description: "Leadership grounded in clarity, emotional steadiness, and relational harmony.",
      features: [
        "Nervous-system-aware leadership",
        "More effective communication under pressure",
        "Conflict navigation and repair",
        "Relational intelligence that improves team cohesion",
        "Presence that fosters trust and psychological safety",
        "Decision-making clarity and reduced reactivity",
      ],
      cta: "Book a Consultation",
      href: "https://calendly.com/elenawalom",
    },
    {
      title: "Organizational Workshops & Consulting",
      description: "Comprehensive solutions for companies, nonprofits, startups, and institutions.",
      features: [
        "Nervous-system-aware culture building",
        "Improved communication norms",
        "Regulation tools for teams under chronic stress",
        "Leadership presence training",
        "Repair and conflict resolution frameworks",
        "Long-term relational intelligence development",
      ],
      cta: "Inquire for a Proposal",
      href: "mailto:elen@elenawalom.com",
    },
  ]

  return (
    <section className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif text-foreground text-center mb-4 text-balance">Offerings</h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Tailored support for individuals, professionals, and organizations
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {offerings.map((offering, idx) => (
            <div
              key={idx}
              className="bg-card border border-border rounded-lg p-8 flex flex-col gap-6 hover:shadow-lg transition-shadow"
            >
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{offering.title}</h3>
                <p className="text-sm text-muted-foreground">{offering.description}</p>
              </div>

              <ul className="space-y-2">
                {offering.features.map((feature, fidx) => (
                  <li key={fidx} className="flex gap-2 text-sm text-foreground">
                    <span className="text-primary">•</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground mt-auto">
                <a
                  href={offering.href}
                  target={offering.href.startsWith("http") ? "_blank" : undefined}
                  rel={offering.href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {offering.cta}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 bg-transparent"
          >
            <Link href="/offerings">
              View All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
