import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { PhoneShell } from '../components/PhoneShell'
import { useUserStore } from '../stores'
import { IconMail, IconLock, IconUser, IconChevronRight, IconArrowRight, IconEye, IconEyeOff } from '../components/icons'

const steps = [
  { key: 'account', label: 'Datos de cuenta' },
  { key: 'residence', label: 'Verificar residencia' },
]

export function RegisterScreen() {
  const navigate = useNavigate()
  const login = useUserStore((s) => s.login)
  const completeOnboarding = useUserStore((s) => s.completeOnboarding)

  const [step, setStep] = useState(0)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateAccount = () => {
    const newErrors: Record<string, string> = {}
    if (!name.trim()) newErrors.name = 'Ingresa tu nombre'
    if (!email.trim()) newErrors.email = 'Ingresa tu correo'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Correo no válido'
    if (!password) newErrors.password = 'Ingresa una contraseña'
    else if (password.length < 4) newErrors.password = 'Mínimo 4 caracteres'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateAccount()) return
    setStep(1)
  }

  const handleRegister = () => {
    const newUser = {
      name: name.trim(),
      initial: name.trim().charAt(0).toUpperCase(),
      conjunto: 'Reservas de Sabaneta',
      tower: 'Torre 3',
      rating: 0,
      orderCount: 0,
      serviceCount: 0,
    }

    login(newUser)
    completeOnboarding()
    navigate('/feed')
  }

  return (
    <PhoneShell>
      <div className="auth-wrap">
        <div className="auth-logo">
          Vecino<span className="plus">+</span>
        </div>
        <div className="auth-tag">Comunidad · Cercanía · Confianza</div>

        <div className="auth-steps">
          {steps.map((s, i) => (
            <div key={s.key} className={`auth-step ${i === step ? 'active' : ''} ${i < step ? 'done' : ''}`}>
              <span className="auth-step-num">{i < step ? '✓' : i + 1}</span>
              <span className="auth-step-label">{s.label}</span>
            </div>
          ))}
        </div>

        {step === 0 && (
          <form className="auth-form" onSubmit={handleNext}>
            <div>
              <div className="field-label">Nombre completo</div>
              <div className="input-with-icon">
                <IconUser />
                <input
                  className="field-input auth-input"
                  placeholder="Tu nombre"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              {errors.name && <span className="field-error">{errors.name}</span>}
            </div>
            <div>
              <div className="field-label">Correo electrónico</div>
              <div className="input-with-icon">
                <IconMail />
                <input
                  className="field-input auth-input"
                  placeholder="tu@correo.com"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {errors.email && <span className="field-error">{errors.email}</span>}
            </div>
            <div>
              <div className="field-label">Contraseña</div>
              <div className="input-with-icon">
                <IconLock />
                <input
                  className="field-input auth-input"
                  placeholder="Mínimo 4 caracteres"
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="eye-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <IconEyeOff /> : <IconEye />}
                </button>
              </div>
              {errors.password && <span className="field-error">{errors.password}</span>}
            </div>
            <button className="cta-btn" type="submit">
              Continuar
              <IconArrowRight />
            </button>
          </form>
        )}

        {step === 1 && (
          <div className="auth-form">
            <p className="auth-sub" style={{ marginTop: 0 }}>
              Verifica tu residencia para conectar con tus vecinos.
            </p>
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
            <button className="cta-btn" onClick={handleRegister}>
              Crear cuenta y verificar
              <IconArrowRight />
            </button>
            <p className="onb-trust">
              Te enviaremos un código a tu administración
              <br />o pediremos validación de un vecino verificado.
            </p>
          </div>
        )}

        <p className="auth-footer">
          ¿Ya tienes cuenta? <Link to="/login">Inicia sesión</Link>
        </p>
      </div>
    </PhoneShell>
  )
}
