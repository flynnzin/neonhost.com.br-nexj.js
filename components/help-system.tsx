'use client'

import React, { useState, useEffect } from 'react'
import { X, MessageCircle, Search, ChevronDown, ChevronUp, ExternalLink, CheckCircle, Home, MessageSquare, HelpCircle } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
  isOpen?: boolean
}

interface ContactOption {
  name: string
  icon: React.ReactNode
  responseTime: string
  color: string
  link: string
}

const faqItems: FAQItem[] = [
  {
    question: "O que é um servidor VPS?",
    answer: "VPS (Virtual Private Server) é um servidor virtual que oferece recursos dedicados como CPU, RAM e armazenamento, proporcionando mais controle e performance que hospedagem compartilhada."
  },
  {
    question: "Qual o prazo de ativação?",
    answer: "A ativação é instantânea para VPS e hospedagem compartilhada. Servidores dedicados podem levar até 24 horas após confirmação do pagamento."
  },
  {
    question: "O que são pontos de Mitigação?",
    answer: "Pontos de mitigação são locais estratégicos onde implementamos nossa proteção anti-DDoS, garantindo que ataques sejam bloqueados antes de chegarem ao seu servidor."
  },
  {
    question: "Consigo melhorar as configurações da minha máquina?",
    answer: "Sim! Você pode fazer upgrade de CPU, RAM e armazenamento a qualquer momento através do painel de controle, sem perder dados ou configurações."
  },
  {
    question: "Existe uma política de Reembolso?",
    answer: "Oferecemos garantia de 30 dias para todos os serviços. Se não ficar satisfeito, devolvemos 100% do valor pago no primeiro mês."
  },
  {
    question: "É permitido jogos no servidores Neon Host?",
    answer: "Sim! Nossos servidores são otimizados para jogos. Oferecemos suporte completo para Minecraft, FiveM, CS:GO, Rust e muitos outros."
  }
]

const minecraftFAQ: FAQItem[] = [
  {
    question: "Como instalar AddOn no servidor Minecraft Bedrock",
    answer: "Acesse o painel de controle, vá em 'Arquivos' > 'behavior_packs' e faça upload do arquivo .mcpack. Depois ative no arquivo server.properties."
  },
  {
    question: "Como Conectar no Filezilla",
    answer: "Use o IP do servidor, porta 21, usuário e senha fornecidos no painel. Configure como SFTP para maior segurança."
  },
  {
    question: "O que cada configuração altera no seu servidor de Palworld",
    answer: "Cada configuração no PalWorldSettings.ini controla aspectos como dificuldade, taxa de spawn, experiência e recursos do mundo."
  }
]

const contactOptions: ContactOption[] = [
  {
    name: "Discord",
    icon: <div className="w-6 h-6 bg-[#5865F2] rounded-full flex items-center justify-center text-white text-xs font-bold">D</div>,
    responseTime: "Resposta em 2 min",
    color: "bg-[#5865F2]",
    link: "https://discord.gg/neonhost"
  },
  {
    name: "WhatsApp",
    icon: <div className="w-6 h-6 bg-[#25D366] rounded-full flex items-center justify-center text-white text-xs font-bold">W</div>,
    responseTime: "Resposta em 2 min",
    color: "bg-[#25D366]",
    link: "https://wa.me/5511999999999"
  }
]

export default function HelpSystem() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentView, setCurrentView] = useState<'main' | 'light'>('main')
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)
  const [unreadCount, setUnreadCount] = useState(3)

  const currentFAQ = currentView === 'light' ? minecraftFAQ : faqItems

  const filteredFAQ = currentFAQ.filter(item =>
    item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index)
  }

  const FloatingButton = () => (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        onClick={() => setIsOpen(true)}
        className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 via-purple-500 to-pink-500 hover:from-purple-700 hover:via-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl transition-all duration-300 relative flex items-center justify-center group"
        style={{
          boxShadow: '0 8px 32px rgba(168, 85, 247, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1)'
        }}
      >
        <MessageCircle className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-200" />
        {unreadCount > 0 && (
          <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-red-500 text-white text-xs flex items-center justify-center animate-pulse shadow-lg">
            {unreadCount}
          </span>
        )}
      </button>
    </div>
  )

  const MainView = () => (
    <div className="bg-slate-900 text-white" style={{
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)'
    }}>
      {/* Header */}
      <div className="flex items-center justify-between p-5 border-b border-slate-700/50">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
            <HelpCircle className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="font-semibold text-lg">Central de Ajuda</h2>
            <p className="text-slate-400 text-sm">Como podemos ajudá-lo hoje?</p>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(false)}
          className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-800/50 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Contact Options */}
      <div className="p-5 space-y-3">
        {contactOptions.map((option, index) => (
          <a
            key={index}
            href={option.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-slate-800/50 rounded-xl hover:bg-slate-700/50 transition-all duration-200 group border border-slate-700/30 hover:border-slate-600/50"
          >
            {option.icon}
            <div className="flex-1">
              <div className="font-medium">{option.name}</div>
              <div className="text-sm text-slate-400">{option.responseTime}</div>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-purple-400 transition-colors" />
          </a>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="p-5">
        <h3 className="font-semibold mb-4 text-lg">Perguntas Frequentes</h3>
        <div className="space-y-3">
          {filteredFAQ.map((item, index) => (
            <div key={index} className="border border-slate-700/50 rounded-xl overflow-hidden bg-slate-800/30 hover:bg-slate-800/50 transition-colors">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-700/30 transition-colors"
              >
                <span className="font-medium pr-4">{item.question}</span>
                {expandedFAQ === index ? (
                  <ChevronUp className="w-5 h-5 text-purple-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                )}
              </button>
              {expandedFAQ === index && (
                <div className="p-4 pt-0 text-slate-300 text-sm border-t border-slate-700/50 leading-relaxed">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="p-5 border-t border-slate-700/50 bg-slate-800/20">
        <div className="flex items-center justify-between mb-4">
          <span className="text-slate-400 text-sm">Não encontrou o que procura?</span>
          <button
            className="text-purple-400 hover:text-pink-400 text-sm underline transition-colors font-medium"
            onClick={() => window.open('https://discord.gg/neonhost', '_blank')}
          >
            Entre em contato →
          </button>
        </div>
        <button
          className="w-full p-3 border border-slate-600/50 hover:bg-slate-700/30 rounded-lg transition-colors flex items-center justify-center gap-2 text-slate-300 hover:text-white"
          onClick={() => setCurrentView('light')}
        >
          <Search className="w-4 h-4" />
          Alternar para modo claro
        </button>
      </div>
    </div>
  )

  const LightView = () => (
    <div className="bg-white text-gray-900">
      {/* Header with illustration */}
      <div className="relative p-6 bg-gradient-to-br from-purple-100 via-pink-50 to-purple-50 overflow-hidden rounded-t-2xl">
        <img 
          src="/help-illustration.png" 
          alt="Help illustration" 
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
              <HelpCircle className="w-6 h-6 text-white" />
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-600 hover:text-gray-900 p-2 rounded-lg hover:bg-white/30 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Olá! Como podemos ajudar?</h2>
        </div>
      </div>

      {/* Message Section */}
      <div className="p-5">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 mb-4 border border-purple-100">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-purple-600" />
            Envie uma mensagem
          </h3>
          <p className="text-sm text-gray-600 mb-3">Normalmente respondemos em alguns minutos</p>
          <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 px-4 rounded-lg transition-all duration-200 font-medium">
            Iniciar conversa →
          </button>
        </div>

        {/* Status */}
        <div className="flex items-center gap-3 mb-4 p-4 bg-green-50 rounded-xl border border-green-100">
          <CheckCircle className="w-5 h-5 text-green-500" />
          <div>
            <div className="font-medium text-green-800">Status: All Systems Operational</div>
            <div className="text-sm text-green-600">Updated May 28, 14:00 -03</div>
          </div>
        </div>

        {/* Search */}
        <div className="mb-4">
          <h3 className="font-semibold mb-3 flex items-center gap-2">
            <Search className="w-4 h-4 text-purple-600" />
            Qual é a sua dúvida?
          </h3>
          <input
            type="text"
            placeholder="Pesquisar na base de conhecimento..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent mb-3"
          />
        </div>

        {/* FAQ */}
        <div className="space-y-2">
          {filteredFAQ.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-3 hover:bg-purple-50 cursor-pointer transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium pr-2">{item.question}</span>
                <ChevronDown className="w-4 h-4 text-purple-500 flex-shrink-0" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="border-t border-gray-200 p-4 bg-gray-50/50 rounded-b-2xl">
        <div className="flex justify-around">
          <button className="flex flex-col items-center gap-1 text-purple-600 p-2">
            <Home className="w-5 h-5" />
            <span className="text-xs font-medium">Início</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-500 relative p-2">
            <MessageSquare className="w-5 h-5" />
            <span className="text-xs">Mensagens</span>
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 text-white text-xs flex items-center justify-center">
              1
            </span>
          </button>
          <button 
            className="flex flex-col items-center gap-1 text-gray-500 p-2"
            onClick={() => setCurrentView('main')}
          >
            <HelpCircle className="w-5 h-5" />
            <span className="text-xs">Ajuda</span>
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <FloatingButton />
      
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <div className="bg-black/60 absolute inset-0" onClick={() => setIsOpen(false)} />
          <div className="relative w-full max-w-md max-h-[85vh] rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
            {currentView === 'main' ? <MainView /> : <LightView />}
          </div>
        </div>
      )}
    </>
  )
}
