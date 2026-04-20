'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-surface-container-lowest pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface/50" />
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Text Content */}
          <div className="relative z-10 max-w-2xl">
            {/* Label */}
            <div className="mb-6">
              <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
                Application fitness sociale
              </span>
            </div>
            
            {/* Main Headline */}
            <h1 
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold uppercase leading-[0.9] tracking-display mb-8"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              <span className="block">Ne fais</span>
              <span className="block">plus de</span>
              <span className="block">sport seul</span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-lg lg:text-xl text-muted-foreground max-w-md mb-10 leading-relaxed">
              Trouve des partenaires sportifs autour de toi. Rejoins ou crée une session et entraîne-toi ensemble.
            </p>
            
            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/register"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-sm uppercase tracking-wide font-medium hover:bg-primary/90 transition-all duration-300 kinetic-ease"
              >
                Rejoindre Fit Together
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 kinetic-ease" />
              </Link>
              <Link
                href="#concept"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-primary/15 text-sm uppercase tracking-wide font-medium hover:bg-secondary transition-all duration-300 kinetic-ease"
              >
                Découvrir
              </Link>
            </div>
            
            {/* Stats */}
            <div className="flex gap-12 mt-16 pt-8 border-t border-border/20">
              <div>
                <div 
                  className="text-3xl lg:text-4xl font-bold tracking-display"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  10K+
                </div>
                <div className="text-xs uppercase tracking-wide text-muted-foreground mt-1">
                  Sportifs actifs
                </div>
              </div>
              <div>
                <div 
                  className="text-3xl lg:text-4xl font-bold tracking-display"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  500+
                </div>
                <div className="text-xs uppercase tracking-wide text-muted-foreground mt-1">
                  Sessions/semaine
                </div>
              </div>
              <div>
                <div 
                  className="text-3xl lg:text-4xl font-bold tracking-display"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  25+
                </div>
                <div className="text-xs uppercase tracking-wide text-muted-foreground mt-1">
                  Sports disponibles
                </div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-1/2 xl:w-[55%]">
            <div className="relative aspect-[4/5] lg:aspect-[3/4] w-full max-w-lg lg:max-w-none mx-auto">
              {/* Image container with overlap effect */}
              <div className="absolute inset-0 bg-surface-container -translate-x-4 translate-y-4 lg:-translate-x-8 lg:translate-y-8" />
              <div className="relative h-full w-full overflow-hidden bg-muted">
                <Image
                  src="/images/hero-athlete.jpg"
                  alt="Athlète en action"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              {/* Floating label */}
              <div className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 bg-primary text-primary-foreground px-6 py-4">
                <div className="text-xs uppercase tracking-widest mb-1">Prochaine session</div>
                <div 
                  className="text-lg font-bold uppercase tracking-display"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  Running Paris
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
