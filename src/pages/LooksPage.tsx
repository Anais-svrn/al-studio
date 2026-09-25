import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Card } from '../components/ui/Card'
import { FilterBar } from '../components/ui/FilterBar'
import { styleOptions } from '../data/mockData'
import { useApp } from '../store/AppContext'

export const LooksPage = () => {
  const { looks, favorites, setFavorites } = useApp()
  const [params] = useSearchParams()
  const [filter, setFilter] = useState(params.get('style') ?? 'Tous')
  const list = useMemo(() => looks.filter((look) => (filter === 'Tous' ? true : look.style === filter)), [filter, looks])

  return (
    <section>
      <Card>
        <h2>Looks</h2>
        <FilterBar options={['Tous', ...styleOptions]} selected={filter} onSelect={setFilter} />
      </Card>
      <div className="grid">
        {list.map((look) => (
          <Card key={look.id}>
            <Link to={`/looks/${look.id}`}>
              <img src={look.image} alt={look.name} loading="lazy" />
              <h3>{look.name}</h3>
            </Link>
            <p>{look.style} · {look.mood}</p>
            <button className="chip" type="button" onClick={() => setFavorites({ ...favorites, looks: favorites.looks.includes(look.id) ? favorites.looks.filter((id) => id !== look.id) : [...favorites.looks, look.id] })}>
              {favorites.looks.includes(look.id) ? 'Retirer favori' : 'Favori'}
            </button>
          </Card>
        ))}
      </div>
    </section>
  )
}
