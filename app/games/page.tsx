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
    <main className="min-h-screen bg-[#0A0C10] relative overflow-hidden">
      {/* Efeitos de fundo neon */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Círculos de luz neon */}
        <div className="absolute -top-[30%] -left-[10%] w-[80%] h-[80%] rounded-full bg-purple-600/5 blur-[120px]"></div>
        <div className="absolute -bottom-[30%] -right-[10%] w-[80%] h-[80%] rounded-full bg-pink-600/5 blur-[120px]"></div>
        <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full bg-blue-600/5 blur-[150px]"></div>

        {/* Grade neon */}
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.png')] bg-repeat opacity-[0.03]"></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30 backdrop-blur-sm rounded-full px-4 py-2 mb-8 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.6)]"></div>
              <span className="text-sm text-purple-300 font-medium">Servidores Online 24/7</span>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white relative">
              Hospedagem de{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 animate-gradient">
                Jogos
              </span>
              <span className="absolute -inset-1 blur-xl bg-gradient-to-r from-pink-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
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
                <div key={index} className="text-center group relative" style={{ animationDelay: `${index * 100}ms` }}>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-purple-500/30 rounded-xl mb-3 text-purple-400 backdrop-blur-sm shadow-[0_0_15px_rgba(168,85,247,0.15)] group-hover:shadow-[0_0_25px_rgba(168,85,247,0.3)] transition-all duration-300 group-hover:scale-110">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 pb-20 relative z-10">
        {/* Featured Games */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 relative inline-block">
              Jogos em Destaque
              <div className="w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full mt-2 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
            </h2>
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

      {/* Efeito de partículas flutuantes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-purple-500/30 animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
              boxShadow: "0 0 5px rgba(168,85,247,0.5)",
            }}
          ></div>
        ))}
      </div>
    </main>
  )
}
