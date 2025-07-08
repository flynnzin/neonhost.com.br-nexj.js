import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Termos de Serviço | NeonHost",
  description: "Termos de Serviço da NeonHost - Hospedagem de Servidores de Jogos",
  robots: "noindex, nofollow",
}

export default function TermosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
