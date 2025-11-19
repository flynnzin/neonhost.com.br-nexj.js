'use client'

import Link from 'next/link'
import { Info, Shield, Zap, Globe } from 'lucide-react'

export default function gta6Layout() {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden relative">
      {/* Background com grid */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(99,130,246,0.08)_1px,transparent_1px)] bg-[size:24px_24px]"
            style={{ maskImage: "linear-gradient(transparent, black, transparent)" }}
          ></div>
        </div>

        {/* Efeitos de blur coloridos */}
        <div
          className="absolute inset-0"
          style={{
            background: `
            radial-gradient(600px circle at top left, rgba(99, 102, 241, 0.05) 0%, transparent 50%),
            radial-gradient(600px circle at bottom right, rgba(59, 130, 246, 0.05) 0%, transparent 50%)
          `,
          }}
        />
      </div>

      <section className="relative z-10 max-w-full px-4 md:px-8 lg:px-12 xl:px-16 mx-auto">
        {/* Hero Section */}
        <section className="pt-[25%] md:pt-[15%] lg:pt-[10%] mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-600 text-sm font-medium mb-6">
              <div className="w-2 h-2 bg-indigo-500 rounded-full mr-2"></div>
              Hospedagem GTA VI em Breve
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Servidores{" "}
              <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                GTA VI
              </span>{" "}
            </h1>

            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Estamos preparando uma solução completa de hospedagem para GTA VI com alta performance, proteção avançada e suporte técnico 24/7. Em breve, você poderá criar e gerenciar seus servidores com facilidade.
            </p>

            <div className="inline-flex items-center px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium">
              Disponível em Breve
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 hover:border-indigo-300 transition-all duration-300 group backdrop-blur-sm">
              <div className="p-3 rounded-xl bg-indigo-100 text-indigo-600 w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Proteção Anti-DDoS</h3>
              <p className="text-gray-600 text-sm">
                Proteção avançada contra ataques para manter seu servidor sempre online e seguro.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 hover:border-indigo-300 transition-all duration-300 group backdrop-blur-sm">
              <div className="p-3 rounded-xl bg-indigo-100 text-indigo-600 w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Alta Performance</h3>
              <p className="text-gray-600 text-sm">
                Servidores com SSD NVMe e processadores de última geração para máxima velocidade.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 hover:border-indigo-300 transition-all duration-300 group backdrop-blur-sm">
              <div className="p-3 rounded-xl bg-indigo-100 text-indigo-600 w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Baixa Latência</h3>
              <p className="text-gray-600 text-sm">
                Servidores em São Paulo para garantir conexão rápida e o melhor ping.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 hover:border-indigo-300 transition-all duration-300 group backdrop-blur-sm">
              <div className="p-3 rounded-xl bg-indigo-100 text-indigo-600 w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                <Info className="h-6 w-6" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Suporte 24/7</h3>
              <p className="text-gray-600 text-sm">
                Equipe técnica disponível sempre para ajudar com suas dúvidas e problemas.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 mb-20">
          <div className="rounded-2xl bg-gradient-to-r from-indigo-500/20 to-blue-500/20 border border-indigo-300/30 p-8 md:p-16 text-center backdrop-blur-sm">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
              GTA 6 está chegando!
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg">
              Fique atento! Em breve você poderá gerenciar, configurar e controlar seus servidores GTA VI através de nosso painel de controle intuitivo com todas as ferramentas necessárias.
            </p>
            <Link href="/contact" className="inline-flex items-center px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all duration-300">
              Notifique-me quando estiver pronto
            </Link>
          </div>
        </section>
      </section>
    </div>
  )
}
