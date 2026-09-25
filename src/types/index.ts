export type Style =
  | 'Chic'
  | 'Casual'
  | 'Minimaliste'
  | 'Sportwear'
  | 'Bureau'
  | 'Streetwear'
  | 'Soirée'

export type ClothingCategory =
  | 'Haut'
  | 'Bas'
  | 'Robe'
  | 'Veste'
  | 'Chaussures'
  | 'Sac'
  | 'Bijoux'
  | 'Accessoire'

export interface ClothingItem {
  id: string
  name: string
  category: ClothingCategory
  color: string
  season: 'Printemps' | 'Été' | 'Automne' | 'Hiver'
  styleTags: Style[]
  image: string
  isFavorite?: boolean
  lastWornAt?: string
}

export interface Look {
  id: string
  name: string
  style: Style
  items: string[]
  mood: string
  weatherFit: 'Soleil' | 'Doux' | 'Frais'
  image: string
  isFavorite?: boolean
}

export interface CalendarEntry {
  id: string
  date: string
  lookId: string
}

export interface Weather {
  temperature: number
  condition: 'Ensoleillé' | 'Nuageux' | 'Pluvieux'
  city: string
}

export interface BeautyRecommendation {
  id: string
  style: Style
  title: string
  type: 'Coiffure' | 'Maquillage'
  description: string
  image: string
}

export interface Inspiration {
  id: string
  title: string
  style: Style
  description: string
  image: string
}

export interface User {
  name: string
  avatar: string
  preferredStyles: Style[]
  colorProfile: string[]
}

export interface AppSettings {
  notificationsEnabled: boolean
  morningReminder: boolean
  darkMode: boolean
  compactCards: boolean
}

export interface OnboardingState {
  completed: boolean
  styles: Style[]
  colors: string[]
  pinterestSeeded: boolean
}

export interface AppState {
  user: User
  clothes: ClothingItem[]
  looks: Look[]
  calendar: CalendarEntry[]
  favorites: {
    clothes: string[]
    looks: string[]
  }
  settings: AppSettings
  onboarding: OnboardingState
}
