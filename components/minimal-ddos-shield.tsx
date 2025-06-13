"use client"

import { useEffect, useRef, useState } from "react"
import { Shield, Activity, ZapOff } from 'lucide-react'

export function MinimalDdosShield() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [attacksBlocked, setAttacksBlocked] = useState(0)
  const attacksBlockedRef = useRef(0)

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
      canvas.height = 200 // Altura fixa para manter o design minimalista
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Configurações da visualização
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const shieldRadius = Math.min(centerX, centerY) * 0.5

    // Partículas
    const particles: {
      x: number
      y: number
      targetX: number
      targetY: number
      speed: number
      size: number
      color: string
      isAttack: boolean
      active: boolean
      blocked: boolean
      blockAnimation: number
    }[] = []

    // Criar partículas
    const createParticle = (isAttack: boolean) => {
      // Ângulo aleatório para a posição inicial
      const angle = Math.random() * Math.PI * 2
      const distance = canvas.width * 0.7

      // Posição inicial na borda da tela
      const startX = centerX + Math.cos(angle) * distance
      const startY = centerY + Math.sin(angle) * distance

      // Destino: para ataques, um ponto aleatório dentro do escudo
      // Para tráfego legítimo, um ponto do outro lado da tela
      let targetX, targetY

      if (isAttack) {
        // Ataques miram dentro do escudo
        const targetAngle = Math.random() * Math.PI * 2
        const targetDistance = Math.random() * shieldRadius * 0.7
        targetX = centerX + Math.cos(targetAngle) * targetDistance
        targetY = centerY + Math.sin(targetAngle) * targetDistance
      } else {
        // Tráfego legítimo atravessa para o outro lado
        const targetAngle = angle + Math.PI + (Math.random() * 0.5 - 0.25) // Ligeira variação
        const targetDistance = canvas.width * 0.7
        targetX = centerX + Math.cos(targetAngle) * targetDistance
        targetY = centerY + Math.sin(targetAngle) * targetDistance
      }

      particles.push({
        x: startX,
        y: startY,
        targetX,
        targetY,
        speed: 0.5 + Math.random() * (isAttack ? 1.5 : 1),
        size: 3,
        color: isAttack ? "#ff3030" : "#30ff30",
        isAttack,
        active: true,
        blocked: false,
        blockAnimation: 0,
      })
    }

    // Criar partículas periodicamente
    const attackInterval = setInterval(() => {
      const isAttack = Math.random() < 0.7 // 70% de chance de ser um ataque
      createParticle(isAttack)
    }, 500)

    // Função para desenhar o escudo
    const drawShield = () => {
      // Desenhar o círculo de escudo principal
      ctx.strokeStyle = "rgba(120, 80, 255, 0.6)"
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.arc(centerX, centerY, shieldRadius, 0, Math.PI * 2)
      ctx.stroke()

      // Desenhar um segundo contorno mais fino
      ctx.strokeStyle = "rgba(120, 80, 255, 0.3)"
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.arc(centerX, centerY, shieldRadius + 3, 0, Math.PI * 2)
      ctx.stroke()
    }

    // Função para atualizar e desenhar as partículas
    const updateParticles = () => {
      particles.forEach((particle) => {
        if (!particle.active) return

        // Calcular direção para o alvo
        const dx = particle.targetX - particle.x
        const dy = particle.targetY - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        // Mover a partícula
        if (distance > particle.speed) {
          particle.x += (dx / distance) * particle.speed
          particle.y += (dy / distance) * particle.speed

          // Verificar se a partícula atingiu o escudo
          const distanceToCenter = Math.sqrt(Math.pow(particle.x - centerX, 2) + Math.pow(particle.y - centerY, 2))

          if (distanceToCenter <= shieldRadius && particle.isAttack && !particle.blocked) {
            // Ataque bloqueado pelo escudo
            particle.blocked = true
            particle.blockAnimation = 1
            attacksBlockedRef.current++
            setAttacksBlocked(attacksBlockedRef.current)
            particle.active = false
          }
        } else {
          // Chegou ao destino
          particle.active = false
        }

        // Desenhar a partícula
        if (particle.blocked) {
          // Animação de bloqueio (simples)
          if (particle.blockAnimation > 0) {
            ctx.fillStyle = `rgba(255, 48, 48, ${particle.blockAnimation})`
            ctx.beginPath()
            ctx.arc(particle.x, particle.y, particle.size * 2 * (1 - particle.blockAnimation), 0, Math.PI * 2)
            ctx.fill()
            particle.blockAnimation -= 0.05
          }
        } else if (particle.active) {
          // Desenhar a partícula ativa
          ctx.fillStyle = particle.color
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
          ctx.fill()
        }
      })

      // Limpar partículas inativas
      for (let i = particles.length - 1; i >= 0; i--) {
        if (!particles[i].active && (!particles[i].blocked || particles[i].blockAnimation <= 0)) {
          particles.splice(i, 1)
        }
      }
    }

    // Função de animação principal
    const animate = () => {
      // Limpar o canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Desenhar elementos
      drawShield()
      updateParticles()

      // Continuar a animação
      requestAnimationFrame(animate)
    }

    // Iniciar a animação
    requestAnimationFrame(animate)

    // Limpeza ao desmontar
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      clearInterval(attackInterval)
    }
  }, [])

  return (
    <div className="relative w-full rounded-xl overflow-hidden border border-white/10 bg-black/40">
      <div className="absolute top-0 left-0 w-full p-3 flex justify-between items-center z-10">
        <div className="flex items-center gap-2">
          <Shield className="h-5 w-5 text-purple-400" />
          <span className="text-sm font-medium text-white">Proteção DDoS Avançada</span>
        </div>
        <div className="flex items-center gap-2">
          <Activity className="h-4 w-4 text-green-400 animate-pulse" />
          <span className="text-xs font-medium text-white">Escudo Ativo</span>
        </div>
      </div>

      <canvas ref={canvasRef} className="w-full h-[200px]" />

      <div className="absolute bottom-0 left-0 w-full p-3 flex justify-between items-center z-10">
        <div className="flex items-center gap-2">
          <ZapOff className="h-4 w-4 text-red-400" />
          <span className="text-xs font-medium text-white">{attacksBlocked} Ataques Bloqueados</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-green-400">Tráfego Legítimo</span>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-red-400">Ataques DDoS</span>
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
          </div>
        </div>
      </div>
    </div>
  )
}
