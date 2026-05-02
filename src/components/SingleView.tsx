import { Link } from 'react-router-dom'
import { ReactNode } from 'react'
import { ThemeToggle } from './ThemeToggle'
import { IconBack } from './icons'

interface SingleViewProps {
  children: ReactNode
}

export function SingleView({ children }: SingleViewProps) {
  return (
    <div className="single-view">
      <div className="single-view-back">
        <Link to="/">
          <IconBack />
          Volver al showcase
        </Link>
        <ThemeToggle />
      </div>
      {children}
    </div>
  )
}
