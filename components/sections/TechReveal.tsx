'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'

const CHIPS = ['ARM Cortex-M33', '400KB TinyML', 'BLE 5.2', 'PPG + EDA + IMU']

export default function TechReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="bg-aurra-dark py-[120px] px-6 overflow-hidden">
      <div
        ref={ref}
        className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        style={{ maxWidth: 980 }}
      >
        {/* Left: copy */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[11px] tracking-[0.18em] uppercase text-aurra-mid mb-5 font-body">
            Inside aurra
          </p>
          <h2
            className="font-display font-normal text-white leading-[1.08] mb-6"
            style={{ fontSize: 'clamp(34px, 5vw, 52px)' }}
          >
            18 grams.
            <br />
            <em className="italic">Infinite intelligence.</em>
          </h2>
          <p className="text-[16px] text-white/60 leading-[1.7] mb-10 font-body max-w-[380px]">
            A full biometric lab compressed into jewellery. Medical-grade sensors.
            On-device AI. Zero cloud dependency. No compromises on sensing or style.
          </p>

          {/* Tech chips */}
          <div className="flex flex-wrap gap-2">
            {CHIPS.map((chip, i) => (
              <motion.span
                key={chip}
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.3 + i * 0.07,
                }}
                className="inline-block text-[11px] tracking-[0.1em] uppercase text-white/60 font-body rounded-full"
                style={{
                  border: '1px solid rgba(255,255,255,0.15)',
                  padding: '5px 12px',
                }}
              >
                {chip}
              </motion.span>
            ))}
          </div>

          {/* Separator line */}
          <div className="mt-10 w-12 h-px bg-white/20" />
          <p className="mt-4 text-[13px] text-white/40 font-body">
            All inference runs locally. Your biometrics never leave the pendant.
          </p>
        </motion.div>

        {/* Right: two transparent pendant images */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="flex items-end justify-center gap-6"
        >
          {/* Oval transparent — tilted left */}
          <motion.div
            initial={{ rotate: 0 }}
            animate={isInView ? { rotate: -4 } : {}}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative flex-1 max-w-[180px]"
            style={{ aspectRatio: '2/3' }}
          >
            <div
              className="relative w-full h-full rounded-[20px] overflow-hidden"
              style={{
                boxShadow: '0 0 60px rgba(255,255,255,0.04), 0 20px 48px rgba(0,0,0,0.5)',
              }}
            >
              <Image
                src="/images/pendant-transparent.jpg"
                alt="Aurra pendant cross-section showing circuit board, PPG sensor, BLE chip and battery"
                fill
                className="object-cover"
                sizes="180px"
              />
            </div>
          </motion.div>

          {/* Crystal tech — tilted right, slightly larger */}
          <motion.div
            initial={{ rotate: 0 }}
            animate={isInView ? { rotate: 3 } : {}}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
            className="relative flex-1 max-w-[200px]"
            style={{ aspectRatio: '2/3' }}
          >
            <div
              className="relative w-full h-full rounded-[20px] overflow-hidden"
              style={{
                boxShadow: '0 0 80px rgba(59,130,246,0.08), 0 20px 48px rgba(0,0,0,0.5)',
              }}
            >
              <Image
                src="/images/pendant-crystal-tech.jpg"
                alt="Aurra crystal pendant showing transparent body with embedded processor and blue indicator LED"
                fill
                className="object-cover"
                sizes="200px"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
