"use client"

import { Button, Card, Divider } from "@nextui-org/react"
import { plans } from "./plans"
import { AccordionItems } from "../../_components/accordion"
import { Server, Zap, Shield, Clock, Code, Database, Globe, Headphones } from "lucide-react"
import Link from "next/link"
import ComparisonTable from "../../_components/comparison-table"
import { CardProduts } from "../../_components/card-products"

export default function NodeJSHosting() {
  const features = [
    {
      icon: <Server className="w-8 h-8" />,
      title: "Infraestrutura Robusta",
      description: "Servidores dedicados com SSD NVMe e processadores de última geração para máxima performance.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Deploy Instantâneo",
      description: "Faça deploy de suas aplicações NodeJS em segundos com nossa plataforma otimizada.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Proteção DDoS",
      description: "Proteção avançada contra ataques DDoS incluída em todos os planos sem custo adicional.",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "99.99% Uptime",
      description: "Garantia de disponibilidade com monitoramento 24/7 e redundância completa.",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Múltiplas Versões",
      description: "Suporte para todas as versões do Node.js, incluindo as mais recentes LTS.",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Banco de Dados",
      description: "MySQL, PostgreSQL e MongoDB inclusos com backups automáticos diários.",
    },
  ]

  return (
    <section className="max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="pt-[25%] md:pt-[15%] lg:pt-[7%]">
        <div className="grid grid-cols-1 lg:grid-cols-2 mx-auto items-center max-w-7xl gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-500/20 rounded-lg">
                <Code className="w-6 h-6 text-green-400" />
              </div>
              <span className="text-green-400 font-semibold">Hospedagem NodeJS</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Hospedagem NodeJS Profissional
            </h1>
            <p className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-8">
              Hospede suas aplicações NodeJS com a infraestrutura mais avançada do Brasil. Performance excepcional,
              escalabilidade automática e suporte especializado 24/7.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 mb-8">
              <span className="bg-green-600/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium">
                ✓ SSL Grátis
              </span>
              <span className="bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium">
                ✓ CDN Global
              </span>
              <span className="bg-purple-600/20 text-purple-400 px-4 py-2 rounded-full text-sm font-medium">
                ✓ Auto-scaling
              </span>
              <span className="bg-pink-600/20 text-pink-400 px-4 py-2 rounded-full text-sm font-medium">
                ✓ Backup Automático
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#plans">
                <Button className="bg-green-600 text-white font-bold px-8 py-3 text-lg">Ver Planos</Button>
              </a>
              <Link href="https://discord.gg/rGP7prMqF3" target="_blank">
                <Button variant="bordered" className="border-gray-600 text-gray-300 px-8 py-3 text-lg">
                  Falar com Especialista
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <img
              src="/svgs/Cloud hosting-pana.svg"
              alt="NodeJS Hosting"
              className="mx-auto w-full max-w-[480px] lg:max-w-none h-auto sm:h-[480px] lg:h-[720px]"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="pt-[10%] px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Por que escolher nossa hospedagem NodeJS?</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Oferecemos a infraestrutura mais avançada e o suporte mais especializado para suas aplicações NodeJS no
            Brasil.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 bg-gray-900/50 border border-gray-800">
              <div className="text-green-400 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Plans Section */}
      <section className="pt-[10%] container mx-auto px-4 lg:px-6" id="plans">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Planos de Hospedagem NodeJS</h2>
          <p className="text-gray-400 mx-auto text-lg max-w-3xl">
            Escolha o plano ideal para sua aplicação. Todos os planos incluem SSL grátis, proteção DDoS e suporte
            especializado 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 xl:gap-6">
          {plans.map((plan) => (
            <CardProduts
              key={plan.name}
              price={plan.price}
              link={plan.link}
              description={plan.description}
              name={plan.name}
            />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="pt-[10%] px-4 lg:px-6">
        <div className="container mx-auto">
          <div className="rounded-2xl bg-gray-900 border border-gray-800 p-8 sm:p-12 text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Precisa de recursos customizados?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Nossa equipe pode criar uma solução personalizada para suas necessidades específicas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://discord.gg/rGP7prMqF3" target="_blank">
                <Button className="bg-green-600 text-white font-bold px-8 py-3">Falar com Especialista</Button>
              </Link>
              <Link href="https://app.neonhost.com.br/submitticket.php?step=2&deptid=1" target="_blank">
                <Button variant="bordered" className="border-gray-600 text-gray-300 px-8 py-3">
                  Abrir Ticket
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ComparisonTable />

      {/* FAQ Section */}
      <Divider className="mt-20" />
      <section className="mt-[4%] mb-20 px-4 lg:px-6">
        <div className="items-center">
          <h1 className="text-xl md:text-4xl font-bold text-center pb-4 text-green-400">
            Perguntas Frequentes
            <div className="relative w-[140px] md:w-[340px] mx-auto mt-2 h-[1px] bg-green-400" />
          </h1>
          <p className="text-base opacity-70 mb-4 text-center max-w-[300px] md:max-w-2xl mx-auto">
            Tire suas dúvidas sobre nossa hospedagem NodeJS e comece a hospedar agora mesmo.
          </p>
        </div>
        <AccordionItems />
      </section>

      {/* Support Section */}
      <section className="mt-[5%] px-4 lg:px-6">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center pb-4 text-green-400">
            Suporte Especializado em NodeJS
            <div className="relative w-[140px] sm:w-[280px] md:w-[420px] mx-auto mt-2 h-[1px] bg-green-400" />
          </h1>
          <p className="text-base opacity-70 mb-4 text-center max-w-[300px] md:max-w-2xl mx-auto">
            Nossa equipe de desenvolvedores NodeJS está pronta para ajudar você a configurar, otimizar e escalar suas
            aplicações.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto mt-5 mb-20">
          <Card className="py-8 sm:py-10 px-4 sm:px-5 border-none bg-gray-900/50 border border-gray-800 w-full relative">
            <div className="text-green-400 mb-4 flex justify-center">
              <Code size={64} />
            </div>
            <h1 className="font-bold text-gray-100 text-xl text-center mb-4">Deploy Assistido</h1>
            <p className="mb-10 text-center text-gray-400">
              Ajudamos você a fazer o deploy de sua aplicação NodeJS com as melhores práticas de CI/CD e otimizações de
              performance.
            </p>
            <Link href="https://discord.gg/rGP7prMqF3" target="_blank">
              <Button
                className="absolute bottom-4 w-[calc(100%-32px)] left-1/2 transform -translate-x-1/2 bg-green-600"
                size="md"
              >
                Solicitar Deploy
              </Button>
            </Link>
          </Card>
          <Card className="py-8 sm:py-10 px-4 sm:px-5 border-none bg-gray-900/50 border border-gray-800 w-full relative">
            <div className="text-blue-400 mb-4 flex justify-center">
              <Headphones size={64} />
            </div>
            <h1 className="font-bold text-gray-100 text-xl text-center mb-4">Suporte DevOps 24/7</h1>
            <p className="mb-10 text-center text-gray-400">
              Suporte técnico especializado em NodeJS e DevOps disponível 24 horas. Resolva problemas rapidamente com
              nossa equipe experiente.
            </p>
            <Link href="https://discord.gg/rGP7prMqF3" target="_blank">
              <Button
                className="absolute bottom-4 w-[calc(100%-32px)] left-1/2 transform -translate-x-1/2 bg-blue-600"
                size="md"
              >
                Acessar Suporte
              </Button>
            </Link>
          </Card>
          <Card className="py-8 sm:py-10 px-4 sm:px-5 border-none bg-gray-900/50 border border-gray-800 w-full relative">
            <div className="text-purple-400 mb-4 flex justify-center">
              <Globe size={64} />
            </div>
            <h1 className="font-bold text-gray-100 text-xl text-center mb-4">Documentação Completa</h1>
            <p className="mb-10 text-center text-gray-400">
              Acesse nossa documentação completa com tutoriais, exemplos de código e guias para otimizar suas aplicações
              NodeJS.
            </p>
            <Link href="https://app.neonhost.com.br/submitticket.php?step=2&deptid=1" target="_blank">
              <Button
                className="absolute bottom-4 w-[calc(100%-32px)] left-1/2 transform -translate-x-1/2 bg-purple-600"
                size="md"
              >
                Ver Documentação
              </Button>
            </Link>
          </Card>
        </div>
      </section>
    </section>
  )
}
