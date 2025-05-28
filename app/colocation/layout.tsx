import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Colocation - Hospede seus Servidores | NeonHost",
  description:
    "Serviços de colocation profissional no Brasil. Data center seguro, conectividade premium e suporte 24/7 para seus servidores físicos.",
  keywords: "colocation, data center, hospedagem servidores, rack, brasil, neonhost",
  openGraph: {
    title: "Colocation - Hospede seus Servidores | NeonHost",
    description:
      "Serviços de colocation profissional no Brasil. Data center seguro, conectividade premium e suporte 24/7.",
    type: "website",
  },
}

export default function ColocationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
