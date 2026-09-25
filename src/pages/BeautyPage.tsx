import { useState } from 'react'
import { Card } from '../components/ui/Card'
import { Modal } from '../components/ui/Modal'
import { mockBeautyRecommendations } from '../data/mockData'

export const BeautyPage = () => {
  const [selected, setSelected] = useState<(typeof mockBeautyRecommendations)[number] | null>(null)

  return (
    <section>
      <Card>
        <h2>Beauty Studio</h2>
        <p>Coiffure & maquillage associés à vos styles.</p>
      </Card>
      <div className="grid">
        {mockBeautyRecommendations.map((item) => (
          <button key={item.id} type="button" className="card card-button" onClick={() => setSelected(item)}>
            <img src={item.image} alt={item.title} loading="lazy" />
            <h3>{item.title}</h3>
            <p>{item.style} · {item.type}</p>
          </button>
        ))}
      </div>
      <Modal open={Boolean(selected)} title={selected?.title ?? ''} onClose={() => setSelected(null)}>
        <p>{selected?.description}</p>
      </Modal>
    </section>
  )
}
