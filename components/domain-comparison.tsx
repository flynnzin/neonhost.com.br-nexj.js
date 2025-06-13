"use client"

import { useState, useEffect } from "react"
import { Globe } from "lucide-react"

export function DomainComparison() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  // Exemplos de domínios e IPs
  const examples = [
    { ip: "45.146.81.246:30120", domain: "cidadenative.neonhost.com.br" },
    { ip: "45.146.81.281:30120", domain: "roleplay.neonhost.com.br" },
    { ip: "45.146.81.213:30120", domain: "hydrarp.neonhost.com.br" },
    { ip: "45.146.81.230:30120", domain: "neoncity.neonhost.com.br" },
  ]

  // Avançar slides automaticamente, a menos que esteja em hover
  useEffect(() => {
    if (isHovering) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % examples.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isHovering, examples.length])

  return (
    <div
      className="bg-[#111827] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="p-4 bg-[#1f2937] text-center text-gray-400 text-sm flex items-center justify-center gap-2">
        <span className="inline-block w-2 h-2 bg-red-500 rounded-full"></span>
        <span>Antes:</span>
      </div>
      <div className="p-6 text-center font-mono text-lg text-gray-300 h-[60px] flex items-center justify-center">
        {examples[currentSlide].ip}
      </div>

      <div className="p-4 bg-gradient-to-r from-purple-900/50 to-pink-900/50 text-center text-purple-300 text-sm flex items-center justify-center gap-2">
        <Globe className="h-4 w-4" />
        <span>Depois:</span>
      </div>
      <div className="p-6 text-center font-mono text-lg bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent h-[60px] flex items-center justify-center">
        {examples[currentSlide].domain}
      </div>

      {/* Indicadores de slide */}
      <div className="flex justify-center gap-2 p-4">
        {examples.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              currentSlide === index ? "bg-purple-500 w-4" : "bg-gray-600"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>

      <div className="text-center text-xs text-gray-500 pb-4">Alterne para ver mais exemplos</div>
    </div>
  )
}
