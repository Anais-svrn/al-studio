import { Sparkles } from 'lucide-react'

export const EmptyState = ({ title, message, action }: { title: string; message: string; action?: React.ReactNode }) => (
  <div className="state-card" role="status" aria-live="polite">
    <Sparkles size={22} />
    <h3>{title}</h3>
    <p>{message}</p>
    {action}
  </div>
)
