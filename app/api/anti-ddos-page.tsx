"use client"

import { Shield, Zap, Clock, Target, ShieldAlert, BarChart } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

// Definindo tipos para evitar erros de TypeScript
type MousePosition = {
  x: number
  y: number
}

export default function AntiDDosPage() {
  const [scrollY, setScrollY] = useState(0)
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLParagraphElement | null>(null)
  const [isCountVisible, setIsCountVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 })

  // Referência para o efeito de partículas
  const particlesRef = useRef<HTMLCanvasElement | null>(null)

  // Efeito de parallax no scroll
  const { scrollYProgress } = useScroll()
  const parallaxY1 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const parallaxY2 = useTransform(scrollYProgress, [0, 1], [0, -200])
  const parallaxY3 = useTransform(scrollYProgress, [0, 1], [0, -50])

  // Efeito de seguir o mouse
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (!countRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry) {
          setIsCountVisible(entry.isIntersecting)
        }
      },
      { threshold: 0.1 },
    )

    observer.observe(countRef.current)

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current)
      }
    }
  }, [countRef.current])

  useEffect(() => {
    if (isCountVisible) {
      const interval = setInterval(() => {
        setCount((prev) => {
          if (prev < 296) {
            return prev + 1
          }
          clearInterval(interval)
          return 296
        })
      }, 15)

      return () => clearInterval(interval)
    }
  }, [isCountVisible])

  // Efeito de partículas
  useEffect(() => {
    // Verificar se estamos no navegador e se o canvas existe
    if (typeof window === "undefined" || !particlesRef.current) return

    const canvas = particlesRef.current
    const ctx = canvas.getContext("2d")

    if (!ctx) return

    // Configurar o canvas para ocupar toda a tela
    const resizeCanvas = () => {
      if (canvas) {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight
      }
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Criar partículas
    const particlesArray: Particle[] = []
    const numberOfParticles = 50

    // Classe Particle com tipagem adequada
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 3 + 1
        this.speedX = Math.random() * 1 - 0.5
        this.speedY = Math.random() * 1 - 0.5
        this.color = Math.random() > 0.5 ? "rgba(233, 30, 99, 0.3)" : "rgba(156, 39, 176, 0.3)"
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Verificar limites
        if (this.x > canvas.width) this.x = 0
        else if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        else if (this.y < 0) this.y = canvas.height

        // Tamanho aleatório para efeito visual
        this.size = Math.random() * 3 + 1
      }

      draw() {
        if (ctx) {
          ctx.fillStyle = this.color
          ctx.beginPath()
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
          ctx.fill()
        }
      }
    }

    const init = () => {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle())
      }
    }

    init()

    const connectParticles = () => {
      if (!ctx) return

      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x
          const dy = particlesArray[a].y - particlesArray[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.strokeStyle = particlesArray[a].color
            ctx.lineWidth = 0.2
            ctx.beginPath()
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y)
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y)
            ctx.stroke()
          }
        }
      }
    }

    let animationFrameId: number

    const animate = () => {
      if (!ctx) return

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update()
        particlesArray[i].draw()
      }

      // Conectar partículas próximas
      connectParticles()

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: { duration: 2, repeat: Number.POSITIVE_INFINITY },
  }

  // Função para abrir o link do Discord
  const openDiscord = () => {
    window.open("https://discord.gg/neonhost", "_blank", "noopener,noreferrer")
  }

  return (
    <div className="min-h-screen bg-[#0a0a0e] text-white">
      {/* Canvas para partículas */}
      <canvas ref={particlesRef} className="fixed inset-0 z-0 pointer-events-none" />

      {/* Background Gradient Effect */}
      <div className="fixed inset-0 -z-10 bg-[#0a0a0e]">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at ${scrollY / 10}% ${50 + scrollY / 100}%, rgba(156, 39, 176, 0.3) 0%, transparent 50%), 
                              radial-gradient(circle at ${80 - scrollY / 20}% ${30 - scrollY / 100}%, rgba(233, 30, 99, 0.3) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="container relative mx-auto px-4 py-16 z-10">
        <motion.div
          className="mx-auto max-w-5xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <motion.h1
            className="mb-6 text-5xl font-bold leading-tight"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block">
              <span className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Localização
              </span>
            </span>{" "}
            <span className="inline-block">
              &{" "}
              <span className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                Anti DDoS
              </span>
            </span>
          </motion.h1>
          <motion.p
            className="mb-8 text-lg text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Proteção Anti DDoS com capacidade total de até 296TB/s. Mitigação a tempo real, sempre ativa, garantindo o
            tempo de resposta mais rápido contra qualquer ameaças/ataques. Todos nossos servidores são em São Paulo, e
            também contamos com o modelo de proteção Cloudflare. Com 296TB/s. de capacidade de rede, 23x vezes maior que
            os maiores ataques DDoS já registrados, a Cloudflare pode mitigar ataques de qualquer tamanho.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              className="relative overflow-hidden rounded-md border border-gray-700 bg-[#131318] px-6 py-3 font-medium text-white transition-all hover:bg-[#1a1a20]"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(233, 30, 99, 0.3)",
                borderColor: "#e91e63",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={openDiscord}
            >
              <span className="relative z-10">Começar agora</span>
              <motion.span
                className="absolute inset-0 -z-0 bg-gradient-to-r from-pink-500/20 to-purple-600/20 opacity-0"
                whileHover={{ opacity: 1 }}
              />
              <motion.span
                className="absolute -right-2 -top-2 h-4 w-4 rounded-full bg-pink-500"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.7, 0.2, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
            </motion.button>
            <motion.button
              className="relative overflow-hidden rounded-md border border-gray-700 bg-[#131318] px-6 py-3 font-medium text-white transition-all hover:bg-[#1a1a20]"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(156, 39, 176, 0.3)",
                borderColor: "#9c27b0",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={openDiscord}
            >
              <span className="relative z-10">Entrar em contato</span>
              <motion.span
                className="absolute inset-0 -z-0 bg-gradient-to-r from-purple-600/20 to-pink-500/20 opacity-0"
                whileHover={{ opacity: 1 }}
              />
              <motion.span
                className="absolute -right-2 -top-2 h-4 w-4 rounded-full bg-purple-500"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.7, 0.2, 0.7],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="container relative mx-auto px-4 py-16 z-10">
        <motion.div
          className="grid gap-8 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Feature 1 */}
          <motion.div
            className="group rounded-lg border border-transparent p-6 transition-all hover:border-pink-500/20 hover:bg-[#131318]"
            variants={fadeInUp}
            whileHover={{
              y: -10,
              boxShadow: "0 10px 30px -10px rgba(233, 30, 99, 0.3)",
            }}
            style={{ y: parallaxY1 }}
          >
            <motion.div
              className="mb-4 inline-flex rounded-lg bg-gradient-to-r from-purple-600/10 to-pink-500/10 p-3"
              animate={pulseAnimation}
            >
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: [0, 15, 0, -15, 0] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
              >
                <Zap className="h-8 w-8 text-pink-500" />
              </motion.div>
            </motion.div>
            <h3 className="mb-2 text-xl font-bold">Mitigação InLine</h3>
            <p className="text-gray-400">
              Mitigação sempre ativa, garantindo o melhor tempo de resposta contra qualquer ameaça.
            </p>
            <motion.div
              className="mt-4 h-1 w-0 bg-gradient-to-r from-pink-500 to-purple-600 transition-all duration-300 group-hover:w-full"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
            />
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            className="group rounded-lg border border-transparent p-6 transition-all hover:border-pink-500/20 hover:bg-[#131318]"
            variants={fadeInUp}
            whileHover={{
              y: -10,
              boxShadow: "0 10px 30px -10px rgba(233, 30, 99, 0.3)",
            }}
            style={{ y: parallaxY2 }}
          >
            <motion.div
              className="mb-4 inline-flex rounded-lg bg-gradient-to-r from-purple-600/10 to-pink-500/10 p-3"
              animate={pulseAnimation}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Clock className="h-8 w-8 text-pink-500" />
              </motion.div>
            </motion.div>
            <h3 className="mb-2 text-xl font-bold">Monitoramento 24/7</h3>
            <p className="text-gray-400">Monitoramento e equipe dedicada a solução de qualquer situação.</p>
            <motion.div
              className="mt-4 h-1 w-0 bg-gradient-to-r from-pink-500 to-purple-600 transition-all duration-300 group-hover:w-full"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
            />
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            className="group rounded-lg border border-transparent p-6 transition-all hover:border-pink-500/20 hover:bg-[#131318]"
            variants={fadeInUp}
            whileHover={{
              y: -10,
              boxShadow: "0 10px 30px -10px rgba(233, 30, 99, 0.3)",
            }}
            style={{ y: parallaxY3 }}
          >
            <motion.div
              className="mb-4 inline-flex rounded-lg bg-gradient-to-r from-purple-600/10 to-pink-500/10 p-3"
              animate={pulseAnimation}
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <Shield className="h-8 w-8 text-pink-500" />
              </motion.div>
            </motion.div>
            <h3 className="mb-2 text-xl font-bold">Proteção Incluída</h3>
            <p className="text-gray-400">Todos os serviços no Brasil incluem a mitigação DDoS.</p>
            <motion.div
              className="mt-4 h-1 w-0 bg-gradient-to-r from-pink-500 to-purple-600 transition-all duration-300 group-hover:w-full"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Capacity Section */}
      <section className="container relative mx-auto px-4 py-16 z-10">
        <div className="mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="mb-6 text-4xl font-bold">Qual a capacidade?</h2>
            <p className="mb-12 text-lg text-gray-300" ref={countRef}>
              Garantimos toda a segurança e estabilidade da proteção DDoS com capacidade de até{" "}
              <motion.span
                className="text-pink-500"
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
              >
                {count} TB/s
              </motion.span>
              .
            </p>
          </motion.div>

          <motion.div
            className="grid gap-8 md:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Card 1 */}
            <motion.div
              className="group rounded-lg border border-gray-800 bg-[#131318] p-6 transition-all hover:border-pink-500/30"
              variants={fadeInUp}
              whileHover={{
                y: -10,
                boxShadow: "0 10px 30px -10px rgba(233, 30, 99, 0.3)",
              }}
            >
              <div className="mb-4 flex justify-center">
                <motion.div
                  className="inline-flex rounded-lg bg-gradient-to-r from-purple-600/10 to-pink-500/10 p-3"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 0 20px rgba(233, 30, 99, 0.5)",
                  }}
                >
                  <motion.div
                    animate={{
                      rotate: [0, 10, 0, -10, 0],
                    }}
                    transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <ShieldAlert className="h-8 w-8 text-pink-500" />
                  </motion.div>
                </motion.div>
              </div>
              <h3 className="mb-4 text-center text-xl font-bold">Mitigação em tempo real</h3>
              <p className="text-center text-gray-400">
                Mantemos nossa rede permanentemente ativa para oferecer a resposta mais ágil contra qualquer tipo de
                ameaça ou ataque. Sua segurança é nossa prioridade.
              </p>
              <motion.div
                className="mx-auto mt-6 h-1 w-0 bg-gradient-to-r from-pink-500 to-purple-600 transition-all duration-300 group-hover:w-1/2"
                initial={{ width: 0 }}
                whileHover={{ width: "50%" }}
              />
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="group rounded-lg border border-gray-800 bg-[#131318] p-6 transition-all hover:border-pink-500/30"
              variants={fadeInUp}
              whileHover={{
                y: -10,
                boxShadow: "0 10px 30px -10px rgba(233, 30, 99, 0.3)",
              }}
            >
              <div className="mb-4 flex justify-center">
                <motion.div
                  className="inline-flex rounded-lg bg-gradient-to-r from-purple-600/10 to-pink-500/10 p-3"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 0 20px rgba(233, 30, 99, 0.5)",
                  }}
                >
                  <motion.div
                    animate={{
                      y: [0, -5, 0, 5, 0],
                    }}
                    transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <BarChart className="h-8 w-8 text-pink-500" />
                  </motion.div>
                </motion.div>
              </div>
              <h3 className="mb-4 text-center text-xl font-bold">Sem null-route/blackhole</h3>
              <p className="text-center text-gray-400">
                Optamos por não empregar técnicas como null-route/blackhole e redirecionamento de rota em nosso sistema
                de proteção. Priorizamos as abordagens mais eficazes.
              </p>
              <motion.div
                className="mx-auto mt-6 h-1 w-0 bg-gradient-to-r from-pink-500 to-purple-600 transition-all duration-300 group-hover:w-1/2"
                initial={{ width: 0 }}
                whileHover={{ width: "50%" }}
              />
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="group rounded-lg border border-gray-800 bg-[#131318] p-6 transition-all hover:border-pink-500/30"
              variants={fadeInUp}
              whileHover={{
                y: -10,
                boxShadow: "0 10px 30px -10px rgba(233, 30, 99, 0.3)",
              }}
            >
              <div className="mb-4 flex justify-center">
                <motion.div
                  className="inline-flex rounded-lg bg-gradient-to-r from-purple-600/10 to-pink-500/10 p-3"
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 0 20px rgba(233, 30, 99, 0.5)",
                  }}
                >
                  <motion.div
                    animate={{
                      rotate: 360,
                    }}
                    transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  >
                    <Target className="h-8 w-8 text-pink-500" />
                  </motion.div>
                </motion.div>
              </div>
              <h3 className="mb-4 text-center text-xl font-bold">Direto ao ponto</h3>
              <p className="text-center text-gray-400">
                Realizamos a mitigação dos ataques diretamente em sua origem, garantindo sempre recursos disponíveis
                para uso.
              </p>
              <motion.div
                className="mx-auto mt-6 h-1 w-0 bg-gradient-to-r from-pink-500 to-purple-600 transition-all duration-300 group-hover:w-1/2"
                initial={{ width: 0 }}
                whileHover={{ width: "50%" }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="container relative mx-auto px-4 py-16 z-10">
        <motion.div
          className="mx-auto max-w-5xl overflow-hidden rounded-lg border border-gray-800 bg-[#131318] p-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{
            boxShadow: "0 0 30px rgba(233, 30, 99, 0.2)",
            borderColor: "rgba(233, 30, 99, 0.3)",
          }}
        >
          <div className="flex items-center gap-2">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              <Shield className="h-5 w-5 text-pink-500" />
            </motion.div>
            <h3 className="text-xl font-bold">Dashboard de Proteção</h3>
            <div className="ml-auto flex items-center gap-2">
              <span className="flex items-center gap-1">
                <motion.span
                  className="h-2 w-2 rounded-full bg-green-500"
                  animate={{
                    opacity: [1, 0.5, 1],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                ></motion.span>
                <span className="text-sm text-gray-400">Operacional</span>
              </span>
              <span className="text-sm text-gray-400">19:22:10</span>
            </div>
          </div>

          {/* Animated wave effect */}
          <div className="relative mt-4 h-20 w-full overflow-hidden rounded bg-[#0a0a0e]">
            <motion.div
              className="absolute bottom-0 left-0 h-full w-[200%]"
              style={{
                backgroundImage:
                  "linear-gradient(270deg, transparent 0%, rgba(233, 30, 99, 0.2) 50%, transparent 100%)",
                height: "40px",
                bottom: "0",
              }}
              animate={{
                x: ["-100%", "0%"],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 5,
                ease: "linear",
              }}
            />
            <motion.div
              className="absolute bottom-0 left-0 h-full w-[200%]"
              style={{
                backgroundImage:
                  "linear-gradient(270deg, transparent 0%, rgba(156, 39, 176, 0.2) 50%, transparent 100%)",
                height: "20px",
                bottom: "10px",
              }}
              animate={{
                x: ["-100%", "0%"],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 7,
                ease: "linear",
              }}
            />
            <motion.div
              className="absolute bottom-0 left-0 h-full w-[200%]"
              style={{
                backgroundImage:
                  "linear-gradient(270deg, transparent 0%, rgba(233, 30, 99, 0.1) 50%, transparent 100%)",
                height: "15px",
                bottom: "5px",
              }}
              animate={{
                x: ["0%", "-100%"],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 9,
                ease: "linear",
              }}
            />
          </div>

          {/* Cybersecurity visualization */}
          <div className="mt-4 relative h-10">
            <motion.div
              className="absolute inset-0 flex items-center justify-between px-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="h-2 w-1 bg-pink-500"
                  animate={{
                    height: [2, Math.random() * 16 + 4, 2],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.1,
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

    </div>
  )
}
