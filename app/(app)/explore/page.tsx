'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Search, MapPin, Clock, Users, SlidersHorizontal, X } from 'lucide-react'

const sports = ['Tous', 'Running', 'Musculation', 'Yoga', 'Football', 'Basketball', 'Tennis', 'Padel', 'CrossFit', 'Natation']

// Mock data
const sessions = [
  {
    id: '1',
    title: 'Running matinal au parc',
    sport: 'Running',
    location: 'Parc des Buttes-Chaumont',
    city: 'Paris 19e',
    date: 'Demain',
    time: '07:00',
    duration: '1h',
    participants: 4,
    maxParticipants: 8,
    difficulty: 'Intermédiaire',
    host: {
      name: 'Marie L.',
      avatar: '/images/avatar-1.jpg',
    },
    image: '/images/session-running.jpg',
  },
  {
    id: '2',
    title: 'Session CrossFit intense',
    sport: 'CrossFit',
    location: 'CrossFit Paris 11',
    city: 'Paris 11e',
    date: 'Mercredi',
    time: '18:30',
    duration: '1h30',
    participants: 6,
    maxParticipants: 10,
    difficulty: 'Avancé',
    host: {
      name: 'Thomas B.',
      avatar: '/images/avatar-2.jpg',
    },
    image: '/images/session-crossfit.jpg',
  },
  {
    id: '3',
    title: 'Yoga flow matinal',
    sport: 'Yoga',
    location: 'Studio Zen',
    city: 'Paris 6e',
    date: 'Jeudi',
    time: '07:30',
    duration: '1h',
    participants: 8,
    maxParticipants: 12,
    difficulty: 'Tous niveaux',
    host: {
      name: 'Sophie M.',
      avatar: '/images/avatar-3.jpg',
    },
    image: '/images/session-yoga.jpg',
  },
  {
    id: '4',
    title: 'Match de foot 5v5',
    sport: 'Football',
    location: 'Urban Soccer',
    city: 'Paris 15e',
    date: 'Samedi',
    time: '14:00',
    duration: '1h',
    participants: 7,
    maxParticipants: 10,
    difficulty: 'Intermédiaire',
    host: {
      name: 'Lucas D.',
      avatar: '/images/avatar-2.jpg',
    },
    image: '/images/session-football.jpg',
  },
]

export default function ExplorePage() {
  const [selectedSport, setSelectedSport] = useState('Tous')
  const [searchQuery, setSearchQuery] = useState('')
  const [showFilters, setShowFilters] = useState(false)

  const filteredSessions = sessions.filter((session) => {
    const matchesSport = selectedSport === 'Tous' || session.sport === selectedSport
    const matchesSearch = session.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          session.location.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesSport && matchesSearch
  })

  return (
    <div className="px-4 lg:px-8 py-6 lg:py-10">
      {/* Header */}
      <div className="mb-8">
        <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
          Découvrir
        </span>
        <h1 
          className="text-3xl lg:text-4xl font-bold uppercase tracking-display mt-2"
          style={{ fontFamily: 'var(--font-space-grotesk)' }}
        >
          Explorer
        </h1>
      </div>

      {/* Search and Filters */}
      <div className="mb-8 space-y-4">
        {/* Search bar */}
        <div className="flex gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher une session..."
              className="w-full pl-12 pr-4 py-4 bg-surface-container-lowest border-0 text-base placeholder:text-muted-foreground/50 focus:ring-2 focus:ring-primary transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`px-4 flex items-center gap-2 transition-colors ${
              showFilters ? 'bg-primary text-primary-foreground' : 'bg-surface-container-lowest hover:bg-secondary'
            }`}
          >
            <SlidersHorizontal className="w-5 h-5" />
            <span className="hidden sm:inline text-sm uppercase tracking-wide">Filtres</span>
          </button>
        </div>

        {/* Sport filters */}
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 lg:mx-0 lg:px-0 scrollbar-hide">
          {sports.map((sport) => (
            <button
              key={sport}
              onClick={() => setSelectedSport(sport)}
              className={`shrink-0 px-4 py-2 text-sm uppercase tracking-wide transition-all duration-300 kinetic-ease ${
                selectedSport === sport
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-surface-container hover:bg-secondary'
              }`}
            >
              {sport}
            </button>
          ))}
        </div>

        {/* Extended filters panel */}
        {showFilters && (
          <div className="p-6 bg-surface-container-lowest space-y-6">
            <div className="grid sm:grid-cols-3 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground font-medium mb-3">
                  Distance max
                </label>
                <select className="w-full px-4 py-3 bg-surface-container border-0 text-sm">
                  <option>5 km</option>
                  <option>10 km</option>
                  <option>20 km</option>
                  <option>Pas de limite</option>
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground font-medium mb-3">
                  Niveau
                </label>
                <select className="w-full px-4 py-3 bg-surface-container border-0 text-sm">
                  <option>Tous niveaux</option>
                  <option>Débutant</option>
                  <option>Intermédiaire</option>
                  <option>Avancé</option>
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-muted-foreground font-medium mb-3">
                  Date
                </label>
                <select className="w-full px-4 py-3 bg-surface-container border-0 text-sm">
                  <option>Toutes les dates</option>
                  <option>Aujourd&apos;hui</option>
                  <option>Cette semaine</option>
                  <option>Ce mois</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Results count */}
      <div className="mb-6">
        <p className="text-sm text-muted-foreground">
          {filteredSessions.length} session{filteredSessions.length !== 1 ? 's' : ''} trouvée{filteredSessions.length !== 1 ? 's' : ''}
        </p>
      </div>

      {/* Sessions Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSessions.map((session) => (
          <Link
            key={session.id}
            href={`/session/${session.id}`}
            className="group block bg-surface-container-lowest overflow-hidden"
          >
            {/* Image */}
            <div className="relative aspect-[4/3] bg-muted overflow-hidden">
              <Image
                src={session.image}
                alt={session.title}
                fill
                className="object-cover group-hover:scale-[1.02] transition-transform duration-500 kinetic-ease"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Sport tag */}
              <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground text-xs uppercase tracking-wide">
                {session.sport}
              </div>
              {/* Difficulty tag */}
              <div className="absolute top-4 right-4 px-3 py-1 bg-surface-container-lowest/90 text-xs uppercase tracking-wide">
                {session.difficulty}
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 
                className="text-lg font-bold uppercase tracking-display mb-3 line-clamp-1"
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                {session.title}
              </h3>

              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 shrink-0" />
                  <span className="truncate">{session.location}, {session.city}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {session.date}, {session.time}
                  </span>
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-border/20">
                <div className="flex items-center gap-2">
                  <div className="relative w-8 h-8 overflow-hidden bg-muted">
                    <Image
                      src={session.host.avatar}
                      alt={session.host.name}
                      fill
                      className="object-cover"
                      sizes="32px"
                    />
                  </div>
                  <span className="text-sm">{session.host.name}</span>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Users className="w-4 h-4" />
                  {session.participants}/{session.maxParticipants}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Empty state */}
      {filteredSessions.length === 0 && (
        <div className="text-center py-16">
          <p className="text-muted-foreground mb-4">Aucune session trouvée</p>
          <button
            onClick={() => {
              setSelectedSport('Tous')
              setSearchQuery('')
            }}
            className="text-sm uppercase tracking-wide underline hover:no-underline"
          >
            Réinitialiser les filtres
          </button>
        </div>
      )}
    </div>
  )
}
