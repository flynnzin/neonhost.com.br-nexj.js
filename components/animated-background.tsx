"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export default function AnimatedBackground() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const glowVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: [0.05, 0.08, 0.05],
      transition: {
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  if (!mounted) return null

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0a0a0e]"></div>

      {/* Primary glow elements - more subtle */}
      <motion.div
        className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[#7e22ce] blur-[180px] opacity-5"
        variants={glowVariants}
        initial="hidden"
        animate="visible"
      />
      <motion.div
        className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-[#ff3e9d] blur-[180px] opacity-5"
        variants={glowVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 2 }}
      />

      {/* Secondary subtle glow elements */}
      <motion.div
        className="absolute top-[40%] right-[5%] w-[40%] h-[40%] rounded-full bg-[#9553ff] blur-[150px] opacity-3"
        variants={glowVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 3 }}
      />
      <motion.div
        className="absolute bottom-[30%] left-[10%] w-[30%] h-[30%] rounded-full bg-[#ff3e9d] blur-[120px] opacity-3"
        variants={glowVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1 }}
      />
    </div>
  )
}
