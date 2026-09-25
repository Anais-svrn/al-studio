import { useNavigate, useParams } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { EmptyState } from '../components/ui/EmptyState'
import { useApp } from '../store/AppContext'

export const ClothingDetailPage = () => {
  const { id } = useParams()
  const { clothes, setClothes } = useApp()
  const navigate = useNavigate()
  const item = clothes.find((c) => c.id === id)

  if (!item) return <EmptyState title="Pièce introuvable" message="Cette pièce n'existe plus." action={<Button onClick={() => navigate('/dressing')}>Retour dressing</Button>} />

  return (
    <section>
      <Card>
        <img src={item.image} alt={item.name} loading="lazy" className="hero-image" />
        <h2>{item.name}</h2>
        <p>{item.category} · {item.color} · {item.season}</p>
        <div className="row-wrap">
          <Button variant="danger" onClick={() => { setClothes(clothes.filter((c) => c.id !== item.id)); navigate('/dressing') }}>Supprimer</Button>
          <Button variant="secondary" onClick={() => navigate('/dressing')}>Retour</Button>
        </div>
      </Card>
    </section>
  )
}
