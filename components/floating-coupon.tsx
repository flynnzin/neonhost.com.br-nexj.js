"use client"

import { useState, useEffect } from "react"
import { X, Copy, Check, Gift, Sparkles } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function FloatingCoupon() {
  const [isVisible, setIsVisible] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    // Mostrar o cupom após 5 segundos
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  const copyCoupon = async () => {
    await navigator.clipboard.writeText("15OFF2025")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 400, opacity: 0 }}
          className="fixed bottom-6 right-6 z-50 max-w-sm"
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-1 rounded-2xl shadow-2xl">
            <div className="bg-[#0a0a0e] rounded-2xl p-6 relative overflow-hidden">
              {/* Background decorativo */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-xl"></div>

              <button
                onClick={() => setIsVisible(false)}
                className="absolute top-3 right-3 p-1 hover:bg-white/10 rounded-full transition-colors"
              >
                <X className="h-4 w-4 text-gray-400" />
              </button>

              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg">
                  <Gift className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-bold text-white">Oferta Especial!</h3>
                  <p className="text-xs text-gray-400">Apenas para você</p>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Sparkles className="h-4 w-4 text-yellow-400" />
                  <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                    15% OFF
                  </span>
                </div>
                <p className="text-sm text-gray-300">Em todos os VPS Gamer</p>
              </div>

              <div className="flex items-center space-x-2 p-3 bg-white/5 rounded-lg border border-white/10 mb-4">
                <div className="flex-1">
                  <div className="text-xs text-gray-400">Código</div>
                  <div className="font-mono font-bold text-white">15OFF2025</div>
                </div>
                <button
                  onClick={copyCoupon}
                  className={`p-2 rounded-lg transition-colors ${
                    copied
                      ? "bg-green-500/20 text-green-400"
                      : "bg-purple-500/20 text-purple-400 hover:bg-purple-500/30"
                  }`}
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
