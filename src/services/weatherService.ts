import type { Weather } from '../types'

export const weatherService = {
  async getCurrentWeather(): Promise<Weather> {
    return Promise.resolve({ temperature: 26, condition: 'Ensoleillé', city: 'Paris' })
  },
}
