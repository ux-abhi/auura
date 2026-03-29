'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { fadeUp, fadeIn, stagger, scaleIn } from '@/lib/animations'

const STEPS = [
  {
    number: '01',
    title: 'Sense',
    description:
      'PPG, EDA, IMU and microphone sensors read your physiological state from the sternum continuously.',
  },
  {
    number: '02',
    title: 'Infer',
    description:
      'A compressed TinyML model fuses all signals into a single emotional state — entirely on-device.',
  },
  {
    number: '03',
    title: 'Map',
    description:
      'Your state is plotted on the Russell circumplex: valence and arousal. Updated every 30 seconds.',
  },
  {
    number: '04',
    title: 'Act',
    description:
      'Aurra proposes a lighting change via a gentle haptic. You accept by doing nothing. Override anytime.',
  },
]

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="how-it-works"
      data-section="how-it-works"
      className="bg-aurra-off py-[120px] px-6"
    >
      <div className="mx-auto" style={{ maxWidth: 980 }}>
        {/* Header */}
        <motion.div
          ref={ref}
          variants={stagger}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="text-center mb-16"
        >
          <motion.p
            variants={fadeIn}
            className="text-[11px] tracking-[0.18em] uppercase text-aurra-mid mb-4 font-body"
          >
            The process
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display font-light text-aurra-dark leading-[1.1]"
            style={{ fontSize: 'clamp(36px, 5vw, 52px)' }}
          >
            Four steps. Entirely invisible.
          </motion.h2>
        </motion.div>

        {/* Two-column layout: steps + lifestyle image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Steps */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="flex flex-col gap-0 relative"
          >
            {/* Vertical connector line */}
            <div
              className="absolute left-6 top-6 bottom-6 w-px bg-aurra-light"
              style={{ zIndex: 0 }}
            />

            {STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                variants={fadeUp}
                className="flex gap-6 relative"
                style={{ paddingBottom: i < STEPS.length - 1 ? 36 : 0 }}
              >
                {/* Circle */}
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-full bg-white border border-aurra-light flex items-center justify-center z-10"
                >
                  <span className="font-display text-[16px] text-aurra-dark font-normal">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="pt-2">
                  <h3 className="font-display text-[22px] font-normal text-aurra-dark leading-snug mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[15px] text-aurra-mid leading-[1.65] max-w-[300px] font-body">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right: Lifestyle image */}
          <motion.div
            variants={scaleIn}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="relative"
          >
            <div
              className="relative w-full overflow-hidden rounded-card"
              style={{
                aspectRatio: '3/4',
                boxShadow: '0 20px 60px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.04)',
              }}
            >
              <Image
                src="/images/lifestyle-sofa.jpg"
                alt="Person wearing Aurra pendant while relaxing at home with ambient lighting responding to mood"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 490px"
              />
              {/* Subtle overlay gradient at bottom */}
              <div
                className="absolute inset-x-0 bottom-0 h-32 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 100%)',
                }}
              />
              {/* Caption overlay */}
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-[12px] tracking-[0.1em] uppercase text-white/80 font-body">
                  Aurra detects stress. The room responds.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
