'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, MapPin, Clock, Users, Calendar, MessageCircle, Share2, Check } from 'lucide-react'

// Mock session data
const session = {
  id: '1',
  title: 'Running matinal au parc',
  sport: 'Running',
  description: 'On se retrouve pour une session running de 10km dans le parc. Allure modérée, on reste groupés et on profite de la belle matinée. Niveau intermédiaire recommandé. N\'oubliez pas votre bouteille d\'eau !',
  location: 'Parc des Buttes-Chaumont',
  address: 'Entrée principale, 1 Rue Botzaris, 75019 Paris',
  date: 'Demain',
  fullDate: 'Samedi 15 Mars 2025',
  time: '07:00',
  duration: '1h',
  participants: 4,
  maxParticipants: 8,
  difficulty: 'Intermédiaire',
  host: {
    id: '1',
    name: 'Marie Laurent',
    avatar: '/images/avatar-1.jpg',
    sessionsHosted: 23,
    memberSince: 'Membre depuis 2024',
  },
  attendees: [
    { id: '2', name: 'Thomas B.', avatar: '/images/avatar-2.jpg' },
    { id: '3', name: 'Sophie M.', avatar: '/images/avatar-3.jpg' },
    { id: '4', name: 'Lucas D.', avatar: '/images/avatar-2.jpg' },
  ],
  image: '/images/session-running.jpg',
}

export default function SessionDetailPage() {
  const [isJoined, setIsJoined] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleJoin = async () => {
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 500))
    setIsJoined(!isJoined)
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen">
      {/* Header Image */}
      <div className="relative h-64 lg:h-96 bg-muted">
        <Image
          src={session.image}
          alt={session.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* Back button */}
        <Link
          href="/explore"
          className="absolute top-4 left-4 lg:top-6 lg:left-6 w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center bg-surface-container-lowest/90 hover:bg-surface-container-lowest transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </Link>

        {/* Share button */}
        <button className="absolute top-4 right-4 lg:top-6 lg:right-6 w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center bg-surface-container-lowest/90 hover:bg-surface-container-lowest transition-colors">
          <Share2 className="w-5 h-5" />
        </button>

        {/* Tags */}
        <div className="absolute bottom-4 left-4 lg:bottom-6 lg:left-6 flex gap-2">
          <span className="px-3 py-1 bg-primary text-primary-foreground text-xs uppercase tracking-wide">
            {session.sport}
          </span>
          <span className="px-3 py-1 bg-surface-container-lowest/90 text-xs uppercase tracking-wide">
            {session.difficulty}
          </span>
        </div>
      </div>

      <div className="px-4 lg:px-8 py-6 lg:py-10 max-w-4xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Title */}
            <div>
              <h1 
                className="text-3xl lg:text-4xl font-bold uppercase tracking-display"
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                {session.title}
              </h1>
            </div>

            {/* Quick Info */}
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="w-5 h-5" />
                <span>{session.fullDate}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-5 h-5" />
                <span>{session.time} - {session.duration}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Users className="w-5 h-5" />
                <span>{session.participants}/{session.maxParticipants} participants</span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h2 
                className="text-lg font-bold uppercase tracking-display mb-4"
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                À propos
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {session.description}
              </p>
            </div>

            {/* Location */}
            <div>
              <h2 
                className="text-lg font-bold uppercase tracking-display mb-4"
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                Lieu
              </h2>
              <div className="flex items-start gap-3 p-4 bg-surface-container-lowest">
                <MapPin className="w-5 h-5 text-muted-foreground shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium">{session.location}</p>
                  <p className="text-sm text-muted-foreground mt-1">{session.address}</p>
                </div>
              </div>
            </div>

            {/* Participants */}
            <div>
              <h2 
                className="text-lg font-bold uppercase tracking-display mb-4"
                style={{ fontFamily: 'var(--font-space-grotesk)' }}
              >
                Participants ({session.participants})
              </h2>
              <div className="flex flex-wrap gap-4">
                {/* Host */}
                <Link
                  href={`/user/${session.host.id}`}
                  className="flex items-center gap-3 p-3 bg-surface-container-lowest hover:bg-secondary/50 transition-colors"
                >
                  <div className="relative w-10 h-10 overflow-hidden bg-muted">
                    <Image
                      src={session.host.avatar}
                      alt={session.host.name}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{session.host.name}</span>
                      <span className="text-[10px] uppercase tracking-wide px-2 py-0.5 bg-primary text-primary-foreground">Hôte</span>
                    </div>
                  </div>
                </Link>

                {/* Other participants */}
                {session.attendees.map((attendee) => (
                  <Link
                    key={attendee.id}
                    href={`/user/${attendee.id}`}
                    className="flex items-center gap-3 p-3 bg-surface-container-lowest hover:bg-secondary/50 transition-colors"
                  >
                    <div className="relative w-10 h-10 overflow-hidden bg-muted">
                      <Image
                        src={attendee.avatar}
                        alt={attendee.name}
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    </div>
                    <span className="font-medium">{attendee.name}</span>
                  </Link>
                ))}

                {/* Remaining spots */}
                {Array.from({ length: session.maxParticipants - session.participants - 1 }).map((_, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 border border-dashed border-border"
                  >
                    <div className="w-10 h-10 bg-surface-container flex items-center justify-center">
                      <Users className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <span className="text-sm text-muted-foreground">Place disponible</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              {/* Host Card */}
              <div className="p-6 bg-surface-container-lowest">
                <h3 className="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-4">
                  Organisé par
                </h3>
                <Link
                  href={`/user/${session.host.id}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="relative w-14 h-14 overflow-hidden bg-muted">
                    <Image
                      src={session.host.avatar}
                      alt={session.host.name}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                  <div>
                    <p className="font-bold group-hover:underline">{session.host.name}</p>
                    <p className="text-sm text-muted-foreground">{session.host.sessionsHosted} sessions</p>
                  </div>
                </Link>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={handleJoin}
                  disabled={isLoading}
                  className={`group w-full flex items-center justify-center gap-3 px-6 py-4 text-sm uppercase tracking-wide font-medium transition-all duration-300 kinetic-ease ${
                    isJoined
                      ? 'bg-surface-container text-foreground hover:bg-secondary'
                      : 'bg-primary text-primary-foreground hover:bg-primary/90'
                  } disabled:opacity-50`}
                >
                  {isLoading ? (
                    'Chargement...'
                  ) : isJoined ? (
                    <>
                      <Check className="w-4 h-4" />
                      Inscrit
                    </>
                  ) : (
                    'Rejoindre la session'
                  )}
                </button>

                <button className="w-full flex items-center justify-center gap-3 px-6 py-4 border border-border/50 text-sm uppercase tracking-wide font-medium hover:bg-secondary transition-all duration-300">
                  <MessageCircle className="w-4 h-4" />
                  Contacter l&apos;hôte
                </button>
              </div>

              {/* Quick Stats */}
              <div className="p-6 bg-primary text-primary-foreground">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                      {session.maxParticipants - session.participants}
                    </div>
                    <div className="text-xs uppercase tracking-wide opacity-60 mt-1">Places restantes</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold" style={{ fontFamily: 'var(--font-space-grotesk)' }}>
                      {session.duration}
                    </div>
                    <div className="text-xs uppercase tracking-wide opacity-60 mt-1">Durée</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
