"use client"

import { useEffect, useRef } from "react"

interface NeonGlowEffectProps {
  color?: string
  size?: number
  opacity?: number
  blur?: number
  className?: string
}

export function NeonGlowEffect({
  color = "#a855f7",
  size = 300,
  opacity = 0.15,
  blur = 100,
  className = "",
}: NeonGlowEffectProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Configurar tamanho do canvas
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    // Criar efeito de brilho
    const drawGlow = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Criar gradiente radial
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        size,
      )

      gradient.addColorStop(0, `${color}`)
      gradient.addColorStop(1, "transparent")

      ctx.globalAlpha = opacity
      ctx.filter = `blur(${blur}px)`
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }

    drawGlow()

    // Animar o brilho
    let animationFrame: number
    let scale = 1
    let growing = true

    const animate = () => {
      if (growing) {
        scale += 0.005
        if (scale >= 1.2) growing = false
      } else {
        scale -= 0.005
        if (scale <= 0.8) growing = true
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.save()
      ctx.translate(canvas.width / 2, canvas.height / 2)
      ctx.scale(scale, scale)
      ctx.translate(-canvas.width / 2, -canvas.height / 2)

      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        size,
      )

      gradient.addColorStop(0, `${color}`)
      gradient.addColorStop(1, "transparent")

      ctx.globalAlpha = opacity
      ctx.filter = `blur(${blur}px)`
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.restore()

      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrame)
    }
  }, [color, size, opacity, blur])

  return <canvas ref={canvasRef} className={`absolute inset-0 z-0 pointer-events-none ${className}`} />
}
