import type React from "react"
import { Button } from "@nextui-org/react"
import { CheckCircle } from "lucide-react"
import Link from "next/link"

interface FeatureCardProps {
  title: string
  description: string
  badge?: string
  speedBadge?: string
  protectionBadge?: string
  benefits: string[]
  ctaText?: string
  ctaLink?: string
  icon?: React.ReactNode
  className?: string
}

export function FeatureCard({
  title,
  description,
  badge,
  speedBadge,
  protectionBadge,
  benefits,
  ctaText,
  ctaLink,
  icon,
  className = "",
}: FeatureCardProps) {
  return (
    <div className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 h-full ${className}`}>
      <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-4">
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

      <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400 mb-6 text-sm md:text-base">{description}</p>

      <div className="grid grid-cols-1 gap-3 mb-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start">
            <CheckCircle className="h-5 w-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-gray-300 text-sm">{benefit}</span>
          </div>
        ))}
      </div>

      {ctaText && ctaLink && (
        <Link href={ctaLink}>
          <Button
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium px-6 py-2 rounded-lg hover:opacity-90 transition-all w-full"
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
  )
}
