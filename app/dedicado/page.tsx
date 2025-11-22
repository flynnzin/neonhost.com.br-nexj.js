"use client"

import { Button, Card } from "@nextui-org/react"
import { AccordionItems } from "../_components/accordion"
import { Info, Shield, Cpu, HardDrive, MemoryStick, Network, ArrowUpFromDot, Star } from "lucide-react"
import Link from "next/link"
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion"
import { useState } from "react"

export default function Dedicados() {
  const [selectedProcessor, setSelectedProcessor] = useState<"AMD" | "Intel">("AMD")
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [0, 100])

  const plans = [
    {
      name: "AMD Ryzen 5 5600X",
      frequency: "3.7GHz até 4.6GHz",
      cores: 6,
      threads: 12,
      ram: "64GB DDR4",
      storage: "1TB SSD NVMe",
      network: "1Gbps",
      bandwidth: "20TB",
      price: 950.0,
      popular: false,
      processor: "AMD",
    },
    {
      name: "AMD Ryzen 7 7700X",
      frequency: "4.5GHz até 5.4GHz",
      cores: 8,
      threads: 16,
      ram: "128GB DDR5",
      storage: "2TB SSD NVMe",
      network: "1Gbps",
      bandwidth: "20TB",
      price: 1550.0,
      popular: true,
      processor: "AMD",
    },
    {
      name: "AMD Ryzen 9 5900X",
      frequency: "3.7GHz até 4.8GHz",
      cores: 12,
      threads: 24,
      ram: "128GB DDR4",
      storage: "2TB SSD NVMe M.2",
      network: "1Gbps",
      bandwidth: "20TB",
      price: 1400.0,
      popular: false,
      processor: "AMD",
    },
    {
      name: "AMD Ryzen 9 9950X",
      frequency: "4.3GHz até 5.7GHz",
      cores: 16,
      threads: 32,
      ram: "128GB DDR5",
      storage: "2TB SSD NVMe",
      network: "1Gbps",
      bandwidth: "20TB",
      price: 2500.0,
      popular: false,
      processor: "AMD",
    },
    {
      name: "AMD Ryzen 9 9900X",
      frequency: "4.4GHz até 5.7GHz",
      cores: 12,
      threads: 24,
      ram: "128GB DDR5",
      storage: "2TB SSD NVMe",
      network: "1Gbps",
      bandwidth: "40TB",
      price: 2100.0,
      popular: true,
      processor: "AMD",
    },
    {
      name: "AMD Ryzen 9 7900X",
      frequency: "4.7GHz até 5.6GHz",
      cores: 12,
      threads: 24,
      ram: "128GB DDR5",
      storage: "2TB SSD NVMe",
      network: "1Gbps",
      bandwidth: "40TB",
      price: 1900.0,
      popular: false,
      processor: "AMD",
    },
    // INTEL
    {
      name: "Intel i9 10900k",
      frequency: "Turbo boost até 4.9GHz",
      cores: 10,
      threads: 20,
      ram: "64GB DDR3",
      storage: "480GB SSD",
      network: "1Gbps",
      bandwidth: "20TB",
      price: 1400.0,
      popular: false,
      processor: "Intel",
    },
    {
      name: "Intel i7 10700k",
      frequency: "Turbo boost até 5.0GHz",
      cores: 8,
      threads: 16,
      ram: "64GB DDR4",
      storage: "1TB SSD",
      network: "1Gbps",
      bandwidth: "20TB",
      price: 1200.0,
      popular: true,
      processor: "Intel",
    },
    {
      name: "Intel i9 9900k",
      frequency: "Turbo boost até 5.0GHz",
      cores: 8,
      threads: 16,
      ram: "64GB DDR4",
      storage: "1TB SSD NVMe",
      network: "1Gbps",
      bandwidth: "20TB",
      price: 1200.0,
      popular: false,
      processor: "Intel",
    },
    {
      name: "Intel i9 9900k",
      frequency: "Turbo boost até 5.0GHz",
      cores: 8,
      threads: 16,
      ram: "128GB DDR4",
      storage: "2TB SSD NVMe",
      network: "1Gbps",
      bandwidth: "20TB",
      price: 1700.0,
      popular: false,
      processor: "Intel",
    },
    {
      name: "Intel i9 10900k",
      frequency: "Turbo boost até 5.3GHz",
      cores: 16,
      threads: 20,
      ram: "64GB DDR4",
      storage: "1TB SSD NVMe",
      network: "1Gbps",
      bandwidth: "20TB",
      price: 1500.0,
      popular: true,
      processor: "Intel",
    },
    {
      name: "Intel i9 10900k",
      frequency: "Turbo boost até 5.3GHz",
      cores: 16,
      threads: 20,
      ram: "128GB DDR4",
      storage: "1TB SSD NVMe",
      network: "1Gbps",
      bandwidth: "20TB",
      price: 1600.0,
      popular: false,
      processor: "Intel",
    },
    {
      name: "Intel i9 11900k",
      frequency: "Turbo boost até 5.3GHz",
      cores: 8,
      threads: 16,
      ram: "128GB DDR4",
      storage: "960GB SSD NVMe",
      network: "1Gbps",
      bandwidth: "20TB",
      price: 1900.0,
      popular: false,
      processor: "Intel",
    },
    {
      name: "Intel i9 11900k",
      frequency: "Turbo boost até 5.3GHz",
      cores: 8,
      threads: 16,
      ram: "64GB DDR4",
      storage: "960GB SSD NVMe",
      network: "1Gbps",
      bandwidth: "20TB",
      price: 1700.0,
      popular: false,
      processor: "Intel",
    },
    {
      name: "Intel i9 14900k",
      frequency: "Turbo boost até 5.3GHz",
      cores: 24,
      threads: 32,
      ram: "128GB DDR4",
      storage: "1TB SSD NVMe",
      network: "1Gbps",
      bandwidth: "40TB",
      price: 3500.0,
      popular: false,
      processor: "Intel",
    },
    {
      name: "Intel Dual Xeon SIlver 4316",
      frequency: "Turbo boost até 3.4GHz",
      cores: 24,
      threads: 80,
      ram: "512GB DDR4",
      storage: "4TB SSD NVMe + 8TB HD",
      network: "1Gbps",
      bandwidth: "40TB",
      price: 3500.0,
      popular: false,
      processor: "Intel",
    },
  ]

  const features = [
    {
      icon: <Info className="h-6 w-6" />,
      title: "Suporte 24/7",
      description:
        "99,9% de uptime e atendimento ágil para que seu servidor fique sempre online, com suporte técnico especializado em FiveM.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Proteção Anti-DDoS 449TB/s",
      description:
        "Protegemos seu servidor contra ataques DDoS para garantir estabilidade e segurança em jogos online, mantendo sua comunidade sempre conectada",
    },
    {
      icon: <HardDrive className="h-6 w-6" />,
      title: "SSD NVMe",
      description:
        "Aproveite a velocidade do SSD NVMe para garantir carregamento rápido e a melhor performance para seu servidor FiveM.",
    },
    {
      icon: <Network className="h-6 w-6" />,
      title: "Baixa Latência",
      description:
        "Servidores localizados em São Paulo, garantindo conexão rápida e com o menor ping possível para jogadores brasileiros.",
    },
  ]

  const stats = [
    { value: "99.9%", label: "Uptime" },
    { value: "15ms", label: "Latência" },
    { value: "24/7", label: "Suporte" },
    { value: "449TB/s", label: "Anti-DDoS" },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 overflow-hidden relative">
      {/* Background com blurs */}
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

      <section className="relative z-10 max-w-full px-4 md:px-8 lg:px-12 xl:px-16 mx-auto">
        {/* Hero Section */}
        <section className="pt-[25%] md:pt-[15%] lg:pt-[7%] mb-20">
          <div className="text-center mb-12">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/50 border border-purple-200 dark:border-purple-800 text-purple-600 dark:text-purple-300 text-sm font-medium mb-6">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                Hardware Exclusivo no Brasil
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Servidores{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Dedicados
              </span>{" "}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto"
            >
              Hardware exclusivo com processadores AMD Ryzen e Intel Core de última geração. Recursos 100% dedicados
              para máxima performance e total controle sobre seu ambiente.
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
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
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
                className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300 group backdrop-blur-sm"
              >
                <div className="p-3 rounded-xl bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 text-purple-600 dark:text-purple-400 w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Planos Section */}
        <section className="py-20" id="plans">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Escolha seu{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Servidor Ideal
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mx-auto text-lg max-w-2xl">
              Servidores dedicados com hardware exclusivo para máxima performance e confiabilidade.
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="bg-gray-50 dark:bg-gray-800/50 p-1 rounded-xl border border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setSelectedProcessor("AMD")}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedProcessor === "AMD"
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                    : "text-gray-600 dark:text-gray-300 hover:text-white dark:hover:text-white"
                }`}
              >
                AMD Ryzen
              </button>
              <button
                onClick={() => setSelectedProcessor("Intel")}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedProcessor === "Intel"
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                    : "text-gray-600 dark:text-gray-300 hover:text-white dark:hover:text-white"
                }`}
              >
                Intel Core
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {plans
              .filter((plan) => plan.processor === selectedProcessor)
              .map((plan, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative p-8 rounded-2xl border backdrop-blur-sm transition-all duration-300 group ${
                    plan.popular
                      ? "bg-gradient-to-b from-purple-500/20 to-pink-500/20 border-purple-300/50"
                      : "bg-gray-50 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Mais Popular
                      </span>
                    </div>
                  )}

                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{plan.frequency}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-gray-900 dark:text-white">R$ {plan.price.toFixed(2)}</div>
                      <div className="text-gray-600 dark:text-gray-400 text-sm">/mês</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                    <div className="text-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800">
                      <Cpu className="h-6 w-6 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                      <div className="text-gray-900 dark:text-white font-bold">{plan.cores} Núcleos</div>
                      <div className="text-gray-600 dark:text-gray-400 text-sm">{plan.threads} threads</div>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800">
                      <MemoryStick className="h-6 w-6 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                      <div className="text-gray-900 dark:text-white font-bold">RAM</div>
                      <div className="text-gray-600 dark:text-gray-400 text-sm">{plan.ram}</div>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800">
                      <HardDrive className="h-6 w-6 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                      <div className="text-gray-900 dark:text-white font-bold">Storage</div>
                      <div className="text-gray-600 dark:text-gray-400 text-sm">{plan.storage}</div>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800">
                      <Network className="h-6 w-6 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                      <div className="text-gray-900 dark:text-white font-bold">Rede</div>
                      <div className="text-gray-600 dark:text-gray-400 text-sm">{plan.network}</div>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800">
                      <ArrowUpFromDot className="h-6 w-6 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                      <div className="text-gray-900 dark:text-white font-bold">Tráfego</div>
                      <div className="text-gray-600 dark:text-gray-400 text-sm">{plan.bandwidth} Incluso</div>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-gray-50 dark:bg-gray-800">
                      <Shield className="h-6 w-6 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                      <div className="text-gray-900 dark:text-white font-bold">Anti-DDoS</div>
                      <div className="text-gray-600 dark:text-gray-400 text-sm">449TB/s</div>
                    </div>
                  </div>

                  <a
                    href="https://discord.gg/rGP7prMqF3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full"
                  >
                    <Button
                      className={`w-full font-bold py-3 transition-all duration-300 ${
                        plan.popular
                          ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700"
                          : "bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700"
                      }`}
                    >
                      <Star className="mr-2 h-4 w-4" />
                      Contratar Agora
                    </Button>
                  </a>
                </motion.div>
              ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-300/30 p-8 md:p-12 text-center backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Precisa de uma configuração diferente?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              Nossa equipe pode criar uma solução personalizada com as especificações exatas que você precisa.
            </p>
            <Button className="bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-400 hover:bg-gray-50 dark:hover:bg-gray-700 font-bold px-8 py-3 border border-purple-200 dark:border-purple-700">
              Solicitar Orçamento
            </Button>
          </div>
        </section>
        
        {/* Support Section */}
        <section className="mt-16 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Suporte Especializado
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Nossa equipe está pronta para ajudar você 24 horas por dia, 7 dias por semana.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: <Info size={48} />,
                title: "Configuração Assistida",
                description: "Ajudamos você a configurar seu servidor dedicado com as melhores práticas de segurança.",
                link: "https://discord.gg/rGP7prMqF3",
                buttonText: "Solicitar Configuração",
              },
              {
                icon: <Info size={48} />,
                title: "Suporte 24/7",
                description:
                  "Suporte técnico especializado disponível 24 horas por dia para resolver qualquer problema.",
                link: "https://discord.gg/rGP7prMqF3",
                buttonText: "Acessar Suporte",
              },
              {
                icon: <Info size={48} />,
                title: "Central de Ajuda",
                description: "Base de conhecimento com tutoriais e guias para otimizar seu servidor dedicado.",
                link: "https://app.neonhost.com.br/submitticket.php?step=2&deptid=1",
                buttonText: "Ver Tutoriais",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="p-6 border-none bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 group backdrop-blur-sm"
              >
                <div className="text-purple-600 dark:text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-xl mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{item.description}</p>
                <Link href={item.link} target="_blank">
                  <Button variant="ghost" className="w-full text-gray-900 dark:text-white border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700">
                    {item.buttonText}
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </section>
      </section>
    </div>
  )
}
