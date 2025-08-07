"use client"

import { useState, useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Star, Quote, ChevronLeft, ChevronRight, MessageSquare } from "lucide-react"

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.3 })
  const controls = useAnimation()

  const testimonials = [
    {
      id: 1,
      text: "A NeonHost revolucionou meu negócio online. O desempenho dos servidores é impressionante e o suporte técnico está sempre disponível para resolver qualquer problema. Recomendo fortemente para quem busca confiabilidade e velocidade.",
      name: "Eliton Correia",
      initials: "EC",
      role: "Desenvolvedor Web",
      service: "VPS Gamer",
      rating: 5,
    },
    {
      id: 2,
      text: "Migrei meu servidor de jogos para a NeonHost e a diferença foi imediata. Zero lag, uptime perfeito e o atendimento do Leonardo foi excepcional. Ele me guiou em todo o processo de migração e configuração. Estou extremamente satisfeito!",
      name: "Pedro Almeida",
      initials: "PA",
      role: "Administrador de Servidor",
      service: "VPS Ryzen",
      rating: 5,
    },
    {
      id: 3,
      text: "Como streamer, preciso de servidores confiáveis e de alta performance. A NeonHost entrega exatamente isso! A equipe de suporte é incrivelmente ágil e conhecedora. Minha experiência tem sido perfeita desde o primeiro dia.",
      name: "Arthur Mendes",
      initials: "AM",
      role: "Streamer Profissional",
      service: "Servidor Dedicado",
      rating: 5,
    },
    {
      id: 4,
      text: "Após testar várias empresas de hospedagem, finalmente encontrei a NeonHost. O suporte 24/7 realmente funciona - testei em diferentes horários e sempre fui atendido rapidamente. A estabilidade do servidor é impressionante, sem quedas em mais de 3 meses.",
      name: "Rodrigo Oliveira",
      initials: "RO",
      role: "Proprietário de E-commerce",
      service: "VPS Brasil",
      rating: 5,
    },
    {
      id: 5,
      text: "A infraestrutura da NeonHost é de primeira linha. Estou hospedando servidores de jogos que exigem muito recurso e o desempenho tem sido excepcional. O suporte técnico, especialmente o Leonardo e Luther, são extremamente competentes e prestativos.",
      name: "Igor Matos",
      initials: "IM",
      role: "Administrador de Comunidade Gaming",
      service: "VPS Gamer",
      rating: 5,
    },
    {
      id: 6,
      text: "Precisava de uma solução robusta para minha empresa e a NeonHost superou todas as expectativas. O processo de setup foi simples e o desempenho é consistentemente excelente. O suporte técnico é rápido e eficiente, resolvendo qualquer problema em minutos.",
      name: "Eric Ferreira",
      initials: "EF",
      role: "CTO de Startup",
      service: "Servidor Dedicado",
      rating: 5,
    },
  ]

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>

    if (autoplay) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length)
      }, 5000)
    }

    return () => clearInterval(interval)
  }, [autoplay, testimonials.length])

  const handlePrev = () => {
    setAutoplay(false)
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setAutoplay(false)
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const handleDotClick = (index: number) => {
    setAutoplay(false)
    setActiveIndex(index)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="relative py-20 overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={titleVariants}
        >
          <div className="inline-block mb-4">
            <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-[#7e22ce] to-[#ff3e9d]">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experiências{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ff3e9d] to-[#7e22ce]">reais</span> de
            nossos clientes
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Descubra por que empresas e gamers escolhem a NeonHost para suas necessidades de hospedagem de alta
            performance
          </p>
        </motion.div>

        <div className="relative">
          {/* Featured testimonial */}
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div
              className="relative bg-gradient-to-br from-[#151922]/80 to-[#1a1f2a]/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-gray-800/50"
              variants={itemVariants}
              key={testimonials[activeIndex].id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5 }}
            >
              <div className="absolute -top-5 -left-5">
                <div className="bg-gradient-to-br from-[#7e22ce] to-[#ff3e9d] p-0.5 rounded-full">
                  <div className="bg-[#0e1117] rounded-full p-1.5">
                    <Quote className="h-6 w-6 text-[#ff3e9d]" />
                  </div>
                </div>
              </div>

              <div className="flex mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.3 }}
                  >
                    <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  </motion.div>
                ))}
              </div>

              <motion.p
                className="text-gray-200 text-lg md:text-xl mb-8 italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                "{testimonials[activeIndex].text}"
              </motion.p>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-[#7e22ce] to-[#ff3e9d] flex items-center justify-center text-sm font-medium text-white mr-4"
                    whileHover={{ scale: 1.1 }}
                  >
                    {testimonials[activeIndex].initials}
                  </motion.div>
                  <div>
                    <p className="font-bold text-white text-lg">{testimonials[activeIndex].name}</p>
                    <p className="text-sm text-gray-400">{testimonials[activeIndex].role}</p>
                  </div>
                </div>
                <div className="hidden md:block">
                  <span className="px-4 py-2 rounded-full bg-[#7e22ce]/20 text-[#ff3e9d] text-sm font-medium">
                    {testimonials[activeIndex].service}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Navigation controls */}
            <div className="flex justify-between items-center mt-8">
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeIndex === index ? "bg-[#ff3e9d]" : "bg-gray-600"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#7e22ce] transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#7e22ce] transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Testimonial grid for smaller screens */}
        <div className="mt-16 md:hidden">
          <motion.div
            className="grid grid-cols-1 gap-6"
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="bg-gradient-to-br from-[#151922]/80 to-[#1a1f2a]/80 backdrop-blur-sm rounded-xl p-6 border border-gray-800/50"
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  borderColor: "rgba(236, 72, 153, 0.5)",
                }}
                custom={index}
              >
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-300 mb-4 text-sm">"{testimonial.text.substring(0, 120)}..."</p>

                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#7e22ce] to-[#ff3e9d] flex items-center justify-center text-xs font-medium text-white mr-3">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-bold text-white text-sm">{testimonial.name}</p>
                    <p className="text-xs text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Stats section */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {[
            { value: "99.9%", label: "Uptime garantido" },
            { value: "24/7", label: "Suporte técnico" },
            { value: "500+", label: "Clientes satisfeitos" },
            { value: "15ms", label: "Latência média" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-xl border border-gray-800/30 backdrop-blur-sm"
              variants={itemVariants}
            >
              <h3 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#ff3e9d] to-[#7e22ce] mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
