import Image from "next/image"
import Link from "next/link"
import { Star, Users } from "lucide-react"

const featuredGames = [
  {
    id: "minecraft",
    name: "Minecraft",
    image: "/games/minecraft.webp",
    description: "Servidores otimizados para Minecraft com plugins personalizados",
    price: 13.9,
    originalPrice: 19.9,
    discount: 30,
    rating: 4.9,
    players: "15.2K",
    featured: true,
  },
  {
    id: "fivem",
    name: "FiveM",
    image: "/games/gtav.jpg",
    description: "Hospedagem premium para servidores FiveM com alta performance",
    price: 74.9,
    rating: 4.7,
    players: "8.5K",
    featured: true,
  },
  {
    id: "palworld",
    name: "Palworld",
    image: "/games/palworld.webp",
    description: "Servidores dedicados para Palworld com suporte completo",
    price: 79.9,
    rating: 4.8,
    players: "2.5K",
    featured: true,
    isNew: true,
  },
]

export function FeaturedGames() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {featuredGames.map((game, index) => (
        <Link href={`/games/${game.id}`} key={game.id} className="group">
          <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:bg-white/10">
            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={game.image || "/placeholder.svg"}
                alt={game.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {game.discount && (
                <div className="absolute top-3 left-3">
                  <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    -{game.discount}%
                  </span>
                </div>
              )}
              {game.isNew && (
                <div className="absolute top-3 left-3">
                  <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">NOVO</span>
                </div>
              )}
              <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm rounded-lg px-2 py-1 flex items-center gap-1">
                <Users className="w-3 h-3 text-green-400" />
                <span className="text-xs text-white">{game.players}</span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
                  {game.name}
                </h3>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-300">{game.rating}</span>
                </div>
              </div>

              <p className="text-gray-400 mb-4">{game.description}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {game.originalPrice && (
                    <span className="text-gray-500 line-through text-sm">
                      R$ {game.originalPrice.toFixed(2).replace(".", ",")}
                    </span>
                  )}
                  <span className="text-white font-semibold text-lg">R$ {game.price.toFixed(2).replace(".", ",")}</span>
                  <span className="text-gray-400 text-sm">/mês</span>
                </div>
                <button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300">
                  Ver planos
                </button>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
