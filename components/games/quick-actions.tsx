import { Gamepad2, Server, Shield, Zap, Users, Settings } from "lucide-react"

export function QuickActions() {
  const actions = [
    { icon: <Gamepad2 className="w-5 h-5" />, label: "Minecraft", popular: true },
    { icon: <Server className="w-5 h-5" />, label: "FiveM", popular: true },
    { icon: <Shield className="w-5 h-5" />, label: "CS:GO" },
    { icon: <Zap className="w-5 h-5" />, label: "Rust" },
    { icon: <Users className="w-5 h-5" />, label: "ARK" },
    { icon: <Settings className="w-5 h-5" />, label: "Personalizado" },
  ]

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {actions.map((action, index) => (
        <button
          key={index}
          className={`group flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 hover:scale-105 ${
            action.popular
              ? "bg-purple-100 dark:bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-200 dark:border-purple-500/30 text-purple-600 dark:text-purple-300 hover:from-purple-200 dark:hover:from-purple-600/30 hover:to-pink-200 dark:hover:to-pink-600/30"
              : "bg-gray-50 dark:bg-slate-800/50 border border-gray-200 dark:border-slate-600/30 text-gray-900 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-700/50 hover:border-gray-300 dark:hover:border-slate-500/50"
          }`}
        >
          {action.icon}
          <span className="text-sm font-medium">{action.label}</span>
          {action.popular && <span className="text-xs bg-orange-500 text-white px-2 py-0.5 rounded-full">Popular</span>}
        </button>
      ))}
    </div>
  )
}
