import { Card } from '../components/ui/Card'
import { useApp } from '../store/AppContext'

export const SettingsPage = () => {
  const { settings, setSettings } = useApp()
  const toggle = (field: keyof typeof settings) => setSettings({ ...settings, [field]: !settings[field] })

  return (
    <section>
      <Card>
        <h2>Paramètres</h2>
        <label><input type="checkbox" checked={settings.notificationsEnabled} onChange={() => toggle('notificationsEnabled')} /> Notifications</label>
        <label><input type="checkbox" checked={settings.morningReminder} onChange={() => toggle('morningReminder')} /> Rappel matinal</label>
        <label><input type="checkbox" checked={settings.darkMode} onChange={() => toggle('darkMode')} /> Thème sombre</label>
        <label><input type="checkbox" checked={settings.compactCards} onChange={() => toggle('compactCards')} /> Cartes compactes</label>
      </Card>
    </section>
  )
}
