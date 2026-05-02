import { useNavigate, useParams } from 'react-router-dom'
import { PhoneShell } from '../components/PhoneShell'
import { services } from '../data/mock'

export function ServiceDetailScreen() {
  const navigate = useNavigate()
  const { id } = useParams()
  const service = services.find((s) => s.id === id) ?? services[0]

  return (
    <PhoneShell>
      <div style={{ position: 'relative' }}>
        <div className="detail-hero">
          <button className="back-btn" onClick={() => navigate(-1)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button className="fav-btn">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21s-7-4.5-9.5-9.5S5 4 8 4s4 2 4 2 1-2 4-2 5.5 2.5 5.5 7.5S12 21 12 21z" />
            </svg>
          </button>
          <div className="detail-mono">{service.initial}</div>
        </div>
        <div className="detail-body">
          <h2 className="detail-title">{service.title}, hechos en tu mismo edificio</h2>
          <p className="detail-by">
            por <strong>{service.providerName} G.</strong> · {service.providerTower}, Apto {service.providerApt}
          </p>
          <div className="detail-stats">
            <div className="stat">
              <span className="stat-num">
                <em>{service.rating}</em>
              </span>
              <span className="stat-label">Calificación</span>
            </div>
            <div className="stat">
              <span className="stat-num">{service.reviewCount}</span>
              <span className="stat-label">Reseñas</span>
            </div>
            <div className="stat">
              <span className="stat-num">8 mín</span>
              <span className="stat-label">Entrega</span>
            </div>
          </div>
          <div className="detail-section">
            <h5>Sobre el servicio</h5>
            <p>{service.description}</p>
          </div>
          <div className="detail-section">
            <h5>Plato del día</h5>
            <div className="price-card">
              <div>
                <div className="price-card-name">Bandeja paisa ligera</div>
                <div className="price-card-desc">Frijoles, arroz, carne, plátano</div>
              </div>
              <div className="price-card-num">{service.price}</div>
            </div>
          </div>
        </div>
        <div className="detail-cta-bar">
          <button className="icon-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </svg>
          </button>
          <button className="cta-btn">Pedir ahora</button>
        </div>
      </div>
    </PhoneShell>
  )
}
