import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Card } from '../components/ui/Card'
import { EmptyState } from '../components/ui/EmptyState'
import { FilterBar } from '../components/ui/FilterBar'
import { SearchBar } from '../components/ui/SearchBar'
import { useApp } from '../store/AppContext'

export const DressingPage = () => {
  const { clothes, favorites, setFavorites } = useApp()
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('Tous')
  const [sort, setSort] = useState('Nom')
  const categories = ['Tous', 'Haut', 'Bas', 'Robe', 'Veste', 'Chaussures', 'Sac', 'Bijoux', 'Accessoire']

  const filtered = useMemo(() => {
    const list = clothes
      .filter((item) => (filter === 'Tous' ? true : item.category === filter))
      .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
    return [...list].sort((a, b) => (sort === 'Nom' ? a.name.localeCompare(b.name) : a.color.localeCompare(b.color)))
  }, [clothes, filter, search, sort])

  return (
    <section>
      <Card>
        <h2>Dressing</h2>
        <SearchBar value={search} onChange={setSearch} label="Rechercher un vêtement" />
        <FilterBar options={categories} selected={filter} onSelect={setFilter} />
        <label>Tri
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option>Nom</option>
            <option>Couleur</option>
          </select>
        </label>
        <Link to="/dressing/add" className="btn btn-primary">Ajouter un vêtement</Link>
      </Card>

      {filtered.length === 0 ? (
        <EmptyState title="Aucun vêtement trouvé" message="Ajustez vos filtres ou ajoutez une nouvelle pièce." />
      ) : (
        <div className="grid">
          {filtered.map((item) => (
            <Card key={item.id} className="compact-card">
              <Link to={`/dressing/${item.id}`}>
                <img src={item.image} alt={item.name} loading="lazy" />
                <h3>{item.name}</h3>
              </Link>
              <p>{item.category} · {item.color}</p>
              <button
                type="button"
                className="chip"
                onClick={() => setFavorites({ ...favorites, clothes: favorites.clothes.includes(item.id) ? favorites.clothes.filter((id) => id !== item.id) : [...favorites.clothes, item.id] })}
              >
                {favorites.clothes.includes(item.id) ? 'Retirer favori' : 'Ajouter favori'}
              </button>
            </Card>
          ))}
        </div>
      )}
    </section>
  )
}
