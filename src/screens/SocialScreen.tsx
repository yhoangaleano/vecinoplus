import { PhoneShellWithNav } from '../components/PhoneShell'
import { BottomNav } from '../components/BottomNav'
import { groups } from '../data/mock'

const iconByType: Record<string, JSX.Element> = {
  running: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 4v16M5 12h16" />
    </svg>
  ),
  cycling: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="14" r="4" />
      <circle cx="18" cy="14" r="4" />
      <path d="M6 10l3-7h6l3 7" />
    </svg>
  ),
  family: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 22c1.5-3 3.5-3 6-3s4.5 0 6 3M9 12a4 4 0 100-8 4 4 0 000 8z" />
    </svg>
  )
}

export function SocialScreen() {
  return (
    <PhoneShellWithNav bottomNav={<BottomNav activeKey="social" />}>
      <div className="social-body">
        <h2 className="social-title">
          Comunidad,
          <br />
          más allá del <em>citófono</em>
        </h2>
        <p className="social-sub">Encuentra grupos de tu conjunto que comparten tus mismos intereses.</p>
        <div className="social-list">
          {groups.map((group) => (
            <button key={group.id} className="group-card">
              <div className={`group-icon icon-${group.iconColor}`}>{iconByType[group.iconType]}</div>
              <div className="group-info">
                <div className="group-name">{group.name}</div>
                <div className="group-meta">
                  {group.members} miembros · {group.schedule}
                </div>
              </div>
              <div className="group-arrow">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </div>
            </button>
          ))}
        </div>
        <div className="event-card">
          <div className="event-tag">Próximo evento</div>
          <div className="event-title">
            Mercado de <em>vecinos</em>
            <br />
            en el salón social
          </div>
          <div className="event-meta">
            <span>Sábado 18, 9 AM</span>
            <span>·</span>
            <span>21 confirmados</span>
          </div>
        </div>
      </div>
    </PhoneShellWithNav>
  )
}
