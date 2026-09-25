import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { useApp } from '../store/AppContext'
import type { ClothingCategory, ClothingItem } from '../types'

const categories = ['Haut', 'Bas', 'Robe', 'Veste', 'Chaussures', 'Sac', 'Bijoux', 'Accessoire'] as const

export const AddClothingPage = () => {
  const { clothes, setClothes } = useApp()
  const [form, setForm] = useState<{ name: string; category: ClothingCategory; color: string; season: ClothingItem['season']; image: string }>({ name: '', category: 'Haut', color: '', season: 'Printemps', image: '' })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const submit = () => {
    if (!form.name || !form.color || !form.image) {
      setError('Tous les champs sont requis.')
      return
    }
    const next: ClothingItem = {
      id: `c${Date.now()}`,
      name: form.name,
      category: form.category,
      color: form.color,
      season: form.season,
      image: form.image,
      styleTags: ['Casual'],
    }
    setClothes([next, ...clothes])
    navigate(`/dressing/${next.id}`)
  }

  return (
    <section>
      <Card>
        <h2>Ajouter un vêtement</h2>
        <label>Nom<input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></label>
        <label>Catégorie<select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value as ClothingCategory })}>{categories.map((c) => <option key={c}>{c}</option>)}</select></label>
        <label>Couleur<input value={form.color} onChange={(e) => setForm({ ...form, color: e.target.value })} /></label>
        <label>Saison<select value={form.season} onChange={(e) => setForm({ ...form, season: e.target.value as ClothingItem['season'] })}><option>Printemps</option><option>Été</option><option>Automne</option><option>Hiver</option></select></label>
        <label>URL image<input type="url" value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} placeholder="https://..." /></label>
        <Button onClick={submit}>Enregistrer</Button>
        {error && <p className="feedback-error">{error}</p>}
      </Card>
    </section>
  )
}
