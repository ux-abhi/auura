'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter, usePathname } from 'next/navigation'

const NAV_LINKS = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Features', href: '#features' },
  { label: 'Specs', href: '#specs' },
  { label: 'About', href: '/about' },
  { label: 'Pre-order', href: '#preorder' },
]

export default function Nav() {
  const router = useRouter()
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Only observe sections when on home page
  useEffect(() => {
    if (!isHome) return
    const sections = ['how-it-works', 'features', 'specs', 'preorder']
    const observers: IntersectionObserver[] = []
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      observer.observe(el)
      observers.push(observer)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [isHome])

  const handleNavClick = useCallback((href: string) => {
    setMobileOpen(false)
    if (href.startsWith('/')) {
      router.push(href)
    } else if (href.startsWith('#')) {
      if (isHome) {
        const id = href.replace('#', '')
        const el = document.getElementById(id)
        if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 52, behavior: 'smooth' })
      } else {
        // Navigate to home page with the hash — browser will scroll to section
        router.push(`/${href}`)
      }
    }
  }, [router, isHome])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 ${
          scrolled ? 'nav-frosted-scrolled border-aurra-light/80' : 'nav-frosted border-aurra-light/40'
        }`}
        style={{ height: 52 }}
      >
        <div className="flex items-center justify-between h-full px-6 mx-auto" style={{ maxWidth: 980 }}>
          {/* Logo */}
          <button
            onClick={() => isHome ? window.scrollTo({ top: 0, behavior: 'smooth' }) : router.push('/')}
            className="font-display text-[19px] font-normal tracking-[-0.01em] text-aurra-dark select-none hover:opacity-70 transition-opacity duration-200 cursor-pointer"
          >
            aurra
          </button>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((link) => {
              const id = link.href.replace('#', '')
              const isActive = isHome && activeSection === id
              const isCurrentPage = !link.href.startsWith('#') && pathname === link.href
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`text-[13px] tracking-[0.02em] transition-colors duration-200 link-underline cursor-pointer ${
                    isActive || isCurrentPage ? 'text-aurra-dark' : 'text-aurra-mid hover:text-aurra-dark'
                  }`}
                >
                  {link.label}
                </button>
              )
            })}
          </nav>

          {/* Reserve button + hamburger */}
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.02, backgroundColor: '#000000' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => handleNavClick('#preorder')}
              className="hidden md:flex items-center justify-center bg-aurra-dark text-white text-[13px] tracking-[0.03em] font-body transition-colors duration-200 cursor-pointer"
              style={{ height: 28, paddingLeft: 16, paddingRight: 16 }}
            >
              Reserve
            </motion.button>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex flex-col gap-[5px] w-6 h-6 items-center justify-center cursor-pointer"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={mobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="block w-5 h-px bg-aurra-dark"
              />
              <motion.span
                animate={mobileOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.2 }}
                className="block w-5 h-px bg-aurra-dark"
              />
              <motion.span
                animate={mobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="block w-5 h-px bg-aurra-dark"
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 mobile-menu-overlay bg-white/95 flex flex-col items-center justify-center"
          >
            <motion.nav
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
              }}
              className="flex flex-col items-center gap-8"
            >
              {NAV_LINKS.map((link) => (
                <motion.button
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
                  }}
                  onClick={() => handleNavClick(link.href)}
                  className="font-display text-[30px] font-normal text-aurra-dark tracking-[-0.01em] hover:opacity-60 transition-opacity duration-200 cursor-pointer"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
                }}
                onClick={() => handleNavClick('#preorder')}
                className="mt-4 bg-aurra-dark text-white text-[14px] tracking-[0.06em] px-8 py-3 hover:bg-black transition-colors duration-200 cursor-pointer"
              >
                Reserve — €299
              </motion.button>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
