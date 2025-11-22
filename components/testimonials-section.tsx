"use client"

import { Star } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Eric Stein",
      title: "Founder & CEO",
      text: "Ēlen's grounding presence has been a major catalyst for several critical decisions in my life, including changing career paths, and repairing and strengthening family ties. Over the course of working with her, I've repeatedly found her intuition nudging me towards asking, and answering, the key questions I often don't even realize I'm avoiding or distorting, all while maintaining a gentle, insistent curiosity that reminds me: my first priority is never to abandon myself. She is the first person I've felt comfortable crying with, and with whom I've experienced (and even understood!) serious somatic release with, since childhood. I am so grateful for Ēlen helping make my body a safer, saner, and calmer place to live in.",
      rating: 5,
    },
    {
      name: "Mark Milliard",
      title: "Executive",
      text: "Tonight’s group session was truly amazing! From the very beginning, Ēlen facilitated a very calm, peaceful and relaxing session that brought so much joy to my soul. I am still smiling. My goodness!! And while doing the breathing techniques, my headache suddenly disappeared. In addition to this we were able to dialogue about the present social realities and connect with other like-minded individuals in other cities. Right now, I feel so calm, and much more resilient and full of happiness. I am truly thankful for this session and I am ready to go higher in my goals and aspirations for the week. God bless.",
      rating: 5,
    },
    {
      name: "Chetan Nandakumar",
      title: "AI Founder and CEO",
      text: "I came to work with Elen because I’ve been holding onto early childhood trauma for decades that has created tremendous suffering in my body. She very lovingly created a space that made it safe for me to let go of these patterns. I was able to emotionally release in ways that I’ve never been able to and also connect with a greater calm and ease in my body. I’m incredibly grateful for Elen’s support on my journey of healing and awakening.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-serif text-foreground text-center mb-16 text-balance">
          What Clients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-card border border-border rounded-lg p-8 flex flex-col gap-4">
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed italic">"{testimonial.text}"</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
