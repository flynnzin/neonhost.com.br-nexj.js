"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import {
  Zap,
  Shield,
  Clock,
  Headphones,
  Server,
  Globe,
  Star,
  CheckCircle,
  Cpu,
  Quote,
  ChevronDown,
  ChevronUp,
  CreditCard,
  DollarSign,
  HardDrive,
  Users,
  ArrowRight,
} from "lucide-react"

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [activeFaqCategory, setActiveFaqCategory] = useState("geral")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const plans = [
    {
      name: "VPS Streaming",
      description: "Servidores no Brasil com tráfego mensal ilimitado",
      price: "74",
      icon: <Globe className="h-8 w-8" />,
      popular: false,
      features: ["Tráfego ilimitado", "SSD NVMe", "Painel de Controle", "Backup diário"],
      url: "/vps-streaming",
    },
    {
      name: "VPS Gamer",
      description: "VPS de alta performance no Brasil com Anti-DDoS PRO",
      price: "72",
      icon: <Zap className="h-8 w-8" />,
      popular: true,
      features: ["Anti-DDoS PRO", "AMD Ryzen", "Baixa latência", "Suporte 24/7"],
      url: "/vps-gamer",
    },
    {
      name: "Semi-Dedicados",
      description: "Servidores robustos Windows e Linux no Brasil",
      price: "299",
      icon: <Server className="h-8 w-8" />,
      popular: false,
      features: ["Windows/Linux", "Recursos dedicados", "IP dedicado", "Acesso root"],
      url: "/semi-dedicado",
    },
    {
      name: "Servidores Dedicados",
      description: "Servidores físicos de alta performance no Brasil",
      price: "1190",
      icon: <Cpu className="h-8 w-8" />,
      popular: false,
      features: ["Hardware dedicado", "Máxima performance", "Configuração custom", "Suporte premium"],
      url: "/dedicado",
    },
  ]

  const features = [
    {
      icon: <Zap className="h-12 w-12" />,
      title: "Latência de 20ms",
      description:
        "Experiência de jogo fluida e resposta rápida para seus jogadores, garantindo a melhor jogabilidade.",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: <Shield className="h-12 w-12" />,
      title: "Proteção DDoS",
      description: "Defesa integrada contra ataques, mantendo seus serviços sempre online e protegidos 24/7.",
      color: "from-red-400 to-pink-500",
    },
    {
      icon: <Clock className="h-12 w-12" />,
      title: "Uptime 99,9%",
      description: "Garantimos 99,9% de uptime, mantendo seus sites e jogos sempre online para seus usuários.",
      color: "from-green-400 to-emerald-500",
    },
    {
      icon: <Headphones className="h-12 w-12" />,
      title: "Suporte 24/7",
      description: "Assistência rápida e eficiente a qualquer hora, com atendimento amigável e especializado.",
      color: "from-blue-400 to-cyan-500",
    },
  ]

  const differentials = [
    {
      icon: <Headphones className="h-8 w-8" />,
      title: "Suporte Técnico 24/7",
      description:
        "Nossa equipe de especialistas está disponível 24 horas por dia para garantir que seu servidor funcione sem interrupções.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Proteção Anti-DDoS",
      description:
        "Defesa avançada contra DDoS, firewalls configuráveis e monitoramento contínuo para proteger seus dados.",
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Tecnologia de Ponta",
      description:
        "Hardware de última geração com SSDs NVMe e processadores de alto desempenho para máxima velocidade.",
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Data Centers no Brasil",
      description:
        "Infraestrutura localizada no Brasil, garantindo baixa latência e alta disponibilidade para seus usuários.",
    },
  ]

  const whyChooseFeatures = [
    {
      icon: <HardDrive className="h-6 w-6" />,
      title: "Infraestrutura de ponta",
      description: "Servidores de última geração com hardware de alto desempenho.",
      color: "text-purple-400",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Segurança garantida",
      description: "Proteção Anti-DDoS avançada e backups automáticos.",
      color: "text-pink-400",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Suporte humanizado",
      description: "Atendimento 24/7 com especialistas prontos para ajudar.",
      color: "text-purple-400",
    },
  ]

  const operatingSystems = [
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
  ]

  const testimonials = [
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
  ]

  const faqCategories = {
    geral: {
      title: "Geral",
      subtitle: "Perguntas comuns sobre nossos serviços",
      icon: <Globe className="h-5 w-5" />,
      questions: [
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
      ],
    },
    jogos: {
      title: "Servidores de Jogos",
      subtitle: "Perguntas específicas sobre hospedagem de jogos",
      icon: <Server className="h-5 w-5" />,
      questions: [
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
    },
    vps: {
      title: "VPS",
      subtitle: "Informações sobre Servidor Virtual Privado",
      icon: <Cpu className="h-5 w-5" />,
      questions: [
        {
          question: "O que é uma VPS?",
          answer:
            "VPS (Servidor Privado Virtual) é um servidor virtual que funciona com recursos dedicados em um servidor físico compartilhado. Diferente da hospedagem compartilhada, você tem recursos garantidos e maior controle sobre o ambiente.",
          category: "Infraestrutura",
          categoryColor: "bg-blue-500/20 text-blue-400",
          icon: <Server className="h-4 w-4" />,
        },
        {
          question: "Qual a diferença entre VPS e servidor dedicado?",
          answer:
            "Um servidor dedicado oferece todo o hardware físico exclusivamente para você, enquanto uma VPS compartilha o hardware físico com outros clientes, mas com recursos dedicados. Servidores dedicados oferecem máximo desempenho e personalização, enquanto VPS oferece boa performance com custo mais acessível.",
          category: "Infraestrutura",
          categoryColor: "bg-blue-500/20 text-blue-400",
          icon: <HardDrive className="h-4 w-4" />,
        },
      ],
    },
  }

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-[#0a0a0e] text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400">Carregando...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0a0a0e] text-white">
      <script src="//code.tidio.co/9elaurpjovzpjad85zc6culhkimz00pd.js" async></script>

      {/* Background simples */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-500/15 via-purple-500/8 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-pink-500/15 via-pink-500/8 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-8">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
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
            {[
              { icon: <Zap className="h-5 w-5" />, text: "Latência ultra-baixa de até 5ms" },
              { icon: <Shield className="h-5 w-5" />, text: "Proteção contra ataques em tempo real" },
              { icon: <Cpu className="h-5 w-5" />, text: "Processadores AMD Ryzen e NVMe Enterprise" },
              { icon: <Clock className="h-5 w-5" />, text: "Garantia de 99,9% de uptime" },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
              >
                <div className="text-purple-400">{feature.icon}</div>
                <span className="text-sm text-gray-300">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Planos */}
      <section className="relative py-20 px-4 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Hospedagem sob medida para{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">você</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Desempenho e confiabilidade para levar seu projeto ao próximo nível. Planos de servidores personalizados
              com suporte técnico especializado, garantindo velocidade e segurança para seu site, jogos online ou
              aplicativos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative p-6 rounded-2xl border backdrop-blur-sm ${
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

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="h-4 w-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.url}
                  className={`block w-full py-3 rounded-xl font-semibold text-center ${
                    plan.popular
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                      : "bg-white/10 text-white border border-white/20"
                  }`}
                >
                  Ver todos os planos
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nova Seção: Por que escolher a NeonHost - Layout em Cards */}
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
            {/* Cards Grid - 2 colunas */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Card 1 - Segurança Avançada */}
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 mr-4">
                    <Shield className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Segurança Avançada</h3>
                </div>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  Proteção DDoS premium, firewall avançado e monitoramento 24/7 para máxima segurança dos seus dados e
                  aplicações
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center text-green-400">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span className="text-gray-300">Firewall configurável</span>
                  </div>
                  <div className="flex items-center text-green-400">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span className="text-gray-300">Monitoramento em tempo real</span>
                  </div>
                  <div className="flex items-center text-green-400">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span className="text-gray-300">Backup automático</span>
                  </div>
                  <div className="flex items-center text-green-400">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span className="text-gray-300">SSL gratuito</span>
                  </div>
                </div>
              </div>

              {/* Card 2 - Performance Superior */}
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 mr-4">
                    <Zap className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Performance Superior</h3>
                </div>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  Servidores AMD Ryzen com SSD NVMe, rede de alta velocidade e otimizações para máxima performance
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center text-green-400">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span className="text-gray-300">SSD NVMe ultra-rápido</span>
                  </div>
                  <div className="flex items-center text-green-400">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span className="text-gray-300">Processadores AMD Ryzen</span>
                  </div>
                  <div className="flex items-center text-green-400">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span className="text-gray-300">Rede 10Gbps</span>
                  </div>
                  <div className="flex items-center text-green-400">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span className="text-gray-300">Cache otimizado</span>
                  </div>
                </div>
              </div>

              {/* Card 3 - Infraestrutura Nacional (Destacado) */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-2 border-purple-500/30 hover:border-purple-500/50 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500/30 to-pink-500/30 text-purple-300 mr-4">
                    <Globe className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Infraestrutura Nacional</h3>
                </div>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  Datacenter tier 1 no Brasil com conectividade premium para menor latência e melhor experiência
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center text-green-400">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span className="text-gray-300">Datacenter Tier 1</span>
                  </div>
                  <div className="flex items-center text-green-400">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span className="text-gray-300">Múltiplas operadoras</span>
                  </div>
                  <div className="flex items-center text-green-400">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span className="text-gray-300">Redundância total</span>
                  </div>
                  <div className="flex items-center text-green-400">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span className="text-gray-300">Energia backup</span>
                  </div>
                </div>
              </div>

              {/* Card 4 - Suporte Especializado */}
              <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 mr-4">
                    <Headphones className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Suporte Especializado</h3>
                </div>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  Equipe técnica brasileira disponível 24/7 com conhecimento especializado em cada tipo de servidor
                </p>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div className="flex items-center text-green-400">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span className="text-gray-300">Suporte em português</span>
                  </div>
                  <div className="flex items-center text-green-400">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span className="text-gray-300">Técnicos especializados</span>
                  </div>
                  <div className="flex items-center text-green-400">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span className="text-gray-300">Chat ao vivo</span>
                  </div>
                  <div className="flex items-center text-green-400">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span className="text-gray-300">Tickets prioritários</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Imagem do Datacenter */}
            <div className="lg:col-span-1">
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500/10 to-pink-500/10 p-1">
                <Image
                  // src="/svgs/Cloud hosting-pana.svg"
                  src="/games/page/about-datacenter.webp"
                  alt="Datacenter NeonHost - Infraestrutura de alta tecnologia"
                  width={400}
                  height={500}
                  className="rounded-xl w-full h-auto object-cover"
                />
                {/* Overlay com informações */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/60 backdrop-blur-sm border border-white/10">
                  <h4 className="text-white font-bold mb-2">Datacenter Tier 1</h4>
                  <p className="text-gray-300 text-sm">Infraestrutura de classe mundial localizada no Brasil</p>
                </div>
              </div>
            </div>
          </div>

          {/* Estatísticas */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "99.9%", label: "Uptime Garantido", icon: <Clock className="h-5 w-5" /> },
              { value: "24/7", label: "Suporte Técnico", icon: <Headphones className="h-5 w-5" /> },
              { value: "15ms", label: "Latência Média", icon: <Zap className="h-5 w-5" /> },
              { value: "348Tbps", label: "Proteção DDoS", icon: <Shield className="h-5 w-5" /> },
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                <div className="flex justify-center mb-2 text-purple-400">{stat.icon}</div>
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nova Seção: Sistemas Operacionais com Imagens */}
      <section className="relative py-20 px-4 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Confira os{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                sistemas
              </span>{" "}
              disponíveis
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto">
              Crie uma nova instância com seu sistema operacional preferido ou aplicativo pré-instalado em apenas alguns
              segundos.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {operatingSystems.map((os, index) => (
              <div
                key={index}
                className={`group p-8 rounded-2xl border backdrop-blur-sm hover:scale-105 transition-all duration-300 cursor-pointer ${os.color}`}
              >
                <div className="text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 relative">
                      <Image
                        src={os.image || "/placeholder.svg"}
                        alt={`${os.name} logo`}
                        width={64}
                        height={64}
                        className="object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{os.name}</h3>
                  <p className="text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {os.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Informação adicional */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30">
              <Server className="h-5 w-5 text-purple-400 mr-2" />
              <span className="text-purple-300 font-medium">Instalação automática em menos de 60 segundos</span>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Diferenciais */}
      <section className="relative py-20 px-4 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Conheça os nossos{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                diferenciais
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Descubra por que milhares de clientes escolhem a NeonHost para seus projetos online de sucesso!
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {differentials.map((item, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Depoimentos */}
      <section className="relative py-20 px-4 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 mb-6">
              <Quote className="h-8 w-8 text-purple-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Experiências{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">reais</span>{" "}
              de nossos clientes
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Descubra por que empresas e gamers escolhem a NeonHost para suas necessidades de hospedagem de alta
              performance
            </p>
          </div>

          {/* Testimonial ativo */}
          <div className="relative p-8 md:p-12 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-sm mb-8">
            <div className="flex mb-6">
              {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>

            <blockquote className="text-xl md:text-2xl text-gray-200 mb-8 italic leading-relaxed">
              "{testimonials[activeTestimonial].text}"
            </blockquote>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold mr-4">
                  {testimonials[activeTestimonial].avatar}
                </div>
                <div>
                  <div className="font-bold text-white text-lg">{testimonials[activeTestimonial].name}</div>
                  <div className="text-gray-400">{testimonials[activeTestimonial].role}</div>
                </div>
              </div>
              <div className="hidden md:block">
                <span className="px-4 py-2 rounded-full bg-purple-500/20 text-purple-400 text-sm font-medium">
                  {testimonials[activeTestimonial].service}
                </span>
              </div>
            </div>
          </div>

          {/* Navegação dos testimonials */}
          <div className="flex justify-center space-x-2 mb-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full ${activeTestimonial === index ? "bg-purple-500" : "bg-gray-600"}`}
              />
            ))}
          </div>

          {/* Estatísticas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "99.9%", label: "Uptime garantido" },
              { value: "24/7", label: "Suporte técnico" },
              { value: "500+", label: "Clientes satisfeitos" },
              { value: "15ms", label: "Latência média" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Melhorado com Categorias */}
      

      {/* CTA Final */}
      <section className="relative py-20 px-4 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="p-8 md:p-12 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Seu sonho, nossa missão!</h2>
                <p className="text-gray-300 leading-relaxed mb-8">
                  Oferecemos uma ampla gama de planos para atender a diversos tipos de projetos, desde hospedagem de
                  servidores de Minecraft, FiveM e outros jogos, até VPS para aplicações de sites, bots e soluções
                  digitais em geral. Nossas opções escaláveis e econômicas garantem desempenho e confiabilidade,
                  atendendo tanto a pequenas iniciativas quanto a grandes demandas de infraestrutura.
                </p>
              </div>

              <div className="hidden lg:block">
                <Image
                  src="/games/page/catneon.png"
                  alt="NeonHost Mascote"
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
