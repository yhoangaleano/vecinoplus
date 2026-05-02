import { PhoneShellWithNav } from '../components/PhoneShell'
import { BottomNav } from '../components/BottomNav'
import { Topbar } from '../components/Topbar'
import { currentUser } from '../data/mock'

export function ProfileScreen() {
  return (
    <PhoneShellWithNav bottomNav={<BottomNav activeKey="me" />}>
      <Topbar
        title="Perfil"
        rightAction={
          <button className="icon-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06a1.65 1.65 0 001.82.33h0a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82v0a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
            </svg>
          </button>
        }
      />
      <div className="profile-hero">
        <div className="profile-avatar">{currentUser.initial}</div>
        <div className="profile-name">{currentUser.name}</div>
        <div className="profile-loc">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          {currentUser.conjunto} · {currentUser.tower}
        </div>
      </div>
      <div className="profile-stats-row">
        <div className="profile-stat">
          <div className="profile-stat-num">
            <em>{currentUser.rating}</em>
          </div>
          <div className="profile-stat-label">Rating</div>
        </div>
        <div className="profile-divider" />
        <div className="profile-stat">
          <div className="profile-stat-num">{currentUser.orderCount}</div>
          <div className="profile-stat-label">Pedidos</div>
        </div>
        <div className="profile-divider" />
        <div className="profile-stat">
          <div className="profile-stat-num">{currentUser.serviceCount}</div>
          <div className="profile-stat-label">Servicios</div>
        </div>
      </div>
      <div className="profile-list">
        <div className="menu-section-label">Cuenta</div>
        <button className="menu-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
          Mi información
          <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
        <button className="menu-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M3 9h18M9 21V9" />
          </svg>
          Mis servicios publicados
          <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
        <button className="menu-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M19 14l-7 7-7-7M19 8l-7 7-7-7" />
          </svg>
          Pagos e historial
          <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
        <div className="menu-section-label">Vecino+ Premium</div>
        <button className="menu-item premium">
          <svg className="starr" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />
          </svg>
          Hazte Premium · $40k/mes
          <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="16" height="16">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
    </PhoneShellWithNav>
  )
}
