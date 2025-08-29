"use client"

import { useState, useRef } from "react"
import { motion, useScroll, useTransform, useInView } from "framer-motion"
import {
  Zap,
  Shield,
  Users,
  Award,
  MessageCircle,
  ChevronRight,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
  Diamond as Discord,
} from "lucide-react"

export default function SobreNosPage() {
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef(null)
  const missionRef = useRef(null)
  const teamRef = useRef(null)
  const ctaRef = useRef(null)

  const isMissionInView = useInView(missionRef, { once: true, amount: 0.3 })
  const isTeamInView = useInView(teamRef, { once: true, amount: 0.3 })
  const isCtaInView = useInView(ctaRef, { once: true, amount: 0.5 })

  // Parallax effect
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 300])

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
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

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  }

  // Function to open Discord
  const openDiscord = () => {
    window.open("https://discord.gg/neonhost", "_blank", "noopener,noreferrer")
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 py-16 z-10 relative">
          <div className="max-w-5xl mx-auto text-center">
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="inline-block">
                <span className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                  Sobre a
                </span>
              </span>{" "}
              <span className="inline-block">
                <span className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                  Neonhost
                </span>
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Somos uma empresa brasileira especializada em hospedagem de alta performance, com foco em segurança,
              velocidade e suporte de qualidade.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.button
                className="relative overflow-hidden rounded-md border border-gray-200 bg-gray-50 px-6 py-3 font-medium text-gray-900 transition-all hover:bg-gray-100"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(233, 30, 99, 0.3)",
                  borderColor: "#e91e63",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={openDiscord}
              >
                <span className="relative z-10">Conheça nossos serviços</span>
                <motion.span
                  className="absolute inset-0 -z-0 bg-gradient-to-r from-pink-500/20 to-purple-600/20 opacity-0"
                  whileHover={{ opacity: 1 }}
                />
              </motion.button>

              <motion.button
                className="relative overflow-hidden rounded-md border border-gray-200 bg-gray-50 px-6 py-3 font-medium text-gray-900 transition-all hover:bg-gray-100"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(156, 39, 176, 0.3)",
                  borderColor: "#9c27b0",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={openDiscord}
              >
                <span className="relative z-10">Fale conosco</span>
                <motion.span
                  className="absolute inset-0 -z-0 bg-gradient-to-r from-purple-600/20 to-pink-500/20 opacity-0"
                  whileHover={{ opacity: 1 }}
                />
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Animated arrow down */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <ChevronRight className="h-8 w-8 text-pink-500 rotate-90" />
        </motion.div>
      </section>

      {/* Nossa Missão Section */}
      <section ref={missionRef} className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              style={{
                opacity: isMissionInView ? 1 : 0,
                transform: isMissionInView ? "none" : "translateY(30px)",
              }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                  Nossa Missão
                </span>
              </h2>

              <p className="text-lg text-gray-600 mb-6">
                A Neonhost surgiu para fornecer aos clientes a melhor e mais segura experiência com hospedagens. Sabemos
                o quanto é difícil encontrar uma empresa que oferece qualidade, segurança, atendimento especializado e
                preços acessíveis, e é por isso que estamos aqui.
              </p>

              <p className="text-lg text-gray-600 mb-8">
                Nossa missão é proporcionar soluções de hospedagem de alta performance, com segurança de ponta e suporte
                técnico especializado, permitindo que nossos clientes foquem no crescimento de seus negócios.
              </p>

              <div className="flex items-center gap-4">
                <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full"></div>
                <p className="text-pink-500 font-medium">Desde 2025</p>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              style={{
                opacity: isMissionInView ? 1 : 0,
                transform: isMissionInView ? "none" : "translateX(30px)",
              }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative z-10 rounded-lg overflow-hidden border border-gray-200 shadow-xl">
                <img src="/games/page/about-datacenter.webp" alt="Data Center Neonhost" className="w-full h-auto" />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-40 h-40 bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-br from-purple-600/20 to-pink-500/20 rounded-full blur-2xl"></div>

              {/* Stats overlay */}
              <motion.div
                className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-lg border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <div className="flex justify-between">
                  <div className="text-center">
                    <p className="text-gray-600 text-sm">Uptime</p>
                    <p className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                      99.9%
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-600 text-sm">Clientes</p>
                    <p className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                      1000+
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-600 text-sm">Suporte</p>
                    <p className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                      24/7
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Nossos Diferenciais Section */}
      <section className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Nossos Diferenciais
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              O que nos torna diferentes e por que tantos clientes confiam em nós para hospedar seus projetos mais
              importantes.
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Card 1 */}
            <motion.div
              className="group rounded-lg border border-gray-200 bg-gray-50 p-6 transition-all hover:border-pink-500/30"
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
                    <Zap className="h-8 w-8 text-pink-500" />
                  </motion.div>
                </motion.div>
              </div>

              <h3 className="mb-4 text-center text-xl font-bold text-gray-900">Velocidade</h3>
              <p className="text-center text-gray-600">
                Nossa banda larga de alta capacidade nos permite oferecer a maior velocidade e baixa latência para os
                seus projetos, garantindo uma experiência fluida para seus usuários.
              </p>

              <motion.div
                className="mx-auto mt-6 h-1 w-0 bg-gradient-to-r from-pink-500 to-purple-600 transition-all duration-300 group-hover:w-1/2"
                initial={{ width: 0 }}
                whileHover={{ width: "50%" }}
              />
            </motion.div>

            {/* Card 2 */}
            <motion.div
              className="group rounded-lg border border-gray-200 bg-gray-50 p-6 transition-all hover:border-pink-500/30"
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
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    <Shield className="h-8 w-8 text-pink-500" />
                  </motion.div>
                </motion.div>
              </div>

              <h3 className="mb-4 text-center text-xl font-bold text-gray-900">Segurança</h3>
              <p className="text-center text-gray-600">
                Nossos servidores possuem criptografia de ponta-a-ponta, garantindo assim a segurança e integridade dos
                seus dados, com proteção Anti-DDoS de até 296TB/s.
              </p>

              <motion.div
                className="mx-auto mt-6 h-1 w-0 bg-gradient-to-r from-pink-500 to-purple-600 transition-all duration-300 group-hover:w-1/2"
                initial={{ width: 0 }}
                whileHover={{ width: "50%" }}
              />
            </motion.div>

            {/* Card 3 */}
            <motion.div
              className="group rounded-lg border border-gray-200 bg-gray-50 p-6 transition-all hover:border-pink-500/30"
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
                    <MessageCircle className="h-8 w-8 text-pink-500" />
                  </motion.div>
                </motion.div>
              </div>

              <h3 className="mb-4 text-center text-xl font-bold text-gray-900">Suporte eficiente</h3>
              <p className="text-center text-gray-600">
                Temos uma equipe composta por diversos especialistas que estão preparados para atendê-lo de forma
                eficiente e o mais rápido possível, 24 horas por dia.
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

      {/* Por que escolher a Neonhost */}
      <section ref={teamRef} className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative order-2 md:order-1"
              style={{
                opacity: isTeamInView ? 1 : 0,
                transform: isTeamInView ? "none" : "translateX(-30px)",
              }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative z-10 rounded-lg overflow-hidden border border-gray-200 shadow-xl">
                <img src="/games/page/about-table.webp" alt="Equipe Neonhost" className="w-full h-auto" />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-gradient-to-br from-pink-500/20 to-purple-600/20 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-gradient-to-br from-purple-600/20 to-pink-500/20 rounded-full blur-2xl"></div>
            </motion.div>

            <motion.div
              className="order-1 md:order-2"
              style={{
                opacity: isTeamInView ? 1 : 0,
                transform: isTeamInView ? "none" : "translateY(30px)",
              }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                  Por que escolher a
                </span>{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                  Neonhost?
                </span>
              </h2>

              <p className="text-lg text-gray-600 mb-6">
                Na busca incessante por soluções confiáveis e sem preocupações, nossa empresa tem como missão oferecer a
                melhor hospedagem para suas aplicações.
              </p>

              <p className="text-lg text-gray-600 mb-8">
                Com uma equipe altamente capacitada e especializada, garantimos atendimento eficiente e descomplicado,
                para que você se concentre no crescimento do seu negócio.
              </p>

              <ul className="space-y-4">
                <motion.li
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <div className="flex-shrink-0 bg-gradient-to-br from-pink-500 to-purple-600 p-1 rounded-full">
                    <Award className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Infraestrutura de ponta</h4>
                    <p className="text-gray-600">Servidores de última geração com hardware de alto desempenho.</p>
                  </div>
                </motion.li>

                <motion.li
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <div className="flex-shrink-0 bg-gradient-to-br from-pink-500 to-purple-600 p-1 rounded-full">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Segurança garantida</h4>
                    <p className="text-gray-600">Proteção Anti-DDoS avançada e backups automáticos.</p>
                  </div>
                </motion.li>

                <motion.li
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <div className="flex-shrink-0 bg-gradient-to-br from-pink-500 to-purple-600 p-1 rounded-full">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Suporte humanizado</h4>
                    <p className="text-gray-600">Atendimento 24/7 com especialistas prontos para ajudar.</p>
                  </div>
                </motion.li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Redes Sociais */}
      <section className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h3
            className="text-2xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Siga-nos nas redes sociais
            </span>
          </motion.h3>

          <motion.div
            className="flex flex-wrap justify-center gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <motion.a
              href="https://instagram.com/neonhost"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-50 border border-gray-200 hover:border-pink-500/50 transition-all"
              variants={scaleIn}
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 20px rgba(233, 30, 99, 0.3)",
              }}
            >
              <Instagram className="h-5 w-5 text-pink-500" />
            </motion.a>

            <motion.a
              href="https://facebook.com/neonhost"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-50 border border-gray-200 hover:border-pink-500/50 transition-all"
              variants={scaleIn}
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 20px rgba(233, 30, 99, 0.3)",
              }}
            >
              <Facebook className="h-5 w-5 text-pink-500" />
            </motion.a>

            <motion.a
              href="https://twitter.com/neonhost"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-50 border border-gray-200 hover:border-pink-500/50 transition-all"
              variants={scaleIn}
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 20px rgba(233, 30, 99, 0.3)",
              }}
            >
              <Twitter className="h-5 w-5 text-pink-500" />
            </motion.a>

            <motion.a
              href="https://youtube.com/neonhost"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-50 border border-gray-200 hover:border-pink-500/50 transition-all"
              variants={scaleIn}
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 20px rgba(233, 30, 99, 0.3)",
              }}
            >
              <Youtube className="h-5 w-5 text-pink-500" />
            </motion.a>

            <motion.a
              href="https://linkedin.com/company/neonhost"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-50 border border-gray-200 hover:border-pink-500/50 transition-all"
              variants={scaleIn}
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 20px rgba(233, 30, 99, 0.3)",
              }}
            >
              <Linkedin className="h-5 w-5 text-pink-500" />
            </motion.a>

            <motion.a
              href="https://discord.gg/neonhost"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-50 border border-gray-200 hover:border-pink-500/50 transition-all"
              variants={scaleIn}
              whileHover={{
                scale: 1.1,
                boxShadow: "0 0 20px rgba(233, 30, 99, 0.3)",
              }}
            >
              <Discord className="h-5 w-5 text-pink-500" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="container mx-auto px-4 py-20 relative z-10">
        <motion.div
          className="max-w-5xl mx-auto rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 p-12 relative overflow-hidden"
          style={{
            opacity: isCtaInView ? 1 : 0,
            transform: isCtaInView ? "none" : "translateY(30px)",
          }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                Pronto para começar?
              </span>
            </h2>

            <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
              Selecione o plano que se encaixa com seu projeto e comece agora! Ou entre em contato com nossa equipe para
              obter uma solução exclusiva para você.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button
                className="px-8 py-3 rounded-md bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium"
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(233, 30, 99, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                Escolher plano
              </motion.button>

              <motion.button
                className="px-8 py-3 rounded-md border border-gray-200 bg-gray-50 text-gray-900 font-medium"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(156, 39, 176, 0.3)",
                  borderColor: "#9c27b0",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={openDiscord}
              >
                Entrar em contato
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Floating Discord CTA */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring" }}
      >
        <motion.button
          className="flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 px-4 py-3 font-medium text-white shadow-lg"
          whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(233, 30, 99, 0.5)" }}
          whileTap={{ scale: 0.95 }}
          onClick={openDiscord}
        >
          <Discord className="h-5 w-5" />
          <span>Entrar no Discord</span>
          <motion.span
            className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-white"
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
      </motion.div>
    </div>
  )
}
