import { useState } from 'react'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { Modal } from '../components/ui/Modal'

export const AvatarPage = () => {
  const [open, setOpen] = useState(false)
  return (
    <section>
      <Card>
        <h2>Avatar & Scan 3D</h2>
        <div className="silhouette" aria-label="Silhouette de démonstration" />
        <p>Démonstration sans caméra réelle pour cette version prototype.</p>
        <div className="row-wrap">
          <Button onClick={() => setOpen(true)}>Scanner (démo)</Button>
          <Button variant="secondary" onClick={() => setOpen(true)}>Ajuster morphologie</Button>
        </div>
      </Card>
      <Modal open={open} title="Fonctionnalité bientôt disponible" onClose={() => setOpen(false)}>
        <p>Le scan 3D et l'avatar dynamique arriveront dans une future intégration.</p>
      </Modal>
    </section>
  )
}
