"use client"

import { plans } from "./plans"
import {
  Globe,
  Shield,
  Zap,
  Mail,
  HardDrive,
  Wifi,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Star,
  Award,
  Clock,
  Lock,
  Plus,
  Minus,
} from "lucide-react"
import Link from "next/link"
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"
import { useState } from "react"

export default function HospedagemSite() {
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, 100])
  const [expandedCard, setExpandedCard] = useState<number | null>(null)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const features = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Domínio Grátis",
      description: "Registre seu domínio sem custo adicional",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "SSL Grátis",
      description: "Certificado de segurança incluído",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Performance Premium",
      description: "SSD NVMe e CDN para máxima velocidade",
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "E-mail Profissional",
      description: "Contas de e-mail com seu domínio",
    },
  ]

  const stats = [
    { value: "99.9%", label: "Uptime" },
    { value: "24/7", label: "Suporte" },
    { value: "SSL", label: "Grátis" },
    { value: "1-Click", label: "WordPress" },
  ]

  const whyChooseUs = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Migração Gratuita",
      description: "Nossa equipe migra seu site sem custo e sem downtime",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Backup Automático",
      description: "Backups diários automáticos para total segurança",
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "Segurança Avançada",
      description: "Firewall, antivírus e proteção anti-malware",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Velocidade Otimizada",
      description: "CDN global e cache avançado para sites ultra-rápidos",
    },
  ]

  const faqItems = [
    {
      question: "O que está incluído na hospedagem de sites?",
      answer:
        "Todos os planos incluem SSL grátis, backup automático, cPanel em português, suporte 24/7, contas de e-mail profissionais e instalação WordPress com 1 clique. Também oferecemos CDN grátis e migração sem custo.",
    },
    {
      question: "Posso migrar meu site atual gratuitamente?",
      answer:
        "Sim! Nossa equipe técnica realiza a migração completa do seu site sem custo adicional e sem downtime. Cuidamos de todos os detalhes para que sua transição seja perfeita.",
    },
    {
      question: "Qual a diferença entre os planos?",
      answer:
        "Os planos diferem principalmente em espaço em disco, número de domínios e e-mails, recursos avançados como CDN premium, backup com versionamento e nível de suporte. Planos superiores incluem recursos para e-commerce e staging.",
    },
    {
      question: "O WordPress está otimizado?",
      answer:
        "Sim! Nossos servidores são otimizados especificamente para WordPress com cache avançado, PHP 8.2, MySQL otimizado e CDN. Planos superiores incluem WordPress gerenciado com atualizações automáticas.",
    },
    {
      question: "Como funciona o suporte técnico?",
      answer:
        "Oferecemos suporte 24/7 via chat, ticket e telefone. Planos superiores têm suporte prioritário e especializado. Nossa equipe é brasileira e especializada em hospedagem web.",
    },
    {
      question: "Posso fazer upgrade do meu plano?",
      answer:
        "Sim! Você pode fazer upgrade a qualquer momento sem perder dados. O processo é instantâneo e você paga apenas a diferença proporcional do período restante.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0e] text-white overflow-hidden relative">
      {/* Background com blurs */}
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

      <section className="relative z-10 max-w-full px-4 md:px-8 lg:px-12 xl:px-16 mx-auto">
        {/* Hero Section */}
        <section className="pt-[25%] md:pt-[15%] lg:pt-[7%] mb-20">
          <div className="text-center mb-12">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                Hospedagem Web Profissional
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            >
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Hospedagem de Sites
              </span>{" "}
              Rápida e Segura
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto"
            >
              Hospedagem web profissional com SSL grátis, backup automático e suporte 24/7. Perfeita para WordPress,
              e-commerce e sites corporativos com máxima performance.
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

        {/* Why Choose Us Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Por que escolher a{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                NeonHost?
              </span>
            </h2>
            <p className="text-gray-400 mx-auto text-lg max-w-2xl">
              Oferecemos muito mais que hospedagem. Oferecemos uma experiência completa para seu sucesso online.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all duration-300 backdrop-blur-sm"
              >
                <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-white mb-2 text-lg">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Planos Section - Cards Expansíveis */}
        <section className="py-20" id="plans">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Escolha seu{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Plano Ideal
              </span>
            </h2>
            <p className="text-gray-400 mx-auto text-lg max-w-2xl">
              Planos de hospedagem web com recursos profissionais e suporte especializado para todos os tipos de
              projeto.
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
                className={`group relative bg-white/5 backdrop-blur-sm border transition-all duration-300 rounded-2xl ${
                  plan.popular
                    ? "border-purple-500/50 ring-2 ring-purple-500/20"
                    : "border-white/10 hover:border-purple-500/30"
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <Star className="h-4 w-4" />
                      Mais Popular
                    </span>
                  </div>
                )}

                {/* Header do Card */}
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    {/* Left Section - Plan Info */}
                    <div className="flex items-center gap-4">
                      <button
                        onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                        className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                      >
                        {expandedCard === index ? (
                          <ChevronUp className="h-4 w-4 text-purple-400" />
                        ) : (
                          <ChevronDown className="h-4 w-4 text-purple-400" />
                        )}
                      </button>
                      <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                    </div>

                    {/* Middle Section - Specifications Grid */}
                    <div className="hidden lg:grid grid-cols-4 gap-6">
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <HardDrive className="h-4 w-4 text-purple-400" />
                          <span className="font-semibold text-white">{plan.description.storage}</span>
                        </div>
                        <span className="text-xs text-gray-400">Armazenamento</span>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <Wifi className="h-4 w-4 text-purple-400" />
                          <span className="font-semibold text-white">{plan.description.bandwidth}</span>
                        </div>
                        <span className="text-xs text-gray-400">Tráfego</span>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <Globe className="h-4 w-4 text-purple-400" />
                          <span className="font-semibold text-white">{plan.description.domains}</span>
                        </div>
                        <span className="text-xs text-gray-400">Domínios</span>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <Mail className="h-4 w-4 text-purple-400" />
                          <span className="font-semibold text-white">{plan.description.emails}</span>
                        </div>
                        <span className="text-xs text-gray-400">E-mails</span>
                      </div>
                    </div>

                    {/* Right Section - Price and Button */}
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <div className="flex items-baseline gap-1">
                          <span className="text-2xl md:text-3xl font-bold text-white">R${plan.price}</span>
                          <span className="text-sm text-gray-400">/mês</span>
                        </div>
                      </div>

                      {plan.link ? (
                        <Link href={plan.link} target="_blank">
                          <button
                            className={`font-semibold px-6 py-3 rounded-xl transition-all duration-300 ${
                              plan.popular
                                ? "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                                : "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                            }`}
                          >
                            Contratar Agora
                          </button>
                        </Link>
                      ) : (
                        <button className="bg-gray-600 text-gray-400 cursor-not-allowed px-6 py-3 rounded-xl" disabled>
                          Sem Estoque
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Mobile Specifications */}
                  <div className="lg:hidden mt-4 pt-4 border-t border-white/10">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <HardDrive className="h-4 w-4 text-purple-400" />
                          <span className="font-semibold text-white">{plan.description.storage}</span>
                        </div>
                        <span className="text-xs text-gray-400">Storage</span>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-2 mb-1">
                          <Globe className="h-4 w-4 text-purple-400" />
                          <span className="font-semibold text-white">{plan.description.domains}</span>
                        </div>
                        <span className="text-xs text-gray-400">Domínios</span>
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
                  <div className="px-6 pb-6 border-t border-white/10">
                    <div className="pt-6">
                      <h4 className="text-lg font-semibold text-white mb-4">Recursos inclusos:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {plan.description.attrs.map((attr, attrIndex) => (
                          <div key={attrIndex} className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{attr}</span>
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
          <div className="rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 p-8 md:p-12 text-center backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Precisa migrar seu site atual?</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Nossa equipe especializada faz a migração completa do seu site sem custo adicional e sem downtime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 hover:bg-white/90 font-bold px-8 py-3 rounded-xl transition-all duration-300">
                Migração Gratuita
              </button>
              <button className="border border-white/20 text-white hover:bg-white/10 font-bold px-8 py-3 rounded-xl transition-all duration-300">
                Falar com Especialista
              </button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-16 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Tire suas dúvidas sobre nossa hospedagem de sites.</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-300"
                >
                  <h3 className="font-semibold text-white pr-4">{item.question}</h3>
                  <div className="flex-shrink-0">
                    {expandedFaq === index ? (
                      <Minus className="h-5 w-5 text-purple-400" />
                    ) : (
                      <Plus className="h-5 w-5 text-purple-400" />
                    )}
                  </div>
                </button>

                <motion.div
                  initial={false}
                  animate={{ height: expandedFaq === index ? "auto" : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6 border-t border-white/10">
                    <p className="text-gray-300 pt-4">{item.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </section>
      </section>
    </div>
  )
}
