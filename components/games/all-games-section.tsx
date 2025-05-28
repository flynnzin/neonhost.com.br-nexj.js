"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Star, Users } from "lucide-react"

const allGames = [
  {
    id: "minecraft",
    name: "Minecraft",
    image: "/games/minecraft.webp",
    description: "O jogo de construção mais popular do mundo",
    price: 13.9,
    rating: 4.9,
    players: "15.2K",
    category: "popular",
    badge: "Mais Popular",
  },
  {
    id: "fivem",
    name: "FiveM",
    image: "/games/gtav.jpg",
    description: "Modificação multiplayer para GTA V",
    price: 74.9,
    rating: 4.7,
    players: "8.5K",
    category: "popular",
    badge: "Trending",
  },
  {
    id: "rust",
    name: "Rust",
    image: "/games/rust.webp",
    description: "Sobrevivência hardcore multiplayer",
    price: 85.0,
    rating: 4.5,
    players: "6.8K",
    category: "popular",
  },
  {
    id: "valheim",
    name: "Valheim",
    image: "/games/valheim.webp",
    description: "Sobrevivência viking cooperativa",
    price: 49.9,
    rating: 4.6,
    players: "3.2K",
    category: "popular",
  },
  {
    id: "project-zomboid",
    name: "Project Zomboid",
    image: "/games/zomboid.webp",
    description: "Sobrevivência em apocalipse zumbi",
    price: 49.9,
    rating: 4.9,
    players: "4.1K",
    category: "popular",
  },
  {
    id: "dayz",
    name: "DayZ",
    image: "/games/dayz.webp",
    description: "Sobrevivência em mundo pós-apocalíptico",
    price: 74.9,
    rating: 4.4,
    players: "5.2K",
    category: "popular",
  },
  {
    id: "cs2",
    name: "Counter-Strike 2",
    image: "/games/cs2.webp",
    description: "O FPS competitivo mais jogado do mundo",
    price: 39.9,
    rating: 4.8,
    players: "12.5K",
    category: "popular",
  },
  {
    id: "ark",
    name: "ARK: Survival Evolved",
    image: "/games/ark.webp",
    description: "Sobrevivência com dinossauros",
    price: 89.9,
    rating: 4.3,
    players: "7.2K",
    category: "popular",
  },
  // Novos jogos
  {
    id: "palworld",
    name: "Palworld",
    image: "/games/palworld.webp",
    description: "Capture criaturas em mundo aberto",
    price: 79.9,
    rating: 4.8,
    players: "2.5K",
    category: "new",
    badge: "Novo",
  },
  {
    id: "enshrouded",
    name: "Enshrouded",
    image: "/games/enshrouded.jpg",
    description: "Aventura de sobrevivência e construção",
    price: 99.9,
    rating: 4.7,
    players: "1.8K",
    category: "new",
    badge: "Novo",
  },
  {
    id: "lethal-company",
    name: "Lethal Company",
    image: "/games/lethal-company.webp",
    description: "Horror cooperativo em estações espaciais",
    price: 29.9,
    rating: 4.6,
    players: "3.1K",
    category: "new",
    badge: "Novo",
  },
  {
    id: "content-warning",
    name: "Content Warning",
    image: "/games/content-warning.webp",
    description: "Horror cooperativo com filmagem",
    price: 19.9,
    rating: 4.5,
    players: "1.9K",
    category: "new",
    badge: "Novo",
  },
  {
    id: "helldivers-2",
    name: "Helldivers 2",
    image: "/games/helldivers2.webp",
    description: "Shooter cooperativo de ação",
    price: 89.9,
    rating: 4.7,
    players: "4.2K",
    category: "new",
    badge: "Novo",
  },
  {
    id: "granblue-relink",
    name: "Granblue Fantasy Relink",
    image: "/games/granblue.webp",
    description: "Action RPG cooperativo",
    price: 119.9,
    rating: 4.4,
    players: "1.5K",
    category: "new",
    badge: "Novo",
  },
  {
    id: "skull-bones",
    name: "Skull and Bones",
    image: "/games/skull-bones.webp",
    description: "Aventura pirata em mundo aberto",
    price: 149.9,
    rating: 4.1,
    players: "2.8K",
    category: "new",
    badge: "Novo",
  },
  {
    id: "nightingale",
    name: "Nightingale",
    image: "/games/nightingale.webp",
    description: "Sobrevivência em mundos fantásticos",
    price: 79.9,
    rating: 4.3,
    players: "1.2K",
    category: "new",
    badge: "Novo",
  },
]

export function AllGamesSection() {
  const [activeFilter, setActiveFilter] = useState<"all" | "popular" | "new">("all")
  const [displayCount, setDisplayCount] = useState(8)

  const filteredGames = allGames.filter((game) => {
    if (activeFilter === "all") return true
    return game.category === activeFilter
  })

  const displayedGames = filteredGames.slice(0, displayCount)
  const hasMoreGames = displayCount < filteredGames.length

  const handleLoadMore = () => {
    setDisplayCount((prev) => Math.min(prev + 8, filteredGames.length))
  }

  const handleFilterChange = (filter: "all" | "popular" | "new") => {
    setActiveFilter(filter)
    setDisplayCount(8) // Reset display count when changing filter
  }

  return (
    <section>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Todos os Jogos</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Escolha entre nossa seleção de servidores otimizados para os jogos mais populares
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center mb-12">
        <div className="flex gap-2 bg-white/5 border border-white/10 rounded-xl p-1">
          <button
            onClick={() => handleFilterChange("all")}
            className={`px-6 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
              activeFilter === "all"
                ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Todos ({allGames.length})
          </button>
          <button
            onClick={() => handleFilterChange("popular")}
            className={`px-6 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
              activeFilter === "popular"
                ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Populares ({allGames.filter((g) => g.category === "popular").length})
          </button>
          <button
            onClick={() => handleFilterChange("new")}
            className={`px-6 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
              activeFilter === "new"
                ? "bg-gradient-to-r from-pink-500 to-purple-500 text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Novos ({allGames.filter((g) => g.category === "new").length})
          </button>
        </div>
      </div>

      {/* Results Count */}
      <div className="text-center mb-8">
        <p className="text-gray-400 text-sm">
          Mostrando {displayedGames.length} de {filteredGames.length} jogos
          {activeFilter !== "all" && (
            <span className="ml-2 text-purple-400">• Filtro: {activeFilter === "popular" ? "Populares" : "Novos"}</span>
          )}
        </p>
      </div>

      {/* Games Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {displayedGames.map((game, index) => (
          <Link href={`/games/${game.id}`} key={game.id} className="group">
            <div
              className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:bg-white/10 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={game.image || "/placeholder.svg?height=200&width=320"}
                  alt={game.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {game.badge && (
                  <div className="absolute top-3 left-3">
                    <span
                      className={`text-white text-xs font-medium px-2 py-1 rounded-full ${
                        game.category === "new"
                          ? "bg-gradient-to-r from-green-500 to-emerald-500"
                          : "bg-gradient-to-r from-pink-500 to-purple-500"
                      }`}
                    >
                      {game.badge}
                    </span>
                  </div>
                )}
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center gap-1">
                  <Users className="w-3 h-3 text-green-400" />
                  <span className="text-xs text-white">{game.players}</span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors line-clamp-1">
                    {game.name}
                  </h3>
                  <div className="flex items-center gap-1 ml-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-300">{game.rating}</span>
                  </div>
                </div>

                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{game.description}</p>

                <div className="flex items-center justify-between">
                  <div className="text-white font-semibold">
                    R$ {game.price.toFixed(2).replace(".", ",")}
                    <span className="text-gray-400 text-sm font-normal">/mês</span>
                  </div>
                  <button className="text-purple-400 hover:text-white text-sm font-medium transition-colors">
                    Ver planos →
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Empty State */}
      {filteredGames.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">Nenhum jogo encontrado nesta categoria</div>
          <button
            onClick={() => handleFilterChange("all")}
            className="text-purple-400 hover:text-white transition-colors"
          >
            Ver todos os jogos
          </button>
        </div>
      )}

      {/* Load More */}
      {hasMoreGames && (
        <div className="text-center mt-12">
          <button
            onClick={handleLoadMore}
            className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-purple-500/50 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105"
          >
            Carregar mais jogos ({filteredGames.length - displayCount} restantes)
          </button>
        </div>
      )}

      {/* All Loaded Message */}
      {!hasMoreGames && filteredGames.length > 8 && (
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">
            Todos os jogos foram carregados • {filteredGames.length} jogos no total
          </p>
        </div>
      )}
    </section>
  )
}
