"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { minecraftPlans } from "./plans" // Importa os planos
import GridBackground from "@/components/grid-background"
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
  Server,
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
    <div className="min-h-screen relative">
      {/* NeonHost Grid Background */}
      <GridBackground />
      <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-[linear-gradient(rgba(118,67,201,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(118,67,201,0.12)_1px,transparent_1px)] bg-[size:24px_24px]"
            style={{ maskImage: "linear-gradient(transparent, black, transparent)" }}
          ></div>
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
                  <div className="bg-purple-600/20 text-purple-400 border border-purple-500/30 mb-4 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium inline-flex items-center">
                    <Zap className="w-3 h-3 mr-1" />
                    Servidores de Alta Performance
                  </div>
                </motion.div>

                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  <span className="text-white">Eleve o nível do seu </span>
                  <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                    servidor
                  </span>
                  <br />
                  <span className="text-white">de Rust</span>
                </h1>

                <p className="text-xl text-gray-300 max-w-lg leading-relaxed">
                  Profissionalize seu servidor com <span className="text-purple-400 font-semibold">AMD Ryzen 9</span> e
                  proteção <span className="text-pink-400 font-semibold">Anti-DDoS</span> de alta capacidade!
                </p>
              </div>
            </motion.div>

            {/* Right Content - Minecraft Character with Neon Effects */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                {/* Main Character Container */}
                <div className="relative w-80 h-80 bg-gradient-to-br from-purple-600/20 via-pink-500/20 to-purple-500/20 rounded-2xl border border-purple-500/30 backdrop-blur-sm flex items-center justify-center shadow-2xl shadow-purple-500/20">
                  {/* Neon Border Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-sm" />

                  {/* Image or Icon */}
                  <div className="relative z-10">
                    <Image
                      // src="/games/rust.webp"
                      src="/games/Rust.png"
                      alt="Rust Server"
                      width={283}
                      height={283}
                      className="object-contain rounded-xl"
                    />
                  </div>

                  {/* Inner Glow */}
                  <div className="absolute inset-4 rounded-xl bg-gradient-to-br from-purple-400/10 to-pink-400/10 animate-pulse" />
                </div>

                {/* Floating Neon Elements */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg shadow-lg shadow-purple-500/50 flex items-center justify-center"
                >
                  <Database className="w-6 h-6 text-white" />
                </motion.div>

                <motion.div
                  animate={{ y: [10, -10, 10] }}
                  transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute -bottom-6 -left-6 w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg shadow-lg shadow-pink-500/50 flex items-center justify-center"
                >
                  <Shield className="w-5 h-5 text-white" />
                </motion.div>

                <motion.div
                  animate={{ x: [-5, 5, -5] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                  className="absolute top-1/2 -left-8 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg shadow-lg shadow-purple-500/50 flex items-center justify-center"
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Escolha seu{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                plano ideal
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Servidores otimizados para rust com processadores de{" "}
              <span className="text-purple-400">alta performance</span>
            </p>
          </motion.div>

          {/* Plans Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPlans.map(
              (
                plan,
                index, // Usa filteredPlans aqui
              ) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div
                    className={`relative bg-black/40 backdrop-blur-sm border transition-all duration-300 hover:scale-105 rounded-lg ${
                      plan.isPopular
                        ? "border-purple-500/50 shadow-lg shadow-purple-500/20"
                        : plan.isRecommended
                          ? "border-pink-500/50 shadow-lg shadow-pink-500/20"
                          : "border-gray-700/50 hover:border-purple-500/30"
                    }`}
                  >
                    {/* Neon Glow Effect */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500/5 to-pink-500/5 blur-sm" />

                    {plan.isPopular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0 shadow-lg shadow-purple-500/50 px-3 py-1 rounded-full text-sm font-medium inline-flex items-center">
                        <Crown className="w-3 h-3 mr-1" />
                        Mais Popular
                      </div>
                    )}
                    {plan.isRecommended && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-pink-600 to-purple-600 text-white border-0 shadow-lg shadow-pink-500/50 px-3 py-1 rounded-full text-sm font-medium inline-flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        Recomendado
                      </div>
                    )}

                    <div className="text-center pb-4 relative z-10 p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <div className="space-y-2">
                        <div className="flex items-center justify-center gap-2">
                          <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                            R$ {plan.price.toFixed(2)}
                          </span>
                          {plan.originalPrice && (
                            <span className="text-lg text-gray-500 line-through">
                              R$ {plan.originalPrice.toFixed(2)}
                            </span>
                          )}
                        </div>
                        {plan.discount && (
                          <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white border-0 px-2 py-1 rounded text-sm font-medium inline-block">
                            {plan.discount}% OFF
                          </div>
                        )}
                        <p className="text-sm text-gray-400">/mês</p>
                      </div>
                    </div>

                    <div className="space-y-4 relative z-10 p-6 pt-0">
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Database className="w-4 h-4 text-pink-400" />
                          <span className="text-gray-300">{plan.ram} RAM</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Cpu className="w-4 h-4 text-purple-400" />
                          <span className="text-gray-300">{plan.cpu}</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        {plan.features
                          .slice(0, expandedPlan === plan.id ? plan.features.length : 4)
                          .map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm">
                              <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                              <span className="text-gray-300">{feature}</span>
                            </div>
                          ))}
                      </div>

                      {plan.features.length > 4 && (
                        <button
                          onClick={() => togglePlan(plan.id)}
                          className="w-full text-purple-400 hover:text-purple-300 hover:bg-purple-500/10 px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium flex items-center justify-center"
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
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg shadow-purple-500/25 border border-purple-500/30 px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center"
                        onClick={() => window.open(plan.paymentLink, "_blank")}
                      >
                        Contratar Agora
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ),
            )}
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
            <h2 className="text-4xl font-bold text-white mb-4">
              Por que escolher a{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                NeonHost
              </span>
              ?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Recursos exclusivos para garantir a melhor experiência no seu servidor Minecraft
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Rocket,
                title: "AMD Ryzen 9 9900x",
                description: "Processadores de última geração para máxima performance",
                color: "from-purple-500 to-pink-600",
              },
              {
                icon: Shield,
                title: "Proteção Anti-DDoS",
                description: "Proteção avançada contra ataques DDoS incluída gratuitamente",
                color: "from-pink-500 to-purple-600",
              },
              {
                icon: Database,
                title: "Backup Automático",
                description: "Backups diários automáticos para proteger seus mundos",
                color: "from-purple-500 to-blue-600",
              },
              {
                icon: Zap,
                title: "Instalação Instantânea",
                description: "Instalamos seu servidor em até 30 segundos após a confirmação do pagamento.",
                color: "from-pink-500 to-red-600",
              },
              {
                icon: Headphones,
                title: "Suporte 24/7",
                description: "Equipe especializada disponível 24 horas por dia",
                color: "from-purple-500 to-indigo-600",
              },
              {
                icon: Wrench,
                title: "Painel Avançado",
                description: "Controle total do seu servidor através do nosso painel",
                color: "from-pink-500 to-purple-600",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-black/40 backdrop-blur-sm border-gray-700/50 hover:border-purple-500/30 transition-all duration-300 h-full group hover:scale-105 rounded-lg border">
                  {/* Neon Glow Effect */}
                  <div
                    className={`absolute inset-0 rounded-lg bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 blur-sm transition-opacity duration-300`}
                  />

                  <div className="p-6 text-center relative z-10">
                    <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                      <feature.icon className="w-12 h-12 text-purple-400 group-hover:text-pink-400 transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
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
            {/* Neon Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 rounded-2xl blur-xl" />

            <div className="relative bg-black/40 backdrop-blur-sm rounded-2xl p-12 border border-purple-500/30 shadow-2xl shadow-purple-500/20">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-4xl font-bold text-white">
                    Pronto para criar seu servidor dos{" "}
                    <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                      sonhos
                    </span>
                    ?
                  </h2>
                  <p className="text-xl text-gray-400">
                    Comece agora mesmo e receba <span className="text-purple-400 font-semibold">migração gratuita</span>{" "}
                    dos seus mundos existentes
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg shadow-lg shadow-purple-500/25 border border-purple-500/30 rounded-lg font-medium transition-all duration-300 flex items-center justify-center">
                    <Play className="w-5 h-5 mr-2" />
                    Começar Agora
                  </button>
                  <button className="border-2 border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400 px-8 py-3 text-lg bg-transparent backdrop-blur-sm rounded-lg font-medium transition-all duration-300 flex items-center justify-center">
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
