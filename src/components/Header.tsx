import { Bell, Menu } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Avatar } from './ui/Avatar'
import { weatherService } from '../services/weatherService'
import { useEffect, useState } from 'react'

export const Header = ({ name, avatar }: { name: string; avatar: string }) => {
  const [weather, setWeather] = useState('26° · Ensoleillé')

  useEffect(() => {
    weatherService.getCurrentWeather().then((w) => setWeather(`${w.temperature}° · ${w.condition}`))
  }, [])

  return (
    <header className="app-header">
      <div>
        <p className="brand">AL STUDIO</p>
        <h1>Bonjour {name}</h1>
        <p>{weather}</p>
      </div>
      <div className="header-actions">
        <Link to="/settings" className="icon-btn" aria-label="Ouvrir les notifications">
          <Bell size={18} />
        </Link>
        <Link to="/profile" className="avatar-btn" aria-label="Voir le profil">
          <Avatar src={avatar} alt="Avatar Emma" />
        </Link>
        <Link to="/inspiration" className="icon-btn" aria-label="Ouvrir le menu inspiration">
          <Menu size={18} />
        </Link>
      </div>
    </header>
  )
}
