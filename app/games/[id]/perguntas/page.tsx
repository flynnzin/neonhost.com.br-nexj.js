import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { maintenanceConfig } from "@/config/maintenance"
import { MaintenancePage } from "@/components/maintenance-page"

interface PerguntasPageProps {
  params: {
    id: string
  }
}

export default function PerguntasPage({ params }: PerguntasPageProps) {
  // Verifica se está em manutenção
  if (maintenanceConfig.isGamesUnderMaintenance) {
    return (
      <MaintenancePage
        title="FAQ em Breve"
        subtitle={`Perguntas frequentes sobre ${params.id.charAt(0).toUpperCase() + params.id.slice(1)}`}
        description="Estamos compilando as principais dúvidas e respostas sobre este jogo para ajudar você da melhor forma possível."
        showBackButton={true}
        backUrl="/games"
      />
    )
  }

  // Simulando dados do jogo baseado no ID
  const gameData = getGameData(params.id)

  if (!gameData) {
    return <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-gray-900 dark:text-white">Jogo não encontrado</div>
  }

  return (
    <main className="min-h-screen bg-white dark:bg-[#0A0C10] text-gray-900 dark:text-white">
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white text-center">FAQ do {params.id} (modo normal)</h1>
        <p className="text-gray-500 dark:text-gray-400 text-center mt-4">
          Esta página só aparece quando maintenanceConfig.isGamesUnderMaintenance = false
        </p>

        {/* Navegação */}
        <div className="flex border-b border-purple-500/20 mt-4">
          <Link href={`/games/${params.id}`} className="text-gray-500 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white px-4 py-2">
            Visão Geral
          </Link>
          <Link href={`/games/${params.id}/planos`} className="text-gray-500 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white px-4 py-2">
            Planos
          </Link>
          <Link
            href={`/games/${params.id}/perguntas`}
            className="text-gray-900 dark:text-white border-b-2 border-orange-500 px-4 py-2 font-medium"
          >
            Perguntas frequentes
          </Link>
        </div>

        {/* FAQ */}
        <div className="mt-12 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Perguntas frequentes sobre {gameData.name}</h2>
          <div className="space-y-4">
            {gameData.faq.map((item, index) => (
              <div key={index} className="border border-purple-500/10 rounded-lg overflow-hidden">
                <button className="flex items-center justify-between w-full p-4 text-left bg-gray-50 dark:bg-zinc-900/50 hover:bg-gray-100 dark:hover:bg-zinc-800/50 transition-colors">
                  <span className="font-medium">{item.question}</span>
                  <ChevronDown size={20} />
                </button>
                <div className="p-4 bg-gray-100 dark:bg-zinc-800/30 border-t border-purple-500/10">
                  <p className="text-gray-700 dark:text-zinc-300">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contato */}
          <div className="mt-12 bg-gradient-to-r from-purple-100/50 to-orange-100/50 dark:from-purple-900/20 dark:to-orange-900/20 rounded-lg p-8 text-center">
            <h3 className="text-xl font-bold mb-4">Ainda tem dúvidas?</h3>
            <p className="text-gray-700 dark:text-zinc-300 mb-6">
              Nossa equipe de suporte está disponível 24/7 para ajudar com qualquer dúvida que você possa ter.
            </p>
            <button className="bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white px-6 py-3 rounded-md font-medium transition-colors">
              Falar com suporte
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

// Função para obter dados do jogo baseado no ID
function getGameData(id: string) {
  const games = {
    minecraft: {
      id: "minecraft",
      name: "Minecraft",
      faq: [
        {
          question: "Onde estão localizados os servidores?",
          answer:
            "Nossos servidores estão localizados em São Paulo, Brasil, garantindo baixa latência para jogadores brasileiros.",
        },
        {
          question: "Como funciona o reembolso?",
          answer: "Oferecemos reembolso em até 7 dias após a compra, sem perguntas.",
        },
        {
          question: "Posso rodar mods?",
          answer:
            "Sim, todos os nossos planos suportam mods e plugins, exceto o plano Bedrock que é exclusivo para Minecraft Bedrock Edition.",
        },
        {
          question: "Posso aumentar meu plano?",
          answer: "Sim, você pode fazer upgrade do seu plano a qualquer momento através do painel de controle.",
        },
        {
          question: "Como faço pra acessar após a compra?",
          answer: "Após a compra, você receberá um email com as instruções de acesso ao painel de controle.",
        },
        {
          question: "Qual a versão mais recente suportada?",
          answer:
            "Suportamos todas as versões do Minecraft, desde as mais antigas até as mais recentes, incluindo snapshots.",
        },
        {
          question: "Posso instalar modpacks como RLCraft ou SkyFactory?",
          answer:
            "Sim, nossos servidores suportam a instalação de modpacks populares como RLCraft, SkyFactory, Pixelmon e muitos outros.",
        },
        {
          question: "Quantos jogadores podem jogar simultaneamente?",
          answer: "Isso depende do plano escolhido. Nossos planos suportam de 5 a mais de 100 jogadores simultâneos.",
        },
        {
          question: "O servidor fica online 24/7?",
          answer: "Sim, todos os nossos servidores ficam online 24 horas por dia, 7 dias por semana.",
        },
        {
          question: "Posso transferir meu mundo existente?",
          answer: "Sim, nossa equipe de suporte pode ajudar a transferir seu mundo existente para nosso servidor.",
        },
      ],
    },
    palworld: {
      id: "palworld",
      name: "Palworld",
      faq: [
        {
          question: "Quantos jogadores o servidor suporta?",
          answer:
            "Depende do plano escolhido, mas nossos servidores de Palworld suportam de 10 a 100 jogadores simultâneos.",
        },
        {
          question: "Posso instalar mods no servidor?",
          answer: "Sim, todos os nossos planos de Palworld suportam mods e configurações personalizadas.",
        },
        {
          question: "Como funciona o backup?",
          answer:
            "Realizamos backups automáticos diários do seu servidor, e você também pode criar backups manuais a qualquer momento.",
        },
        {
          question: "Posso transferir meu mundo existente?",
          answer: "Sim, nossa equipe de suporte pode ajudar a transferir seu mundo existente para nosso servidor.",
        },
        {
          question: "O servidor fica online 24/7?",
          answer: "Sim, todos os nossos servidores ficam online 24 horas por dia, 7 dias por semana.",
        },
        {
          question: "Onde estão localizados os servidores?",
          answer:
            "Nossos servidores estão localizados em São Paulo, Brasil, garantindo baixa latência para jogadores brasileiros.",
        },
        {
          question: "Como funciona o reembolso?",
          answer: "Oferecemos reembolso em até 7 dias após a compra, sem perguntas.",
        },
        {
          question: "Posso aumentar meu plano?",
          answer: "Sim, você pode fazer upgrade do seu plano a qualquer momento através do painel de controle.",
        },
        {
          question: "Como faço pra acessar após a compra?",
          answer: "Após a compra, você receberá um email com as instruções de acesso ao painel de controle.",
        },
        {
          question: "O servidor tem proteção contra ataques DDoS?",
          answer:
            "Sim, todos os nossos servidores contam com proteção avançada contra ataques DDoS para garantir a estabilidade do seu servidor.",
        },
      ],
    },
  }

  return games[id as keyof typeof games]
}
