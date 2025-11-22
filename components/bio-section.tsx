"use client"

import Image from "next/image"

export default function BioSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio Content */}
          <div className="flex flex-col gap-6 order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground">About The Almaz Institute</h2>
            <div className="h-1 w-20 bg-primary"></div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded by Elen Awalom, The Almaz Institute is dedicated to cultivating leadership through somatic
              coherence and embodied practice.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              We believe that true leadership emerges when our internal state is aligned with our external actions. By
              integrating the wisdom of the body with cognitive strategy, we help leaders navigate complexity with grace
              and resilience.
            </p>

            <div className="pt-4">
              <h3 className="text-xl font-serif mb-4 text-foreground">Our Influences & Practice</h3>
              <ul className="space-y-3">
                <li className="flex gap-3 text-muted-foreground">
                  <span className="text-primary font-bold">•</span>Somatic Experiencing
                </li>
                <li className="flex gap-3 text-muted-foreground">
                  <span className="text-primary font-bold">•</span>Body-Mind Centering
                </li>
                <li className="flex gap-3 text-muted-foreground">
                  <span className="text-primary font-bold">•</span>The Tao of Trauma
                </li>
                <li className="flex gap-3 text-muted-foreground">
                  <span className="text-primary font-bold">•</span>Authentic Relating
                </li>
              </ul>
            </div>
          </div>

          {/* Bio Image */}
          <div className="relative h-[500px] w-full rounded-none overflow-hidden shadow-xl order-1 md:order-2 bg-muted">
            <div className="absolute inset-0 flex items-center justify-center bg-muted text-muted-foreground">
              <Image
                src="/images/elen-awalom-portrait.jpg"
                alt="Elen Awalom - Founder of The Almaz Institute"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
