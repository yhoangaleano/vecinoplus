import { ReactNode } from 'react'

interface PhoneShellProps {
  children: ReactNode
}

export function PhoneShell({ children }: PhoneShellProps) {
  return (
    <div className="phone">
      <StatusBar />
      <div className="phone-content">{children}</div>
    </div>
  )
}

interface PhoneShellWithNavProps {
  children: ReactNode
  bottomNav: ReactNode
}

export function PhoneShellWithNav({ children, bottomNav }: PhoneShellWithNavProps) {
  return (
    <div className="phone">
      <StatusBar />
      <div className="phone-content" style={{ paddingBottom: 64 }}>
        {children}
      </div>
      {bottomNav}
    </div>
  )
}

function StatusBar() {
  return (
    <div className="phone-status">
      <span>9:41</span>
      <div className="right">
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M2 22h20V2L2 22z" />
        </svg>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M2 8h20v8H2z" />
        </svg>
      </div>
    </div>
  )
}
