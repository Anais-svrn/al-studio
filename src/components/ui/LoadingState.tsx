export const LoadingState = ({ text = 'Chargement...' }: { text?: string }) => (
  <div className="state-card" role="status" aria-live="polite">
    <div className="spinner" aria-hidden="true" />
    <p>{text}</p>
  </div>
)
