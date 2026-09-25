import { Outlet } from 'react-router-dom'
import { BottomNavigation } from '../components/BottomNavigation'

export const AppLayout = () => (
  <div className="app-shell">
    <main className="page-content">
      <Outlet />
    </main>
    <BottomNavigation />
  </div>
)
