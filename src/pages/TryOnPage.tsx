import { useState } from 'react'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { useApp } from '../store/AppContext'
import { virtualTryOnService } from '../services/virtualTryOnService'

export const TryOnPage = () => {
  const { clothes } = useApp()
  const [index, setIndex] = useState(0)
  const [feedback, setFeedback] = useState('')
  const item = clothes[index]

  return (
    <section>
      <Card>
        <h2>Essayage virtuel</h2>
        <img src={item.image} alt={item.name} loading="lazy" className="hero-image" />
        <h3>{item.name}</h3>
        <p>Mode démonstration : aperçu visuel non photoréaliste.</p>
        <div className="row-wrap">
          <Button variant="secondary" onClick={() => setIndex((i) => (i - 1 + clothes.length) % clothes.length)}>Précédent</Button>
          <Button onClick={async () => setFeedback(await virtualTryOnService.preview(item))}>Essayer</Button>
          <Button variant="secondary" onClick={() => setIndex((i) => (i + 1) % clothes.length)}>Suivant</Button>
        </div>
        {feedback && <p className="feedback-success">{feedback}</p>}
      </Card>
    </section>
  )
}
