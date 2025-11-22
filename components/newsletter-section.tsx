"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    try {
      // Simulate email signup - replace with actual service
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setStatus("success")
      setEmail("")
      setTimeout(() => setStatus("idle"), 3000)
    } catch (error) {
      setStatus("error")
      setTimeout(() => setStatus("idle"), 3000)
    }
  }

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-serif mb-4 text-balance">Stay Connected</h2>
        <p className="text-lg mb-8 opacity-90">
          Get insights on somatic coaching, embodied leadership, and nervous system regulation delivered to your inbox.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-primary-foreground text-primary placeholder:text-muted-foreground border-0"
          />
          <Button
            type="submit"
            disabled={status === "loading"}
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            {status === "loading" ? "Subscribing..." : "Subscribe"}
          </Button>
        </form>

        {status === "success" && (
          <p className="mt-4 text-sm opacity-90">✓ Successfully subscribed! Check your inbox.</p>
        )}
        {status === "error" && <p className="mt-4 text-sm opacity-90">Something went wrong. Please try again.</p>}
      </div>
    </section>
  )
}
