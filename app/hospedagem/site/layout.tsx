import type React from "react"
import "@/styles/globals.css"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"

export const metadata: Metadata = {
  title: {
    default: "Hospedagem de Sites | Hospedagem Web Profissional | NeonHost",
    template: "%s | NeonHost",
  },
  description:
    "Hospedagem de sites profissional com SSL grátis, backup automático e suporte 24/7. Ideal para WordPress, e-commerce e sites corporativos.",
  keywords: [
    "hospedagem de sites",
    "hospedagem web",
    "hosting",
    "WordPress hosting",
    "hospedagem WordPress",
    "SSL grátis",
    "backup automático",
    "cPanel",
    "hospedagem profissional",
    "site hosting",
    "web hosting Brasil",
    "hospedagem barata",
    "hospedagem confiável",
    "e-commerce hosting",
    "loja virtual",
    "hospedagem PHP",
    "MySQL hosting",
    "email profissional",
    "domínio grátis",
    "certificado SSL",
    "CDN grátis",
    "uptime 99.9%",
    "suporte 24/7",
    "migração grátis",
    "construtor de sites",
    "one-click install",
    "WordPress otimizado",
    "hospedagem SSD",
    "hospedagem rápida",
    "NeonHost",
    "BrasilFivemHost",
    "fivemhost",
    "Fivem Host",
    "bbhost",
    "BBHost",
    "BBHOST",
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
  ],

  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://neonhost.com.br/hospedagem/site",
    title: "Hospedagem de Sites | Hospedagem Web Profissional | NeonHost",
    description:
      "Hospedagem de sites profissional com SSL grátis, backup automático e suporte 24/7. Ideal para WordPress, e-commerce e sites corporativos.",
    siteName: "NeonHost",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "NeonHost - Hospedagem de Sites",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Hospedagem de Sites | NeonHost",
    card: "summary_large_image",
    description:
      "Hospedagem de sites profissional com SSL grátis, backup automático e suporte 24/7. Ideal para WordPress, e-commerce e sites corporativos.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://neonhost.com.br/hospedagem/site",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

const inter = Inter({ subsets: ["latin"] })

export default function HospedagemSiteLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
