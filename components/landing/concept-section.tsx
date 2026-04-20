'use client'

import { Users, Calendar, Dumbbell } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Users,
    title: 'Trouve',
    description: 'Trouve des sportifs autour de toi selon tes sports préférés et ton niveau.',
  },
  {
    number: '02',
    icon: Calendar,
    title: 'Rejoins',
    description: 'Rejoins une session existante ou crée la tienne pour rassembler la communauté.',
  },
  {
    number: '03',
    icon: Dumbbell,
    title: 'Entraîne-toi',
    description: 'Entraîne-toi ensemble, progresse et construis des liens durables.',
  },
]

export function ConceptSection() {
  return (
    <section id="concept" className="relative py-24 lg:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 lg:mb-24">
          <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
            Le concept
          </span>
          <h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase leading-[0.95] tracking-display mt-4"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Comment ça<br />marche
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              className="group relative"
            >
              {/* Step number background */}
              <div 
                className="absolute -top-8 -left-4 text-[120px] lg:text-[160px] font-bold text-surface-container leading-none select-none pointer-events-none"
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                {step.number}
              </div>
              
              {/* Content */}
              <div className="relative pt-20 lg:pt-28">
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center bg-primary text-primary-foreground mb-6 group-hover:scale-[1.01] transition-transform duration-300 kinetic-ease">
                  <step.icon className="w-6 h-6" />
                </div>
                
                {/* Title */}
                <h3 
                  className="text-2xl lg:text-3xl font-bold uppercase tracking-display mb-4"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  {step.title}
                </h3>
                
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector line (except last) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-6 lg:-right-8 w-12 lg:w-16 h-px bg-border/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
