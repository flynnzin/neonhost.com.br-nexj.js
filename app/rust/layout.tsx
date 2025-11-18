import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Host de Rust | Host de Rust | Hospedado no Brasil - NeonHost",
  description:
    "Crie seu servidor de Rust para a LATAM. Adicione Carbon ou Oxide..",
  keywords:
    "hospedagem de minecraft normal, host de tibia, hospedagem minecraft, minecraft hosting, pterodactyl, minecraft host, rust, dayz, pixelmon, skyblock, wipe automatico, servidor de rust, servidor rust, host rust, hospedagem rust, servidor de dayz, host de dayz, hospedagem de dayz, servidor de pixelmon, host de pixelmon, hospedagem de pixelmon, rust hosting, dayz hosting, pixelmon hosting",
  openGraph: {
    title: "Hospedagem de Rust | NeonHost",
    description: "Crie seu servidor Rust e suporte completo. A partir de R$ 54,90/mês.",
  },
}

export default function MinecraftLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
