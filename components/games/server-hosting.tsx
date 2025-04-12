import { Server, Shield, Zap, Clock, Cpu, Users } from "lucide-react"
import Link from "next/link"

const features = [
  {
    icon: <Cpu className="w-5 h-5" />,
    title: "Processadores de Alta Performance",
    description: "Servidores equipados com os mais recentes processadores AMD Ryzen para desempenho máximo.",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Proteção Anti-DDoS",
    description: "Sistema avançado de proteção contra ataques DDoS para manter seu servidor sempre online.",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Instalação Instantânea",
    description: "Configure seu servidor em minutos com nossa interface intuitiva e sistemas automatizados.",
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "Uptime de 99.9%",
    description: "Garantimos disponibilidade máxima para seu servidor com nossa infraestrutura redundante.",
  },
  {
    icon: <Server className="w-5 h-5" />,
    title: "Painel de Controle Avançado",
    description: "Gerencie seu servidor com facilidade através do nosso painel de controle intuitivo.",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Suporte 24/7",
    description: "Nossa equipe de suporte está disponível 24 horas por dia, 7 dias por semana.",
  },
]

// Configuração dos planos com URLs específicas para cada um
const plans = [
  {
    name: "Básico",
    ram: "2GB",
    price: 13.9,
    features: ["Suporte a Vanilla", "Painel de Controle", "Backups Diários", "Até 20 Jogadores"],
    url: "https://app.neonhost.com.br/plano-basico", // URL específica para o plano básico
  },
  {
    name: "Avançado",
    ram: "4GB",
    price: 33.9,
    features: ["Suporte a Mods", "Plugins Ilimitados", "Backups Automáticos", "Até 50 Jogadores"],
    url: "https://app.neonhost.com.br/plano-avancado", // URL específica para o plano avançado
  },
  {
    name: "Premium",
    ram: "8GB",
    price: 49.9,
    features: ["Suporte a Modpacks", "Domínio Personalizado", "Proteção Anti-DDoS", "Até 100 Jogadores"],
    url: "https://app.neonhost.com.br/plano-premium", // URL específica para o plano premium
  },
]

export function ServerHosting() {
  return (
    <section className="py-16 mt-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Hospedagem de Servidores</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-orange-500 mx-auto rounded-full"></div>
        <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
          Crie seu próprio servidor de jogo com nossa infraestrutura de alta performance e recursos exclusivos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-zinc-900/50 rounded-lg border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 overflow-hidden flex flex-col"
          >
            <div className="p-6 border-b border-purple-500/10 text-center">
              <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
              <p className="text-zinc-400 text-sm mb-4">{plan.ram} RAM</p>
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400 mb-1">
                R$ {plan.price.toFixed(2).replace(".", ",")}
              </div>
              <p className="text-zinc-500 text-sm">por mês</p>
            </div>

            <div className="p-6 flex-1">
              <ul className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-zinc-300">
                    <div className="w-5 h-5 mr-3 text-purple-400">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 mt-auto">
              <Link
                href={plan.url}
                className="w-full bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white py-3 rounded-md font-medium transition-colors inline-block text-center"
              >
                Contratar Agora
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-zinc-900/50 rounded-lg border border-purple-500/10 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex">
              <div className="w-10 h-10 mr-4 flex-shrink-0 rounded-lg bg-gradient-to-br from-purple-500/10 to-orange-500/10 flex items-center justify-center text-purple-400">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">{feature.title}</h3>
                <p className="text-zinc-400 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
