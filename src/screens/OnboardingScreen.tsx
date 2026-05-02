import { useNavigate } from 'react-router-dom'
import { PhoneShell } from '../components/PhoneShell'
import { IconChevronRight, IconArrowRight } from '../components/icons'
import { useUserStore } from '../stores'
import { currentUser } from '../data/mock'

export function OnboardingScreen() {
  const navigate = useNavigate()
  const login = useUserStore((s) => s.login)
  const completeOnboarding = useUserStore((s) => s.completeOnboarding)

  const handleContinue = () => {
    login(currentUser)
    completeOnboarding()
    navigate('/feed')
  }

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
              <IconChevronRight />
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
        <button className="cta-btn" style={{ marginTop: 'auto' }} onClick={handleContinue}>
          Continuar verificación
          <IconArrowRight />
        </button>
        <p className="onb-trust">
          Te enviaremos un código a tu administración
          <br />o pediremos validación de un vecino verificado.
        </p>
      </div>
    </PhoneShell>
  )
}
