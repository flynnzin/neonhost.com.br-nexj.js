"use client"

import { useEffect, useState } from "react"
import { FileText, ArrowLeft, AlertTriangle, CheckCircle, RefreshCw } from "lucide-react"
import Link from "next/link"

export default function TermosPage() {
  const [pdfStatus, setPdfStatus] = useState<"loading" | "loaded" | "error">("loading")
  const [showPdf, setShowPdf] = useState(false)
  const [loadingTimeout, setLoadingTimeout] = useState(false)

  useEffect(() => {
    // Desabilitar menu de contexto (clique direito)
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault()
      return false
    }

    // Desabilitar teclas de atalho para salvar/imprimir
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && (e.key === "s" || e.key === "p" || e.key === "a" || e.key === "u")) {
        e.preventDefault()
        return false
      }
      if (e.key === "F12" || (e.ctrlKey && e.shiftKey && e.key === "I")) {
        e.preventDefault()
        return false
      }
    }

    document.addEventListener("contextmenu", handleContextMenu)
    document.addEventListener("keydown", handleKeyDown)

    // Timeout para loading infinito
    const loadingTimer = setTimeout(() => {
      if (pdfStatus === "loading") {
        setLoadingTimeout(true)
        setPdfStatus("error")
      }
    }, 10000) // 10 segundos timeout

    // Testar se o PDF está disponível
    const testPdf = async () => {
      try {
        const response = await fetch("/api/termos", {
          method: "HEAD",
          cache: "no-cache",
        })
        if (response.ok) {
          setPdfStatus("loaded")
          setShowPdf(true)
        } else {
          setPdfStatus("error")
        }
      } catch (error) {
        console.error("Erro ao testar PDF:", error)
        setPdfStatus("error")
      }
    }

    // Delay para evitar carregamento muito rápido
    const timer = setTimeout(testPdf, 1500)

    return () => {
      clearTimeout(timer)
      clearTimeout(loadingTimer)
      document.removeEventListener("contextmenu", handleContextMenu)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [pdfStatus])

  const handleIframeLoad = () => {
    setPdfStatus("loaded")
    setLoadingTimeout(false)
  }

  const handleIframeError = () => {
    setPdfStatus("error")
    setShowPdf(false)
  }

  const retryPdf = () => {
    setPdfStatus("loading")
    setShowPdf(true)
    setLoadingTimeout(false)
  }

  return (
    <div className="min-h-screen bg-black text-white select-none">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar ao início
          </Link>

          <div className="bg-gray-900/50 border border-cyan-500/20 backdrop-blur-sm rounded-lg">
            <div className="p-6 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="p-3 bg-cyan-500/20 rounded-full">
                  <FileText className="w-8 h-8 text-cyan-400" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Termos de Serviço
                  </h1>
                  <p className="text-gray-400 mt-2">NeonHost - Hospedagem de Servidores de Jogos</p>
                </div>
              </div>

              {/* Status do PDF */}
              <div className="flex items-center justify-center gap-2 text-sm">
                {pdfStatus === "loading" && !loadingTimeout && (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-cyan-400"></div>
                    <span className="text-gray-400">Carregando documento oficial...</span>
                  </>
                )}
                {pdfStatus === "loaded" && showPdf && (
                  <>
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span className="text-green-400">Documento oficial carregado</span>
                  </>
                )}
                {(pdfStatus === "error" || loadingTimeout) && (
                  <>
                    <AlertTriangle className="w-4 h-4 text-yellow-400" />
                    <span className="text-yellow-400">Exibindo versão em texto</span>
                    <button
                      onClick={retryPdf}
                      className="ml-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                      title="Tentar carregar PDF novamente"
                    >
                      <RefreshCw className="w-4 h-4" />
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* PDF Viewer */}
        {showPdf && pdfStatus !== "error" && !loadingTimeout && (
          <div className="bg-gray-900/50 border border-cyan-500/20 backdrop-blur-sm rounded-lg relative mb-8">
            {/* Overlay para impedir interações diretas com o PDF */}
            <div className="absolute inset-0 z-10 pointer-events-none rounded-lg" />

            <div className="p-0 relative">
              <div className="relative w-full" style={{ height: "calc(100vh - 300px)", minHeight: "500px" }}>
                {pdfStatus === "loading" && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-900/80 backdrop-blur-sm rounded-lg z-20">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto mb-4"></div>
                      <p className="text-gray-400">Carregando documento oficial...</p>
                      <p className="text-gray-500 text-sm mt-2">Isso pode levar alguns segundos</p>
                    </div>
                  </div>
                )}

                <iframe
                  src="/api/termos#toolbar=0&navpanes=0&scrollbar=0&statusbar=0&messages=0"
                  className="w-full h-full rounded-lg"
                  title="Termos de Serviço NeonHost"
                  style={{
                    border: "none",
                    background: "white",
                    pointerEvents: "none",
                  }}
                  sandbox="allow-same-origin"
                  onContextMenu={(e) => e.preventDefault()}
                  onLoad={handleIframeLoad}
                  onError={handleIframeError}
                />
              </div>
            </div>
          </div>
        )}

        {/* Termos Completos em Texto - Sempre visível quando PDF não carrega */}
        <div className="space-y-6">
          <div className="bg-gray-900/30 border border-cyan-500/10 backdrop-blur-sm rounded-lg">
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-cyan-400 mb-6 text-center">
                {showPdf && pdfStatus === "loaded" ? "Resumo dos Termos de Serviço" : "Termos de Serviço - NeonHost"}
              </h2>

              <div className="space-y-6 text-sm text-gray-300 leading-relaxed">
                <div>
                  <h3 className="font-semibold text-white mb-3 text-lg">1. Definições e Aceitação dos Termos</h3>
                  <p className="mb-2">
                    Ao contratar qualquer serviço da NeonHost, você concorda integralmente com estes Termos de Serviço.
                    A NeonHost é uma empresa especializada em hospedagem de servidores de jogos, VPS (Virtual Private
                    Server), servidores dedicados e semi-dedicados, oferecendo soluções de alta performance com proteção
                    DDoS avançada.
                  </p>
                  <p>
                    Estes termos se aplicam a todos os usuários, clientes e visitantes de nossos serviços e website
                    oficial. O uso continuado de nossos serviços implica na aceitação automática de eventuais
                    atualizações destes termos.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-white mb-3 text-lg">2. Serviços Oferecidos pela NeonHost</h3>
                  <p className="mb-2">A NeonHost oferece uma ampla gama de serviços de hospedagem:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      <strong>Servidores de Jogos:</strong> Minecraft (Java/Bedrock), FiveM, RedM, CS2, Rust, ARK,
                      Valheim, entre outros
                    </li>
                    <li>
                      <strong>VPS (Virtual Private Server):</strong> Servidores virtuais com recursos dedicados
                    </li>
                    <li>
                      <strong>Servidores Dedicados:</strong> Hardware exclusivo para máxima performance
                    </li>
                    <li>
                      <strong>Servidores Semi-Dedicados:</strong> Recursos compartilhados com garantia de performance
                    </li>
                    <li>
                      <strong>Hospedagem Web:</strong> Sites, aplicações e sistemas web
                    </li>
                    <li>
                      <strong>Proteção DDoS:</strong> Proteção avançada contra ataques distribuídos
                    </li>
                    <li>
                      <strong>Suporte Técnico:</strong> Atendimento especializado 24 horas por dia, 7 dias por semana
                    </li>
                    <li>
                      <strong>Painel de Controle:</strong> Interface intuitiva para gerenciamento completo
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-white mb-3 text-lg">
                    3. Responsabilidades e Obrigações do Cliente
                  </h3>
                  <p className="mb-2">O cliente é integralmente responsável por:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      <strong>Conteúdo Hospedado:</strong> Todo material, dados e informações armazenados em nossos
                      servidores
                    </li>
                    <li>
                      <strong>Conformidade Legal:</strong> Cumprimento rigoroso das leis brasileiras e internacionais
                      aplicáveis
                    </li>
                    <li>
                      <strong>Uso Adequado:</strong> Utilização responsável dos recursos contratados dentro dos limites
                      estabelecidos
                    </li>
                    <li>
                      <strong>Segurança:</strong> Manutenção da segurança de credenciais, senhas e dados de acesso
                    </li>
                    <li>
                      <strong>Backup:</strong> Realização regular de backup de dados, configurações e arquivos
                      importantes
                    </li>
                    <li>
                      <strong>Pagamentos:</strong> Quitação pontual das mensalidades e taxas conforme contratado
                    </li>
                    <li>
                      <strong>Comunicação:</strong> Manutenção de dados de contato atualizados para comunicações
                      importantes
                    </li>
                    <li>
                      <strong>Monitoramento:</strong> Acompanhamento do uso de recursos para evitar sobrecarga
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-white mb-3 text-lg">4. Política de Uso Aceitável</h3>
                  <p className="mb-2">É estritamente proibido usar nossos serviços para:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      <strong>Atividades Ilegais:</strong> Qualquer atividade que viole leis brasileiras ou
                      internacionais
                    </li>
                    <li>
                      <strong>Spam e E-mails:</strong> Envio de spam, e-mails não solicitados ou marketing abusivo
                    </li>
                    <li>
                      <strong>Ataques Cibernéticos:</strong> DDoS, tentativas de invasão, hacking ou atividades
                      maliciosas
                    </li>
                    <li>
                      <strong>Mineração:</strong> Mineração de criptomoedas não autorizada expressamente
                    </li>
                    <li>
                      <strong>Conteúdo Impróprio:</strong> Material pornográfico, violento, discriminatório ou ofensivo
                    </li>
                    <li>
                      <strong>Pirataria:</strong> Violação de direitos autorais, distribuição de software pirata
                    </li>
                    <li>
                      <strong>Phishing:</strong> Tentativas de obtenção fraudulenta de dados pessoais
                    </li>
                    <li>
                      <strong>Sobrecarga:</strong> Uso excessivo que comprometa a performance de outros usuários
                    </li>
                    <li>
                      <strong>Revenda:</strong> Revenda não autorizada de recursos ou serviços
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-white mb-3 text-lg">5. Política de Pagamento e Faturamento</h3>
                  <p className="mb-2">
                    Os pagamentos devem ser realizados pontualmente conforme o plano contratado e nas datas de
                    vencimento estabelecidas. A NeonHost aceita as seguintes formas de pagamento:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      <strong>PIX:</strong> Processamento instantâneo, disponível 24/7
                    </li>
                    <li>
                      <strong>Cartão de Crédito:</strong> Visa, Mastercard, Elo (parcelamento disponível)
                    </li>
                    <li>
                      <strong>Boleto Bancário:</strong> Prazo de compensação de 1 a 3 dias úteis
                    </li>
                    <li>
                      <strong>Transferência Bancária:</strong> Para valores elevados (sob consulta)
                    </li>
                  </ul>
                  <p className="mt-2">
                    <strong>Política de Atraso:</strong> Atrasos no pagamento podem resultar em suspensão temporária do
                    serviço após 5 dias. Após 15 dias de atraso, o serviço pode ser cancelado definitivamente com perda
                    de dados. Taxas de religação podem ser aplicadas.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-white mb-3 text-lg">6. Disponibilidade do Serviço e SLA</h3>
                  <p className="mb-2">
                    A NeonHost garante 99.9% de uptime (tempo de atividade) para todos os serviços contratados. Em caso
                    de indisponibilidade por falha comprovadamente nossa:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      <strong>Compensação:</strong> Crédito proporcional será aplicado automaticamente na próxima fatura
                    </li>
                    <li>
                      <strong>Manutenções Programadas:</strong> Comunicadas com antecedência mínima de 24 horas
                    </li>
                    <li>
                      <strong>Manutenções Emergenciais:</strong> Comunicadas o mais rapidamente possível
                    </li>
                    <li>
                      <strong>Monitoramento:</strong> Sistemas de monitoramento 24/7 para detecção proativa de problemas
                    </li>
                  </ul>
                  <p className="mt-2">
                    <strong>Exclusões do SLA:</strong> Problemas causados por terceiros, ataques DDoS, falhas de
                    internet do cliente, manutenções programadas e casos de força maior não são cobertos pela garantia
                    de uptime.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-white mb-3 text-lg">7. Suporte Técnico Especializado</h3>
                  <p className="mb-2">
                    A NeonHost oferece suporte técnico especializado 24/7 através dos seguintes canais:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      <strong>Sistema de Tickets:</strong> Canal principal com prioridade alta (painel do cliente)
                    </li>
                    <li>
                      <strong>Discord Oficial:</strong> Suporte em tempo real e comunidade ativa
                    </li>
                    <li>
                      <strong>WhatsApp:</strong> Para emergências e suporte urgente
                    </li>
                    <li>
                      <strong>E-mail:</strong> suporte@neonhost.com.br para questões gerais
                    </li>
                    <li>
                      <strong>Base de Conhecimento:</strong> Tutoriais e documentação completa
                    </li>
                  </ul>
                  <p className="mt-2">
                    <strong>Tempo de Resposta:</strong> 30 minutos para tickets urgentes, 2 horas para tickets normais,
                    4 horas para consultas gerais. Suporte em português brasileiro por técnicos especializados.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-white mb-3 text-lg">8. Política de Reembolso e Cancelamento</h3>
                  <p className="mb-2">A NeonHost oferece reembolso integral nas seguintes situações:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      <strong>Falha do Serviço:</strong> Impossibilidade comprovada de fornecimento por nossa
                      responsabilidade
                    </li>
                    <li>
                      <strong>Garantia para Novos Clientes:</strong> 7 dias para cancelamento com reembolso total
                    </li>
                    <li>
                      <strong>Problemas Técnicos:</strong> Quando não conseguimos resolver problemas em prazo razoável
                    </li>
                    <li>
                      <strong>Indisponibilidade Prolongada:</strong> Mais de 24 horas de indisponibilidade por nossa
                      falha
                    </li>
                  </ul>
                  <p className="mt-2">
                    <strong>Processamento:</strong> Reembolsos são analisados em até 48 horas e processados em até 7
                    dias úteis. Cancelamentos podem ser solicitados a qualquer momento através do painel do cliente.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-white mb-3 text-lg">9. Proteção de Dados Pessoais (LGPD)</h3>
                  <p className="mb-2">
                    A NeonHost está em total conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018):
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      <strong>Coleta Mínima:</strong> Coletamos apenas dados estritamente necessários para prestação do
                      serviço
                    </li>
                    <li>
                      <strong>Não Compartilhamento:</strong> Jamais compartilhamos dados pessoais com terceiros sem
                      autorização
                    </li>
                    <li>
                      <strong>Direito de Exclusão:</strong> Você pode solicitar exclusão completa de seus dados a
                      qualquer momento
                    </li>
                    <li>
                      <strong>Criptografia:</strong> Todos os dados sensíveis são criptografados com padrões
                      internacionais
                    </li>
                    <li>
                      <strong>Acesso Controlado:</strong> Apenas funcionários autorizados têm acesso a dados pessoais
                    </li>
                    <li>
                      <strong>Transparência:</strong> Informamos claramente como seus dados são utilizados
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-white mb-3 text-lg">10. Limitação de Responsabilidade</h3>
                  <p className="mb-2">A responsabilidade da NeonHost está limitada aos seguintes termos:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      <strong>Valor Limitado:</strong> Nossa responsabilidade máxima é limitada ao valor pago pelo
                      serviço no período
                    </li>
                    <li>
                      <strong>Danos Indiretos:</strong> Não nos responsabilizamos por lucros cessantes ou danos
                      indiretos
                    </li>
                    <li>
                      <strong>Perda de Dados:</strong> Recomendamos backup regular - não garantimos recuperação de dados
                      perdidos
                    </li>
                    <li>
                      <strong>Terceiros:</strong> Não nos responsabilizamos por ações de terceiros ou ataques externos
                    </li>
                    <li>
                      <strong>Uso Indevido:</strong> Danos causados por uso inadequado ou violação destes termos
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-white mb-3 text-lg">11. Modificações dos Termos de Serviço</h3>
                  <p>
                    A NeonHost reserva-se o direito de modificar estes termos a qualquer momento para adequação legal,
                    melhoria dos serviços ou mudanças operacionais. Alterações significativas serão comunicadas por
                    e-mail e através de nossos canais oficiais com antecedência mínima de 30 dias. O uso continuado dos
                    serviços após as modificações implica na aceitação automática dos novos termos.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-white mb-3 text-lg">12. Foro Competente e Legislação Aplicável</h3>
                  <p>
                    Estes Termos de Serviço são regidos exclusivamente pela legislação brasileira. Fica eleito o foro da
                    comarca onde está situada a sede da NeonHost para dirimir quaisquer controvérsias decorrentes da
                    prestação de serviços, renunciando as partes a qualquer outro, por mais privilegiado que seja.
                    Tentaremos sempre resolver disputas de forma amigável através de nossos canais de suporte.
                  </p>
                </div>

                <div className="bg-gray-800/50 border border-cyan-500/20 rounded-lg p-4 mt-6">
                  <h3 className="font-semibold text-cyan-400 mb-2">Contato e Informações Legais</h3>
                  <div className="text-xs space-y-1">
                    <p>
                      <strong>Razão Social:</strong> NeonHost Hospedagem de Servidores LTDA
                    </p>
                    <p>
                      <strong>E-mail:</strong> suporte@neonhost.com.br | contato@neonhost.com.br
                    </p>
                    <p>
                      <strong>Discord:</strong> discord.gg/neonhost
                    </p>
                    <p>
                      <strong>Website:</strong> https://neonhost.com.br
                    </p>
                    <p>
                      <strong>Atendimento:</strong> 24 horas por dia, 7 dias por semana
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Info */}
        <div className="mt-8 text-center">
          <div className="bg-gray-900/30 border border-cyan-500/10 backdrop-blur-sm rounded-lg">
            <div className="p-6">
              <p className="text-gray-400 text-sm">
                Documento atualizado em:{" "}
                {new Date().toLocaleDateString("pt-BR", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <p className="text-gray-500 text-xs mt-2">
                Para esclarecimentos sobre estes termos, entre em contato através de nossos canais oficiais de suporte.
              </p>
              <p className="text-red-400 text-xs mt-3 font-medium">
                ⚠️ Este documento é protegido por direitos autorais. Reprodução não autorizada é expressamente proibida.
              </p>
              <div className="mt-4 pt-4 border-t border-gray-700">
                <p className="text-xs text-gray-500">
                  NeonHost - Hospedagem de Servidores de Jogos | Todos os direitos reservados ©{" "}
                  {new Date().getFullYear()}
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  Versão {new Date().getFullYear()}.{String(new Date().getMonth() + 1).padStart(2, "0")} dos Termos de
                  Serviço
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        * {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          -webkit-user-drag: none;
          -khtml-user-drag: none;
          -moz-user-drag: none;
          -o-user-drag: none;
          user-drag: none;
        }

        *::selection {
          background: transparent;
        }
        
        *::-moz-selection {
          background: transparent;
        }

        iframe {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }

        /* Proteger contra print */
        @media print {
          * {
            display: none !important;
          }
        }
      `}</style>
    </div>
  )
}
