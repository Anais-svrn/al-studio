import { Search } from 'lucide-react'

export const SearchBar = ({ value, onChange, label = 'Rechercher' }: { value: string; onChange: (v: string) => void; label?: string }) => (
  <label className="search-bar">
    <Search size={16} />
    <span className="sr-only">{label}</span>
    <input value={value} onChange={(e) => onChange(e.target.value)} placeholder={label} aria-label={label} />
  </label>
)
