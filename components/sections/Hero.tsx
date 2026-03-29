'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { wordStagger, wordReveal, fadeIn, fadeUp } from '@/lib/animations'

const HEADLINE_LINE1 = ['Your', 'home', 'feels']
const HEADLINE_LINE2 = ['what', 'you', 'feel.']

function PendantImage() {
  return (
    <div className="relative flex items-center justify-center w-[240px] md:w-[340px] mx-auto">
      {/* Floating wrapper */}
      <div className="animate-float pendant-glow relative w-full">
        <div className="relative w-full aspect-[3/4] rounded-[24px] overflow-hidden">
          <Image
            src="/images/pendant-hero.jpg"
            alt="Aurra BCI pendant — brushed stainless steel with glass face"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 240px, 340px"
          />
        </div>

        {/* Callout dots — HRV · EDA (left) */}
        <div className="absolute left-0 top-[38%] -translate-y-1/2 -translate-x-[calc(100%+10px)] hidden sm:flex items-center gap-2">
          <div className="text-right">
            <div className="text-[10px] tracking-[0.12em] uppercase text-aurra-mid leading-tight whitespace-nowrap font-body">
              HRV · EDA
            </div>
          </div>
          <div className="w-8 h-px bg-aurra-light" />
          <div className="w-1.5 h-1.5 rounded-full bg-aurra-dark flex-shrink-0" />
        </div>

        {/* Callout dots — TinyML (right) */}
        <div className="absolute right-0 top-[30%] -translate-y-1/2 translate-x-[calc(100%+10px)] hidden sm:flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-aurra-dark flex-shrink-0" />
          <div className="w-8 h-px bg-aurra-light" />
          <div className="text-left">
            <div className="text-[10px] tracking-[0.12em] uppercase text-aurra-mid leading-tight whitespace-nowrap font-body">
              TinyML
            </div>
          </div>
        </div>

        {/* Callout dots — BLE 5.2 (right) */}
        <div className="absolute right-0 top-[55%] -translate-y-1/2 translate-x-[calc(100%+10px)] hidden sm:flex items-center gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-aurra-dark flex-shrink-0" />
          <div className="w-8 h-px bg-aurra-light" />
          <div className="text-left">
            <div className="text-[10px] tracking-[0.12em] uppercase text-aurra-mid leading-tight whitespace-nowrap font-body">
              BLE 5.2
            </div>
          </div>
        </div>

        {/* Callout dots — 7-day (left) */}
        <div className="absolute left-0 top-[65%] -translate-y-1/2 -translate-x-[calc(100%+10px)] hidden sm:flex items-center gap-2">
          <div className="text-right">
            <div className="text-[10px] tracking-[0.12em] uppercase text-aurra-mid leading-tight whitespace-nowrap font-body">
              7-day
            </div>
          </div>
          <div className="w-8 h-px bg-aurra-light" />
          <div className="w-1.5 h-1.5 rounded-full bg-aurra-dark flex-shrink-0" />
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-[52px] overflow-hidden bg-white">
      {/* Subtle radial gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 90% 70% at 50% 30%, #f5f5f7 0%, transparent 65%)',
        }}
      />

      <div
        className="relative flex flex-col items-center text-center px-6 w-full mx-auto"
        style={{ maxWidth: 980 }}
      >
        {/* Eyebrow */}
        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="text-[12px] tracking-[0.18em] uppercase text-aurra-mid mb-8 font-body"
        >
          BCI Wearable · aurra.io
        </motion.p>

        {/* Headline */}
        <motion.h1
          variants={wordStagger}
          initial="hidden"
          animate="visible"
          className="font-display font-light leading-[1.05] text-aurra-dark mb-6"
          style={{ fontSize: 'clamp(42px, 8vw, 80px)' }}
        >
          <span className="block">
            {HEADLINE_LINE1.map((word, i) => (
              <motion.span
                key={i}
                variants={wordReveal}
                className={`inline-block mr-[0.22em] ${word === 'feels' ? 'italic' : ''}`}
              >
                {word}
              </motion.span>
            ))}
          </span>
          <span className="block">
            {HEADLINE_LINE2.map((word, i) => (
              <motion.span
                key={i}
                variants={wordReveal}
                className="inline-block mr-[0.22em]"
              >
                {word}
              </motion.span>
            ))}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
          className="text-[19px] text-aurra-mid leading-[1.6] mb-10 max-w-[520px] font-body"
        >
          A jewellery-form BCI pendant that reads your emotional state and shifts
          your home&apos;s light — without a single tap.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-5 mb-20"
        >
          <button
            onClick={() => {
              const el = document.getElementById('preorder')
              if (el)
                window.scrollTo({
                  top: el.getBoundingClientRect().top + window.scrollY - 52,
                  behavior: 'smooth',
                })
            }}
            className="flex items-center justify-center bg-aurra-dark text-white text-[15px] tracking-[0.02em] hover:bg-black transition-colors duration-200 font-body"
            style={{ height: 44, paddingLeft: 24, paddingRight: 24 }}
          >
            Reserve yours
          </button>
          <button
            onClick={() => {
              const el = document.getElementById('how-it-works')
              if (el)
                window.scrollTo({
                  top: el.getBoundingClientRect().top + window.scrollY - 52,
                  behavior: 'smooth',
                })
            }}
            className="text-[15px] text-aurra-mid hover:text-aurra-dark transition-colors duration-200 link-underline font-body"
          >
            See how it works ↓
          </button>
        </motion.div>

        {/* Pendant image */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.9, duration: 0.8 }}
          className="w-full flex justify-center px-12 sm:px-24"
        >
          <PendantImage />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-8 bg-aurra-light overflow-hidden relative">
          <div
            className="absolute inset-0 bg-aurra-mid origin-top"
            style={{ animation: 'scroll-line 1.5s ease-in-out infinite' }}
          />
        </div>
        <span className="text-[11px] tracking-[0.14em] uppercase text-aurra-mid font-body">
          Scroll
        </span>
      </motion.div>
    </section>
  )
}
