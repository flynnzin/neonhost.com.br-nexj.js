"use client"

import { Button } from "@nextui-org/button"
import { motion } from "framer-motion"
import TestimonialsSection from "@/components/testimonials-section"
import Link from "next/link"
import { ZapIcon, ShieldIcon, Clock, Headset, Server, Globe, Cpu, HardDrive, Gift, Users, Gamepad2 } from "lucide-react"
import { useRef, useEffect } from "react"
import Head from "next/head"

// Animation variants
const fadeInVariant = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
}

export default function Home() {
  const featuresRef = useRef(null)
  const ctaRef = useRef(null)

  // Efeito para adicionar classe ao body para garantir fundo escuro
  useEffect(() => {
    // Não precisamos mais adicionar a classe bg-[#050507] ao body
    // já que o background é controlado pelo ClientLayout
    return () => {}
  }, [])

  const guarantees = [
    { id: "uptime", text: "Garantia de 99,98% de Uptime" },
    { id: "reembolso", text: "7 Dias de Garantia de Reembolso" },
    { id: "nvme", text: "Armazenamento SSD/NVMe" },
    { id: "brasil", text: "Infraestrutura no Brasil" },
  ]

  const hostingPlans = [
    {
      id: "vps-brasil",
      title: "VPS no Brasil",
      icon: <HardDrive className="w-10 h-10 text-purple-500" />,
      description: "Servidores no Brasil com tráfego mensal ilimitado",
      price: "29",
      cents: "90",
      period: "/mensal",
      link: "/vps-brasil",
    },
    {
      id: "vps-gamer",
      title: "VPS Gamer",
      icon: <Gamepad2 className="w-10 h-10 text-purple-500" />,
      description: "VPS de alta performance no Brasil com Anti-DDoS PRO",
      price: "89",
      cents: "90",
      period: "/mensal",
      link: "/vps-gamer",
      featured: true,
    },
    {
      id: "semi-dedicados",
      title: "Semi-Dedicados",
      icon: <Server className="w-10 h-10 text-purple-500" />,
      description: "Servidores robustos Windows e Linux no Brasil",
      price: "299",
      cents: "90",
      period: "/mensal",
      link: "/semi-dedicados",
    },
    {
      id: "dedicados",
      title: "Servidores Dedicados",
      icon: <Cpu className="w-10 h-10 text-purple-500" />,
      description: "Servidores físicos de alta performance no Brasil",
      price: "1190",
      cents: "00",
      period: "/mensal",
      link: "/dedicados",
    },
  ]

  const differentials = [
    {
      id: "suporte-tecnico",
      title: "Suporte Técnico 24/7",
      description:
        "Nossa equipe de especialistas está disponível 24 horas por dia para garantir que seu servidor funcione sem interrupções.",
      icon: <Headset className="w-8 h-8 text-purple-500" />,
    },
    {
      id: "protecao-ddos",
      title: "Proteção Anti-DDoS",
      description:
        "Defesa avançada contra DDoS, firewalls configuráveis e monitoramento contínuo para proteger seus dados.",
      icon: <ShieldIcon className="w-8 h-8 text-purple-500" />,
    },
    {
      id: "tecnologia-ponta",
      title: "Tecnologia de Ponta",
      description:
        "Hardware de última geração com SSDs NVMe e processadores de alto desempenho para máxima velocidade.",
      icon: <Cpu className="w-8 h-8 text-purple-500" />,
    },
    {
      id: "data-centers",
      title: "Data Centers no Brasil",
      description:
        "Infraestrutura localizada no Brasil, garantindo baixa latência e alta disponibilidade para seus usuários.",
      icon: <Globe className="w-8 h-8 text-purple-500" />,
    },
  ]

  return (
    <>
      {/* SEO Metadata */}

      <main className="w-full bg-[#050507]">
        {/* Hero Section - Experiência Neon */}
        <section
          className="w-full relative overflow-hidden min-h-screen flex items-center"
          aria-labelledby="hero-heading"
        >
          <div className="w-full max-w-[1920px] mx-auto px-6 sm:px-8 md:px-12 py-20 md:py-28 relative z-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInVariant}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 bg-[#9553ff]/10 rounded-full px-5 py-2 mb-8 backdrop-blur-sm border border-[#9553ff]/10">
                <span className="text-sm font-medium text-white flex items-center gap-2">
                  <span className="inline-block w-2 h-2 rounded-full bg-[#9553ff]"></span>
                  Infraestrutura no Brasil

                </span>
              </div>

              <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1]">
                <span className="text-white block mb-2">Potencialize seu</span>
                <span className="text-white block mb-2">mundo digital com</span>
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-[#9553ff] to-[#ff3e9d] bg-clip-text text-transparent">
                    Neon Host
                  </span>
                  <span className="absolute -bottom-2 left-0 w-full h-[3px] bg-gradient-to-r from-[#9553ff] to-[#ff3e9d]"></span>
                </span>
              </h1>

              <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
                Revolucionamos a hospedagem no Brasil com nossa infraestrutura exclusiva Neon Host™, combinando
                velocidade extrema, segurança avançada e tecnologia de ponta.
              </p>

              {/* Recursos redesenhados - mais compactos e elegantes */}
              <div className="flex flex-wrap justify-center gap-3 mb-10">
                <motion.div
                  variants={itemVariants}
                  className="inline-flex items-center gap-2 bg-[#0B0E13]/40 backdrop-blur-sm px-4 py-2 rounded-full border border-[#9553ff]/10 hover:border-[#9553ff]/30 transition-all"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#9553ff] to-[#ff3e9d] flex items-center justify-center">
                    <ZapIcon className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-gray-200 text-sm">Latência ultra-baixa de até 5ms</span>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="inline-flex items-center gap-2 bg-[#0B0E13]/40 backdrop-blur-sm px-4 py-2 rounded-full border border-[#9553ff]/10 hover:border-[#9553ff]/30 transition-all"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#9553ff] to-[#ff3e9d] flex items-center justify-center">
                    <ShieldIcon className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-gray-200 text-sm">Proteção contra ataques em tempo real</span>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="inline-flex items-center gap-2 bg-[#0B0E13]/40 backdrop-blur-sm px-4 py-2 rounded-full border border-[#9553ff]/10 hover:border-[#9553ff]/30 transition-all"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#9553ff] to-[#ff3e9d] flex items-center justify-center">
                    <Cpu className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-gray-200 text-sm">Processadores AMD Ryzen e NVMe Enterprise</span>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="inline-flex items-center gap-2 bg-[#0B0E13]/40 backdrop-blur-sm px-4 py-2 rounded-full border border-[#9553ff]/10 hover:border-[#9553ff]/30 transition-all"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-[#9553ff] to-[#ff3e9d] flex items-center justify-center">
                    <Clock className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-gray-200 text-sm">Garantia de 99,99% de uptime</span>
                </motion.div>
              </div>

              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <Button
                  as={Link}
                  href="https://app.neonhost.com.br/"
                  className="bg-gradient-to-r from-[#9553ff] to-[#ff3e9d] text-white font-medium px-10 py-6 rounded-xl hover:opacity-90 transition-all shadow-lg shadow-[#9553ff]/20 relative overflow-hidden group text-lg"
                  size="lg"
                >
                  <span className="relative z-10">Explorar tecnologia Neon</span>
                  <span className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                </Button>
                <Button
                  as={Link}
                  href="#fale-conosco"
                  className="bg-[#0B0E13]/60 backdrop-blur-sm border border-[#9553ff]/30 text-white font-medium px-10 py-6 rounded-xl hover:bg-[#0B0E13]/80 transition-all group text-lg"
                  size="lg"
                >
                  <span className="bg-gradient-to-r from-[#9553ff] to-[#ff3e9d] bg-clip-text text-transparent group-hover:text-white transition-colors">
                    Fale com especialistas
                  </span>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Divider com efeito de gradiente */}
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 relative">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#9553ff]/50 to-transparent my-8"></div>

          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-[#050507] px-8 py-1">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center space-x-2"
            >
              <div className="h-1 w-1 rounded-full bg-[#9553ff]"></div>
              <div className="h-1 w-1 rounded-full bg-[#ff3e9d]"></div>
              <div className="h-1 w-1 rounded-full bg-[#9553ff]"></div>
            </motion.div>
          </div>
        </div>

        {/* Bonus Section */}
        <section aria-labelledby="bonus-heading" className="w-full py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8"
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 id="bonus-heading" className="text-2xl md:text-4xl font-bold mb-4">
                <span className="text-white">Ganhe </span>
                <span className="bg-gradient-to-r from-[#9553ff] to-[#ff3e9d] bg-clip-text text-transparent">R$50</span>
                <span className="text-white"> de bônus!</span>
              </h2>
              <p className="text-base text-gray-300 max-w-3xl mx-auto">
                Faça seu primeiro pagamento a partir de R$150,00 e receba seu bônus automaticamente em sua conta!
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                variants={itemVariants}
                className="bg-[#0B0E13] border border-gray-800/50 rounded-2xl p-8 relative overflow-hidden group hover:border-[#9553ff]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#9553ff]/10"
              >
                <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#9553ff]/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#9553ff]/20 to-[#ff3e9d]/20 rounded-full flex items-center justify-center">
                    <Users className="w-8 h-8 text-[#9553ff]" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-center text-white mb-2">1. Registrar-se</h3>
                <p className="text-gray-300 text-center">
                  Para receber o seu bônus, primeiro, cadastre-se gratuitamente em nossa plataforma e valide o seu
                  endereço de e-mail.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-[#0B0E13] border border-gray-800/50 rounded-2xl p-8 relative overflow-hidden group hover:border-[#ff3e9d]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#ff3e9d]/10"
              >
                <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#ff3e9d]/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#9553ff]/20 to-[#ff3e9d]/20 rounded-full flex items-center justify-center">
                    <Gift className="w-8 h-8 text-[#ff3e9d]" />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-center text-white mb-2">2. Contratar</h3>
                <p className="text-gray-300 text-center">
                  Escolha o plano ideal para o seu projeto e efetue o seu primeiro pagamento. Após aprovação, o crédito
                  será inserido em sua conta em poucos segundos.
                </p>
              </motion.div>
            </div>

            <motion.div variants={itemVariants} className="mt-10 text-center">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#9553ff]/20 to-[#ff3e9d]/20 rounded-full px-4 py-2">
                <Gift className="w-4 h-4 text-[#ff3e9d]" />
                <span className="text-sm font-medium text-white">Oferta por tempo limitado</span>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Divider com efeito de gradiente */}
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 relative">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#ff3e9d]/50 to-transparent"></div>

          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-[#050507] px-8 py-1">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center space-x-2"
            >
              <div className="h-1 w-1 rounded-full bg-[#ff3e9d]"></div>
              <div className="h-1 w-1 rounded-full bg-[#9553ff]"></div>
              <div className="h-1 w-1 rounded-full bg-[#ff3e9d]"></div>
            </motion.div>
          </div>
        </div>

        {/* Hosting Plans Section */}
        <section aria-labelledby="plans-heading" className="w-full py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8"
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 id="plans-heading" className="text-2xl md:text-4xl font-bold mb-4 text-white">
                Hospedagem sob medida para{" "}
                <span className="bg-gradient-to-r from-[#9553ff] to-[#ff3e9d] bg-clip-text text-transparent">você</span>
              </h2>
              <p className="text-base text-gray-300 max-w-3xl mx-auto">
                Desempenho e confiabilidade para levar seu projeto ao próximo nível. Planos de servidores personalizados
                com suporte técnico especializado, garantindo velocidade e segurança para seu site, jogos online ou
                aplicativos.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {hostingPlans.map((plan) => (
                <motion.div
                  key={plan.id}
                  variants={itemVariants}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className={`bg-white/5 backdrop-blur-sm border ${plan.featured ? "border-[#9553ff]/50" : "border-gray-800/30"} rounded-2xl overflow-hidden relative group transition-all duration-300 hover:border-[#9553ff]/50 hover:shadow-lg hover:shadow-[#9553ff]/10`}
                >
                  {plan.featured && (
                    <div className="absolute top-3 right-3 bg-gradient-to-r from-[#9553ff] to-[#ff3e9d] text-white text-xs font-bold px-3 py-1 rounded-full">
                      Popular
                    </div>
                  )}

                  <div className={`p-6 ${plan.featured ? "bg-gradient-to-b from-[#9553ff]/20 to-transparent" : ""}`}>
                    <div className="mb-4">{plan.icon}</div>

                    <h3 className="text-xl font-bold text-white mb-2">{plan.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 h-12">{plan.description}</p>

                    <div className="flex items-baseline mb-6">
                      <span className="text-gray-400 text-lg">R$</span>
                      <span className="text-4xl font-bold text-white mx-1">{plan.price}</span>
                      <div className="flex flex-col items-start">
                        <span className="text-gray-400 text-sm">{plan.cents}</span>
                        <span className="text-gray-500 text-xs">{plan.period}</span>
                      </div>
                    </div>

                    <Button
                      as={Link}
                      href={plan.link}
                      className={`w-full ${plan.featured ? "bg-gradient-to-r from-[#9553ff] to-[#ff3e9d]" : "bg-[#9553ff]"} text-white font-medium py-3 rounded-xl hover:opacity-90 transition-all shadow-md`}
                    >
                      Ver todos os planos
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Divider com efeito de gradiente */}
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 relative">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#9553ff]/50 to-transparent"></div>
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-[#050507] px-8 py-1">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center space-x-2"
            >
              <div className="h-1 w-1 rounded-full bg-[#9553ff]"></div>
              <div className="h-1 w-1 rounded-full bg-[#ff3e9d]"></div>
              <div className="h-1 w-1 rounded-full bg-[#9553ff]"></div>
            </motion.div>
          </div>
        </div>

        {/* Features Section */}
        <section ref={featuresRef} aria-labelledby="features-heading" className="w-full py-20 md:py-28">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8"
          >
            <motion.div variants={itemVariants} className="text-center mb-14">
              <motion.div
                className="inline-flex items-center justify-center mb-4 bg-gradient-to-br from-[#9553ff]/20 to-[#ff3e9d]/20 p-3 rounded-full"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <Server className="h-8 w-8 text-[#ff3e9d]" />
              </motion.div>
              <h2
                id="features-heading"
                className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-[#9553ff] to-[#ff3e9d] bg-clip-text text-transparent"
              >
                Infraestrutura de Ponta
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#9553ff] to-[#ff3e9d] mx-auto"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
              <motion.div
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="flex flex-col items-center text-center p-8 rounded-xl bg-[#0B0E13] border border-gray-800/50 hover:border-[#9553ff]/30 transition-all duration-300 group hover:shadow-lg hover:shadow-[#9553ff]/10"
              >
                <div className="bg-gradient-to-br from-[#9553ff] to-[#9553ff]/70 p-5 rounded-full mb-6 group-hover:shadow-lg group-hover:shadow-[#9553ff]/20 transition-all duration-300">
                  <ZapIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">Latência de 20ms</h3>
                <p className="text-gray-300">
                  Experiência de jogo fluida e resposta rápida para seus jogadores, garantindo a melhor jogabilidade.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="flex flex-col items-center text-center p-8 rounded-xl bg-[#0B0E13] border border-gray-800/50 hover:border-[#ff3e9d]/30 transition-all duration-300 group hover:shadow-lg hover:shadow-[#ff3e9d]/10"
              >
                <div className="bg-gradient-to-br from-[#ff3e9d] to-[#ff3e9d]/70 p-5 rounded-full mb-6 group-hover:shadow-lg group-hover:shadow-[#ff3e9d]/20 transition-all duration-300">
                  <ShieldIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">Proteção DDoS</h3>
                <p className="text-gray-300">
                  Defesa integrada contra ataques, mantendo seus serviços sempre online e protegidos 24/7.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="flex flex-col items-center text-center p-8 rounded-xl bg-[#0B0E13] border border-gray-800/50 hover:border-[#9553ff]/30 transition-all duration-300 group hover:shadow-lg hover:shadow-[#9553ff]/10"
              >
                <div className="bg-gradient-to-br from-[#9553ff] to-[#9553ff]/70 p-5 rounded-full mb-6 group-hover:shadow-lg group-hover:shadow-[#9553ff]/20 transition-all duration-300">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">Uptime 99,9%</h3>
                <p className="text-gray-300">
                  Garantimos 99,9% de uptime, mantendo seus sites e jogos sempre online para seus usuários.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="flex flex-col items-center text-center p-8 rounded-xl bg-[#0B0E13] border border-gray-800/50 hover:border-[#ff3e9d]/30 transition-all duration-300 group hover:shadow-lg hover:shadow-[#ff3e9d]/10"
              >
                <div className="bg-gradient-to-br from-[#ff3e9d] to-[#ff3e9d]/70 p-5 rounded-full mb-6 group-hover:shadow-lg group-hover:shadow-[#ff3e9d]/20 transition-all duration-300">
                  <Headset className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">Suporte 24/7</h3>
                <p className="text-gray-300">
                  Assistência rápida e eficiente a qualquer hora, com atendimento amigável e especializado.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Divider com efeito de gradiente */}
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 relative">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#ff3e9d]/50 to-transparent"></div>

          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-[#050507] px-8 py-1">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center space-x-2"
            >
              <div className="h-1 w-1 rounded-full bg-[#ff3e9d]"></div>
              <div className="h-1 w-1 rounded-full bg-[#9553ff]"></div>
              <div className="h-1 w-1 rounded-full bg-[#ff3e9d]"></div>
            </motion.div>
          </div>
        </div>

        {/* Differentials Section */}
        <section aria-labelledby="differentials-heading" className="w-full py-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8"
          >
            <motion.div variants={itemVariants} className="text-center mb-14">
              <h2 id="differentials-heading" className="text-2xl md:text-4xl font-bold mb-4 text-white">
                Conheça os nossos{" "}
                <span className="bg-gradient-to-r from-[#9553ff] to-[#ff3e9d] bg-clip-text text-transparent">
                  diferenciais
                </span>
              </h2>
              <p className="text-base text-gray-300 max-w-3xl mx-auto mb-4">
                Descubra por que milhares de clientes escolhem a NeonHost para seus projetos online de sucesso!
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-[#9553ff] to-[#ff3e9d] mx-auto"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {differentials.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  className="flex flex-col items-center text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-gray-800/30 hover:border-[#9553ff]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#9553ff]/10"
                >
                  <div className="bg-[#9553ff]/20 p-4 rounded-full mb-6 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Divider com efeito de gradiente */}
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 relative">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#9553ff]/50 to-transparent"></div>
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-[#050507] px-8 py-1">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center space-x-2"
            >
              <div className="h-1 w-1 rounded-full bg-[#9553ff]"></div>
              <div className="h-1 w-1 rounded-full bg-[#ff3e9d]"></div>
              <div className="h-1 w-1 rounded-full bg-[#9553ff]"></div>
            </motion.div>
          </div>
        </div>

        {/* Testimonials Section */}
        <section aria-labelledby="testimonials-heading" className="w-full py-2">
          <div className="w-full max-w-[1920px] mx-auto">
            <h2 id="testimonials-heading" className="sr-only">
              Depoimentos de clientes
            </h2>
            <TestimonialsSection />
          </div>
        </section>

        {/* Divider com efeito de gradiente */}
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 relative my-10">
          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#9553ff]/50 to-transparent"></div>

          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-[#050507] px-8 py-1">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-center space-x-2"
            >
              <div className="h-1 w-1 rounded-full bg-[#9553ff]"></div>
              <div className="h-1 w-1 rounded-full bg-[#ff3e9d]"></div>
              <div className="h-1 w-1 rounded-full bg-[#9553ff]"></div>
            </motion.div>
          </div>
        </div>

        {/* FAQ Section for SEO */}
        <section aria-labelledby="faq-heading" className="w-full py-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8"
          >
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h2 id="faq-heading" className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Perguntas{" "}
                <span className="bg-gradient-to-r from-[#9553ff] to-[#ff3e9d] bg-clip-text text-transparent">
                  Frequentes
                </span>
              </h2>
              <p className="text-base text-gray-300 max-w-3xl mx-auto">
                Tire suas dúvidas sobre nossos serviços de hospedagem
              </p>
            </motion.div>

            <div className="max-w-3xl mx-auto">
              <motion.div
                variants={itemVariants}
                className="mb-6 bg-[#0B0E13] border border-gray-800/50 rounded-xl p-6 hover:border-[#9553ff]/30 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-2">O que é uma VPS?</h3>
                <p className="text-gray-300">
                  VPS (Servidor Privado Virtual) é um servidor virtual que funciona com recursos dedicados em um
                  servidor físico compartilhado. Diferente da hospedagem compartilhada, você tem recursos garantidos e
                  maior controle sobre o ambiente.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="mb-6 bg-[#0B0E13] border border-gray-800/50 rounded-xl p-6 hover:border-[#9553ff]/30 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-2">Como funciona a proteção Anti-DDoS?</h3>
                <p className="text-gray-300">
                  Nossa proteção Anti-DDoS monitora constantemente o tráfego de rede, identificando e mitigando ataques
                  em tempo real. Utilizamos filtros avançados e técnicas de mitigação para garantir que seu servidor
                  permaneça online mesmo durante ataques.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="mb-6 bg-[#0B0E13] border border-gray-800/50 rounded-xl p-6 hover:border-[#9553ff]/30 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-2">Qual a diferença entre VPS e servidor dedicado?</h3>
                <p className="text-gray-300">
                  Um servidor dedicado oferece todo o hardware físico exclusivamente para você, enquanto uma VPS
                  compartilha o hardware físico com outros clientes, mas com recursos dedicados. Servidores dedicados
                  oferecem máximo desempenho e personalização, enquanto VPS oferece boa performance com custo mais
                  acessível.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="mb-6 bg-[#0B0E13] border border-gray-800/50 rounded-xl p-6 hover:border-[#9553ff]/30 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-2">Posso hospedar qualquer tipo de jogo?</h3>
                <p className="text-gray-300">
                  Sim, nossos servidores são otimizados para hospedar diversos tipos de jogos como Minecraft, Palworld,
                  Rust, CS:GO, entre outros. Oferecemos planos específicos para cada tipo de jogo, garantindo o melhor
                  desempenho.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section ref={ctaRef} aria-labelledby="cta-heading" className="w-full py-20 md:py-28" id="fale-conosco">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8"
          >
            <motion.div variants={itemVariants} className="rounded-xl overflow-hidden relative">
              {/* Background com efeito de gradiente */}
              {/* <div className="absolute inset-0 bg-gradient-to-br from-[#0B0E13] to-[#131720] opacity-80"></div> */}
              {/* <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1920')] bg-cover bg-center opacity-10"></div> */}

              {/* Efeito de brilho nos cantos */}
              <div className="absolute top-0 left-0 w-[200px] h-[200px] bg-[#9553ff]/10 blur-[100px] rounded-full"></div>
              <div className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-[#ff3e9d]/10 blur-[100px] rounded-full"></div>

              {/* Borda com gradiente */}
              <div className="absolute inset-0 rounded-xl p-[1px] bg-gradient-to-br from-[#9553ff]/40 via-transparent to-[#ff3e9d]/40"></div>

              <div className="relative p-12 md:p-20 text-center z-10">
                <motion.div variants={itemVariants} className="max-w-3xl mx-auto">
                  <h2 id="cta-heading" className="text-2xl md:text-4xl font-bold text-white mb-6 drop-shadow-lg">
                    Pronto para revolucionar sua experiência de jogo?
                  </h2>
                  <p className="text-lg text-gray-300 mb-8">
                    Junte-se a milhares de clientes satisfeitos e experimente o poder da NeonHost com servidores de alta
                    performance.
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(149, 83, 255, 0.3)" }}
                    whileTap={{ scale: 0.97 }}
                    className="inline-block"
                  >
                    <Link href="https://app.neonhost.com.br/">
                      <Button className="bg-gradient-to-r from-[#9553ff] to-[#ff3e9d] hover:opacity-90 text-white text-lg font-bold px-10 py-6 rounded-xl shadow-lg shadow-[#9553ff]/20">
                        Implante seu servidor agora
                      </Button>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </section>
      </main>
    </>
  )
}
