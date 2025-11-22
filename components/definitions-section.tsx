"use client"

export default function DefinitionsSection() {
  const definitions = [
    {
      title: "What Is Somatic Coaching?",
      description:
        "Somatic coaching is a practical, evidence-based approach that helps people understand and work with their nervous system, stress responses, and emotional patterns. It integrates physiology, behavior, and communication skills — so you can respond with clarity instead of reactivity.",
    },
    {
      title: "What Is Embodied Work?",
      description:
        '"Embodied" simply means applying insight in a way that shows up in your actions, communication, and presence — not just in your thoughts.',
    },
    {
      title: "Interpersonal Neurobiology",
      description:
        "This is a scientific framework (Dan Siegel, etc.) that explains how relationships, the brain, the body, and the nervous system interact. It informs how I help individuals and teams create more harmonious, resilient relational dynamics.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif text-foreground text-center mb-16 text-balance">
          Grounded in Science, Accessible Language
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {definitions.map((def, idx) => (
            <div key={idx} className="bg-card border border-border rounded-lg p-8 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-foreground mb-4">{def.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{def.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
