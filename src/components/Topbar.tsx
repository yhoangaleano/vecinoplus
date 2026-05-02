import { ReactNode } from 'react'

interface TopbarProps {
  title: string
  meta?: string
  rightAction?: ReactNode
}

export function Topbar({ title, meta, rightAction }: TopbarProps) {
  return (
    <div className="topbar">
      <div>
        <div className="topbar-title">{title}</div>
        {meta && <div className="topbar-meta">{meta}</div>}
      </div>
      <div className="topbar-icons">{rightAction}</div>
    </div>
  )
}
