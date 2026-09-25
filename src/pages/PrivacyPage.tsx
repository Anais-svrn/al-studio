import { useState } from 'react'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { storageService } from '../services/storageService'

export const PrivacyPage = () => {
  const [feedback, setFeedback] = useState('')

  const clear = () => {
    if (window.confirm('Supprimer toutes les données locales AL STUDIO ?')) {
      storageService.clearAll()
      setFeedback('Données supprimées. Rechargez la page pour repartir de zéro.')
    }
  }

  return (
    <section>
      <Card>
        <h2>Confidentialité</h2>
        <p>Collecte: uniquement les données saisies dans l'application.</p>
        <p>Usage: personnaliser recommandations et planification.</p>
        <p>Stockage: LocalStorage navigateur, sans envoi serveur.</p>
        <p>Suppression: vous pouvez effacer toutes les données à tout moment.</p>
        <Button variant="danger" onClick={clear}>Supprimer mes données locales</Button>
        {feedback && <p className="feedback-success">{feedback}</p>}
      </Card>
    </section>
  )
}
