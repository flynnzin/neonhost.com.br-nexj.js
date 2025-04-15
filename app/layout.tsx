import type React from "react"
import { Footer } from "@/components/footer"
import { NavbarComponent } from "@/components/navbar"
import { siteConfig } from "@/config/site"
import "@/styles/globals.css"
import clsx from "clsx"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import AnimatedBackground from "@/components/animated-background"

export const metadata: Metadata = {
  title: {
    default: "Hospedagem de Jogos no Brasil | NeonHost",
    template: `%s - ${siteConfig.name}`,
  },
  description:
    "Oferecemos VPS Neon com processadores AMD Ryzen e proteção Anti DDoS, ideais para servidores de jogos e aplicações de alto desempenho.",
  keywords: [
    "NeonHost",
    "WyzeHost",
    "TynaHost",
    "Hostinger",
    "DokeHost",
    "HeavyHost",
    "OminiHost",
    "BH Servers",
    "Ultahost",
    "KnownHost",
    "Linode",
    "DigitalOcean",
    "Azure",
    "Namecheap",
    "NetEarthOne",
    "FlameHost",
    "RazeHost",
    "Loding Hosting",
    "Nice Hosting",
    "VPS Neon",
    "VPS Brasil",
    "Proteção Anti DDoS",
    "servidor de Minecraft",
    "servidor de FiveM",
    "servidor de Rust",
    "hospedagem de jogos no Brasil",
    "servidor dedicado para jogos",
    "servidor de ARK",
    "servidor de Satisfactory",
    "VPS para jogos",
    "servidores dedicados Brasil",
    "gaming VPS",
    "FiveM VPS",
    "Minecraft VPS",
    "VPS com NVMe",
    "servidor de Counter Strike",
    "servidor de CS:GO",
    "servidor de GTA RP",
    "servidor de Unturned",
    "VPS Linux",
    "VPS Windows",
    "servidor com proteção DDoS",
    "cloud gaming",
    "hospedagem de jogos multiplayer",
    "servidor dedicado gamer",
    "servidor de Minecraft Brasil",
    "VPS com alta performance",
    "VPS barato",
    "VPS para trading",
    "servidor dedicado NVMe",
    "cloud hosting",
    "FlameHost",
    "RazeHost",
    "Loding Hosting",
    "Nice Hosting",
    "Hostzone",
    "Hostinger",
    "HeavyHost",
    "BH Servers",
    "Ultahost",
    "KnownHost",
    "Linode",
    "DigitalOcean",
    "Azure",
    "Namecheap",
    "NetEarthOne",
    "FlameHost",
    "RazeHost",
    "Loding Hosting",
    "Nice Hosting",
    "VPS Neon",
    "VPS Brasil",
    "Proteção Anti DDoS",
    "servidor de Minecraft",
    "servidor de FiveM",
    "servidor de Rust",
    "hospedagem de jogos no Brasil",
    "servidor dedicado para jogos",
    "servidor de ARK",
    "servidor de Satisfactory",
    "VPS para jogos",
    "servidores dedicados Brasil",
    "gaming VPS",
    "FiveM VPS",
    "Minecraft VPS",
    "VPS com NVMe",
    "servidor de Counter Strike",
    "servidor de CS:GO",
    "servidor de GTA RP",
    "servidor de Unturned",
    "VPS Linux",
    "VPS Windows",
    "servidor com proteção DDoS",
    "cloud gaming",
    "hospedagem de jogos multiplayer",
    "servidor dedicado gamer",
    "servidor de Minecraft Brasil",
    "VPS com alta performance",
    "VPS barato",
    "VPS para trading",
    "servidor dedicado NVMe",
    "cloud hosting",
    "cache externo",
    "cache externo fivem",
    "cache externo gtarp",
    "cache-externo",
    "cache-externo fivem",
    "cache-externo gtarp",
    "cache-externo vps",
    "cache-externo vps gamer",
    "cache externo vps",
    "cache externo vps gamer",
    "cache externo redm",
    "cache externo rd2",
    "host de redm",
    "vps redm",
    "vps rd2",
    "Vps Redm",
  ],

  openGraph: {
    title: "Hospedagem de Jogos no Brasil | NeonHost",
    description:
      "Hospedagem de alto desempenho, com baixa latência, infraestrutura no Brasil, armazenamento NVMe e proteção anti-DDoS para jogos como Minecraft, FiveM e muito mais.",
    url: "https://neonhost.com.br/",
    siteName: "NeonHost",
    images: [
      {
        url: "/favicon.ico",
        // width: 1200,
        // height: 630,
        alt: "NeonHost - Servidores Dedicados",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hospedagem de Jogos no Brasil | NeonHost",
    description:
      "Desempenho superior e segurança com infraestrutura no Brasil. Hospede seus servidores de Minecraft, FiveM e outros jogos com proteção Anti DDoS.",
    images: [
      {
        url: "/favicon.ico",
        // width: 1200,
        // height: 630,
        alt: "NeonHost - Servidores Dedicados",
      },
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

const inter = Inter({ subsets: ["latin"] })

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <meta name="google-site-verification" content="hsbqhlsa_EF36270POQ4hf418PvGn0QT3CcCRkw1fRE" />
      <head />
      <body className={clsx("min-h-screen dark text-gray-100 relative", inter.className)}>
        <AnimatedBackground />
        <div className="relative flex flex-col">
          <div className="border-b border-b-gray-700">
            <NavbarComponent />
          </div>
          <main className="bg-[#0a0a0e]">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
