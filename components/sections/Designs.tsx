'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'

const DESIGNS = [
  {
    id: 'midnight',
    name: 'Midnight',
    tagline: 'Pure obsidian glass, brushed steel.',
    persona: 'The Minimalist',
    src: '/images/pendant-hero.jpg',
    alt: 'Aurra Midnight pendant — obsidian glass and brushed stainless steel on clean background',
  },
  {
    id: 'butterfly',
    name: 'Butterfly',
    tagline: 'Bold form. Quiet intelligence.',
    persona: 'The Expressive',
    src: '/images/pendant-butterfly.jpg',
    alt: 'Aurra Butterfly pendant — sculptural wings in black gloss with silver trim',
  },
  {
    id: 'aurora',
    name: 'Aurora',
    tagline: 'Light-shifting labradorite resin.',
    persona: 'The Dreamer',
    src: '/images/pendant-crystal-aurora.jpg',
    alt: 'Aurra Aurora pendant — iridescent blue-purple crystal form wrapped in silver wire',
  },
  {
    id: 'obsidian',
    name: 'Obsidian',
    tagline: 'Deep iridescence, wrapped dark.',
    persona: 'The Grounded',
    src: '/images/pendant-crystal-obsidian.jpg',
    alt: 'Aurra Obsidian pendant — dark labradorite crystal with black wire wrap',
  },
]

export default function Designs() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selected, setSelected] = useState<string>('midnight')

  const selectedDesign = DESIGNS.find((d) => d.id === selected)

  return (
    <section id="designs" data-section="designs" className="bg-aurra-off py-[120px] px-6">
      <div ref={ref} className="mx-auto" style={{ maxWidth: 980 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <p className="text-[11px] tracking-[0.18em] uppercase text-aurra-mid mb-4 font-body">
            Collections
          </p>
          <h2
            className="font-display font-normal text-aurra-dark leading-[1.08] mb-4"
            style={{ fontSize: 'clamp(34px, 5vw, 56px)' }}
          >
            One intelligence.
            <br />
            Four expressions.
          </h2>
          <p className="text-[16px] text-aurra-mid font-body max-w-[440px] mx-auto leading-[1.6]">
            The same BCI core. A design for every identity.
          </p>
        </motion.div>

        {/* 4-card grid */}
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10"
        >
          {DESIGNS.map((design) => {
            const isSelected = selected === design.id
            return (
              <motion.button
                key={design.id}
                variants={{
                  hidden: { opacity: 0, y: 28, scale: 0.97 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                onClick={() => setSelected(design.id)}
                className="group text-left w-full bg-white rounded-card overflow-hidden transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-aurra-dark"
                style={{
                  border: isSelected ? '1.5px solid #1d1d1f' : '1px solid #e8e8ed',
                  boxShadow: isSelected
                    ? '0 8px 32px rgba(0,0,0,0.1)'
                    : '0 2px 8px rgba(0,0,0,0.03)',
                }}
              >
                {/* Image */}
                <div
                  className="relative w-full overflow-hidden bg-aurra-off"
                  style={{ aspectRatio: '3/4' }}
                >
                  <Image
                    src={design.src}
                    alt={design.alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 240px"
                  />
                  {/* Selection badge */}
                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute top-3 right-3 w-5 h-5 rounded-full bg-aurra-dark flex items-center justify-center"
                    >
                      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                        <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </motion.div>
                  )}
                </div>

                {/* Info bar */}
                <div className="p-4">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <span className="font-display text-[18px] font-normal text-aurra-dark leading-tight">
                      {design.name}
                    </span>
                    <span
                      className="text-[10px] tracking-[0.1em] uppercase text-aurra-mid font-body mt-1 shrink-0"
                      style={{
                        border: '1px solid #e8e8ed',
                        padding: '2px 7px',
                        borderRadius: 4,
                      }}
                    >
                      {design.persona}
                    </span>
                  </div>
                  <p className="text-[13px] text-aurra-mid font-body leading-snug">
                    {design.tagline}
                  </p>
                </div>
              </motion.button>
            )
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          className="flex flex-col items-center gap-3"
        >
          <motion.button
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => {
              const el = document.getElementById('preorder')
              if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 52, behavior: 'smooth' })
            }}
            className="bg-aurra-dark text-white font-body text-[14px] tracking-[0.06em] hover:bg-black transition-colors duration-200 cursor-pointer"
            style={{ height: 48, paddingLeft: 32, paddingRight: 32 }}
          >
            Reserve {selectedDesign ? `the ${selectedDesign.name}` : 'yours'} — €299
          </motion.button>
          <p className="text-[12px] text-aurra-mid font-body">
            Free cancellation · Ships Q4 2026
          </p>
        </motion.div>
      </div>
    </section>
  )
}
