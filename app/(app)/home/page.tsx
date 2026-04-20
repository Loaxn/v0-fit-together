'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, MapPin, Clock, Users, ChevronRight } from 'lucide-react'

// Mock data
const upcomingSessions = [
  {
    id: '1',
    title: 'Running matinal',
    sport: 'Running',
    location: 'Parc des Buttes-Chaumont',
    date: 'Demain',
    time: '07:00',
    participants: 4,
    maxParticipants: 8,
    host: {
      name: 'Marie L.',
      avatar: '/images/avatar-1.jpg',
    },
  },
  {
    id: '2',
    title: 'Session CrossFit',
    sport: 'CrossFit',
    location: 'CrossFit Paris 11',
    date: 'Mercredi',
    time: '18:30',
    participants: 6,
    maxParticipants: 10,
    host: {
      name: 'Thomas B.',
      avatar: '/images/avatar-2.jpg',
    },
  },
]

const recommendedPartners = [
  {
    id: '1',
    name: 'Sophie M.',
    avatar: '/images/avatar-3.jpg',
    sports: ['Running', 'Yoga'],
    level: 'Intermédiaire',
    distance: '2.3 km',
  },
  {
    id: '2',
    name: 'Lucas D.',
    avatar: '/images/avatar-2.jpg',
    sports: ['Musculation', 'CrossFit'],
    level: 'Avancé',
    distance: '1.8 km',
  },
  {
    id: '3',
    name: 'Emma R.',
    avatar: '/images/avatar-1.jpg',
    sports: ['Tennis', 'Padel'],
    level: 'Débutant',
    distance: '3.1 km',
  },
]

const recentActivity = [
  {
    id: '1',
    type: 'session_joined',
    message: 'Tu as rejoint la session "Running dimanche"',
    time: 'Il y a 2h',
  },
  {
    id: '2',
    type: 'new_match',
    message: 'Nouveau match : Sophie partage tes sports',
    time: 'Il y a 5h',
  },
  {
    id: '3',
    type: 'session_reminder',
    message: 'Rappel : Session yoga demain à 9h',
    time: 'Hier',
  },
]

export default function HomePage() {
  return (
    <div className="px-4 lg:px-8 py-6 lg:py-10">
      {/* Header */}
      <div className="mb-8 lg:mb-12">
        <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
          Bienvenue
        </span>
        <h1 
          className="text-3xl lg:text-4xl font-bold uppercase tracking-display mt-2"
          style={{ fontFamily: 'var(--font-space-grotesk)' }}
        >
          Salut, Alex
        </h1>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Main content - 2 columns */}
        <div className="lg:col-span-2 space-y-8">
          {/* Upcoming Sessions */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 
                className="text-xl lg:text-2xl font-bold uppercase tracking-display"
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                Sessions à venir
              </h2>
              <Link 
                href="/explore"
                className="text-sm uppercase tracking-wide text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
              >
                Voir tout
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="space-y-4">
              {upcomingSessions.map((session) => (
                <Link
                  key={session.id}
                  href={`/session/${session.id}`}
                  className="block group"
                >
                  <div className="flex gap-4 p-4 lg:p-6 bg-surface-container-lowest hover:bg-secondary/50 transition-colors duration-300 kinetic-ease">
                    {/* Host avatar */}
                    <div className="relative w-12 h-12 lg:w-14 lg:h-14 shrink-0 overflow-hidden bg-muted">
                      <Image
                        src={session.host.avatar}
                        alt={session.host.name}
                        fill
                        className="object-cover"
                        sizes="56px"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <span className="text-xs uppercase tracking-widest text-muted-foreground">
                            {session.sport}
                          </span>
                          <h3 className="text-lg font-bold uppercase tracking-display mt-1" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                            {session.title}
                          </h3>
                        </div>
                        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 transition-transform duration-300" />
                      </div>

                      <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {session.date}, {session.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {session.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {session.participants}/{session.maxParticipants}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Quick create */}
            <Link
              href="/create"
              className="flex items-center justify-center gap-3 p-4 mt-4 border border-dashed border-border hover:bg-secondary/50 transition-colors duration-300"
            >
              <span className="text-sm uppercase tracking-wide text-muted-foreground">
                Créer une nouvelle session
              </span>
            </Link>
          </section>

          {/* Recommended Partners */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 
                className="text-xl lg:text-2xl font-bold uppercase tracking-display"
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                Partenaires suggérés
              </h2>
              <Link 
                href="/explore?tab=partners"
                className="text-sm uppercase tracking-wide text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
              >
                Voir tout
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              {recommendedPartners.map((partner) => (
                <Link
                  key={partner.id}
                  href={`/user/${partner.id}`}
                  className="group p-4 lg:p-6 bg-surface-container-lowest hover:bg-secondary/50 transition-colors duration-300"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="relative w-16 h-16 lg:w-20 lg:h-20 overflow-hidden bg-muted mb-4">
                      <Image
                        src={partner.avatar}
                        alt={partner.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                    <h3 className="font-bold uppercase tracking-display" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                      {partner.name}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">{partner.distance}</p>
                    <div className="flex flex-wrap justify-center gap-1 mt-3">
                      {partner.sports.slice(0, 2).map((sport) => (
                        <span key={sport} className="text-[10px] uppercase tracking-wide px-2 py-1 bg-surface-container">
                          {sport}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>

        {/* Sidebar - 1 column */}
        <div className="space-y-6">
          {/* Activity Feed */}
          <section className="bg-surface-container-lowest p-6">
            <h2 
              className="text-lg font-bold uppercase tracking-display mb-6"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Activité récente
            </h2>

            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="pb-4 border-b border-border/20 last:border-0 last:pb-0">
                  <p className="text-sm leading-relaxed">{activity.message}</p>
                  <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Quick Stats */}
          <section className="bg-primary text-primary-foreground p-6">
            <h2 
              className="text-lg font-bold uppercase tracking-display mb-6"
              style={{ fontFamily: 'var(--font-space-grotesk)' }}
            >
              Ce mois-ci
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-3xl font-bold" style={{ fontFamily: 'var(--font-space-grotesk)' }}>12</div>
                <div className="text-xs uppercase tracking-wide opacity-60 mt-1">Sessions</div>
              </div>
              <div>
                <div className="text-3xl font-bold" style={{ fontFamily: 'var(--font-space-grotesk)' }}>28</div>
                <div className="text-xs uppercase tracking-wide opacity-60 mt-1">Partenaires</div>
              </div>
              <div>
                <div className="text-3xl font-bold" style={{ fontFamily: 'var(--font-space-grotesk)' }}>4</div>
                <div className="text-xs uppercase tracking-wide opacity-60 mt-1">Sports</div>
              </div>
              <div>
                <div className="text-3xl font-bold" style={{ fontFamily: 'var(--font-space-grotesk)' }}>18h</div>
                <div className="text-xs uppercase tracking-wide opacity-60 mt-1">Entraînement</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
