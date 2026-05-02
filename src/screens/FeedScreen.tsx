import { useMemo } from 'react'
import { PhoneShellWithNav } from '../components/PhoneShell'
import { BottomNav } from '../components/BottomNav'
import { ServiceCard } from '../components/ServiceCard'
import { useServiceStore, useUserStore } from '../stores'
import { currentUser as mockUser } from '../data/mock'

const categories = ['Todo', 'Almuerzos', 'Mascotas', 'Hogar', 'Educación']

const categoryMap: Record<string, string[]> = {
  Todo: [],
  Almuerzos: ['food'],
  Mascotas: ['pets'],
  Hogar: ['home'],
  Educación: ['education'],
}

export function FeedScreen() {
  const storeUser = useUserStore((s) => s.user)
  const user = storeUser ?? mockUser

  const services = useServiceStore((s) => s.services)
  const activeCategory = useServiceStore((s) => s.activeCategory)
  const setActiveCategory = useServiceStore((s) => s.setActiveCategory)

  const filtered = useMemo(() => {
    if (activeCategory === 'Todo') return services
    const cats = categoryMap[activeCategory] ?? []
    return services.filter((s) => cats.includes(s.category))
  }, [services, activeCategory])

  const towerServices = useMemo(
    () => filtered.filter((s) => s.proximity === 'tower'),
    [filtered],
  )
  const conjuntoServices = useMemo(
    () => filtered.filter((s) => s.proximity === 'near'),
    [filtered],
  )

  return (
    <PhoneShellWithNav bottomNav={<BottomNav activeKey="home" />}>
      <div className="feed-hero">
        <div className="feed-greeting">
          Hola, <em>{user.name.split(' ')[0]}</em>
        </div>
        <div className="feed-meta">
          {user.conjunto} · {user.tower}
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
          <span>{conjuntoServices.length} servicios</span>
        </div>
        {conjuntoServices.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </PhoneShellWithNav>
  )
}
