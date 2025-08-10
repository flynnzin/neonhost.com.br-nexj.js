"use client"

import { Network, Shield, Server, Zap, Globe, Activity, Cpu, Clock, TrendingUp, BarChart3, Wifi, HardDrive, Award, CheckCircle } from 'lucide-react'

export default function RedesPage() {
  // Exact chart data matching the images
  const chartData = [
    {
      title: "Análise de Jitter da Rede",
      description: "Aumento mínimo de jitter de 0,36ms com a Rede NeonHost",
      yMax: 18,
      yMin: 0,
      data: {
        withNeon: [16, 15.2, 15.8, 15.1, 15.6, 15.3, 15.9, 15.2, 15.7, 15.1, 15.4, 15.8, 15.6, 15.2, 15.9, 15.1, 15.5, 15.3, 15.7, 15.4, 15.8, 15.2, 15.6, 15.9, 15.1, 15.4, 15.7, 15.3, 15.8, 15.5],
        withoutNeon: [14.8, 15.1, 14.6, 15.3, 14.9, 15.5, 14.7, 15.2, 14.8, 15.6, 14.9, 15.1, 15.4, 14.7, 15.8, 14.6, 15.2, 14.9, 15.5, 15.1, 15.7, 14.8, 15.3, 15.6, 14.9, 15.2, 15.4, 15.1, 15.8, 15.3]
      }
    },
    {
      title: "Comparação de Perda de Pacotes",
      description: "Perda de pacotes reduzida para 0,52% e 5,26% com a Rede NeonHost",
      yMax: 6,
      yMin: 0,
      data: {
        withNeon: [0.5, 0.6, 0.4, 0.5, 0.3, 0.4, 0.5, 0.3, 0.6, 0.4, 0.5, 0.3, 0.4, 0.6, 0.5, 0.3, 0.4, 0.5, 0.6, 0.4, 0.3, 0.5, 0.4, 0.6, 0.3, 0.5, 0.4, 0.6, 0.5, 0.4],
        withoutNeon: [5.2, 5.8, 5.1, 5.6, 5.3, 5.9, 5.4, 5.7, 5.2, 5.5, 5.1, 5.8, 5.3, 5.6, 5.4, 5.9, 5.2, 5.7, 5.5, 5.1, 5.6, 5.3, 5.8, 5.4, 5.7, 5.2, 5.9, 5.5, 5.1, 5.6]
      }
    },
    {
      title: "Desempenho de Latência",
      description: "Redução média de latência de 3ms com a Rede NeonHost",
      yMax: 35,
      yMin: 0,
      data: {
        withNeon: [29.5, 29.2, 28.8, 29.1, 28.3, 28.9, 29.0, 28.7, 28.6, 29.3, 28.4, 28.8, 29.1, 28.5, 28.9, 28.7, 29.2, 28.6, 28.8, 29.0, 28.4, 29.1, 28.7, 29.3, 28.5, 28.9, 29.2, 28.6, 28.8, 29.0],
        withoutNeon: [32.1, 33.2, 32.8, 33.5, 32.3, 33.1, 32.9, 33.4, 32.6, 33.0, 32.7, 33.3, 32.4, 33.1, 32.8, 33.2, 32.5, 33.4, 32.9, 33.0, 32.6, 33.1, 32.7, 33.5, 32.3, 33.2, 32.8, 33.4, 32.9, 33.1]
      }
    }
  ]

  const networkFeatures = [
    {
      icon: <Network className="h-6 w-6" />,
      title: "Localizações Estratégicas",
      description: "Múltiplos data centers em locais-chave do Brasil com conectividade internacional direta"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Roteamento Otimizado",
      description: "Roteamento BGP avançado com múltiplos provedores tier-1 para seleção de rota ideal"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Proteção Global",
      description: "Integração com Cloudflare e sistemas próprios com 500+ pontos de presença globais"
    }
  ]

  const networkResources = [
    "Múltiplos uplinks de 100GE",
    "Conexões de fibra redundantes", 
    "Roteamento BGP otimizado",
    "Proteção DDoS em todas as rotas",
    "Monitoramento de rede 24/7",
    "Análise de tráfego em tempo real"
  ]

  const infrastructureStats = [
    {
      icon: <Server className="h-8 w-8" />,
      title: "500+ Gbps Capacidade",
      description: "Múltiplos uplinks de 100GE com conexões de fibra redundantes",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "348 Tbps Proteção",
      description: "Integração com Cloudflare e sistemas próprios para proteção incomparável",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Peering Global",
      description: "Conexões diretas com as principais redes mundiais",
      color: "from-green-500 to-emerald-500"
    }
  ]

  const renderChart = (chart: any, index: number) => {
    const { yMax, yMin } = chart
    const range = yMax - yMin
    const gridLines = Math.ceil(yMax / (yMax <= 6 ? 1 : yMax <= 18 ? 2 : 5))

    return (
      <div key={index} className="bg-gray-900/40 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-gray-700/50 hover:border-purple-500/30 transition-all duration-300">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-white">{chart.title}</h3>
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-3 border-2 border-red-500 bg-transparent"></div>
              <span className="text-gray-300">Com Rede NeonHost</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-3 border-2 border-gray-400 bg-transparent"></div>
              <span className="text-gray-300">Sem Rede NeonHost</span>
            </div>
          </div>
        </div>
        
        <div className="relative bg-gradient-to-b from-gray-800/30 to-gray-700/40 rounded-lg p-6 border border-gray-600/20" style={{ height: '400px' }}>
          <svg className="w-full h-full" viewBox="0 0 800 300">
            {/* Y-axis labels and grid lines */}
            {Array.from({ length: gridLines + 1 }, (_, i) => {
              const value = yMax - (i * range) / gridLines
              const y = (i * 280) / gridLines + 10
              return (
                <g key={i}>
                  <line
                    x1="40"
                    y1={y}
                    x2="780"
                    y2={y}
                    stroke="rgba(156, 163, 175, 0.3)"
                    strokeWidth="1"
                  />
                  <text
                    x="30"
                    y={y + 5}
                    textAnchor="end"
                    className="text-xs fill-gray-400"
                  >
                    {Math.round(value)}
                  </text>
                </g>
              )
            })}
            
            {/* Chart area background */}
            <rect
              x="40"
              y="10"
              width="740"
              height="280"
              fill="rgba(55, 65, 81, 0.2)"
              rx="4"
            />
            
            {/* Without NeonHost line (gray) */}
            <polyline
              fill="none"
              stroke="#9ca3af"
              strokeWidth="2"
              points={chart.data.withoutNeon.map((value: number, idx: number) => {
                const x = 40 + (idx * 740) / (chart.data.withoutNeon.length - 1)
                const y = 10 + (280 - ((value - yMin) / range) * 280)
                return `${x},${y}`
              }).join(' ')}
            />
            
            {/* With NeonHost line (red) */}
            <polyline
              fill="none"
              stroke="#ef4444"
              strokeWidth="2"
              points={chart.data.withNeon.map((value: number, idx: number) => {
                const x = 40 + (idx * 740) / (chart.data.withNeon.length - 1)
                const y = 10 + (280 - ((value - yMin) / range) * 280)
                return `${x},${y}`
              }).join(' ')}
            />
            
            {/* Data points for Without NeonHost (gray dots) */}
            {chart.data.withoutNeon.map((value: number, idx: number) => {
              const x = 40 + (idx * 740) / (chart.data.withoutNeon.length - 1)
              const y = 10 + (280 - ((value - yMin) / range) * 280)
              return (
                <circle
                  key={`gray-${idx}`}
                  cx={x}
                  cy={y}
                  r="3"
                  fill="#9ca3af"
                  stroke="#374151"
                  strokeWidth="1"
                />
              )
            })}
            
            {/* Data points for With NeonHost (red dots) */}
            {chart.data.withNeon.map((value: number, idx: number) => {
              const x = 40 + (idx * 740) / (chart.data.withNeon.length - 1)
              const y = 10 + (280 - ((value - yMin) / range) * 280)
              return (
                <circle
                  key={`red-${idx}`}
                  cx={x}
                  cy={y}
                  r="3"
                  fill="#ef4444"
                  stroke="#dc2626"
                  strokeWidth="1"
                />
              )
            })}
          </svg>
        </div>
        
        <p className="text-gray-400 text-sm mt-4">{chart.description}</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0a0a0e] text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.08)_1px,transparent_1px)] bg-[size:24px_24px]"
            style={{ maskImage: "linear-gradient(transparent, black, transparent)" }}
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(600px circle at top left, rgba(168, 85, 247, 0.15) 0%, transparent 50%),
              radial-gradient(600px circle at bottom right, rgba(236, 72, 153, 0.15) 0%, transparent 50%)
            `,
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600/20 rounded-full border border-purple-500/30 mb-8">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-purple-300">Infraestrutura Premium</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Infraestrutura de{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Rede Empresarial
              </span>
            </h1>

            <p className="text-lg text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
              500+ Gbps de capacidade de rede com peering direto e rotas globais otimizadas
            </p>

            {/* Infrastructure Stats */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {infrastructureStats.map((stat, index) => (
                <div
                  key={index}
                  className="p-8 bg-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-800/50 hover:border-purple-500/30 transition-all duration-300"
                >
                  <div className={`p-4 bg-gradient-to-r ${stat.color} rounded-2xl w-fit mx-auto mb-6`}>
                    <div className="text-white">{stat.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{stat.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{stat.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Network Performance Metrics */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Métricas de{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Desempenho da Rede
                </span>
              </h2>
              <p className="text-gray-400 max-w-3xl mx-auto">
                Dados em tempo real que comprovam a superioridade da nossa infraestrutura
              </p>
            </div>

            {/* All Charts Displayed Vertically */}
            <div className="space-y-8">
              {chartData.map((chart, index) => renderChart(chart, index))}
            </div>
          </div>
        </section>

        {/* Global Network Presence */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Presença{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Global da Rede
                  </span>
                </h2>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Nossa infraestrutura de rede abrange múltiplas localizações estratégicas, 
                  garantindo conectividade ideal e latência mínima para usuários em todo o 
                  mundo. Através de nossa parceria com a Cloudflare, aproveitamos mais de 500 
                  pontos de presença globalmente.
                </p>

                <div className="space-y-6">
                  {networkFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="p-3 bg-purple-600/20 rounded-lg border border-purple-500/30 flex-shrink-0">
                        <div className="text-purple-400">{feature.icon}</div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-800/50 p-8">
                <h3 className="text-xl font-bold text-white mb-6">Recursos da Rede</h3>
                <div className="space-y-4">
                  {networkResources.map((resource, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{resource}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-lg border border-purple-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Activity className="h-5 w-5 text-purple-400" />
                    <span className="text-sm font-medium text-purple-300">Status da Rede</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-gray-300">Todos os sistemas operacionais</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
