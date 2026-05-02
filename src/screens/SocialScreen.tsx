import { PhoneShellWithNav } from '../components/PhoneShell'
import { BottomNav } from '../components/BottomNav'
import { groups } from '../data/mock'
import {
  IconArrowRight,
  IconRunning,
  IconCycling,
  IconFamily,
} from '../components/icons'

const iconByType: Record<string, JSX.Element> = {
  running: <IconRunning />,
  cycling: <IconCycling />,
  family: <IconFamily />,
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
                <IconArrowRight />
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
