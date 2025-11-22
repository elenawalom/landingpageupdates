"use client"

import Link from "next/link"
import { Mail, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <h3 className="text-lg font-semibold">The Almaz Institute</h3>
            <p className="text-sm opacity-75">
              Somatic coaching & embodied leadership to align your mind, body, and purpose.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-sm">Navigation</h4>
            <Link href="/" className="text-sm hover:opacity-75 transition-opacity">
              Home
            </Link>
            <a href="mailto:elen@elenawalom.com" className="text-sm hover:opacity-75 transition-opacity">
              Contact
            </a>
            <Link href="/blog" className="text-sm hover:opacity-75 transition-opacity">
              Blog
            </Link>
            <Link href="/retreats" className="text-sm hover:opacity-75 transition-opacity">
              Retreats
            </Link>
          </div>

          {/* Offerings */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-sm">Offerings</h4>
            <Link href="/offerings" className="text-sm hover:opacity-75 transition-opacity">
              1:1 Coaching
            </Link>
            <Link href="/offerings" className="text-sm hover:opacity-75 transition-opacity">
              Leadership Training
            </Link>
            <Link href="/offerings" className="text-sm hover:opacity-75 transition-opacity">
              Organizational Consulting
            </Link>
          </div>

          {/* Projects */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-sm">Projects</h4>
            <Link href="/projects" className="text-sm hover:opacity-75 transition-opacity">
              Neuroluminous
            </Link>
            <Link href="/projects" className="text-sm hover:opacity-75 transition-opacity">
              The Expat Thrivers Network
            </Link>
            <Link href="/projects" className="text-sm hover:opacity-75 transition-opacity">
              The Eritrean–Ethiopian Peace Initiative
            </Link>
            <Link href="/projects" className="text-sm hover:opacity-75 transition-opacity">
              Embodied Relating for All
            </Link>
          </div>

          {/* Connect */}
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-sm">Connect</h4>
            <a
              href="mailto:elen@elenawalom.com"
              className="text-sm hover:opacity-75 transition-opacity flex items-center gap-2"
            >
              <Mail size={16} />
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/elenawalom"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:opacity-75 transition-opacity flex items-center gap-2"
            >
              <Linkedin size={16} />
              LinkedIn
            </a>
            <a
              href="https://instagram.com/embodied_leaders"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:opacity-75 transition-opacity flex items-center gap-2"
            >
              <Instagram size={16} />
              Instagram
            </a>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 text-center text-sm opacity-75">
          <p>© 2025 The Almaz Institute. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
