export default function Footer() {
  return (
    <footer className="bg-white" style={{ borderTop: '1px solid #e8e8ed', padding: '32px 2.8rem' }}>
      <div className="mx-auto flex flex-col gap-5" style={{ maxWidth: 980 }}>
        {/* Top row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-display text-[18px] font-normal text-aurra-dark">aurra</span>

          <nav className="flex items-center gap-5 flex-wrap justify-center">
            {[
              { label: 'About', href: '/about' },
              { label: 'Privacy', href: '/privacy' },
              { label: 'Terms', href: '/terms' },
              { label: 'Contact', href: 'mailto:shubhrasar7@gmail.com' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[12px] text-aurra-mid hover:text-aurra-dark transition-colors duration-200 font-body link-underline"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <p className="text-[12px] text-aurra-mid font-body">© 2026 aurra. All rights reserved.</p>
        </div>

        {/* Bottom attribution row */}
        <p className="text-center text-[11px] text-aurra-mid font-body" style={{ opacity: 0.6 }}>
          A product by Shubhradip Sar & Abhishek Jha · +49-15510834863
        </p>
      </div>
    </footer>
  )
}
