import { useTheme } from '../lib/theme'

export function ThemeToggle() {
  const { theme, toggle } = useTheme()
  return (
    <button className="theme-toggle" onClick={toggle}>
      <span className="dot" />
      {theme === 'light' ? 'Modo claro' : 'Modo noche'}
    </button>
  )
}
