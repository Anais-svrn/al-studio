import { mockClothes, mockLooks, mockUser } from '../data/mockData'
import type { AppSettings, CalendarEntry, ClothingItem, Look, OnboardingState, User } from '../types'

const keys = {
  user: 'alstudio:user',
  clothes: 'alstudio:clothes',
  looks: 'alstudio:looks',
  favorites: 'alstudio:favorites',
  calendar: 'alstudio:calendar',
  settings: 'alstudio:settings',
  onboarding: 'alstudio:onboarding',
} as const

const defaults = {
  user: mockUser,
  clothes: mockClothes,
  looks: mockLooks,
  favorites: { clothes: [] as string[], looks: [] as string[] },
  calendar: [] as CalendarEntry[],
  settings: {
    notificationsEnabled: true,
    morningReminder: true,
    darkMode: false,
    compactCards: false,
  } as AppSettings,
  onboarding: {
    completed: false,
    styles: [],
    colors: [],
    pinterestSeeded: false,
  } as OnboardingState,
}

const parse = <T,>(key: string, fallback: T): T => {
  try {
    const value = localStorage.getItem(key)
    return value ? (JSON.parse(value) as T) : fallback
  } catch {
    return fallback
  }
}

const write = <T,>(key: string, value: T) => localStorage.setItem(key, JSON.stringify(value))

export const storageService = {
  getUser: (): User => parse(keys.user, defaults.user),
  setUser: (value: User) => write(keys.user, value),

  getClothes: (): ClothingItem[] => parse(keys.clothes, defaults.clothes),
  setClothes: (value: ClothingItem[]) => write(keys.clothes, value),

  getLooks: (): Look[] => parse(keys.looks, defaults.looks),
  setLooks: (value: Look[]) => write(keys.looks, value),

  getFavorites: (): { clothes: string[]; looks: string[] } => parse(keys.favorites, defaults.favorites),
  setFavorites: (value: { clothes: string[]; looks: string[] }) => write(keys.favorites, value),

  getCalendar: (): CalendarEntry[] => parse(keys.calendar, defaults.calendar),
  setCalendar: (value: CalendarEntry[]) => write(keys.calendar, value),

  getSettings: (): AppSettings => parse(keys.settings, defaults.settings),
  setSettings: (value: AppSettings) => write(keys.settings, value),

  getOnboarding: (): OnboardingState => parse(keys.onboarding, defaults.onboarding),
  setOnboarding: (value: OnboardingState) => write(keys.onboarding, value),

  clearAll: () => Object.values(keys).forEach((k) => localStorage.removeItem(k)),
}
