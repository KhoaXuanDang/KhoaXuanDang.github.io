import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
  /** Animate horizontally instead of the default upward slide */
  x?: number
  y?: number
}

const EASE = [0.4, 0, 0.2, 1] as const

const Reveal = ({ children, delay = 0, className, x = 0, y = 28 }: RevealProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}

export default Reveal
