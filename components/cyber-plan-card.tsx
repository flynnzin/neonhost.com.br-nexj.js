"use client"

import { useState, useEffect } from "react"
import { Button } from "@nextui-org/react"
import { MemoryStickIcon, Cpu, HardDrive, Wifi, Check, Info } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

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
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, index * 100)

    return () => clearTimeout(timer)
  }, [index])

  return (
    <div
      className={`transform transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="relative bg-gradient-to-br from-white to-purple-50 dark:from-gray-900 dark:to-purple-900/50 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 hover:border-purple-300 dark:hover:border-purple-600 hover:shadow-lg transition-all duration-300 group">
        {/* Popular badge */}
        {popular && (
          <div className="absolute -top-3 left-6">
            <span className="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">POPULAR</span>
          </div>
        )}

        <div className="mb-4 flex items-center">
                    <Image src="/amd.webp" alt="AMD" width={64} height={24} className="object-contain mr-4 dark:hidden" />
          <Image src="/amd-light.webp" alt="AMD" width={64} height={24} className="object-contain mr-4 hidden dark:block" />
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{name}</h3>
            <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">
              {popular ? "Plano mais escolhido" : "Disponível agora"}
            </p>
          </div>
        </div>

        {/* Price */}
        <div className="mb-6">
          <div className="flex items-baseline">
            <span className="text-3xl font-bold text-purple-600 dark:text-purple-400">R$ {price}</span>
            <span className="text-gray-500 dark:text-gray-400 ml-1">/mês</span>
          </div>
        </div>

        {/* Specifications */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center p-3 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
            <div className="p-2 bg-purple-100 dark:bg-purple-900/50 rounded-lg mr-3">
              <Cpu className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <div className="text-xs text-gray-500 dark:text-gray-400">CPU</div>
              <div className="font-semibold text-gray-900 dark:text-white">{cores}</div>
            </div>
          </div>

          <div className="flex items-center p-3 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
            <div className="p-2 bg-purple-100 dark:bg-purple-900/50 rounded-lg mr-3">
              <MemoryStickIcon className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <div className="text-xs text-gray-500 dark:text-gray-400">RAM</div>
              <div className="font-semibold text-gray-900 dark:text-white">{ram}</div>
            </div>
          </div>

          <div className="relative group/storage flex items-center p-3 bg-purple-50 dark:bg-purple-900/30 rounded-lg cursor-help hover:bg-purple-100 dark:hover:bg-purple-900/50 transition-colors">
            <div className="p-2 bg-purple-100 dark:bg-purple-900/50 rounded-lg mr-3">
              <HardDrive className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="flex-1">
              <div className="text-xs text-gray-500 dark:text-gray-400">Disco</div>
              <div className="font-semibold text-gray-900 dark:text-white flex items-center gap-1">
                {ssd}
                <Info className="w-3 h-3 text-purple-500" />
              </div>
            </div>
            {/* Custom tooltip using Tailwind */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white text-sm font-semibold rounded-lg shadow-lg whitespace-nowrap opacity-0 group-hover/storage:opacity-100 transition-opacity duration-200 pointer-events-none">
              Cada GB adicional será cobrado R$ 1,00
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-purple-700"></div>
            </div>
          </div>

          <div className="flex items-center p-3 bg-purple-50 dark:bg-purple-900/30 rounded-lg">
            <div className="p-2 bg-purple-100 dark:bg-purple-900/50 rounded-lg mr-3">
              <Wifi className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <div className="text-xs text-gray-500 dark:text-gray-400">Rede</div>
              <div className="font-semibold text-gray-900 dark:text-white">1Gbps</div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-3 mb-8">
          {additionalFeatures.slice(0, 6).map((feature, idx) => (
            <div key={idx} className="flex items-center">
              <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
              <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Link href={link || "#"} className="block">
          <Button className="w-full bg-purple-100 dark:bg-purple-900/50 hover:bg-purple-200 dark:hover:bg-purple-900 text-purple-700 dark:text-purple-300 font-semibold py-3 rounded-lg transition-all duration-200 group-hover:bg-purple-600 group-hover:text-white">
            <span className="flex items-center justify-center">
              <span>Contratar agora!</span>
            </span>
          </Button>
        </Link>
      </div>
    </div>
  )
}
