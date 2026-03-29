'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { fadeUp } from '@/lib/animations'

const IMAGES = [
  {
    src: '/images/pendant-worn-dramatic.jpg',
    alt: 'aurra pendant worn with dramatic lighting, blue and orange ambient glow',
    flex: '0.75',
  },
  {
    src: '/images/pendant-hero.jpg',
    alt: 'aurra pendant on clean off-white background, full chain visible',
    flex: '1',
    featured: true,
  },
  {
    src: '/images/lifestyle-sofa.jpg',
    alt: 'Person wearing aurra pendant relaxing on sofa, room lighting responding to mood',
    flex: '0.75',
  },
]

export default function Gallery() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="bg-white py-20 px-6">
      <div className="mx-auto" style={{ maxWidth: 980 }}>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.11, delayChildren: 0.04 } },
          }}
          className="flex gap-3 items-end"
        >
          {IMAGES.map((img, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 28, scale: 0.97 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] } },
              }}
              className="relative overflow-hidden rounded-[12px] group"
              style={{ flex: img.flex, aspectRatio: '3/4' }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                sizes="(max-width: 768px) 90vw, 320px"
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ delay: 0.45 }}
          className="mt-6 flex items-center justify-center gap-3"
        >
          <div className="w-8 h-px bg-aurra-light" />
          <p className="text-[13px] text-aurra-mid tracking-[0.06em] font-body">aurra. Worn every day.</p>
          <div className="w-8 h-px bg-aurra-light" />
        </motion.div>
      </div>
    </section>
  )
}
