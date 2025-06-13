"use client"

import { useState } from "react"
import { Button } from "@nextui-org/react"
import { ChevronDown, ChevronUp, MemoryStickIcon as Memory, Cpu, HardDrive } from "lucide-react"
import Link from "next/link"

interface PlanCardProps {
  name: string
  ram: string
  cores: string
  ssd: string
  price: string
  link: string | null
  additionalFeatures?: string[]
  popular?: boolean
}

export function PlanCard({
  name,
  ram,
  cores,
  ssd,
  price,
  link,
  additionalFeatures = [],
  popular = false,
}: PlanCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div
      className={`relative rounded-2xl bg-[#1a1a24] border ${
        popular ? "border-purple-500/50" : "border-white/10"
      } transition-all duration-300 overflow-hidden group`}
    >
      {popular && (
        <div className="absolute top-0 right-0">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-4 py-1 rounded-bl-lg rounded-tr-lg">
            POPULAR
          </div>
        </div>
      )}

      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 hover:bg-purple-500/30 transition-colors"
            >
              {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>
            <h3 className="text-xl font-bold text-white">{name}</h3>
          </div>
          <div className="text-2xl font-bold text-white">R${price}</div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center mb-2 text-purple-400">
              <Memory size={20} />
            </div>
            <div className="text-lg font-bold text-white">{ram}</div>
            <div className="text-xs text-gray-400">Memória RAM</div>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center mb-2 text-purple-400">
              <Cpu size={20} />
            </div>
            <div className="text-lg font-bold text-white">{cores}</div>
            <div className="text-xs text-gray-400">CPU Cores</div>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center mb-2 text-purple-400">
              <HardDrive size={20} />
            </div>
            <div className="text-lg font-bold text-white">{ssd}</div>
            <div className="text-xs text-gray-400">SSD NVMe</div>
          </div>
        </div>

        {isExpanded && additionalFeatures.length > 0 && (
          <div className="mt-4 pt-4 border-t border-white/10">
            <h4 className="text-sm font-medium text-gray-300 mb-2">Recursos inclusos:</h4>
            <ul className="space-y-2">
              {additionalFeatures.map((feature, index) => (
                <li key={index} className="flex items-center text-sm text-gray-400">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-6">
          <Link href={link || "#"} passHref>
            <Button
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium py-6 rounded-xl hover:opacity-90 transition-opacity"
              size="lg"
            >
              Contratar Agora
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
