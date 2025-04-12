import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Search, Clock, User, ArrowRight, HelpCircle } from "lucide-react"

// Simulação de dados de artigos para cada categoria
const articlesByCategory = {
  financeiro: [
    {
      id: 1,
      title: "Como realizar pagamentos",
      description: "Guia completo sobre métodos de pagamento aceitos.",
      date: "10/04/2024",
      readTime: "5 min",
    },
    {
      id: 2,
      title: "Política de reembolso",
      description: "Informações sobre nossa política de reembolso e cancelamentos.",
      date: "05/04/2024",
      readTime: "7 min",
    },
    {
      id: 3,
      title: "Cupons de desconto",
      description: "Como utilizar cupons de desconto em suas compras.",
      date: "01/04/2024",
      readTime: "3 min",
    },
    {
      id: 4,
      title: "Faturas e notas fiscais",
      description: "Como acessar e baixar suas faturas e notas fiscais.",
      date: "25/03/2024",
      readTime: "4 min",
    },
  ],
  "servidor-vps": [
    {
      id: 1,
      title: "Como acessar seu VPS via SSH",
      description: "Guia passo a passo para acessar seu servidor VPS via SSH.",
      date: "12/04/2024",
      readTime: "8 min",
    },
    {
      id: 2,
      title: "Configurando Firewall",
      description: "Aprenda a configurar o firewall do seu servidor para maior segurança.",
      date: "10/04/2024",
      readTime: "12 min",
    },
    {
      id: 3,
      title: "Instalando painel de controle",
      description: "Como instalar painéis de controle como cPanel ou Plesk.",
      date: "05/04/2024",
      readTime: "15 min",
    },
    // Mais artigos...
  ],
  "painel-jogos": [
    {
      id: 1,
      title: "Navegando pelo painel de jogos",
      description: "Conheça todas as funcionalidades do painel de jogos da Neonhost.",
      date: "15/04/2024",
      readTime: "6 min",
    },
    {
      id: 2,
      title: "Gerenciando arquivos do servidor",
      description: "Como fazer upload, download e editar arquivos do seu servidor de jogos.",
      date: "12/04/2024",
      readTime: "9 min",
    },
    {
      id: 3,
      title: "Configurando backups automáticos",
      description: "Proteja seus dados configurando backups automáticos.",
      date: "08/04/2024",
      readTime: "7 min",
    },
    // Mais artigos...
  ],
  "hospedagem-minecraft": [
    {
      id: 1,
      title: "Instalando plugins no servidor Minecraft",
      description: "Guia completo para instalar e configurar plugins no seu servidor.",
      date: "18/04/2024",
      readTime: "10 min",
    },
    {
      id: 2,
      title: "Configurando whitelist",
      description: "Como configurar whitelist para controlar quem pode entrar no seu servidor.",
      date: "15/04/2024",
      readTime: "5 min",
    },
    {
      id: 3,
      title: "Otimizando performance do servidor",
      description: "Dicas para melhorar a performance do seu servidor Minecraft.",
      date: "12/04/2024",
      readTime: "14 min",
    },
    // Mais artigos...
  ],
  // Outras categorias...
}

// Mapeamento de títulos de categorias
const categoryTitles = {
  financeiro: "Financeiro",
  "servidor-vps": "Servidor VPS",
  "painel-jogos": "Painel de Jogos",
  "hospedagem-minecraft": "Hospedagem de Minecraft",
  "hospedagem-fivem": "Hospedagem de FiveM",
  "hospedagem-palworld": "Hospedagem de Palworld",
  "banco-dados": "Banco de Dados",
  protecao: "Proteção e Segurança",
  dominios: "Domínios e DNS",
}

// Mapeamento de ícones de categorias (usando componentes Lucide)
const categoryIcons = {
  financeiro: "DollarSign",
  "servidor-vps": "Server",
  "painel-jogos": "Gamepad2",
  "hospedagem-minecraft": "Globe",
  "hospedagem-fivem": "Globe",
  "hospedagem-palworld": "Globe",
  "banco-dados": "Database",
  protecao: "Shield",
  dominios: "Cloud",
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const { category } = params
  const articles = articlesByCategory[category as keyof typeof articlesByCategory] || []
  const categoryTitle = categoryTitles[category as keyof typeof categoryTitles] || "Categoria"

  return (
    <div className="min-h-screen bg-[#0a0a0e]">
      {/* Header com gradiente - ajustado para ficar abaixo do navbar */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 py-12 pt-24">
        <div className="container mx-auto px-4">
          <Link
            href="/suporte"
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Voltar para Central de Suporte
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{categoryTitle}</h1>

          {/* Barra de pesquisa */}
          <div className="max-w-xl relative">
            <form action="/suporte/pesquisa" method="GET" className="relative">
              <input
                type="text"
                name="q"
                placeholder={`Pesquisar em ${categoryTitle}...`}
                className="w-full py-3 px-4 pl-12 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <input type="hidden" name="category" value={category} />
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
        {/* Lista de artigos */}
        <div className="grid grid-cols-1 gap-6">
          {articles.length > 0 ? (
            articles.map((article) => (
              <Link
                href={`/suporte/${category}/${article.id}`}
                key={article.id}
                className="bg-[#1a1a24] border border-gray-800 rounded-xl p-6 transition-all hover:border-pink-500/50 hover:bg-[#1e1e2a] group"
              >
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-400 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-400 mb-4 md:mb-0">{article.description}</p>
                  </div>
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:ml-6">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{article.readTime}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="h-4 w-4 mr-1" />
                      <span>Equipe Neonhost</span>
                    </div>
                    <div className="bg-pink-500/10 text-pink-500 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-800 mb-4">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Nenhum artigo encontrado</h3>
              <p className="text-gray-400 max-w-md mx-auto">
                Não encontramos artigos nesta categoria. Por favor, tente outra categoria ou entre em contato com nosso
                suporte.
              </p>
            </div>
          )}
        </div>

        {/* Seção de ajuda adicional */}
        <div className="mt-16 p-6 bg-[#1a1a24] border border-gray-800 rounded-xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-6">
              <div className="w-16 h-16 rounded-full bg-pink-500/20 flex items-center justify-center">
                <HelpCircle className="h-8 w-8 text-pink-500" />
              </div>
            </div>
            <div className="flex-grow text-center md:text-left">
              <h3 className="text-xl font-bold text-white mb-2">Precisa de mais ajuda?</h3>
              <p className="text-gray-400 mb-4">
                Se você não encontrou a resposta que procurava, nossa equipe de suporte está pronta para ajudar.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Link
                href="/contato"
                className="inline-flex items-center bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-6 rounded-lg transition-colors"
              >
                Fale Conosco
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
