"use client"

import { useState, useEffect, useCallback, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  Zap,
  Shield,
  Clock,
  Headphones,
  Server,
  Globe,
  CheckCircle,
  Cpu,
  ChevronDown,
  ChevronUp,
  CreditCard,
  DollarSign,
} from "lucide-react"

// Componente de Loading otimizado
const LoadingSpinner = () => (
  <div className="min-h-screen bg-[#0a0a0e] text-white flex items-center justify-center">
    <div className="text-center">
      <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-gray-400">Carregando...</p>
    </div>
  </div>
)

// Componente de Plano otimizado
const PlanCard = ({ plan, index }: { plan: any; index: number }) => (
  <article
    className={`relative p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
      plan.popular
        ? "bg-gradient-to-b from-purple-500/20 to-pink-500/20 border-purple-500/50"
        : "bg-white/5 border-white/10"
    }`}
  >
    {plan.popular && (
      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
        <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-medium">
          Popular
        </span>
      </div>
    )}
    <div className="flex items-center mb-4">
      <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 mr-4">
        {plan.icon}
      </div>
      <div>
        <h3 className="text-xl font-bold text-white">{plan.name}</h3>
      </div>
    </div>
    <p className="text-gray-400 mb-6 text-sm leading-relaxed">{plan.description}</p>
    <div className="mb-6">
      <div className="flex items-baseline">
        <span className="text-sm text-gray-400">R$</span>
        <span className="text-4xl font-bold text-white ml-1">{plan.price}</span>
        <span className="text-sm text-gray-400 ml-1">,90</span>
        <span className="text-sm text-gray-400 ml-2">/mensal</span>
      </div>
    </div>
    <ul className="space-y-3 mb-8" role="list">
      {plan.features.map((feature: string, featureIndex: number) => (
        <li key={featureIndex} className="flex items-center text-sm text-gray-300">
          <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" aria-hidden="true" />
          {feature}
        </li>
      ))}
    </ul>
    <Link
      href={plan.url}
      className={`block w-full py-3 rounded-xl font-semibold text-center transition-all duration-300 ${
        plan.popular
          ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:opacity-90"
          : "bg-white/10 text-white border border-white/20 hover:bg-white/20"
      }`}
      aria-label={`Ver planos de ${plan.name}`}
    >
      Ver todos os planos
    </Link>
  </article>
)

// Componente de Feature otimizado
const FeatureCard = ({ feature, index }: { feature: any; index: number }) => (
  <article className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/30 transition-all duration-300">
    <div className="flex items-center mb-4">
      <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 mr-4">
        {feature.icon}
      </div>
      <h3 className="text-xl font-bold text-white">{feature.title}</h3>
    </div>
    <p className="text-gray-400 mb-4 text-sm leading-relaxed">{feature.description}</p>
    {feature.highlight && (
      <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-pink-500/10 text-pink-400 border border-pink-500/20">
        {feature.highlight}
      </div>
    )}
  </article>
)

// Componente de Sistema Operacional otimizado
const OSCard = ({ os, index }: { os: any; index: number }) => (
  <div
    className={`group p-8 rounded-2xl border backdrop-blur-sm hover:scale-105 transition-all duration-300 cursor-pointer ${os.color}`}
  >
    <div className="text-center">
      <div className="mb-6 flex justify-center">
        <div className="w-16 h-16 relative">
          <Image
            src={os.image || "/placeholder.svg?height=64&width=64"}
            alt={`${os.name} logo`}
            width={64}
            height={64}
            className="object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
            loading="lazy"
          />
        </div>
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{os.name}</h3>
      <p className="text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {os.description}
      </p>
    </div>
  </div>
)

// Componente de FAQ otimizado
const FAQItem = ({
  faq,
  index,
  isExpanded,
  onToggle,
}: { faq: any; index: number; isExpanded: boolean; onToggle: () => void }) => (
  <div className="border border-gray-800/50 rounded-xl bg-white/5 backdrop-blur-sm">
    <button
      className="w-full p-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-inset rounded-xl"
      onClick={onToggle}
      aria-expanded={isExpanded}
      aria-controls={`faq-answer-${index}`}
    >
      <span className="text-white font-medium pr-4">{faq.question}</span>
      {isExpanded ? (
        <ChevronUp className="h-5 w-5 text-purple-400 flex-shrink-0" aria-hidden="true" />
      ) : (
        <ChevronDown className="h-5 w-5 text-purple-400 flex-shrink-0" aria-hidden="true" />
      )}
    </button>
    {isExpanded && (
      <div id={`faq-answer-${index}`} className="px-6 pb-6">
        <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
        {faq.category && (
          <div
            className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium mt-3 ${faq.categoryColor}`}
          >
            {faq.icon && (
              <span className="mr-1" aria-hidden="true">
                {faq.icon}
              </span>
            )}
            {faq.category}
          </div>
        )}
      </div>
    )}
  </div>
)

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Dados memoizados para evitar re-renders
  const plans = useMemo(
    () => [
      {
        name: "VPS Streaming",
        description: "Servidores no Brasil com tráfego mensal ilimitado",
        price: "249,90",
        icon: <Globe className="h-8 w-8" />,
        popular: false,
        features: ["Tráfego ilimitado", "SSD NVMe", "Painel de Controle", "Backup diário"],
        url: "/vps-streaming",
      },
      {
        name: "VPS Gamer",
        description: "VPS de alta performance no Brasil com Anti-DDoS PRO",
        price: "72,90",
        icon: <Zap className="h-8 w-8" />,
        popular: true,
        features: ["Anti-DDoS PRO", "AMD Ryzen", "Baixa latência", "Suporte 24/7"],
        url: "/vps-gamer",
      },
      // {
      //   name: "Semi-Dedicados",
      //   description: "Servidores robustos Windows e Linux no Brasil",
      //   price: "305,96",
      //   icon: <Server className="h-8 w-8" />,
      //   popular: false,
      //   features: ["Windows/Linux", "Recursos dedicados", "IP dedicado", "Acesso root"],
      //   url: "/semi-dedicado",
      // },
      {
        name: "Servidores Dedicados",
        description: "Servidores físicos de alta performance no Brasil",
        price: "950",
        icon: <Cpu className="h-8 w-8" />,
        popular: false,
        features: ["Hardware dedicado", "Máxima performance", "Configuração custom", "Suporte premium"],
        url: "/dedicado",
      },
    ],
    [],
  )

  const whyChooseFeatures = useMemo(
    () => [
      {
        icon: <Shield className="h-6 w-6" />,
        title: "Segurança Avançada",
        description:
          "Proteção DDoS premium, firewall avançado e monitoramento 24/7 para máxima segurança dos seus dados e aplicações",
        highlight: "Proteção contra ataques de até 1Tbps",
      },
      {
        icon: <Zap className="h-6 w-6" />,
        title: "Performance Superior",
        description: "Servidores AMD Ryzen com SSD NVMe, rede de alta velocidade e otimizações para máxima performance",
        highlight: "Até 300% mais rápido que concorrentes",
      },
      {
        icon: <Globe className="h-6 w-6" />,
        title: "Infraestrutura Nacional",
        description: "Datacenter tier 1 no Brasil com conectividade premium para menor latência e melhor experiência",
        highlight: "Datacenter Tier 1 no Brasil",
      },
      {
        icon: <Headphones className="h-6 w-6" />,
        title: "Suporte Especializado",
        description:
          "Equipe técnica brasileira disponível 24/7 com conhecimento especializado em cada tipo de servidor",
        highlight: "Suporte em português 24/7",
      },
    ],
    [],
  )

  const operatingSystems = useMemo(
    () => [
      {
        name: "Windows",
        image: "/images/os/windows.svg",
        color: "bg-blue-500/20 border-blue-500/30 hover:border-blue-500/50",
        description: "Sistema operacional mais popular do mundo",
      },
      {
        name: "Ubuntu",
        image: "/images/os/ubuntu.svg",
        color: "bg-orange-500/20 border-orange-500/30 hover:border-orange-500/50",
        description: "Distribuição Linux mais amigável",
      },
      {
        name: "Fedora",
        image: "/images/os/fedora.svg",
        color: "bg-blue-600/20 border-blue-600/30 hover:border-blue-600/50",
        description: "Linux com tecnologias de ponta",
      },
      {
        name: "CentOS",
        image: "/images/os/centos.svg",
        color: "bg-purple-500/20 border-purple-500/30 hover:border-purple-500/50",
        description: "Estabilidade para servidores empresariais",
      },
      {
        name: "Debian",
        image: "/images/os/debian.svg",
        color: "bg-red-500/20 border-red-500/30 hover:border-red-500/50",
        description: "Base sólida para muitas distribuições",
      },
      {
        name: "Alma Linux",
        image: "/images/os/alma.svg",
        color: "bg-cyan-500/20 border-cyan-500/30 hover:border-cyan-500/50",
        description: "Sucessor moderno do CentOS",
      },
      {
        name: "OpenSUSE",
        image: "/images/os/opensuse.svg",
        color: "bg-green-500/20 border-green-500/30 hover:border-green-500/50",
        description: "Linux profissional e confiável",
      },
      {
        name: "FreeBSD",
        image: "/images/os/freebsd.svg",
        color: "bg-red-600/20 border-red-600/30 hover:border-red-600/50",
        description: "Sistema Unix-like de alta performance",
      },
    ],
    [],
  )

  const testimonials = useMemo(
    () => [
      {
        name: "Eliton Correia",
        role: "Desenvolvedor Web",
        service: "VPS Gamer",
        text: "A NeonHost revolucionou meu negócio online. O desempenho dos servidores é impressionante e o suporte técnico está sempre disponível para resolver qualquer problema. Recomendo fortemente para quem busca confiabilidade e velocidade.",
        rating: 5,
        avatar: "EC",
      },
      {
        text: "Migrei meu servidor de jogos para a NeonHost e a diferença foi imediata. Zero lag, uptime perfeito e o atendimento do Leonardo foi excepcional. Ele me guiou em todo o processo de migração e configuração. Estou extremamente satisfeito!",
        name: "Pedro Almeida",
        role: "Administrador de Servidor",
        service: "VPS Ryzen",
        rating: 5,
        avatar: "PA",
      },
      {
        text: "Precisava de uma solução robusta para minha empresa e a NeonHost superou todas as expectativas. O processo de setup foi simples e o desempenho é consistentemente excelente. O suporte técnico é rápido e eficiente, resolvendo qualquer problema em minutos.",
        name: "Eric Ferreira",
        avatar: "EF",
        role: "CTO de Startup",
        service: "Servidor Semi-Dedicado",
        rating: 5,
      },
    ],
    [],
  )

  const faqQuestions = useMemo(
    () => [
      {
        question: "Quais métodos de pagamento vocês aceitam?",
        answer:
          "Aceitamos cartão de crédito, débito, PIX, boleto bancário e transferência bancária. Todos os pagamentos são processados de forma segura.",
        category: "Financeiro",
        categoryColor: "bg-green-500/20 text-green-400",
        icon: <CreditCard className="h-4 w-4" />,
      },
      {
        question: "Vocês oferecem reembolsos?",
        answer:
          "Sim, oferecemos garantia de reembolso de 7 dias para novos clientes. Se não ficar satisfeito, devolvemos 100% do valor pago.",
        category: "Financeiro",
        categoryColor: "bg-green-500/20 text-green-400",
        icon: <DollarSign className="h-4 w-4" />,
      },
      {
        question: "Qual o prazo de ativação?",
        answer:
          "A ativação é imediata após a confirmação do pagamento. Em casos de análise adicional, pode levar até 24 horas.",
        category: "Infraestrutura",
        categoryColor: "bg-blue-500/20 text-blue-400",
        icon: <Clock className="h-4 w-4" />,
      },
      {
        question: "Como funciona a Proteção/Mitigação?",
        answer:
          "Nossa proteção DDoS monitora o tráfego em tempo real, identificando e bloqueando ataques automaticamente, garantindo que seu servidor permaneça online.",
        category: "Segurança",
        categoryColor: "bg-red-500/20 text-red-400",
        icon: <Shield className="h-4 w-4" />,
      },
      {
        question: "O que é e como funciona Proteção DDoS Pro?",
        answer:
          "A Proteção DDoS Pro oferece defesa avançada contra ataques de até 1Tbps, com filtragem inteligente e mitigação instantânea para máxima proteção.",
        category: "Segurança",
        categoryColor: "bg-red-500/20 text-red-400",
        icon: <Shield className="h-4 w-4" />,
      },
      {
        question: "Onde estão localizados os data centers de vocês?",
        answer:
          "Nossos data centers estão localizados em São Paulo e Rio de Janeiro, garantindo baixa latência para todo o Brasil.",
        category: "Infraestrutura",
        categoryColor: "bg-blue-500/20 text-blue-400",
        icon: <Globe className="h-4 w-4" />,
      },
    ],
    [],
  )

  // Callbacks otimizados
  const handleFaqToggle = useCallback((index: number) => {
    setExpandedFaq((prev) => (prev === index ? null : index))
  }, [])

  const handleTestimonialChange = useCallback((index: number) => {
    setActiveTestimonial(index)
  }, [])

  if (!isLoaded) {
    return <LoadingSpinner />
  }

  return (
    <div className="min-h-screen bg-[#0a0a0e] text-white">
      {/* Background com grid quadriculado */}
      <div className="fixed inset-0 z-0">
        {/* Grid quadriculado */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-[linear-gradient(rgba(118,67,201,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(118,67,201,0.12)_1px,transparent_1px)] bg-[size:24px_24px]"
            style={{ maskImage: "linear-gradient(transparent, black, transparent)" }}
          ></div>
        </div>

        {/* Efeitos de blur coloridos */}
        <div
          className="absolute inset-0"
          style={{
            background: `
            radial-gradient(600px circle at top left, rgba(126, 34, 206, 0.15) 0%, transparent 50%),
            radial-gradient(600px circle at bottom right, rgba(255, 62, 157, 0.15) 0%, transparent 50%)
          `,
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-8">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-2" aria-hidden="true"></div>
              Infraestrutura no Brasil
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Potencialize seu{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              mundo digital
            </span>{" "}
            com{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent">
              Neon Host
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Revolucionamos a hospedagem no Brasil com nossa infraestrutura exclusiva Neon Host™, combinando velocidade
            extrema, segurança avançada e tecnologia de ponta.
          </p>
          {/* Features em grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="flex items-center space-x-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <Zap className="h-5 w-5 text-purple-400" aria-hidden="true" />
              <span className="text-sm text-gray-300">Latência ultra-baixa de até 5ms</span>
            </div>
            <div className="flex items-center space-x-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <Shield className="h-5 w-5 text-purple-400" aria-hidden="true" />
              <span className="text-sm text-gray-300">Proteção contra ataques em tempo real</span>
            </div>
            <div className="flex items-center space-x-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <Cpu className="h-5 w-5 text-purple-400" aria-hidden="true" />
              <span className="text-sm text-gray-300">Processadores AMD Ryzen e NVMe Enterprise</span>
            </div>
            <div className="flex items-center space-x-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
              <Clock className="h-5 w-5 text-purple-400" aria-hidden="true" />
              <span className="text-sm text-gray-300">Garantia de 99,9% de uptime</span>
            </div>
          </div>
        </div>
      </section>

      {/* Seção: Por que escolher a NeonHost */}
      <section className="relative py-20 px-4 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Por que escolher a{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                NeonHost?
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto">
              Combinamos tecnologia de ponta, infraestrutura nacional e suporte especializado
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Cards Grid */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyChooseFeatures.map((feature, index) => (
                <FeatureCard key={feature.title} feature={feature} index={index} />
              ))}
            </div>
            {/* Imagem do Datacenter */}
            <div className="lg:col-span-1">
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-1">
                <Image
                  src="/games/page/about-datacenter.webp"
                  alt="Datacenter NeonHost - Infraestrutura de alta tecnologia"
                  width={400}
                  height={500}
                  className="rounded-xl w-full h-auto object-cover"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/60 backdrop-blur-sm border border-white/10">
                  <h4 className="text-white font-bold mb-2">Datacenter Tier 1</h4>
                  <p className="text-gray-300 text-sm">Infraestrutura de classe mundial localizada no Brasil</p>
                </div>
              </div>
            </div>
          </div>
          {/* Estatísticas */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
              <Clock className="h-5 w-5 text-purple-400 mx-auto mb-2" aria-hidden="true" />
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-1">
                99.9%
              </div>
              <div className="text-gray-400 text-sm">Uptime Garantido</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
              <Headphones className="h-5 w-5 text-purple-400 mx-auto mb-2" aria-hidden="true" />
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-1">
                24/7
              </div>
              <div className="text-gray-400 text-sm">Suporte Técnico</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
              <Zap className="h-5 w-5 text-purple-400 mx-auto mb-2" aria-hidden="true" />
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-1">
                15ms
              </div>
              <div className="text-gray-400 text-sm">Latência Média</div>
            </div>
            <div className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
              <Shield className="h-5 w-5 text-purple-400 mx-auto mb-2" aria-hidden="true" />
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-1">
                348Tbps
              </div>
              <div className="text-gray-400 text-sm">Proteção DDoS</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Otimizado */}
      <section className="relative py-20 px-4 z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Perguntas{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Frequentes
              </span>
            </h2>
            <p className="text-xl text-gray-400">Tire suas dúvidas sobre nossos serviços de hospedagem</p>
          </div>
          <div className="space-y-4">
            {faqQuestions.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                index={index}
                isExpanded={expandedFaq === index}
                onToggle={() => handleFaqToggle(index)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
