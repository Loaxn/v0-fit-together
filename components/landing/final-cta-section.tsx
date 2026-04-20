'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function FinalCtaSection() {
  return (
    <section className="relative py-24 lg:py-40 bg-surface overflow-hidden">
      {/* Background text */}
      <div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        <span 
          className="text-[15vw] font-bold uppercase tracking-display text-surface-container whitespace-nowrap"
          style={{ fontFamily: 'var(--font-space-grotesk)' }}
        >
          FIT TOGETHER
        </span>
      </div>

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
        {/* Label */}
        <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
          Prêt à commencer ?
        </span>

        {/* Headline */}
        <h2 
          className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase leading-[0.95] tracking-display mt-4 mb-8"
          style={{ fontFamily: 'var(--font-space-grotesk)' }}
        >
          Commence à<br />t&apos;entraîner<br />autrement
        </h2>

        {/* Subtitle */}
        <p className="text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
          Rejoins des milliers de sportifs qui ont transformé leur façon de s&apos;entraîner.
        </p>

        {/* CTA */}
        <Link
          href="/register"
          className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-primary text-primary-foreground text-sm uppercase tracking-wide font-medium hover:bg-primary/90 transition-all duration-300 kinetic-ease"
        >
          S&apos;inscrire gratuitement
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 kinetic-ease" />
        </Link>

        {/* Trust note */}
        <p className="mt-6 text-sm text-muted-foreground">
          Gratuit pour toujours. Aucune carte requise.
        </p>
      </div>
    </section>
  )
}
