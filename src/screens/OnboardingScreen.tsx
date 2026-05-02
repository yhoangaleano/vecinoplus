import { useNavigate } from 'react-router-dom'
import { PhoneShell } from '../components/PhoneShell'

export function OnboardingScreen() {
  const navigate = useNavigate()
  return (
    <PhoneShell>
      <div className="onb-wrap">
        <div className="onb-logo">
          Vecino<span className="plus">+</span>
        </div>
        <div className="onb-tag">Comunidad · Cercanía · Confianza</div>
        <h2 className="onb-headline">
          Bienvenido,
          <br />
          verifica tu <em>unidad</em>
        </h2>
        <p className="onb-sub">
          Solo tus vecinos verificados pueden ver y contactarte. Es parte de lo que hace especial a esta comunidad.
        </p>
        <div className="onb-form">
          <div>
            <div className="field-label">Conjunto</div>
            <div className="field">
              Reservas de Sabaneta
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
          </div>
          <div className="field-row">
            <div>
              <div className="field-label">Torre</div>
              <div className="field">3 — Magnolia</div>
            </div>
            <div>
              <div className="field-label">Apto</div>
              <div className="field">502</div>
            </div>
          </div>
        </div>
        <button className="cta-btn" style={{ marginTop: 'auto' }} onClick={() => navigate('/feed')}>
          Continuar verificación
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </button>
        <p className="onb-trust">
          Te enviaremos un código a tu administración
          <br />o pediremos validación de un vecino verificado.
        </p>
      </div>
    </PhoneShell>
  )
}
