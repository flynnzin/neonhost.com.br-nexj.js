"use client"

import Link from "next/link"
import { Check, Package, Users } from "lucide-react"
import Image from "next/image"
import { plans } from "./plans"

export default function HytalePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-800 dark:text-gray-200 overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 md:px-8 lg:px-12">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-100/20 to-transparent dark:from-purple-900/10 dark:via-transparent" />
        <div className="absolute inset-0 bg-[url('/hytalebanner.png')] bg-cover bg-center opacity-90 dark:opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-50 via-gray-50/80 to-transparent dark:from-gray-950 dark:via-gray-950/80 dark:to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Crie seu <span className="text-purple-600 dark:text-pink-400">servidor de Hytale</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Hospedagem otimizada para Hytale com AMD Ryzen 9, proteção Anti-DDoS e suporte completo a mods quando
              disponíveis. Construa seu mundo com amigos sem lag!
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#planos"
                className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
              >
                Ver todos os planos
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 border-2 border-purple-600 dark:border-pink-400 text-purple-600 dark:text-pink-400 hover:bg-purple-600 dark:hover:bg-pink-400 hover:text-white font-semibold rounded-lg transition-colors"
              >
                Entrar em contato
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="planos" className="py-20 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Escolha seu plano ideal</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Servidores otimizados para Hytale com processadores de alta performance e suporte completo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.slice(0, 4).map((plan, index) => (
              <div
                key={plan.name}
                className="relative bg-white dark:bg-gray-900/70 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300"
              >

                <div className="flex justify-center mb-6">
                  <div className="w-32 h-32 bg-gray-100 dark:bg-gradient-to-br dark:from-gray-800 dark:to-gray-900 rounded-xl flex items-center justify-center">
                    <Image
                      src="/Pidgeon.webp"
                      alt="Hytale Character"
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-center mb-2 text-gray-900 dark:text-white">{plan.name.toUpperCase()}</h3>

                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-purple-600 dark:text-pink-400">
                    R${plan.price}
                    <span className="text-lg text-gray-600 dark:text-gray-400">/mês</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {[
                    "AMD Ryzen 9 7950X / 9 9900X",
                    `${plan.description.cores}`,
                    `${plan.description.ram} DDR5 RAM`,
                    `${plan.description.ssd} SSD NVME`,
                    "Sub-domínios incluso",
                    "Backups incluso + Mods e Plugins",
                  ].map((feature) => (
                     <div key={feature} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                        <Check className="h-5 w-5 text-purple-600 dark:text-pink-400 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href={plan.link || "#"}
                  className="block w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-bold text-center rounded-lg transition-colors mt-auto"
                >
                  CONTRATAR
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Large Communities Section */}
      <section className="py-20 px-4 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white dark:bg-gray-900/70 border border-gray-200 dark:border-gray-800 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-48 h-48 opacity-10 dark:opacity-30">
              <Image
                src="/Snake.webp"
                alt="Hytale Character"
                width={192}
                height={192}
                className="object-contain"
              />
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-48 h-48 opacity-10 dark:opacity-30">
              <Image
                src="/Snake.webp"
                alt="Hytale Character"
                width={192}
                height={192}
                className="object-contain"
              />
            </div>

            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Servidor para grandes comunidades?</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">Hospede sua comunidade de Hytale com a NeonHost.</p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Servidores AMD Ryzen 9 e suporte especializado para grandes projetos!
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-colors"
              >
                Falar com especialista
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Exclusive Resources Section */}
      <section className="py-20 px-4 md:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Recursos exclusivos para Hytale</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Tudo que você precisa para ter o melhor servidor de Hytale</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-900/70 border border-gray-200 dark:border-gray-800 rounded-2xl p-8">
              <div className="w-16 h-16 bg-purple-100 dark:bg-pink-900/30 rounded-xl flex items-center justify-center mb-6">
                <Package className="h-8 w-8 text-purple-600 dark:text-pink-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Suporte completo a Mods</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Instale e gerencie mods facilmente para customizar seu servidor de Hytale quando disponíveis. Nossa
                plataforma estará pronta para suportar os principais mods da comunidade.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <Check className="h-5 w-5 text-purple-600 dark:text-pink-400 flex-shrink-0 mt-0.5" />
                  <span>Instalação simplificada de mods</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900/70 border border-gray-200 dark:border-gray-800 rounded-2xl p-8">
              <div className="w-16 h-16 bg-purple-100 dark:bg-pink-900/30 rounded-xl flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-purple-600 dark:text-pink-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Suporte Multi-Plataforma</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Hytale chegará primeiro no Windows, com suporte para Linux e MacOS planejado. Seu servidor estará pronto
                para todas as plataformas.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <Check className="h-5 w-5 text-purple-600 dark:text-pink-400 flex-shrink-0 mt-0.5" />
                  <span>Windows no lançamento</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <Check className="h-5 w-5 text-purple-600 dark:text-pink-400 flex-shrink-0 mt-0.5" />
                  <span>Linux e MacOS planejados</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
