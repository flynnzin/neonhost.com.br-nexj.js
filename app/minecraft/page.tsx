"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { minecraftPlans } from "./plans"
import {
  Users,
  Database,
  Cpu,
  HardDrive,
  Check,
  ArrowRight,
  Crown,
  Star,
  ChevronDown,
  ChevronUp,
  Shield,
  Zap,
  Headphones,
  Wrench,
  Rocket,
  Server,
  Globe,
  Lock,
  Gauge,
  Package,
  RefreshCw,
} from "lucide-react"

export default function MinecraftPage() {
  const [selectedEdition, setSelectedEdition] = useState<"java" | "bedrock">("java")
  const [expandedPlan, setExpandedPlan] = useState<string | null>(null)

  const togglePlan = (planId: string) => {
    setExpandedPlan(expandedPlan === planId ? null : planId)
  }

  const filteredPlans = minecraftPlans.filter((plan) => plan.edition === selectedEdition)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full">
                <Zap className="w-4 h-4 text-purple-600" />
                <span className="text-purple-700 text-sm font-medium">Powered by AMD Ryzen 9 7900x</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-balance">
                <span className="text-gray-900">Servidores Minecraft</span>
                <br />
                <span className="text-purple-600">de alta performance</span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed text-pretty">
                Crie experiências incríveis com processadores de última geração e proteção Anti-DDoS ilimitada.
              </p>

              {/* <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center shadow-lg shadow-purple-500/25">
                  Começar Agora
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border-2 border-purple-200 text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-xl font-semibold transition-all duration-300">
                  Ver Planos
                </button>
              </div> */}
            </motion.div>

            {/* Right Content - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative flex justify-center lg:justify-end"
            >
              <div className="relative w-[400px] h-[400px] bg-gradient-to-br from-purple-100 to-purple-50 rounded-3xl flex items-center justify-center shadow-xl">
                <Image src="/games/1.webp" alt="Minecraft Server" width={300} height={300} className="object-contain" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white border-y border-gray-100">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Server, value: "99.9%", label: "Uptime garantido" },
              { icon: Gauge, value: "<5ms", label: "Latência média" },
              { icon: Globe, value: "24/7", label: "Suporte ativo" },
              { icon: Lock, value: "100%", label: "Proteção DDoS" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-purple-100 rounded-2xl mb-4">
                  <stat.icon className="w-7 h-7 text-purple-600" />
                </div>
                <p className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automatic Features Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-purple-50">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">
              Gerenciamento <span className="text-purple-600">automático</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
              Instale mods e troque versões com apenas um clique através do nosso painel avançado
            </p>
          </motion.div>

          <div className="space-y-16">
            {/* Mod Installer - Left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            >
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full">
                  <Package className="w-4 h-4 text-purple-600" />
                  <span className="text-purple-700 text-sm font-medium">Instalação Automática</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 text-balance">
                  Instalador de Mods Automático
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed text-pretty">
                  Escolha entre dezenas de versões do Minecraft incluindo Vanilla, Paper, Fabric, Forge, Spigot e muito
                  mais. Instale com apenas um clique e comece a jogar imediatamente.
                </p>
                <ul className="space-y-3">
                  {[
                    "Suporte para todas as versões populares",
                    "Instalação com um clique",
                    "Configuração automática otimizada",
                    "Compatibilidade garantida",
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-purple-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src="/images/minecraft/2.png"
                    alt="Instalador de Mods Automático"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-600 rounded-full blur-3xl opacity-20"></div>
              </div>
            </motion.div>

            {/* Version Changer - Right (offset down) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:mt-20"
            >
              <div className="relative order-2 lg:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <Image
                    src="/images/minecraft/1.png"
                    alt="Mudança Automática de Versão"
                    width={800}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-600 rounded-full blur-3xl opacity-20"></div>
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full">
                  <RefreshCw className="w-4 h-4 text-purple-600" />
                  <span className="text-purple-700 text-sm font-medium">Atualização Instantânea</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 text-balance">
                  Mudança de Versão Automática
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed text-pretty">
                  Navegue por milhares de modpacks populares do CurseForge e instale diretamente no seu servidor.
                  Atualize ou troque de versão sem complicação e sem perder seus dados.
                </p>
                <ul className="space-y-3">
                  {[
                    "Acesso a milhares de modpacks",
                    "Atualização sem downtime",
                    "Backup automático antes de trocar",
                    "Rollback com um clique",
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
                        <Check className="w-4 h-4 text-purple-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-purple-50">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">
              Escolha o plano <span className="text-purple-600">perfeito</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
              Todos os planos incluem AMD Ryzen 9 7900x e proteção Anti-DDoS ilimitada
            </p>
          </motion.div>

          {/* Edition Selector */}
          <div className="flex justify-center mb-12">
            <div className="flex bg-white border border-gray-200 rounded-xl p-1 shadow-sm">
              <button
                onClick={() => setSelectedEdition("java")}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                  selectedEdition === "java"
                    ? "bg-purple-600 text-white shadow-md"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <Database className="w-4 h-4" />
                Java Edition
              </button>
            </div>
          </div>

          {/* Plans Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-6">
            {filteredPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div
                  className={`relative bg-white border-2 transition-all duration-300 hover:shadow-xl rounded-2xl overflow-visible h-full ${
                    plan.isPopular
                      ? "border-purple-500 shadow-lg shadow-purple-500/10"
                      : plan.isRecommended
                        ? "border-purple-400 shadow-lg shadow-purple-400/10"
                        : "border-gray-200 hover:border-purple-300"
                  }`}
                >
                  {plan.isPopular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white px-4 py-1.5 rounded-full text-sm font-semibold inline-flex items-center shadow-md z-10 whitespace-nowrap">
                      <Crown className="w-3.5 h-3.5 mr-1.5" />
                      Mais Popular
                    </div>
                  )}
                  {plan.isRecommended && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold inline-flex items-center shadow-md z-10 whitespace-nowrap">
                      <Star className="w-3.5 h-3.5 mr-1.5" />
                      Recomendado
                    </div>
                  )}

                  <div className="p-8">
                    {/* Plan Header */}
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-center gap-3">
                          <span className="text-4xl font-bold text-purple-600">R$ {plan.price.toFixed(2)}</span>
                          {plan.originalPrice && (
                            <span className="text-lg text-gray-400 line-through">
                              R$ {plan.originalPrice.toFixed(2)}
                            </span>
                          )}
                        </div>
                        {plan.discount && (
                          <div className="inline-block bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                            {plan.discount}% OFF
                          </div>
                        )}
                        <p className="text-sm text-gray-500">/mês</p>
                      </div>
                    </div>

                    {/* Specs Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      <div className="bg-purple-50 border border-purple-100 rounded-xl p-3 text-center">
                        <Users className="w-5 h-5 text-purple-600 mx-auto mb-1" />
                        <p className="text-xs text-gray-600">Jogadores</p>
                        <p className="text-sm font-bold text-gray-900">{plan.players}</p>
                      </div>
                      <div className="bg-purple-50 border border-purple-100 rounded-xl p-3 text-center">
                        <Database className="w-5 h-5 text-purple-600 mx-auto mb-1" />
                        <p className="text-xs text-gray-600">RAM</p>
                        <p className="text-sm font-bold text-gray-900">{plan.ram}</p>
                      </div>
                      <div className="bg-purple-50 border border-purple-100 rounded-xl p-3 text-center">
                        <Cpu className="w-5 h-5 text-purple-600 mx-auto mb-1" />
                        <p className="text-xs text-gray-600">CPU</p>
                        <p className="text-sm font-bold text-gray-900">{plan.cpu}</p>
                      </div>
                      <div className="bg-purple-50 border border-purple-100 rounded-xl p-3 text-center">
                        <HardDrive className="w-5 h-5 text-purple-600 mx-auto mb-1" />
                        <p className="text-xs text-gray-600">Storage</p>
                        <p className="text-sm font-bold text-gray-900">{plan.storage}</p>
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="space-y-3 mb-6">
                      {plan.features
                        .slice(0, expandedPlan === plan.id ? plan.features.length : 4)
                        .map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-sm">
                            <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                    </div>

                    {plan.features.length > 4 && (
                      <button
                        onClick={() => togglePlan(plan.id)}
                        className="w-full text-purple-600 hover:bg-purple-50 px-4 py-2 rounded-xl transition-all duration-300 text-sm font-medium flex items-center justify-center mb-4"
                      >
                        {expandedPlan === plan.id ? (
                          <>
                            Ver menos <ChevronUp className="w-4 h-4 ml-1" />
                          </>
                        ) : (
                          <>
                            Ver todos os recursos <ChevronDown className="w-4 h-4 ml-1" />
                          </>
                        )}
                      </button>
                    )}

                    {/* CTA Button */}
                    <button
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center shadow-md"
                      onClick={() => window.open(plan.paymentLink, "_blank")}
                    >
                      Contratar Agora
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">
              Recursos <span className="text-purple-600">exclusivos</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
              Tudo que você precisa para criar o servidor Minecraft perfeito
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Rocket,
                title: "AMD Ryzen 9 7900x",
                description: "Processadores de última geração com 12 núcleos e 24 threads para performance máxima",
              },
              {
                icon: Shield,
                title: "Proteção Anti-DDoS",
                description: "Proteção ilimitada contra ataques DDoS incluída em todos os planos",
              },
              {
                icon: Database,
                title: "Backup Automático",
                description: "Backups diários automáticos para garantir a segurança dos seus mundos",
              },
              {
                icon: Zap,
                title: "Instalação Instantânea",
                description: "Modpacks e plugins instalados com apenas um clique através do painel",
              },
              {
                icon: Headphones,
                title: "Suporte 24/7",
                description: "Equipe especializada disponível 24 horas por dia, 7 dias por semana",
              },
              {
                icon: Wrench,
                title: "Painel Avançado",
                description: "Controle total do seu servidor através do nosso painel intuitivo",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 h-full rounded-2xl p-8">
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-purple-100 rounded-2xl">
                      <feature.icon className="w-7 h-7 text-purple-600" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-purple-50 to-white">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-3xl p-12 md:p-16 text-center shadow-xl"
          >
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white text-balance">
                Pronto para começar sua aventura?
              </h2>
              <p className="text-xl text-purple-100 max-w-2xl mx-auto text-pretty">
                Crie seu servidor Minecraft agora e receba migração gratuita dos seus mundos existentes
              </p>

              {/* <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <button className="bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center shadow-lg">
                  Começar Agora
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center">
                  <Headphones className="w-5 h-5 mr-2" />
                  Falar com Suporte
                </button>
              </div> */}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
