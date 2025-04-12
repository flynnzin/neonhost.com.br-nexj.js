import Link from "next/link"
import Image from "next/image"

const newGames = [
  {
    id: "palworld",
    name: "Palworld",
    image: "/games/page/pal.png",
    link: "/games/palworld",
  },
  {
    id: "armareforger",
    name: "Arma Reforger",
    image: "/games/page/armareforger.jpg",
    link: "/games/armareforger",
  },
  {
    id: "enshrouded",
    name: "Enshrouded",
    image: "/placeholder.svg?height=400&width=600",
    link: "/games/enshrouded",
  },
]

export function NewGames() {
  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold text-white mb-6">Jogos Novos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {newGames.map((game) => (
          <Link href={game.link} key={game.id} className="group">
            <div className="relative rounded-lg overflow-hidden">
              <div className="aspect-[16/9] relative">
                <Image
                  src={game.image || "/placeholder.svg"}
                  alt={game.name}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-full">
                <div className="bg-gradient-to-r from-purple-600 to-orange-500 text-white text-center py-2">
                  Jogo novo
                </div>
              </div>
            </div>
            <h3 className="text-white font-medium mt-2">{game.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  )
}
