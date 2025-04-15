"use client"

import { motion, useAnimation } from "framer-motion"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { Zap, ShieldCheck, HeartPulse, Cpu, Server, Gauge, Network, Shield } from "lucide-react"

// Variantes de animação aprimoradas
const textTypingVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const letterVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3 },
  },
}

// Efeito de brilho neon exclusivo
const neonGlowVariant = {
  initial: { boxShadow: "0 0 0 rgba(236, 72, 153, 0)" },
  hover: {
    boxShadow: "0 0 20px rgba(236, 72, 153, 0.6)",
    transition: { duration: 0.3, yoyo: Number.POSITIVE_INFINITY, ease: "easeInOut" },
  },
}

// Dados dos cards
const featureCards = [
  {
    icon: <Zap className="h-12 w-12 text-pink-500" />,
    title: "Rápido como um raio",
    description: "Experimente velocidades extremamente rápidas com nossa infraestrutura otimizada",
    highlight: "Até 300% mais rápido que concorrentes",
  },
  {
    icon: <ShieldCheck className="h-12 w-12 text-pink-500" />,
    title: "Proteção DDoS",
    description: "Fique protegido com nossas soluções de segurança de nível empresarial",
    highlight: "Proteção contra ataques de até 1Tbps",
  },
  {
    icon: <HeartPulse className="h-12 w-12 text-pink-500" />,
    title: "99.9% Uptime",
    description: "Confie em nossa infraestrutura altamente disponível",
    highlight: "Monitoramento 24/7 em tempo real",
  },
  {
    icon: <Cpu className="h-12 w-12 text-pink-500" />,
    title: "CPUs de última gerações",
    description: "Processadores como AMD Ryzen 9 5900x / AMD Ryzen 7 7700x",
    highlight: "Desempenho superior para suas aplicações",
  },
  {
    icon: <Server className="h-12 w-12 text-pink-500" />,
    title: "Hardware Premium",
    description: "Processadores de última geração e SSDs NVMe",
    highlight: "Componentes de alta qualidade selecionados",
  },
  {
    icon: <Gauge className="h-12 w-12 text-pink-500" />,
    title: "Armazenamento NVMe",
    description: "Velocidade de até 7.000 MB/s",
    highlight: "Acesso ultrarrápido aos seus dados",
  },
  {
    icon: <Network className="h-12 w-12 text-pink-500" />,
    title: "Network",
    description: "Portas de 1 Gbps - 10 Gbps",
    highlight: "Baixa latência para melhor experiência",
  },
  {
    icon: <Shield className="h-12 w-12 text-pink-500" />,
    title: "Segurança",
    description: "Proteção empresarial contra DDoS",
    highlight: "Certificados SSL gratuitos inclusos",
  },
]

export default function WhyChooseUs() {
  // Animação para o contador de clientes
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <motion.section
      className="pt-[15%] pb-[5%] relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Background elements exclusivos */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border border-pink-500/20 rounded-full" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-pink-500/10 rounded-full" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border border-pink-500/5 rounded-full" />
      </div>

      <div className="container relative z-10">
        <div className="text-center">
          <motion.h2
            className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"
            variants={textTypingVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {"Por que escolher a Neon Host?".split("").map((char, i) => (
              <motion.span key={i} variants={letterVariant}>
                {char}
              </motion.span>
            ))}
          </motion.h2>
          <motion.p
            className="text-sm text-accent-primary mt-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Experimente a diferença com nossas soluções de hospedagem premium
          </motion.p>
        </div>

        {/* Contador de clientes satisfeitos - Elemento exclusivo */}
        <motion.div
          className="mt-8 flex justify-center gap-12 py-6"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
          }}
        >
          {[
            { value: "100+", label: "Clientes Satisfeitos" },
            { value: "99.9%", label: "Uptime Garantido" },
            { value: "24/7", label: "Suporte Técnico" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: "easeOut" },
                },
              }}
            >
              <motion.p
                className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-transparent bg-clip-text"
                initial={{ scale: 0.8 }}
                animate={{ scale: [0.8, 1.1, 1] }}
                transition={{ duration: 0.8, delay: index * 0.2 + 0.5 }}
              >
                {stat.value}
              </motion.p>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featureCards.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
            >
              <motion.div
                className="p-6 bg-cards-dark bg-gradient-to-b from-[#0B0E13] to-[#131720] border border-gray-800/50 rounded-2xl shadow-xl transition-all duration-300 h-full flex flex-col relative overflow-hidden"
                variants={neonGlowVariant}
                initial="initial"
                whileHover="hover"
              >
                {/* Efeito de borda neon exclusivo */}
                <div className="absolute inset-0 border border-pink-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Efeito de partículas exclusivo */}
                <motion.div
                  className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.5 }}
                >
                  <div className="absolute top-1/4 right-1/4 w-1 h-1 bg-pink-500 rounded-full" />
                  <div className="absolute top-1/3 right-1/2 w-1 h-1 bg-pink-500 rounded-full" />
                  <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-pink-500 rounded-full" />
                </motion.div>

                <div className="relative z-10">
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-muted-foreground">{item.description}</p>

                  {/* Badge exclusivo destacando o diferencial */}
                  <div className="mt-4 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-pink-500/10 text-pink-400 border border-pink-500/20">
                    {item.highlight}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA exclusivo */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="inline-block p-px bg-gradient-to-r from-pink-500 to-purple-500 rounded-full">
            <button className="px-8 py-3 bg-[#0B0E13] rounded-full font-medium hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 transition-all duration-300">
              Comece agora com 15% de desconto
            </button>
          </div>
          <p className="mt-2 text-sm text-gray-400">Oferta exclusiva por tempo limitado Cupom: 15OFF2025</p>
        </motion.div>
      </div>
    </motion.section>
  )
}
