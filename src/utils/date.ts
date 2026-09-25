export const monthLabel = (date: Date) => date.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })

export const toISODate = (date: Date) => date.toISOString().split('T')[0]

export const sameDay = (a: string, b: string) => a === b
