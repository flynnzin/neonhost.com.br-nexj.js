"use client"

import { Button } from "@nextui-org/react"
import { plans } from "./plans"
import { AccordionItems } from "../_components/accordion"
import { Info, Zap, Shield, Globe, Server, Wifi, Lock, Globe2 } from "lucide-react"
import Link from "next/link"
import { CyberPlanCard } from "@/components/cyber-plan-card"
import { FeatureCard } from "@/components/feature-card"
import { SimpleDdosShield } from "@/components/simple-ddos-shield"
import { DomainComparison } from "@/components/domain-comparison"

export default function RedMPage() {
  const stats = [
    { value: "99.9%", label: "Uptime" },
    { value: "10ms", label: "Latência" },
    { value: "24/7", label: "Suporte" },
    { value: "1Gbps", label: "Rede" },
  ]

  const features = [
    {
      icon: <Server className="h-6 w-6" />,
      title: "Recursos Dedicados",
      description: "CPU, RAM e armazenamento exclusivos",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Proteção Avançada",
      description: "Anti-DDoS e firewall configurável",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Performance Premium",
      description: "Hardware de última geração",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Conectividade Premium",
      description: "Rede de alta velocidade no Brasil",
    },
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
      "Totalmente otimizado para RedM",
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
      "Com a nossa hospedagem, seu servidor ganha um domínio exclusivo como seudominio.redmbr.com. Esqueça IPs difíceis — seus jogadores entram direto com um nome fácil de lembrar e com a cara do seu projeto.",
    badge: "Identidade única",
    benefits: [
      "Escolha o nome que quiser (ex: suacidade.neonhost.com.br)",
      "Conexão mais simples e profissional",
      "Mais fácil de divulgar nas redes e banners",
      "Passa mais confiança para novos jogadores",
    ],
    icon: <Globe2 className="h-6 w-6" />,
  }

  return (
    <div className="min-h-screen bg-[#0a0a0e] text-white overflow-hidden relative">
      {/* Background com blurs */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-500/15 via-purple-500/8 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-pink-500/15 via-pink-500/8 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
        </div>
      </div>

      <section className="relative z-10 max-w-full px-4 md:px-8 lg:px-12 xl:px-16 mx-auto">
        {/* Hero Section */}
        <section className="pt-[25%] md:pt-[15%] lg:pt-[7%] mb-20">
          <div className="text-center mb-12">
            <div>
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
                <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
                Servidores VPS RedM
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              {/* {" "} */}
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                VPS RedM
              </span>{" "}
              para seus Projetos
            </h1>

            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Recursos dedicados com a flexibilidade que você precisa. Hardware de ponta, segurança avançada e suporte
              especializado para projetos que exigem alta performance.
            </p>

            {/* Stats em linha */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
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
                  className="border border-white/20 text-white font-medium px-8 py-6 rounded-xl hover:bg-white/5 transition-all"
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
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all duration-300 group backdrop-blur-sm"
              >
                <div className="p-3 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-400 w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Planos Section - Cards Cyberpunk */}
        <section className="py-20" id="plans">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Escolha seu{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Plano Ideal
              </span>
            </h2>
            <p className="text-gray-400 mx-auto text-lg max-w-2xl">
              Planos VPS RedM com recursos garantidos e performance superior para seus projetos mais exigentes.
            </p>
          </div>

          {/* Cards Cyberpunk */}
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
        <section id="features" className="py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Recursos{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Exclusivos
              </span>
            </h2>
            <p className="text-gray-400 mx-auto text-lg max-w-2xl">
              Tecnologias avançadas para garantir a melhor experiência para você e seus jogadores.
            </p>
          </div>

          {/* Grid com Cache e DDoS lado a lado */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Cache Externo */}
            <FeatureCard
              title={cacheFeatures.title}
              description={cacheFeatures.description}
              badge={cacheFeatures.badge}
              speedBadge={cacheFeatures.speedBadge}
              benefits={cacheFeatures.benefits}
              ctaText={cacheFeatures.ctaText}
              ctaLink={cacheFeatures.ctaLink}
              icon={cacheFeatures.icon}
            />

            {/* Proteção DDoS com visualização simplificada */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
                {protectionFeatures.icon && <div className="mr-2">{protectionFeatures.icon}</div>}
                {protectionFeatures.badge}
                {protectionFeatures.protectionBadge && (
                  <span className="ml-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                    {protectionFeatures.protectionBadge}
                  </span>
                )}
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{protectionFeatures.title}</h3>
              <p className="text-gray-400 mb-6 text-sm md:text-base">{protectionFeatures.description}</p>

              {/* Visualização simplificada de DDoS */}
              <div className="mb-6">
                <SimpleDdosShield />
              </div>

              <div className="grid grid-cols-2 gap-3">
                {protectionFeatures.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <Shield
                      className={`h-5 w-5 mr-2 flex-shrink-0 mt-0.5 ${
                        index % 2 === 0 ? "text-green-400" : "text-purple-400"
                      }`}
                    />
                    <span className="text-gray-300 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Domínio Personalizado abaixo */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <FeatureCard
              title={domainFeatures.title}
              description={domainFeatures.description}
              badge={domainFeatures.badge}
              benefits={domainFeatures.benefits}
              icon={domainFeatures.icon}
              className="h-auto"
            />

            <DomainComparison />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 p-8 md:p-12 text-center backdrop-blur-sm">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Precisa de uma configuração personalizada?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Nossa equipe de especialistas pode criar uma solução sob medida para suas necessidades específicas.
            </p>
            <Button className="bg-white text-purple-600 hover:bg-white/90 font-bold px-8 py-3">
              Falar com Especialista
            </Button>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-16 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4">
              Perguntas Frequentes
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Tire suas dúvidas sobre nossos serviços VPS RedM.</p>
          </div>
          <AccordionItems />
        </section>

        {/* Support Section */}
        <section className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4">
              Suporte Especializado
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Nossa equipe está pronta para ajudar você 24 horas por dia, 7 dias por semana.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
            {[
              {
                icon: <Info size={48} />,
                title: "Consultoria Especializada",
                description: "Ajudamos você a escolher a melhor configuração para seu projeto específico.",
                link: "https://discord.gg/rGP7prMqF3",
                buttonText: "Falar com Consultor",
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
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all duration-300 group backdrop-blur-sm"
              >
                <div className="text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="font-bold text-white text-xl mb-3">{item.title}</h3>
                <p className="text-gray-400 mb-6">{item.description}</p>
                <Link href={item.link} target="_blank">
                  <Button variant="ghost" className="w-full">
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
