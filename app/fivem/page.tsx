"use client"

import { Button } from "@nextui-org/react"
import { plans } from "./plans"
import {
  Info,
  Zap,
  Shield,
  Clock,
  Globe,
  Wifi,
  Globe2,
  Users,
  Server,
  Gauge,
  CheckCircle2,
  Cpu,
  HardDrive,
  Network,
  Speech as Speed,
  Terminal,
  Rocket,
  Settings,
  Cloud,
} from "lucide-react"
import Link from "next/link"
import { CyberPlanCard } from "@/components/cyber-plan-card"
import Image from "next/image"

export default function FivemPage() {
  const features = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "AMD Ryzen 9 9900X",
      description: "Processador de última geração para máxima performance",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Proteção Anti-DDoS",
      description: "Defesa avançada contra ataques em tempo real",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "SSD NVMe",
      description: "Armazenamento ultra-rápido para carregamento instantâneo",
    },
    {
      icon: <Wifi className="h-6 w-6" />,
      title: "Cache 10Gbps",
      description: "Sistema de cache externo de alta performance",
    },
  ]

  const stats = [
    { value: "99.9%", label: "Uptime Garantido" },
    { value: "<5ms", label: "Latência" },
    { value: "24/7", label: "Suporte" },
    { value: "10Gbps", label: "Cache" },
  ]

  const benefits = [
    {
      icon: <Server className="h-5 w-5" />,
      title: "Instalador Automático de Mods",
      description: "Instale mods e recursos com apenas um clique",
    },
    {
      icon: <Gauge className="h-5 w-5" />,
      title: "Mudança Automática de Versão",
      description: "Atualize seu servidor sem complicação",
    },
    {
      icon: <Globe2 className="h-5 w-5" />,
      title: "Domínio Personalizado",
      description: "seuservidor.fivembr.com incluído gratuitamente",
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "Painel Pterodactyl",
      description: "Gerenciamento completo e intuitivo",
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm mb-8">
            <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Powered by AMD Ryzen 9 9900X</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Servidores FiveM de
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-amber-500 bg-clip-text text-transparent">
              Alta Performance
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Hospedagem premium para sua cidade de roleplay com tecnologia de ponta e suporte especializado
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
            <Link href="#plans">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-8 py-6 text-lg rounded-xl hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
              >
                Ver Planos
              </Button>
            </Link>
            <Link href="#features">
              <Button
                size="lg"
                variant="bordered"
                className="border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold px-8 py-6 text-lg rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
              >
                Conhecer Recursos
              </Button>
            </Link>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-amber-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Suporte especializado disponível{" "}
                <span className="bg-gradient-to-r from-purple-600 to-amber-500 bg-clip-text text-transparent">
                  24 horas por dia, 7 dias por semana
                </span>{" "}
                para te ajudar com suas dúvidas.
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Atendemos por WhatsApp, Ticket, Discord e chat online.
              </p>
              <Link href="https://discord.gg/rGP7prMqF3" target="_blank">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-8 py-6 text-lg rounded-xl hover:opacity-90 transition-all shadow-lg hover:shadow-xl"
                >
                  Entre em contato
                </Button>
              </Link>
            </div>

            {/* Right Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-8 rounded-2xl bg-white dark:bg-gray-800/50 border-2 border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-600 hover:shadow-xl transition-all duration-300 group">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/50 dark:to-purple-800/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Settings className="h-7 w-7 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Painel de controle</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Na NeonHost você tem a possibilidade de executar funções na máquina remotamente pelo nosso painel de
                  controle exclusivo.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-white dark:bg-gray-800/50 border-2 border-green-200 dark:border-green-800 hover:border-green-400 dark:hover:border-green-600 hover:shadow-xl transition-all duration-300 group">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/50 dark:to-green-800/50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="h-7 w-7 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Upgrade sem percas</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Você pode melhorar as configurações da sua máquina sempre que precisar sem perder nenhum arquivo. O
                  processo leva menos de 1 minuto.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Painel de controle{" "}
                <span className="bg-gradient-to-r from-purple-600 to-amber-500 bg-clip-text text-transparent">
                  poderoso
                </span>
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                Assuma o controle do seu VPS com nosso painel de controle intuitivo. Monitore recursos, gerencie backups
                e dimensione seu servidor com apenas alguns cliques.
              </p>

              <div className="space-y-4">
                {[
                  { icon: <Gauge className="h-5 w-5" />, text: "Monitoramento de recursos em tempo real" },
                  { icon: <Rocket className="h-5 w-5" />, text: "Dimensionamento e atualizações fáceis" },
                  { icon: <Terminal className="h-5 w-5" />, text: "Acesso ao terminal integrado" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-purple-100 to-amber-100 dark:from-purple-900/50 dark:to-amber-900/50 text-purple-600 dark:text-purple-400">
                      {item.icon}
                    </div>
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800">
                <Image
                  src="/painel_controlevps.png"
                  alt="Painel de Controle Poderoso"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Recursos{" "}
              <span className="bg-gradient-to-r from-purple-600 to-amber-500 bg-clip-text text-transparent">
                Nível empresarial
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Nossa hospedagem VPS combina recursos poderosos com controle total, proporcionando a flexibilidade e o
              desempenho que seus projetos precisam.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Cpu className="h-6 w-6" />,
                title: "Recursos Dedicados",
                description: "A alocação garantida de núcleos de CPU e RAM para desempenho consistente.",
              },
              {
                icon: <HardDrive className="h-6 w-6" />,
                title: "Armazenamento",
                description: "Desempenho otimizado: NVMe para máquinas Gamer & Outlet.",
              },
              {
                icon: <Shield className="h-6 w-6" />,
                title: "Proteção DDoS",
                description: "Proteção DDoS de nível empresarial incluída em cada implantação de VPS.",
              },
              {
                icon: <Speed className="h-6 w-6" />,
                title: "Alto Desempenho",
                description: "Infraestrutura otimizada garantindo máxima velocidade e mínima latência.",
              },
              {
                icon: <Network className="h-6 w-6" />,
                title: "Largura de Banda de Rede",
                description: "Banda larga ilimitada com conectividade de rede de alta velocidade até 1Gbps.",
              },
              {
                icon: <Terminal className="h-6 w-6" />,
                title: "Acesso Root Completo",
                description: "Controle completo sobre o seu servidor virtual com permissões de nível root.",
              },
              {
                icon: <Rocket className="h-6 w-6" />,
                title: "Provisionamento Instantâneo",
                description: "Implante seu VPS em segundos com nosso sistema automatizado de provisionamento.",
              },
              {
                icon: <Settings className="h-6 w-6" />,
                title: "Suporte a ISO Personalizada",
                description:
                  "Instale o sistema operacional de sua preferência com suporte para imagens ISO personalizadas.",
              },
              {
                icon: <Cloud className="h-6 w-6" />,
                title: "Integração com a Nuvem",
                description: "Integração perfeita com os principais serviços de nuvem e ferramentas de DevOps.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-100 to-amber-100 dark:from-purple-900/50 dark:to-amber-900/50 text-purple-600 dark:text-purple-400 w-fit mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="relative p-12 rounded-3xl bg-gradient-to-br from-purple-50 via-white to-amber-50 dark:from-purple-900/20 dark:via-gray-800 dark:to-amber-900/20 border-2 border-purple-200 dark:border-purple-800 overflow-hidden">
            {/* Badge */}
            <div className="absolute top-8 right-8">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold shadow-lg">
                <Zap className="h-4 w-4" />
                <span>10GBPS</span>
              </div>
            </div>

            {/* Content */}
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 text-sm font-medium mb-6">
                <Zap className="h-4 w-4" />
                Desempenho sem igual
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                Cache externo de alta performance
              </h2>

              <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
                Na Neon você conta com um sistema de cache externo com conexão de 10Gbps que proporciona uma
                jogabilidade extremamente fluida, mesmo em servidores pesados com diversos mods e recursos instalados.
              </p>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {[
                  { icon: <Users className="h-5 w-5" />, text: "Ideal para servidores com muitos jogadores" },
                  { icon: <Gauge className="h-5 w-5" />, text: "Queda drástica no lag e nas travadas (stuttering)" },
                  { icon: <CheckCircle2 className="h-5 w-5" />, text: "Totalmente otimizado para FiveM e RedM" },
                  { icon: <Rocket className="h-5 w-5" />, text: "Carregamento super rápido de mods e arquivos" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                    <div className="p-2 rounded-lg bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/50 dark:to-blue-900/50 text-purple-600 dark:text-purple-400 flex-shrink-0">
                      {item.icon}
                    </div>
                    <span className="font-medium text-sm">{item.text}</span>
                  </div>
                ))}
              </div>

              <Link href="#plans">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold px-8 py-4 rounded-xl hover:opacity-90 transition-all shadow-lg"
                >
                  Otimize sua cidade hoje!
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Tecnologia de Ponta</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Infraestrutura premium para garantir a melhor experiência para seus jogadores
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-xl transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-100 to-amber-100 dark:from-purple-900/50 dark:to-amber-900/50 text-purple-600 dark:text-purple-400 w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-lg">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Recursos Exclusivos</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Ferramentas que facilitam o gerenciamento do seu servidor
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-lg transition-all duration-300"
              >
                <div className="p-2 rounded-lg bg-gradient-to-br from-purple-100 to-amber-100 dark:from-purple-900/50 dark:to-amber-900/50 text-purple-600 dark:text-purple-400 flex-shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-1">{benefit.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900" id="plans">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Escolha seu{" "}
              <span className="bg-gradient-to-r from-purple-600 to-amber-500 bg-clip-text text-transparent">
                Plano Ideal
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Planos flexíveis com recursos dedicados e suporte especializado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Precisa de uma configuração personalizada?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Nossa equipe de especialistas pode criar uma solução sob medida para suas necessidades específicas
          </p>
          <Link href="https://discord.gg/rGP7prMqF3" target="_blank">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all hover:opacity-90"
            >
              Falar com Especialista
            </Button>
          </Link>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Suporte Especializado</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Nossa equipe está pronta para ajudar você 24 horas por dia, 7 dias por semana
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Info className="h-8 w-8" />,
                title: "Configuração Assistida",
                description: "Ajudamos você a configurar seu servidor do zero com as melhores práticas",
                link: "https://discord.gg/rGP7prMqF3",
                buttonText: "Solicitar Configuração",
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: "Suporte 24/7",
                description:
                  "Suporte técnico especializado disponível 24 horas por dia para resolver qualquer problema",
                link: "https://discord.gg/rGP7prMqF3",
                buttonText: "Acessar Suporte",
              },
              {
                icon: <Globe className="h-8 w-8" />,
                title: "Central de Ajuda",
                description: "Base de conhecimento com tutoriais e guias para otimizar seu servidor",
                link: "https://app.neonhost.com.br/submitticket.php?step=2&deptid=1",
                buttonText: "Ver Tutoriais",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-white dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="text-purple-600 dark:text-purple-400 mb-4 group-hover:scale-110 transition-transform duration-300 p-3 rounded-xl bg-gradient-to-br from-purple-100 to-amber-100 dark:from-purple-900/50 dark:to-amber-900/50 w-fit">
                  {item.icon}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white text-xl mb-3">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{item.description}</p>
                <Link href={item.link} target="_blank">
                  <Button
                    variant="bordered"
                    className="w-full border-2 border-gray-300 dark:border-gray-700 hover:border-purple-400 dark:hover:border-purple-500 hover:bg-purple-50 dark:hover:bg-purple-900/50 text-gray-700 dark:text-gray-300 font-medium transition-all"
                  >
                    {item.buttonText}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
