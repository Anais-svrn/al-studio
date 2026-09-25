export const Avatar = ({ src, alt, size = 44 }: { src: string; alt: string; size?: number }) => (
  <img className="avatar" src={src} width={size} height={size} alt={alt} loading="lazy" />
)
