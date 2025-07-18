import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Servidor Minecraft | Hospedagem Premium - NeonHost",
  description:
    "Hospedagem de servidores Minecraft com modpacks automáticos, backup diário e suporte 24/7. Planos a partir de R$ 13,90. Vanilla, Forge, Paper, Bedrock e muito mais.",
  keywords:
    "minecraft, servidor minecraft, hospedagem minecraft, modpacks, vanilla, forge, paper, bedrock, pixelmon, skyblock",
  openGraph: {
    title: "Servidor Minecraft Premium | NeonHost",
    description: "Crie seu servidor Minecraft com modpacks automáticos e suporte completo. A partir de R$ 13,90/mês.",
    images: ["/games/minecraft.webp"],
  },
}

export default function MinecraftLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
