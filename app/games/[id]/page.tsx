"use client"

import { maintenanceConfig } from "@/config/maintenance"
import { MaintenancePage } from "@/components/maintenance-page"
import Image from "next/image"
import Link from "next/link"
import { Star, Users, Shield, Gamepad2, Heart, Share2, ChevronDown } from "lucide-react"
import { useState } from "react"

interface GamePageProps {
  params: {
    id: string
  }
}

export default function GamePage({ params }: GamePageProps) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [isFavorited, setIsFavorited] = useState(false)

  const gameData = getGameData(params.id)

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      // Aqui você pode adicionar um toast de sucesso
    } catch (err) {
      console.error("Erro ao copiar URL:", err)
    }
  }

  // Verifica se está em manutenção
  if (maintenanceConfig.isGamesUnderMaintenance) {
    return (
      <MaintenancePage
        title="Jogo em Breve"
        subtitle={`${params.id.charAt(0).toUpperCase() + params.id.slice(1)} estará disponível em breve!`}
        description="Estamos finalizando a configuração deste jogo para oferecer a melhor experiência de hospedagem para você."
        showBackButton={true}
        backUrl="/games"
      />
    )
  }

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
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0C10]/50 to-[#0A0C10]" />
        <div className="relative container mx-auto px-4 pt-24 pb-16">
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
            <span className="text-white">{gameData.name}</span>
          </nav>

          {/* Game Header */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-2">
              {/* Game Title & Info */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden border border-white/10">
                    <Image
                      src={gameData.logo || "/placeholder.svg"}
                      alt={gameData.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h1 className="text-4xl font-bold mb-2">{gameData.name}</h1>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span>por {gameData.developer}</span>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span>4.8</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>2.4k online</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsFavorited(!isFavorited)}
                    className={`flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors ${
                      isFavorited ? "text-red-400" : ""
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${isFavorited ? "fill-red-400" : ""}`} />
                    <span>{isFavorited ? "Favoritado" : "Favoritar"}</span>
                  </button>
                  <button
                    onClick={copyToClipboard}
                    className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <Share2 className="w-4 h-4" />
                    <span>Copiar URL</span>
                  </button>
                </div>
              </div>

              {/* Featured Image */}
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-8 group">
                <Image
                  src={gameData.featuredImage || "/placeholder.svg"}
                  alt={gameData.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h2 className="text-2xl font-bold mb-2">Hospedagem Premium</h2>
                  <p className="text-gray-300">Servidores otimizados para {gameData.name}</p>
                </div>
              </div>

              {/* Navigation Tabs */}
              <div className="flex border-b border-white/10 mb-8">
                <Link
                  href={`/games/${params.id}`}
                  className="px-6 py-3 border-b-2 border-purple-500 text-purple-400 font-medium"
                >
                  Visão Geral
                </Link>
                <Link
                  href={`/games/${params.id}/planos`}
                  className="px-6 py-3 text-gray-400 hover:text-white transition-colors"
                >
                  Planos
                </Link>
                <Link
                  href={`/games/${params.id}/perguntas`}
                  className="px-6 py-3 text-gray-400 hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </div>

              {/* Description */}
              <div className="mb-8">
                <p className="text-gray-300 leading-relaxed">{gameData.description}</p>
              </div>

              {/* Features Grid */}
              <div className="mb-12">
                <h3 className="text-xl font-bold mb-6">Recursos Disponíveis</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {gameData.systems.map((system, index) => (
                    <div
                      key={index}
                      className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Gamepad2 className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-semibold mb-2">{system.name}</h4>
                      <p className="text-sm text-gray-400">Suporte completo para {system.name.toLowerCase()}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Platform Info */}
              <div className="mb-12">
                <h3 className="text-xl font-bold mb-6">Informações Técnicas</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {gameData.info.map((info, index) => (
                    <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-6">
                      <div className="flex items-center gap-3">
                        <Shield className="w-5 h-5 text-purple-400" />
                        <span className="font-medium">{info.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reviews Section */}
              <div className="mb-12">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold">Avaliações dos Clientes</h3>
                  <Link href="#" className="text-purple-400 hover:text-purple-300 text-sm">
                    Ver todas →
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {gameData.ratings.map((rating, index) => (
                    <div key={index} className="text-center">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-full border-4 border-purple-500 flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                        <span className="text-2xl font-bold">{rating.score}</span>
                      </div>
                      <p className="text-sm text-gray-400">{rating.platform}</p>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {gameData.testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-6">
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <h4 className="font-semibold mb-2">{testimonial.title}</h4>
                      <p className="text-sm text-gray-400 mb-3">por {testimonial.author}</p>
                      <p className="text-sm text-gray-300">{testimonial.content}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ Section */}
              <div>
                <h3 className="text-2xl font-bold mb-6">Perguntas Frequentes</h3>
                <div className="space-y-4">
                  {gameData.faq.slice(0, 3).map((item, index) => (
                    <div key={index} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                      <button
                        onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                        className="flex items-center justify-between w-full p-6 text-left hover:bg-white/5 transition-colors"
                      >
                        <span className="font-medium">{item.question}</span>
                        <ChevronDown
                          className={`w-5 h-5 text-gray-400 transition-transform ${
                            expandedFaq === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {expandedFaq === index && (
                        <div className="px-6 pb-6">
                          <p className="text-gray-300">{item.answer}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Link
                    href={`/games/${params.id}/perguntas`}
                    className="text-purple-400 hover:text-purple-300 font-medium"
                  >
                    Ver todas as perguntas →
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                {/* Pricing Card */}
                <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden mb-6">
                  {/* Price Header */}
                  <div className="p-6 border-b border-white/10">
                    <div className="text-center mb-4">
                      <div className="inline-flex items-center gap-2 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                        <span>-{gameData.discount}%</span>
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm text-gray-400 line-through">
                          R$ {gameData.originalPrice.toFixed(2).replace(".", ",")}
                        </div>
                        <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                          R$ {gameData.price.toFixed(2).replace(".", ",")}
                        </div>
                        <div className="text-sm text-gray-400">por mês</div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="p-6 space-y-3">
                    <Link
                      href={`/games/${params.id}/planos`}
                      className="block w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 rounded-xl font-medium text-center transition-all duration-300 hover:scale-105"
                    >
                      Ver Planos
                    </Link>
                    <Link
                      href={gameData.ComunityPaln || "#"}
                      className="block w-full bg-white/10 hover:bg-white/20 text-white py-3 rounded-xl font-medium text-center transition-colors border border-white/10"
                    >
                      Comunidade
                    </Link>
                    <Link
                      href={gameData.VpsPlan || "#"}
                      className="block w-full bg-white/10 hover:bg-white/20 text-white py-3 rounded-xl font-medium text-center transition-colors border border-white/10"
                    >
                      VPS Dedicado
                    </Link>
                  </div>
                </div>

                {/* Game Details */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h4 className="font-bold mb-4">Detalhes do Jogo</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Desenvolvedor:</span>
                      <span className="font-medium">{gameData.developer}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Plataformas:</span>
                      <span className="font-medium">{gameData.platforms.join(", ")}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Processador:</span>
                      <span className="font-medium">AMD Ryzen</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Mods:</span>
                      <span className="font-medium text-green-400">Permitido</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Reembolso:</span>
                      <span className="font-medium">7 dias</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="border-t border-white/10 bg-white/5">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Pronto para começar?</h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Oferecemos uma ampla gama de planos para atender a diversos tipos de projetos, desde hospedagem de
              servidores até soluções VPS completas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={`/games/${params.id}/planos`}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105"
              >
                Ver Todos os Planos
              </Link>
              <Link
                href="/contato"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-xl font-medium transition-colors border border-white/10"
              >
                Falar com Suporte
              </Link>
            </div>
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
      logo: "/games/page/mine.jpg",
      featuredImage: "/games/page/mine.jpg",
      VpsPlan: "/vps-gamer",
      ComunityPaln: "https://discord.gg/neonhost",
      description:
        "Na NeonHost, oferecemos servidores populares como Vanilla, Forge, Mohist, Paper e Bedrock Edition, além de modpacks como Pixelmon, SkyFactory e RLCraft. Nossos servidores são otimizados para oferecer a melhor experiência de jogo possível.",
      originalPrice: 20.9,
      price: 13.9,
      discount: 35,
      developer: "Mojang Studios",
      platforms: ["PC", "Xbox", "PlayStation", "Switch"],
      systems: [
        { name: "Mods e Plugins" },
        { name: "Modpacks" },
        { name: "Atualização automática" },
        { name: "Backup automático" },
        { name: "Painel de controle" },
        { name: "FTP/SFTP" },
      ],
      info: [
        { name: "Proteção DDoS" },
        { name: "São Paulo" },
        { name: "Multiplataforma" },
        { name: "SSD NVMe" },
        { name: "AMD Ryzen" },
        { name: "Suporte 24/7" },
      ],
      ratings: [
        { platform: "Google", score: "100%" },
        { platform: "Trustpilot", score: "100%" },
        { platform: "Discord", score: "100%" },
      ],
      testimonials: [
        {
          title: "NeonHost é incrível",
          author: "Humberto Junior",
          content:
            "A neonhost é incrível, custo benefício e um belo suporte, tanto pra colocar mods e essas coisas, recomendo e irei utilizar muito",
        },
        {
          title: "Uso e recomendo",
          author: "Alexandre Denardi",
          content:
            "Já uso a empresa para hospedar servidores a anos GTA RP, servidores Linux, hoje estou até mesmo com meu banco de dados hospedado, sem quedas e SLA perfeito.",
        },
        {
          title: "Excelente suporte",
          author: "Tomas",
          content:
            "NeonHost com suporte e jogos top para jogar, já contratei outros, mas esse servidor está muito bom e com equipamentos muito bons também.",
        },
      ],
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
      ],
    },
    palworld: {
      id: "palworld",
      name: "Palworld",
      logo: "/games/page/pal.png",
      featuredImage: "/games/page/pal.png",
      VpsPlan: "/vps-gamer",
      ComunityPaln: "https://discord.gg/neonhost",
      description:
        "Hospede seu próprio servidor de Palworld com a NeonHost. Capture, colecione e batalhe com criaturas em um mundo aberto cheio de aventuras e desafios.",
      originalPrice: 120.0,
      price: 79.9,
      discount: 34,
      developer: "Pocketpair",
      platforms: ["PC", "Xbox"],
      systems: [{ name: "Mods e Plugins" }, { name: "Configuração Personalizada" }, { name: "Atualização automática" }],
      info: [{ name: "Proteção DDoS" }, { name: "São Paulo" }, { name: "Multiplataforma" }],
      ratings: [
        { platform: "Google", score: "100%" },
        { platform: "Trustpilot", score: "100%" },
        { platform: "Discord", score: "100%" },
      ],
      testimonials: [
        {
          title: "Servidor estável",
          author: "Ricardo Almeida",
          content:
            "Servidor de Palworld muito estável, sem quedas e com ótimo desempenho mesmo com muitos jogadores online.",
        },
        {
          title: "Suporte excelente",
          author: "Mariana Costa",
          content:
            "O suporte da NeonHost é excelente, me ajudaram a configurar mods no meu servidor de Palworld rapidamente.",
        },
        {
          title: "Recomendo demais",
          author: "Felipe Santos",
          content: "Melhor hospedagem para Palworld, preço justo e servidor com ótimo desempenho. Recomendo demais!",
        },
      ],
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
      ],
    },
    // Adicione outros jogos seguindo o mesmo padrão...
  }

  return games[id as keyof typeof games] || games.minecraft
}
