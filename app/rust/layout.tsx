import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Hospedagem de Rust | Host de Rust | Hospedado no Brasil - NeonHost",
  description:
    "Crie seu servidor de Rust para a LATAM. Adicione Carbon ou Oxide..",
  keywords:
    "hospedagem de minecraft normal, host de tibia, hospedagem minecraft, minecraft hosting, pterodactyl, minecraft host, rust, dayz, pixelmon, skyblock",
  openGraph: {
    title: "Hospedagem de Rust | NeonHost",
    description: "Crie seu servidor Rust e suporte completo. A partir de R$ 54,90/mês.",
    images: ["/games/icon.jpeg"],
  },
}

export default function MinecraftLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
