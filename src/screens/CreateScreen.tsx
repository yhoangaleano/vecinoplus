import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PhoneShell } from '../components/PhoneShell'
import { Topbar } from '../components/Topbar'
import { IconClose, IconUpload, IconFood, IconPets, IconTools } from '../components/icons'
import { useServiceStore, useUserStore } from '../stores'
import { currentUser as mockUser } from '../data/mock'
import type { Service } from '../data/mock'

const categories = [
  { key: 'food', label: 'Comida', icon: <IconFood /> },
  { key: 'pets', label: 'Mascotas', icon: <IconPets /> },
  { key: 'home', label: 'Hogar', icon: <IconTools /> },
]

export function CreateScreen() {
  const navigate = useNavigate()
  const storeUser = useUserStore((s) => s.user)
  const addService = useServiceStore((s) => s.addService)
  const user = storeUser ?? mockUser

  const [activeCat, setActiveCat] = useState('food')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const canPublish = title.trim().length > 0 && description.trim().length > 0

  const handlePublish = () => {
    if (!canPublish) return

    const variantMap: Record<string, Service['variant']> = {
      food: 'primary',
      pets: 'variant-3',
      home: 'variant-2',
    }

    const newService: Service = {
      id: `${title.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}`,
      title,
      providerName: user.name.split(' ')[0],
      providerTower: user.tower,
      providerApt: '502',
      initial: user.initial,
      variant: variantMap[activeCat] ?? 'primary',
      rating: 0,
      reviewCount: 0,
      price: '$0',
      proximity: 'tower',
      proximityLabel: 'Tu torre',
      category: activeCat as Service['category'],
      description,
    }

    addService(newService)
    navigate('/feed')
  }

  return (
    <PhoneShell>
      <Topbar
        title="Nuevo servicio"
        meta="Para tus vecinos"
        rightAction={
          <button className="icon-btn" onClick={() => navigate(-1)}>
            <IconClose />
          </button>
        }
      />
      <div className="create-body">
        <h2 className="create-title">
          Cuéntale a tu conjunto
          <br />
          qué <em>ofreces</em>
        </h2>
        <div>
          <div className="field-label">Foto principal</div>
          <div className="upload-zone">
            <IconUpload />
            <p>
              <strong>Toca para subir</strong> · Mínimo 1 foto
            </p>
          </div>
        </div>
        <div>
          <div className="field-label">Título del servicio</div>
          <input
            className="field-input"
            placeholder="Ej. Almuerzos caseros"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <div className="field-label">Descripción</div>
          <textarea
            className="field-input field-textarea"
            placeholder="Cuéntales a tus vecinos qué hace especial a tu servicio…"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <div className="field-label">Categoría</div>
          <div className="cat-grid">
            {categories.map((cat) => (
              <button
                key={cat.key}
                className={`cat-pill ${activeCat === cat.key ? 'active' : ''}`}
                onClick={() => setActiveCat(cat.key)}
              >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </div>
        </div>
        <button className="cta-btn" onClick={handlePublish} disabled={!canPublish}>
          Publicar servicio
        </button>
      </div>
    </PhoneShell>
  )
}
