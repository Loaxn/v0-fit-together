'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Eye, EyeOff, ArrowRight, Check } from 'lucide-react'

const sports = [
  'Running', 'Musculation', 'Yoga', 'Football', 'Basketball', 
  'Tennis', 'Padel', 'Natation', 'Boxe', 'CrossFit', 'Cyclisme', 'Escalade'
]

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [selectedSports, setSelectedSports] = useState<string[]>([])
  const [step, setStep] = useState(1)

  const toggleSport = (sport: string) => {
    setSelectedSports(prev => 
      prev.includes(sport) 
        ? prev.filter(s => s !== sport)
        : [...prev, sport]
    )
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (step === 1) {
      setStep(2)
      return
    }
    setIsLoading(true)
    // Simulate registration - replace with actual auth logic
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen flex">
      {/* Left - Form */}
      <div className="flex-1 flex items-center justify-center px-6 lg:px-12 py-12 bg-surface-container-lowest">
        <div className="w-full max-w-md">
          {/* Logo */}
          <Link 
            href="/" 
            className="font-display text-xl font-bold uppercase tracking-display inline-block mb-12"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Fit Together
          </Link>

          {/* Progress */}
          <div className="flex gap-2 mb-8">
            <div className={`h-1 flex-1 ${step >= 1 ? 'bg-primary' : 'bg-border'} transition-colors`} />
            <div className={`h-1 flex-1 ${step >= 2 ? 'bg-primary' : 'bg-border'} transition-colors`} />
          </div>

          {/* Header */}
          <div className="mb-10">
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
              Étape {step} sur 2
            </span>
            <h1 
              className="text-3xl lg:text-4xl font-bold uppercase tracking-display mt-2"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              {step === 1 ? (
                <>Crée ton<br />compte</>
              ) : (
                <>Choisis tes<br />sports</>
              )}
            </h1>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {step === 1 ? (
              <>
                {/* Name */}
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-xs uppercase tracking-widest text-muted-foreground font-medium mb-3"
                  >
                    Prénom
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-border focus:border-primary focus:ring-0 text-lg placeholder:text-muted-foreground/50 transition-colors duration-300"
                    placeholder="Ton prénom"
                  />
                </div>

                {/* Email */}
                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-xs uppercase tracking-widest text-muted-foreground font-medium mb-3"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-border focus:border-primary focus:ring-0 text-lg placeholder:text-muted-foreground/50 transition-colors duration-300"
                    placeholder="ton@email.com"
                  />
                </div>

                {/* Password */}
                <div>
                  <label 
                    htmlFor="password" 
                    className="block text-xs uppercase tracking-widest text-muted-foreground font-medium mb-3"
                  >
                    Mot de passe
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                      required
                      minLength={8}
                      className="w-full px-0 py-3 pr-12 bg-transparent border-0 border-b-2 border-border focus:border-primary focus:ring-0 text-lg placeholder:text-muted-foreground/50 transition-colors duration-300"
                      placeholder="8 caractères minimum"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-muted-foreground hover:text-foreground transition-colors"
                      aria-label={showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Sports Selection */}
                <div>
                  <p className="text-muted-foreground mb-6">
                    Sélectionne au moins un sport pour commencer à trouver des partenaires.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {sports.map((sport) => (
                      <button
                        key={sport}
                        type="button"
                        onClick={() => toggleSport(sport)}
                        className={`flex items-center gap-2 px-4 py-2 text-sm uppercase tracking-wide transition-all duration-300 ${
                          selectedSports.includes(sport)
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-surface-container hover:bg-secondary'
                        }`}
                      >
                        {selectedSports.includes(sport) && <Check className="w-4 h-4" />}
                        {sport}
                      </button>
                    ))}
                  </div>
                </div>
              </>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading || (step === 2 && selectedSports.length === 0)}
              className="group w-full flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-sm uppercase tracking-wide font-medium hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 kinetic-ease mt-8"
            >
              {isLoading ? (
                'Création...'
              ) : step === 1 ? (
                <>
                  Continuer
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </>
              ) : (
                <>
                  Créer mon compte
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </>
              )}
            </button>

            {step === 2 && (
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-full text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Retour
              </button>
            )}
          </form>

          {step === 1 && (
            <>
              {/* Divider */}
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border/50" />
                </div>
                <div className="relative flex justify-center">
                  <span className="px-4 bg-surface-container-lowest text-xs uppercase tracking-wide text-muted-foreground">
                    ou
                  </span>
                </div>
              </div>

              {/* Social Login */}
              <div className="space-y-3">
                <button className="w-full flex items-center justify-center gap-3 px-8 py-4 border border-border/50 text-sm uppercase tracking-wide font-medium hover:bg-secondary transition-all duration-300">
                  Continuer avec Google
                </button>
                <button className="w-full flex items-center justify-center gap-3 px-8 py-4 border border-border/50 text-sm uppercase tracking-wide font-medium hover:bg-secondary transition-all duration-300">
                  Continuer avec Apple
                </button>
              </div>

              {/* Login link */}
              <p className="mt-10 text-center text-sm text-muted-foreground">
                Déjà un compte ?{' '}
                <Link href="/login" className="text-foreground font-medium hover:underline">
                  Se connecter
                </Link>
              </p>
            </>
          )}

          {/* Terms */}
          <p className="mt-8 text-xs text-muted-foreground text-center leading-relaxed">
            En créant un compte, tu acceptes nos{' '}
            <Link href="/terms" className="underline hover:text-foreground">
              conditions d&apos;utilisation
            </Link>{' '}
            et notre{' '}
            <Link href="/privacy" className="underline hover:text-foreground">
              politique de confidentialité
            </Link>
            .
          </p>
        </div>
      </div>

      {/* Right - Image */}
      <div className="hidden lg:block lg:w-1/2 relative bg-primary">
        <Image
          src="/images/auth-bg.jpg"
          alt="Athlètes"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
        <div className="absolute bottom-12 left-12 right-12 text-primary-foreground">
          <div 
            className="text-6xl lg:text-7xl font-bold uppercase tracking-display leading-[0.9] mb-8"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Ensemble<br />on va<br />plus loin
          </div>
          <div className="flex gap-8">
            <div>
              <div className="text-3xl font-bold" style={{ fontFamily: 'var(--font-space-grotesk)' }}>10K+</div>
              <div className="text-xs uppercase tracking-wide opacity-60">Sportifs actifs</div>
            </div>
            <div>
              <div className="text-3xl font-bold" style={{ fontFamily: 'var(--font-space-grotesk)' }}>25+</div>
              <div className="text-xs uppercase tracking-wide opacity-60">Sports</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
