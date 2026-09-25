import type { Style } from '../types'

export const pinterestService = {
  async simulateSync(style: Style): Promise<string> {
    return Promise.resolve(`Moodboard ${style} simulé. OAuth Pinterest à connecter ultérieurement.`)
  },
}
