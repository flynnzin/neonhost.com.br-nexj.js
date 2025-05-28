import { maintenanceConfig } from "@/config/maintenance"
import { MaintenancePage } from "@/components/maintenance-page"
import { FeaturedGames } from "../../components/games/featured-games"
import { AllGamesSection } from "../../components/games/all-games-section"
import { ServerHosting } from "../../components/games/server-hosting"
import { Gamepad2, Zap, Shield, Rocket } from "lucide-react"

export default function GamesPage() {
  // Verifica se está em manutenção
  if (maintenanceConfig.isGamesUnderMaintenance) {
    return (
      <MaintenancePage
        title={maintenanceConfig.title}
        subtitle={maintenanceConfig.subtitle}
        description={maintenanceConfig.description}
        showBackButton={true}
        backUrl="/"
      />
    )
  }

  return (
    <main className="min-h-screen bg-[#0A0C10]">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        {/* Background Effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-purple-500/10 border border-purple-500/20 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-purple-300">Servidores Online 24/7</span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
              Hospedagem de{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">Jogos</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Servidores otimizados para jogos com performance superior e proteção anti-DDoS
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { icon: <Gamepad2 className="w-6 h-6" />, value: "50+", label: "Jogos" },
                { icon: <Zap className="w-6 h-6" />, value: "99.9%", label: "Uptime" },
                { icon: <Shield className="w-6 h-6" />, value: "24/7", label: "Suporte" },
                { icon: <Rocket className="w-6 h-6" />, value: "1000+", label: "Servidores" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-white/5 border border-white/10 rounded-xl mb-3 text-purple-400">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-20">
        {/* Featured Games */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Jogos em Destaque</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          <FeaturedGames />
        </section>

        {/* All Games */}
        <AllGamesSection />

        {/* Server Hosting CTA */}
        <section className="mt-20">
          <ServerHosting />
        </section>
      </div>
    </main>
  )
}
