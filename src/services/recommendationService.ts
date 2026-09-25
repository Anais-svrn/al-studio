import type { ClothingItem, Look, Style, Weather } from '../types'

interface RecommendationInput {
  looks: Look[]
  clothes: ClothingItem[]
  preferredStyles: Style[]
  weather: Weather
  favoriteLookIds: string[]
  colorProfile: string[]
}

const seasonFromTemp = (temp: number): ClothingItem['season'] => {
  if (temp >= 25) return 'Été'
  if (temp >= 18) return 'Printemps'
  if (temp >= 11) return 'Automne'
  return 'Hiver'
}

export const recommendationService = {
  generateLook(input: RecommendationInput): Look {
    const currentSeason = seasonFromTemp(input.weather.temperature)
    const scored = input.looks.map((look) => {
      const lookItems = look.items
        .map((id) => input.clothes.find((item) => item.id === id))
        .filter((item): item is ClothingItem => Boolean(item))

      const score =
        (input.preferredStyles.includes(look.style) ? 3 : 0) +
        (input.favoriteLookIds.includes(look.id) ? 2 : 0) +
        (look.weatherFit === 'Soleil' && input.weather.condition === 'Ensoleillé' ? 2 : 0) +
        lookItems.filter((item) => item.season === currentSeason).length +
        lookItems.filter((item) => input.colorProfile.some((color) => item.color.includes(color))).length

      return { look, score }
    })

    const best = scored.sort((a, b) => b.score - a.score)[0]
    return best?.look ?? input.looks[0]
  },
}
