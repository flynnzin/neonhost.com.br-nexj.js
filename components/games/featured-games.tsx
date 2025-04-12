import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

const featuredGames = [
  {
    id: "minecraft",
    name: "Minecraft",
    image: "/games/page/mine.jpg",
    description: "Construa, explore e sobreviva em um mundo de blocos com possibilidades infinitas.",
    price: 13.9,
    discount: 35,
    originalPrice: 20.9,
    tags: ["Sandbox", "Aventura", "Multijogador"],
    purchaseUrl: "https://app.neonhost.com.br/game/minecraft", // URL específica para compra
  },
  {
    id: "palworld",
    name: "Palworld",
    image: "/games/page/pal.png",
    description: "Capture e colecione criaturas em um mundo aberto cheio de aventuras e desafios.",
    price: 79.9,
    discount: 34,
    originalPrice: 120.0,
    tags: ["Mundo Aberto", "Aventura", "Criaturas"],
    purchaseUrl: "https://app.neonhost.com.br/game/palworld", // URL específica para compra
  },
  {
    id: "fivem",
    name: "FiveM",
    image: "/games/page/gtav.jpg",
    description: "Crie e jogue em servidores personalizados com mods e recursos exclusivos.",
    price: 79.4,
    discount: 50,
    originalPrice: 159.9,
    tags: ["Roleplay", "Mundo Aberto", "Multijogador"],
    purchaseUrl: "https://app.neonhost.com.br/game/fivem", // URL específica para compra
  },
]

export function FeaturedGames() {
  return (
    <section className="py-16">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-white">Jogos em Destaque</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-orange-500 mt-2 rounded-full"></div>
        </div>
        <Link href="/games/all" className="flex items-center gap-1 text-zinc-400 hover:text-white transition group">
          <span>Ver todos</span>
          <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredGames.map((game) => (
          <div key={game.id} className="group">
            <div className="bg-zinc-900/50 rounded-lg overflow-hidden border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 h-full flex flex-col">
              <Link href={`/games/${game.id}`}>
                <div className="relative aspect-[16/9]">
                  <Image
                    src={game.image || "/placeholder.svg"}
                    alt={game.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-purple-600 to-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                    -{game.discount}%
                  </div>
                </div>
              </Link>

              <div className="p-5 flex-1 flex flex-col">
                <Link href={`/games/${game.id}`}>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-orange-400 transition-all">
                    {game.name}
                  </h3>
                </Link>

                <p className="text-zinc-400 text-sm mb-4 flex-1">{game.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {game.tags.map((tag, index) => (
                    <span key={index} className="text-xs bg-zinc-800 text-zinc-300 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-zinc-500 line-through text-sm">
                        R$ {game.originalPrice.toFixed(2).replace(".", ",")}
                      </span>
                      <span className="text-white font-bold text-lg">R$ {game.price.toFixed(2).replace(".", ",")}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
