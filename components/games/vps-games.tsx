import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

const vpsGames = [
  {
    id: "dayz",
    name: "DayZ",
    price: 74.9,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "ragnarok",
    name: "Ragnarok",
    price: 74.9,
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "redm",
    name: "RedM",
    price: 74.9,
    image: "/placeholder.svg?height=100&width=100",
  },
]

export function VpsGames() {
  return (
    <div className="bg-zinc-900/50 rounded-lg p-4 border border-purple-500/20">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white">Jogos V P S</h2>
        <Link href="/jogos-vps" className="text-zinc-400 hover:text-white">
          <ChevronRight size={20} />
        </Link>
      </div>
      <div className="space-y-4">
        {vpsGames.map((game) => (
          <Link href={`/games/${game.id}`} key={game.id} className="flex items-center gap-3 group">
            <div className="relative w-16 h-16 rounded overflow-hidden">
              <Image
                src={game.image || "/placeholder.svg"}
                alt={game.name}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div>
              <h3 className="text-white font-medium group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-orange-400 transition">
                {game.name}
              </h3>
              <p className="text-white">R$ {game.price.toFixed(2).replace(".", ",")}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
