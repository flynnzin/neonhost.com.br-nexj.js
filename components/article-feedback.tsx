"use client"

import { useState, useEffect } from "react"
import { ThumbsUp, ThumbsDown } from "lucide-react"
import { v4 as uuidv4 } from "uuid"

interface ArticleFeedbackProps {
  category: string
  articleId: string
  initialHelpful?: number
  initialNotHelpful?: number
}

export default function ArticleFeedback({
  category,
  articleId,
  initialHelpful = 0,
  initialNotHelpful = 0,
}: ArticleFeedbackProps) {
  const [helpful, setHelpful] = useState(initialHelpful)
  const [notHelpful, setNotHelpful] = useState(initialNotHelpful)
  const [userVote, setUserVote] = useState<boolean | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [feedbackMessage, setFeedbackMessage] = useState("")
  const [userId, setUserId] = useState<string>("")
  const [isMounted, setIsMounted] = useState(false)

  // Verificar se o componente está montado no cliente
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Inicializar o ID do usuário e verificar se já votou
  useEffect(() => {
    // Só executar no cliente
    if (!isMounted) return

    // Obter ou criar um ID de usuário
    let id
    try {
      id = localStorage.getItem("neonhost_user_id")
      if (!id) {
        id = uuidv4()
        localStorage.setItem("neonhost_user_id", id)
      }
      setUserId(id)

      // Verificar se o usuário já votou neste artigo
      const voteKey = `article_vote_${category}_${articleId}`
      const previousVote = localStorage.getItem(voteKey)
      if (previousVote) {
        setUserVote(previousVote === "true")
      }

      // Buscar dados atualizados do servidor
      fetchFeedbackData()
    } catch (error) {
      console.error("Erro ao acessar localStorage:", error)
    }
  }, [category, articleId, isMounted])

  // Função para buscar dados atualizados
  const fetchFeedbackData = async () => {
    try {
      const response = await fetch(`/api/article-feedback?category=${category}&articleId=${articleId}`)
      const data = await response.json()

      if (data.data) {
        setHelpful(data.data.helpful)
        setNotHelpful(data.data.notHelpful)
      }
    } catch (error) {
      console.error("Erro ao buscar dados de feedback:", error)
    }
  }

  // Função para enviar feedback
  const submitFeedback = async (isHelpful: boolean) => {
    if (isSubmitting || !isMounted) return

    setIsSubmitting(true)
    setFeedbackMessage("")

    try {
      const response = await fetch("/api/article-feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          category,
          articleId,
          isHelpful,
          userId: userId || uuidv4(), // Fallback para caso o userId não esteja definido
        }),
      })

      const data = await response.json()

      if (response.ok) {
        // Atualizar contadores
        setHelpful(data.data.helpful)
        setNotHelpful(data.data.notHelpful)

        // Salvar voto do usuário
        setUserVote(isHelpful)
        try {
          localStorage.setItem(`article_vote_${category}_${articleId}`, String(isHelpful))
        } catch (error) {
          console.error("Erro ao salvar no localStorage:", error)
        }

        // Mostrar mensagem de sucesso
        setFeedbackMessage("Obrigado pelo seu feedback!")
      } else {
        setFeedbackMessage(data.error || "Erro ao enviar feedback")
      }
    } catch (error) {
      console.error("Erro ao enviar feedback:", error)
      setFeedbackMessage("Erro ao enviar feedback. Tente novamente mais tarde.")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Se não estiver montado no cliente, renderizar versão simplificada
  if (!isMounted) {
    return (
      <div className="bg-[#1a1a24] border border-gray-800 rounded-xl p-6">
        <h3 className="text-lg font-bold text-white mb-4">Este artigo foi útil?</h3>
        <div className="flex items-center gap-4">
          <button className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-lg" disabled>
            <ThumbsUp className="h-5 w-5 mr-2" />
            <span>Sim ({initialHelpful})</span>
          </button>
          <button className="flex items-center bg-gray-800 text-white px-4 py-2 rounded-lg" disabled>
            <ThumbsDown className="h-5 w-5 mr-2" />
            <span>Não ({initialNotHelpful})</span>
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-[#1a1a24] border border-gray-800 rounded-xl p-6">
      <h3 className="text-lg font-bold text-white mb-4">Este artigo foi útil?</h3>

      {feedbackMessage && (
        <div className="mb-4 p-3 bg-gray-800/50 rounded-lg text-center">
          <p className="text-sm text-gray-300">{feedbackMessage}</p>
        </div>
      )}

      <div className="flex items-center gap-4">
        <button
          className={`flex items-center ${
            userVote === true ? "bg-green-600 hover:bg-green-700" : "bg-gray-800 hover:bg-gray-700"
          } text-white px-4 py-2 rounded-lg transition-colors`}
          onClick={() => submitFeedback(true)}
          disabled={isSubmitting}
        >
          <ThumbsUp className="h-5 w-5 mr-2" />
          <span>Sim ({helpful})</span>
        </button>

        <button
          className={`flex items-center ${
            userVote === false ? "bg-red-600 hover:bg-red-700" : "bg-gray-800 hover:bg-gray-700"
          } text-white px-4 py-2 rounded-lg transition-colors`}
          onClick={() => submitFeedback(false)}
          disabled={isSubmitting}
        >
          <ThumbsDown className="h-5 w-5 mr-2" />
          <span>Não ({notHelpful})</span>
        </button>
      </div>
    </div>
  )
}
