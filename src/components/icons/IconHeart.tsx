export function IconHeart({ filled = false }: { filled?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21s-7-4.5-9.5-9.5S5 4 8 4s4 2 4 2 1-2 4-2 5.5 2.5 5.5 7.5S12 21 12 21z" />
    </svg>
  )
}
