"use client"

import Link from "next/link"
import { Check, Package, Users } from "lucide-react"
import Image from "next/image"
import { plans } from "./plans"

export default function HytalePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] text-gray-900 dark:text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 md:px-8 lg:px-12">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[url('/ShadowKnight.png')] bg-cover bg-center opacity-10" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Crie seu <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">servidor de Hytale</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              Hospedagem otimizada para Hytale com AMD Ryzen 9, proteção Anti-DDoS e suporte completo a mods quando
              disponíveis. Construa seu mundo com amigos sem lag!
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#planos"
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-transform"
              >
                Ver todos os planos
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3 border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white font-semibold rounded-lg transition-colors"
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
            <h2 className="text-4xl font-bold mb-4">Escolha seu plano ideal</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Servidores otimizados para Hytale com processadores de alta performance e suporte completo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.slice(0, 4).map((plan, index) => (
              <div
                key={plan.name}
                className="relative bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 rounded-2xl p-6 hover:border-purple-500/50 transition-all duration-300"
              >
                {/* {(index === 2 || index === 3) && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-sm font-semibold">
                    Mais vendido
                  </div>
                )} */}

                <div className="flex justify-center mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-xl flex items-center justify-center">
                    <Image
                      src="/Pidgeon.webp"
                      alt="Hytale Character"
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-center mb-2">{plan.name.toUpperCase()}</h3>

                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-purple-500">
                    R${plan.price}
                    <span className="text-lg text-gray-500 dark:text-gray-400">/mês</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2 text-sm">
                    <Check className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <span>AMD Ryzen 9 7900X / 9 9900X</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <Check className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <span>{plan.description.cores}</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <Check className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <span>{plan.description.ram} DDR5 RAM</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <Check className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <span>{plan.description.ssd} SSD NVME</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <Check className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <span>Sub-domínios incluso</span>
                  </div>
                  <div className="flex items-start gap-2 text-sm">
                    <Check className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <span>Backups incluso + Mods e Plugins</span>
                  </div>
                </div>

                <Link
                  href={plan.link || "#"}
                  className="block w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 text-white font-bold text-center rounded-lg transition-all"
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
          <div className="bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-48 h-48 opacity-50">
              <Image
                src="/Snake.webp"
                alt="Hytale Character"
                width={192}
                height={192}
                className="object-contain"
              />
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-48 h-48 opacity-50">
              <Image
                src="/Snake.webp"
                alt="Hytale Character"
                width={192}
                height={192}
                className="object-contain"
              />
            </div>

            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-4">Servidor para grandes comunidades?</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">Hospede sua comunidade de Hytale com a NeonHost.</p>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Servidores AMD Ryzen 9 e suporte especializado para grandes projetos!
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 text-white font-semibold rounded-lg transition-all"
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
            <h2 className="text-4xl font-bold mb-4">Recursos exclusivos para Hytale</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Tudo que você precisa para ter o melhor servidor de Hytale</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 rounded-2xl p-8">
              <div className="w-16 h-16 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6">
                <Package className="h-8 w-8 text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Suporte completo a Mods</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Instale e gerencie mods facilmente para customizar seu servidor de Hytale quando disponíveis. Nossa
                plataforma estará pronta para suportar os principais mods da comunidade.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <Check className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span>Instalação simplificada de mods</span>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 rounded-2xl p-8">
              <div className="w-16 h-16 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Suporte Multi-Plataforma</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Hytale chegará primeiro no Windows, com suporte para Linux e MacOS planejado. Seu servidor estará pronto
                para todas as plataformas.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <Check className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
                  <span>Windows no lançamento</span>
                </li>
                <li className="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <Check className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
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
