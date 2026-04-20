'use client'

import Image from 'next/image'
import { Sparkles, MapPin, MessageCircle } from 'lucide-react'

const features = [
  {
    icon: Sparkles,
    title: 'Match intelligent',
    subtitle: 'De partenaires sportifs',
    description: 'Notre algorithme te connecte avec des sportifs qui partagent tes objectifs, ton niveau et tes disponibilités.',
    image: '/images/feature-match.jpg',
  },
  {
    icon: MapPin,
    title: 'Sessions locales',
    subtitle: 'Création et découverte',
    description: 'Crée ou rejoins des sessions sportives près de chez toi. Running, musculation, yoga, football et bien plus.',
    image: '/images/feature-sessions.jpg',
  },
  {
    icon: MessageCircle,
    title: 'Chat en temps réel',
    subtitle: 'Organisation simplifiée',
    description: 'Coordonne-toi facilement avec ton groupe. Chat intégré, notifications et rappels pour ne rien manquer.',
    image: '/images/feature-chat.jpg',
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-24 lg:py-32 bg-surface-container-lowest">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 lg:mb-24 max-w-2xl">
          <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
            Fonctionnalités
          </span>
          <h2 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold uppercase leading-[0.95] tracking-display mt-4"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Tout ce qu&apos;il<br />te faut
          </h2>
        </div>

        {/* Features List */}
        <div className="space-y-16 lg:space-y-24">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:direction-rtl' : ''
              }`}
            >
              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                {/* Offset frame */}
                <div 
                  className={`absolute -z-10 inset-0 bg-surface-container ${
                    index % 2 === 0 ? 'translate-x-4 translate-y-4' : '-translate-x-4 translate-y-4'
                  }`} 
                />
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-1 lg:text-right' : ''}`}>
                {/* Icon */}
                <div className={`w-12 h-12 flex items-center justify-center bg-primary text-primary-foreground mb-6 ${
                  index % 2 === 1 ? 'lg:ml-auto' : ''
                }`}>
                  <feature.icon className="w-5 h-5" />
                </div>

                {/* Label */}
                <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
                  {feature.subtitle}
                </span>

                {/* Title */}
                <h3 
                  className="text-3xl lg:text-4xl xl:text-5xl font-bold uppercase tracking-display mt-2 mb-6"
                  style={{ fontFamily: 'var(--font-space-grotesk)' }}
                >
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
