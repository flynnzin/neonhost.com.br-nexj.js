import { Check, Zap, Shield, Headphones } from "lucide-react"

export function ServerHosting() {
  return (
    <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/20 rounded-2xl p-8 md:p-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-3xl font-bold text-white mb-4">Hospedagem Premium para Jogos</h3>
          <p className="text-gray-400 mb-6 text-lg">
            Servidores otimizados com hardware de última geração, proteção anti-DDoS e suporte especializado 24/7.
          </p>

          <div className="space-y-3 mb-8">
            {[
              "Processadores AMD Ryzen de alta performance",
              "Armazenamento NVMe ultra-rápido",
              "Proteção anti-DDoS avançada",
              "Suporte técnico especializado 24/7",
              "Painel de controle intuitivo",
              "Backup automático diário",
            ].map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-400" />
                <span className="text-gray-300">{feature}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300">
              Ver todos os planos
            </button>
            <button className="border border-white/20 hover:border-purple-500/50 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300">
              Falar com suporte
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {[
            {
              icon: <Zap className="w-6 h-6" />,
              title: "Performance Extrema",
              description: "Hardware dedicado para máxima performance",
            },
            {
              icon: <Shield className="w-6 h-6" />,
              title: "Proteção Total",
              description: "Anti-DDoS avançado e monitoramento 24/7",
            },
            {
              icon: <Headphones className="w-6 h-6" />,
              title: "Suporte Especializado",
              description: "Equipe técnica especializada em jogos",
            },
          ].map((item, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="text-purple-400">{item.icon}</div>
                <h4 className="text-white font-semibold">{item.title}</h4>
              </div>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
