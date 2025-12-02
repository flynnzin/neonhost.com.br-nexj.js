"use client"
import { plans } from "./plans"
import type React from "react"

import {
  Server,
  Cpu,
  HardDrive,
  MemoryStick,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Shield,
  Zap,
  Globe,
  Info,
  Network,
  Settings,
} from "lucide-react"
import Link from "next/link"
import { useState, memo, useMemo, useCallback } from "react"

// Componente de botão otimizado sem NextUI
const OptimizedButton = memo(
  ({
    children,
    href,
    disabled = false,
    className = "",
    onClick,
    ...props
  }: {
    children: React.ReactNode
    href?: string
    disabled?: boolean
    className?: string
    onClick?: () => void
  }) => {
    const baseClasses =
      "inline-flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900"
    const enabledClasses =
      "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white transform hover:scale-105"
    const disabledClasses = "bg-gray-600 text-gray-400 cursor-not-allowed"

    const finalClasses = `${baseClasses} ${disabled ? disabledClasses : enabledClasses} ${className}`

    if (href && !disabled) {
      return (
        <Link href={href} target="_blank" rel="noopener noreferrer" className={finalClasses} {...props}>
          {children}
        </Link>
      )
    }

    return (
      <button className={finalClasses} disabled={disabled} onClick={onClick} {...props}>
        {children}
      </button>
    )
  },
)

OptimizedButton.displayName = "OptimizedButton"

// Componente de estatísticas ultra-otimizado
const StatsGrid = memo(() => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-12">
    <div className="text-center p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700">
      <div className="text-2xl font-bold text-gray-900 dark:text-white">99.9%</div>
      <div className="text-sm text-gray-600 dark:text-gray-400">Uptime</div>
    </div>
    <div className="text-center p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700">
      <div className="text-2xl font-bold text-gray-900 dark:text-white">10ms</div>
      <div className="text-sm text-gray-600 dark:text-gray-400">Latência</div>
    </div>
    <div className="text-center p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700">
      <div className="text-2xl font-bold text-gray-900 dark:text-white">24/7</div>
      <div className="text-sm text-gray-600 dark:text-gray-400">Suporte</div>
    </div>
    <div className="text-center p-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700">
      <div className="text-2xl font-bold text-gray-900 dark:text-white">1Gbps</div>
      <div className="text-sm text-gray-600 dark:text-gray-400">Rede</div>
    </div>
  </div>
))

StatsGrid.displayName = "StatsGrid"

// Features otimizadas
const FeaturesGrid = memo(() => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
    <div className="text-center p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700">
      <div className="text-purple-600 dark:text-purple-400 mb-4 flex justify-center">
        <Server className="h-6 w-6" />
      </div>
      <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">Recursos Dedicados</h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm">CPU, RAM e armazenamento exclusivos</p>
    </div>
    <div className="text-center p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700">
      <div className="text-purple-600 dark:text-purple-400 mb-4 flex justify-center">
        <Shield className="h-6 w-6" />
      </div>
      <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">Proteção Avançada</h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm">Anti-DDoS e firewall configurável</p>
    </div>
    <div className="text-center p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700">
      <div className="text-purple-600 dark:text-purple-400 mb-4 flex justify-center">
        <Zap className="h-6 w-6" />
      </div>
      <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">Performance Premium</h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm">Hardware de última geração</p>
    </div>
    <div className="text-center p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700">
      <div className="text-purple-600 dark:text-purple-400 mb-4 flex justify-center">
        <Globe className="h-6 w-6" />
      </div>
      <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">Conectividade Premium</h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm">Rede de alta velocidade no Brasil</p>
    </div>
  </div>
))

FeaturesGrid.displayName = "FeaturesGrid"

const FeatureIcon = memo(({ feature }: { feature: string }) => {
  const getIcon = (feature: string) => {
    if (feature.includes("Anti-DDoS")) return <Shield className="h-4 w-4" />
    if (feature.includes("AMD Ryzen")) return <Cpu className="h-4 w-4" />
    if (feature.includes("Cache")) return <Zap className="h-4 w-4" />
    if (feature.includes("Gbps") || feature.includes("TB")) return <Network className="h-4 w-4" />
    if (feature.includes("Painel")) return <Settings className="h-4 w-4" />
    return <CheckCircle className="h-4 w-4" />
  }

  return (
    <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-green-100 text-green-600">
      {getIcon(feature)}
    </div>
  )
})

FeatureIcon.displayName = "FeatureIcon"

const PlanBadge = memo(({ type }: { type: "popular" | "recommended" | "best-value" }) => {
  const badges = {
    popular: { text: "Mais Popular", bg: "bg-gradient-to-r from-orange-500 to-red-500", pulse: true },
    recommended: { text: "Recomendado", bg: "bg-gradient-to-r from-green-500 to-emerald-500", pulse: false },
    "best-value": { text: "Melhor Custo-Benefício", bg: "bg-gradient-to-r from-blue-500 to-cyan-500", pulse: false },
  }

  const badge = badges[type]

  return (
    <div
      className={`absolute -top-3 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-white text-xs font-bold ${badge.bg} ${badge.pulse ? "animate-pulse" : ""} shadow-lg z-10`}
    >
      {badge.text}
    </div>
  )
})

PlanBadge.displayName = "PlanBadge"

const PlanCard = memo(
  ({
    plan,
    isExpanded,
    onToggle,
  }: {
    plan: (typeof plans)[0]
    isExpanded: boolean
    onToggle: () => void
  }) => (
    <article className="bg-white dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-all duration-300">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
        <div className="text-sm text-purple-600 dark:text-purple-400 mb-4">Disponível agora</div>

        <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-6">
          R$ {plan.price} <span className="text-base text-gray-600 dark:text-gray-400 font-normal">/mês</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="text-center p-3 bg-purple-50 dark:bg-purple-900/50 rounded-lg">
          <Cpu className="h-4 w-4 text-purple-600 dark:text-purple-400 mx-auto mb-1" />
          <div className="text-sm font-medium text-gray-900 dark:text-white">{plan.description.cores}</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">CPU</div>
        </div>
        <div className="text-center p-3 bg-purple-50 dark:bg-purple-900/50 rounded-lg">
          <MemoryStick className="h-4 w-4 text-purple-600 dark:text-purple-400 mx-auto mb-1" />
          <div className="text-sm font-medium text-gray-900 dark:text-white">{plan.description.ram}</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">RAM</div>
        </div>
        <div className="text-center p-3 bg-purple-50 dark:bg-purple-900/50 rounded-lg">
          <HardDrive className="h-4 w-4 text-purple-600 dark:text-purple-400 mx-auto mb-1" />
          <div className="text-sm font-medium text-gray-900 dark:text-white">{plan.description.ssd}</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Disco</div>
        </div>
        <div className="text-center p-3 bg-purple-50 dark:bg-purple-900/50 rounded-lg">
          <Network className="h-4 w-4 text-purple-600 dark:text-purple-400 mx-auto mb-1" />
          <div className="text-sm font-medium text-gray-900 dark:text-white">1Gbps</div>
          <div className="text-xs text-gray-600 dark:text-gray-400">Rede</div>
        </div>
      </div>

      <div className="space-y-2 mb-6">
        <div className="flex items-center gap-2">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <span className="text-sm text-gray-700 dark:text-gray-300">Anti-DDoS Incluído</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <span className="text-sm text-gray-700 dark:text-gray-300">Painel de Controle</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <span className="text-sm text-gray-700 dark:text-gray-300">Suporte 24/7</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <span className="text-sm text-gray-700 dark:text-gray-300">AMD Ryzen 9</span>
        </div>
        <div className="flex items-center gap-2">
          <CheckCircle className="h-4 w-4 text-green-600" />
          <span className="text-sm text-gray-700 dark:text-gray-300">Uptime 99.9%</span>
        </div>
      </div>

      <OptimizedButton
        href={`https://app.neonhost.com.br/cart.php?a=add&pid=${plan.name === "NeonInitial" ? "1" : plan.name === "NeonStart" ? "2" : plan.name === "NeonBoost" ? "3" : "4"}`}
        className="w-full bg-purple-100 dark:bg-purple-900/50 hover:bg-purple-200 dark:hover:bg-purple-900 text-purple-600 dark:text-purple-300 font-medium py-3 px-4 rounded-lg transition-colors duration-200"
      >
        Contratar agora!
      </OptimizedButton>
    </article>
  ),
)

PlanCard.displayName = "PlanCard"

// FAQ simplificado sem lazy loading para reduzir complexity
const SimpleFAQ = memo(() => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "Qual a diferença entre VPS Ryzen e VPS comum?",
      answer: "VPS Ryzen possui recursos dedicados, proteção DDoS avançada e otimizações específicas para jogos.",
    },
    {
      question: "Posso instalar qualquer jogo no VPS?",
      answer: "Sim, você tem acesso root completo e pode instalar qualquer jogo compatível com Linux/Windows.",
    },
    {
      question: "Como funciona a proteção DDoS?",
      answer: "Nossa proteção DDoS filtra automaticamente ataques maliciosos, mantendo seu servidor online.",
    },
    {
      question: "Qual o tempo de ativação?",
      answer: "Seu VPS é ativado automaticamente em até 5 minutos após a confirmação do pagamento.",
    },
  ]

  return (
    <div className="max-w-4xl mx-auto">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="mb-4 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700"
        >
          <button
            className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-xl"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            aria-expanded={openIndex === index}
          >
            <span className="font-semibold text-gray-900 dark:text-white">{faq.question}</span>
            {openIndex === index ? (
              <ChevronUp className="h-5 w-5 text-purple-600 dark:text-purple-400" aria-hidden="true" />
            ) : (
              <ChevronDown className="h-5 w-5 text-purple-600 dark:text-purple-400" aria-hidden="true" />
            )}
          </button>
          {openIndex === index && (
            <div className="px-6 pb-6">
              <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
})

SimpleFAQ.displayName = "SimpleFAQ"

// Componente principal ultra-otimizado
export default function VpsGamer() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)

  // Memoizar callback para evitar re-renders
  const handleCardToggle = useCallback((index: number) => {
    setExpandedCard((prev) => (prev === index ? null : index))
  }, [])

  // Memoizar planos
  const memoizedPlans = useMemo(() => plans, [])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Background CSS otimizado */}
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
            radial-gradient(600px circle at top left, rgba(126, 34, 206, 0.05) 0%, transparent 50%),
            radial-gradient(600px circle at bottom right, rgba(255, 62, 157, 0.05) 0%, transparent 50%)
          `,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="pt-20 md:pt-32 pb-16">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/50 border border-purple-200 dark:border-purple-800 text-purple-600 dark:text-purple-300 text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-2" aria-hidden="true" />
              Servidores VPS Ryzen
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                VPS Ryzen
              </span>{" "}
              para seus Projetos
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
              Escolha o plano ideal para seu negócio e evolua conforme suas necessidades.
            </p>

            <StatsGrid />
          </div>
        </section>

        {/* Features */}
        <section className="pb-16">
          <FeaturesGrid />
        </section>

        {/* Plans */}
        <section className="py-20" id="plans">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Escolha seu <span className="text-purple-600">Plano Ideal</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mx-auto text-lg max-w-2xl">
              Planos VPS Ryzen com recursos garantidos e performance superior para seus projetos.
            </p>

            <div className="flex flex-col items-center gap-3 mt-8">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <circle cx="12" cy="12" r="8" />
                </svg>
                Localização do Servidor
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900 dark:bg-gray-800 border border-gray-700">
                <span className="text-lg">🇧🇷</span>
                <span className="text-white font-medium">São Paulo</span>
              </div>
            </div>
          </div>

          {/* Cards Expansíveis */}
          <div className="space-y-6 max-w-6xl mx-auto">
            {memoizedPlans.map((plan, index) => (
              <PlanCard
                key={plan.name}
                plan={plan}
                isExpanded={expandedCard === index}
                onToggle={() => handleCardToggle(index)}
              />
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="pb-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Tire suas dúvidas sobre nossos serviços VPS Ryzen.
            </p>
          </div>
          <SimpleFAQ />
        </section>

        {/* Support */}
        <section className="pb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Suporte Especializado
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Nossa equipe está pronta para ajudar você 24 horas por dia, 7 dias por semana.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300">
              <div className="text-purple-600 dark:text-purple-400 mb-4">
                <Info size={48} aria-hidden="true" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white text-xl mb-3">Consultoria Especializada</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Ajudamos você a escolher a melhor configuração para seu projeto específico.
              </p>
              <OptimizedButton href="https://discord.gg/rGP7prMqF3" className="w-full">
                Falar com Consultor
              </OptimizedButton>
            </div>

            <div className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300">
              <div className="text-purple-600 dark:text-purple-400 mb-4">
                <Info size={48} aria-hidden="true" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white text-xl mb-3">Suporte 24/7</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Suporte técnico especializado disponível 24 horas por dia para resolver qualquer problema.
              </p>
              <OptimizedButton href="https://discord.gg/rGP7prMqF3" className="w-full">
                Acessar Suporte
              </OptimizedButton>
            </div>

            <div className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300">
              <div className="text-purple-600 dark:text-purple-400 mb-4">
                <Info size={48} aria-hidden="true" />
              </div>
              <h3 className="font-bold text-gray-900 dark:text-white text-xl mb-3">Central de Ajuda</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Base de conhecimento com tutoriais e guias para otimizar seu servidor.
              </p>
              <OptimizedButton href="https://app.neonhost.com.br/submitticket.php?step=2&deptid=1" className="w-full">
                Ver Tutoriais
              </OptimizedButton>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
