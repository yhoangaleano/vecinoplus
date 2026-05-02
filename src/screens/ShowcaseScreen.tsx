import { Link } from 'react-router-dom'
import { ThemeToggle } from '../components/ThemeToggle'
import { OnboardingScreen } from './OnboardingScreen'
import { FeedScreen } from './FeedScreen'
import { ServiceDetailScreen } from './ServiceDetailScreen'
import { CreateScreen } from './CreateScreen'
import { BusinessScreen } from './BusinessScreen'
import { SocialScreen } from './SocialScreen'
import { ProfileScreen } from './ProfileScreen'

const screens = [
  { num: '01', title: 'Onboarding · Verificación', path: '/onboarding', component: <OnboardingScreen /> },
  { num: '02', title: 'Feed principal', path: '/feed', component: <FeedScreen /> },
  { num: '03', title: 'Detalle de servicio', path: '/servicio/almuerzos-carolina', component: <ServiceDetailScreen /> },
  { num: '04', title: 'Publicar servicio', path: '/publicar', component: <CreateScreen /> },
  { num: '05', title: 'Comercio verificado', path: '/comercio', component: <BusinessScreen /> },
  { num: '06', title: 'Comunidad social', path: '/social', component: <SocialScreen /> },
  { num: '07', title: 'Perfil de usuario', path: '/perfil', component: <ProfileScreen /> }
]

export function ShowcaseScreen() {
  return (
    <div className="page-wrap">
      <div className="brand-header">
        <div>
          <h1>
            Vecino<em>+</em>
          </h1>
          <p>Prototipo funcional de alta complejidad para el Diplomado · 7 pantallas · Tech &amp; comunidad</p>
        </div>
        <ThemeToggle />
      </div>

      <div className="screens-grid">
        {screens.map((s) => (
          <div className="screen-card" key={s.num}>
            <div className="screen-label">
              <h3>{s.title}</h3>
              <span className="num">{s.num} / 07</span>
            </div>
            <Link to={s.path} className="phone-link">
              {s.component}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
