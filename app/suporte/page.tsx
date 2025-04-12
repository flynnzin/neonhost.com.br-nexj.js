import Image from "next/image"
import Link from "next/link"
import { Search, DollarSign, Server, Globe, Gamepad2, Database, Shield, Cloud, HelpCircle } from "lucide-react"

export default function SupportCenter() {
  // Categorias de tutoriais
  const categories = [
    {
      id: "financeiro",
      title: "Financeiro",
      icon: <DollarSign className="h-12 w-12 text-pink-500" />,
      description: "Informações importantes sobre nosso setor comercial e pagamentos.",
      author: "Equipe Neonhost",
      articles: 4,
    },
    {
      id: "servidor-vps",
      title: "Servidor VPS",
      icon: <Server className="h-12 w-12 text-pink-500" />,
      description: "Informações e dicas sobre servidores VPS e Cloud.",
      author: "Equipe Neonhost",
      articles: 12,
    },
    {
      id: "painel-jogos",
      title: "Painel de Jogos",
      icon: <Gamepad2 className="h-12 w-12 text-pink-500" />,
      description: "Ajuda para acessar seus arquivos e gerenciar melhor sua conta.",
      author: "Equipe Neonhost",
      articles: 7,
    },
    {
      id: "hospedagem-minecraft",
      title: "Hospedagem de Minecraft",
      icon: <Globe className="h-12 w-12 text-pink-500" />,
      description: "Crie o servidor de minecraft do seu jeito.",
      author: "Equipe Neonhost",
      articles: 42,
    },
    {
      id: "hospedagem-fivem",
      title: "Hospedagem de FiveM",
      icon: <Globe className="h-12 w-12 text-pink-500" />,
      description: "Configurações e tutoriais relacionados a FiveM.",
      author: "Equipe Neonhost",
      articles: 19,
    },
    {
      id: "hospedagem-palworld",
      title: "Hospedagem de Palworld",
      icon: <Globe className="h-12 w-12 text-pink-500" />,
      description: "Tutoriais e dicas sobre o jogo Palworld.",
      author: "Equipe Neonhost",
      articles: 33,
    },
    {
      id: "banco-dados",
      title: "Banco de Dados",
      icon: <Database className="h-12 w-12 text-pink-500" />,
      description: "Tutoriais sobre MySQL, MongoDB e outros bancos de dados.",
      author: "Equipe Neonhost",
      articles: 8,
    },
    {
      id: "protecao",
      title: "Proteção e Segurança",
      icon: <Shield className="h-12 w-12 text-pink-500" />,
      description: "Dicas e configurações para proteger seu servidor.",
      author: "Equipe Neonhost",
      articles: 15,
    },
    {
      id: "dominios",
      title: "Domínios e DNS",
      icon: <Cloud className="h-12 w-12 text-pink-500" />,
      description: "Como configurar domínios e DNS para seus serviços.",
      author: "Equipe Neonhost",
      articles: 10,
    },
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0e]">
      {/* Header com gradiente - ajustado para ficar abaixo do navbar */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 py-16 pt-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Central de Suporte da Neonhost</h1>
          <h2 className="text-xl md:text-2xl font-medium text-white/90 mb-8">Suporte e respostas da equipe Neonhost</h2>

          {/* Barra de pesquisa */}
          <div className="max-w-2xl mx-auto relative">
            <form action="/suporte/pesquisa" method="GET" className="relative">
              <input
                type="text"
                name="q"
                placeholder="Pesquisar artigos..."
                className="w-full py-3 px-4 pl-12 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 h-5 w-5" />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-pink-500 hover:bg-pink-600 text-white px-4 py-1 rounded-md text-sm transition-colors"
              >
                Buscar
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="container mx-auto px-4 py-12">
        {/* Grade de categorias */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              href={`/suporte/${category.id}`}
              key={category.id}
              className="bg-[#1a1a24] border border-gray-800 rounded-xl p-6 transition-all hover:border-pink-500/50 hover:bg-[#1e1e2a] group"
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">{category.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-400 mb-6 flex-grow">{category.description}</p>
                <div className="flex items-center mt-auto">
                  <div className="flex items-center">
                    <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-sm font-medium mr-3">
                      N
                    </div>
                    <div className="text-sm text-gray-400">
                      <span>{category.author}</span>
                      <div className="flex items-center">
                        <span className="text-pink-500 font-medium">{category.articles} artigos</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Seção de ajuda adicional */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pink-500/20 mb-4">
            <HelpCircle className="h-8 w-8 text-pink-500" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Não encontrou o que procurava?</h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            Nossa equipe de suporte está disponível 24/7 para ajudar com qualquer dúvida que você possa ter.
          </p>
          <Link
            href="/contato"
            className="inline-flex items-center bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-6 rounded-lg transition-colors"
          >
            Fale Conosco
          </Link>
        </div>
      </div>
    </div>
  )
}
