import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Redes - Infraestrutura de Rede Premium | NeonHost",
  description:
    "Conheça nossa infraestrutura de rede premium com conectividade global, baixa latência e alta disponibilidade. Datacenters estrategicamente localizados.",
  keywords: "rede, infraestrutura, datacenter, conectividade, latência, bandwidth, fibra óptica",
  openGraph: {
    title: "Redes - Infraestrutura de Rede Premium | NeonHost",
    description:
      "Conheça nossa infraestrutura de rede premium com conectividade global, baixa latência e alta disponibilidade.",
    type: "website",
  },
}

export default function RedesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="min-h-screen bg-black">{children}</div>
}
