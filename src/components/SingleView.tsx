import { Link } from 'react-router-dom'
import { ReactNode } from 'react'
import { ThemeToggle } from './ThemeToggle'

interface SingleViewProps {
  children: ReactNode
}

export function SingleView({ children }: SingleViewProps) {
  return (
    <div className="single-view">
      <div className="single-view-back">
        <Link to="/">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
          Volver al showcase
        </Link>
        <ThemeToggle />
      </div>
      {children}
    </div>
  )
}
