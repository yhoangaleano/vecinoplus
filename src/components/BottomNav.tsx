import { useNavigate } from 'react-router-dom'
import { IconNavHome, IconNavSocial, IconNavPlus, IconChat, IconUser } from '../components/icons'

const navItems = [
  { key: 'home', label: 'Inicio', path: '/feed', icon: <IconNavHome /> },
  { key: 'social', label: 'Comunidad', path: '/social', icon: <IconNavSocial /> },
  { key: 'create', label: 'Publicar', path: '/publicar', icon: <IconNavPlus /> },
  { key: 'msg', label: 'Mensajes', path: '/mensajes', icon: <IconChat /> },
  { key: 'me', label: 'Yo', path: '/perfil', icon: <IconUser /> },
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
