export const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <article className={`card ${className}`}>{children}</article>
)
