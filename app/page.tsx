"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"
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
} from "lucide-react"

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  // Detecta se o usuário prefere animações reduzidas
  const shouldReduceMotion = useReducedMotion()

  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, 100])

  // Carregamento otimizado
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  // Variantes de animação otimizadas
  const fadeInVariant = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0.1 : 0.6, ease: "easeOut" },
    },
  }

  const staggerVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1,
        delayChildren: shouldReduceMotion ? 0 : 0.2,
      },
    },
  }

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
      price: "89",
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

  const testimonials = [
    {
      name: "Arthur Mendes",
      role: "Streamer Profissional",
      service: "Servidor Dedicado",
      text: "Como streamer, preciso de servidores confiáveis e de alta performance. A NeonHost entrega exatamente isso! A equipe de suporte é incrivelmente ágil e conhecedora.",
      rating: 5,
      avatar: "AM",
    },
    {
      name: "Pedro Silva",
      role: "Desenvolvedor Web",
      service: "VPS Gamer",
      text: "Migrei todos os meus projetos para a NeonHost e a diferença foi imediata. Velocidade incrível e suporte sempre disponível quando preciso.",
      rating: 5,
      avatar: "PS",
    },
    {
      name: "Maria Santos",
      role: "Proprietária de E-commerce",
      service: "VPS Brasil",
      text: "Minha loja online nunca teve problemas desde que mudei para a NeonHost. O uptime é realmente 99,9% como prometido.",
      rating: 5,
      avatar: "MS",
    },
  ]

  const faqs = [
    {
      question: "O que é uma VPS?",
      answer:
        "VPS (Servidor Privado Virtual) é um servidor virtual que funciona com recursos dedicados em um servidor físico compartilhado. Diferente da hospedagem compartilhada, você tem recursos garantidos e maior controle sobre o ambiente.",
    },
    {
      question: "Como funciona a proteção Anti-DDoS?",
      answer:
        "Nossa proteção Anti-DDoS monitora constantemente o tráfego de rede, identificando e mitigando ataques em tempo real. Utilizamos filtros avançados e técnicas de mitigação para garantir que seu servidor permaneça online mesmo durante ataques.",
    },
    {
      question: "Qual a diferença entre VPS e servidor dedicado?",
      answer:
        "Um servidor dedicado oferece todo o hardware físico exclusivamente para você, enquanto uma VPS compartilha o hardware físico com outros clientes, mas com recursos dedicados. Servidores dedicados oferecem máximo desempenho e personalização, enquanto VPS oferece boa performance com custo mais acessível.",
    },
  ]

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
    <div className="min-h-screen bg-[#0a0a0e] text-white overflow-hidden relative">
      {/* Background otimizado com blurs nos cantos */}
      <div className="fixed inset-0 z-0">
        <motion.div className="absolute inset-0" style={{ y: backgroundY }} {...(shouldReduceMotion && { style: {} })}>
          {/* Blur no canto superior esquerdo */}
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-500/15 via-purple-500/8 to-transparent rounded-full blur-3xl"></div>

          {/* Blur no canto inferior direito */}
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-pink-500/15 via-pink-500/8 to-transparent rounded-full blur-3xl"></div>

          {/* Elementos centrais mais sutis */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
        </motion.div>
      </div>

      {/* Hero Section Otimizada */}
      <section className="relative min-h-screen flex items-center justify-center px-4 z-10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div variants={fadeInVariant} initial="hidden" animate="visible" className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-8">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
              Infraestrutura no Brasil
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInVariant}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Potencialize seu{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                mundo digital
              </span>
              {/* {!shouldReduceMotion && (
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              )} */}
            </span>{" "}
            com{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-400 bg-clip-text text-transparent">
              Neon Host
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInVariant}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Revolucionamos a hospedagem no Brasil com nossa infraestrutura exclusiva Neon Host™, combinando velocidade
            extrema, segurança avançada e tecnologia de ponta.
          </motion.p>

          {/* Features em grid - Otimizado */}
          <motion.div
            variants={staggerVariant}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            {[
              { icon: <Zap className="h-5 w-5" />, text: "Latência ultra-baixa de até 5ms" },
              { icon: <Shield className="h-5 w-5" />, text: "Proteção contra ataques em tempo real" },
              { icon: <Cpu className="h-5 w-5" />, text: "Processadores AMD Ryzen e NVMe Enterprise" },
              { icon: <Clock className="h-5 w-5" />, text: "Garantia de 99,9% de uptime" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInVariant}
                className="flex items-center space-x-3 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/30 transition-colors duration-300"
              >
                <div className="text-purple-400">{feature.icon}</div>
                <span className="text-sm text-gray-300">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Seção de Planos Otimizada */}
      <section className="relative py-20 px-4 z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Hospedagem sob medida para{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">você</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Desempenho e confiabilidade para levar seu projeto ao próximo nível. Planos de servidores personalizados
              com suporte técnico especializado, garantindo velocidade e segurança para seu site, jogos online ou
              aplicativos.
            </p>
          </motion.div>

          <motion.div
            variants={staggerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                variants={fadeInVariant}
                whileHover={shouldReduceMotion ? {} : { y: -5 }}
                className={`relative p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 ${
                  plan.popular
                    ? "bg-gradient-to-b from-purple-500/20 to-pink-500/20 border-purple-500/50"
                    : "bg-white/5 border-white/10 hover:border-purple-500/30"
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
                  className={`block w-full py-3 rounded-xl font-semibold transition-all duration-300 text-center ${
                    plan.popular
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700"
                      : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                  }`}
                >
                  Ver todos os planos
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Seção de Infraestrutura Otimizada */}
      <section className="relative py-20 px-4 z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 mb-6">
              <Server className="h-8 w-8 text-purple-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Infraestrutura
              </span>{" "}
              de Ponta
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
          </motion.div>

          <motion.div
            variants={staggerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInVariant}
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                className="group relative p-8 rounded-2xl bg-gradient-to-b from-white/5 to-white/0 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="relative z-10">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.color} mb-6`}>
                    <div className="text-white">{feature.icon}</div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Seção de Diferenciais Otimizada */}
      <section className="relative py-20 px-4 z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
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
          </motion.div>

          <motion.div
            variants={staggerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {differentials.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInVariant}
                whileHover={shouldReduceMotion ? {} : { scale: 1.01 }}
                className="group p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Seção de Depoimentos Otimizada */}
      <section className="relative py-20 px-4 z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
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
          </motion.div>

          {/* Testimonial ativo */}
          <motion.div
            key={activeTestimonial}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="relative p-8 md:p-12 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-sm mb-8"
          >
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
          </motion.div>

          {/* Navegação dos testimonials */}
          <div className="flex justify-center space-x-2 mb-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeTestimonial === index ? "bg-purple-500" : "bg-gray-600"
                }`}
              />
            ))}
          </div>

          {/* Estatísticas */}
          <motion.div
            variants={staggerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: "99.9%", label: "Uptime garantido" },
              { value: "24/7", label: "Suporte técnico" },
              { value: "500+", label: "Clientes satisfeitos" },
              { value: "15ms", label: "Latência média" },
            ].map((stat, index) => (
              <motion.div key={index} variants={fadeInVariant} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Otimizado */}
      <section className="relative py-20 px-4 z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Perguntas{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Frequentes
              </span>
            </h2>
            <p className="text-xl text-gray-400">Tire suas dúvidas sobre nossos serviços de hospedagem</p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-6" />
          </motion.div>

          <motion.div
            variants={staggerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeInVariant}
                className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                  <div className="text-purple-400">
                    {expandedFaq === index ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                  </div>
                </button>

                <motion.div
                  initial={false}
                  animate={{ height: expandedFaq === index ? "auto" : 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 text-gray-400 leading-relaxed">{faq.answer}</div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative py-20 px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="p-12 rounded-3xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 backdrop-blur-sm"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pronto para{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                começar?
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Junte-se a milhares de clientes satisfeitos e experimente a diferença da NeonHost hoje mesmo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold text-white transition-all duration-300"
              >
                Começar agora
              </motion.button>
              <motion.button
                whileHover={shouldReduceMotion ? {} : { scale: 1.02 }}
                whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                className="px-8 py-4 border border-purple-500/30 rounded-xl font-semibold text-purple-400 hover:bg-purple-500/10 transition-all duration-300"
              >
                Falar com especialista
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
<section className="relative py-20 px-4 z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={fadeInVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="p-8 md:p-12 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
          >
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
                <motion.div whileHover={shouldReduceMotion ? {} : { scale: 1.05 }} transition={{ duration: 0.3 }}>
                  <Image
                    src="/games/page/catneon.png"
                    alt="NeonHost Mascote"
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Estilos para otimização de performance */}
      <style jsx global>{`
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
        
        /* Otimização para elementos que usam transform */
        .motion-element {
          will-change: transform;
        }
        
        .motion-element:hover {
          will-change: auto;
        }
      `}</style>
    </div>
  )
}
