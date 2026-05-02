import { useNavigate } from 'react-router-dom'
import { PhoneShellWithNav } from '../components/PhoneShell'
import { BottomNav } from '../components/BottomNav'

export function BusinessScreen() {
  const navigate = useNavigate()

  return (
    <PhoneShellWithNav bottomNav={<BottomNav activeKey="home" />}>
      <div className="biz-cover">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <div className="biz-mark">Verificado</div>
      </div>
      <div className="biz-info">
        <div className="biz-logo">P</div>
        <div className="biz-name">Panadería La Espiga</div>
        <div className="biz-cat">Panadería · A 180m del conjunto</div>
        <div className="verified-badge">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M9 12l2 2 4-4M21 12c0 5-4 9-9 9s-9-4-9-9 4-9 9-9 9 4 9 9z" />
          </svg>
          Proveedor verificado
        </div>
        <div className="biz-stats">
          <div className="stat">
            <span className="stat-num">
              <em>4.8</em>
            </span>
            <span className="stat-label">Rating</span>
          </div>
          <div className="stat">
            <span className="stat-num">128</span>
            <span className="stat-label">Reseñas</span>
          </div>
          <div className="stat">
            <span className="stat-num">3 años</span>
            <span className="stat-label">En el barrio</span>
          </div>
        </div>
        <div className="biz-cta-row">
          <button className="biz-btn primary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            Llamar
          </button>
          <button className="biz-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
            </svg>
            Mensaje
          </button>
        </div>
      </div>
      <div className="biz-section">
        <div className="section-label">
          <h4>Productos destacados</h4>
          <span>Ver todos</span>
        </div>
      </div>
      <div style={{ padding: '0 22px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <button className="service-card">
          <div className="service-img variant-2">●</div>
          <div className="service-info">
            <div className="service-title">Pan integral artesanal</div>
            <div className="service-by">Horneado dos veces al día</div>
            <div className="service-meta">
              <span className="service-tag tag-verif">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M9 12l2 2 4-4" />
                </svg>
                Recomendado
              </span>
              <span className="service-price">$8.500</span>
            </div>
          </div>
        </button>
      </div>
    </PhoneShellWithNav>
  )
}
