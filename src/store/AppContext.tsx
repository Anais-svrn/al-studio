import { createContext, useContext, useMemo, useState } from 'react'
import { storageService } from '../services/storageService'
import type { AppSettings, CalendarEntry, ClothingItem, Look, OnboardingState, User } from '../types'

interface AppContextValue {
  user: User
  setUser: (value: User) => void
  clothes: ClothingItem[]
  setClothes: (value: ClothingItem[]) => void
  looks: Look[]
  setLooks: (value: Look[]) => void
  favorites: { clothes: string[]; looks: string[] }
  setFavorites: (value: { clothes: string[]; looks: string[] }) => void
  calendar: CalendarEntry[]
  setCalendar: (value: CalendarEntry[]) => void
  settings: AppSettings
  setSettings: (value: AppSettings) => void
  onboarding: OnboardingState
  setOnboarding: (value: OnboardingState) => void
}

const AppContext = createContext<AppContextValue | null>(null)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUserRaw] = useState(() => storageService.getUser())
  const [clothes, setClothesRaw] = useState(() => storageService.getClothes())
  const [looks, setLooksRaw] = useState(() => storageService.getLooks())
  const [favorites, setFavoritesRaw] = useState(() => storageService.getFavorites())
  const [calendar, setCalendarRaw] = useState(() => storageService.getCalendar())
  const [settings, setSettingsRaw] = useState(() => storageService.getSettings())
  const [onboarding, setOnboardingRaw] = useState(() => storageService.getOnboarding())

  const value = useMemo<AppContextValue>(
    () => ({
      user,
      setUser: (next) => {
        setUserRaw(next)
        storageService.setUser(next)
      },
      clothes,
      setClothes: (next) => {
        setClothesRaw(next)
        storageService.setClothes(next)
      },
      looks,
      setLooks: (next) => {
        setLooksRaw(next)
        storageService.setLooks(next)
      },
      favorites,
      setFavorites: (next) => {
        setFavoritesRaw(next)
        storageService.setFavorites(next)
      },
      calendar,
      setCalendar: (next) => {
        setCalendarRaw(next)
        storageService.setCalendar(next)
      },
      settings,
      setSettings: (next) => {
        setSettingsRaw(next)
        storageService.setSettings(next)
      },
      onboarding,
      setOnboarding: (next) => {
        setOnboardingRaw(next)
        storageService.setOnboarding(next)
      },
    }),
    [calendar, clothes, favorites, looks, onboarding, settings, user],
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useApp = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useApp must be used inside AppProvider')
  }
  return context
}
