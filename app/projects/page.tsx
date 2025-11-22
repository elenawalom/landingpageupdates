import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Globe, Heart, Sparkles } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Neuroluminous",
      description: "A neurodivergent community for trauma recovery & grounded thriving.",
      icon: Sparkles,
      cta: "Learn More",
    },
    {
      title: "The Expat Thrivers Network",
      description: "Support, belonging, and resilience for expats & third-culture individuals.",
      icon: Globe,
      cta: "Join the Network",
    },
    {
      title: "The Eritrean–Ethiopian Peace Initiative",
      description: "Dialogue, bridge-building, and community leadership for the Eritrean and Ethiopian diaspora.",
      icon: Users,
      cta: "Get Involved",
    },
    {
      title: "Embodied Relating for All",
      description: "Accessible relational skills training for diverse communities.",
      icon: Heart,
      cta: "View Training",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Header Section */}
        <section className="py-16 bg-muted/20 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-serif text-foreground text-balance mb-4">Current Projects</h1>
            <p className="text-lg text-muted-foreground max-w-2xl text-balance">
              Distinct initiatives fostering connection, healing, and leadership across diverse communities.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  className="bg-card border border-border rounded-lg p-8 flex flex-col gap-6 hover:shadow-lg transition-shadow"
                >
                  <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center text-primary">
                    <project.icon size={24} />
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-2xl font-serif text-foreground">{project.title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">{project.description}</p>
                  </div>

                  <Button
                    asChild
                    variant="outline"
                    className="w-fit border-primary text-primary hover:bg-primary/10 mt-auto bg-transparent"
                  >
                    <a href="mailto:elen@elenawalom.com">
                      {project.cta}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-muted/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-serif text-foreground mb-4 text-balance">Interested in collaborating?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              I'd love to hear from you if you're interested in supporting or joining any of these initiatives.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href="mailto:elen@elenawalom.com">
                Contact Me
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
