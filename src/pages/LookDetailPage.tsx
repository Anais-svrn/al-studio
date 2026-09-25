import { useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { EmptyState } from '../components/ui/EmptyState'
import { useApp } from '../store/AppContext'

export const LookDetailPage = () => {
  const { id } = useParams()
  const { looks, clothes, calendar, setCalendar } = useApp()
  const [date, setDate] = useState('')
  const [feedback, setFeedback] = useState('')
  const navigate = useNavigate()

  const look = looks.find((l) => l.id === id)
  const items = useMemo(() => look?.items.map((itemId) => clothes.find((item) => item.id === itemId)).filter(Boolean), [clothes, look?.items])

  if (!look) return <EmptyState title="Look introuvable" message="Le look demandé n'a pas été trouvé." action={<Button onClick={() => navigate('/looks')}>Retour looks</Button>} />

  return (
    <section>
      <Card>
        <img src={look.image} alt={look.name} loading="lazy" className="hero-image" />
        <h2>{look.name}</h2>
        <p>{look.style} · {look.mood}</p>
        <div className="row-wrap">{items?.map((item) => item && <span key={item.id} className="chip">{item.name}</span>)}</div>
        <label>Date de planification<input type="date" value={date} onChange={(e) => setDate(e.target.value)} /></label>
        <div className="row-wrap">
          <Button onClick={() => {
            if (!date) return setFeedback('Sélectionnez une date.');
            setCalendar([{ id: `${look.id}-${date}`, date, lookId: look.id }, ...calendar.filter((entry) => entry.date !== date)])
            setFeedback('Look ajouté au calendrier.')
          }}>Ajouter au calendrier</Button>
          <Button variant="secondary" onClick={() => navigate('/looks')}>Changer de look</Button>
        </div>
        {feedback && <p className="feedback-success">{feedback}</p>}
      </Card>
    </section>
  )
}
