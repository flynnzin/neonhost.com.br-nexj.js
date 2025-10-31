"use client"

import { useState } from "react"
import { X, Sparkles } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function PromoBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="w-full bg-gradient-to-r from-purple-600 via-purple-500 to-pink-600 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>

          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-center gap-3 relative">
            <div className="flex items-center gap-3 flex-wrap justify-center">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-yellow-300 animate-pulse" />
                <p className="text-white font-semibold text-sm md:text-base text-center">
                  Abra seu servidor de FiveM com AMD Ryzen 9 9900X.{" "}
                  <span className="font-bold bg-white/20 px-2 py-0.5 rounded-md">
                    Use o cupom <span className="text-yellow-300">NEON15</span> para 15% OFF!
                  </span>
                </p>
                <Sparkles className="w-5 h-5 text-yellow-300 animate-pulse" />
              </div>
              <a
                href="/fivem"
                className="text-white font-bold text-sm underline hover:text-yellow-300 transition-colors decoration-2 underline-offset-2"
              >
                Comece agora mesmo →
              </a>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Fechar banner"
            >
              <X className="h-5 w-5 text-white" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
