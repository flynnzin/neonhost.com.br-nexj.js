"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { minecraftPlans } from "./plans" // Importa os planos
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
  Play,
} from "lucide-react"

export default function MinecraftPage() {
  const [selectedEdition, setSelectedEdition] = useState<"java" | "bedrock">("java")
  const [expandedPlan, setExpandedPlan] = useState<string | null>(null)

  const togglePlan = (planId: string) => {
    setExpandedPlan(expandedPlan === planId ? null : planId)
  }

  // Filtra os planos com base na edição selecionada
  const filteredPlans = minecraftPlans.filter((plan) => plan.edition === selectedEdition)

  return (
    <div className="min-h-screen relative bg-white">
      {/* White Theme Grid Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.08)_1px,transparent_1px)] bg-[size:24px_24px]"
          style={{ maskImage: "linear-gradient(transparent, black, transparent)" }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="inline-block"
                >
                  <div className="bg-indigo-50 text-indigo-600 border border-indigo-200 mb-4 px-3 py-1 rounded-full text-sm font-medium inline-flex items-center">
                    <Zap className="w-3 h-3 mr-1" />
                    Servidores de Alta Performance
                  </div>
                </motion.div>

                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  <span className="text-gray-900">Eleve o nível do seu </span>
                  <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent">
                    servidor
                  </span>
                  <br />
                  <span className="text-gray-900">de minecraft</span>
                </h1>

                <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                  Profissionalize seu servidor com <span className="text-indigo-600 font-semibold">AMD Ryzen 9</span> e
                  proteção <span className="text-purple-600 font-semibold">Anti-DDoS</span> de alta capacidade!
                </p>
              </div>
            </motion.div>

            {/* Right Content - Minecraft Character with Subtle Effects */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="relative w-80 h-80 bg-gray-50 rounded-2xl border border-gray-200 flex items-center justify-center shadow-lg">
                  <div className="relative z-10">
                    <Image
                      src="/games/1.webp"
                      alt="Minecraft Server"
                      width={200}
                      height={200}
                      className="object-contain"
                    />
                  </div>
                </div>

                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute -top-6 -right-6 w-12 h-12 bg-indigo-500 rounded-lg shadow-lg flex items-center justify-center"
                >
                  <Database className="w-6 h-6 text-white" />
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute -bottom-6 -left-6 w-10 h-10 bg-purple-500 rounded-lg shadow-lg flex items-center justify-center"
                >
                  <Shield className="w-5 h-5 text-white" />
                </motion.div>

                <motion.div
                  animate={{ x: [-5, 5, -5] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute top-1/2 -left-8 w-8 h-8 bg-indigo-400 rounded-lg shadow-lg flex items-center justify-center"
                >
                  <Zap className="w-4 h-4 text-white" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Escolha seu{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                plano ideal
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Servidores otimizados para Minecraft com processadores de{" "}
              <span className="text-indigo-600">alta performance</span>
            </p>
          </motion.div>

          {/* Edition Selector */}
          <div className="flex justify-center mb-12">
            <div className="flex bg-gray-100 rounded-xl p-1 border border-gray-200">
              <button
                onClick={() => setSelectedEdition("java")}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedEdition === "java"
                    ? "bg-indigo-500 text-white shadow-lg"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                <Database className="w-4 h-4" />
                Java Edition
              </button>
            </div>
          </div>

          {/* Plans Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className={`relative bg-white border transition-all duration-300 hover:shadow-lg rounded-lg ${
                    plan.isPopular
                      ? "border-indigo-200 shadow-md shadow-indigo-100"
                      : plan.isRecommended
                        ? "border-purple-200 shadow-md shadow-purple-100"
                        : "border-gray-200 hover:border-indigo-200"
                  }`}
                >
                  {plan.isPopular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-medium inline-flex items-center">
                      <Crown className="w-3 h-3 mr-1" />
                      Mais Popular
                    </div>
                  )}
                  {plan.isRecommended && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium inline-flex items-center">
                      <Star className="w-3 h-3 mr-1" />
                      Recomendado
                    </div>
                  )}

                  <div className="text-center pb-4 relative z-10 p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                          R$ {plan.price.toFixed(2)}
                        </span>
                        {plan.originalPrice && (
                          <span className="text-lg text-gray-400 line-through">R$ {plan.originalPrice.toFixed(2)}</span>
                        )}
                      </div>
                      {plan.discount && (
                        <div className="bg-green-500 text-white px-2 py-1 rounded text-sm font-medium inline-block">
                          {plan.discount}% OFF
                        </div>
                      )}
                      <p className="text-sm text-gray-500">/mês</p>
                    </div>
                  </div>

                  <div className="space-y-4 relative z-10 p-6 pt-0">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-indigo-500" />
                        <span className="text-gray-700">{plan.players} jogadores</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Database className="w-4 h-4 text-purple-500" />
                        <span className="text-gray-700">{plan.ram} RAM</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-indigo-500" />
                        <span className="text-gray-700">{plan.cpu}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <HardDrive className="w-4 h-4 text-purple-500" />
                        <span className="text-gray-700">{plan.storage}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      {plan.features
                        .slice(0, expandedPlan === plan.id ? plan.features.length : 4)
                        .map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm">
                            <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                    </div>

                    {plan.features.length > 4 && (
                      <button
                        onClick={() => togglePlan(plan.id)}
                        className="w-full text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium flex items-center justify-center"
                      >
                        {expandedPlan === plan.id ? (
                          <>
                            Ver menos <ChevronUp className="w-4 h-4 ml-1" />
                          </>
                        ) : (
                          <>
                            Ver mais recursos <ChevronDown className="w-4 h-4 ml-1" />
                          </>
                        )}
                      </button>
                    )}

                    <button
                      className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-lg px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center"
                      onClick={() => window.open(plan.paymentLink, "_blank")}
                    >
                      Contratar Agora
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Por que escolher a{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                NeonHost
              </span>
              ?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Recursos exclusivos para garantir a melhor experiência no seu servidor Minecraft
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Rocket,
                title: "AMD Ryzen 9 7950X",
                description: "Processadores de última geração para máxima performance",
                color: "from-indigo-500 to-purple-600",
              },
              {
                icon: Shield,
                title: "Proteção Anti-DDoS",
                description: "Proteção avançada contra ataques DDoS incluída gratuitamente",
                color: "from-purple-500 to-indigo-600",
              },
              {
                icon: Database,
                title: "Backup Automático",
                description: "Backups diários automáticos para proteger seus mundos",
                color: "from-indigo-500 to-blue-600",
              },
              {
                icon: Zap,
                title: "Instalação Instantânea",
                description: "Modpacks e plugins instalados com apenas um clique",
                color: "from-purple-500 to-pink-600",
              },
              {
                icon: Headphones,
                title: "Suporte 24/7",
                description: "Equipe especializada disponível 24 horas por dia",
                color: "from-indigo-500 to-purple-600",
              },
              {
                icon: Wrench,
                title: "Painel Avançado",
                description: "Controle total do seu servidor através do nosso painel",
                color: "from-purple-500 to-indigo-600",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-white border border-gray-200 hover:border-indigo-200 hover:shadow-lg transition-all duration-300 h-full group rounded-lg">
                  <div className="p-6 text-center relative z-10">
                    <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                      <feature.icon className="w-12 h-12 text-indigo-500 group-hover:text-purple-500 transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative bg-gray-50 rounded-2xl p-12 border border-gray-200 shadow-lg">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-4xl font-bold text-gray-900">
                    Pronto para criar seu servidor dos{" "}
                    <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      sonhos
                    </span>
                    ?
                  </h2>
                  <p className="text-xl text-gray-600">
                    Comece agora mesmo e receba <span className="text-indigo-600 font-semibold">migração gratuita</span>{" "}
                    dos seus mundos existentes
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8 py-3 text-lg shadow-lg rounded-lg font-medium transition-all duration-300 flex items-center justify-center">
                    <Play className="w-5 h-5 mr-2" />
                    Começar Agora
                  </button>
                  <button className="border-2 border-indigo-300 text-indigo-600 hover:bg-indigo-50 hover:border-indigo-400 px-8 py-3 text-lg bg-white rounded-lg font-medium transition-all duration-300 flex items-center justify-center">
                    <Headphones className="w-5 h-5 mr-2" />
                    Falar com Suporte
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
