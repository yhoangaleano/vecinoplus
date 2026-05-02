import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PhoneShell } from '../components/PhoneShell'
import { Topbar } from '../components/Topbar'

const categories = [
  {
    key: 'food',
    label: 'Comida',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M3 11h18M5 11V7a2 2 0 012-2h10a2 2 0 012 2v4M5 11v8a2 2 0 002 2h10a2 2 0 002-2v-8" />
      </svg>
    )
  },
  {
    key: 'pets',
    label: 'Mascotas',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="11" cy="4" r="2" />
        <circle cx="18" cy="8" r="2" />
        <circle cx="4" cy="8" r="2" />
        <circle cx="7" cy="14" r="2" />
        <circle cx="15" cy="14" r="2" />
      </svg>
    )
  },
  {
    key: 'home',
    label: 'Hogar',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M14 6l-1-1c-2-2-5-2-7 0L4 7c-2 2-2 5 0 7l4 4c2 2 5 2 7 0l1-1" />
      </svg>
    )
  }
]

export function CreateScreen() {
  const navigate = useNavigate()
  const [activeCat, setActiveCat] = useState('food')

  return (
    <PhoneShell>
      <Topbar
        title="Nuevo servicio"
        meta="Para tus vecinos"
        rightAction={
          <button className="icon-btn" onClick={() => navigate(-1)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
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
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <path d="M17 8l-5-5-5 5" />
              <path d="M12 3v12" />
            </svg>
            <p>
              <strong>Toca para subir</strong> · Mínimo 1 foto
            </p>
          </div>
        </div>
        <div>
          <div className="field-label">Título del servicio</div>
          <input className="field-input" placeholder="Ej. Almuerzos caseros" />
        </div>
        <div>
          <div className="field-label">Descripción</div>
          <textarea
            className="field-input field-textarea"
            placeholder="Cuéntales a tus vecinos qué hace especial a tu servicio…"
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
        <button className="cta-btn">Publicar servicio</button>
      </div>
    </PhoneShell>
  )
}
