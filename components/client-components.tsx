"use client"
import { useState, useCallback } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FAQQuestion {
  question: string
  answer: string
  category: string
  categoryColor: string
  icon: any
}

interface ClientComponentsProps {
  faqQuestions: FAQQuestion[]
}

function FAQItem({
  faq,
  index,
  isExpanded,
  onToggle,
}: { faq: FAQQuestion; index: number; isExpanded: boolean; onToggle: () => void }) {
  const IconComponent = faq.icon
  return (
    <div className="border border-gray-200 rounded-xl bg-gray-50 backdrop-blur-sm">
      <button
        className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-inset rounded-xl"
        onClick={onToggle}
        aria-expanded={isExpanded}
        aria-controls={`faq-answer-${index}`}
      >
        <span className="text-gray-900 font-medium pr-4">{faq.question}</span>
        {isExpanded ? (
          <ChevronUp className="h-5 w-5 text-purple-600 flex-shrink-0" aria-hidden="true" />
        ) : (
          <ChevronDown className="h-5 w-5 text-purple-600 flex-shrink-0" aria-hidden="true" />
        )}
      </button>
      {isExpanded && (
        <div id={`faq-answer-${index}`} className="px-6 pb-6">
          <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
          {faq.category && (
            <div
              className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium mt-3 ${faq.categoryColor}`}
            >
              <IconComponent className="h-4 w-4 mr-1" aria-hidden="true" />
              {faq.category}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export function ClientComponents({ faqQuestions }: ClientComponentsProps) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const handleFaqToggle = useCallback((index: number) => {
    setExpandedFaq((prev) => (prev === index ? null : index))
  }, [])

  return (
    <>
      {/* FAQ Section */}
      <section className="relative py-20 px-4 z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Perguntas{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Frequentes
              </span>
            </h2>
            <p className="text-xl text-gray-600">Tire suas dúvidas sobre nossos serviços de hospedagem</p>
          </div>
          <div className="space-y-4">
            {faqQuestions.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                index={index}
                isExpanded={expandedFaq === index}
                onToggle={() => handleFaqToggle(index)}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
