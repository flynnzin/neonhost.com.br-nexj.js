"use client"

import { useState, useEffect } from "react"
import { X, Cookie, ChevronDown, ChevronUp } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false,
  })

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      if ("requestIdleCallback" in window) {
        requestIdleCallback(() => setShowConsent(true))
      } else {
        setShowConsent(true)
      }
    }
  }, [])

  const acceptAll = () => {
    const allPreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    }
    setCookiePreferences(allPreferences)
    saveConsent(allPreferences)
  }

  const acceptNecessary = () => {
    saveConsent(cookiePreferences)
  }

  const saveConsent = (preferences: typeof cookiePreferences) => {
    localStorage.setItem("cookie-consent", JSON.stringify(preferences))
    setShowConsent(false)
    console.log("Preferências de cookies salvas:", preferences)
  }

  const toggleExpanded = () => {
    setExpanded(!expanded)
  }

  const handlePreferenceChange = (key: keyof typeof cookiePreferences) => {
    if (key === "necessary") return
    setCookiePreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  return (
    <AnimatePresence>
      {showConsent && (
        <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:bottom-4 md:max-w-md z-50">
          {/* Conteúdo principal fora da animação para melhorar o LCP */}
          <p className="sr-only">
            Usamos cookies para melhorar sua experiência em nosso site. Eles nos ajudam a entender como você interage com nossos serviços de hospedagem VPS e servidores de jogos.
          </p>

          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-[#121212] border border-purple-700/30 rounded-xl shadow-md overflow-hidden"
          >
            <div className="p-4 md:p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <Cookie className="h-6 w-6 text-purple-500 mr-2" />
                  <h3 className="text-lg font-bold text-white">Cookies da Neon Host</h3>
                </div>
                <button
                  onClick={() => setShowConsent(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <p className="text-gray-300 mb-4">
                Usamos cookies para melhorar sua experiência em nosso site. Eles nos ajudam a entender como você interage com nossos serviços de hospedagem VPS e servidores de jogos.
              </p>

              <div className="mb-4">
                <button
                  onClick={toggleExpanded}
                  className="flex items-center justify-between w-full text-sm text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <span>Personalizar preferências</span>
                  {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>

                <AnimatePresence>
                  {expanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-3 space-y-3 overflow-hidden"
                    >
                      {Object.entries({
                        necessary: "Necessários (não podem ser desativados)",
                        analytics: "Análise (nos ajudam a melhorar)",
                        marketing: "Marketing (anúncios personalizados)",
                        preferences: "Preferências (salvam suas configurações)",
                      }).map(([key, label]) => (
                        <div key={key} className="flex items-center justify-between">
                          <span className="text-sm text-gray-300">{label}</span>
                          <label className="relative inline-flex items-center cursor-pointer">
                            <input
                              type="checkbox"
                              className="sr-only peer"
                              checked={cookiePreferences[key as keyof typeof cookiePreferences]}
                              onChange={() => handlePreferenceChange(key as keyof typeof cookiePreferences)}
                              disabled={key === "necessary"}
                            />
                            <div
                              className={`w-11 h-6 rounded-full peer ${
                                key === "necessary"
                                  ? "bg-purple-700 opacity-50"
                                  : cookiePreferences[key as keyof typeof cookiePreferences]
                                  ? "bg-purple-600"
                                  : "bg-gray-700"
                              } peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-purple-400 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all`}
                            ></div>
                          </label>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <button
                  onClick={acceptAll}
                  className="flex-1 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md font-medium transition-colors"
                >
                  Aceitar todos
                </button>
                <button
                  onClick={acceptNecessary}
                  className="flex-1 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-md font-medium border border-gray-700 transition-colors"
                >
                  Aceitar necessários
                </button>
              </div>
            </div>

            <div className="px-4 py-2 bg-purple-900/20 border-t border-purple-700/30">
              <p className="text-xs text-gray-400 text-center">
                Ao clicar em "Aceitar todos", você concorda com o uso de cookies para melhorar a navegação, analisar o uso do site e auxiliar em nossos esforços de marketing.
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
