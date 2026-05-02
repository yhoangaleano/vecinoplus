import { useNavigate, useLocation } from 'react-router-dom'

const navItems = [
  {
    key: 'home',
    label: 'Inicio',
    path: '/feed',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <path d="M9 22V12h6v10" />
      </svg>
    )
  },
  {
    key: 'social',
    label: 'Comunidad',
    path: '/social',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    )
  },
  {
    key: 'create',
    label: 'Publicar',
    path: '/publicar',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M12 5v14M5 12h14" />
      </svg>
    )
  },
  {
    key: 'msg',
    label: 'Mensajes',
    path: '/feed',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    )
  },
  {
    key: 'me',
    label: 'Yo',
    path: '/perfil',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    )
  }
]

interface BottomNavProps {
  activeKey: string
}

export function BottomNav({ activeKey }: BottomNavProps) {
  const navigate = useNavigate()
  return (
    <div className="bottom-nav">
      {navItems.map((item) => (
        <button
          key={item.key}
          className={`nav-item ${activeKey === item.key ? 'active' : ''}`}
          onClick={() => navigate(item.path)}
        >
          {item.icon}
          {item.label}
        </button>
      ))}
    </div>
  )
}
