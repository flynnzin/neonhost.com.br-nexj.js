import React from "react"
import { Button } from "@nextui-org/react"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

interface FeatureSectionProps {
  title: string
  description: string
  badge: string
  speedBadge?: string
  protectionBadge?: string
  benefits: string[]
  ctaText?: string
  ctaLink?: string
  icon?: React.ReactNode
  isReversed?: boolean
  hasChart?: boolean
  hasIpComparison?: boolean
}

export function FeatureSection({
  title,
  description,
  badge,
  speedBadge,
  protectionBadge,
  benefits,
  ctaText,
  ctaLink,
  icon,
  isReversed = false,
  hasChart = false,
  hasIpComparison = false,
}: FeatureSectionProps) {
  return (
    <div
      className={`flex flex-col ${
        isReversed ? "lg:flex-row-reverse" : "lg:flex-row"
      } gap-8 lg:gap-16 items-center mb-24`}
    >
      {/* Conteúdo */}
      <div className="flex-1">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 dark:bg-purple-900/20 border border-purple-500/20 dark:border-purple-800/30 text-purple-400 dark:text-purple-300 text-sm font-medium mb-4">
          {icon && <div className="mr-2">{icon}</div>}
          {badge}
          {speedBadge && (
            <span className="ml-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">{speedBadge}</span>
          )}
          {protectionBadge && (
            <span className="ml-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-bold">
              {protectionBadge}
            </span>
          )}
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-8">{description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
            </div>
          ))}
        </div>

        {ctaText && ctaLink && (
          <Link href={ctaLink}>
            <Button
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium px-6 py-2 rounded-lg hover:opacity-90 transition-all"
              endContent={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              }
            >
              {ctaText}
            </Button>
          </Link>
        )}
      </div>

      {/* Visual */}
      <div className="flex-1">
        {hasChart && (
          <div className="bg-white/5 dark:bg-gray-800/50 backdrop-blur-sm border border-white/10 dark:border-gray-700 rounded-2xl p-6 overflow-hidden">
            <div className="aspect-[4/3] relative">
              {/* Gráfico simulado */}
              <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 gap-1">
                {/* Linhas de grade */}
                {Array.from({ length: 7 }).map((_, i) => (
                  <div
                    key={`h-${i}`}
                    className="absolute left-0 right-0 border-t border-gray-200/10 dark:border-gray-700/10"
                    style={{ top: `${(i * 100) / 6}%` }}
                  ></div>
                ))}
                {Array.from({ length: 13 }).map((_, i) => (
                  <div
                    key={`v-${i}`}
                    className="absolute top-0 bottom-0 border-l border-gray-200/10 dark:border-gray-700/10"
                    style={{ left: `${(i * 100) / 12}%` }}
                  ></div>
                ))}

                {/* Linha de proteção */}
                <div className="absolute top-0 bottom-0 border-l-2 border-blue-500/70 dark:border-blue-400/70 left-[80%]"></div>

                {/* Pontos de ataque (vermelho) */}
                <div className="absolute w-3 h-3 bg-red-500 rounded-full" style={{ top: "40%", left: "60%" }}></div>
                <div className="absolute w-3 h-3 bg-red-500 rounded-full" style={{ top: "60%", left: "75%" }}></div>

                {/* Pontos de tráfego normal (verde) */}
                <div className="absolute w-3 h-3 bg-green-500 rounded-full" style={{ top: "30%", left: "50%" }}></div>
                <div className="absolute w-3 h-3 bg-green-500 rounded-full" style={{ top: "20%", left: "90%" }}></div>
              </div>

              {/* Legenda */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-600 dark:text-gray-400 px-2">
                <span>Tráfego</span>
                <span>Proteção</span>
              </div>
            </div>
          </div>
        )}

        {hasIpComparison && (
          <div className="bg-gray-100 dark:bg-[#111827] backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden">
            <div className="p-4 bg-gray-200 dark:bg-[#1f2937] text-center text-gray-500 dark:text-gray-400 text-sm">Antes:</div>
            <div className="p-6 text-center font-mono text-lg text-gray-800 dark:text-gray-300">192.168.1.254:30120</div>

            <div className="p-4 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/50 dark:to-pink-900/50 text-center text-purple-600 dark:text-purple-300 text-sm">
              Depois:
            </div>
            <div className="p-6 text-center font-mono text-lg bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              cidadealta.redmbr.com
            </div>
          </div>
        )}

        {!hasChart && !hasIpComparison && (
          <div className="bg-gray-50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 rounded-2xl p-6 flex items-center justify-center">
            <div className="text-center">
              <div className="inline-block p-6 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 mb-4">
                {icon ? (
                  React.cloneElement(icon as React.ReactElement, {
                    className: "w-16 h-16 text-purple-400",
                  })
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-purple-400"
                  >
                    <path d="M12 2v20"></path>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                )}
              </div>
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{description.split(".")[0]}.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
