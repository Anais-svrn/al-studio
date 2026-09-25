import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../components/Header'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { Chip } from '../components/ui/Chip'
import { useApp } from '../store/AppContext'
import { recommendationService } from '../services/recommendationService'

export const HomePage = () => {
  const { user, clothes, looks, favorites, setFavorites } = useApp()
  const [day, setDay] = useState(0)
  const recommended = useMemo(
    () => recommendationService.generateLook({ looks, clothes, preferredStyles: user.preferredStyles, favoriteLookIds: favorites.looks, weather: { temperature: 26, city: 'Paris', condition: 'Ensoleillé' }, colorProfile: user.colorProfile }),
    [clothes, favorites.looks, looks, user.colorProfile, user.preferredStyles],
  )

  const lookItems = recommended.items.map((id) => clothes.find((c) => c.id === id)).filter(Boolean)
  const week = ['L', 'M', 'M', 'J', 'V', 'S', 'D']

  return (
    <section>
      <Header name={user.name} avatar={user.avatar} />
      <Card>
        <Badge>Look du jour</Badge>
        <h2>{recommended.name}</h2>
        <p>{recommended.mood}</p>
        <img src={recommended.image} alt={`Look ${recommended.name}`} loading="lazy" className="hero-image" />
        <div className="row-wrap">{lookItems.map((item) => item && <Chip key={item.id}>{item.name}</Chip>)}</div>
        <div className="row-wrap">
          <Button onClick={() => setFavorites({ ...favorites, looks: favorites.looks.includes(recommended.id) ? favorites.looks.filter((id) => id !== recommended.id) : [...favorites.looks, recommended.id] })}>Favori</Button>
          <Button variant="secondary" onClick={() => setDay((d) => (d + 1) % 7)}>Changer</Button>
          <Link to={`/looks/${recommended.id}`} className="btn btn-ghost">Porter</Link>
        </div>
      </Card>

      <Card>
        <h3>Semaine</h3>
        <div className="row-wrap">{week.map((w, idx) => <Chip key={`${w}-${idx}`} active={day === idx} onClick={() => setDay(idx)}>{w}</Chip>)}</div>
      </Card>

      <Card>
        <h3>Dressing récent</h3>
        <div className="mini-grid">
          {clothes.slice(0, 4).map((item) => (
            <Link key={item.id} to={`/dressing/${item.id}`} className="mini-card">
              <img src={item.image} alt={item.name} loading="lazy" />
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </Card>

      <Card>
        <h3>Styles</h3>
        <div className="row-wrap">{['Chic', 'Casual', 'Minimaliste', 'Streetwear'].map((style) => <Link key={style} className="chip" to={`/looks?style=${style}`}>{style}</Link>)}</div>
      </Card>
    </section>
  )
}
