import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { PhoneShell } from '../components/PhoneShell'
import { useUserStore } from '../stores'
import { currentUser as mockUser } from '../data/mock'
import { IconMail, IconLock, IconEye, IconEyeOff, IconArrowRight } from '../components/icons'

export function LoginScreen() {
  const navigate = useNavigate()
  const login = useUserStore((s) => s.login)
  const completeOnboarding = useUserStore((s) => s.completeOnboarding)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validate = () => {
    const newErrors: Record<string, string> = {}
    if (!email.trim()) newErrors.email = 'Ingresa tu correo'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Correo no válido'
    if (!password) newErrors.password = 'Ingresa tu contraseña'
    else if (password.length < 4) newErrors.password = 'Mínimo 4 caracteres'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    login(mockUser)
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
        <h2 className="auth-headline">
          Bienvenido de vuelta,
          <br />
          <em>vecino</em>
        </h2>
        <p className="auth-sub">
          Ingresa a tu cuenta para ver los servicios de tu conjunto.
        </p>
        <form className="auth-form" onSubmit={handleLogin}>
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
                placeholder="Tu contraseña"
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
            Iniciar sesión
            <IconArrowRight />
          </button>
        </form>
        <p className="auth-footer">
          ¿No tienes cuenta? <Link to="/registro">Regístrate aquí</Link>
        </p>
      </div>
    </PhoneShell>
  )
}
