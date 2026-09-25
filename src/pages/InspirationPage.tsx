import { useState } from 'react'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { Modal } from '../components/ui/Modal'
import { mockInspiration } from '../data/mockData'
import { pinterestService } from '../services/pinterestService'

export const InspirationPage = () => {
  const [selected, setSelected] = useState<(typeof mockInspiration)[number] | null>(null)
  const [feedback, setFeedback] = useState('')

  return (
    <section>
      <Card>
        <h2>Inspiration</h2>
        <Button onClick={async () => setFeedback(await pinterestService.simulateSync('Chic'))}>Connecter Pinterest (simulé)</Button>
        {feedback && <p className="feedback-success">{feedback}</p>}
      </Card>
      <div className="grid">
        {mockInspiration.map((item) => (
          <button key={item.id} type="button" className="card card-button" onClick={() => setSelected(item)}>
            <img src={item.image} alt={item.title} loading="lazy" />
            <h3>{item.title}</h3>
            <p>{item.style}</p>
          </button>
        ))}
      </div>
      <Modal open={Boolean(selected)} title={selected?.title ?? ''} onClose={() => setSelected(null)}>
        <p>{selected?.description}</p>
      </Modal>
    </section>
  )
}
