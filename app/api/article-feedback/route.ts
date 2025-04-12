import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

// Caminho para o arquivo JSON que armazenará os votos
// Em produção, você usaria um banco de dados real
const dataFilePath = path.join(process.cwd(), "data", "article-feedback.json")

// Adicione tratamento de erro para garantir que o diretório data exista
const ensureFileExists = () => {
  const dir = path.dirname(dataFilePath)
  if (!fs.existsSync(dir)) {
    try {
      fs.mkdirSync(dir, { recursive: true })
    } catch (error) {
      console.error("Erro ao criar diretório:", error)
      // Em produção, você pode querer usar um local alternativo ou um banco de dados
    }
  }

  if (!fs.existsSync(dataFilePath)) {
    try {
      fs.writeFileSync(dataFilePath, JSON.stringify({}), "utf8")
    } catch (error) {
      console.error("Erro ao criar arquivo de dados:", error)
    }
  }
}

// Função para ler os dados atuais
const readFeedbackData = () => {
  ensureFileExists()
  try {
    const data = fs.readFileSync(dataFilePath, "utf8")
    return JSON.parse(data)
  } catch (error) {
    console.error("Erro ao ler dados de feedback:", error)
    return {}
  }
}

// Função para salvar os dados atualizados
const saveFeedbackData = (data: any) => {
  ensureFileExists()
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), "utf8")
  } catch (error) {
    console.error("Erro ao salvar dados de feedback:", error)
  }
}

export async function POST(request: Request) {
  try {
    const { category, articleId, isHelpful, userId } = await request.json()

    // Validação básica
    if (!category || !articleId || isHelpful === undefined || !userId) {
      return NextResponse.json({ error: "Dados incompletos" }, { status: 400 })
    }

    // Ler dados atuais
    const feedbackData = readFeedbackData()

    // Criar chave única para o artigo
    const articleKey = `${category}-${articleId}`

    // Inicializar dados do artigo se não existirem
    if (!feedbackData[articleKey]) {
      feedbackData[articleKey] = {
        helpful: 0,
        notHelpful: 0,
        voters: {},
      }
    }

    // Verificar se o usuário já votou
    const previousVote = feedbackData[articleKey].voters[userId]

    // Se o usuário já votou da mesma forma, não faz nada
    if (previousVote === isHelpful) {
      return NextResponse.json({
        message: "Você já votou neste artigo",
        data: {
          helpful: feedbackData[articleKey].helpful,
          notHelpful: feedbackData[articleKey].notHelpful,
        },
      })
    }

    // Se o usuário já votou, mas de forma diferente, remove o voto anterior
    if (previousVote !== undefined) {
      if (previousVote) {
        feedbackData[articleKey].helpful -= 1
      } else {
        feedbackData[articleKey].notHelpful -= 1
      }
    }

    // Adiciona o novo voto
    if (isHelpful) {
      feedbackData[articleKey].helpful += 1
    } else {
      feedbackData[articleKey].notHelpful += 1
    }

    // Registra o voto do usuário
    feedbackData[articleKey].voters[userId] = isHelpful

    // Salva os dados atualizados
    saveFeedbackData(feedbackData)

    // Retorna os dados atualizados
    return NextResponse.json({
      message: "Feedback registrado com sucesso",
      data: {
        helpful: feedbackData[articleKey].helpful,
        notHelpful: feedbackData[articleKey].notHelpful,
      },
    })
  } catch (error) {
    console.error("Erro ao processar feedback:", error)
    return NextResponse.json({ error: "Erro ao processar feedback" }, { status: 500 })
  }
}

export async function GET(request: Request) {
  try {
    const url = new URL(request.url)
    const category = url.searchParams.get("category")
    const articleId = url.searchParams.get("articleId")

    // Validação básica
    if (!category || !articleId) {
      return NextResponse.json({ error: "Parâmetros incompletos" }, { status: 400 })
    }

    // Ler dados atuais
    const feedbackData = readFeedbackData()

    // Criar chave única para o artigo
    const articleKey = `${category}-${articleId}`

    // Retornar dados do artigo ou valores padrão
    const articleData = feedbackData[articleKey] || { helpful: 0, notHelpful: 0 }

    return NextResponse.json({
      data: {
        helpful: articleData.helpful,
        notHelpful: articleData.notHelpful,
      },
    })
  } catch (error) {
    console.error("Erro ao obter dados de feedback:", error)
    return NextResponse.json({ error: "Erro ao obter dados de feedback" }, { status: 500 })
  }
}
