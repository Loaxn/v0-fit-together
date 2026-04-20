'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowRight, MapPin, Calendar, Clock, Users, Check } from 'lucide-react'

const sports = [
  'Running', 'Musculation', 'Yoga', 'Football', 'Basketball', 
  'Tennis', 'Padel', 'Natation', 'Boxe', 'CrossFit', 'Cyclisme', 'Escalade'
]

const difficulties = ['Débutant', 'Intermédiaire', 'Avancé', 'Tous niveaux']

export default function CreateSessionPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [selectedSport, setSelectedSport] = useState('')
  const [selectedDifficulty, setSelectedDifficulty] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate creation - replace with actual API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setIsLoading(false)
    router.push('/home')
  }

  return (
    <div className="px-4 lg:px-8 py-6 lg:py-10 max-w-2xl mx-auto">
      {/* Header */}
      <div className="mb-10">
        <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
          Nouvelle session
        </span>
        <h1 
          className="text-3xl lg:text-4xl font-bold uppercase tracking-display mt-2"
          style={{ fontFamily: 'var(--font-space-grotesk)' }}
        >
          Créer une<br />session
        </h1>
        <p className="text-muted-foreground mt-4 leading-relaxed">
          Rassemble la communauté autour de ta session sportive.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Sport Selection */}
        <div>
          <label className="block text-xs uppercase tracking-widest text-muted-foreground font-medium mb-4">
            Sport
          </label>
          <div className="flex flex-wrap gap-2">
            {sports.map((sport) => (
              <button
                key={sport}
                type="button"
                onClick={() => setSelectedSport(sport)}
                className={`flex items-center gap-2 px-4 py-3 text-sm uppercase tracking-wide transition-all duration-300 kinetic-ease ${
                  selectedSport === sport
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-surface-container-lowest hover:bg-secondary'
                }`}
              >
                {selectedSport === sport && <Check className="w-4 h-4" />}
                {sport}
              </button>
            ))}
          </div>
        </div>

        {/* Title */}
        <div>
          <label 
            htmlFor="title" 
            className="block text-xs uppercase tracking-widest text-muted-foreground font-medium mb-3"
          >
            Titre de la session
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-border focus:border-primary focus:ring-0 text-lg placeholder:text-muted-foreground/50 transition-colors duration-300"
            placeholder="Ex: Running matinal au parc"
          />
        </div>

        {/* Description */}
        <div>
          <label 
            htmlFor="description" 
            className="block text-xs uppercase tracking-widest text-muted-foreground font-medium mb-3"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={3}
            className="w-full px-4 py-3 bg-surface-container-lowest border-0 focus:ring-2 focus:ring-primary text-base placeholder:text-muted-foreground/50 transition-all resize-none"
            placeholder="Décris ta session, le programme prévu, ce qu'il faut apporter..."
          />
        </div>

        {/* Location */}
        <div>
          <label 
            htmlFor="location" 
            className="block text-xs uppercase tracking-widest text-muted-foreground font-medium mb-3"
          >
            <MapPin className="w-4 h-4 inline mr-2" />
            Lieu
          </label>
          <input
            type="text"
            id="location"
            name="location"
            required
            className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-border focus:border-primary focus:ring-0 text-lg placeholder:text-muted-foreground/50 transition-colors duration-300"
            placeholder="Adresse ou nom du lieu"
          />
        </div>

        {/* Date and Time */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label 
              htmlFor="date" 
              className="block text-xs uppercase tracking-widest text-muted-foreground font-medium mb-3"
            >
              <Calendar className="w-4 h-4 inline mr-2" />
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              required
              className="w-full px-4 py-3 bg-surface-container-lowest border-0 focus:ring-2 focus:ring-primary text-base transition-all"
            />
          </div>
          <div>
            <label 
              htmlFor="time" 
              className="block text-xs uppercase tracking-widest text-muted-foreground font-medium mb-3"
            >
              <Clock className="w-4 h-4 inline mr-2" />
              Heure
            </label>
            <input
              type="time"
              id="time"
              name="time"
              required
              className="w-full px-4 py-3 bg-surface-container-lowest border-0 focus:ring-2 focus:ring-primary text-base transition-all"
            />
          </div>
        </div>

        {/* Duration and Participants */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label 
              htmlFor="duration" 
              className="block text-xs uppercase tracking-widest text-muted-foreground font-medium mb-3"
            >
              Durée
            </label>
            <select
              id="duration"
              name="duration"
              className="w-full px-4 py-3 bg-surface-container-lowest border-0 focus:ring-2 focus:ring-primary text-base"
            >
              <option value="30">30 minutes</option>
              <option value="45">45 minutes</option>
              <option value="60" selected>1 heure</option>
              <option value="90">1h30</option>
              <option value="120">2 heures</option>
            </select>
          </div>
          <div>
            <label 
              htmlFor="maxParticipants" 
              className="block text-xs uppercase tracking-widest text-muted-foreground font-medium mb-3"
            >
              <Users className="w-4 h-4 inline mr-2" />
              Participants max
            </label>
            <select
              id="maxParticipants"
              name="maxParticipants"
              className="w-full px-4 py-3 bg-surface-container-lowest border-0 focus:ring-2 focus:ring-primary text-base"
            >
              {[2, 4, 6, 8, 10, 12, 15, 20].map((num) => (
                <option key={num} value={num}>{num} personnes</option>
              ))}
            </select>
          </div>
        </div>

        {/* Difficulty */}
        <div>
          <label className="block text-xs uppercase tracking-widest text-muted-foreground font-medium mb-4">
            Niveau requis
          </label>
          <div className="flex flex-wrap gap-2">
            {difficulties.map((difficulty) => (
              <button
                key={difficulty}
                type="button"
                onClick={() => setSelectedDifficulty(difficulty)}
                className={`flex items-center gap-2 px-4 py-3 text-sm uppercase tracking-wide transition-all duration-300 kinetic-ease ${
                  selectedDifficulty === difficulty
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-surface-container-lowest hover:bg-secondary'
                }`}
              >
                {selectedDifficulty === difficulty && <Check className="w-4 h-4" />}
                {difficulty}
              </button>
            ))}
          </div>
        </div>

        {/* Submit */}
        <div className="pt-6">
          <button
            type="submit"
            disabled={isLoading || !selectedSport}
            className="group w-full flex items-center justify-center gap-3 px-8 py-5 bg-primary text-primary-foreground text-sm uppercase tracking-wide font-medium hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 kinetic-ease"
          >
            {isLoading ? (
              'Création en cours...'
            ) : (
              <>
                Créer la session
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  )
}
