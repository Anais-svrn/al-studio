import type { ClothingItem } from '../types'

export const virtualTryOnService = {
  async preview(item: ClothingItem): Promise<string> {
    return Promise.resolve(`Simulation appliquée pour ${item.name}.`) 
  },
}
