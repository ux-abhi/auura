'use client'

import { motion } from 'framer-motion'

interface ScienceCardProps {
  title: string
  body: string
  tag: string
}

export default function ScienceCard({ title, body, tag }: ScienceCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: '0 16px 48px rgba(0,0,0,0.09)', borderColor: '#1d1d1f' }}
      className="border border-aurra-light rounded-card p-8 bg-white cursor-default"
      style={{ transition: 'border-color 0.3s cubic-bezier(0.22,1,0.36,1)' }}
    >
      <h3 className="font-display text-[20px] font-normal text-aurra-dark mb-3 leading-snug">{title}</h3>
      <p className="font-body text-[14px] text-aurra-mid leading-[1.7] mb-5">{body}</p>
      <span
        className="inline-block text-[10px] tracking-[0.12em] uppercase text-aurra-mid border border-aurra-light font-body"
        style={{ padding: '3px 8px' }}
      >
        {tag}
      </span>
    </motion.div>
  )
}
