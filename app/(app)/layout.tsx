'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Search, PlusCircle, User, LogOut } from 'lucide-react'

const navigation = [
  { name: 'Accueil', href: '/home', icon: Home },
  { name: 'Explorer', href: '/explore', icon: Search },
  { name: 'Créer', href: '/create', icon: PlusCircle },
  { name: 'Profil', href: '/profile', icon: User },
]

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  return (
    <div className="min-h-screen bg-surface flex">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0 bg-surface-container-lowest border-r border-border/20">
        <div className="flex flex-col flex-1 px-6 py-8">
          {/* Logo */}
          <Link 
            href="/home" 
            className="font-display text-lg font-bold uppercase tracking-display"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Fit Together
          </Link>

          {/* Navigation */}
          <nav className="flex-1 mt-12 space-y-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 text-sm uppercase tracking-wide transition-all duration-300 kinetic-ease ${
                    isActive 
                      ? 'bg-primary text-primary-foreground' 
                      : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.name}
                </Link>
              )
            })}
          </nav>

          {/* User section */}
          <div className="pt-6 border-t border-border/20">
            <Link
              href="/"
              className="flex items-center gap-3 px-4 py-3 text-sm uppercase tracking-wide text-muted-foreground hover:bg-secondary hover:text-foreground transition-all duration-300"
            >
              <LogOut className="w-5 h-5" />
              Déconnexion
            </Link>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 lg:pl-64">
        {/* Mobile header */}
        <header className="lg:hidden sticky top-0 z-40 glass">
          <div className="flex items-center justify-between px-4 h-14">
            <Link 
              href="/home" 
              className="font-display text-base font-bold uppercase tracking-display"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Fit Together
            </Link>
          </div>
        </header>

        {/* Page content */}
        <div className="min-h-[calc(100vh-3.5rem)] lg:min-h-screen pb-20 lg:pb-0">
          {children}
        </div>

        {/* Mobile bottom navigation */}
        <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 glass border-t border-border/20">
          <div className="flex items-center justify-around h-16">
            {navigation.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + '/')
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex flex-col items-center gap-1 px-4 py-2 transition-colors duration-300 ${
                    isActive ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="text-[10px] uppercase tracking-wide">{item.name}</span>
                </Link>
              )
            })}
          </div>
        </nav>
      </main>
    </div>
  )
}
