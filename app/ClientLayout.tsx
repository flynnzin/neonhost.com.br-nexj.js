"use client"

import type React from "react"
import { Footer } from "@/components/footer"
import { NavbarComponent } from "@/components/navbar"
import "@/styles/globals.css"
import clsx from "clsx"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default async function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <meta name="google-site-verification" content="hsbqhlsa_EF36270POQ4hf418PvGn0QT3CcCRkw1fRE" />
      <head />
      <body className={clsx("min-h-screen dark text-gray-100 relative", inter.className)}>
        {/* Background com grade diretamente no layout */}
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
          {/* SVG para criar a grade */}
          <svg
            className="absolute inset-0 w-full h-full opacity-10"
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
          >
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#8A2BE2" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>

          {/* Orbes luminosos */}
          <div
            className="absolute top-[20%] left-[15%] w-64 h-64 rounded-full bg-purple-600/20 blur-[80px]"
            style={{
              animation: "pulse 8s infinite alternate",
            }}
          />
          <div
            className="absolute bottom-[10%] right-[10%] w-80 h-80 rounded-full bg-pink-600/20 blur-[100px]"
            style={{
              animation: "pulse 10s infinite alternate-reverse",
            }}
          />
        </div>

        <div className="relative flex flex-col">
          <div className="border-b border-b-gray-700">
            <NavbarComponent />
          </div>
          <main className="bg-[#0a0a0e]">{children}</main>
          <Footer />
        </div>

        {/* Adicionar keyframes para animação */}
        <style jsx global>{`
          @keyframes pulse {
            0% {
              opacity: 0.3;
              transform: scale(1);
            }
            100% {
              opacity: 0.6;
              transform: scale(1.2);
            }
          }
        `}</style>
      </body>
    </html>
  )
}
