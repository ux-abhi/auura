'use client'

interface AnchorLink {
  label: string
  href: string
}

interface AnchorNavProps {
  links: AnchorLink[]
}

export default function AnchorNav({ links }: AnchorNavProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' })
    }
  }

  return (
    <nav
      className="sticky bg-white/90 backdrop-blur-sm z-30 py-3 border-b border-aurra-light/60"
      style={{ top: 52 }}
    >
      <div className="flex flex-wrap gap-2 mx-auto px-6" style={{ maxWidth: 720 }}>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => handleClick(e, link.href)}
            className="font-body text-[12px] tracking-[0.08em] text-aurra-mid border border-aurra-light hover:bg-aurra-off hover:text-aurra-dark transition-colors duration-200 cursor-pointer"
            style={{ padding: '4px 12px', borderRadius: 999 }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  )
}
