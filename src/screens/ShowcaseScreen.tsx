import { Link } from 'react-router-dom'
import { ThemeToggle } from '../components/ThemeToggle'
import { LoginScreen } from './LoginScreen'
import { RegisterScreen } from './RegisterScreen'
import { FeedScreen } from './FeedScreen'
import { ServiceDetailScreen } from './ServiceDetailScreen'
import { CreateScreen } from './CreateScreen'
import { BusinessScreen } from './BusinessScreen'
import { SocialScreen } from './SocialScreen'
import { ProfileScreen } from './ProfileScreen'
import { MessagesScreen } from './MessagesScreen'
import { ChatScreen } from './ChatScreen'

const screens = [
  { num: '01', title: 'Login', path: '/login', component: <LoginScreen /> },
  { num: '02', title: 'Registro + Verificación', path: '/registro', component: <RegisterScreen /> },
  { num: '03', title: 'Feed principal', path: '/feed', component: <FeedScreen /> },
  { num: '04', title: 'Detalle de servicio', path: '/servicio/almuerzos-carolina', component: <ServiceDetailScreen /> },
  { num: '05', title: 'Publicar servicio', path: '/publicar', component: <CreateScreen /> },
  { num: '06', title: 'Comercio verificado', path: '/comercio', component: <BusinessScreen /> },
  { num: '07', title: 'Comunidad social', path: '/social', component: <SocialScreen /> },
  { num: '08', title: 'Perfil de usuario', path: '/perfil', component: <ProfileScreen /> },
  { num: '09', title: 'Mensajes', path: '/mensajes', component: <MessagesScreen /> },
  { num: '10', title: 'Chat individual', path: '/chat/conv-carolina', component: <ChatScreen /> },
]

export function ShowcaseScreen() {
  return (
    <div className="page-wrap">
      <div className="brand-header">
        <div>
          <h1>
            Vecino<em>+</em>
          </h1>
          <p>Prototipo funcional de alta complejidad para el Diplomado · 10 pantallas · Tech &amp; comunidad</p>
        </div>
        <ThemeToggle />
      </div>

      <div className="screens-grid">
        {screens.map((s) => (
          <div className="screen-card" key={s.num}>
            <div className="screen-label">
              <h3>{s.title}</h3>
              <span className="num">{s.num} / 10</span>
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
