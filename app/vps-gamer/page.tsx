"use client"

import { plans } from "./plans"
import { AccordionItems } from "../_components/accordion"
import {
  Info,
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
    <div className="min-h-screen bg-[#0a0a0e] text-white overflow-hidden relative">
      {/* Background com blurs */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-500/15 via-purple-500/8 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-pink-500/15 via-pink-500/8 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
        </div>
      </div>

      <section className="relative z-10 max-w-full px-4 md:px-8 lg:px-12 xl:px-16 mx-auto">
        {/* Hero Section */}
        <section className="pt-[25%] md:pt-[15%] lg:pt-[7%] mb-20">
          <div className="text-center mb-12">
            <div>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                Servidores VPS Gamer
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                VPS Gamer
              </span>{" "}
              para seus Projetos
            </h1>

            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Recursos dedicados com a flexibilidade que você precisa. Hardware de ponta, segurança avançada e suporte
              especializado para projetos que exigem alta performance.
            </p>

            {/* Stats em linha */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
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
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all duration-300 group backdrop-blur-sm"
              >
                <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Planos Section - Cards Compactos */}
        <section className="py-20" id="plans">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Escolha seu{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Plano Ideal
              </span>
            </h2>
            <p className="text-gray-400 mx-auto text-lg max-w-2xl">
              Planos VPS Gamer com recursos garantidos e performance superior para seus projetos mais exigentes.
            </p>
          </div>

          {/* Cards Compactos */}
          <div className="space-y-4 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className="group relative bg-[#0f0f1a] backdrop-blur-sm border border-white/10 hover:border-purple-500/30 rounded-xl transition-all duration-300 overflow-hidden"
              >
                {/* Linha sutil no topo */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="p-4 lg:p-5">
                  {/* Header Compacto */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    {/* Left Section */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                        className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 hover:border-purple-500/30 flex items-center justify-center transition-all duration-300 hover:bg-white/10 flex-shrink-0"
                      >
                        {expandedCard === index ? (
                          <ChevronUp className="h-4 w-4 text-purple-400" />
                        ) : (
                          <ChevronDown className="h-4 w-4 text-purple-400" />
                        )}
                      </button>

                      <div>
                        <h3 className="text-lg lg:text-xl font-bold text-white">{plan.name}</h3>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                          <span className="text-xs text-gray-400">Disponível</span>
                        </div>
                      </div>
                    </div>

                    {/* Especificações Inline */}
                    <div className="hidden md:flex items-center gap-6 text-sm">
                      <div className="flex items-center gap-2">
                        <MemoryStick className="h-4 w-4 text-purple-400" />
                        <span className="text-white font-medium">{plan.description.ram}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Cpu className="h-4 w-4 text-pink-400" />
                        <span className="text-white font-medium">{plan.description.cores}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <HardDrive className="h-4 w-4 text-blue-400" />
                        <span className="text-white font-medium">{plan.description.ssd}</span>
                      </div>
                    </div>

                    {/* Right Section - Preço e Botão */}
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-2xl lg:text-3xl font-bold text-white">
                          R${plan.price}
                          <span className="text-sm text-gray-400 font-normal">/mês</span>
                        </div>
                      </div>

                      {plan.link ? (
                        <Link href={plan.link} target="_blank">
                          <button className="px-5 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300 whitespace-nowrap text-sm">
                            Contratar
                          </button>
                        </Link>
                      ) : (
                        <button
                          className="px-5 py-2.5 bg-gray-600/50 text-gray-400 cursor-not-allowed rounded-lg font-semibold whitespace-nowrap text-sm"
                          disabled
                        >
                          Sem Estoque
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Especificações Mobile */}
                  <div className="md:hidden mt-4 pt-4 border-t border-white/10">
                    <div className="grid grid-cols-3 gap-3 text-sm">
                      <div className="flex items-center gap-2">
                        <MemoryStick className="h-4 w-4 text-purple-400" />
                        <span className="text-white font-medium">{plan.description.ram}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Cpu className="h-4 w-4 text-pink-400" />
                        <span className="text-white font-medium">{plan.description.cores}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <HardDrive className="h-4 w-4 text-blue-400" />
                        <span className="text-white font-medium">{plan.description.ssd}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Conteúdo Expandido Compacto */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    expandedCard === index ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-4 lg:px-5 pb-4 lg:pb-5 border-t border-white/10">
                    <div className="pt-4">
                      <h4 className="text-base font-semibold text-white mb-3 flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        Recursos inclusos
                      </h4>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {plan.description.attrs.map((attr, attrIndex) => (
                          <div key={attrIndex} className="flex items-center gap-2 text-sm">
                            <div className="w-1 h-1 rounded-full bg-purple-400 flex-shrink-0"></div>
                            <span className="text-gray-300">{attr}</span>
                          </div>
                        ))}
                      </div>

                      {/* Badge de Garantia Compacto */}
                      <div className="mt-4 p-2.5 rounded-lg bg-green-500/10 border border-green-500/20">
                        <div className="flex items-center gap-2 text-green-400 text-sm">
                          <Shield className="h-3.5 w-3.5" />
                          <span>Garantia de 99.9% de Uptime</span>
                        </div>
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
          <div className="rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 p-8 md:p-12 text-center backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Precisa de uma configuração personalizada?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Nossa equipe de especialistas pode criar uma solução sob medida para suas necessidades específicas.
            </p>
            <button className="bg-white text-purple-600 hover:bg-white/90 font-bold px-8 py-3">
              Falar com Especialista
            </button>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-16 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Tire suas dúvidas sobre nossos serviços VPS Gamer.</p>
          </div>
          <AccordionItems />
        </section>

        {/* Support Section */}
        <section className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4">
              Suporte Especializado
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Nossa equipe está pronta para ajudar você 24 horas por dia, 7 dias por semana.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
            {[
              {
                icon: <Info size={48} />,
                title: "Consultoria Especializada",
                description: "Ajudamos você a escolher a melhor configuração para seu projeto específico.",
                link: "https://discord.gg/rGP7prMqF3",
                buttonText: "Falar com Consultor",
              },
              {
                icon: <Info size={48} />,
                title: "Suporte 24/7",
                description:
                  "Suporte técnico especializado disponível 24 horas por dia para resolver qualquer problema.",
                link: "https://discord.gg/rGP7prMqF3",
                buttonText: "Acessar Suporte",
              },
              {
                icon: <Info size={48} />,
                title: "Central de Ajuda",
                description: "Base de conhecimento com tutoriais e guias para otimizar seu servidor.",
                link: "https://app.neonhost.com.br/submitticket.php?step=2&deptid=1",
                buttonText: "Ver Tutoriais",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 border-none bg-white/5 hover:bg-white/10 transition-all duration-300 group backdrop-blur-sm"
              >
                <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="font-bold text-white text-xl mb-3">{item.title}</h3>
                <p className="text-gray-400 mb-6">{item.description}</p>
                <Link href={item.link} target="_blank">
                  <button className="w-full text-white/80 hover:text-white transition-colors duration-200">
                    {item.buttonText}
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </section>
    </div>
  )
}
