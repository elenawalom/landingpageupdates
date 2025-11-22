"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Understanding Your Nervous System: The Foundation of Somatic Coaching",
      excerpt:
        "Learn the basics of how your nervous system works and why understanding it is key to emotional regulation and clear communication.",
      date: "November 15, 2024",
      readTime: "5 min read",
      category: "Somatic Coaching",
    },
    {
      id: 2,
      title: "The Art of Embodied Leadership: Leading with Presence and Clarity",
      excerpt:
        "Discover how leaders who are grounded in their bodies create more trust, psychological safety, and team effectiveness.",
      date: "November 8, 2024",
      readTime: "7 min read",
      category: "Leadership",
    },
    {
      id: 3,
      title: "Communication Under Pressure: How Nervous System Regulation Helps",
      excerpt:
        "When stress rises, our ability to communicate clearly often declines. Here's how somatic tools help you stay grounded.",
      date: "November 1, 2024",
      readTime: "6 min read",
      category: "Communication",
    },
    {
      id: 4,
      title: "Building Boundaries Without Burnout: A Sustainable Approach",
      excerpt:
        "Healthy boundaries aren't about saying \"no\" — they're about knowing yourself and what you truly need.",
      date: "October 25, 2024",
      readTime: "5 min read",
      category: "Personal Growth",
    },
    {
      id: 5,
      title: "Relational Intelligence: The Secret to Thriving Teams",
      excerpt:
        "Teams that understand how they relate to each other are more resilient, creative, and effective. Here's how to build it.",
      date: "October 18, 2024",
      readTime: "8 min read",
      category: "Teams & Organizations",
    },
    {
      id: 6,
      title: "From Reactivity to Response: The Power of Choice",
      excerpt: "The space between stimulus and response is where real freedom lives. Learn how to expand that space.",
      date: "October 11, 2024",
      readTime: "6 min read",
      category: "Somatic Coaching",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Header Section */}
        <section className="py-16 bg-muted/20 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-serif text-foreground text-balance mb-4">Blog & Insights</h1>
            <p className="text-lg text-muted-foreground max-w-2xl text-balance">
              Practical wisdom on somatic coaching, embodied leadership, and nervous system regulation for clarity and
              growth. (Coming Soon)
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
                >
                  <div className="bg-gradient-to-br from-primary/10 to-secondary/10 h-40 flex items-center justify-center">
                    <p className="text-muted-foreground">[Image]</p>
                  </div>
                  <div className="p-6 flex flex-col gap-4 flex-grow">
                    <div>
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-3">
                        {post.category}
                      </span>
                      <h3 className="text-xl font-semibold text-foreground mb-2 line-clamp-2">{post.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-grow">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-border text-xs text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {post.date}
                        </span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>
                    <Button asChild variant="ghost" className="w-full text-primary hover:bg-primary/10 mt-4">
                      <a href="#" className="justify-center">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 bg-muted/20">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-serif text-foreground mb-4">Get These Insights Delivered</h2>
            <p className="text-muted-foreground mb-8">
              Subscribe to receive new articles on somatic coaching and embodied leadership straight to your inbox.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <a href="/#newsletter">Subscribe to the Blog</a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
