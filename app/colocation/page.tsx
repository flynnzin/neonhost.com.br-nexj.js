"use client"

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"
import {
  Server,
  Shield,
  Zap,
  Clock,
  Globe,
  Thermometer,
  Wifi,
  Lock,
  CheckCircle,
  Building,
  Users,
  Award,
  ChevronDown,
} from "lucide-react"
import { useState } from "react"

export default function ColocationPage() {
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, 100])

  const [expandedPlan, setExpandedPlan] = useState<number | null>(null)

  const features = [
    {
      icon: <Building className="h-6 w-6" />,
      title: "Data Center Tier I",
      description: "Infraestrutura certificada com redundância total",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Segurança 24/7",
      description: "Monitoramento e controle de acesso rigoroso",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Energia Redundante",
      description: "UPS e geradores para 100% de uptime",
    },
    {
      icon: <Thermometer className="h-6 w-6" />,
      title: "Climatização",
      description: "Controle de temperatura e umidade precisos",
    },
    {
      icon: <Wifi className="h-6 w-6" />,
      title: "Conectividade Premium",
      description: "Múltiplos provedores e baixa latência",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Suporte Especializado",
      description: "Técnicos qualificados disponíveis 24/7",
    },
  ]

  const plans = [
    {
      name: "1U Rack",
      description: "Ideal para servidores 1U e equipamentos compactos",
      price: "299",
      specs: [
        { icon: <Server className="h-4 w-4" />, label: "1U de espaço", value: 'Rack padrão 19"' },
        { icon: <Zap className="h-4 w-4" />, label: "Energia", value: "500W inclusos" },
        { icon: <Wifi className="h-4 w-4" />, label: "Banda", value: "1Gbps compartilhado" },
        { icon: <Globe className="h-4 w-4" />, label: "IPs", value: "1 IP público" },
      ],
      features: ["Acesso remoto 24/7", "Monitoramento básico", "Suporte por ticket", "Backup de energia"],
      popular: false,
    },
    {
      name: "2U Rack",
      description: "Perfeito para servidores de médio porte",
      price: "499",
      specs: [
        { icon: <Server className="h-4 w-4" />, label: "2U de espaço", value: 'Rack padrão 19"' },
        { icon: <Zap className="h-4 w-4" />, label: "Energia", value: "1000W inclusos" },
        { icon: <Wifi className="h-4 w-4" />, label: "Banda", value: "1Gbps dedicado" },
        { icon: <Globe className="h-4 w-4" />, label: "IPs", value: "2 IPs públicos" },
      ],
      features: [
        "Acesso remoto 24/7",
        "Monitoramento avançado",
        "Suporte prioritário",
        "Backup de energia",
        "Hands-on básico",
      ],
      popular: true,
    },
    {
      name: "4U Rack",
      description: "Para servidores de alta performance",
      price: "899",
      specs: [
        { icon: <Server className="h-4 w-4" />, label: "4U de espaço", value: 'Rack padrão 19"' },
        { icon: <Zap className="h-4 w-4" />, label: "Energia", value: "2000W inclusos" },
        { icon: <Wifi className="h-4 w-4" />, label: "Banda", value: "10Gbps dedicado" },
        { icon: <Globe className="h-4 w-4" />, label: "IPs", value: "4 IPs públicos" },
      ],
      features: [
        "Acesso remoto 24/7",
        "Monitoramento premium",
        "Suporte dedicado",
        "Backup de energia",
        "Hands-on ilimitado",
        "Acesso físico agendado",
      ],
      popular: false,
    },
    {
      name: "Rack Completo",
      description: "Solução enterprise para grandes demandas",
      price: "2999",
      specs: [
        { icon: <Server className="h-4 w-4" />, label: "42U de espaço", value: "Rack dedicado" },
        { icon: <Zap className="h-4 w-4" />, label: "Energia", value: "10kW inclusos" },
        { icon: <Wifi className="h-4 w-4" />, label: "Banda", value: "100Gbps dedicado" },
        { icon: <Globe className="h-4 w-4" />, label: "IPs", value: "/28 subnet" },
      ],
      features: [
        "Acesso remoto 24/7",
        "Monitoramento enterprise",
        "Gerente de conta dedicado",
        "Backup de energia",
        "Hands-on ilimitado",
        "Acesso físico livre",
        "99.99%",
      ],
      popular: false,
    },
  ]

  const stats = [
    { value: "99.99%", label: "Uptime" },
    { value: "24/7", label: "Suporte" },
    { value: "Tier I", label: "Data Center" },
    { value: "5ms", label: "Latência" },
  ]

  const benefits = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Certificações",
      description: "Data center com certificações internacionais de segurança e qualidade",
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Segurança Física",
      description: "Controle biométrico, câmeras 24/7 e sistema de alarme integrado",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Disponibilidade",
      description: "Uptime de 99.99% com compensação automática em caso de indisponibilidade",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0e] text-white overflow-hidden relative">
      {/* Background com blurs */}
      <div className="fixed inset-0 z-0">
        <motion.div className="absolute inset-0" style={{ y: backgroundY }} {...(shouldReduceMotion && { style: {} })}>
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-500/15 via-purple-500/8 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-pink-500/15 via-pink-500/8 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
        </motion.div>
      </div>

      <section className="relative z-10 max-w-full px-4 md:px-8 lg:px-12 xl:px-16 mx-auto">
        {/* Hero Section */}
        <section className="pt-[25%] md:pt-[15%] lg:pt-[7%] mb-20">
          <div className="text-center mb-12">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                Data Center Tier I em São Paulo
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              Serviços de{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Colocation
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto"
            >
              Hospede seus servidores em nossa infraestrutura de data center Tier I com segurança máxima,
              conectividade premium e suporte especializado 24/7.
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
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all duration-300 group backdrop-blur-sm"
              >
                <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Planos Section */}
        <section className="py-20" id="plans">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Planos de{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Colocation
              </span>
            </h2>
            <p className="text-gray-400 mx-auto text-lg max-w-2xl">
              Escolha o espaço ideal para seus servidores com nossa infraestrutura de data center premium.
            </p>
          </div>

          <div className="space-y-4 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:border-purple-500/30 ${
                  plan.popular
                    ? "bg-gradient-to-r from-purple-500/10 to-pink-500/10 border-purple-500/30"
                    : "bg-white/5 border-white/10"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-6">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Mais Popular
                    </span>
                  </div>
                )}

                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  {/* Info do plano */}
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setExpandedPlan(expandedPlan === index ? null : index)}
                      className="text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <ChevronDown
                        className={`h-5 w-5 transition-transform duration-300 ${
                          expandedPlan === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div>
                      <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                      <p className="text-gray-400 text-sm">{plan.description}</p>
                    </div>
                  </div>

                  {/* Specs */}
                  <div className="hidden lg:flex items-center gap-6">
                    {plan.specs.map((spec, specIndex) => (
                      <div key={specIndex} className="flex items-center gap-2 text-sm">
                        <div className="text-purple-400">{spec.icon}</div>
                        <div>
                          <div className="text-white font-medium">{spec.label}</div>
                          <div className="text-gray-400">{spec.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Preço e botão */}
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                    </div>
                    <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 whitespace-nowrap">
                      Consultar Disponibilidade
                    </button>
                  </div>
                </div>

                {/* Specs mobile */}
                <div className="lg:hidden mt-4 grid grid-cols-2 gap-4">
                  {plan.specs.map((spec, specIndex) => (
                    <div key={specIndex} className="flex items-center gap-2 text-sm">
                      <div className="text-purple-400">{spec.icon}</div>
                      <div>
                        <div className="text-white font-medium">{spec.label}</div>
                        <div className="text-gray-400">{spec.value}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Features expandidas */}
                <motion.div
                  initial={false}
                  animate={{ height: expandedPlan === index ? "auto" : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="pt-6 border-t border-white/10 mt-6">
                    <h4 className="text-white font-semibold mb-3">Recursos inclusos:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                          <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Por que escolher nossa{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                infraestrutura?
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Oferecemos a melhor infraestrutura de data center do Brasil com padrões internacionais de qualidade.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 p-8 md:p-12 text-center backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Precisa de uma solução personalizada?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Nossa equipe de especialistas pode criar uma solução de colocation sob medida para suas necessidades
              específicas.
            </p>
            <button className="bg-white text-purple-600 hover:bg-white/90 font-bold px-8 py-3 rounded-xl transition-all duration-300">
              Falar com Especialista
            </button>
          </div>
        </section>
      </section>
    </div>
  )
}
