'use client'

import { HeroSection } from '@/components/landing/hero-section'
import { ConceptSection } from '@/components/landing/concept-section'
import { FeaturesSection } from '@/components/landing/features-section'
import { SocialProofSection } from '@/components/landing/social-proof-section'
import { FinalCtaSection } from '@/components/landing/final-cta-section'
import { Header } from '@/components/landing/header'
import { Footer } from '@/components/landing/footer'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ConceptSection />
        <FeaturesSection />
        <SocialProofSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  )
}
