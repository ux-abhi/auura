'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { fadeUp, fadeIn, stagger } from '@/lib/animations'

export default function Preorder() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] })
  const imgY = useTransform(scrollYProgress, [0, 1], ['5%', '-5%'])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim()) return
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (data.success) { setSubmitted(true) }
      else { setError(data.error || 'Something went wrong. Please try again.') }
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="preorder"
      data-section="preorder"
      ref={sectionRef}
      className="relative bg-white py-[160px] px-6 overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, #f5f5f7 0%, transparent 100%)' }}
      />

      <div className="relative mx-auto" style={{ maxWidth: 560 }}>
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-col items-center text-center"
        >
          {/* Pendant image with parallax */}
          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.94 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
            }}
            className="mb-12 relative w-[180px] md:w-[220px]"
          >
            <motion.div
              style={{
                y: imgY,
                aspectRatio: '2/3',
                boxShadow: '0 24px 64px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.06)',
              }}
              className="relative w-full overflow-hidden rounded-[24px]"
            >
              <Image
                src="/images/pendant-worn-dramatic.jpg"
                alt="aurra pendant worn around the neck with dramatic lighting"
                fill
                className="object-cover"
                sizes="220px"
              />
            </motion.div>
          </motion.div>

          {/* Label */}
          <motion.p variants={fadeIn} className="text-[11px] tracking-[0.18em] uppercase text-aurra-mid mb-5 font-body">
            Join the waitlist
          </motion.p>

          {/* Price */}
          <motion.div variants={fadeUp} className="flex items-baseline justify-center gap-3 mb-2">
            <span className="font-display font-normal text-aurra-dark leading-none" style={{ fontSize: 'clamp(60px, 10vw, 88px)' }}>
              €299
            </span>
            <span className="font-display text-[26px] text-aurra-mid" style={{ textDecoration: 'line-through' }}>
              €399
            </span>
          </motion.div>

          <motion.p variants={fadeIn} className="text-[14px] text-aurra-mid mb-10 font-body">
            Early access price · Limited to 500 units
          </motion.p>

          {/* Form or success */}
          <motion.div variants={fadeUp} className="w-full max-w-[440px]">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 12, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="py-8 flex flex-col items-center gap-3"
              >
                <div className="w-10 h-10 rounded-full border border-aurra-light flex items-center justify-center mb-2">
                  <svg width="16" height="13" viewBox="0 0 16 13" fill="none">
                    <path d="M1 6.5L5.5 11L15 1" stroke="#1d1d1f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="font-display text-[20px] font-normal text-aurra-dark">You&apos;re on the list.</p>
                <p className="text-[14px] text-aurra-mid font-body">We&apos;ll reach out before anyone else when aurra launches.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex w-full">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="preorder-input flex-1 h-12 border border-aurra-light border-r-0 text-[15px] font-body text-aurra-dark bg-white px-4 focus:border-aurra-dark focus:outline-none transition-colors duration-200 placeholder:text-aurra-light"
                />
                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ backgroundColor: '#000000' }}
                  whileTap={{ scale: 0.97 }}
                  className="h-12 px-6 bg-aurra-dark text-white text-[14px] tracking-[0.06em] font-body border border-aurra-dark transition-colors duration-200 disabled:opacity-60 whitespace-nowrap cursor-pointer"
                >
                  {loading ? '...' : 'Join waitlist'}
                </motion.button>
              </form>
            )}
            {error && <p className="mt-2 text-[13px] text-aurra-mid font-body">{error}</p>}
          </motion.div>

          {/* Trust row */}
          <motion.div variants={fadeIn} className="mt-6 flex items-center gap-4 flex-wrap justify-center">
            {['Free to join', 'No payment now', 'Launch notification'].map((item, i) => (
              <span key={item} className="flex items-center gap-4">
                <span className="text-[12px] text-aurra-mid font-body">{item}</span>
                {i < 2 && <span className="w-px h-3 bg-aurra-light inline-block" />}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
