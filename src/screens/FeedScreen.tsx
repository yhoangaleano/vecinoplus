import { useState } from 'react'
import { PhoneShellWithNav } from '../components/PhoneShell'
import { BottomNav } from '../components/BottomNav'
import { ServiceCard } from '../components/ServiceCard'
import { services, currentUser } from '../data/mock'

const categories = ['Todo', 'Almuerzos', 'Mascotas', 'Hogar', 'Educación']

export function FeedScreen() {
  const [activeCategory, setActiveCategory] = useState('Todo')

  const towerServices = services.filter((s) => s.proximity === 'tower')
  const conjuntoServices = services.filter((s) => s.proximity === 'near')

  return (
    <PhoneShellWithNav bottomNav={<BottomNav activeKey="home" />}>
      <div className="feed-hero">
        <div className="feed-greeting">
          Hola, <em>{currentUser.name.split(' ')[0]}</em>
        </div>
        <div className="feed-meta">
          {currentUser.conjunto} · {currentUser.tower}
        </div>
      </div>
      <div className="chips">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`chip ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="feed-list">
        <div className="section-label">
          <h4>Cerca de tu torre</h4>
          <span>{towerServices.length} vecinos</span>
        </div>
        {towerServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
        <div className="section-label">
          <h4>En tu conjunto</h4>
          <span>12 servicios</span>
        </div>
        {conjuntoServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </PhoneShellWithNav>
  )
}
