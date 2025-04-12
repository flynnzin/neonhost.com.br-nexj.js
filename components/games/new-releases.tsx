import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

const newGames = [
  {
    id: "palworld",
    name: "Palworld",
    image: "/games/page/pal.png",
    description: "Capture e colecione criaturas em um mundo aberto cheio de aventuras e desafios.",
    releaseDate: "20 Jan 2023",
    price: 79.9,
  },
  {
    id: "armareforger",
    name: "Arma Reforger",
    image: "/games/page/armareforger.jpg",
    description: "Experimente o combate militar realista em um ambiente de guerra imersivo e detalhado.",
    releaseDate: "15 Fev 2023",
    price: 89.9,
  },
  {
    id: "enshrouded",
    name: "Enshrouded",
    image: "/games/page/enshrouded.jpg",
    description: "Sobreviva em um mundo coberto por névoa misteriosa e descubra segredos antigos.",
    releaseDate: "05 Mar 2023",
    price: 99.9,
  },
  {
    id: "projectzombiod",
    name: "Project Zomboid",
    image: "/games/page/projectzombiod.webp",
    description: "Sobreviva em um mundo coberto por névoa misteriosa e descubra segredos antigos.",
    releaseDate: "05 Mar 2023",
    price: 49.90,
  },
]

export function NewReleases() {
  return (
    <section>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold text-white">Lançamentos Recentes</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-orange-500 mt-2 rounded-full"></div>
        </div>
        <Link href="/games/new" className="flex items-center gap-1 text-zinc-400 hover:text-white transition group">
          <span>Ver todos</span>
          <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      <div className="space-y-6">
        {newGames.map((game) => (
          <Link href={`/games/${game.id}`} key={game.id} className="group">
            <div className="bg-zinc-900/50 rounded-lg overflow-hidden border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300">
              <div className="flex flex-col md:flex-row">
                <div className="relative w-full md:w-1/3 aspect-[16/9] md:aspect-auto">
                  <Image
                    src={game.image || "/placeholder.svg"}
                    alt={game.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded">
                    NOVO
                  </div>
                </div>

                <div className="p-5 md:w-2/3">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-orange-400 transition-all">
                      {game.name}
                    </h3>
                    <div className="text-zinc-500 text-sm mt-1 md:mt-0">Lançado em {game.releaseDate}</div>
                  </div>

                  <p className="text-zinc-400 text-sm mb-4">{game.description}</p>

                  <div className="flex items-center justify-between">
                    <span className="text-white font-bold">R$ {game.price.toFixed(2).replace(".", ",")}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
