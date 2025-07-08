import { Network, Shield, Server, Zap, Globe, Activity, Cpu, Clock } from "lucide-react"

export default function RedesPage() {
  const infrastructureFeatures = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Latência ultra-baixa de até 2ms",
      description: "Conexão direta com IX.br São Paulo",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Proteção DDoS Always On",
      description: "Mitigação em tempo real sem blackhole",
    },
    {
      icon: <Server className="h-6 w-6" />,
      title: "Backbone Tier 1 Premium",
      description: "Conectividade com carriers globais",
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Garantia de 99,9% de uptime",
      description: "SLA premium para sua operação",
    },
  ]

  const networkPartners = [
    {
      name: "Cirion / Lumen",
      asn: "AS3356",
      icon: <Globe className="h-8 w-8" />,
    },
    {
      name: "Cloudflare",
      asn: "AS13335",
      icon: <Activity className="h-8 w-8" />,
    },
    {
      name: "OpenX",
      asn: "AS263444",
      icon: <Cpu className="h-8 w-8" />,
    },
    {
      name: "Tglobal Networks",
      asn: "AS53427",
      icon: <Network className="h-8 w-8" />,
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Effects - Same as main page */}
      <div className="fixed inset-0 z-0">
        {/* Grid quadriculado */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-[linear-gradient(rgba(118,67,201,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(118,67,201,0.12)_1px,transparent_1px)] bg-[size:24px_24px]"
            style={{ maskImage: "linear-gradient(transparent, black, transparent)" }}
          ></div>
        </div>

        {/* Efeitos de blur coloridos */}
        <div
          className="absolute inset-0"
          style={{
            background: `
            radial-gradient(600px circle at top left, rgba(126, 34, 206, 0.15) 0%, transparent 50%),
            radial-gradient(600px circle at bottom right, rgba(255, 62, 157, 0.15) 0%, transparent 50%)
          `,
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600/20 rounded-full border border-purple-500/30 mb-8">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span className="text-sm text-purple-300">Infraestrutura Premium</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Conectividade de{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              alta performance
            </span>
            <br />
            com{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Neon Host
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
            Revolucionamos a conectividade no Brasil com nossa infraestrutura exclusiva Neon Host™, combinando latência
            ultra-baixa, proteção avançada e tecnologia de ponta.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium px-8 py-3 rounded-lg transition-all duration-300">
              Começar agora
            </button>
            <button className="border border-gray-600 hover:border-purple-500/50 text-white hover:bg-purple-900/20 px-8 py-3 rounded-lg transition-all duration-300">
              Entrar em contato
            </button>
          </div>
        </div>
      </section>

      {/* Infrastructure Features */}
      <section className="py-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {infrastructureFeatures.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-800/50 hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-purple-600/20 rounded-lg">
                    <div className="text-purple-400">{feature.icon}</div>
                  </div>
                </div>
                <h3 className="text-white font-semibold mb-2 text-sm">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Information */}
      <section className="py-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Informações sobre nossa{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Infraestrutura
              </span>
            </h2>
            <p className="text-gray-400 max-w-4xl mx-auto">
              Conectados ao IX.br São Paulo e carriers Tier 1, oferecemos baixa latência, rotas otimizadas e proteção
              DDoS Always On para garantir a performance e segurança que sua operação precisa.
            </p>
          </div>

          {/* Three main features */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-left p-6 bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-700/60 hover:border-purple-500/50 transition-all duration-300">
              <div className="p-3 bg-purple-600/20 rounded-lg w-fit mb-4 border border-purple-500/30">
                <Network className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Rede de Alta Performance</h3>
              <p className="text-gray-400 leading-relaxed">
                Conexão direta com o IX.br São Paulo e principais pontos de troca de tráfego nacionais, além de peering
                com provedores, clouds e CDNs. Baixa latência e máxima estabilidade para sua operação.
              </p>
            </div>

            <div className="text-left p-6 bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-700/60 hover:border-purple-500/50 transition-all duration-300">
              <div className="p-3 bg-purple-600/20 rounded-lg w-fit mb-4 border border-purple-500/30">
                <Shield className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Proteção Avançada</h3>
              <p className="text-gray-400 leading-relaxed">
                Sistema Anti-DDoS Always On, sem blackhole ou null route. Monitoramento constante do tráfego e
                certificações de segurança que seguem as melhores práticas da Internet.
              </p>
            </div>

            <div className="text-left p-6 bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-700/60 hover:border-purple-500/50 transition-all duration-300">
              <div className="p-3 bg-purple-600/20 rounded-lg w-fit mb-4 border border-purple-500/30">
                <Server className="h-8 w-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Infraestrutura Confiável</h3>
              <p className="text-gray-400 leading-relaxed">
                Certificações de boas práticas para a segurança da Internet. Datacenters premium com redundância total e
                monitoramento 24/7.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upstreams and Peerings */}
      <section className="py-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-white">Upstreams e Peerings</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {networkPartners.map((partner, index) => (
              <div
                key={index}
                className="text-left p-6 bg-gray-900/30 backdrop-blur-sm rounded-xl border border-gray-700/60 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="p-3 bg-purple-600/20 rounded-lg w-fit mb-3 border border-purple-500/30">
                  <div className="text-purple-400">{partner.icon}</div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{partner.name}</h3>
                <p className="text-gray-400 text-sm">{partner.asn}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="py-16 px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            Seu sonho, nossa{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">missão!</span>
          </h2>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium px-8 py-3 rounded-lg transition-all duration-300">
            Contratar Agora
          </button>
        </div>
      </section>
    </div>
  )
}
