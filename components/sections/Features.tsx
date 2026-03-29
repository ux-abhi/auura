'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { fadeUp, fadeIn, cardStagger, scaleIn } from '@/lib/animations'

function IconHRV() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" strokeWidth="1.5" stroke="#1d1d1f">
      <polyline points="2,14 6,14 8,8 10,20 12,11 14,16 16,14 26,14" />
    </svg>
  )
}
function IconEDA() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" strokeWidth="1.5" stroke="#1d1d1f">
      <path d="M4 22 Q8 10 14 14 Q20 18 24 6" />
      <circle cx="14" cy="14" r="2" />
    </svg>
  )
}
function IconChip() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" strokeWidth="1.5" stroke="#1d1d1f">
      <rect x="9" y="9" width="10" height="10" rx="1" />
      <line x1="12" y1="9" x2="12" y2="6" /><line x1="16" y1="9" x2="16" y2="6" />
      <line x1="12" y1="19" x2="12" y2="22" /><line x1="16" y1="19" x2="16" y2="22" />
      <line x1="9" y1="12" x2="6" y2="12" /><line x1="9" y1="16" x2="6" y2="16" />
      <line x1="19" y1="12" x2="22" y2="12" /><line x1="19" y1="16" x2="22" y2="16" />
    </svg>
  )
}
function IconCircumplex() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" strokeWidth="1.5" stroke="#1d1d1f">
      <circle cx="14" cy="14" r="10" />
      <line x1="4" y1="14" x2="24" y2="14" />
      <line x1="14" y1="4" x2="14" y2="24" />
      <circle cx="18" cy="10" r="2" fill="#1d1d1f" strokeWidth="0" />
    </svg>
  )
}
function IconBluetooth() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" strokeWidth="1.5" stroke="#1d1d1f">
      <polyline points="10,8 18,16 14,20 14,8 18,12 10,20" />
      <path d="M8 10 Q4 14 8 18" />
      <path d="M20 10 Q24 14 20 18" />
    </svg>
  )
}
function IconPendant() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" strokeWidth="1.5" stroke="#1d1d1f">
      <ellipse cx="14" cy="16" rx="8" ry="10" />
      <ellipse cx="14" cy="16" rx="4" ry="6" />
      <circle cx="14" cy="16" r="1.5" fill="#1d1d1f" strokeWidth="0" />
      <line x1="14" y1="6" x2="14" y2="4" />
      <path d="M12 4 Q14 2 16 4" />
    </svg>
  )
}

const FEATURES = [
  {
    Icon: IconHRV,
    name: 'HRV Sensing',
    description: "Optical PPG at the sternum reads heart rate variability — your body's clearest stress signal.",
    tag: 'Cardiac',
  },
  {
    Icon: IconEDA,
    name: 'EDA Monitoring',
    description: 'Electrodermal activity tracks skin conductance changes that precede conscious emotion.',
    tag: 'Neural',
  },
  {
    Icon: IconChip,
    name: 'TinyML On-Device',
    description: 'A 400KB INT8 model runs inference locally. No cloud. No latency. No exposure.',
    tag: 'Privacy',
  },
  {
    Icon: IconCircumplex,
    name: 'Circumplex Mapping',
    description: 'Mood is plotted on valence × arousal axes. Continuous, contextual, never categorical.',
    tag: 'Affective AI',
  },
  {
    Icon: IconBluetooth,
    name: 'BLE Ecosystem',
    description: 'Connects to smart lights, companion app, and optional EEG earbud. Mood preset only — never raw data.',
    tag: 'Connectivity',
  },
  {
    Icon: IconPendant,
    name: 'Jewellery Form',
    description: 'Stainless steel and glass. 18g. Indistinguishable from a pendant necklace. Worn 24/7.',
    tag: 'Design',
  },
]

export default function Features() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="features" data-section="features" className="bg-white py-[120px] px-6">
      <div className="mx-auto" style={{ maxWidth: 980 }}>
        {/* Header */}
        <motion.div
          ref={ref}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.p variants={fadeIn} className="text-[11px] tracking-[0.18em] uppercase text-aurra-mid mb-4 font-body">
            What&apos;s inside
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display font-normal text-aurra-dark leading-[1.1]"
            style={{ fontSize: 'clamp(32px, 5vw, 48px)' }}
          >
            Engineered for the body.{' '}
            <em className="italic">Designed for the soul.</em>
          </motion.h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={cardStagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {FEATURES.map((feature) => (
            <motion.div
              key={feature.name}
              variants={scaleIn}
              whileHover={{ y: -5, boxShadow: '0 16px 48px rgba(0,0,0,0.09)', borderColor: '#1d1d1f' }}
              className="border border-aurra-light rounded-card p-8 bg-white cursor-default"
              style={{ transition: 'border-color 0.3s cubic-bezier(0.22,1,0.36,1)' }}
            >
              <feature.Icon />
              <h3 className="font-display text-[20px] font-normal text-aurra-dark mt-5 mb-2 leading-snug">
                {feature.name}
              </h3>
              <p className="text-[14px] text-aurra-mid leading-[1.65] mb-4 font-body">{feature.description}</p>
              <span
                className="inline-block text-[10px] tracking-[0.12em] uppercase text-aurra-mid border border-aurra-light font-body"
                style={{ padding: '3px 8px' }}
              >
                {feature.tag}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
