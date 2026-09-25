import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Card } from '../components/ui/Card'
import { EmptyState } from '../components/ui/EmptyState'
import { useApp } from '../store/AppContext'
import { monthLabel, toISODate } from '../utils/date'

export const CalendarPage = () => {
  const { calendar, setCalendar, looks } = useApp()
  const [cursor, setCursor] = useState(new Date())
  const daysInMonth = useMemo(() => new Date(cursor.getFullYear(), cursor.getMonth() + 1, 0).getDate(), [cursor])

  return (
    <section>
      <Card>
        <div className="row-between">
          <button className="chip" onClick={() => setCursor(new Date(cursor.getFullYear(), cursor.getMonth() - 1, 1))}>Précédent</button>
          <h2>{monthLabel(cursor)}</h2>
          <button className="chip" onClick={() => setCursor(new Date(cursor.getFullYear(), cursor.getMonth() + 1, 1))}>Suivant</button>
        </div>
        <div className="calendar-grid">
          {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
            const date = toISODate(new Date(cursor.getFullYear(), cursor.getMonth(), day))
            const entry = calendar.find((item) => item.date === date)
            const look = looks.find((l) => l.id === entry?.lookId)
            return (
              <button key={date} className="day-cell" onClick={() => {
                if (entry) setCalendar(calendar.filter((item) => item.id !== entry.id))
              }}>
                <span>{day}</span>
                {look ? <small>{look.name}</small> : <small>Libre</small>}
              </button>
            )
          })}
        </div>
      </Card>
      {calendar.length === 0 && <EmptyState title="Aucun look planifié" message="Ajoutez un look depuis la page Looks." action={<Link to="/looks" className="btn btn-primary">Explorer les looks</Link>} />}
    </section>
  )
}
