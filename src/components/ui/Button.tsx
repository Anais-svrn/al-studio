import type { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
}

export const Button = ({ variant = 'primary', className = '', ...props }: ButtonProps) => (
  <button className={`btn btn-${variant} ${className}`} {...props} />
)
