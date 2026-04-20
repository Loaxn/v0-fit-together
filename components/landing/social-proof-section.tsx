'use client'

import Image from 'next/image'

const testimonials = [
  {
    quote: "J'ai trouvé mon partenaire de running grâce à Fit Together. On court ensemble 3 fois par semaine maintenant.",
    author: 'Marie L.',
    sport: 'Running',
    avatar: '/images/avatar-1.jpg',
  },
  {
    quote: "L'application m'a permis de rejoindre un groupe de musculation motivé. L'ambiance est incroyable.",
    author: 'Thomas B.',
    sport: 'Musculation',
    avatar: '/images/avatar-2.jpg',
  },
  {
    quote: "Je cherchais des partenaires pour le padel depuis des mois. En une semaine, j'avais mon équipe.",
    author: 'Sarah K.',
    sport: 'Padel',
    avatar: '/images/avatar-3.jpg',
  },
]

const sports = [
  'Running', 'Musculation', 'Yoga', 'Football', 'Basketball', 'Tennis',
  'Padel', 'Natation', 'Boxe', 'CrossFit', 'Cyclisme', 'Escalade',
]

export function SocialProofSection() {
  return (
    <section id="community" className="relative py-24 lg:py-32 bg-primary text-primary-foreground overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 lg:mb-24 text-center">
          <span className="text-xs uppercase tracking-widest text-primary-foreground/60 font-medium">
            Communauté
          </span>
          <h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase leading-[0.95] tracking-display mt-4"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Une communauté<br />active
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.author}
              className="relative p-8 lg:p-10 bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors duration-300 kinetic-ease"
            >
              {/* Quote */}
              <blockquote className="text-lg lg:text-xl leading-relaxed mb-8">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 overflow-hidden bg-primary-foreground/20">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <div className="font-medium">{testimonial.author}</div>
                  <div className="text-xs uppercase tracking-wide text-primary-foreground/60">
                    {testimonial.sport}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sports Tags */}
        <div className="border-t border-primary-foreground/10 pt-12">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-widest text-primary-foreground/60">
              Sports disponibles
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {sports.map((sport) => (
              <span
                key={sport}
                className="px-4 py-2 text-sm uppercase tracking-wide border border-primary-foreground/20 hover:bg-primary-foreground/10 transition-colors duration-300 cursor-default"
              >
                {sport}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
