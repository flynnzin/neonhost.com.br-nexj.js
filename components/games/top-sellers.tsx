import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

const topSellers = [
  {
    id: "minecraft",
    name: "Minecraft",
    image: "/games/page/mine.jpg",
    price: 13.9,
    sales: "50K+",
  },
  {
    id: "palworld",
    name: "Palworld",
    image: "/games/page/pal.png",
    price: 79.9,
    sales: "35K+",
  },
  {
    id: "fivem",
    name: "FiveM",
    image: "/games/page/gtav.jpg",
    price: 74.9,
    sales: "28K+",
  },
  {
    id: "rust",
    name: "Rust",
    image: "/games/page/rust.jpg",
    price: 85.0,
    sales: "22K+",
  },
  {
    id: "dayz",
    name: "DayZ",
    image: "/games/page/dayz.webp",
    price: 74.9,
    sales: "18K+",
  },
]

export function TopSellers() {
  return (
    <div className="bg-zinc-900/50 rounded-lg border border-purple-500/10 overflow-hidden">
      <div className="p-5 border-b border-purple-500/10">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">Mais Vendidos</h2>
          <Link href="/games/top" className="text-zinc-400 hover:text-white">
            <ChevronRight size={18} />
          </Link>
        </div>
      </div>

      <div className="divide-y divide-purple-500/10">
        {topSellers.map((game, index) => (
          <Link
            href={`/games/${game.id}`}
            key={game.id}
            className="flex items-center p-4 hover:bg-zinc-800/50 transition-colors group"
          >
            <div className="w-6 text-zinc-500 font-bold mr-3">{index + 1}</div>
            <div className="relative w-12 h-12 rounded overflow-hidden mr-4">
              <Image src={game.image || "/placeholder.svg"} alt={game.name} fill className="object-cover" />
            </div>
            <div className="flex-1">
              <h3 className="text-white font-medium group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-orange-400 transition-all">
                {game.name}
              </h3>
              <div className="flex items-center justify-between mt-1">
                <span className="text-zinc-400 text-xs">{game.sales} vendas</span>
                <span className="text-white font-medium text-sm">R$ {game.price.toFixed(2).replace(".", ",")}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
