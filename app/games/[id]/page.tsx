"use client"

import { maintenanceConfig } from "@/config/maintenance"
import { MaintenancePage } from "@/components/maintenance-page"
import { getGameById } from "@/config/games"
import Image from "next/image"
import Link from "next/link"
import { Star, Users, Shield, Gamepad2, Heart, Share2, ChevronDown } from "lucide-react"
import { useState } from "react"

interface GamePageProps {
  params: {
    id: string
  }
}

export default function GamePage({ params }: GamePageProps) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [isFavorited, setIsFavorited] = useState(false)

  const gameData = getGameById(params.id)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      // Aqui você pode adicionar um toast de sucesso
    } catch (err) {
      console.error("Erro ao copiar URL:", err)
    }
  }

  // Verifica se está em manutenção
  if (maintenanceConfig.isGamesUnderMaintenance) {
    return (
      <MaintenancePage
        title="Jogo em Breve"
        subtitle={`${params.id.charAt(0).toUpperCase() + params.id.slice(1)} estará disponível em breve!`}
        description="Estamos finalizando a configuração deste jogo para oferecer a melhor experiência de hospedagem para você."
        showBackButton={true}
        backUrl="/games"
      />
    )
  }

  if (!gameData) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Jogo não encontrado</h1>
          <Link href="/games" className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-500">
            Voltar para jogos
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white dark:via-gray-900/50 dark:to-gray-900" />
        <div className="relative container mx-auto px-4 pt-24 pb-16">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 mb-8">
            <Link href="/" className="hover:text-gray-900 dark:hover:text-white transition-colors">
              Início
            </Link>
            <span>/</span>
            <Link href="/games" className="hover:text-gray-900 dark:hover:text-white transition-colors">
              Jogos
            </Link>
            <span>/</span>
            <span className="text-gray-900 dark:text-white">{gameData.name}</span>
          </nav>

          {/* Game Header */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-2">
              {/* Game Title & Info */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                    <Image
                      src={gameData.logo || gameData.image}
                      alt={gameData.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h1 className="text-4xl font-bold mb-2">{gameData.name}</h1>
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <span>por {gameData.developer}</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span>{gameData.rating}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{gameData.players} online</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsFavorited(!isFavorited)}
                    className={`flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                      isFavorited ? "text-red-500" : "text-gray-700 dark:text-gray-300"
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${isFavorited ? "fill-red-500" : ""}`} />
                    <span>{isFavorited ? "Favoritado" : "Favoritar"}</span>
                  </button>
                  <button
                    onClick={copyToClipboard}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>Copiar URL</span>
                  </button>
                </div>
              </div>

              {/* Featured Image */}
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-8 group">
                <Image
                  src={gameData.featuredImage || gameData.image}
                  alt={gameData.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h2 className="text-2xl font-bold mb-2 text-white">Hospedagem Premium</h2>
                  <p className="text-gray-200 dark:text-gray-300">Servidores otimizados para {gameData.name}</p>
                </div>
              </div>

              {/* Navigation Tabs */}
              <div className="flex border-b border-gray-200 dark:border-gray-700 mb-8">
                <Link
                  href={`/games/${params.id}`}
                  className="px-6 py-3 border-b-2 border-purple-500 text-purple-600 dark:text-purple-400 font-medium"
                >
                  Visão Geral
                </Link>
                <Link
                  href={`/games/${params.id}/planos`}
                  className="px-6 py-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Planos
                </Link>
                <Link
                  href={`/games/${params.id}/perguntas`}
                  className="px-6 py-3 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </div>

              {/* Description */}
              <div className="mb-8">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{gameData.description}</p>
              </div>

              {/* Features Grid */}
              <div className="mb-12">
                <h3 className="text-xl font-bold mb-6">Recursos Disponíveis</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {gameData.features.map((feature, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Gamepad2 className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">{feature}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Recurso incluído em nossos servidores</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Platform Info */}
              <div className="mb-12">
                <h3 className="text-xl font-bold mb-6">Informações Técnicas</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {gameData.platforms.map((platform, index) => (
                    <div key={index} className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
                      <div className="flex items-center gap-3">
                        <Shield className="w-5 h-5 text-purple-500" />
                        <span className="font-medium text-gray-900 dark:text-white">{platform}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reviews Section */}
              <div className="mb-12">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold">Avaliações dos Clientes</h3>
                  <Link href="#" className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-500 text-sm">
                    Ver todas →
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {gameData.testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl p-6">
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">{testimonial.title}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">por {testimonial.author}</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300">{testimonial.content}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ Section */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Perguntas Frequentes</h3>
                <div className="space-y-4">
                  {gameData.faq.slice(0, 3).map((item, index) => (
                    <div key={index} className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                      <button
                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                        className="flex items-center justify-between w-full p-6 text-left hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-900 dark:text-white"
                      >
                        <span className="font-medium">{item.question}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-gray-600 dark:text-gray-400 transition-transform ${
                            expandedFaq === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {expandedFaq === index && (
                        <div className="px-6 pb-6">
                          <p className="text-gray-700 dark:text-gray-300">{item.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Link
                    href={`/games/${params.id}/perguntas`}
                    className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-500 font-medium"
                  >
                    Ver todas as perguntas →
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                {/* Pricing Card */}
                <div className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden mb-6">
                  {/* Price Header */}
                  <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                    <div className="text-center mb-4">
                      {gameData.discount && (
                        <div className="inline-flex items-center gap-2 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                          <span>-{gameData.discount}%</span>
                        </div>
                      )}
                      <div className="space-y-1">
                        {gameData.originalPrice && (
                          <div className="text-sm text-gray-500 dark:text-gray-400 line-through">
                            R$ {gameData.originalPrice.toFixed(2).replace(".", ",")}
                          </div>
                        )}
                        <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                          R$ {gameData.price.toFixed(2).replace(".", ",")}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">por mês</div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="p-6 space-y-3">
                    <Link
                      href={`/games/${params.id}/planos`}
                      className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-xl font-medium text-center transition-all duration-300 hover:scale-105"
                    >
                      Ver Planos
                    </Link>
                    {gameData.communityLink && (
                      <Link
                        href={gameData.communityLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white py-3 rounded-xl font-medium text-center transition-colors border border-gray-200 dark:border-gray-700"
                      >
                        Comunidade
                      </Link>
                    )}
                    {gameData.vpsLink && (
                      <Link
                        href={gameData.vpsLink}
                        className="block w-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white py-3 rounded-xl font-medium text-center transition-colors border border-gray-200 dark:border-gray-700"
                      >
                        VPS Dedicado
                      </Link>
                    )}
                  </div>
                </div>

                {/* Game Details */}
                <div className="bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-2xl p-6">
                  <h4 className="font-bold mb-4 text-gray-900 dark:text-white">Detalhes do Jogo</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400">Desenvolvedor:</span>
                      <span className="font-medium text-gray-900 dark:text-white">{gameData.developer}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400">Plataformas:</span>
                      <span className="font-medium text-gray-900 dark:text-white">{gameData.platforms.join(", ")}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400">Categoria:</span>
                      <span className="font-medium text-gray-900 dark:text-white">{gameData.category}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400">Jogadores:</span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {gameData.minPlayers}-{gameData.maxPlayers}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400">RAM Mínima:</span>
                      <span className="font-medium text-gray-900 dark:text-white">{gameData.requirements.ram}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600 dark:text-gray-400">Reembolso:</span>
                      <span className="font-medium text-gray-900 dark:text-white">7 dias</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Pronto para começar?</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Oferecemos uma ampla gama de planos para atender a diversos tipos de projetos, desde hospedagem de
              servidores até soluções VPS completas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/games/${params.id}/planos`}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105"
              >
                Ver Todos os Planos
              </Link>
              <Link
                href="/contato"
                className="bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white px-8 py-3 rounded-xl font-medium transition-colors border border-gray-200 dark:border-gray-700"
              >
                Falar com Suporte
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
