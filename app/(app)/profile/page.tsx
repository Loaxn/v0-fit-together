'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Settings, MapPin, Calendar, Clock, Users, Edit2, ChevronRight } from 'lucide-react'

// Mock user data
const user = {
  id: '1',
  name: 'Alex Martin',
  username: '@alexmartin',
  avatar: '/images/profile-avatar.jpg',
  bio: 'Passionné de sport depuis toujours. Je cherche des partenaires pour progresser ensemble et rester motivé.',
  location: 'Paris, France',
  memberSince: 'Membre depuis Janvier 2024',
  sports: ['Running', 'Musculation', 'CrossFit', 'Yoga'],
  stats: {
    sessions: 47,
    partners: 28,
    hostedSessions: 12,
    totalHours: 86,
  },
}

const pastSessions = [
  {
    id: '1',
    title: 'Running matinal',
    sport: 'Running',
    date: '12 Mars 2025',
    duration: '1h',
    participants: 6,
  },
  {
    id: '2',
    title: 'CrossFit HIIT',
    sport: 'CrossFit',
    date: '10 Mars 2025',
    duration: '1h30',
    participants: 8,
  },
  {
    id: '3',
    title: 'Yoga flow',
    sport: 'Yoga',
    date: '8 Mars 2025',
    duration: '1h',
    participants: 10,
  },
]

const achievements = [
  { title: 'Premier pas', description: 'Première session complétée', earned: true },
  { title: 'Social butterfly', description: '10 partenaires différents', earned: true },
  { title: 'Hôte confirmé', description: '10 sessions organisées', earned: true },
  { title: 'Marathonien', description: '50 sessions complétées', earned: false },
]

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState<'activity' | 'stats' | 'achievements'>('activity')

  return (
    <div className="px-4 lg:px-8 py-6 lg:py-10">
      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
            Mon profil
          </span>
        </div>
        <Link
          href="/profile/settings"
          className="p-2 hover:bg-secondary transition-colors"
        >
          <Settings className="w-5 h-5" />
        </Link>
      </div>

      {/* Profile Header */}
      <div className="flex flex-col sm:flex-row gap-6 items-start mb-10">
        {/* Avatar */}
        <div className="relative">
          <div className="relative w-24 h-24 lg:w-32 lg:h-32 overflow-hidden bg-muted">
            <Image
              src={user.avatar}
              alt={user.name}
              fill
              className="object-cover"
              priority
              sizes="128px"
            />
          </div>
          <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors">
            <Edit2 className="w-4 h-4" />
          </button>
        </div>

        {/* Info */}
        <div className="flex-1">
          <h1 
            className="text-2xl lg:text-3xl font-bold uppercase tracking-display"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            {user.name}
          </h1>
          <p className="text-muted-foreground text-sm mt-1">{user.username}</p>
          
          <p className="text-muted-foreground mt-4 max-w-md leading-relaxed">
            {user.bio}
          </p>

          <div className="flex flex-wrap gap-4 mt-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {user.location}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {user.memberSince}
            </span>
          </div>

          {/* Sports */}
          <div className="flex flex-wrap gap-2 mt-4">
            {user.sports.map((sport) => (
              <span
                key={sport}
                className="px-3 py-1 text-xs uppercase tracking-wide bg-surface-container"
              >
                {sport}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        <div className="p-6 bg-surface-container-lowest text-center">
          <div 
            className="text-3xl lg:text-4xl font-bold tracking-display"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            {user.stats.sessions}
          </div>
          <div className="text-xs uppercase tracking-wide text-muted-foreground mt-1">Sessions</div>
        </div>
        <div className="p-6 bg-surface-container-lowest text-center">
          <div 
            className="text-3xl lg:text-4xl font-bold tracking-display"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            {user.stats.partners}
          </div>
          <div className="text-xs uppercase tracking-wide text-muted-foreground mt-1">Partenaires</div>
        </div>
        <div className="p-6 bg-surface-container-lowest text-center">
          <div 
            className="text-3xl lg:text-4xl font-bold tracking-display"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            {user.stats.hostedSessions}
          </div>
          <div className="text-xs uppercase tracking-wide text-muted-foreground mt-1">Organisées</div>
        </div>
        <div className="p-6 bg-primary text-primary-foreground text-center">
          <div 
            className="text-3xl lg:text-4xl font-bold tracking-display"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            {user.stats.totalHours}h
          </div>
          <div className="text-xs uppercase tracking-wide opacity-60 mt-1">Total</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b border-border/20 mb-8">
        <div className="flex gap-8">
          {(['activity', 'stats', 'achievements'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 text-sm uppercase tracking-wide transition-colors relative ${
                activeTab === tab ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {tab === 'activity' && 'Activité'}
              {tab === 'stats' && 'Statistiques'}
              {tab === 'achievements' && 'Succès'}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      {activeTab === 'activity' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between mb-6">
            <h2 
              className="text-xl font-bold uppercase tracking-display"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Sessions récentes
            </h2>
            <Link 
              href="/profile/sessions"
              className="text-sm uppercase tracking-wide text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
            >
              Tout voir
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {pastSessions.map((session) => (
            <Link
              key={session.id}
              href={`/session/${session.id}`}
              className="flex items-center justify-between p-4 lg:p-6 bg-surface-container-lowest hover:bg-secondary/50 transition-colors group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-surface-container flex items-center justify-center">
                  <span className="text-xs uppercase tracking-wide font-medium">
                    {session.sport.slice(0, 2)}
                  </span>
                </div>
                <div>
                  <h3 className="font-bold">{session.title}</h3>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mt-1">
                    <span>{session.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {session.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {session.participants}
                    </span>
                  </div>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 transition-transform" />
            </Link>
          ))}
        </div>
      )}

      {activeTab === 'stats' && (
        <div className="space-y-8">
          <h2 
            className="text-xl font-bold uppercase tracking-display"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Mes statistiques
          </h2>

          {/* Stats breakdown by sport */}
          <div className="grid sm:grid-cols-2 gap-4">
            {user.sports.map((sport, index) => (
              <div key={sport} className="p-6 bg-surface-container-lowest">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">{sport}</span>
                  <span className="text-2xl font-bold" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                    {[18, 12, 10, 7][index]}
                  </span>
                </div>
                <div className="h-2 bg-surface-container overflow-hidden">
                  <div 
                    className="h-full bg-primary transition-all duration-500"
                    style={{ width: `${[70, 50, 40, 30][index]}%` }}
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  {[18, 12, 10, 7][index]} sessions complétées
                </p>
              </div>
            ))}
          </div>

          {/* Monthly progress */}
          <div className="p-6 bg-primary text-primary-foreground">
            <h3 className="text-xs uppercase tracking-widest opacity-60 mb-4">Ce mois</h3>
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold" style={{ fontFamily: 'var(--font-space-grotesk)' }}>8</div>
                <div className="text-xs uppercase tracking-wide opacity-60 mt-1">Sessions</div>
              </div>
              <div>
                <div className="text-3xl font-bold" style={{ fontFamily: 'var(--font-space-grotesk)' }}>12h</div>
                <div className="text-xs uppercase tracking-wide opacity-60 mt-1">Entraînement</div>
              </div>
              <div>
                <div className="text-3xl font-bold" style={{ fontFamily: 'var(--font-space-grotesk)' }}>+15%</div>
                <div className="text-xs uppercase tracking-wide opacity-60 mt-1">vs. mois dernier</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'achievements' && (
        <div className="space-y-8">
          <h2 
            className="text-xl font-bold uppercase tracking-display"
            style={{ fontFamily: 'var(--font-space-grotesk)' }}
          >
            Mes succès
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {achievements.map((achievement) => (
              <div 
                key={achievement.title}
                className={`p-6 transition-colors ${
                  achievement.earned 
                    ? 'bg-surface-container-lowest' 
                    : 'bg-surface-container/50 opacity-50'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 flex items-center justify-center ${
                    achievement.earned ? 'bg-primary text-primary-foreground' : 'bg-surface-container'
                  }`}>
                    {achievement.earned ? '★' : '?'}
                  </div>
                  <div>
                    <h3 className="font-bold uppercase tracking-display" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {achievement.description}
                    </p>
                    {achievement.earned && (
                      <span className="text-xs uppercase tracking-wide text-primary mt-2 inline-block">
                        Débloqué
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
