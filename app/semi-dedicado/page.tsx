"use client"

import { Button } from "@nextui-org/react"
import { plans } from "./plans"
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
import Image from "next/image"
import { useState } from "react"

export default function VpsGamer() {
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
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 overflow-hidden relative">
      {/* Background com grid sutil */}
      <div className="fixed inset-0 z-0">
        {/* Grid quadriculado sutil */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:24px_24px]"
            style={{ maskImage: "linear-gradient(transparent, black, transparent)" }}
          ></div>
        </div>

        {/* Efeitos de blur muito sutis */}
        <div
          className="absolute inset-0"
          style={{
            background: `
            radial-gradient(600px circle at top left, rgba(99, 102, 241, 0.03) 0%, transparent 50%),
            radial-gradient(600px circle at bottom right, rgba(168, 85, 247, 0.03) 0%, transparent 50%)
          `,
          }}
        />
      </div>

      <section className="relative z-10 max-w-full px-4 md:px-8 lg:px-12 xl:px-16 mx-auto">
        {/* Hero Section */}
        <section className="pt-[25%] md:pt-[15%] lg:pt-[7%] mb-20">
          <div className="text-center mb-12">
            <div>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-50 dark:bg-indigo-900/50 border border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-300 text-sm font-medium mb-6">
                <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
                Servidores Semi-Dedicados
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="text-indigo-600">Semi-Dedicado</span> para seus Projetos
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              Recursos dedicados com a flexibilidade que você precisa. Hardware de ponta, segurança avançada e suporte
              especializado para projetos que exigem alta performance.
            </p>

            {/* Stats em linha */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-indigo-600">{stat.value}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-600 transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Planos Section - Cards Expansíveis */}
        <section className="py-20" id="plans">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Escolha seu <span className="text-indigo-600">Plano Ideal</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mx-auto text-lg max-w-2xl">
              Planos Semi-Dedicados com recursos garantidos e performance superior para seus projetos mais exigentes.
            </p>

            <div className="flex flex-col items-center gap-3 mt-8">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <circle cx="12" cy="12" r="8" />
                </svg>
                Localização do Servidor
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900 dark:bg-gray-800 border border-gray-700">
                <Image src="/br.png" alt="Minecraft Server" width={20} height={10} className="object-contain" />
                <span className="text-white font-medium">São Paulo</span>
              </div>
            </div>
          </div>

          {/* Cards Expansíveis */}
          <div className="space-y-6 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className="group relative bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-600 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md"
              >
                {/* Header do Card */}
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    {/* Left Section - Plan Info */}
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                        className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                      >
                        {expandedCard === index ? (
                          <ChevronUp className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                        ) : (
                          <ChevronDown className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                        )}
                      </button>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{plan.name}</h3>
                      </div>
                    </div>

                    {/* Middle Section - Specifications Grid */}
                    <div className="hidden lg:grid grid-cols-3 gap-8">
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <MemoryStick className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                          <span className="font-semibold text-gray-900 dark:text-white">{plan.description.ram}</span>
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400">RAM Dedicada</span>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <Cpu className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                          <span className="font-semibold text-gray-900 dark:text-white">{plan.description.cores}</span>
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400">CPU Cores</span>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <HardDrive className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                          <span className="font-semibold text-gray-900 dark:text-white">{plan.description.ssd}</span>
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400">SSD NVMe</span>
                      </div>
                    </div>

                    {/* Right Section - Price and Button */}
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                            R${plan.price}
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400"></span>
                        </div>
                      </div>

                      {plan.link ? (
                        <Link href={plan.link} target="_blank">
                          <Button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300">
                            Contratar Agora
                          </Button>
                        </Link>
                      ) : (
                        <Button className="bg-gray-300 text-gray-500 cursor-not-allowed px-6 py-3 rounded-xl" disabled>
                          Sem Estoque
                        </Button>
                      )}
                    </div>
                  </div>

                  {/* Mobile Specifications */}
                  <div className="lg:hidden mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <MemoryStick className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                          <span className="font-semibold text-gray-900 dark:text-white">{plan.description.ram}</span>
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400">RAM</span>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <Cpu className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                          <span className="font-semibold text-gray-900 dark:text-white">{plan.description.cores}</span>
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400">CPU</span>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <HardDrive className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                          <span className="font-semibold text-gray-900 dark:text-white">{plan.description.ssd}</span>
                        </div>
                        <span className="text-xs text-gray-500 dark:text-gray-400">SSD</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expanded Content */}
                <div
                  className={`overflow-hidden ${expandedCard === index ? "h-auto" : "h-0"}`}
                  style={{ transition: "height 0.3s" }}
                >
                  <div className="px-6 pb-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="pt-6">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recursos inclusos:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {plan.description.attrs.map((attr, attrIndex) => (
                          <div key={attrIndex} className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300 text-sm">{attr}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="rounded-2xl bg-indigo-50 dark:bg-indigo-900/50 border border-indigo-200 dark:border-indigo-800 p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Precisa de uma configuração personalizada?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Nossa equipe de especialistas pode criar uma solução sob medida para suas necessidades específicas.
            </p>
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-8 py-3">
              Falar com Especialista
            </Button>
          </div>
        </section>
      </section>
    </div>
  )
}
