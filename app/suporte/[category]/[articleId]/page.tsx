"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Clock, User, Copy, Share2, HelpCircle } from "lucide-react"
import ArticleFeedback from "@/components/article-feedback"
import VideoEmbed from "@/components/video-embed"
import type { JSX } from "react"

// Definir tipos para melhorar a tipagem
interface ArticleData {
  title: string
  content: string
  date: string
  readTime: string
  author: string
  helpful: number
  notHelpful: number
  category: string
  categoryTitle: string
  relatedArticles: number[]
  videos?: string[] // URLs dos vídeos
}

interface ArticlesData {
  [category: string]: {
    [id: number]: ArticleData
  }
}

// Simulação de dados de artigos
const articles: ArticlesData = {
  financeiro: {
    1: {
      title: "Como realizar pagamentos",
      content: `
# Como realizar pagamentos na Neonhost

A Neonhost oferece diversas formas de pagamento para facilitar a contratação e renovação dos nossos serviços. Neste guia, vamos mostrar passo a passo como realizar pagamentos em nossa plataforma.

## Métodos de pagamento aceitos

Atualmente, aceitamos os seguintes métodos de pagamento:

- Cartão de crédito (Visa, Mastercard, American Express)
- Boleto bancário
- PIX
- PayPal
- Transferência bancária

## Como realizar um pagamento

### 1. Acesse sua conta

Faça login em sua conta Neonhost em [https://neonhost.com.br/login](https://neonhost.com.br/login).

### 2. Navegue até Financeiro

No painel de controle, clique em "Financeiro" no menu lateral esquerdo.

### 3. Selecione a fatura

Você verá uma lista de faturas pendentes e pagas. Clique na fatura que deseja pagar.

### 4. Escolha o método de pagamento

Selecione o método de pagamento de sua preferência entre as opções disponíveis.

### 5. Complete o pagamento

Siga as instruções na tela para completar o pagamento. As instruções variam de acordo com o método escolhido:

- **Cartão de crédito**: Preencha os dados do cartão e confirme o pagamento
- **Boleto bancário**: Gere o boleto e pague até a data de vencimento
- **PIX**: Escaneie o QR code ou copie o código PIX
- **PayPal**: Você será redirecionado para o site do PayPal
- **Transferência bancária**: Siga as instruções para transferência

## Tutorial em vídeo

Confira nosso tutorial em vídeo sobre como realizar pagamentos:

VIDEO: https://www.youtube.com/watch?v=dQw4w9WgXcQ

## Prazos de compensação

- **Cartão de crédito e PayPal**: Imediato
- **PIX**: Até 30 minutos
- **Boleto bancário**: 1-3 dias úteis
- **Transferência bancária**: 1-2 dias úteis

## Problemas comuns

### O pagamento não foi confirmado

Se o pagamento não for confirmado automaticamente após o prazo esperado, você pode enviar o comprovante para nossa equipe de suporte através da seção "Suporte" ou pelo e-mail financeiro@neonhost.com.br.

### Erro ao processar pagamento com cartão

Verifique se os dados do cartão estão corretos e se há limite disponível. Alguns bancos podem bloquear transações online por segurança, neste caso entre em contato com seu banco.

## Precisa de ajuda?

Se você encontrar qualquer dificuldade para realizar o pagamento, nossa equipe de suporte está disponível 24/7 para ajudar.
      `,
      date: "10/04/2024",
      readTime: "5 min",
      author: "Equipe Neonhost",
      helpful: 24,
      notHelpful: 2,
      category: "financeiro",
      categoryTitle: "Financeiro",
      relatedArticles: [2, 3, 4],
      videos: ["https://www.youtube.com/watch?v=dQw4w9WgXcQ"],
    },
    // Outros artigos...
    2: {
      title: "Política de reembolso",
      content: `
# Política de reembolso da Neonhost

Entendemos que às vezes você pode precisar cancelar um serviço ou solicitar um reembolso. Esta página explica nossa política de reembolso e os procedimentos para solicitá-lo.

## Prazo para reembolso

A Neonhost oferece um período de garantia de 7 dias para a maioria dos serviços. Se você não estiver satisfeito com o serviço dentro deste período, poderá solicitar um reembolso integral.

## Como solicitar um reembolso

Para solicitar um reembolso, siga estas etapas:

1. Acesse sua conta em [https://neonhost.com.br/login](https://neonhost.com.br/login)
2. Navegue até "Suporte" no menu lateral
3. Clique em "Abrir Ticket"
4. Selecione "Solicitação de Reembolso" como assunto
5. Preencha o formulário com os detalhes necessários

Veja o vídeo abaixo para um tutorial passo a passo:

VIDEO: https://www.youtube.com/watch?v=jNQXAC9IVRw

## Condições para reembolso

Para ser elegível para um reembolso, você deve atender às seguintes condições:

- A solicitação deve ser feita dentro do período de garantia de 7 dias
- O serviço não deve ter sido utilizado extensivamente
- Não deve haver violações dos Termos de Serviço

## Processamento do reembolso

Após a aprovação da solicitação de reembolso, o valor será creditado de volta ao método de pagamento original em até 10 dias úteis.

## Exceções

Alguns serviços e produtos não são elegíveis para reembolso, incluindo:

- Domínios (devido à natureza do registro)
- Serviços personalizados
- Após o período de garantia de 7 dias

Se você tiver alguma dúvida sobre nossa política de reembolso, entre em contato com nossa equipe de suporte.
      `,
      date: "05/04/2024",
      readTime: "7 min",
      author: "Equipe Neonhost",
      helpful: 18,
      notHelpful: 3,
      category: "financeiro",
      categoryTitle: "Financeiro",
      relatedArticles: [1, 3, 4],
      videos: ["https://www.youtube.com/watch?v=jNQXAC9IVRw"],
    },
    3: {
      title: "Cupons de desconto",
      content: "Conteúdo sobre cupons de desconto...",
      date: "01/04/2024",
      readTime: "3 min",
      author: "Equipe Neonhost",
      helpful: 32,
      notHelpful: 1,
      category: "financeiro",
      categoryTitle: "Financeiro",
      relatedArticles: [1, 2, 4],
    },
    4: {
      title: "Faturas e notas fiscais",
      content: "Conteúdo sobre faturas e notas fiscais...",
      date: "25/03/2024",
      readTime: "4 min",
      author: "Equipe Neonhost",
      helpful: 15,
      notHelpful: 2,
      category: "financeiro",
      categoryTitle: "Financeiro",
      relatedArticles: [1, 2, 3],
    },
  },
  // Outras categorias...
  "hospedagem-minecraft": {
    1: {
      title: "Instalando plugins no servidor Minecraft",
      content: `
# Instalando plugins no servidor Minecraft

Os plugins são uma ótima maneira de adicionar funcionalidades ao seu servidor Minecraft. Neste guia, vamos mostrar como instalar plugins no seu servidor Minecraft hospedado na Neonhost.

## Requisitos

- Um servidor Minecraft hospedado na Neonhost
- Acesso ao painel de controle
- Plugins compatíveis com a versão do seu servidor

## Passo a passo para instalar plugins

### 1. Acesse o painel de controle

Faça login no painel de controle da Neonhost e selecione seu servidor Minecraft.

### 2. Navegue até a seção de arquivos

No menu lateral, clique em "Gerenciador de Arquivos".

### 3. Localize a pasta de plugins

Navegue até a pasta "plugins" do seu servidor. Se ela não existir, você pode criá-la.

### 4. Faça upload do plugin

Clique no botão "Upload" e selecione o arquivo .jar do plugin que você deseja instalar.

Assista ao nosso tutorial em vídeo para ver o processo completo:

VIDEO: https://www.youtube.com/watch?v=LXb3EKWsInQ

### 5. Reinicie o servidor

Após o upload do plugin, reinicie o servidor para que as alterações sejam aplicadas.

## Configurando plugins

A maioria dos plugins cria automaticamente arquivos de configuração na primeira inicialização. Para configurar um plugin:

1. Reinicie o servidor após instalar o plugin
2. Navegue até a pasta "plugins/[Nome do Plugin]"
3. Edite o arquivo config.yml ou similar
4. Salve as alterações e reinicie o servidor novamente

## Plugins recomendados

Aqui estão alguns plugins populares para servidores Minecraft:

- **Essentials**: Comandos básicos e funcionalidades
- **WorldEdit**: Ferramentas de edição de mundo
- **Vault**: API para economia e permissões
- **PermissionsEx**: Sistema de permissões avançado

## Solução de problemas

Se um plugin não estiver funcionando corretamente:

- Verifique se ele é compatível com a versão do seu servidor
- Confira os logs do servidor para mensagens de erro
- Certifique-se de que todas as dependências estão instaladas

Para mais ajuda, entre em contato com nossa equipe de suporte.
      `,
      date: "18/04/2024",
      readTime: "10 min",
      author: "Equipe Neonhost",
      helpful: 45,
      notHelpful: 3,
      category: "hospedagem-minecraft",
      categoryTitle: "Hospedagem de Minecraft",
      relatedArticles: [2, 3],
      videos: ["https://www.youtube.com/watch?v=LXb3EKWsInQ"],
    },
  },
}

// Mapeamento de títulos de categorias
const categoryTitles: Record<string, string> = {
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

export default function ArticlePage({ params }: { params: { category: string; articleId: string } }) {
  const { category, articleId } = params

  // Corrigir o acesso ao artigo com tipagem adequada
  const articleIdNum = Number.parseInt(articleId)
  const categoryArticles = articles[category]
  const article = categoryArticles ? categoryArticles[articleIdNum] : undefined

  if (!article) {
    return (
      <div className="min-h-screen bg-[#0a0a0e] flex items-center justify-center pt-16">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Artigo não encontrado</h1>
          <p className="text-gray-400 mb-6">O artigo que você está procurando não existe ou foi removido.</p>
          <Link
            href="/suporte"
            className="inline-flex items-center bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-6 rounded-lg transition-colors"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Voltar para Central de Suporte
          </Link>
        </div>
      </div>
    )
  }

  // Função para extrair URLs de vídeo do conteúdo
  const extractVideos = (content: string): string[] => {
    const videoUrls: string[] = []
    const lines = content.split("\n")

    for (const line of lines) {
      if (line.trim().startsWith("VIDEO:")) {
        const url = line.trim().substring(6).trim()
        videoUrls.push(url)
      }
    }

    return videoUrls
  }

  // Função para renderizar o conteúdo Markdown com suporte a vídeos
  const renderMarkdown = (content: string) => {
    const lines = content.split("\n")
    const elements: JSX.Element[] = []

    let videoIndex = 0
    const videos = article.videos || extractVideos(content)

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]

      if (line.startsWith("# ")) {
        elements.push(
          <h1 key={i} className="text-3xl font-bold mt-8 mb-4 animate-fade-in">
            {line.substring(2)}
          </h1>,
        )
      } else if (line.startsWith("## ")) {
        elements.push(
          <h2 key={i} className="text-2xl font-bold mt-6 mb-3 animate-fade-in">
            {line.substring(3)}
          </h2>,
        )
      } else if (line.startsWith("### ")) {
        elements.push(
          <h3 key={i} className="text-xl font-bold mt-5 mb-2 animate-fade-in">
            {line.substring(4)}
          </h3>,
        )
      } else if (line.startsWith("- ")) {
        elements.push(
          <li key={i} className="ml-6 mb-1 animate-slide-in" style={{ animationDelay: `${i * 0.05}s` }}>
            {line.substring(2)}
          </li>,
        )
      } else if (line.trim().startsWith("VIDEO:")) {
        if (videoIndex < videos.length) {
          elements.push(
            <div key={i} className="my-6 animate-scale-in">
              <VideoEmbed url={videos[videoIndex]} />
            </div>,
          )
          videoIndex++
        }
      } else if (line.trim() === "") {
        elements.push(<div key={i} className="h-4"></div>)
      } else {
        elements.push(
          <p key={i} className="mb-4 animate-fade-in" style={{ animationDelay: `${i * 0.03}s` }}>
            {line}
          </p>,
        )
      }
    }

    return <div className="prose prose-invert prose-pink max-w-none">{elements}</div>
  }

  return (
    <div className="min-h-screen bg-[#0a0a0e]">
      {/* Header com gradiente - ajustado para ficar abaixo do navbar */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 py-12 pt-24">
        <div className="container mx-auto px-4">
          <Link
            href={`/suporte/${category}`}
            className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Voltar para {categoryTitles[category] || "Categoria"}
          </Link>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-slide-up">{article.title}</h1>

          <div className="flex flex-wrap items-center gap-4 text-white/80 animate-fade-in">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{article.readTime} de leitura</span>
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              <span>{article.author}</span>
            </div>
            <div>
              <span>Atualizado em {article.date}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Conteúdo do artigo - coluna principal */}
          <div className="lg:col-span-2">
            <div className="bg-[#1a1a24] border border-gray-800 rounded-xl p-6 mb-6 animate-fade-in">
              {renderMarkdown(article.content)}
            </div>

            {/* Avaliação do artigo - Substituído pelo componente ArticleFeedback */}
            <ArticleFeedback
              category={category}
              articleId={articleId}
              initialHelpful={article.helpful}
              initialNotHelpful={article.notHelpful}
            />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Compartilhar */}
            <div className="bg-[#1a1a24] border border-gray-800 rounded-xl p-6 mb-6 animate-slide-in">
              <h3 className="text-lg font-bold text-white mb-4">Compartilhar artigo</h3>
              <div className="flex flex-wrap gap-2">
                <button className="flex items-center bg-gray-800 hover:bg-gray-700 text-white px-3 py-2 rounded-lg transition-colors hover:scale-105">
                  <Copy className="h-4 w-4 mr-2" />
                  <span>Copiar link</span>
                </button>
                <button className="flex items-center bg-[#1877F2] hover:bg-[#166FE5] text-white px-3 py-2 rounded-lg transition-colors hover:scale-105">
                  <Share2 className="h-4 w-4 mr-2" />
                  <span>Facebook</span>
                </button>
                <button className="flex items-center bg-[#1DA1F2] hover:bg-[#1A94DA] text-white px-3 py-2 rounded-lg transition-colors hover:scale-105">
                  <Share2 className="h-4 w-4 mr-2" />
                  <span>Twitter</span>
                </button>
              </div>
            </div>

            {/* Artigos relacionados */}
            <div
              className="bg-[#1a1a24] border border-gray-800 rounded-xl p-6 animate-slide-in"
              style={{ animationDelay: "0.2s" }}
            >
              <h3 className="text-lg font-bold text-white mb-4">Artigos relacionados</h3>
              <div className="space-y-4">
                {article.relatedArticles &&
                  article.relatedArticles.map((relatedId, index) => {
                    // Corrigir o acesso ao artigo relacionado com tipagem adequada
                    const relatedArticle = categoryArticles ? categoryArticles[relatedId] : undefined
                    if (!relatedArticle) return null

                    return (
                      <Link
                        key={relatedId}
                        href={`/suporte/${category}/${relatedId}`}
                        className="block p-3 bg-gray-800/50 hover:bg-gray-800 rounded-lg transition-colors hover:scale-[1.02] transform"
                        style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                      >
                        <h4 className="font-medium text-white mb-1">{relatedArticle.title}</h4>
                        <div className="flex items-center text-xs text-gray-400">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>{relatedArticle.readTime}</span>
                        </div>
                      </Link>
                    )
                  })}
              </div>
            </div>
          </div>
        </div>

        {/* Seção de ajuda adicional */}
        <div
          className="mt-16 p-6 bg-[#1a1a24] border border-gray-800 rounded-xl animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-6">
              <div className="w-16 h-16 rounded-full bg-pink-500/20 flex items-center justify-center animate-pulse">
                <HelpCircle className="h-8 w-8 text-pink-500" />
              </div>
            </div>
            <div className="flex-grow text-center md:text-left">
              <h3 className="text-xl font-bold text-white mb-2">Ainda tem dúvidas?</h3>
              <p className="text-gray-400 mb-4">
                Se este artigo não resolveu sua dúvida, nossa equipe de suporte está pronta para ajudar.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Link
                href="/contato"
                className="inline-flex items-center bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-6 rounded-lg transition-colors hover:scale-105 transform"
              >
                Fale Conosco
              </Link>
            </div>
          </div>
        </div>
      </div>


      {/* Estilos para animações */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideIn {
          from { transform: translateX(-20px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes scaleIn {
          from { transform: scale(0.9); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
        
        .animate-slide-in {
          animation: slideIn 0.5s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slideUp 0.5s ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  )
}
