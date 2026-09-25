import { Chip } from './Chip'

export const FilterBar = ({
  options,
  selected,
  onSelect,
}: {
  options: string[]
  selected: string
  onSelect: (value: string) => void
}) => (
  <div className="filter-bar" role="tablist" aria-label="Filtres">
    {options.map((option) => (
      <Chip key={option} active={selected === option} onClick={() => onSelect(option)}>
        {option}
      </Chip>
    ))}
  </div>
)
