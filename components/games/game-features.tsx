import { GameCard } from "./game-card"
import { ChevronLeft, ChevronRight } from "lucide-react"

const games = [
  {
    id: "minecraft",
    name: "Minecraft",
    image: "/games/page/mine.jpg",
    originalPrice: 20.9,
    currentPrice: 13.9,
    discount: 35,
  },
  {
    id: "palworld",
    name: "Palworld",
    image: "/games/page/pal.png",
    originalPrice: 120.0,
    currentPrice: 79.9,
    discount: 34,
  },
  {
    id: "fivem",
    name: "FiveM",
    image: "/games/page/gtav.jpg",
    originalPrice: 159.9,
    currentPrice: 79.4,
    discount: 50,
  },
  {
    id: "rust",
    name: "Rust",
    image: "/games/page/rust.jpg",
    originalPrice: 120.0,
    currentPrice: 85.0,
    discount: 29,
  },
  {
    id: "7days",
    name: "7 Days to Die",
    image: "/placeholder.svg?height=300&width=400",
    originalPrice: 79.9,
    currentPrice: 64.0,
    discount: 19,
  },
  {
    id: "dayz",
    name: "DayZ",
    image: "/games/page/dayz.webp",
    originalPrice: 129.9,
    currentPrice: 74.9,
    discount: 42,
  },
]

export function GameGrid() {
  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Todos os jogos</h2>
        <div className="flex gap-2">
          <button className="rounded-full border border-gray-200 dark:border-purple-700/50 text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-purple-700/30 h-10 w-10 inline-flex items-center justify-center">
            <ChevronLeft size={18} />
          </button>
          <button className="rounded-full border border-gray-200 dark:border-purple-700/50 text-gray-600 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-purple-700/30 h-10 w-10 inline-flex items-center justify-center">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {games.map((game) => (
          <GameCard
            key={game.id}
            id={game.id}
            name={game.name}
            image={game.image}
            originalPrice={game.originalPrice}
            currentPrice={game.currentPrice}
            discount={game.discount}
          />
        ))}
      </div>
    </div>
  )
}
