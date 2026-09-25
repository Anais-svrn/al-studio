import { useState } from 'react'
import { Avatar } from '../components/ui/Avatar'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { Modal } from '../components/ui/Modal'
import { useApp } from '../store/AppContext'

export const ProfilePage = () => {
  const { user, setUser, clothes, looks, favorites } = useApp()
  const [open, setOpen] = useState(false)
  const [name, setName] = useState(user.name)

  return (
    <section>
      <Card>
        <div className="row-wrap">
          <Avatar src={user.avatar} alt="Avatar d'Emma" size={72} />
          <div>
            <h2>{user.name}</h2>
            <p>Styles: {user.preferredStyles.join(', ')}</p>
            <p>Colorimétrie: {user.colorProfile.join(', ')}</p>
          </div>
        </div>
        <div className="stats-grid">
          <p><strong>{clothes.length}</strong> pièces</p>
          <p><strong>{looks.length}</strong> looks</p>
          <p><strong>{favorites.clothes.length + favorites.looks.length}</strong> favoris</p>
        </div>
        <div className="row-wrap">
          <Button onClick={() => setOpen(true)}>Éditer le profil</Button>
          <Button variant="secondary" onClick={() => setUser({ ...user, preferredStyles: [...user.preferredStyles].reverse() })}>Réordonner styles</Button>
        </div>
      </Card>
      <Modal open={open} title="Modifier le profil" onClose={() => setOpen(false)}>
        <label>Prénom<input value={name} onChange={(e) => setName(e.target.value)} /></label>
        <Button onClick={() => { setUser({ ...user, name }); setOpen(false) }}>Enregistrer</Button>
      </Modal>
    </section>
  )
}
