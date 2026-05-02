import { useNavigate } from 'react-router-dom'
import { PhoneShellWithNav } from '../components/PhoneShell'
import { BottomNav } from '../components/BottomNav'
import { IconBack, IconPhone, IconChat, IconVerified } from '../components/icons'

export function BusinessScreen() {
  const navigate = useNavigate()

  return (
    <PhoneShellWithNav bottomNav={<BottomNav activeKey="home" />}>
      <div className="biz-cover">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <IconBack />
        </button>
        <div className="biz-mark">Verificado</div>
      </div>
      <div className="biz-info">
        <div className="biz-logo">P</div>
        <div className="biz-name">Panadería La Espiga</div>
        <div className="biz-cat">Panadería · A 180m del conjunto</div>
        <div className="verified-badge">
          <IconVerified />
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
            <IconPhone />
            Llamar
          </button>
          <button className="biz-btn">
            <IconChat />
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
                <IconVerified />
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
