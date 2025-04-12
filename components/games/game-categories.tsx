import { Gamepad2, Globe, Sword, Rocket, Cpu, Users } from "lucide-react"

const categories = [
  {
    id: "action",
    name: "Ação",
    icon: <Sword className="w-6 h-6" />,
    count: 24,
  },
  {
    id: "adventure",
    name: "Aventura",
    icon: <Globe className="w-6 h-6" />,
    count: 18,
  },
  {
    id: "rpg",
    name: "RPG",
    icon: <Gamepad2 className="w-6 h-6" />,
    count: 15,
  },
  {
    id: "simulation",
    name: "Simulação",
    icon: <Cpu className="w-6 h-6" />,
    count: 12,
  },
  {
    id: "multiplayer",
    name: "Multijogador",
    icon: <Users className="w-6 h-6" />,
    count: 30,
  },
  {
    id: "indie",
    name: "Indie",
    icon: <Rocket className="w-6 h-6" />,
    count: 22,
  },
]

export function GameCategories() {
  return (
    <section className="py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-white">Categorias</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-orange-500 mt-2 rounded-full"></div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-zinc-900/50 border border-purple-500/10 hover:border-purple-500/30 rounded-lg p-5 text-center transition-all duration-300 hover:bg-zinc-800/50 group cursor-pointer"
          >
            <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center rounded-lg bg-gradient-to-br from-purple-500/10 to-orange-500/10 text-purple-400 group-hover:text-white transition-colors">
              {category.icon}
            </div>
            <h3 className="text-white font-medium mb-1">{category.name}</h3>
            <p className="text-zinc-500 text-sm">{category.count} jogos</p>
          </div>
        ))}
      </div>
    </section>
  )
}
