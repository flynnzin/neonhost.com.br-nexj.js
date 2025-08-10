"use client"

import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowUpCircle,
  ExternalLink,
  Server,
  Gamepad2,
  HeadphonesIcon,
  Building2,
  Heart,
  Globe,
  Shield,
  Zap,
} from "lucide-react"

export const Footer = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentYear] = useState(new Date().getFullYear())
  const [hoveredSection, setHoveredSection] = useState<string | null>(null)

  // Mostrar botão "voltar ao topo"
  const toggleVisibility = useCallback(() => {
    let ticking = false
    if (!ticking) {
      window.requestAnimationFrame(() => {
        setIsVisible(window.scrollY > 300)
        ticking = false
      })
      ticking = true
    }
  }, [])

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility, { passive: true })
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [toggleVisibility])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  const sections = [
    {
      title: "Servidores",
      icon: <Server className="h-5 w-5 text-purple-600 dark:text-purple-400" />,
      links: [
        { name: "VPS Gamer", url: "/vps-gamer", badge: "Popular" },
        { name: "VPS Brasil", url: "/vps-streaming" },
        { name: "VPS FiveM", url: "/fivem" },
        { name: "Dedicado", url: "/dedicado", badge: "Novo" },
      ],
    },
    {
      title: "Jogos",
      icon: <Gamepad2 className="h-5 w-5 text-pink-600 dark:text-pink-400" />,
      links: [
        { name: "Palworld", url: "/games/palworld", badge: "Novo" },
        { name: "Minecraft", url: "/games/minecraft" },
        { name: "Valheim", url: "/games/valheim" },
        { name: "Project Zomboid", url: "/games/project-zomboid" },
        { name: "Rust", url: "/games/rust" },
      ],
    },
    {
      title: "Suporte",
      icon: <HeadphonesIcon className="h-5 w-5 text-blue-600 dark:text-blue-400" />,
      links: [
        {
          name: "Central de Ajuda",
          url: "https://app.neonhost.com.br/submitticket.php?step=2&deptid=1",
          external: true,
        },
        { name: "Discord", url: "https://discord.gg/rGP7prMqF3", external: true },
        { name: "FAQ", url: "https://suporte.neonhost.com.br/", external: true },
        {
          name: "Reclame aqui",
          url: "https://www.reclameaqui.com.br/empresa/59-630-804-cristopher-leonardo-teixeira-ferreira/",
          external: true,
        },
      ],
    },
    {
      title: "Empresa",
      icon: <Building2 className="h-5 w-5 text-green-600 dark:text-green-400" />,
      links: [
        { name: "Área do Cliente", url: "https://app.neonhost.com.br/login", external: true },
        { name: "Status Rede", url: "https://stats.uptimerobot.com/YJjcBPfgVR", external: true },
        { name: "Sobre Nós", url: "/sobre" },
        {
          name: "Termos de Serviço",
          url: "https://cdn.neonhost.com.br/neonhostinger/Termos-NeonHost.pdf",
          external: true,
        },
      ],
    },
  ]

  const socialLinks = [
    {
      name: "Discord",
      url: "https://discord.gg/rGP7prMqF3",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
          <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      url: "https://instagram.com/neonhostinger",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      url: "https://x.com/neonhost_",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
          <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
        </svg>
      ),
    },
  ]

  const stats = [
    { icon: <Shield className="h-4 w-4" />, value: "99.9%", label: "Uptime" },
    { icon: <Zap className="h-4 w-4" />, value: "24/7", label: "Suporte" },
    { icon: <Globe className="h-4 w-4" />, value: "500+", label: "Clientes" },
  ]

  return (
    <footer className="relative w-full bg-white dark:bg-[#080A0C] border-t border-gray-200 dark:border-gray-800/50 overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Gradientes */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 dark:bg-pink-500/5 rounded-full blur-3xl" />
        </div>

        {/* Grid sutil */}
        <div
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.02]"
          style={{
            backgroundImage: "radial-gradient(circle at 25px 25px, rgba(236, 72, 153, 0.25) 2px, transparent 0)",
            backgroundSize: "50px 50px",
          }}
        />

        {/* Linha animada no topo */}
        <motion.div
          className="absolute top-0 left-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"
          initial={{ width: 0, left: "0%" }}
          animate={{ width: ["0%", "100%", "0%"], left: ["0%", "0%", "100%"] }}
          transition={{ duration: 8, ease: "easeInOut", repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
        />
      </div>

      <div className="relative z-10 w-full mx-auto px-4 sm:px-6 py-12">
        {/* Conteúdo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 max-w-7xl mx-auto">
          {/* Coluna esquerda */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Logo e título */}
            <div className="flex items-center mb-6">
              <motion.div
                className="h-10 w-10 mr-3 relative"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full opacity-80" />
                <div className="absolute inset-1 bg-white dark:bg-[#080A0C] rounded-full" />
                <div className="absolute inset-[3px] bg-gradient-to-br from-pink-500 to-purple-500 rounded-full" />
              </motion.div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 dark:from-pink-400 dark:to-purple-500 bg-clip-text text-transparent">
                neonhost
              </h1>
            </div>

            {/* Sobre nós */}
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <Heart className="h-5 w-5 text-pink-600 dark:text-pink-500" />
                <h2 className="font-medium text-gray-900 dark:text-white relative inline-flex items-center">
                  Sobre nós
                  <span className="absolute -bottom-1 left-0 w-12 h-[2px] bg-gradient-to-r from-pink-500 to-transparent" />
                </h2>
              </div>

              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                Hospedagem de alta performance com suporte 24/7. Servidores otimizados para jogos, aplicações web e VPS
                no Brasil.
              </p>

              {/* Social */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-gray-600 dark:text-gray-400 transition-all duration-300 hover:border-current hover:bg-black/10 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Colunas de links */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sections.map((section, sectionIndex) => (
              <motion.div
                key={sectionIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                onHoverStart={() => setHoveredSection(section.title)}
                onHoverEnd={() => setHoveredSection(null)}
                className="group"
              >
                <div className="flex items-center gap-2 mb-6">
                  <motion.div
                    animate={{
                      scale: hoveredSection === section.title ? 1.1 : 1,
                      rotate: hoveredSection === section.title ? 5 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {section.icon}
                  </motion.div>
                  <h2 className="font-medium text-gray-900 dark:text-white relative inline-flex items-center">
                    {section.title}
                    <motion.span
                      className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-500 dark:to-pink-500"
                      initial={{ width: 0 }}
                      animate={{ width: hoveredSection === section.title ? "100%" : "30%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </h2>
                </div>

                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={linkIndex}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: sectionIndex * 0.1 + linkIndex * 0.05 }}
                    >
                      <Link
                        href={link.url}
                        className="group/link flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-all duration-300"
                        target={"external" in link && link.external ? "_blank" : undefined}
                        rel={"external" in link && link.external ? "noopener noreferrer" : undefined}
                      >
                        <motion.span className="relative flex-1" whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                          {link.name}
                          <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-500 dark:to-pink-500 transition-all duration-300 group-hover/link:w-full" />
                        </motion.span>

                        {"external" in link && link.external && (
                          <ExternalLink className="h-3 w-3 opacity-0 group-hover/link:opacity-70 transition-opacity duration-300" />
                        )}

                        {"badge" in link && link.badge && (
                          <motion.span
                            className="inline-flex items-center rounded-full bg-gradient-to-r from-purple-600/15 to-pink-600/15 dark:from-purple-500/20 dark:to-pink-500/20 px-2 py-0.5 text-xs font-medium text-purple-700 dark:text-purple-400 border border-purple-600/20 dark:border-purple-500/30"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.5 }}
                          >
                            {link.badge}
                          </motion.span>
                        )}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Linha de separação */}
        <motion.div
          className="h-[1px] w-full bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent my-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />

        {/* Rodapé inferior */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-4 max-w-7xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center">
            <div className="h-5 w-5 mr-2 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full opacity-80" />
              <div className="absolute inset-1 bg-white dark:bg-[#080A0C] rounded-full" />
              <div className="absolute inset-[2px] bg-gradient-to-br from-pink-500 to-purple-500 rounded-full" />
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-500">
              © {currentYear} NeonHost. Todos os direitos reservados.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 items-center">
            <div className="flex gap-6">
              {[
                { name: "Privacidade", url: "/" },
                { name: "Termos", url: "/" },
                { name: "Cookies", url: "/" },
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.url}
                  className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-300 transition-colors relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-purple-600 dark:bg-purple-500 transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-500">
              <span>
                Desenvolvido por{" "}
                <a
                  href="https://www.loctor.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 dark:text-pink-500 hover:text-pink-700 dark:hover:text-pink-400 transition-colors"
                >
                  Loctor
                </a>
              </span>

              <span className="hidden md:block">•</span>

              <span>
                CNPJ:{" "}
                <a
                  href="https://www.neonhost.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 dark:text-pink-500 hover:text-pink-700 dark:hover:text-pink-400 transition-colors"
                >
                  59.630.804/0001-17
                </a>
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Back to top */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg z-50 group"
            initial={{ opacity: 0, y: 10, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Voltar ao topo"
          >
            <ArrowUpCircle className="h-5 w-5 text-white group-hover:animate-bounce" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  )
}
