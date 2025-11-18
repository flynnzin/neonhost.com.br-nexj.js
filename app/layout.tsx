import type React from "react"
import { Footer } from "@/components/footer"
import { NavbarComponent } from "@/components/navbar"
import { PromoBanner } from "@/components/promo-banner"
import Script from "next/script"
import { siteConfig } from "@/config/site"
import "@/styles/globals.css"
import clsx from "clsx"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"

export const metadata: Metadata = {
  title: {
    default: "Host de Jogos no Brasil | NeonHost",
    template: `%s - ${siteConfig.name}`,
  },
  description:
    "Oferecemos VPS Gamer com processadores AMD Ryzen e proteção Anti DDoS, ideais para servidores de jogos e aplicações de alto desempenho.",
  applicationName: "NeonHost",
  creator: "NeonHost",
  publisher: "NeonHost",
  authors: [{ name: "NeonHost" }],
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  themeColor: "#7c3aed",
  colorScheme: "light",
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    nosnippet: false,
    noarchive: false,
    nocache: false,
    noimageindex: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "hsbqhlsa_EF36270POQ4hf418PvGn0QT3CcCRkw1fRE",
  },
  alternates: {
    canonical: "https://neonhost.com.br",
  },
  keywords: [
    // ... existing keywords ...
  ],
  openGraph: {
    title: "Hospedagem de Jogos no Brasil | NeonHost",
    description:
      "Hospedagem de alto desempenho, com baixa latência, infraestrutura no Brasil, armazenamento NVMe e proteção anti-DDoS para jogos como Minecraft, FiveM e muito mais.",
    url: "https://neonhost.com.br/",
    siteName: "NeonHost",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/NeonHost.png",
        width: 1280,
        height: 630,
        alt: "NeonHost - Hospedagem de Jogos no Brasil",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hospedagem de Jogos no Brasil | NeonHost",
    description:
      "Desempenho superior e segurança com infraestrutura no Brasil. Hospede seus servidores de Minecraft, FiveM e outros jogos com proteção Anti DDoS.",
    site: "@neonhost",
    creator: "@neonhost",
    images: [
      {
        url: "/NeonHost.png",
        width: 1280,
        height: 630,
        alt: "NeonHost - Hospedagem de Jogos no Brasil",
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
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
						(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
						new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
						j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
						'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
						})(window,document,'script','dataLayer','GTM-NLK4RWTG');
					`,
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "NeonHost",
            url: "https://neonhost.com.br",
            description:
              "Hospedagem de jogos no Brasil com VPS Gamer, proteção Anti-DDoS e infraestrutura de alta performance",
            address: {
              "@type": "PostalAddress",
              addressCountry: "BR",
              addressRegion: "SP",
              addressLocality: "São Paulo",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+55-11-99999-9999",
              contactType: "customer service",
              availableLanguage: "Portuguese",
            },
            sameAs: ["https://twitter.com/neonhost", "https://facebook.com/neonhost", "https://instagram.com/neonhost"],
            offers: [
              {
                "@type": "Offer",
                name: "VPS Gamer",
                description: "VPS de alta performance com proteção Anti-DDoS",
                price: "72.90",
                priceCurrency: "BRL",
                availability: "https://schema.org/InStock",
              },
              {
                "@type": "Offer",
                name: "VPS Streaming",
                description: "Servidores com tráfego ilimitado",
                price: "249.90",
                priceCurrency: "BRL",
                availability: "https://schema.org/InStock",
              },
            ],
          }),
        }}
      />
      <head>
        <meta name="google-site-verification" content="hsbqhlsa_EF36270POQ4hf418PvGn0QT3CcCRkw1fRE" />
        <meta name="author" content="NeonHost" />
        <meta name="geo.region" content="BR-SP" />
        <meta name="geo.placename" content="São Paulo, Brasil" />
        <meta name="language" content="pt-BR" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <link rel="canonical" href="https://neonhost.com.br/" />
      </head>
      <body className={clsx("min-h-screen bg-white text-gray-900", inter.className)}>
        <div className="relative flex flex-col">
          <PromoBanner />
          <div className="pt-[40px]">
            <div className="border-b border-b-gray-700">
              <NavbarComponent />
            </div>
            <main className="bg-[#0A0C10]">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  )
}
