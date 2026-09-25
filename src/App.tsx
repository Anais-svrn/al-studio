import { Link, Navigate, Route, Routes } from 'react-router-dom'
import { AppLayout } from './layouts/AppLayout'
import { useApp } from './store/AppContext'
import { AddClothingPage } from './pages/AddClothingPage'
import { AvatarPage } from './pages/AvatarPage'
import { BeautyPage } from './pages/BeautyPage'
import { CalendarPage } from './pages/CalendarPage'
import { ClothingDetailPage } from './pages/ClothingDetailPage'
import { DressingPage } from './pages/DressingPage'
import { FavoritesPage } from './pages/FavoritesPage'
import { HomePage } from './pages/HomePage'
import { InspirationPage } from './pages/InspirationPage'
import { LookDetailPage } from './pages/LookDetailPage'
import { LooksPage } from './pages/LooksPage'
import { NotFoundPage } from './pages/NotFoundPage'
import { OnboardingPage } from './pages/OnboardingPage'
import { PrivacyPage } from './pages/PrivacyPage'
import { ProfilePage } from './pages/ProfilePage'
import { SettingsPage } from './pages/SettingsPage'
import { TryOnPage } from './pages/TryOnPage'

const DesktopNav = () => (
  <nav className="desktop-nav" aria-label="Navigation secondaire">
    <Link to="/onboarding">Onboarding</Link>
    <Link to="/avatar">Avatar</Link>
    <Link to="/try-on">Try-on</Link>
    <Link to="/beauty">Beauty</Link>
    <Link to="/inspiration">Inspiration</Link>
    <Link to="/favorites">Favoris</Link>
    <Link to="/settings">Paramètres</Link>
    <Link to="/privacy">Privacy</Link>
  </nav>
)

export default function App() {
  const { onboarding } = useApp()

  return (
    <>
      <DesktopNav />
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={onboarding.completed ? <HomePage /> : <Navigate to="/onboarding" replace />} />
          <Route path="/onboarding" element={<OnboardingPage />} />
          <Route path="/dressing" element={<DressingPage />} />
          <Route path="/dressing/add" element={<AddClothingPage />} />
          <Route path="/dressing/:id" element={<ClothingDetailPage />} />
          <Route path="/looks" element={<LooksPage />} />
          <Route path="/looks/:id" element={<LookDetailPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/avatar" element={<AvatarPage />} />
          <Route path="/try-on" element={<TryOnPage />} />
          <Route path="/beauty" element={<BeautyPage />} />
          <Route path="/inspiration" element={<InspirationPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  )
}
