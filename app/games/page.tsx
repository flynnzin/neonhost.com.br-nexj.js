"use client"

import type React from "react"

import { maintenanceConfig } from "@/config/maintenance"
import { MaintenancePage } from "@/components/maintenance-page"
import {
  gamesConfig,
  getFeaturedGames,
  getPopularGames,
  getNewGames,
  getDiscountedGames,
  searchGames,
} from "@/config/games"
import {
  Search,
  Heart,
  ShoppingCart,
  Users,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  TrendingUp,
  Clock,
  Gift,
  Star,
  Play,
  ExternalLink,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

const gameCategories = {
  bestsellers: getPopularGames().slice(0, 3),
  vpsGames: [
    { id: "dayz", name: "DayZ", price: 74.9, image: "/placeholder.svg?height=60&width=60" },
    { id: "ragnarok", name: "Ragnarok", price: 74.9, image: "/placeholder.svg?height=60&width=60" },
    { id: "redm", name: "RedM", price: 74.9, image: "/placeholder.svg?height=60&width=60" },
  ],
  upcoming: [
    { id: "hytale", name: "Hytale", status: "Em breve", image: "/placeholder.svg?height=60&width=60" },
    { id: "gta6", name: "GTA 6", status: "Em breve", image: "/placeholder.svg?height=60&width=60" },
    { id: "ark2", name: "ARK 2", status: "Em breve", image: "/placeholder.svg?height=60&width=60" },
  ],
}

const newsGuides = [
  {
    id: 1,
    title: "Atualize seu jogo",
    description:
      "Seu servidor de jogo atualizou e você não sabe como atualizar, não se preocupe acompanhe nosso guia e atualize seu servidor em segundos!",
    image: "/games/palworld.webp",
    category: "Guia",
    link: "/blog/atualizar-servidor",
  },
  {
    id: 2,
    title: "Instale Modpacks automático",
    description:
      "Você não tem conhecimento em Minecraft? Isso não é um problema com nossos sistemas você pode instalar Modpacks de forma automática com apenas 1 click!",
    image: "/games/minecraft.webp",
    category: "Tutorial",
    link: "/blog/modpacks-automatico",
  },
  {
    id: 3,
    title: "Abra uma cidade Roleplay",
    description:
      "Para de perder tempo, e abra seu servidor de FiveM com a NeonHost, processadores AMD Ryzen e Proteção Anti DDoS, você possui estabilidade e segurança!",
    image: "/games/fivem.webp",
    category: "Dica",
    link: "/blog/servidor-fivem",
  },
]

export default function GamesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeTab, setActiveTab] = useState("descobrir")
  const [wishlist, setWishlist] = useState<string[]>([])
  const [cart, setCart] = useState<string[]>([])
  const [filteredGames, setFilteredGames] = useState(gamesConfig)
  const [currentGameIndex, setCurrentGameIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  const featuredGame = getFeaturedGames()[0] || gamesConfig[0]
  const gamesInHighlight = getPopularGames().slice(0, 5)

  // Filtrar jogos baseado na busca
  useEffect(() => {
    if (searchTerm) {
      setFilteredGames(searchGames(searchTerm))
    } else {
      switch (activeTab) {
        case "novidades":
          setFilteredGames(getNewGames())
          break
        case "navegar":
          setFilteredGames(getDiscountedGames())
          break
        default:
          setFilteredGames(gamesConfig)
      }
    }
  }, [searchTerm, activeTab])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const toggleWishlist = (gameId: string) => {
    setWishlist((prev) => (prev.includes(gameId) ? prev.filter((id) => id !== gameId) : [...prev, gameId]))
  }

  const addToCart = (gameId: string) => {
    if (!cart.includes(gameId)) {
      setCart((prev) => [...prev, gameId])
    }
  }

  const nextGames = () => {
    setCurrentGameIndex((prev) => (prev + 6 >= filteredGames.length ? 0 : prev + 6))
  }

  const prevGames = () => {
    setCurrentGameIndex((prev) => (prev - 6 < 0 ? Math.max(0, filteredGames.length - 6) : prev - 6))
  }

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
    setIsLoading(true)

    // Simular carregamento
    setTimeout(() => {
      setIsLoading(false)
    }, 500)
  }

  const handleBuyNow = (gameId: string) => {
    const game = gamesConfig.find((g) => g.id === gameId)
    if (game) {
      window.open(game.paymentLink, "_blank")
    }
  }

  if (maintenanceConfig.isGamesUnderMaintenance) {
    return (
      <MaintenancePage
        title={maintenanceConfig.title}
        subtitle={maintenanceConfig.subtitle}
        description={maintenanceConfig.description}
        showBackButton={true}
        backUrl="/"
      />
    )
  }

  return (
    <main className="min-h-screen bg-[#0a0a0e] text-white">
      {/* Background simples igual à página principal */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-500/15 via-purple-500/8 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-pink-500/15 via-pink-500/8 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Header Section */}
      <div className="container mx-auto px-4 pt-24 pb-8 relative z-10">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold mb-2 relative">
              Explore Nossos{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Jogos</span>
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
          </div>
          <div className="relative w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 z-10" />
            <input
              type="text"
              placeholder="Pesquisar jogos..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 backdrop-blur-sm transition-all duration-300"
            />
            {searchTerm && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800/90 backdrop-blur-sm border border-gray-700 rounded-lg shadow-2xl z-20">
                <div className="p-2">
                  <div className="text-sm text-gray-400 mb-2">Resultados ({filteredGames.length})</div>
                  {filteredGames.slice(0, 5).map((game) => (
                    <Link
                      key={game.id}
                      href={`/games/${game.id}`}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700/50 transition-colors"
                    >
                      <div className="w-8 h-8 rounded overflow-hidden">
                        <Image
                          src={game.image || "/placeholder.svg"}
                          alt={game.name}
                          width={32}
                          height={32}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-semibold text-sm">{game.name}</div>
                        <div className="text-xs text-purple-400">R$ {game.price.toFixed(2).replace(".", ",")}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center gap-8 mb-8">
          <button
            onClick={() => handleTabChange("descobrir")}
            className={`flex items-center gap-2 pb-2 transition-all duration-300 ${
              activeTab === "descobrir"
                ? "text-purple-400 border-b-2 border-purple-400"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <Sparkles className="w-5 h-5" />
            Descobrir
          </button>
          <button
            onClick={() => handleTabChange("navegar")}
            className={`flex items-center gap-2 pb-2 transition-all duration-300 ${
              activeTab === "navegar"
                ? "text-purple-400 border-b-2 border-purple-400"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <TrendingUp className="w-5 h-5" />
            Navegar
          </button>
          <button
            onClick={() => handleTabChange("novidades")}
            className={`flex items-center gap-2 pb-2 transition-all duration-300 ${
              activeTab === "novidades"
                ? "text-purple-400 border-b-2 border-purple-400"
                : "text-gray-400 hover:text-white"
            }`}
          >
            <Clock className="w-5 h-5" />
            Novidades
          </button>
          <div className="ml-auto flex items-center gap-4">
            <button
              onClick={() => (window.location.href = "/wishlist")}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors relative"
            >
              <Heart className="w-5 h-5" />
              Lista de desejo
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>
            <button
              onClick={() => (window.location.href = "/cart")}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors relative"
            >
              <ShoppingCart className="w-5 h-5" />
              Carrinho
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Featured Game */}
            <div className="relative rounded-2xl overflow-hidden mb-12 bg-gradient-to-r from-gray-900 to-gray-800 group">
              <div className="absolute inset-0">
                <Image
                  src={featuredGame.image || "/placeholder.svg"}
                  alt={featuredGame.name}
                  fill
                  className="object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
              </div>

              <div className="relative p-8 lg:p-12">
                <div className="max-w-2xl">
                  <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-bold px-3 py-1 rounded-full mb-4">
                    JÁ DISPONÍVEL
                  </div>

                  <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {featuredGame.name}
                  </h2>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">{featuredGame.description}</p>

                  <div className="flex items-center gap-4 mb-8">
                    <div className="flex items-center gap-2">
                      {featuredGame.originalPrice && (
                        <span className="text-gray-400 line-through text-lg">
                          R$ {featuredGame.originalPrice.toFixed(2).replace(".", ",")}
                        </span>
                      )}
                      <span className="text-3xl font-bold text-white">
                        R$ {featuredGame.price.toFixed(2).replace(".", ",")}
                      </span>
                    </div>
                    {featuredGame.discount && (
                      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                        -{featuredGame.discount}%
                      </div>
                    )}
                  </div>

                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => handleBuyNow(featuredGame.id)}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2"
                    >
                      <Play className="w-5 h-5" />
                      Comprar agora
                    </button>
                    <button
                      onClick={() => toggleWishlist(featuredGame.id)}
                      className={`p-3 rounded-xl border transition-all duration-300 ${
                        wishlist.includes(featuredGame.id)
                          ? "bg-purple-600 border-purple-600 text-white"
                          : "border-gray-600 text-gray-400 hover:border-purple-500 hover:text-purple-400"
                      }`}
                    >
                      <Heart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Loading State */}
            {isLoading && (
              <div className="flex items-center justify-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-2 border-purple-500 border-t-transparent"></div>
              </div>
            )}

            {/* All Games Section */}
            {!isLoading && (
              <section className="mb-12">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold">
                    {activeTab === "descobrir" && "Todos os jogos"}
                    {activeTab === "navegar" && "Jogos com desconto"}
                    {activeTab === "novidades" && "Novos lançamentos"}
                  </h2>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={prevGames}
                      className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextGames}
                      className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {filteredGames.slice(currentGameIndex, currentGameIndex + 6).map((game) => (
                    <div key={game.id} className="group relative">
                      <div className="relative rounded-xl overflow-hidden bg-gray-800/50 hover:bg-gray-800 transition-all duration-300 group-hover:scale-105 border border-gray-700/50 hover:border-purple-500/30">
                        <div className="aspect-[4/3] relative">
                          <Image src={game.image || "/placeholder.svg"} alt={game.name} fill className="object-cover" />
                          {game.discount && (
                            <div className="absolute top-2 left-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                              -{game.discount}%
                            </div>
                          )}
                          <div className="absolute top-2 right-2">
                            <button
                              onClick={() => toggleWishlist(game.id)}
                              className={`p-1.5 rounded-full backdrop-blur-sm transition-all duration-300 ${
                                wishlist.includes(game.id)
                                  ? "bg-purple-600 text-white"
                                  : "bg-black/50 text-gray-400 hover:text-white"
                              }`}
                            >
                              <Heart className="w-3 h-3" />
                            </button>
                          </div>

                          {/* Overlay com botões */}
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                            <Link
                              href={`/games/${game.id}`}
                              className="bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors"
                            >
                              <ExternalLink className="w-4 h-4 text-white" />
                            </Link>
                            <button
                              onClick={() => addToCart(game.id)}
                              className="bg-purple-600 p-2 rounded-full hover:bg-purple-700 transition-colors"
                            >
                              <ShoppingCart className="w-4 h-4 text-white" />
                            </button>
                          </div>
                        </div>
                        <div className="p-3">
                          <h3 className="font-semibold text-sm mb-1 truncate group-hover:text-purple-400 transition-colors">
                            {game.name}
                          </h3>
                          <div className="flex items-center gap-1 mb-2">
                            <Star className="w-3 h-3 text-yellow-400 fill-current" />
                            <span className="text-xs text-gray-400">{game.rating}</span>
                            <span className="text-xs text-gray-500">•</span>
                            <span className="text-xs text-gray-400">{game.players}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            {game.originalPrice && (
                              <span className="text-gray-500 line-through text-xs">
                                R$ {game.originalPrice.toFixed(2).replace(".", ",")}
                              </span>
                            )}
                            <span className="text-white font-bold text-sm">
                              R$ {game.price.toFixed(2).replace(".", ",")}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* News & Guides */}
            <section className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Notícias & Guias</h2>
                <Link
                  href="/blog"
                  className="text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-2"
                >
                  Ver todos
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {newsGuides.map((item) => (
                  <Link key={item.id} href={item.link} className="group">
                    <div className="bg-gray-800/50 rounded-xl overflow-hidden hover:bg-gray-800 transition-all duration-300 group-hover:scale-105 border border-gray-700/50 hover:border-purple-500/30">
                      <div className="aspect-[16/10] relative">
                        <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      </div>
                      <div className="p-4">
                        <div className="text-purple-400 text-sm font-semibold mb-2">{item.category}</div>
                        <h3 className="font-bold mb-2 group-hover:text-purple-400 transition-colors">{item.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed mb-4">{item.description}</p>
                        <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300">
                          Saiba mais
                        </button>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* Game Categories */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Categorias de Jogos</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Best Sellers */}
                <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/30 transition-colors group">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold group-hover:text-purple-400 transition-colors">Mais Vendidos</h3>
                    <ArrowRight className="w-5 h-5 text-purple-400" />
                  </div>
                  <div className="space-y-3">
                    {gameCategories.bestsellers.map((game, index) => (
                      <Link
                        key={game.id}
                        href={`/games/${game.id}`}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700/50 transition-colors group"
                      >
                        <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={game.image || "/placeholder.svg"}
                            alt={game.name}
                            width={48}
                            height={48}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold group-hover:text-purple-400 transition-colors">{game.name}</h4>
                          <p className="text-purple-400 font-bold">R$ {game.price.toFixed(2).replace(".", ",")}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-400 transition-colors" />
                      </Link>
                    ))}
                  </div>
                  <Link href="/games/category/bestsellers">
                    <button className="w-full mt-4 border border-purple-500/30 text-purple-400 hover:bg-purple-500/10 bg-transparent py-2 px-4 rounded-lg font-semibold transition-all duration-300">
                      Ver todos
                    </button>
                  </Link>
                </div>

                {/* VPS Games */}
                <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/30 transition-colors group">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold group-hover:text-purple-400 transition-colors">Jogos VPS</h3>
                    <ArrowRight className="w-5 h-5 text-purple-400" />
                  </div>
                  <div className="space-y-3">
                    {gameCategories.vpsGames.map((game) => (
                      <Link
                        key={game.id}
                        href={`/games/${game.id}`}
                        className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700/50 transition-colors group"
                      >
                        <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-gray-700">
                          <Image
                            src={game.image || "/placeholder.svg"}
                            alt={game.name}
                            width={48}
                            height={48}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold group-hover:text-purple-400 transition-colors">{game.name}</h4>
                          <p className="text-purple-400 font-bold">R$ {game.price.toFixed(2).replace(".", ",")}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-400 transition-colors" />
                      </Link>
                    ))}
                  </div>
                  <Link href="/vps-gamer">
                    <button className="w-full mt-4 border border-purple-500/30 text-purple-400 hover:bg-purple-500/10 bg-transparent py-2 px-4 rounded-lg font-semibold transition-all duration-300">
                      Ver todos
                    </button>
                  </Link>
                </div>

                {/* Upcoming Games */}
                <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/30 transition-colors group">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold group-hover:text-purple-400 transition-colors">
                      Próximos Títulos
                    </h3>
                    <ArrowRight className="w-5 h-5 text-purple-400" />
                  </div>
                  <div className="space-y-3">
                    {gameCategories.upcoming.map((game) => (
                      <div key={game.id} className="flex items-center gap-3 p-2 rounded-lg">
                        <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-gray-700">
                          <Image
                            src={game.image || "/placeholder.svg"}
                            alt={game.name}
                            width={48}
                            height={48}
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold">{game.name}</h4>
                          <p className="text-orange-400 font-semibold text-sm">{game.status}</p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-400" />
                      </div>
                    ))}
                  </div>
                  <button className="w-full mt-4 border border-purple-500/30 text-purple-400 hover:bg-purple-500/10 bg-transparent py-2 px-4 rounded-lg font-semibold transition-all duration-300">
                    Notificar-me
                  </button>
                </div>
              </div>
            </section>

            {/* New Games */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Jogos Novos</h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="relative rounded-xl overflow-hidden bg-gradient-to-r from-blue-900/50 to-purple-900/50 group">
                  <div className="absolute inset-0">
                    <Image
                      src="/games/palworld.webp"
                      alt="Palworld"
                      fill
                      className="object-cover opacity-40 group-hover:opacity-50 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
                  </div>

                  <div className="relative p-6">
                    <div className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-bold px-3 py-1 rounded-full mb-4">
                      🔥 Novo Lançamento
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Palworld</h3>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-gray-400 line-through">R$ 120,00</span>
                      <span className="text-2xl font-bold">R$ 79,90</span>
                      <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-bold px-2 py-1 rounded-full">
                        -34%
                      </span>
                    </div>
                    <button
                      onClick={() => handleBuyNow("palworld")}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                    >
                      Comprar agora
                    </button>
                  </div>
                </div>

                <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/50">
                  <h3 className="text-lg font-bold mb-4">Por que jogar os novos lançamentos?</h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0">
                        <Sparkles className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Experiência Inovadora</h4>
                        <p className="text-gray-400 text-sm">
                          Seja o primeiro a experimentar as mecânicas e gráficos de última geração.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0">
                        <Users className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Comunidade Ativa</h4>
                        <p className="text-gray-400 text-sm">
                          Participe de uma comunidade vibrante e em crescimento desde o início.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0">
                        <Gift className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Ofertas Exclusivas</h4>
                        <p className="text-gray-400 text-sm">
                          Aproveite promoções e bônus especiais disponíveis apenas para novos lançamentos.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Discounted Games */}
            <section className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Jogos com Descontos</h2>
                <Link
                  href="/games/discounts"
                  className="text-purple-400 hover:text-purple-300 transition-colors flex items-center gap-2"
                >
                  Ver todos os descontos
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {getDiscountedGames().map((game) => (
                  <div key={game.id} className="group relative">
                    <div className="relative rounded-xl overflow-hidden bg-gray-800/50 hover:bg-gray-800 transition-all duration-300 group-hover:scale-105 border border-gray-700/50 hover:border-orange-500/30">
                      <div className="aspect-[4/3] relative">
                        <Image src={game.image || "/placeholder.svg"} alt={game.name} fill className="object-cover" />
                        <div className="absolute top-2 left-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                          -{game.discount}%
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-orange-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      </div>
                      <div className="p-3">
                        <h3 className="font-semibold text-sm mb-1 truncate group-hover:text-orange-400 transition-colors">
                          {game.name}
                        </h3>
                        <div className="flex items-center gap-2">
                          <span className="text-gray-500 line-through text-xs">
                            R$ {game.originalPrice?.toFixed(2).replace(".", ",")}
                          </span>
                          <span className="text-white font-bold text-sm">
                            R$ {game.price.toFixed(2).replace(".", ",")}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Games in Highlight */}
              <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/50 backdrop-blur-sm">
                <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-purple-400" />
                  Jogos em destaque
                </h3>
                <div className="space-y-3">
                  {gamesInHighlight.map((game) => (
                    <Link
                      key={game.id}
                      href={`/games/${game.id}`}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-700/50 transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={game.image || "/placeholder.svg"}
                          alt={game.name}
                          width={48}
                          height={48}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold truncate group-hover:text-purple-400 transition-colors">
                          {game.name}
                        </h4>
                        <p className="text-purple-400 font-bold text-sm">
                          R$ {game.price.toFixed(2).replace(".", ",")}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/50 backdrop-blur-sm">
                <h3 className="text-lg font-bold mb-4">Ações Rápidas</h3>
                <div className="space-y-3">
                  <button
                    onClick={() => window.open("https://app.neonhost.com.br/register", "_blank")}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Play className="w-4 h-4" />
                    Criar Servidor
                  </button>
                  <button
                    onClick={() => window.open("https://app.neonhost.com.br/login", "_blank")}
                    className="w-full border border-purple-500/30 text-purple-400 hover:bg-purple-500/10 bg-transparent py-2 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Meus Servidores
                  </button>
                  <button
                    onClick={() => window.open("https://discord.gg/neonhost", "_blank")}
                    className="w-full border border-gray-600 text-gray-300 hover:bg-gray-700 bg-transparent py-2 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Users className="w-4 h-4" />
                    Suporte Discord
                  </button>
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl p-6 border border-purple-500/30 backdrop-blur-sm">
                <h3 className="text-lg font-bold mb-2">🔥 Ofertas Exclusivas</h3>
                <p className="text-sm text-gray-300 mb-4">Receba descontos especiais e novidades em primeira mão!</p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Seu melhor e-mail"
                    className="w-full px-3 py-2 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none text-sm"
                  />
                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-2 px-4 rounded-lg font-semibold transition-all duration-300 text-sm">
                    Inscrever-se
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
