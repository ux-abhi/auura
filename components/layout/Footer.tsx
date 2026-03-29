export default function Footer() {
  return (
    <footer className="bg-white" style={{ borderTop: '1px solid #e8e8ed', padding: '32px 2.8rem' }}>
      <div className="mx-auto flex flex-col sm:flex-row items-center justify-between gap-4" style={{ maxWidth: 980 }}>
        <span className="font-display text-[18px] font-normal text-aurra-dark">aurra</span>

        <nav className="flex items-center gap-5 flex-wrap justify-center">
          {[
            { label: 'Privacy', href: '#' },
            { label: 'Terms', href: '#' },
            { label: 'Contact', href: '#' },
            { label: 'GitHub', href: 'https://github.com', target: '_blank' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.target}
              rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
              className="text-[12px] text-aurra-mid hover:text-aurra-dark transition-colors duration-200 font-body link-underline"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="text-[12px] text-aurra-mid font-body">© 2026 aurra. All rights reserved.</p>
      </div>
    </footer>
  )
}
