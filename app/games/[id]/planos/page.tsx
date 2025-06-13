"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { maintenanceConfig } from "@/config/maintenance"
import { MaintenancePage } from "@/components/maintenance-page"
import { Check, X, ChevronRight, Zap, Shield, Cpu, Server, Users, Clock, Database } from "lucide-react"

interface Params {
  id: string
}

interface PageProps {
  params: Params
}

interface Plan {
  id: string
  name: string
  description: string
  price: number
  originalPrice: number
  discount: number
  features: {
    name: string
    included: boolean
  }[]
  specs: {
    ram: string
    cpu: string
    storage: string
    players: string
    backups: string
    ddosProtection: string
  }
  popular?: boolean
  badge?: string
  productLink?: string
}

// Função para obter dados do jogo baseado no ID
function getGameData(id: string) {
  const games = {
    minecraft: {
      id: "minecraft",
      name: "Minecraft",
      logo: "/games/page/mine.jpg",
      description: "Hospedagem de servidores Minecraft otimizados para o melhor desempenho",
      plans: [
        {
          id: "basic",
          name: "Basic",
          description: "Ideal para pequenos grupos de amigos",
          price: 9.99,
          originalPrice: 14.99,
          discount: 33,
          productLink: "https://app.neonhost.com.br/index.php?rp=/store/minecraft/basic",
          features: [
            { name: "Painel de controle", included: true },
            { name: "Plugins ilimitados", included: true },
            { name: "Domínio personalizado", included: false },
            { name: "Suporte prioritário", included: false },
            { name: "Backups diários", included: false },
            { name: "Proteção DDoS", included: true },
          ],
          specs: {
            ram: "2GB",
            cpu: "1 vCore",
            storage: "10GB SSD NVMe",
            players: "10 jogadores",
            backups: "Semanal",
            ddosProtection: "Básica",
          },
        },
        {
          id: "standard",
          name: "Standard",
          description: "Para servidores com mais jogadores e mods",
          price: 19.99,
          originalPrice: 29.99,
          discount: 33,
          popular: true,
          badge: "Mais Popular",
          productLink: "https://app.neonhost.com.br/index.php?rp=/store/minecraft/standard",
          features: [
            { name: "Painel de controle", included: true },
            { name: "Plugins ilimitados", included: true },
            { name: "Domínio personalizado", included: true },
            { name: "Suporte prioritário", included: false },
            { name: "Backups diários", included: true },
            { name: "Proteção DDoS", included: true },
          ],
          specs: {
            ram: "4GB",
            cpu: "2 vCores",
            storage: "20GB SSD NVMe",
            players: "25 jogadores",
            backups: "Diário",
            ddosProtection: "Avançada",
          },
        },
        {
          id: "premium",
          name: "Premium",
          description: "Para servidores grandes com muitos mods",
          price: 29.99,
          originalPrice: 44.99,
          discount: 33,
          productLink: "https://app.neonhost.com.br/index.php?rp=/store/minecraft/premium",
          features: [
            { name: "Painel de controle", included: true },
            { name: "Plugins ilimitados", included: true },
            { name: "Domínio personalizado", included: true },
            { name: "Suporte prioritário", included: true },
            { name: "Backups diários", included: true },
            { name: "Proteção DDoS", included: true },
          ],
          specs: {
            ram: "6GB",
            cpu: "3 vCores",
            storage: "30GB SSD NVMe",
            players: "40 jogadores",
            backups: "Diário",
            ddosProtection: "Premium",
          },
        },
        {
          id: "ultimate",
          name: "Ultimate",
          description: "Para grandes comunidades e modpacks pesados",
          price: 39.99,
          originalPrice: 59.99,
          discount: 33,
          productLink: "https://app.neonhost.com.br/index.php?rp=/store/minecraft/ultimate",
          features: [
            { name: "Painel de controle", included: true },
            { name: "Plugins ilimitados", included: true },
            { name: "Domínio personalizado", included: true },
            { name: "Suporte prioritário", included: true },
            { name: "Backups diários", included: true },
            { name: "Proteção DDoS", included: true },
          ],
          specs: {
            ram: "8GB",
            cpu: "4 vCores",
            storage: "40GB SSD NVMe",
            players: "60+ jogadores",
            backups: "Diário",
            ddosProtection: "Premium",
          },
        },
        {
          id: "extreme",
          name: "Extreme",
          description: "Para servidores de alta performance",
          price: 59.99,
          originalPrice: 89.99,
          discount: 33,
          productLink: "https://app.neonhost.com.br/index.php?rp=/store/minecraft/extreme",
          features: [
            { name: "Painel de controle", included: true },
            { name: "Plugins ilimitados", included: true },
            { name: "Domínio personalizado", included: true },
            { name: "Suporte prioritário", included: true },
            { name: "Backups diários", included: true },
            { name: "Proteção DDoS", included: true },
          ],
          specs: {
            ram: "12GB",
            cpu: "6 vCores",
            storage: "60GB SSD NVMe",
            players: "100+ jogadores",
            backups: "Diário",
            ddosProtection: "Premium",
          },
        },
        {
          id: "titan",
          name: "Titan",
          description: "Nossa solução mais poderosa para Minecraft",
          price: 79.99,
          originalPrice: 119.99,
          discount: 33,
          badge: "Máximo Desempenho",
          productLink: "https://app.neonhost.com.br/index.php?rp=/store/minecraft/titan",
          features: [
            { name: "Painel de controle", included: true },
            { name: "Plugins ilimitados", included: true },
            { name: "Domínio personalizado", included: true },
            { name: "Suporte prioritário", included: true },
            { name: "Backups diários", included: true },
            { name: "Proteção DDoS", included: true },
          ],
          specs: {
            ram: "16GB",
            cpu: "8 vCores",
            storage: "80GB SSD NVMe",
            players: "150+ jogadores",
            backups: "Diário",
            ddosProtection: "Premium",
          },
        },
      ],
    },
    palworld: {
      id: "palworld",
      name: "Palworld",
      logo: "/games/page/pal.png",
      description: "Hospedagem de servidores Palworld com desempenho otimizado",
      plans: [
        {
          id: "starter",
          name: "Básico",
          description: "Para pequenos grupos de jogadores",
          price: 39.9,
          originalPrice: 59.9,
          discount: 33,
          features: [
            { name: "Painel de controle", included: true },
            { name: "Mods suportados", included: true },
            { name: "Domínio personalizado", included: false },
            { name: "Suporte prioritário", included: false },
            { name: "Backups diários", included: false },
            { name: "Proteção DDoS", included: true },
          ],
          specs: {
            ram: "4GB",
            cpu: "2 vCores",
            storage: "30GB SSD NVMe",
            players: "10 jogadores",
            backups: "Semanal",
            ddosProtection: "Básica",
          },
        },
        {
          id: "standard",
          name: "Avançado",
          description: "Para servidores médios com mais jogadores",
          price: 69.9,
          originalPrice: 99.9,
          discount: 30,
          popular: true,
          badge: "Mais Popular",
          features: [
            { name: "Painel de controle", included: true },
            { name: "Mods suportados", included: true },
            { name: "Domínio personalizado", included: true },
            { name: "Suporte prioritário", included: false },
            { name: "Backups diários", included: true },
            { name: "Proteção DDoS", included: true },
          ],
          specs: {
            ram: "8GB",
            cpu: "4 vCores",
            storage: "50GB SSD NVMe",
            players: "25 jogadores",
            backups: "Diário",
            ddosProtection: "Avançada",
          },
        },
        {
          id: "premium",
          name: "Premium",
          description: "Para grandes comunidades de Palworld",
          price: 119.9,
          originalPrice: 169.9,
          discount: 29,
          features: [
            { name: "Painel de controle", included: true },
            { name: "Mods suportados", included: true },
            { name: "Domínio personalizado", included: true },
            { name: "Suporte prioritário", included: true },
            { name: "Backups diários", included: true },
            { name: "Proteção DDoS", included: true },
          ],
          specs: {
            ram: "16GB",
            cpu: "8 vCores",
            storage: "100GB SSD NVMe",
            players: "50+ jogadores",
            backups: "Diário",
            ddosProtection: "Premium",
          },
        },
      ],
    },
    // Adicione outros jogos conforme necessário
  }

  // Retorna os dados do jogo ou um jogo padrão se não encontrar
  return games[id as keyof typeof games] || games.minecraft
}

export default function PlansPage({ params }: PageProps) {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "quarterly" | "semiannual" | "annual">("monthly")
  const [showComparison, setShowComparison] = useState(false)
  const [visiblePlans, setVisiblePlans] = useState(3)

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

  // Calculadora de desconto baseada no ciclo de cobrança
  const getDiscountedPrice = (price: number, cycle: string) => {
    switch (cycle) {
      case "quarterly":
        return price * 3 * 0.95 // 5% de desconto
      case "semiannual":
        return price * 6 * 0.9 // 10% de desconto
      case "annual":
        return price * 12 * 0.8 // 20% de desconto
      default:
        return price
    }
  }

  // Texto do ciclo de cobrança
  const cycleText = {
    monthly: "mês",
    quarterly: "trimestre",
    semiannual: "semestre",
    annual: "ano",
  }

  // Desconto adicional por ciclo
  const cycleDiscount = {
    monthly: "0%",
    quarterly: "5%",
    semiannual: "10%",
    annual: "20%",
  }

  // Função para mostrar mais planos
  const handleShowMorePlans = () => {
    setVisiblePlans(gameData.plans.length)
  }

  return (
    <main className="min-h-screen bg-[#0A0C10] text-white pb-24">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-[#0A0C10]" />
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] opacity-10" />

        {/* Efeito de partículas */}
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-purple-500/30 rounded-full filter blur-[100px] animate-pulse-slow" />
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full filter blur-[120px] animate-pulse-slow" />

        <div className="relative container mx-auto px-4 pt-32 pb-20">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
            <Link href="/" className="hover:text-white transition-colors">
              Início
            </Link>
            <span>/</span>
            <Link href="/games" className="hover:text-white transition-colors">
              Jogos
            </Link>
            <span>/</span>
            <Link href={`/games/${params.id}`} className="hover:text-white transition-colors">
              {gameData.name}
            </Link>
            <span>/</span>
            <span className="text-white">Planos</span>
          </nav>

          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl overflow-hidden border border-white/10 relative">
                <Image src={gameData.logo || "/placeholder.svg"} alt={gameData.name} fill className="object-cover" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 animate-gradient">
                Planos para {gameData.name}
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8">{gameData.description}</p>

            {/* Seletor de ciclo de cobrança */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-2 inline-flex mx-auto">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  billingCycle === "monthly"
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Mensal
              </button>
              <button
                onClick={() => setBillingCycle("quarterly")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  billingCycle === "quarterly"
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Trimestral <span className="text-xs text-green-400">-5%</span>
              </button>
              <button
                onClick={() => setBillingCycle("semiannual")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  billingCycle === "semiannual"
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Semestral <span className="text-xs text-green-400">-10%</span>
              </button>
              <button
                onClick={() => setBillingCycle("annual")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  billingCycle === "annual"
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                Anual <span className="text-xs text-green-400">-20%</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Planos */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gameData.plans.slice(0, visiblePlans).map((plan: Plan) => (
            <div
              key={plan.id}
              className={`relative bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden group transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] ${
                plan.popular ? "md:-mt-4 md:mb-4" : ""
              }`}
            >
              {/* Efeito de borda neon */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-2xl border border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
              </div>

              {/* Badge de popular */}
              {plan.badge && (
                <div className="absolute top-0 right-0">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-4 py-1 rounded-bl-lg rounded-tr-lg shadow-lg shadow-purple-500/25">
                    {plan.badge}
                  </div>
                </div>
              )}

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>

                {/* Preço */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-1">
                    {plan.discount > 0 && (
                      <span className="bg-gradient-to-r from-purple-600 to-orange-500 text-white text-xs px-2 py-1 rounded">
                        -{plan.discount}%
                      </span>
                    )}
                    <span className="text-gray-400 line-through text-sm">
                      R$ {plan.originalPrice.toFixed(2).replace(".", ",")}
                    </span>
                  </div>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                      R${" "}
                      {(
                        getDiscountedPrice(plan.price, billingCycle) /
                        (billingCycle === "monthly"
                          ? 1
                          : billingCycle === "quarterly"
                            ? 3
                            : billingCycle === "semiannual"
                              ? 6
                              : 12)
                      )
                        .toFixed(2)
                        .replace(".", ",")}
                    </span>
                    <span className="text-gray-400 ml-2">/{cycleText[billingCycle]}</span>
                  </div>
                  {billingCycle !== "monthly" && (
                    <div className="text-xs text-green-400 mt-1">
                      Economia de {cycleDiscount[billingCycle]} no plano {billingCycle}
                    </div>
                  )}
                </div>

                {/* Especificações */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                      <Server className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">RAM</div>
                      <div className="font-medium">{plan.specs.ram}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                      <Cpu className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">CPU</div>
                      <div className="font-medium">{plan.specs.cpu}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                      <Database className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Armazenamento</div>
                      <div className="font-medium">{plan.specs.storage}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                      <Users className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Capacidade</div>
                      <div className="font-medium">{plan.specs.players}</div>
                    </div>
                  </div>
                </div>

                {/* Recursos */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-green-400" />
                      ) : (
                        <X className="w-5 h-5 text-gray-500" />
                      )}
                      <span className={feature.included ? "text-gray-200" : "text-gray-500"}>{feature.name}</span>
                    </div>
                  ))}
                </div>

                {/* Botão de ação */}
                <Link
                  href={plan.productLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-xl font-medium text-center transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 group-hover:scale-105"
                >
                  Contratar Agora
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Botão para mostrar mais planos */}
        {visiblePlans < gameData.plans.length && (
          <div className="text-center mt-12">
            <button
              onClick={handleShowMorePlans}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-medium transition-colors border border-white/10"
            >
              Ver Todos os Planos
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {/* Botão de comparação */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowComparison(!showComparison)}
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-medium transition-colors border border-white/10"
          >
            {showComparison ? "Ocultar Comparação" : "Comparar Todos os Planos"}
            <ChevronRight className={`w-5 h-5 transition-transform ${showComparison ? "rotate-90" : ""}`} />
          </button>
        </div>

        {/* Tabela de comparação */}
        {showComparison && (
          <div className="mt-16 overflow-x-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
              <h3 className="text-2xl font-bold mb-8 text-center">Comparação Detalhada de Planos</h3>
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-4">Recurso</th>
                    {gameData.plans.map((plan: Plan) => (
                      <th key={plan.id} className="text-center py-4 px-4">
                        {plan.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4 text-gray-400">RAM</td>
                    {gameData.plans.map((plan: Plan) => (
                      <td key={plan.id} className="text-center py-4 px-4">
                        {plan.specs.ram}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4 text-gray-400">CPU</td>
                    {gameData.plans.map((plan: Plan) => (
                      <td key={plan.id} className="text-center py-4 px-4">
                        {plan.specs.cpu}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4 text-gray-400">Armazenamento</td>
                    {gameData.plans.map((plan: Plan) => (
                      <td key={plan.id} className="text-center py-4 px-4">
                        {plan.specs.storage}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4 text-gray-400">Jogadores</td>
                    {gameData.plans.map((plan: Plan) => (
                      <td key={plan.id} className="text-center py-4 px-4">
                        {plan.specs.players}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4 text-gray-400">Backups</td>
                    {gameData.plans.map((plan: Plan) => (
                      <td key={plan.id} className="text-center py-4 px-4">
                        {plan.specs.backups}
                      </td>
                    ))}
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4 text-gray-400">Proteção DDoS</td>
                    {gameData.plans.map((plan: Plan) => (
                      <td key={plan.id} className="text-center py-4 px-4">
                        {plan.specs.ddosProtection}
                      </td>
                    ))}
                  </tr>
                  {/* Features */}
                  {gameData.plans[0].features.map((feature, featureIndex) => (
                    <tr key={featureIndex} className="border-b border-white/10">
                      <td className="py-4 px-4 text-gray-400">{feature.name}</td>
                      {gameData.plans.map((plan: Plan) => (
                        <td key={plan.id} className="text-center py-4 px-4">
                          {plan.features[featureIndex].included ? (
                            <Check className="w-5 h-5 text-green-400 mx-auto" />
                          ) : (
                            <X className="w-5 h-5 text-gray-500 mx-auto" />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                  {/* Preço */}
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4 text-gray-400">Preço Mensal</td>
                    {gameData.plans.map((plan: Plan) => (
                      <td key={plan.id} className="text-center py-4 px-4 font-bold">
                        R$ {plan.price.toFixed(2).replace(".", ",")}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className="py-4 px-4"></td>
                    {gameData.plans.map((plan: Plan) => (
                      <td key={plan.id} className="text-center py-4 px-4">
                        <Link
                          href={plan.productLink || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-2 rounded-lg font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
                        >
                          Contratar
                        </Link>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Seção de recursos */}
      <div className="container mx-auto px-4 mt-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Recursos Inclusos em Todos os Planos</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Todos os nossos servidores de {gameData.name} incluem estes recursos essenciais para garantir a melhor
            experiência de jogo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 group">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Ativação Instantânea</h3>
            <p className="text-gray-400">
              Seu servidor estará pronto para uso em segundos após a confirmação do pagamento.
            </p>
          </div>

          <div className="bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 group">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Shield className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Proteção DDoS</h3>
            <p className="text-gray-400">
              Todos os servidores contam com proteção contra ataques DDoS para garantir estabilidade.
            </p>
          </div>

          <div className="bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 group">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Server className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Hardware Premium</h3>
            <p className="text-gray-400">
              Servidores equipados com processadores AMD Ryzen e SSDs NVMe para desempenho máximo.
            </p>
          </div>

          <div className="bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 group">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Suporte 24/7</h3>
            <p className="text-gray-400">
              Nossa equipe de suporte está disponível 24 horas por dia, 7 dias por semana para ajudar.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="container mx-auto px-4 mt-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Perguntas Frequentes</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tire suas dúvidas sobre nossos servidores de {gameData.name}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h4 className="text-xl font-bold mb-2">Como funciona a ativação do servidor?</h4>
              <p className="text-gray-400">
                Após a confirmação do pagamento, seu servidor é ativado automaticamente e você recebe um email com as
                instruções de acesso ao painel de controle.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h4 className="text-xl font-bold mb-2">Posso mudar de plano depois?</h4>
              <p className="text-gray-400">
                Sim, você pode fazer upgrade ou downgrade do seu plano a qualquer momento através do painel de controle,
                com ajuste proporcional de valores.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h4 className="text-xl font-bold mb-2">Como funciona o suporte técnico?</h4>
              <p className="text-gray-400">
                Oferecemos suporte via ticket, chat ao vivo e Discord. Nosso tempo médio de resposta é de menos de 30
                minutos para todos os planos.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <h4 className="text-xl font-bold mb-2">Posso testar antes de contratar?</h4>
              <p className="text-gray-400">
                Oferecemos garantia de 7 dias. Se você não ficar satisfeito com o serviço, devolvemos seu dinheiro sem
                perguntas.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Final */}
      <div className="container mx-auto px-4 mt-24">
        <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden">
          {/* Efeitos de luz */}
          <div className="absolute -top-24 -left-24 w-48 h-48 bg-purple-500/30 rounded-full filter blur-[80px]" />
          <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-pink-500/30 rounded-full filter blur-[80px]" />

          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronto para começar sua aventura?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Escolha o plano ideal para você e comece a jogar {gameData.name} com seus amigos agora mesmo!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="https://app.neonhost.com.br/index.php?rp=/store/minecraft"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 text-center"
              >
                Escolher um Plano
              </Link>
              <Link
                href="https://discord.gg/neonhost"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-xl font-medium transition-colors border border-white/10 text-center"
              >
                Entrar no Discord
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
