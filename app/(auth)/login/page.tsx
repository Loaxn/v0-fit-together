'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Eye, EyeOff, ArrowRight } from 'lucide-react'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate login - replace with actual auth logic
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

          {/* Header */}
          <div className="mb-10">
            <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
              Connexion
            </span>
            <h1 
              className="text-3xl lg:text-4xl font-bold uppercase tracking-display mt-2"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Content de<br />te revoir
            </h1>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
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
                  className="w-full px-0 py-3 pr-12 bg-transparent border-0 border-b-2 border-border focus:border-primary focus:ring-0 text-lg placeholder:text-muted-foreground/50 transition-colors duration-300"
                  placeholder="••••••••"
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

            {/* Forgot password */}
            <div className="flex justify-end">
              <Link
                href="/forgot-password"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Mot de passe oublié ?
              </Link>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="group w-full flex items-center justify-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-sm uppercase tracking-wide font-medium hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 kinetic-ease mt-8"
            >
              {isLoading ? (
                'Connexion...'
              ) : (
                <>
                  Se connecter
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </>
              )}
            </button>
          </form>

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

          {/* Register link */}
          <p className="mt-10 text-center text-sm text-muted-foreground">
            Pas encore de compte ?{' '}
            <Link href="/register" className="text-foreground font-medium hover:underline">
              S&apos;inscrire
            </Link>
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
          <blockquote className="text-2xl lg:text-3xl font-medium leading-relaxed mb-6">
            &ldquo;Fit Together a changé ma façon de m&apos;entraîner. Je n&apos;aurais jamais cru trouver une communauté aussi motivante.&rdquo;
          </blockquote>
          <div className="text-sm uppercase tracking-wide opacity-60">
            — Alex M., membre depuis 2024
          </div>
        </div>
      </div>
    </div>
  )
}
