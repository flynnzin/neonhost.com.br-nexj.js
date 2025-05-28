import Link from "next/link"
import { maintenanceConfig } from "@/config/maintenance"
import { MaintenancePage } from "@/components/maintenance-page"

interface Params {
  id: string
}

interface PageProps {
  params: Params
}

// Função para obter dados do jogo baseado no ID
function getGameData(id: string) {
  // Dados dos jogos...
  return {
    id,
    name: id.charAt(0).toUpperCase() + id.slice(1),
    // ... outros dados
  }
}

export default function Page({ params }: PageProps) {
  // Verifica se está em manutenção
  if (maintenanceConfig.isGamesUnderMaintenance) {
    return (
      <MaintenancePage
        title="Planos em Breve"
        subtitle={`Planos para ${params.id.charAt(0).toUpperCase() + params.id.slice(1)} em desenvolvimento`}
        description="Estamos preparando os melhores planos de hospedagem para este jogo. Em breve você terá acesso a opções personalizadas para suas necessidades."
        showBackButton={true}
        backUrl="/games"
      />
    )
  }

  const gameData = getGameData(params.id)

  if (!gameData) {
    return (
      <div className="min-h-screen bg-[#0A0C10] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Jogo não encontrado</h1>
          <Link href="/games" className="text-purple-400 hover:text-purple-300">
            Voltar para jogos
          </Link>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-[#0A0C10] text-white">
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-4xl font-bold text-white text-center">Planos para {params.id} (modo normal)</h1>
        <p className="text-gray-400 text-center mt-4">
          Esta página só aparece quando maintenanceConfig.isGamesUnderMaintenance = false
        </p>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold text-white mb-8">Planos para o jogo {params.id}</h1>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href={`/games/${params.id}/planos`}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 text-center"
          >
            Ver todos os planos
          </Link>
          <Link
            href="https://discord.gg/neonhost"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-xl font-medium transition-colors border border-white/10 text-center"
          >
            Falar com suporte
          </Link>
        </div>
      </div>
    </main>
  )
}
