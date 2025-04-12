"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Search, Clock, User, ArrowRight, HelpCircle } from "lucide-react"
import { useSearchParams } from "next/navigation"

// Simulação de dados de artigos para pesquisa
const allArticles = [
  {
    id: 1,
    title: "Como realizar pagamentos",
    description: "Guia completo sobre métodos de pagamento aceitos.",
    date: "10/04/2024",
    readTime: "5 min",
    category: "financeiro",
    categoryTitle: "Financeiro",
  },
  {
    id: 2,
    title: "Política de reembolso",
    description: "Informações sobre nossa política de reembolso e cancelamentos.",
    date: "05/04/2024",
    readTime: "7 min",
    category: "financeiro",
    categoryTitle: "Financeiro",
  },
  {
    id: 3,
    title: "Cupons de desconto",
    description: "Como utilizar cupons de desconto em suas compras.",
    date: "01/04/2024",
    readTime: "3 min",
    category: "financeiro",
    categoryTitle: "Financeiro",
  },
  {
    id: 4,
    title: "Faturas e notas fiscais",
    description: "Como acessar e baixar suas faturas e notas fiscais.",
    date: "25/03/2024",
    readTime: "4 min",
    category: "financeiro",
    categoryTitle: "Financeiro",
  },
  {
    id: 1,
    title: "Como acessar seu VPS via SSH",
    description: "Guia passo a passo para acessar seu servidor VPS via SSH.",
    date: "12/04/2024",
    readTime: "8 min",
    category: "servidor-vps",
    categoryTitle: "Servidor VPS",
  },
  {
    id: 2,
    title: "Configurando Firewall",
    description: "Aprenda a configurar o firewall do seu servidor para maior segurança.",
    date: "10/04/2024",
    readTime: "12 min",
    category: "servidor-vps",
    categoryTitle: "Servidor VPS",
  },
  {
    id: 1,
    title: "Navegando pelo painel de jogos",
    description: "Conheça todas as funcionalidades do painel de jogos da Neonhost.",
    date: "15/04/2024",
    readTime: "6 min",
    category: "painel-jogos",
    categoryTitle: "Painel de Jogos",
  },
  {
    id: 1,
    title: "Instalando plugins no servidor Minecraft",
    description: "Guia completo para instalar e configurar plugins no seu servidor.",
    date: "18/04/2024",
    readTime: "10 min",
    category: "hospedagem-minecraft",
    categoryTitle: "Hospedagem de Minecraft",
  },
  {
    id: 2,
    title: "Configurando whitelist",
    description: "Como configurar whitelist para controlar quem pode entrar no seu servidor.",
    date: "15/04/2024",
    readTime: "5 min",
    category: "hospedagem-minecraft",
    categoryTitle: "Hospedagem de Minecraft",
  },
  {
    id: 1,
    title: "Configurando seu servidor FiveM",
    description: "Guia completo para configurar seu servidor FiveM.",
    date: "20/04/2024",
    readTime: "15 min",
    category: "hospedagem-fivem",
    categoryTitle: "Hospedagem de FiveM",
  },
  {
    id: 1,
    title: "Configurando seu servidor Palworld",
    description: "Guia completo para configurar seu servidor Palworld.",
    date: "22/04/2024",
    readTime: "12 min",
    category: "hospedagem-palworld",
    categoryTitle: "Hospedagem de Palworld",
  },
]

export default function SearchPage() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""
  const categoryFilter = searchParams.get("category") || ""
  const [searchResults, setSearchResults] = useState<typeof allArticles>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simular uma pesquisa com um pequeno delay para mostrar o estado de carregamento
    setIsLoading(true)
    const timer = setTimeout(() => {
      // Se a consulta estiver vazia, mostrar todos os artigos
      if (!query) {
        // Se tiver um filtro de categoria, mostrar apenas os artigos dessa categoria
        if (categoryFilter) {
          setSearchResults(allArticles.filter((article) => article.category === categoryFilter))
        } else {
          // Caso contrário, mostrar todos os artigos
          setSearchResults(allArticles)
        }
        setIsLoading(false)
        return
      }

      // Filtrar artigos com base na consulta e categoria (se especificada)
      const filteredArticles = allArticles.filter((article) => {
        const matchesQuery =
          article.title.toLowerCase().includes(query.toLowerCase()) ||
          article.description.toLowerCase().includes(query.toLowerCase())

        const matchesCategory = categoryFilter ? article.category === categoryFilter : true

        return matchesQuery && matchesCategory
      })

      setSearchResults(filteredArticles)
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [query, categoryFilter])

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

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {query ? "Resultados da pesquisa" : "Todos os artigos"}
          </h1>

          {/* Barra de pesquisa */}
          <div className="max-w-xl relative">
            <form action="/suporte/pesquisa" method="GET" className="relative">
              <input
                type="text"
                name="q"
                defaultValue={query}
                placeholder="Pesquisar artigos..."
                className="w-full py-3 px-4 pl-12 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              {categoryFilter && <input type="hidden" name="category" value={categoryFilter} />}
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 h-5 w-5" />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-pink-500 hover:bg-pink-600 text-white px-4 py-1 rounded-md text-sm transition-colors"
              >
                Buscar
              </button>
            </form>
          </div>

          {categoryFilter && (
            <div className="mt-4 text-white/80">
              <span>
                Filtrando por:{" "}
                <span className="bg-white/20 px-2 py-1 rounded text-white">
                  {allArticles.find((a) => a.category === categoryFilter)?.categoryTitle || categoryFilter}
                </span>{" "}
                <Link href={`/suporte/pesquisa?q=${query}`} className="text-pink-300 hover:text-pink-200 ml-2">
                  Remover filtro
                </Link>
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="container mx-auto px-4 py-12">
        {/* Resultados da pesquisa */}
        <div className="mb-6">
          <h2 className="text-xl font-bold text-white mb-4">
            {isLoading
              ? "Buscando..."
              : query
                ? searchResults.length > 0
                  ? `Encontrados ${searchResults.length} resultados para "${query}"`
                  : `Nenhum resultado encontrado para "${query}"`
                : categoryFilter
                  ? `Mostrando todos os artigos em ${allArticles.find((a) => a.category === categoryFilter)?.categoryTitle || categoryFilter}`
                  : "Mostrando todos os artigos"}
          </h2>
        </div>

        {/* Lista de resultados */}
        <div className="grid grid-cols-1 gap-6">
          {isLoading ? (
            // Estado de carregamento
            Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="bg-[#1a1a24] border border-gray-800 rounded-xl p-6 animate-pulse">
                <div className="h-6 bg-gray-700 rounded w-3/4 mb-3"></div>
                <div className="h-4 bg-gray-700 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-700 rounded w-2/3"></div>
              </div>
            ))
          ) : searchResults.length > 0 ? (
            // Resultados encontrados
            searchResults.map((article, index) => (
              <Link
                href={`/suporte/${article.category}/${article.id}`}
                key={`${article.category}-${article.id}-${index}`}
                className="bg-[#1a1a24] border border-gray-800 rounded-xl p-6 transition-all hover:border-pink-500/50 hover:bg-[#1e1e2a] group"
              >
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="flex-grow">
                    <div className="text-sm text-pink-500 mb-1">{article.categoryTitle}</div>
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
            // Nenhum resultado encontrado
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-800 mb-4">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Nenhum resultado encontrado</h3>
              <p className="text-gray-400 max-w-md mx-auto">
                Não encontramos artigos que correspondam à sua pesquisa. Tente usar termos diferentes ou mais gerais.
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
              <h3 className="text-xl font-bold text-white mb-2">Não encontrou o que procurava?</h3>
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
