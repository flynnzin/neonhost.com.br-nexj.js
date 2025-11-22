import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Clock } from "lucide-react"

const upcomingGames = [
  {
    id: "hytale",
    name: "Hytale",
    image: "/games/page/hytale.jpg",
    releaseDate: "Q3 2023",
  },
  {
    id: "gta6",
    name: "GTA 6",
    image: "/games/page/gtaVI.webp",
    releaseDate: "Q4 2023",
  },
  {
    id: "ark2",
    name: "ARK 2",
    image: "/games/page/ark2.webp",
    releaseDate: "Q1 2024",
  },
]

// Configuração do botão de notificações
const notificationsConfig = {
  url: "https://app.neonhost.com.br/",
}

export function ComingSoon() {
  return (
    <div className="bg-white dark:bg-zinc-900/50 rounded-lg border border-gray-200 dark:border-purple-500/10 overflow-hidden">
      <div className="p-5 border-b border-gray-200 dark:border-purple-500/10">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Em Breve</h2>
          <Link href="/games/upcoming" className="text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white">
            <ChevronRight size={18} />
          </Link>
        </div>
      </div>

      <div className="divide-y divide-gray-200 dark:divide-purple-500/10">
        {upcomingGames.map((game) => (
          <Link
            href={`/games/${game.id}`}
            key={game.id}
            className="flex items-center p-4 hover:bg-gray-100 dark:hover:bg-zinc-800/50 transition-colors group"
          >
            <div className="relative w-12 h-12 rounded overflow-hidden mr-4">
              <Image
                src={game.image || "/placeholder.svg"}
                alt={game.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-gray-900 dark:text-white font-medium group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-orange-400 transition-all">
                {game.name}
              </h3>
              <div className="flex items-center text-gray-600 dark:text-zinc-400 text-xs mt-1">
                <Clock size={12} className="mr-1" />
                <span>Lançamento: {game.releaseDate}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="p-4 bg-gray-50 dark:bg-gradient-to-r from-purple-900/20 to-orange-900/20">
        <Link
          href={notificationsConfig.url}
          className="w-full bg-gray-200 dark:bg-zinc-800 hover:bg-gray-300 dark:hover:bg-zinc-700 text-gray-900 dark:text-white text-sm py-2 rounded transition-colors inline-block text-center"
        >
          Receber notificações
        </Link>
      </div>
    </div>
  )
}
