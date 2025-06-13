"use client"

import { useEffect, useRef } from "react"
import { Shield, ZapOff } from "lucide-react"

export function AnimatedDdosProtection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Configurar o canvas para ser responsivo
    const resizeCanvas = () => {
      const parent = canvas.parentElement
      if (!parent) return

      canvas.width = parent.clientWidth
      canvas.height = 200

      // Limpar o canvas quando redimensionar
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Configurações da animação
    const gridSize = 20
    const gridWidth = Math.ceil(canvas.width / gridSize)
    const gridHeight = Math.ceil(canvas.height / gridSize)

    // Linha de proteção
    const protectionLineX = canvas.width * 0.8

    // Partículas de ataque
    const attacks: { x: number; y: number; speed: number; size: number; active: boolean }[] = []

    // Criar ataques iniciais
    for (let i = 0; i < 15; i++) {
      attacks.push({
        x: Math.random() * (protectionLineX - 50),
        y: Math.random() * canvas.height,
        speed: 0.5 + Math.random() * 2,
        size: 3 + Math.random() * 5,
        active: Math.random() > 0.5,
      })
    }

    // Partículas de escudo
    const shields: { x: number; y: number; size: number; opacity: number }[] = []

    // Criar escudos ao longo da linha de proteção
    for (let y = 0; y < canvas.height; y += 20) {
      shields.push({
        x: protectionLineX,
        y,
        size: 2 + Math.random() * 3,
        opacity: 0.3 + Math.random() * 0.7,
      })
    }

    // Função para desenhar a grade
    const drawGrid = () => {
      ctx.strokeStyle = "rgba(255, 255, 255, 0.05)"
      ctx.lineWidth = 1

      // Linhas horizontais
      for (let y = 0; y < gridHeight; y++) {
        ctx.beginPath()
        ctx.moveTo(0, y * gridSize)
        ctx.lineTo(canvas.width, y * gridSize)
        ctx.stroke()
      }

      // Linhas verticais
      for (let x = 0; x < gridWidth; x++) {
        ctx.beginPath()
        ctx.moveTo(x * gridSize, 0)
        ctx.lineTo(x * gridSize, canvas.height)
        ctx.stroke()
      }
    }

    // Função para desenhar a linha de proteção
    const drawProtectionLine = () => {
      // Gradiente para a linha
      const gradient = ctx.createLinearGradient(protectionLineX, 0, protectionLineX + 5, 0)
      gradient.addColorStop(0, "rgba(120, 80, 255, 0.8)")
      gradient.addColorStop(1, "rgba(120, 80, 255, 0.2)")

      ctx.fillStyle = gradient
      ctx.fillRect(protectionLineX, 0, 2, canvas.height)

      // Pulso ao longo da linha
      const time = Date.now() / 1000
      const pulseY = (Math.sin(time * 2) * 0.5 + 0.5) * canvas.height

      ctx.fillStyle = "rgba(180, 120, 255, 0.8)"
      ctx.beginPath()
      ctx.arc(protectionLineX, pulseY, 4, 0, Math.PI * 2)
      ctx.fill()
    }

    // Função para atualizar e desenhar os ataques
    const updateAttacks = () => {
      attacks.forEach((attack) => {
        if (!attack.active) {
          // Reativar ataques inativos aleatoriamente
          if (Math.random() < 0.02) {
            attack.active = true
            attack.x = Math.random() * 50 // Começar da esquerda
            attack.y = Math.random() * canvas.height
          }
          return
        }

        // Mover o ataque
        attack.x += attack.speed

        // Verificar colisão com a linha de proteção
        if (attack.x >= protectionLineX - attack.size) {
          // Criar efeito de colisão
          ctx.fillStyle = "rgba(255, 100, 100, 0.8)"
          ctx.beginPath()
          ctx.arc(attack.x, attack.y, attack.size * 2, 0, Math.PI * 2)
          ctx.fill()

          // Desativar o ataque
          attack.active = false

          // Efeito de pulso no escudo mais próximo
          const nearestShield = shields.reduce((nearest, shield) => {
            const distCurrent = Math.abs(shield.y - attack.y)
            const distNearest = Math.abs(nearest.y - attack.y)
            return distCurrent < distNearest ? shield : nearest
          }, shields[0])

          nearestShield.opacity = 1
          nearestShield.size *= 1.5

          return
        }

        // Desenhar o ataque
        const gradient = ctx.createRadialGradient(attack.x, attack.y, 0, attack.x, attack.y, attack.size)
        gradient.addColorStop(0, "rgba(255, 80, 80, 0.8)")
        gradient.addColorStop(1, "rgba(255, 80, 80, 0)")

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(attack.x, attack.y, attack.size, 0, Math.PI * 2)
        ctx.fill()

        // Rastro do ataque
        ctx.strokeStyle = "rgba(255, 80, 80, 0.3)"
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(attack.x - attack.speed * 5, attack.y)
        ctx.lineTo(attack.x, attack.y)
        ctx.stroke()
      })
    }

    // Função para atualizar e desenhar os escudos
    const updateShields = () => {
      shields.forEach((shield) => {
        // Diminuir o tamanho e opacidade gradualmente
        if (shield.size > 2 + Math.random() * 3) {
          shield.size *= 0.95
        }

        if (shield.opacity > 0.3 + Math.random() * 0.7) {
          shield.opacity *= 0.95
        }

        // Desenhar o escudo
        ctx.fillStyle = `rgba(120, 80, 255, ${shield.opacity})`
        ctx.beginPath()
        ctx.arc(shield.x, shield.y, shield.size, 0, Math.PI * 2)
        ctx.fill()
      })
    }

    // Função de animação principal
    const animate = () => {
      // Limpar o canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Desenhar elementos
      drawGrid()
      drawProtectionLine()
      updateShields()
      updateAttacks()

      // Continuar a animação
      requestAnimationFrame(animate)
    }

    // Iniciar a animação
    animate()

    // Limpeza ao desmontar
    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <div className="relative w-full h-[200px] bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10">
      <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
        <Shield className="h-5 w-5 text-purple-400" />
        <span className="text-sm font-medium text-white">Proteção DDoS em tempo real</span>
      </div>

      <div className="absolute bottom-3 right-3 z-10 flex items-center gap-2 bg-black/30 px-3 py-1 rounded-full">
        <ZapOff className="h-4 w-4 text-red-400" />
        <span className="text-xs font-medium text-white">Ataques bloqueados</span>
      </div>

      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}
