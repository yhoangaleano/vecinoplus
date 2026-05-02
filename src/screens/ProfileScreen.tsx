import { PhoneShellWithNav } from '../components/PhoneShell'
import { BottomNav } from '../components/BottomNav'
import { Topbar } from '../components/Topbar'
import { useUserStore } from '../stores'
import { currentUser as mockUser } from '../data/mock'
import {
  IconSettings,
  IconLocation,
  IconUser,
  IconGrid,
  IconPayments,
  IconStarPremium,
  IconArrowRight,
} from '../components/icons'

export function ProfileScreen() {
  const storeUser = useUserStore((s) => s.user)
  const logout = useUserStore((s) => s.logout)
  const user = storeUser ?? mockUser

  return (
    <PhoneShellWithNav bottomNav={<BottomNav activeKey="me" />}>
      <Topbar
        title="Perfil"
        rightAction={
          <button className="icon-btn" onClick={logout}>
            <IconSettings />
          </button>
        }
      />
      <div className="profile-hero">
        <div className="profile-avatar">{user.initial}</div>
        <div className="profile-name">{user.name}</div>
        <div className="profile-loc">
          <IconLocation />
          {user.conjunto} · {user.tower}
        </div>
      </div>
      <div className="profile-stats-row">
        <div className="profile-stat">
          <div className="profile-stat-num">
            <em>{user.rating}</em>
          </div>
          <div className="profile-stat-label">Rating</div>
        </div>
        <div className="profile-divider" />
        <div className="profile-stat">
          <div className="profile-stat-num">{user.orderCount}</div>
          <div className="profile-stat-label">Pedidos</div>
        </div>
        <div className="profile-divider" />
        <div className="profile-stat">
          <div className="profile-stat-num">{user.serviceCount}</div>
          <div className="profile-stat-label">Servicios</div>
        </div>
      </div>
      <div className="profile-list">
        <div className="menu-section-label">Cuenta</div>
        <button className="menu-item">
          <IconUser />
          Mi información
          <IconArrowRight />
        </button>
        <button className="menu-item">
          <IconGrid />
          Mis servicios publicados
          <IconArrowRight />
        </button>
        <button className="menu-item">
          <IconPayments />
          Pagos e historial
          <IconArrowRight />
        </button>
        <div className="menu-section-label">Vecino+ Premium</div>
        <button className="menu-item premium">
          <IconStarPremium />
          Hazte Premium · $40k/mes
          <IconArrowRight />
        </button>
      </div>
    </PhoneShellWithNav>
  )
}
