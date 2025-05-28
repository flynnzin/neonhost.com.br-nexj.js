import Link from "next/link"
import { ArrowLeft, Calendar, MessageCircle, Mail, Gamepad2 } from "lucide-react"

interface MaintenancePageProps {
  title?: string
  subtitle?: string
  description?: string
  showBackButton?: boolean
  backUrl?: string
}

export function MaintenancePage({
  title = "Em Breve",
  subtitle = "Estamos preparando algo incrível para você!",
  description = "Nossa seção de jogos está sendo finalizada com muito carinho. Em breve você terá acesso aos melhores servidores de hospedagem para seus jogos favoritos.",
  showBackButton = true,
  backUrl = "/",
}: MaintenancePageProps) {
  return (
    <div className="min-h-screen bg-[#0A0C10] flex items-center justify-center px-4">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30 mb-8">
          <Gamepad2 className="w-12 h-12 text-purple-400" />
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">{title}</h1>

        {/* Subtitle */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          {subtitle}
        </h2>

        {/* Description */}
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">{description}</p>

        {/* Features Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Gamepad2 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">50+ Jogos</h3>
            <p className="text-gray-400 text-sm">Minecraft, FiveM, Rust, Palworld e muito mais</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Lançamento 2025</h3>
            <p className="text-gray-400 text-sm">Aguarde novidades em breve</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Suporte 24/7</h3>
            <p className="text-gray-400 text-sm">Equipe especializada sempre disponível</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="https://discord.gg/neonhost"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            Entrar no Discord
          </Link>

          <Link
            href="mailto:suporte@neonhost.com.br"
            className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-xl font-medium transition-colors border border-white/10 flex items-center justify-center gap-2"
          >
            <Mail className="w-5 h-5" />
            Falar com Suporte
          </Link>
        </div>

        {/* Back Button */}
        {showBackButton && (
          <Link
            href={backUrl}
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao início
          </Link>
        )}

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-white mb-4">Seja o primeiro a saber!</h3>
          <p className="text-gray-400 mb-6">
            Cadastre-se para receber notificações quando nossa seção de jogos estiver disponível.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
            />
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105">
              Notificar-me
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
