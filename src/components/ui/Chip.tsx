export const Chip = ({ active, children, onClick }: { active?: boolean; children: React.ReactNode; onClick?: () => void }) => (
  <button type="button" className={`chip ${active ? 'chip-active' : ''}`} onClick={onClick}>
    {children}
  </button>
)
