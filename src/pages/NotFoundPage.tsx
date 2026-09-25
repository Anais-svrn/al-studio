import { Link } from 'react-router-dom'
import { EmptyState } from '../components/ui/EmptyState'

export const NotFoundPage = () => (
  <EmptyState
    title="Page non trouvée"
    message="Cette route n'existe pas dans AL STUDIO."
    action={<Link to="/" className="btn btn-primary">Retour accueil</Link>}
  />
)
