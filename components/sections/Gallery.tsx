'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { fadeUp, fadeIn } from '@/lib/animations'

const IMAGES = [
  {
    src: '/images/pendant-worn-dramatic.jpg',
    alt: 'Aurra pendant worn around the neck with dramatic blue and orange lighting',
    aspect: '3/4',
    className: 'flex-[0.75]',
  },
  {
    src: '/images/pendant-hero.jpg',
    alt: 'Aurra pendant on a clean off-white background showing the full design',
    aspect: '2/3',
    className: 'flex-1',
    featured: true,
  },
  {
    src: '/images/lifestyle-sofa.jpg',
    alt: 'Person relaxing on sofa wearing Aurra pendant, ambient lighting shifting around them',
    aspect: '3/4',
    className: 'flex-[0.75]',
  },
]

export default function Gallery() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="bg-white py-20 px-6">
      <div className="mx-auto" style={{ maxWidth: 980 }}>
        {/* Image strip */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
          }}
          className="flex gap-3 items-end"
        >
          {IMAGES.map((img, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 24, scale: 0.98 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                },
              }}
              className={`relative overflow-hidden rounded-[12px] group ${img.className} ${
                img.featured ? 'self-stretch' : ''
              }`}
              style={{
                aspectRatio: img.aspect,
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 90vw, 320px"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Caption */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ delay: 0.4 }}
          className="mt-6 flex items-center justify-center gap-3"
        >
          <div className="w-8 h-px bg-aurra-light" />
          <p className="text-[13px] text-aurra-mid tracking-[0.06em] font-body">
            Aurra. Worn every day.
          </p>
          <div className="w-8 h-px bg-aurra-light" />
        </motion.div>
      </div>
    </section>
  )
}
