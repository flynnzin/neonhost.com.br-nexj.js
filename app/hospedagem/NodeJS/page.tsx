"use client"

import { plans } from "./plans"
import { AccordionItems } from "../../_components/accordion"
import {
  Zap,
  Shield,
  Globe,
  Server,
  Cpu,
  HardDrive,
  MemoryStick,
  ChevronDown,
  ChevronUp,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"
import { useState } from "react"

export default function VpsGamer() {
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, 100])
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  const features = [
    {
      icon: <Server className="h-6 w-6" />,
      title: "Recursos Dedicados",
      description: "CPU, RAM e armazenamento exclusivos",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Proteção Avançada",
      description: "Anti-DDoS e firewall configurável",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Performance Premium",
      description: "Hardware de última geração",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Conectividade Premium",
      description: "Rede de alta velocidade no Brasil",
    },
  ]

  const stats = [
    { value: "99.9%", label: "Uptime" },
    { value: "10ms", label: "Latência" },
    { value: "24/7", label: "Suporte" },
    { value: "1Gbps", label: "Rede" },
  ]

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden relative">
      {/* Background com blurs */}
      <div className="fixed inset-0 z-0">
        {/* Grid quadriculado */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-[linear-gradient(rgba(118,67,201,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(118,67,201,0.08)_1px,transparent_1px)] bg-[size:24px_24px]"
            style={{ maskImage: "linear-gradient(transparent, black, transparent)" }}
          ></div>
        </div>

        {/* Efeitos de blur coloridos */}
        <div
          className="absolute inset-0"
          style={{
            background: `
            radial-gradient(600px circle at top left, rgba(126, 34, 206, 0.08) 0%, transparent 50%),
            radial-gradient(600px circle at bottom right, rgba(255, 62, 157, 0.08) 0%, transparent 50%)
          `,
          }}
        />
      </div>

      <section className="relative z-10 max-w-full px-4 md:px-8 lg:px-12 xl:px-16 mx-auto">
        {/* Hero Section */}
        <section className="pt-[25%] md:pt-[15%] lg:pt-[7%] mb-20">
          <div className="text-center mb-12">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-sm font-medium mb-6">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                Servidores Hospedagem Node
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              {/* {" "} */}
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Hospedagem Node
              </span>{" "}
              para seus Projetos
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              Recursos dedicados com a flexibilidade que você precisa. Hardware de ponta, segurança avançada e suporte
              especializado para projetos que exigem alta performance.
            </motion.p>

            {/* Stats em linha */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-8"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-gray-50 border border-gray-200 hover:border-purple-300 transition-all duration-300 group backdrop-blur-sm"
              >
                <div className="p-3 rounded-xl bg-gradient-to-r from-purple-100 to-pink-100 text-purple-600 w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Planos Section - Cards Expansíveis */}
        <section className="py-20" id="plans">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Escolha seu{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Plano Ideal
              </span>
            </h2>
            <p className="text-gray-600 mx-auto text-lg max-w-2xl">
              Planos Hospedagem Node com recursos garantidos e performance superior para seus projetos mais exigentes.
            </p>
          </div>

          {/* Cards Expansíveis */}
          <div className="space-y-6 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-gray-50 backdrop-blur-sm border border-gray-200 hover:border-purple-300 rounded-2xl transition-all duration-300"
              >
                {/* Header do Card */}
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    {/* Left Section - Plan Info */}
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                        className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                      >
                        {expandedCard === index ? (
                          <ChevronUp className="h-4 w-4 text-purple-600" />
                        ) : (
                          <ChevronDown className="h-4 w-4 text-purple-600" />
                        )}
                      </button>
                      <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                    </div>

                    {/* Middle Section - Specifications Grid */}
                    <div className="hidden lg:grid grid-cols-3 gap-8">
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <MemoryStick className="h-4 w-4 text-purple-600" />
                          <span className="font-semibold text-gray-900">{plan.description.ram}</span>
                        </div>
                        <span className="text-xs text-gray-600">Memoria RAM</span>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <Cpu className="h-4 w-4 text-purple-600" />
                          <span className="font-semibold text-gray-900">{plan.description.cores}</span>
                        </div>
                        <span className="text-xs text-gray-600">CPU Cores</span>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <HardDrive className="h-4 w-4 text-purple-600" />
                          <span className="font-semibold text-gray-900">{plan.description.ssd}</span>
                        </div>
                        <span className="text-xs text-gray-600">SSD NVMe</span>
                      </div>
                    </div>

                    {/* Right Section - Price and Button */}
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl md:text-3xl font-bold text-gray-900">R${plan.price}</span>
                          <span className="text-sm text-gray-600"></span>
                        </div>
                      </div>

                      {plan.link ? (
                        <Link href={plan.link} target="_blank">
                          <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300">
                            Contratar Agora
                          </button>
                        </Link>
                      ) : (
                        <button className="bg-gray-300 text-gray-500 cursor-not-allowed px-6 py-3 rounded-xl" disabled>
                          Sem Estoque
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Mobile Specifications */}
                  <div className="lg:hidden mt-4 pt-4 border-t border-gray-200">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <MemoryStick className="h-4 w-4 text-purple-600" />
                          <span className="font-semibold text-gray-900">{plan.description.ram}</span>
                        </div>
                        <span className="text-xs text-gray-600">RAM</span>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <Cpu className="h-4 w-4 text-purple-600" />
                          <span className="font-semibold text-gray-900">{plan.description.cores}</span>
                        </div>
                        <span className="text-xs text-gray-600">CPU</span>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <HardDrive className="h-4 w-4 text-purple-600" />
                          <span className="font-semibold text-gray-900">{plan.description.ssd}</span>
                        </div>
                        <span className="text-xs text-gray-600">SSD</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expanded Content */}
                <motion.div
                  initial={false}
                  animate={{ height: expandedCard === index ? "auto" : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 border-t border-gray-200">
                    <div className="pt-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Recursos inclusos:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {plan.description.attrs.map((attr, attrIndex) => (
                          <div key={attrIndex} className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{attr}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="rounded-2xl bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 p-8 md:p-12 text-center backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Precisa de uma configuração personalizada?
            </h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Nossa equipe de especialistas pode criar uma solução sob medida para suas necessidades específicas.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700 font-bold px-8 py-3 rounded-xl transition-all duration-300">
              Falar com Especialista
            </button>
          </div>
        </section>
      </section>
    </div>
  )
}
