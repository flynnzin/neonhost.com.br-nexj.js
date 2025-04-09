"use client"

import type React from "react"

import { motion, AnimatePresence } from "framer-motion"
import { ArrowUp, ArrowDown, Activity, Shield, CheckCircle2, AlertTriangle } from "lucide-react"
import { useEffect, useState, useRef } from "react"

export default function ProtectionDashboard() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [attackCount, setAttackCount] = useState(447)
  const [previousCount, setPreviousCount] = useState(447)
  const [countDirection, setCountDirection] = useState<"up" | "down" | null>(null)
  const [activeAttack, setActiveAttack] = useState(false)
  const [trafficLevel, setTrafficLevel] = useState(65)
  const [currentTime, setCurrentTime] = useState("")
  const [attackEvents, setAttackEvents] = useState([
    { time: "08:42", type: "UDP Flood", severity: "high", blocked: true },
    { time: "12:15", type: "SYN Flood", severity: "medium", blocked: true },
    { time: "14:37", type: "HTTP Flood", severity: "low", blocked: true },
    { time: "18:03", type: "ICMP Flood", severity: "high", blocked: true },
    { time: "22:51", type: "DNS Amplification", severity: "critical", blocked: true },
  ])

  // Limite de tráfego (80%)
  const TRAFFIC_LIMIT = 80

  // Dados para o gráfico de linha
  const [trafficData, setTrafficData] = useState(() => {
    // Verificar se já existem dados no localStorage
    try {
      const savedData = localStorage.getItem("globalTrafficData")
      if (savedData) {
        return JSON.parse(savedData)
      }
    } catch (e) {
      console.error("Erro ao carregar dados do tráfego:", e)
    }

    // Se não existir ou houver erro, gerar dados iniciais
    const initialData = []
    for (let i = 0; i < 24; i++) {
      // Manter os valores iniciais abaixo do limite (entre 20-70%)
      initialData.push({
        time: i,
        value: 20 + Math.random() * 50,
      })
    }

    // Salvar no localStorage para compartilhar entre usuários
    try {
      localStorage.setItem("globalTrafficData", JSON.stringify(initialData))
    } catch (e) {
      console.error("Erro ao salvar dados do tráfego:", e)
    }

    return initialData
  })

  // Sincronizar o trafficLevel inicial com o último valor do trafficData
  useEffect(() => {
    if (trafficData.length > 0) {
      const lastPoint = trafficData[trafficData.length - 1]
      setTrafficLevel(Math.round(lastPoint.value))
    }
  }, [])

  // Adicionar um efeito para sincronizar dados entre abas/janelas
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "globalTrafficData") {
        try {
          const newData = JSON.parse(e.newValue || "null")
          if (newData) {
            setTrafficData(newData)
            // Atualizar o trafficLevel com o último valor do gráfico
            if (newData.length > 0) {
              setTrafficLevel(Math.round(newData[newData.length - 1].value))
            }
          }
        } catch (err) {
          console.error("Erro ao processar dados do localStorage:", err)
        }
      }
    }
  
    window.addEventListener("storage", handleStorageChange)
  
    return () => {
      window.removeEventListener("storage", handleStorageChange)
    }
  }, [])
  

  // Referência para o canvas do gráfico
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const chartContainerRef = useRef<HTMLDivElement>(null)
  const [chartDimensions, setChartDimensions] = useState({ width: 0, height: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [hoverPoint, setHoverPoint] = useState<{ x: number; y: number; value: number } | null>(null)

  // Função para atualizar o horário atual
  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hours = now.getHours().toString().padStart(2, "0")
      const minutes = now.getMinutes().toString().padStart(2, "0")
      const seconds = now.getSeconds().toString().padStart(2, "0")
      setCurrentTime(`${hours}:${minutes}:${seconds}`)
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  // Função para simular mudanças na contagem de ataques e tráfego
  const simulateChanges = () => {
    const interval = setInterval(() => {
      // Atualizar contagem de ataques
      setPreviousCount(attackCount)
      const change = Math.floor(Math.random() * 20) - 10 // Número aleatório entre -10 e 10

      setAttackCount((prev) => {
        const newCount = Math.max(0, prev + change) // Evita números negativos
        setCountDirection(newCount > prev ? "up" : newCount < prev ? "down" : null)
        return newCount
      })

      // Atualizar dados do gráfico
      setTrafficData((prevData) => {
        const newData = [...prevData]
        // Remover o primeiro ponto e adicionar um novo no final
        newData.shift()

        // Calcular o novo valor baseado no último valor para suavidade
        const lastValue = newData[newData.length - 1].value

        // Tendência para baixo se estiver perto do limite
        let tendency = 0
        if (lastValue > TRAFFIC_LIMIT - 10) {
          tendency = -3 // Tendência para baixo quando está perto do limite
        } else if (lastValue < 30) {
          tendency = 3 // Tendência para cima quando está muito baixo
        }

        // Novo valor com variação suave (±5% do último valor) e tendência
        let newValue = lastValue + (Math.random() * 10 - 5) + tendency

        // Limitar entre 10 e o limite (normalmente)
        newValue = Math.max(10, Math.min(TRAFFIC_LIMIT - 5, newValue))

        // Raramente (1% de chance) criar um pico acima do limite
        if (Math.random() > 0.99) {
          newValue = TRAFFIC_LIMIT + Math.random() * 15 // Pico entre 80% e 95%

          // Adicionar um novo evento de ataque quando o tráfego ultrapassa o limite
          const now = new Date()
          const hours = now.getHours().toString().padStart(2, "0")
          const minutes = now.getMinutes().toString().padStart(2, "0")

          const attackTypes = ["UDP Flood", "SYN Flood", "HTTP Flood", "ICMP Flood", "DNS Amplification"]
          const severities = ["low", "medium", "high", "critical"]

          const newEvent = {
            time: `${hours}:${minutes}`,
            type: attackTypes[Math.floor(Math.random() * attackTypes.length)],
            severity: severities[Math.floor(Math.random() * severities.length)],
            blocked: true,
          }

          setAttackEvents((prev) => [newEvent, ...prev.slice(0, 4)])
        }

        newData.push({
          time: newData[newData.length - 1].time + 1,
          value: newValue,
        })

        // Atualizar o trafficLevel com o valor do último ponto do gráfico
        setTrafficLevel(Math.round(newValue))

        // Salvar os dados atualizados no localStorage para compartilhar entre usuários
        try {
          localStorage.setItem("globalTrafficData", JSON.stringify(newData))
        } catch (e) {
          console.error("Erro ao salvar dados do tráfego:", e)
        }

        return newData
      })
    }, 5000) // Atualiza a cada 5 segundos

    return () => clearInterval(interval)
  }

  // Efeito para iniciar a simulação de mudanças
  useEffect(() => {
    setIsLoaded(true)
    const timer = setTimeout(() => {
      simulateChanges()
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  // Efeito para atualizar as dimensões do gráfico quando a janela é redimensionada
  useEffect(() => {
    const updateDimensions = () => {
      if (chartContainerRef.current) {
        setChartDimensions({
          width: chartContainerRef.current.clientWidth,
          height: chartContainerRef.current.clientHeight,
        })
      }
    }

    updateDimensions()
    window.addEventListener("resize", updateDimensions)
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])

  // Função para lidar com o movimento do mouse sobre o gráfico
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!canvasRef.current || !chartContainerRef.current) return

    const rect = chartContainerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    // Configurações do gráfico
    const padding = { top: 20, right: 20, bottom: 30, left: 40 }
    const chartWidth = chartDimensions.width - padding.left - padding.right
    const chartHeight = chartDimensions.height - padding.top - padding.bottom - 40 // Ajuste para a área de eventos recentes

    // Encontrar o ponto de dados mais próximo
    const pointIndex = Math.round(((x - padding.left) / chartWidth) * (trafficData.length - 1))

    if (pointIndex >= 0 && pointIndex < trafficData.length) {
      const point = trafficData[pointIndex]
      const pointX = padding.left + (pointIndex / (trafficData.length - 1)) * chartWidth
      const pointY = padding.top + chartHeight - (point.value / 100) * chartHeight

      setHoverPoint({
        x: pointX,
        y: pointY,
        value: point.value,
      })
    }
  }

  // Função para lidar com o mouse saindo do gráfico
  const handleMouseLeave = () => {
    setIsHovering(false)
    setHoverPoint(null)
  }

  // Função para lidar com o mouse entrando no gráfico
  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  // Efeito para desenhar o gráfico de linha
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Ajustar o tamanho do canvas
    canvas.width = chartDimensions.width
    canvas.height = chartDimensions.height

    // Limpar o canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Configurações do gráfico
    const padding = { top: 20, right: 20, bottom: 30, left: 40 }
    const chartWidth = canvas.width - padding.left - padding.right
    const chartHeight = canvas.height - padding.top - padding.bottom - 40 // Ajuste para a área de eventos recentes

    // Desenhar fundo do gráfico com gradiente sutil
    const bgGradient = ctx.createLinearGradient(0, padding.top, 0, padding.top + chartHeight)
    bgGradient.addColorStop(0, "rgba(30, 41, 59, 0.4)")
    bgGradient.addColorStop(1, "rgba(15, 23, 42, 0.1)")

    ctx.fillStyle = bgGradient
    ctx.fillRect(padding.left, padding.top, chartWidth, chartHeight)

    // Desenhar borda do gráfico
    ctx.strokeStyle = "rgba(75, 85, 99, 0.3)"
    ctx.lineWidth = 1
    ctx.strokeRect(padding.left, padding.top, chartWidth, chartHeight)

    // Desenhar grid
    ctx.strokeStyle = "rgba(75, 85, 99, 0.15)"
    ctx.lineWidth = 1

    // Linhas horizontais
    for (let i = 0; i <= 4; i++) {
      const y = padding.top + (chartHeight * i) / 4
      ctx.beginPath()
      ctx.moveTo(padding.left, y)
      ctx.lineTo(padding.left + chartWidth, y)
      ctx.stroke()

      // Rótulos do eixo Y
      ctx.fillStyle = "rgba(156, 163, 175, 0.8)"
      ctx.font = "10px Inter, system-ui, sans-serif"
      ctx.textAlign = "right"
      ctx.fillText(`${100 - i * 25}%`, padding.left - 5, y + 3)
    }

    // Linhas verticais (horas)
    const hourLabels = [0, 6, 12, 18, 23]
    for (let i = 0; i < hourLabels.length; i++) {
      const hourIndex = (hourLabels[i] / 23) * (trafficData.length - 1)
      const x = padding.left + (hourIndex / (trafficData.length - 1)) * chartWidth

      ctx.beginPath()
      ctx.moveTo(x, padding.top)
      ctx.lineTo(x, padding.top + chartHeight)
      ctx.stroke()

      // Rótulos do eixo X
      ctx.fillStyle = "rgba(156, 163, 175, 0.8)"
      ctx.font = "10px Inter, system-ui, sans-serif"
      ctx.textAlign = "center"
      ctx.fillText(`${hourLabels[i]}h`, x, padding.top + chartHeight + 15)
    }

    // Desenhar linha do gráfico com curvas suaves
    ctx.beginPath()
    ctx.lineWidth = 2.5
    ctx.strokeStyle = "rgba(99, 102, 241, 0.8)" // Indigo

    // Criar gradiente para área sob a linha
    const gradient = ctx.createLinearGradient(0, padding.top, 0, padding.top + chartHeight)
    gradient.addColorStop(0, "rgba(99, 102, 241, 0.3)")
    gradient.addColorStop(0.5, "rgba(99, 102, 241, 0.1)")
    gradient.addColorStop(1, "rgba(99, 102, 241, 0)")

    // Desenhar linha com curvas suaves
    if (trafficData.length > 0) {
      const point = trafficData[0]
      const x = padding.left
      const y = padding.top + chartHeight - (point.value / 100) * chartHeight
      ctx.moveTo(x, y)

      for (let i = 1; i < trafficData.length; i++) {
        const currentPoint = trafficData[i]
        const prevPoint = trafficData[i - 1]

        const currentX = padding.left + (i / (trafficData.length - 1)) * chartWidth
        const currentY = padding.top + chartHeight - (currentPoint.value / 100) * chartHeight

        const prevX = padding.left + ((i - 1) / (trafficData.length - 1)) * chartWidth
        const prevY = padding.top + chartHeight - (prevPoint.value / 100) * chartHeight

        // Pontos de controle para a curva
        const cpX1 = prevX + (currentX - prevX) / 3
        const cpX2 = prevX + (2 * (currentX - prevX)) / 3

        ctx.bezierCurveTo(cpX1, prevY, cpX2, currentY, currentX, currentY)
      }
    }

    ctx.stroke()

    // Desenhar área sob a linha
    if (trafficData.length > 0) {
      ctx.lineTo(padding.left + chartWidth, padding.top + chartHeight)
      ctx.lineTo(padding.left, padding.top + chartHeight)
      ctx.closePath()
      ctx.fillStyle = gradient
      ctx.fill()
    }

    // Desenhar pontos
    trafficData.forEach((point, index) => {
      const x = padding.left + (index / (trafficData.length - 1)) * chartWidth
      const y = padding.top + chartHeight - (point.value / 100) * chartHeight

      // Ponto maior para o último valor
      if (index === trafficData.length - 1) {
        // Glow effect
        const glow = ctx.createRadialGradient(x, y, 0, x, y, 8)
        glow.addColorStop(0, "rgba(99, 102, 241, 0.8)")
        glow.addColorStop(1, "rgba(99, 102, 241, 0)")

        ctx.beginPath()
        ctx.arc(x, y, 8, 0, Math.PI * 2)
        ctx.fillStyle = glow
        ctx.fill()

        // Ponto principal
        ctx.beginPath()
        ctx.arc(x, y, 4, 0, Math.PI * 2)
        ctx.fillStyle = "#6366f1"
        ctx.fill()
        ctx.strokeStyle = "#4f46e5"
        ctx.lineWidth = 1
        ctx.stroke()

        // Mostrar valor atual
        ctx.fillStyle = "rgba(255, 255, 255, 0.9)"
        ctx.font = "bold 11px Inter, system-ui, sans-serif"
        ctx.textAlign = "center"
        ctx.fillText(`${Math.round(point.value)}%`, x, y - 12)
      } else {
        // Pontos menores para os outros valores
        ctx.beginPath()
        ctx.arc(x, y, 2, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(99, 102, 241, 0.6)"
        ctx.fill()
      }
    })

    // Desenhar linha de limite
    const limitY = padding.top + chartHeight - (TRAFFIC_LIMIT / 100) * chartHeight
    ctx.beginPath()
    ctx.setLineDash([4, 4])
    ctx.strokeStyle = "rgba(239, 68, 68, 0.6)"
    ctx.lineWidth = 1.5
    ctx.moveTo(padding.left, limitY)
    ctx.lineTo(padding.left + chartWidth, limitY)
    ctx.stroke()
    ctx.setLineDash([])

    // Rótulo de limite
    ctx.fillStyle = "rgba(239, 68, 68, 0.8)"
    ctx.font = "10px Inter, system-ui, sans-serif"
    ctx.textAlign = "right"
    ctx.fillText("Limite", padding.left + chartWidth - 5, limitY - 5)

    // Desenhar tooltip se estiver com hover
    if (isHovering && hoverPoint) {
      // Desenhar linha vertical no ponto
      ctx.beginPath()
      ctx.setLineDash([2, 2])
      ctx.strokeStyle = "rgba(255, 255, 255, 0.5)"
      ctx.lineWidth = 1
      ctx.moveTo(hoverPoint.x, padding.top)
      ctx.lineTo(hoverPoint.x, padding.top + chartHeight)
      ctx.stroke()
      ctx.setLineDash([])

      // Desenhar tooltip
      const tooltipWidth = 60
      const tooltipHeight = 28
      const tooltipX = Math.min(
        Math.max(hoverPoint.x - tooltipWidth / 2, padding.left),
        canvas.width - padding.right - tooltipWidth,
      )
      const tooltipY = hoverPoint.y - tooltipHeight - 10

      // Fundo do tooltip
      ctx.fillStyle = "rgba(15, 23, 42, 0.9)"
      ctx.strokeStyle = "rgba(99, 102, 241, 0.6)"
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.roundRect(tooltipX, tooltipY, tooltipWidth, tooltipHeight, 4)
      ctx.fill()
      ctx.stroke()

      // Texto do tooltip
      ctx.fillStyle = "rgba(255, 255, 255, 0.9)"
      ctx.font = "bold 12px Inter, system-ui, sans-serif"
      ctx.textAlign = "center"
      ctx.fillText(`${Math.round(hoverPoint.value)}%`, tooltipX + tooltipWidth / 2, tooltipY + 16)
    }
  }, [trafficData, chartDimensions, isHovering, hoverPoint])

  // Função para determinar a cor da severidade
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "low":
        return "bg-blue-500/20 text-blue-400"
      case "medium":
        return "bg-yellow-500/20 text-yellow-400"
      case "high":
        return "bg-orange-500/20 text-orange-400"
      case "critical":
        return "bg-red-500/20 text-red-400"
      default:
        return "bg-gray-500/20 text-gray-400"
    }
  }

  return (
    <section className="py-16 bg-[#0a0a0e] light-theme:bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.div
          className="bg-[#121218] light-theme:bg-white rounded-2xl shadow-lg p-6 overflow-hidden border border-gray-800 light-theme:border-gray-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-indigo-900/30 light-theme:bg-indigo-100 rounded-md flex items-center justify-center mr-3">
                <Shield className="h-5 w-5 text-indigo-400 light-theme:text-indigo-600" />
              </div>
              <h2 className="text-2xl font-bold text-white light-theme:text-gray-900">Dashboard de Proteção</h2>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <span className="inline-block w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
                <span className="text-sm text-gray-300 light-theme:text-gray-700">Operacional</span>
              </div>
              <div className="text-sm text-gray-400 light-theme:text-gray-600 bg-gray-800/50 light-theme:bg-gray-200 px-2 py-1 rounded-full">
                {currentTime}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Atividade de Tráfego - Versão Redesenhada */}
            <motion.div
              className="bg-[#1a1a24] light-theme:bg-gray-50 border border-gray-800 light-theme:border-gray-200 rounded-xl shadow-sm lg:col-span-1 overflow-hidden"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="flex justify-between items-center p-4 border-b border-gray-800 light-theme:border-gray-200">
                <h3 className="font-semibold text-white light-theme:text-gray-900 flex items-center">
                  <Activity className="h-4 w-4 mr-2 text-indigo-400 light-theme:text-indigo-600" />
                  Atividade de Tráfego
                </h3>
                <div className="flex items-center gap-2">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={`flex items-center ${
                      trafficLevel > TRAFFIC_LIMIT
                        ? "bg-red-900/30 light-theme:bg-red-100 text-red-400 light-theme:text-red-600"
                        : "bg-emerald-900/30 light-theme:bg-emerald-100 text-emerald-400 light-theme:text-emerald-600"
                    } px-2 py-1 rounded-full text-xs`}
                  >
                    {trafficLevel > TRAFFIC_LIMIT ? (
                      <>
                        <AlertTriangle className="h-3 w-3 mr-1" />
                        Elevado
                      </>
                    ) : (
                      <>
                        <CheckCircle2 className="h-3 w-3 mr-1" />
                        Normal
                      </>
                    )}
                  </motion.div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs text-gray-400 light-theme:text-gray-600">{trafficLevel}%</span>
                    <div className="w-16 h-1.5 bg-gray-700 light-theme:bg-gray-300 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${
                          trafficLevel > TRAFFIC_LIMIT
                            ? "bg-red-500"
                            : trafficLevel > 60
                              ? "bg-yellow-500"
                              : "bg-emerald-500"
                        }`}
                        initial={{ width: "0%" }}
                        animate={{ width: `${trafficLevel}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative h-64">
                {/* Gráfico de linha */}
                <div
                  ref={chartContainerRef}
                  className="absolute inset-0 p-2"
                  onMouseMove={handleMouseMove}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <canvas ref={canvasRef} className="w-full h-full" />
                </div>

                {/* Eventos recentes */}
                <div className="absolute bottom-0 left-0 right-0 bg-gray-900/80 light-theme:bg-gray-100/90 backdrop-blur-sm p-2 border-t border-gray-800 light-theme:border-gray-200 z-20">
                  <div className="text-xs text-gray-400 light-theme:text-gray-600 mb-1 flex justify-between items-center">
                    <span>Eventos Recentes</span>
                    <span className="text-indigo-400 light-theme:text-indigo-600 cursor-pointer hover:underline">
                      Ver todos
                    </span>
                  </div>
                  <div className="space-y-1 max-h-16 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent">
                    {attackEvents.map((event, index) => (
                      <div key={index} className="flex items-center justify-between text-xs">
                        <div className="flex items-center">
                          <span className="text-gray-500 mr-2">{event.time}</span>
                          <span className="text-white light-theme:text-gray-900">{event.type}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className={`px-1.5 py-0.5 rounded ${getSeverityColor(event.severity)}`}>
                            {event.severity}
                          </span>
                          {event.blocked && (
                            <span className="bg-emerald-900/30 light-theme:bg-emerald-100 text-emerald-400 light-theme:text-emerald-600 px-1.5 py-0.5 rounded">
                              bloqueado
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Ataques Bloqueados */}
            <motion.div
              className="bg-[#1a1a24] light-theme:bg-gray-50 border border-gray-800 light-theme:border-gray-200 rounded-xl p-6 shadow-sm flex flex-col items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="font-semibold text-white light-theme:text-gray-900 mb-4">Ataques Bloqueados</h3>

              <div className="relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={attackCount}
                    initial={{
                      scale: 0.8,
                      color: countDirection === "up" ? "#ef4444" : "#10b981",
                    }}
                    animate={{
                      scale: [0.8, 1.2, 1], // Efeito de explosão
                      color: [
                        countDirection === "up" ? "#ef4444" : "#10b981",
                        countDirection === "up" ? "#ef4444" : "#10b981",
                        "#6366f1",
                      ],
                    }}
                    transition={{
                      duration: 0.5,
                      times: [0, 0.3, 1],
                      ease: "easeOut",
                    }}
                    className="text-7xl font-bold mb-2 text-center"
                  >
                    {attackCount}
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="text-sm text-gray-400 light-theme:text-gray-600 mb-6">Última hora</div>

              <div className="bg-emerald-900/30 light-theme:bg-emerald-100 text-emerald-400 light-theme:text-emerald-600 px-4 py-2 rounded-full flex items-center text-sm">
                <ArrowUp className="h-4 w-4 mr-1" />
                <span>23% bem melhor!</span>
              </div>
            </motion.div>

            {/* Tempo de Resposta */}
            <motion.div
              className="bg-[#1a1a24] light-theme:bg-gray-50 border border-gray-800 light-theme:border-gray-200 rounded-xl p-6 shadow-sm flex flex-col items-center justify-center"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="font-semibold text-white light-theme:text-gray-900 mb-4">Tempo de Resposta</h3>

              <motion.div
                className="text-7xl font-bold text-emerald-400 light-theme:text-emerald-600 mb-6"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.6,
                }}
              >
                12 <span className="text-3xl">ms</span>
              </motion.div>

              <div className="w-full h-2 bg-gray-800 light-theme:bg-gray-200 rounded-full mb-4 relative">
                <motion.div
                  className="absolute left-0 top-0 h-2 bg-emerald-400 light-theme:bg-emerald-500 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "1%" }}
                  transition={{ duration: 1, delay: 0.7 }}
                />
                <div className="flex justify-between text-xs text-gray-500 mt-5">
                  <span>12ms</span>
                  <span>100ms</span>
                </div>
              </div>

              <div className="bg-pink-900/30 light-theme:bg-pink-100 text-pink-400 light-theme:text-pink-600 px-4 py-2 rounded-full flex items-center text-sm">
                <ArrowDown className="h-4 w-4 mr-1" />
                <span>90% mais rápido</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Estilos para as animações das linhas do gráfico */}
      <style jsx global>{`
        /* Estilo para scrollbar personalizada */
        .scrollbar-thin::-webkit-scrollbar {
          width: 4px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #4b5563;
          border-radius: 10px;
        }
        
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #6b7280;
        }
        
        /* Estilos para tema claro */
        .light-theme .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #9ca3af;
        }
        
        .light-theme .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #6b7280;
        }
      `}</style>
    </section>
  )
}
