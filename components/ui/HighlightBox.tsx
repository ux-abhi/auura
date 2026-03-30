interface HighlightBoxProps {
  children: React.ReactNode
  variant?: 'default' | 'dark'
  className?: string
}

export default function HighlightBox({ children, variant = 'default', className = '' }: HighlightBoxProps) {
  const isDark = variant === 'dark'
  return (
    <div
      className={`font-body text-[15px] leading-[1.8] ${className}`}
      style={{
        background: isDark ? '#1d1d1f' : '#f5f5f7',
        borderLeft: `3px solid ${isDark ? 'rgba(255,255,255,0.3)' : '#1d1d1f'}`,
        padding: '24px 28px',
        margin: '32px 0',
        color: isDark ? 'rgba(255,255,255,0.85)' : '#1d1d1f',
      }}
    >
      {children}
    </div>
  )
}
