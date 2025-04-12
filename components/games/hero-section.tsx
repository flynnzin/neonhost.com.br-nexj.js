import Link from "next/link"

// Configuração dos links do hero
const heroConfig = {
  exploreGamesUrl: "https://app.neonhost.com.br/games",
  viewServersUrl: "https://app.neonhost.com.br/servers",
}

export function HeroSection() {
  return (
    <div className="relative w-full h-[70vh] overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black z-10"></div>

      {/* Background image */}
      <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] bg-cover bg-center z-0 opacity-40">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-orange-900/20"></div>
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-500/10 blur-3xl"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-orange-500/10 blur-3xl"></div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center z-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-white">Universo de </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">Games</span>
          </h1>
          <p className="text-xl text-zinc-300 mb-8 max-w-2xl">
            Explore nossa coleção de jogos e servidores de alta performance. Hospedagem otimizada para a melhor
            experiência de jogo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={heroConfig.exploreGamesUrl}
              className="bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white px-8 py-4 rounded-md font-medium text-lg relative group overflow-hidden inline-block"
            >
              <span className="relative z-10">Explorar Jogos</span>
              <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left bg-gradient-to-r from-purple-700 to-orange-600"></div>
            </Link>
            <Link
              href={heroConfig.viewServersUrl}
              className="bg-zinc-900 hover:bg-zinc-800 text-white border border-purple-500/30 px-8 py-4 rounded-md font-medium text-lg inline-block"
            >
              Ver Servidores
            </Link>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-12">
            <div>
              <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">
                50+
              </p>
              <p className="text-zinc-400 text-sm">Jogos Disponíveis</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">
                99.9%
              </p>
              <p className="text-zinc-400 text-sm">Uptime Garantido</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">
                24/7
              </p>
              <p className="text-zinc-400 text-sm">Suporte Técnico</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
