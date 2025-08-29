"use client"

import { Button } from "@nextui-org/react"
import { plans } from "./plans"
import { AccordionItems } from "../_components/accordion"
import { Info, Zap, Shield, Clock, Globe, Wifi, Lock, Globe2 } from "lucide-react"
import Link from "next/link"
import { CyberPlanCard } from "@/components/cyber-plan-card"
import { FeatureCard } from "@/components/feature-card"
import { MinimalDdosShield } from "@/components/minimal-ddos-shield"
import { DomainComparison } from "@/components/domain-comparison"

export default function FivemPage() {
  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Processadores AMD Ryzen",
      description: "Última geração para máxima performance",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Proteção Anti-DDoS",
      description: "Defesa avançada contra ataques",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "SSD NVMe",
      description: "Armazenamento ultra-rápido",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Rede Premium",
      description: "Conectividade de alta velocidade",
    },
  ]

  const stats = [
    { value: "99.9%", label: "Uptime" },
    { value: "5ms", label: "Latência" },
    { value: "24/7", label: "Suporte" },
    { value: "1Gbps", label: "Rede" },
  ]

  // Dados para as seções de recursos
  const cacheFeatures = {
    title: "Cache externo de alta performance",
    description:
      "Na NeonHost você conta com um sistema de cache externo com conexão de 10Gbps que proporciona uma jogabilidade extremamente fluida, mesmo em servidores pesados com diversos mods e recursos instalados.",
    badge: "Desempenho sem igual",
    speedBadge: "10GBPS",
    benefits: [
      "Ideal para servidores com muitos jogadores",
      "Queda drástica no lag e nas travadas (stuttering)",
      "Totalmente otimizado para FiveM e RedM",
      "Carregamento super rápido de mods e arquivos",
    ],
    ctaText: "Otimize sua cidade hoje!",
    ctaLink: "#plans",
    icon: <Wifi className="h-6 w-6" />,
  }

  const protectionFeatures = {
    title: "Proteção DDoS avançada",
    description:
      "Nossos servidores contam com proteção DDoS de nível empresarial, mantendo seu servidor online mesmo sob ataques.",
    badge: "Segurança de verdade",
    protectionBadge: "Proteção 24/7",
    benefits: ["Proteção em tempo real", "Filtragem inteligente", "Estabilidade garantida", "Mitigação in-line"],
    icon: <Lock className="h-6 w-6" />,
  }

  const domainFeatures = {
    title: "Endereço de conexão personalizado",
    description:
      "Com a nossa hospedagem, seu servidor ganha um domínio exclusivo como seudominio.fivembr.com. Esqueça IPs difíceis — seus jogadores entram direto com um nome fácil de lembrar e com a cara do seu projeto.",
    badge: "Identidade única",
    benefits: [
      "Escolha o nome que quiser (ex: cidadealta.fivembr.com)",
      "Conexão mais simples e profissional",
      "Mais fácil de divulgar nas redes e banners",
      "Passa mais confiança para novos jogadores",
    ],
    icon: <Globe2 className="h-6 w-6" />,
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden relative">
      {/* Background com blurs - igual à página principal */}
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
        {/* Hero Section Renovada */}
        <section className="pt-[25%] md:pt-[15%] lg:pt-[7%] mb-20">
          <div className="text-center mb-12">
            <div>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 border border-purple-200 text-purple-600 text-sm font-medium mb-6">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                VPS Premium no Brasil
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Servidores VPS{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                FiveM
              </span>{" "}
            </h1>

            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Servidores virtuais de alta performance com tecnologia de ponta, otimizados para jogos e aplicações
              críticas. Experimente a diferença Neon.
            </p>

            {/* Stats em linha */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-700">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link href="#plans">
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium px-8 py-6 rounded-xl hover:opacity-90 transition-all">
                  Ver Planos
                </Button>
              </Link>
              <Link href="#features">
                <Button
                  variant="ghost"
                  className="border border-gray-300 text-gray-700 font-medium px-8 py-6 rounded-xl hover:bg-gray-50 transition-all"
                >
                  Explorar Recursos
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gray-50 border border-gray-200 hover:border-purple-300 transition-all duration-300 group backdrop-blur-sm"
              >
                <div className="p-3 rounded-xl bg-gradient-to-r from-purple-100 to-pink-100 text-purple-600 w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-700 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Planos Section - Cards mais largos */}
        <section className="py-20 container mx-auto px-4 lg:px-6" id="plans">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Escolha seu{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Plano Ideal
              </span>
            </h2>
            <p className="text-gray-700 mx-auto text-lg max-w-2xl">
              Planos flexíveis com recursos dedicados e suporte especializado para seu projeto.
            </p>
          </div>

          {/* Cards de planos atualizados - design futurista */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {plans.map((plan, index) => (
              <CyberPlanCard
                key={plan.name}
                name={plan.name}
                ram={plan.description.ram}
                cores={plan.description.cores}
                ssd={plan.description.ssd}
                price={plan.price}
                link={plan.link || ""}
                additionalFeatures={plan.description.attrs}
                index={index}
              />
            ))}
          </div>
        </section>

        {/* Seções de recursos destacados - REORGANIZADAS */}
      

        {/* CTA Section */}
        <section className="py-16 px-4 lg:px-6">
          <div className="container mx-auto">
            <div className="rounded-2xl bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200 p-8 md:p-12 text-center backdrop-blur-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Precisa de uma configuração personalizada?
              </h2>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                Nossa equipe de especialistas pode criar uma solução sob medida para suas necessidades específicas.
              </p>
              <Button className="bg-white text-purple-600 hover:bg-gray-50 font-bold px-8 py-3">
                Falar com Especialista
              </Button>
            </div>
          </div>
        </section>


        {/* Support Section */}
        <section className="mt-16 px-4 lg:px-6 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Suporte Especializado
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Nossa equipe está pronta para ajudar você 24 horas por dia, 7 dias por semana.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: <Info size={48} />,
                title: "Configuração Assistida",
                description: "Ajudamos você a configurar seu servidor do zero com as melhores práticas.",
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
                description: "Base de conhecimento com tutoriais e guias para otimizar seu servidor.",
                link: "https://app.neonhost.com.br/submitticket.php?step=2&deptid=1",
                buttonText: "Ver Tutoriais",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gray-50 border border-gray-200 hover:border-purple-300 transition-all duration-300 group backdrop-blur-sm"
              >
                <div className="text-purple-600 mb-4 group-hover:scale-110 transition-transform duration-300 p-3 rounded-xl bg-purple-100 w-fit">
                  {item.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-xl mb-3">{item.title}</h3>
                <p className="text-gray-700 mb-6">{item.description}</p>
                <Link href={item.link} target="_blank">
                  <Button
                    variant="ghost"
                    className="w-full border border-gray-300 hover:bg-gray-100 text-gray-700 font-medium"
                  >
                    {item.buttonText}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </section>
    </div>
  )
}
