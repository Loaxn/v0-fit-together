'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="font-display text-lg lg:text-xl font-bold uppercase tracking-display"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Fit Together
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link 
              href="#concept" 
              className="text-sm uppercase tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300 kinetic-ease"
            >
              Comment ça marche
            </Link>
            <Link 
              href="#features" 
              className="text-sm uppercase tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300 kinetic-ease"
            >
              Fonctionnalités
            </Link>
            <Link 
              href="#community" 
              className="text-sm uppercase tracking-wide text-muted-foreground hover:text-foreground transition-colors duration-300 kinetic-ease"
            >
              Communauté
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/login"
              className="text-sm uppercase tracking-wide px-4 py-2 hover:bg-secondary transition-colors duration-300 kinetic-ease"
            >
              Connexion
            </Link>
            <Link
              href="/register"
              className="text-sm uppercase tracking-wide px-6 py-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 kinetic-ease"
            >
              S&apos;inscrire
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-secondary transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-6 border-t border-border/10">
            <div className="flex flex-col gap-4 pt-6">
              <Link 
                href="#concept" 
                className="text-sm uppercase tracking-wide text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Comment ça marche
              </Link>
              <Link 
                href="#features" 
                className="text-sm uppercase tracking-wide text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Fonctionnalités
              </Link>
              <Link 
                href="#community" 
                className="text-sm uppercase tracking-wide text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Communauté
              </Link>
              <div className="flex flex-col gap-3 pt-4">
                <Link
                  href="/login"
                  className="text-sm uppercase tracking-wide px-4 py-3 text-center hover:bg-secondary transition-colors"
                >
                  Connexion
                </Link>
                <Link
                  href="/register"
                  className="text-sm uppercase tracking-wide px-6 py-3 bg-primary text-primary-foreground text-center hover:bg-primary/90 transition-all"
                >
                  S&apos;inscrire
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
