export function GameStats() {
  const stats = [
    { value: "50+", label: "Jogos Disponíveis", icon: "🎮" },
    { value: "99.9%", label: "Uptime", icon: "⚡" },
    { value: "24/7", label: "Suporte", icon: "🛡️" },
    { value: "1000+", label: "Servidores Ativos", icon: "🚀" },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
      {stats.map((stat, index) => (
        <div key={index} className="text-center group">
          <div className="bg-gray-50 dark:bg-slate-800/30 border border-gray-200 dark:border-slate-700/50 rounded-2xl p-6 backdrop-blur-sm hover:bg-gray-100 dark:hover:bg-slate-700/30 transition-all duration-300 hover:scale-105">
            <div className="text-2xl mb-2">{stat.icon}</div>
            <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-1">
              {stat.value}
            </div>
            <div className="text-gray-600 dark:text-slate-400">{stat.label}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
