import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

const upcomingGames = [
  {
    id: "hytale",
    name: "Hytale",
    status: "Em breve",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "gta6",
    name: "GTA 6",
    status: "Em breve",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "ark2",
    name: "ARK 2",
    status: "Em breve",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export function UpcomingGames() {
  return (
    <div className="bg-white dark:bg-zinc-900/50 rounded-lg p-4 border border-gray-200 dark:border-purple-500/20">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">Próximos Títulos Mais Aguardados</h2>
        <Link href="/proximos-lancamentos" className="text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white">
          <ChevronRight size={20} />
        </Link>
      </div>
      <div className="space-y-4">
        {upcomingGames.map((game) => (
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
              <h3 className="text-gray-900 dark:text-white font-medium group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-orange-400 transition">
                {game.name}
              </h3>
              <p className="text-gray-600 dark:text-zinc-400">{game.status}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
