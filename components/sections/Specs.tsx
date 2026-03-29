'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { fadeUp, fadeIn, stagger, scaleIn } from '@/lib/animations'

const SPECS = [
  { key: 'Form factor', value: '35 × 25 × 8 mm pendant' },
  { key: 'Casing', value: 'Brushed stainless steel + glass' },
  { key: 'Sensors', value: 'PPG · EDA · IMU · Mic' },
  { key: 'Processor', value: 'ARM Cortex-M33 @ 64 MHz' },
  { key: 'Wireless', value: 'BLE 5.2' },
  { key: 'Battery', value: '7 days · Qi wireless charging' },
  { key: 'Water resistance', value: 'IPX5' },
  { key: 'Weight', value: '18 g' },
  { key: 'Storage', value: '90 days local history' },
  { key: 'Compatibility', value: 'iOS 16+ · Android 12+' },
]

export default function Specs() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="specs" data-section="specs" className="bg-aurra-off py-[120px] px-6">
      <div
        ref={ref}
        className="mx-auto grid grid-cols-1 lg:grid-cols-[55%_45%] gap-16 lg:gap-12 items-start"
        style={{ maxWidth: 980 }}
      >
        {/* Left: Spec table */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <motion.p
            variants={fadeIn}
            className="text-[11px] tracking-[0.18em] uppercase text-aurra-mid mb-4 font-body"
          >
            Technical
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display font-light text-aurra-dark leading-[1.1] mb-10"
            style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
          >
            Every detail
            <br />
            considered.
          </motion.h2>

          <motion.div
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }}
          >
            {SPECS.map((spec, i) => (
              <motion.div
                key={spec.key}
                variants={fadeUp}
                className="flex items-baseline justify-between gap-4 py-[14px]"
                style={{
                  borderBottom: i < SPECS.length - 1 ? '1px solid #e8e8ed' : 'none',
                }}
              >
                <span className="text-[13px] text-aurra-mid shrink-0 font-body">{spec.key}</span>
                <span className="font-display text-[17px] font-normal text-aurra-dark text-right">
                  {spec.value}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: pendant-angles.jpg */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="flex flex-col items-center lg:items-start gap-6"
        >
          {/* 4-angle product image */}
          <div
            className="relative w-full overflow-hidden rounded-card"
            style={{
              aspectRatio: '4/3',
              boxShadow: '0 16px 48px rgba(0,0,0,0.07), 0 2px 8px rgba(0,0,0,0.04)',
            }}
          >
            <Image
              src="/images/pendant-angles.jpg"
              alt="Aurra pendant shown from four different angles on a linen surface"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 440px"
            />
          </div>

          {/* Privacy badge */}
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-3 border border-aurra-light bg-white w-full"
            style={{ padding: '10px 16px' }}
          >
            <span
              className="inline-block w-[6px] h-[6px] rounded-full flex-shrink-0"
              style={{
                background: '#34c759',
                animation: 'pulse-dot 2s ease-in-out infinite',
              }}
            />
            <span className="text-[13px] text-aurra-dark font-body">
              Raw biometrics never leave the pendant
            </span>
          </motion.div>

          {/* Supporting mini-stats */}
          <div className="grid grid-cols-2 gap-3 w-full">
            {[
              { value: '7 days', label: 'Battery life' },
              { value: '18 g', label: 'Total weight' },
              { value: '400 KB', label: 'ML model size' },
              { value: 'IPX5', label: 'Water resistant' },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeIn}
                className="text-center p-4 border border-aurra-light bg-white rounded-[12px]"
              >
                <div className="font-display text-[20px] font-light text-aurra-dark leading-none">
                  {stat.value}
                </div>
                <div className="text-[11px] tracking-[0.1em] uppercase text-aurra-mid mt-1 font-body">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
