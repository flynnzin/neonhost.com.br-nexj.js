import { Gamepad2, Globe, Sword, Rocket, Cpu, Users } from "lucide-react"

const categories = [
  {
    id: "action",
    name: "Ação",
    icon: <Sword className="w-6 h-6" />,
    count: 24,
    color: "from-red-500 to-orange-500",
  },
  {
    id: "adventure",
    name: "Aventura",
    icon: <Globe className="w-6 h-6" />,
    count: 18,
    color: "from-green-500 to-emerald-500",
  },
  {
    id: "rpg",
    name: "RPG",
    icon: <Gamepad2 className="w-6 h-6" />,
    count: 15,
    color: "from-purple-500 to-violet-500",
  },
  {
    id: "simulation",
    name: "Simulação",
    icon: <Cpu className="w-6 h-6" />,
    count: 12,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "multiplayer",
    name: "Multijogador",
    icon: <Users className="w-6 h-6" />,
    count: 30,
    color: "from-pink-500 to-rose-500",
  },
  {
    id: "indie",
    name: "Indie",
    icon: <Rocket className="w-6 h-6" />,
    count: 22,
    color: "from-yellow-500 to-orange-500",
  },
]

export function GameCategories() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {categories.map((category) => (
        <div
          key={category.id}
          className="group bg-slate-900/50 border border-slate-700/50 hover:border-slate-600/50 rounded-2xl p-6 text-center transition-all duration-300 hover:bg-slate-800/50 cursor-pointer hover:scale-105 backdrop-blur-sm"
        >
          <div
            className={`w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-2xl bg-gradient-to-br ${category.color} bg-opacity-10 text-white group-hover:scale-110 transition-transform duration-300`}
          >
            {category.icon}
          </div>
          <h3 className="text-white font-semibold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
            {category.name}
          </h3>
          <p className="text-slate-400 text-sm">
            <span className="font-medium text-white">{category.count}</span> jogos
          </p>
        </div>
      ))}
    </div>
  )
}
