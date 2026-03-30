interface Stat {
  value: string
  label: string
}

interface StatStripProps {
  stats: Stat[]
  className?: string
}

export default function StatStrip({ stats, className = '' }: StatStripProps) {
  return (
    <div className={`grid grid-cols-2 sm:grid-cols-3 gap-8 ${className}`}>
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col">
          <span
            className="font-display text-aurra-dark leading-none"
            style={{ fontSize: 'clamp(48px, 7vw, 80px)', fontWeight: 300 }}
          >
            {stat.value}
          </span>
          <span className="font-body text-[13px] text-aurra-mid mt-2 leading-snug">{stat.label}</span>
        </div>
      ))}
    </div>
  )
}
