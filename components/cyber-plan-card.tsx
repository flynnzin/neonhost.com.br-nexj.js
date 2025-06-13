"use client"

import { useState, useEffect } from "react"
import { Button } from "@nextui-org/react"
import { MemoryStickIcon, Cpu, HardDrive, Shield, Zap } from "lucide-react"
import Link from "next/link"

interface CyberPlanCardProps {
  name: string
  ram: string
  cores: string
  ssd: string
  price: string
  link: string | null
  additionalFeatures?: string[]
  popular?: boolean
  index: number
}

export function CyberPlanCard({
  name,
  ram,
  cores,
  ssd,
  price,
  link,
  additionalFeatures = [],
  popular = false,
  index,
}: CyberPlanCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, index * 200) // Staggered animation

    return () => clearTimeout(timer)
  }, [index])

  // Calculate RAM percentage for visual representation (assuming max is 16GB)
  const ramValue = Number.parseInt(ram.replace(/[^0-9]/g, ""))
  const ramPercentage = Math.min((ramValue / 16) * 100, 100)

  // Calculate cores percentage (assuming max is 8 cores)
  const coresValue = Number.parseInt(cores.replace(/[^0-9]/g, ""))
  const coresPercentage = Math.min((coresValue / 8) * 100, 100)

  // Calculate SSD percentage (assuming max is 100GB)
  const ssdValue = Number.parseInt(ssd.replace(/[^0-9]/g, ""))
  const ssdPercentage = Math.min((ssdValue / 100) * 100, 100)

  return (
    <div
      className={`transform transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
    >
      <div
        className={`relative overflow-hidden ${
          isHovered ? "scale-[1.02]" : "scale-100"
        } transition-all duration-500 ease-out`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background with clip-path */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${
            popular
              ? "from-purple-900/80 via-purple-800/60 to-pink-900/80"
              : "from-gray-900/90 via-gray-800/70 to-gray-900/90"
          } backdrop-blur-xl transition-all duration-500`}
        ></div>

        {/* Animated border */}
        <div
          className={`absolute inset-0 bg-gradient-to-r ${
            isHovered
              ? "from-purple-500 via-pink-500 to-purple-500"
              : popular
                ? "from-purple-700 via-pink-700 to-purple-700"
                : "from-gray-700 via-gray-600 to-gray-700"
          } opacity-30 transition-all duration-500`}
          style={{
            clipPath:
              "polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 0, 2px 2px, 2px calc(100% - 2px), calc(100% - 2px) calc(100% - 2px), calc(100% - 2px) 2px, 2px 2px)",
          }}
        ></div>

        {/* Glowing corner accents */}
        <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-purple-500 opacity-80"></div>
        <div className="absolute top-0 right-0 w-10 h-10 border-t-2 border-r-2 border-pink-500 opacity-80"></div>
        <div className="absolute bottom-0 left-0 w-10 h-10 border-b-2 border-l-2 border-pink-500 opacity-80"></div>
        <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-purple-500 opacity-80"></div>

        {/* Popular badge */}
        {popular && (
          <div className="absolute -top-5 -right-5 rotate-12">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 blur-md opacity-70"></div>
              <div className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-8 py-2 transform rotate-45">
                POPULAR
              </div>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="relative p-8 z-10">
          {/* Header */}
          <div className="flex justify-between items-start mb-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2 flex items-center">
                <span className="mr-2">{name}</span>
                {popular && (
                  <span className="inline-flex items-center px-2 py-1 rounded-md bg-purple-500/20 text-purple-300 text-xs">
                    Recomendado
                  </span>
                )}
              </h3>
              <div className="text-gray-400 text-sm">Ideal para servidores FiveM</div>
            </div>
            <div className="text-right">
              <div className="text-sm text-gray-400">a partir de</div>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                R${price}
              </div>
              <div className="text-xs text-gray-400">por mês</div>
            </div>
          </div>

          {/* Specs with visual indicators */}
          <div className="space-y-6 mb-8">
            {/* RAM */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <MemoryStickIcon className="w-5 h-5 text-purple-400 mr-2" />
                  <span className="text-gray-300">Memória RAM</span>
                </div>
                <span className="text-white font-bold">{ram}</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-1000 ease-out"
                  style={{ width: `${ramPercentage}%` }}
                ></div>
              </div>
            </div>

            {/* CPU */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <Cpu className="w-5 h-5 text-purple-400 mr-2" />
                  <span className="text-gray-300">CPU Cores</span>
                </div>
                <span className="text-white font-bold">{cores}</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-1000 ease-out"
                  style={{ width: `${coresPercentage}%` }}
                ></div>
              </div>
            </div>

            {/* SSD */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <HardDrive className="w-5 h-5 text-purple-400 mr-2" />
                  <span className="text-gray-300">SSD NVMe</span>
                </div>
                <span className="text-white font-bold">{ssd}</span>
              </div>
              <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-1000 ease-out"
                  style={{ width: `${ssdPercentage}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="mb-8">
            <div className="grid grid-cols-2 gap-3">
              {additionalFeatures.slice(0, 4).map((feature, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="mt-1 mr-2 text-green-400">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M20 6L9 17L4 12"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-300">{feature}</span>
                </div>
              ))}
            </div>

            {additionalFeatures.length > 4 && (
              <div className="mt-2 text-xs text-purple-400">+{additionalFeatures.length - 4} recursos adicionais</div>
            )}
          </div>

          {/* CTA Button */}
          <div>
            <Link href={link || "#"} passHref>
              <Button
                className={`w-full relative overflow-hidden group ${
                  isHovered
                    ? "bg-gradient-to-r from-purple-600 to-pink-600"
                    : "bg-gradient-to-r from-purple-800 to-pink-800"
                } text-white font-medium py-6 border-0 rounded-md transition-all duration-500`}
                size="lg"
              >
                <span className="relative z-10">Contratar Agora</span>
                <span className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>

                {/* Animated particles on hover */}
                {isHovered && (
                  <>
                    <span className="absolute top-0 left-[10%] w-1 h-1 bg-white rounded-full animate-ping"></span>
                    <span
                      className="absolute top-0 left-[30%] w-1 h-1 bg-white rounded-full animate-ping"
                      style={{ animationDelay: "0.3s" }}
                    ></span>
                    <span
                      className="absolute top-0 left-[50%] w-1 h-1 bg-white rounded-full animate-ping"
                      style={{ animationDelay: "0.1s" }}
                    ></span>
                    <span
                      className="absolute top-0 left-[70%] w-1 h-1 bg-white rounded-full animate-ping"
                      style={{ animationDelay: "0.7s" }}
                    ></span>
                    <span
                      className="absolute top-0 left-[90%] w-1 h-1 bg-white rounded-full animate-ping"
                      style={{ animationDelay: "0.5s" }}
                    ></span>
                  </>
                )}
              </Button>
            </Link>
          </div>

          {/* Floating icons */}
          <div className="absolute -bottom-4 -left-4 opacity-10">
            <Shield className="w-20 h-20 text-purple-300" />
          </div>
          <div className="absolute -top-4 -right-4 opacity-10">
            <Zap className="w-20 h-20 text-pink-300" />
          </div>
        </div>
      </div>
    </div>
  )
}
