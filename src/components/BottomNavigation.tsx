import { CalendarDays, House, Shirt, Sparkles, UserCircle2 } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Accueil', icon: House },
  { to: '/dressing', label: 'Dressing', icon: Shirt },
  { to: '/looks', label: 'Looks', icon: Sparkles },
  { to: '/calendar', label: 'Calendrier', icon: CalendarDays },
  { to: '/profile', label: 'Profil', icon: UserCircle2 },
]

export const BottomNavigation = () => (
  <nav className="bottom-nav" aria-label="Navigation principale">
    {navItems.map(({ to, label, icon: Icon }) => (
      <NavLink key={to} to={to} className={({ isActive }) => `bottom-link ${isActive ? 'bottom-link-active' : ''}`}>
        <Icon size={18} />
        <span>{label}</span>
      </NavLink>
    ))}
  </nav>
)
