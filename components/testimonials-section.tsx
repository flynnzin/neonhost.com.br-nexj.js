"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Star } from "lucide-react"

export default function TestimonialsSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const testimonials = [
    {
      id: 1,
      text: "Ótimo prestador de serviço e produto. Além de oferecer um suporte de ponta, a grata quando o assunto é hospedagem. Podem adquirir sem medo, pois a satisfação é garantida.",
      name: "Eliton",
      initials: "EL",
      role: "Cliente NeonHost",
    },
    {
      id: 2,
      text: "Perfeito atendimento do Leonardo sem palavras des do primeiro atendimento, no suporte e muito mais que essa pessoa ajuda. Muito obrigado por tudo.",
      name: "xPortugax",
      initials: "XP",
      role: "Cliente NeonHost",
    },
    {
      id: 3,
      text: "Melhor atendimento que eu já tive na minha vida!! Pessoal super gente boa me ajudaram com tudo e a maquina (VPS) é ótima.",
      name: "Arthur",
      initials: "AR",
      role: "Cliente NeonHost",
    },
    {
      id: 4,
      text: "O atendimento é rápido, qualquer dia qualquer hora o suporte te atende, e a host é 100% também mais de 1 mes de uso, sem problemas, espero que fique assim.",
      name: "Rodrigo Oliveira",
      initials: "RO",
      role: "Cliente NeonHost",
    },
    {
      id: 5,
      text: "Parabéns as Neonhost, e particularmente ao funcionário Leonardo e Luther, supriu todas minhas dúvidas e solucionou todos os meus problemas.",
      name: "Igor Matos",
      initials: "IM",
      role: "Cliente NeonHost",
    },
    {
      id: 6,
      text: "atendimento nota 1000 deu todo suporte na call muito prestativo indico muito",
      name: "Eric Ferreira",
      initials: "EF",
      role: "Cliente NeonHost",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24, delay: 0.2 },
    },
  }

  return (
    <section className="py-16 bg-[#0a0a0e]">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={titleVariants}
        >
          <h2 className="text-4xl font-bold">
            Veja o que os{" "}
            <motion.span
              className="text-blue-500"
              animate={{
                color: ["#3b82f6", "#8b5cf6", "#3b82f6"],
              }}
              transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
            >
              clientes
            </motion.span>{" "}
            falam sobre nossos serviços.
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 hover:border-pink-500/50 transition-colors"
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)",
                borderColor: "rgba(236, 72, 153, 0.5)",
              }}
              custom={index}
            >
              <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
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
                className="text-gray-300 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                "{testimonial.text}"
              </motion.p>

              <div className="flex items-center">
                <motion.div
                  className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-sm font-medium mr-3"
                  whileHover={{ scale: 1.1, backgroundColor: "#ec4899" }}
                >
                  {testimonial.initials}
                </motion.div>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
