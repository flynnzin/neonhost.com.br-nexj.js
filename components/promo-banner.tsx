"use client"

import { X } from "lucide-react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export const PromoBanner = () => {
  const [isVisible, setIsVisible] = useState(true)


  const handleClose = () => {
    setIsVisible(false)
    localStorage.setItem("promoBannerClosed", "true")
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-600 via-violet-600 to-purple-700 text-white"
        >
          <div className="relative flex items-center justify-center px-4 py-2">
            <div className="flex items-center gap-2 text-center">
              <span className="text-xs sm:text-sm font-medium">
                🔥 Utilize o cupom <span className="font-bold bg-white/20 px-2 py-0.5 rounded">NEON15</span> e tenha{" "}
                <span className="font-bold">15% de desconto</span> no primeiro mês em qualquer plano!
              </span>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
