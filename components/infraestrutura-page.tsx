"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Globe, Server, ShieldCheck, Cable, Database, Cloud, Users } from "lucide-react"
import NetworkTopologyDisplay from "./network-topology-display"

export default function InfraestruturaPage() {
  const heroRef = useRef(null)
  const popsRef = useRef(null)
  const techRef = useRef(null)
  const partnersRef = useRef(null)

  const isPopsInView = useInView(popsRef, { once: true, amount: 0.3 })
  const isTechInView = useInView(techRef, { once: true, amount: 0.3 })
  const isPartnersInView = useInView(partnersRef, { once: true, amount: 0.3 })

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

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white overflow-x-hidden">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
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
                  Nossa
                </span>
              </span>{" "}
              <span className="inline-block">
                <span className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
                  Infraestrutura
                </span>
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Descubra a base sólida que garante a performance e a segurança dos seus projetos. Infraestrutura de ponta
              para a sua tranquilidade.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Global Reach and PoPs Section */}
      <section ref={popsRef} className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative"
              style={{
                opacity: isPopsInView ? 1 : 0,
                transform: isPopsInView ? "none" : "translateX(-30px)",
              }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >

            </motion.div>

            <motion.div
              style={{
                opacity: isPopsInView ? 1 : 0,
                transform: isPopsInView ? "none" : "translateY(30px)",
              }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                  Conectividade Global e Pontos de Presença (PoPs)
                </span>
              </h2>

              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Nossa infraestrutura de rede se estende por pontos estratégicos, garantindo baixa latência e alta
                disponibilidade para seus usuários em qualquer lugar.
              </p>

              <ul className="space-y-4">
                <motion.li
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <div className="flex-shrink-0 bg-gradient-to-br from-pink-500 to-purple-600 p-1 rounded-full">
                    <Globe className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Cobertura Ampla</h4>
                    <p className="text-gray-600 dark:text-gray-400">Servidores e pontos de presença estrategicamente localizados.</p>
                  </div>
                </motion.li>

                <motion.li
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <div className="flex-shrink-0 bg-gradient-to-br from-pink-500 to-purple-600 p-1 rounded-full">
                    <Server className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Baixa Latência</h4>
                    <p className="text-gray-600 dark:text-gray-400">Conexões otimizadas para a melhor experiência do usuário.</p>
                  </div>
                </motion.li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tecnologia e Segurança Section */}
      <section ref={techRef} className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Tecnologia de Ponta e Segurança Inabalável
            </span>
          </motion.h2>

          <motion.p
            className="text-lg text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Investimos continuamente nas melhores tecnologias para garantir que sua infraestrutura esteja sempre
            protegida e operando com máxima eficiência.
          </motion.p>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Card: Hardware de Última Geração */}
            <motion.div
              className="group rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-6 transition-all hover:border-pink-500/30"
              variants={fadeInUp}
              whileHover={{
                y: -10,
                boxShadow: "0 10px 30px -10px rgba(233, 30, 99, 0.3)",
              }}
            >
              <div className="mb-4 flex justify-center">
                <div className="inline-flex rounded-lg bg-gradient-to-r from-purple-600/10 to-pink-500/10 p-3">
                  <Database className="h-8 w-8 text-pink-500" />
                </div>
              </div>
              <h3 className="mb-4 text-center text-xl font-bold text-gray-900">Hardware de Última Geração</h3>
              <p className="text-center text-gray-600 dark:text-gray-400">
                Utilizamos os mais recentes processadores e SSDs NVMe para performance superior e confiabilidade.
              </p>
            </motion.div>

            {/* Card: Proteção Anti-DDoS */}
            <motion.div
              className="group rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-6 transition-all hover:border-pink-500/30"
              variants={fadeInUp}
              whileHover={{
                y: -10,
                boxShadow: "0 10px 30px -10px rgba(233, 30, 99, 0.3)",
              }}
            >
              <div className="mb-4 flex justify-center">
                <div className="inline-flex rounded-lg bg-gradient-to-r from-purple-600/10 to-pink-500/10 p-3">
                  <ShieldCheck className="h-8 w-8 text-pink-500" />
                </div>
              </div>
              <h3 className="mb-4 text-center text-xl font-bold text-gray-900">Proteção Anti-DDoS</h3>
              <p className="text-center text-gray-600 dark:text-gray-400">
                Defesa robusta contra os ataques mais sofisticados, garantindo a estabilidade dos seus serviços.
              </p>
            </motion.div>

            {/* Card: Redundância e Uptime */}
            <motion.div
              className="group rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-6 transition-all hover:border-pink-500/30"
              variants={fadeInUp}
              whileHover={{
                y: -10,
                boxShadow: "0 10px 30px -10px rgba(233, 30, 99, 0.3)",
              }}
            >
              <div className="mb-4 flex justify-center">
                <div className="inline-flex rounded-lg bg-gradient-to-r from-purple-600/10 to-pink-500/10 p-3">
                  <Cloud className="h-8 w-8 text-pink-500" />
                </div>
              </div>
              <h3 className="mb-4 text-center text-xl font-bold text-gray-900">Redundância e Uptime</h3>
              <p className="text-center text-gray-600 dark:text-gray-400">
                Sistemas redundantes e monitoramento 24/7 para garantir o máximo de tempo de atividade.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Conectividade e Parceiros Section */}
      <section ref={partnersRef} className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              style={{
                opacity: isPartnersInView ? 1 : 0,
                transform: isPartnersInView ? "none" : "translateY(30px)",
              }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                  Conectividade e Parceiros Estratégicos
                </span>
              </h2>

              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                Estabelecemos parcerias com os principais provedores de backbone e pontos de troca de internet (IXPs)
                para garantir a conectividade mais rápida e eficiente.
              </p>

              <ul className="space-y-4">
                <motion.li
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <div className="flex-shrink-0 bg-gradient-to-br from-pink-500 to-purple-600 p-1 rounded-full">
                    <Cable className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Múltiplas Conexões</h4>
                    <p className="text-gray-600 dark:text-gray-400">Diversidade de links para alta disponibilidade e desempenho.</p>
                  </div>
                </motion.li>

                <motion.li
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <div className="flex-shrink-0 bg-gradient-to-br from-pink-500 to-purple-600 p-1 rounded-full">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Parceiros de Confiança</h4>
                    <p className="text-gray-600 dark:text-gray-400">Colaboração com líderes do setor para excelência em conectividade.</p>
                  </div>
                </motion.li>
              </ul>
            </motion.div>

            <motion.div
              className="relative"
              style={{
                opacity: isPartnersInView ? 1 : 0,
                transform: isPartnersInView ? "none" : "translateX(30px)",
              }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >


            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
