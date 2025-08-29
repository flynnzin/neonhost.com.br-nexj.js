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

  // Efeito de parallax no scroll
  const { scrollYProgress } = useScroll()
  const parallaxY1 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const parallaxY2 = useTransform(scrollYProgress, [0, 1], [0, -100])
  const parallaxY3 = useTransform(scrollYProgress, [0, 1], [0, -25])

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
          if (prev < 348) {
            return prev + 1
          }
          clearInterval(interval)
          return 348
        })
      }, 15)

      return () => clearInterval(interval)
    }
  }, [isCountVisible])

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

  const subtlePulse = {
    scale: [1, 1.02, 1],
    transition: { duration: 3, repeat: Number.POSITIVE_INFINITY },
  }

  // Função para abrir o link do Discord
  const openDiscord = () => {
    window.open("https://discord.gg/neonhost", "_blank", "noopener,noreferrer")
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-[linear-gradient(rgba(118,67,201,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(118,67,201,0.03)_1px,transparent_1px)] bg-[size:24px_24px]"
            style={{ maskImage: "linear-gradient(transparent, black, transparent)" }}
          ></div>
        </div>
        <div
          className="absolute inset-0"
          style={{
            background: `
            radial-gradient(600px circle at top left, rgba(126, 34, 206, 0.02) 0%, transparent 50%),
            radial-gradient(600px circle at bottom right, rgba(255, 62, 157, 0.02) 0%, transparent 50%)
          `,
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="container relative mx-auto px-4 py-20 z-10">
        <motion.div
          className="mx-auto max-w-5xl text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-purple-50 border border-purple-200 text-purple-600 text-sm font-medium">
              <Shield className="h-4 w-4 mr-2" />
              Proteção Anti-DDoS
            </span>
          </motion.div>

          <motion.h1
            className="mb-6 text-5xl md:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Proteção Avançada
            </span>{" "}
            <span className="text-gray-900">Anti-DDoS</span>
          </motion.h1>

          <motion.p
            className="mb-12 text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Proteção Anti-DDoS com capacidade total de até 348TB/s. Mitigação em tempo real, sempre ativa, garantindo o
            tempo de resposta mais rápido contra qualquer ameaça. Todos nossos servidores são em São Paulo, com proteção
            Cloudflare de nível empresarial.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:opacity-90 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openDiscord}
            >
              Começar agora
            </motion.button>
            <motion.button
              className="px-8 py-4 bg-gray-50 text-gray-900 border border-gray-200 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={openDiscord}
            >
              Entrar em contato
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="container relative mx-auto px-4 py-20 z-10">
        <motion.div
          className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Feature 1 */}
          <motion.div
            className="group p-8 rounded-2xl bg-gray-50 border border-gray-200 hover:border-purple-300 transition-all duration-300"
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            style={{ y: parallaxY1 }}
          >
            <motion.div
              className="mb-6 inline-flex rounded-xl bg-gradient-to-r from-purple-100 to-pink-100 p-4"
              animate={subtlePulse}
            >
              <Zap className="h-8 w-8 text-purple-600" />
            </motion.div>
            <h3 className="mb-4 text-2xl font-bold text-gray-900">Mitigação InLine</h3>
            <p className="text-gray-600 leading-relaxed">
              Mitigação sempre ativa, garantindo o melhor tempo de resposta contra qualquer ameaça.
            </p>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            className="group p-8 rounded-2xl bg-gray-50 border border-gray-200 hover:border-purple-300 transition-all duration-300"
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            style={{ y: parallaxY2 }}
          >
            <motion.div
              className="mb-6 inline-flex rounded-xl bg-gradient-to-r from-purple-100 to-pink-100 p-4"
              animate={subtlePulse}
            >
              <Clock className="h-8 w-8 text-purple-600" />
            </motion.div>
            <h3 className="mb-4 text-2xl font-bold text-gray-900">Monitoramento 24/7</h3>
            <p className="text-gray-600 leading-relaxed">
              Monitoramento contínuo e equipe dedicada à solução de qualquer situação.
            </p>
          </motion.div>

          {/* Feature 3 */}
          <motion.div
            className="group p-8 rounded-2xl bg-gray-50 border border-gray-200 hover:border-purple-300 transition-all duration-300"
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            style={{ y: parallaxY3 }}
          >
            <motion.div
              className="mb-6 inline-flex rounded-xl bg-gradient-to-r from-purple-100 to-pink-100 p-4"
              animate={subtlePulse}
            >
              <Shield className="h-8 w-8 text-purple-600" />
            </motion.div>
            <h3 className="mb-4 text-2xl font-bold text-gray-900">Proteção Incluída</h3>
            <p className="text-gray-600 leading-relaxed">
              Todos os serviços no Brasil incluem a mitigação DDoS sem custo adicional.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Capacity Section */}
      <section className="container relative mx-auto px-4 py-20 z-10">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="mb-6 text-4xl md:text-5xl font-bold text-gray-900">Capacidade de Proteção</h2>
            <p className="mb-16 text-xl text-gray-600 max-w-3xl mx-auto" ref={countRef}>
              Garantimos toda a segurança e estabilidade da proteção DDoS com capacidade de até{" "}
              <motion.span
                className="font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
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
              className="group p-8 rounded-2xl bg-white border border-gray-200 hover:border-purple-300 transition-all duration-300 shadow-sm hover:shadow-lg"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="mb-6 flex justify-center">
                <motion.div
                  className="inline-flex rounded-xl bg-gradient-to-r from-purple-100 to-pink-100 p-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <ShieldAlert className="h-8 w-8 text-purple-600" />
                </motion.div>
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900">Mitigação em Tempo Real</h3>
              <p className="text-gray-600 leading-relaxed">
                Mantemos nossa rede permanentemente ativa para oferecer a resposta mais ágil contra qualquer tipo de
                ameaça ou ataque. Sua segurança é nossa prioridade.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="group p-8 rounded-2xl bg-white border border-gray-200 hover:border-purple-300 transition-all duration-300 shadow-sm hover:shadow-lg"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="mb-6 flex justify-center">
                <motion.div
                  className="inline-flex rounded-xl bg-gradient-to-r from-purple-100 to-pink-100 p-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <BarChart className="h-8 w-8 text-purple-600" />
                </motion.div>
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900">Sem Null-Route</h3>
              <p className="text-gray-600 leading-relaxed">
                Optamos por não empregar técnicas como null-route/blackhole e redirecionamento de rota em nosso sistema
                de proteção. Priorizamos as abordagens mais eficazes.
              </p>
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="group p-8 rounded-2xl bg-white border border-gray-200 hover:border-purple-300 transition-all duration-300 shadow-sm hover:shadow-lg"
              variants={fadeInUp}
              whileHover={{ y: -5 }}
            >
              <div className="mb-6 flex justify-center">
                <motion.div
                  className="inline-flex rounded-xl bg-gradient-to-r from-purple-100 to-pink-100 p-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <Target className="h-8 w-8 text-purple-600" />
                </motion.div>
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900">Direto ao Ponto</h3>
              <p className="text-gray-600 leading-relaxed">
                Realizamos a mitigação dos ataques diretamente em sua origem, garantindo sempre recursos disponíveis
                para uso.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="container relative mx-auto px-4 py-20 z-10">
        <motion.div
          className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-gray-200 bg-white p-8 shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.1)" }}
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <motion.div className="p-2 rounded-lg bg-gradient-to-r from-purple-100 to-pink-100" animate={subtlePulse}>
                <Shield className="h-6 w-6 text-purple-600" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900">Dashboard de Proteção</h3>
            </div>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-2">
                <motion.span
                  className="h-3 w-3 rounded-full bg-green-500"
                  animate={{
                    opacity: [1, 0.5, 1],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                ></motion.span>
                <span className="text-sm font-medium text-green-600">Operacional</span>
              </span>
              <span className="text-sm text-gray-500">19:22:10</span>
            </div>
          </div>

          <div className="relative h-24 w-full overflow-hidden rounded-xl bg-gray-50 border border-gray-200">
            <motion.div
              className="absolute bottom-0 left-0 h-full w-[200%]"
              style={{
                backgroundImage:
                  "linear-gradient(270deg, transparent 0%, rgba(126, 34, 206, 0.1) 50%, transparent 100%)",
                height: "60%",
                bottom: "0",
              }}
              animate={{
                x: ["-100%", "0%"],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 8,
                ease: "linear",
              }}
            />
            <motion.div
              className="absolute bottom-0 left-0 h-full w-[200%]"
              style={{
                backgroundImage:
                  "linear-gradient(270deg, transparent 0%, rgba(255, 62, 157, 0.1) 50%, transparent 100%)",
                height: "40%",
                bottom: "10%",
              }}
              animate={{
                x: ["-100%", "0%"],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 12,
                ease: "linear",
              }}
            />
          </div>

          <div className="mt-6 grid grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">348TB/s</div>
              <div className="text-sm text-gray-600">Capacidade Total</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">100%</div>
              <div className="text-sm text-gray-600">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">&lt;5ms</div>
              <div className="text-sm text-gray-600">Latência</div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}
