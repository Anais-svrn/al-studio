import { Link } from 'react-router-dom'
import { Card } from '../components/ui/Card'
import { EmptyState } from '../components/ui/EmptyState'
import { useApp } from '../store/AppContext'

export const FavoritesPage = () => {
  const { favorites, looks, clothes } = useApp()
  const favoriteLooks = looks.filter((look) => favorites.looks.includes(look.id))
  const favoriteClothes = clothes.filter((item) => favorites.clothes.includes(item.id))

  if (favoriteLooks.length === 0 && favoriteClothes.length === 0) {
    return <EmptyState title="Pas encore de favoris" message="Ajoutez des looks et vêtements en favoris depuis leurs pages." />
  }

  return (
    <section>
      <Card>
        <h2>Looks favoris</h2>
        <div className="grid">{favoriteLooks.map((look) => <Link key={look.id} to={`/looks/${look.id}`} className="mini-card"><img src={look.image} alt={look.name} loading="lazy" /><span>{look.name}</span></Link>)}</div>
      </Card>
      <Card>
        <h2>Vêtements favoris</h2>
        <div className="grid">{favoriteClothes.map((item) => <Link key={item.id} to={`/dressing/${item.id}`} className="mini-card"><img src={item.image} alt={item.name} loading="lazy" /><span>{item.name}</span></Link>)}</div>
      </Card>
    </section>
  )
}
