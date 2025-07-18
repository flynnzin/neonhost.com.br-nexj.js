"use client"

import { Button } from "@nextui-org/button"
import { Navbar, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuToggle } from "@nextui-org/navbar"
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react"
import {
  Gamepad2,
  GlobeLock,
  Handshake,
  Cloud,
  Globe,
  LayoutGrid,
  ShieldCheck,
  Network,
  ServerCrash,
  BarChartIcon as ChartNetwork,
  Box,
} from "lucide-react"
import Image from "next/image"
import { default as Link, default as NextLink } from "next/link"
import { useState, useEffect } from "react"
import { BiChevronDown, BiChevronUp } from "react-icons/bi"
import { motion } from "framer-motion"
import { CrownIcon } from "./crown-icon"

export const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activePopover, setActivePopover] = useState<string | null>(null)
  const [popoverTimeout, setPopoverTimeout] = useState<NodeJS.Timeout | null>(null)
  const [theme, setTheme] = useState<"light" | "dark">("dark")

  useEffect(() => {
    // Verificar se há um tema salvo no localStorage
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    if (savedTheme) {
      setTheme(savedTheme)
      document.documentElement.classList.toggle("light-theme", savedTheme === "light")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("light-theme", newTheme === "light")
  }

  const handlePopover = (popoverKey: string) => {
    if (popoverTimeout) {
      clearTimeout(popoverTimeout)
      setPopoverTimeout(null)
    }

    setActivePopover((prev) => (prev === popoverKey ? null : popoverKey))
  }

  const closePopoverWithDelay = () => {
    if (popoverTimeout) {
      clearTimeout(popoverTimeout)
      setPopoverTimeout(null)
    }

    const timeout = setTimeout(() => {
      setActivePopover(null)
      setPopoverTimeout(null)
    }, 400)

    setPopoverTimeout(timeout)
  }

  const games = [
    {
      name: "Palworld",
      img: "/games/palworld.webp",
      link: "/games/palworld",
      discountPrice: "R$ 69,90",
    },
    {
      name: "Minecraft",
      img: "/games/minecraft.webp",
      link: "/games/minecraft",
      discountPrice: "R$ 13,90",
    },
    {
      name: "Valheim",
      img: "/games/valheim.webp",
      link: "/games/",
      discountPrice: "R$ 49,90",
    },
    {
      name: "Project Zomboid",
      img: "/games/zomboid.webp",
      link: "/games/project-zomboid",
      discountPrice: "R$ 49,90",
    },
    {
      name: "Rust",
      img: "/games/rust.webp",
      link: "/games/rust",
      discountPrice: "R$ 80,90",
    },
  ]

  return (
    <Navbar
      className="bg-[#0a0a0e]/60 backdrop-blur-md fixed border-b border-white/5"
      maxWidth={"2xl"}
      position="static"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="hidden sm:flex gap-4 items-center justify-start" justify="start">
        <NavbarItem key="01" className="mt-0">
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <NextLink className="flex justify-start items-center gap-1" href="/">
              <Image
                src="/logo-branca.webp"
                alt="logo"
                height="150"
                width="150"
                className="h-full min-w-28 lg:min-w-48"
              />
            </NextLink>
          </motion.div>
        </NavbarItem>

        <NavbarItem key="02" className="mt-0">
          <NextLink href="/" className="p-0">
            <p className="p-0 m-0 bg-transparent data-[hover=true]:bg-transparent font-semibold text-sm text-gray-300 hover:text-white transition-colors duration-200">
              Início
            </p>
          </NextLink>
        </NavbarItem>

        {/* Servidores */}
        <NavbarItem className="mt-0" onMouseLeave={closePopoverWithDelay}>
          <Popover placement="bottom" offset={20} showArrow isOpen={activePopover === "new"}>
            <PopoverTrigger>
              <Button
                className="p-0 bg-transparent data-[hover=true]:bg-transparent font-semibold text-sm text-gray-300 hover:text-white transition-colors duration-200"
                radius="sm"
                variant="light"
                endContent={
                  <motion.div animate={{ rotate: activePopover === "new" ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <BiChevronDown />
                  </motion.div>
                }
                onMouseEnter={() => handlePopover("new")}
              >
                <Box className="h-4 w-4" /> Servidores
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-[600px] p-0 bg-[#0a0a0e]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl"
              onMouseEnter={() => clearTimeout(popoverTimeout!)}
              onMouseLeave={closePopoverWithDelay}
            >
              <div className="w-full p-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-xs text-gray-400 uppercase tracking-wider">Servidores VPS</span>
                    </div>
                    <div className="space-y-3">
                      {[
                        {
                          href: "/semi-dedicado",
                          icon: Box,
                          title: "Semi Dedicado",
                          description: "Servidores custo-benefício único.",
                        },
                        {
                          href: "/vps-streaming",
                          icon: Globe,
                          title: "VPS Streaming",
                          description: "Servidor veloz para Streaming.",
                        },
                        {
                          href: "/fivem",
                          icon: Gamepad2,
                          title: "VPS Fivem",
                          description: "Hospedagem de FiveM.",
                        },
                      ].map((item, index) => (
                        <Link href={item.href} key={`1${index}${item.href}`}>
                          <motion.div
                            whileHover={{ x: 4 }}
                            className="flex items-center space-x-3 p-3 rounded-xl hover:bg-white/5 transition-colors duration-200"
                          >
                            <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-pink-500/20">
                              <item.icon className="h-4 w-4 text-purple-400" />
                            </div>
                            <div>
                              <div className="text-sm font-medium text-white">{item.title}</div>
                              <div className="text-xs text-gray-400">{item.description}</div>
                            </div>
                          </motion.div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* VPS Gamer Highlight */}
                  <Link href="/vps-gamer">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="relative h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-6 border border-purple-500/30 overflow-hidden"
                    >
                      <div className="relative z-10">
                        <div className="flex items-center space-x-2 mb-3">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-xs text-green-400 font-medium">POPULAR</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">VPS Gamer</h3>
                        <p className="text-sm text-gray-300 mb-4">
                          Servidores localizados em São Paulo com máxima performance
                        </p>
                        <div className="text-2xl font-bold text-white">R$ 96,90</div>
                        <div className="text-xs text-gray-400">por mês</div>
                      </div>
                      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-xl"></div>
                    </motion.div>
                  </Link>
                </div>

                {/* Baremetal Section */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-xs text-gray-400 uppercase tracking-wider">Baremetal</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      {
                        href: "/dedicado",
                        icon: ServerCrash,
                        title: "Servidor Dedicado",
                        description: "Hardware exclusivo para você.",
                      },
                      {
                        href: "/colocation",
                        icon: Network,
                        title: "Colocation",
                        description: "Hospede seu servidor conosco.",
                      },
                    ].map((item, index) => (
                      <Link href={item.href} key={`2${index}${item.href}`}>
                        <motion.div
                          whileHover={{ x: 4 }}
                          className="flex items-center space-x-3 p-3 rounded-xl hover:bg-white/5 transition-colors duration-200"
                        >
                          <div className="p-2 rounded-lg bg-gradient-to-r from-orange-500/20 to-red-500/20">
                            <item.icon className="h-4 w-4 text-orange-400" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-white">{item.title}</div>
                            <div className="text-xs text-gray-400">{item.description}</div>
                          </div>
                        </motion.div>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between text-sm">
                      <Link
                        href="https://stats.uptimerobot.com/YJjcBPfgVR"
                        className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
                      >
                        <span>Status</span>
                        <span className="text-gray-500">→</span>
                      </Link>
                      <Link
                        href="/redes"
                        className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
                      >
                        <span>Redes</span>
                        <span className="text-gray-500">→</span>
                      </Link>
                      <Link
                        href="https://discord.gg/rGP7prMqF3"
                        className="text-gray-300 hover:text-white transition-colors duration-200"
                      >
                        <span>Changelog</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </NavbarItem>

        {/* Jogos */}
        <NavbarItem className="mt-0" onMouseLeave={closePopoverWithDelay}>
          <Popover placement="bottom" offset={20} showArrow isOpen={activePopover === "games"}>
            <PopoverTrigger>
              <Button
                className="p-0 bg-transparent data-[hover=true]:bg-transparent font-semibold text-sm text-gray-300 hover:text-white transition-colors duration-200"
                radius="sm"
                variant="light"
                endContent={
                  <motion.div animate={{ rotate: activePopover === "games" ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <BiChevronDown />
                  </motion.div>
                }
                onMouseEnter={() => handlePopover("games")}
              >
                <Gamepad2 className="h-4 w-4" /> Jogos
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-[500px] p-0 bg-[#0a0a0e]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl"
              onMouseEnter={() => clearTimeout(popoverTimeout!)}
              onMouseLeave={closePopoverWithDelay}
            >
              <div className="w-full p-6">
                {/* New Minecraft Highlight */}
                <Link href="/minecraft">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="relative h-full bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-xl p-6 border border-green-500/30 overflow-hidden mb-6"
                  >
                    <div className="relative z-10">
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                        <span className="text-xs text-yellow-400 font-medium">DESTAQUE</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">Servidores Minecraft</h3>
                      <p className="text-sm text-gray-300 mb-4">
                        Hospedagem de alta performance para suas aventuras no Minecraft.
                      </p>
                      <div className="text-2xl font-bold text-white">A partir de R$ 13,90</div>
                      <div className="text-xs text-gray-400">por mês</div>
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-green-500/30 to-blue-500/30 rounded-full blur-xl"></div>
                  </motion.div>
                </Link>

                <div className="grid grid-cols-2 gap-4">
                  {games.map((item, index) => (
                    <Link href={item.link} key={index}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center space-x-3 p-3 rounded-xl hover:bg-white/5 transition-colors duration-200"
                      >
                        <Image
                          src={item.img || "/placeholder.svg"}
                          alt={item.name}
                          width={40}
                          height={40}
                          className="w-10 h-10 rounded-lg object-cover"
                        />
                        <div>
                          <div className="text-sm font-medium text-white">{item.name}</div>
                          <div className="text-xs text-purple-400 font-medium">{item.discountPrice}</div>
                        </div>
                      </motion.div>
                    </Link>
                  ))}
                  <Link href="/games">
                    <div className="p-2 rounded-lg flex items-center h-18 h-full hover:bg-[#303030]">
                      <div className="flex items-center space-x-2">
                        <LayoutGrid
                          width={40}
                          height={40}
                          // fill="#fff"
                          color="#fff"
                          className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 object-cover rounded-lg hover:animate-pulse"
                        />
                        <div className="flex flex-col">
                          <h3 className="text-md font-bold">Todos jogos</h3>
                          <p className="text-xs text-nowrap">Ver todos nossos jogos</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </NavbarItem>

        {/* Hospedagem */}
        <NavbarItem className="mt-0" onMouseLeave={closePopoverWithDelay}>
          <Popover placement="bottom" offset={20} showArrow isOpen={activePopover === "hospedagem"}>
            <PopoverTrigger>
              <Button
                className="p-0 bg-transparent data-[hover=true]:bg-transparent font-semibold text-sm text-gray-300 hover:text-white transition-colors duration-200"
                radius="sm"
                variant="light"
                endContent={
                  <motion.div
                    animate={{ rotate: activePopover === "hospedagem" ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <BiChevronDown />
                  </motion.div>
                }
                onMouseEnter={() => handlePopover("hospedagem")}
              >
                <Cloud className="h-4 w-4" /> Hospedagem
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-[400px] p-0 bg-[#0a0a0e]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl"
              onMouseEnter={() => clearTimeout(popoverTimeout!)}
              onMouseLeave={closePopoverWithDelay}
            >
              <div className="w-full p-6">
                <div className="space-y-3">
                  {[
                    {
                      href: "/hospedagem/NodeJS",
                      title: "Hospedagem NodeJS",
                      description: "Hospede seus aplicativos.",
                      icon: ChartNetwork,
                    },
                    {
                      href: "/Sites",
                      title: "Hospedagem de Sites",
                      description: "Hospede seus Sites com CyberPanel.",
                      icon: GlobeLock,
                    },
                  ].map((item, index) => (
                    <Link href={item.href} key={index}>
                      <motion.div
                        whileHover={{ x: 4 }}
                        className="flex items-center space-x-3 p-4 rounded-xl hover:bg-white/5 transition-colors duration-200"
                      >
                        <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20">
                          <item.icon className="h-5 w-5 text-blue-400" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">{item.title}</div>
                          <div className="text-xs text-gray-400">{item.description}</div>
                        </div>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </NavbarItem>

        {/* Empresa */}
        <NavbarItem className="mt-0" onMouseLeave={closePopoverWithDelay}>
          <Popover placement="bottom" offset={20} showArrow isOpen={activePopover === "empresa"}>
            <PopoverTrigger>
              <Button
                className="p-0 bg-transparent data-[hover=true]:bg-transparent font-semibold text-sm text-gray-300 hover:text-white transition-colors duration-200"
                radius="sm"
                variant="light"
                endContent={
                  <motion.div
                    animate={{ rotate: activePopover === "empresa" ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <BiChevronDown />
                  </motion.div>
                }
                onMouseEnter={() => handlePopover("empresa")}
              >
                <Globe className="h-4 w-4" /> Empresa
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-[450px] p-0 bg-[#0a0a0e]/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl"
              onMouseEnter={() => clearTimeout(popoverTimeout!)}
              onMouseLeave={closePopoverWithDelay}
            >
              <div className="w-full p-6">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    {
                      href: "https://game.neonhost.com.br",
                      title: "Painel Administrativo",
                      description: "Controle total dos seus servidores e jogos.",
                      icon: Gamepad2,
                    },
                    {
                      href: "https://cdn.neonhost.com.br/neonhostinger/Termos-NeonHost.pdf",
                      title: "Regras e Diretrizes",
                      description: "Conheça nossas políticas e evite problemas.",
                      icon: Handshake,
                    },
                    {
                      href: "/about",
                      title: "Sobre nós",
                      description: "Conheça mais sobre a NeonHost.",
                      icon: LayoutGrid,
                    },
                    {
                      href: "/anti-ddos",
                      title: "Anti DDoS",
                      description: "Conheça nossa proteção DDoS.",
                      icon: ShieldCheck,
                    },
                  ].map((item, index) => (
                    <Link href={item.href} key={index}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="p-4 rounded-xl hover:bg-white/5 transition-colors duration-200"
                      >
                        <div className="p-3 rounded-lg bg-gradient-to-r from-green-500/20 to-emerald-500/20 mb-3 w-fit">
                          <item.icon className="h-5 w-5 text-green-400" />
                        </div>
                        <div className="text-sm font-medium text-white mb-1">{item.title}</div>
                        <div className="text-xs text-gray-400">{item.description}</div>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </NavbarItem>
      </NavbarContent>

      <NavbarItem key="host-fivem" className="mt-0">
        <NextLink href="/fivem" className="p-0">
          <p className="p-0 m-0 bg-transparent data-[hover=true]:bg-transparent font-semibold text-sm text-gray-300 hover:text-white transition-colors duration-200 flex items-center gap-2">
            Host Fivem <CrownIcon size={16} className="animate-pulse" />
          </p>
        </NextLink>
      </NavbarItem>

      <NavbarContent>
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden mt-0" />
      </NavbarContent>

      <NavbarContent className="hidden mt-0 sm:flex" justify="end">
        <NavbarItem className="sm:block hidden">
          <Link href="https://discord.gg/rGP7prMqF3" target="_blank">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="text-gray-300"
              >
                <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.052.052 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
              </svg>
            </motion.div>
          </Link>
        </NavbarItem>

        <NavbarItem>
          <NextLink href="https://app.neonhost.com.br/login">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="flat"
                size="md"
                className="text-sm font-bold bg-gradient-to-r from-purple-600 to-pink-600 border-0 text-white rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
              >
                Acessar conta
              </Button>
            </motion.div>
          </NextLink>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="pt-3 bg-[#0a0a0e]/90 backdrop-blur-xl border-t border-white/5">
        <div className="flex flex-col gap-2">
          <NavbarItem>
            <NextLink href="/" className="w-full">
              <p className="font-semibold text-sm text-gray-300 hover:text-white transition-colors duration-200">
                Início
              </p>
            </NextLink>
          </NavbarItem>

          <NavbarItem>
            <div className="flex flex-col gap-2 w-full">
              <Button
                className="w-full justify-between bg-transparent data-[hover=true]:bg-transparent font-semibold text-sm text-gray-300"
                radius="sm"
                variant="light"
                endContent={activePopover === "servers-mobile" ? <BiChevronUp /> : <BiChevronDown />}
                onClick={() => handlePopover("servers-mobile")}
              >
                Servidores
              </Button>
              {activePopover === "servers-mobile" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="flex flex-col gap-2 pl-4"
                >
                  <Link href="/vps-gamer" className="w-full">
                    <div className="p-2 hover:bg-white/5 rounded-lg transition-colors duration-200">
                      <p className="text-base font-semibold text-white">VPS Gamer</p>
                      <p className="text-sm text-gray-400">Servidores localizados no Brasil</p>
                    </div>
                  </Link>
                  <Link href="/semi-dedicado" className="w-full">
                    <div className="p-2 hover:bg-white/5 rounded-lg transition-colors duration-200">
                      <p className="text-base font-semibold text-white">Semi Dedicado</p>
                      <p className="text-sm text-gray-400">Servidores custo-benefício único</p>
                    </div>
                  </Link>
                  <Link href="/vps-streaming" className="w-full">
                    <div className="p-2 hover:bg-white/5 rounded-lg transition-colors duration-200">
                      <p className="text-base font-semibold text-white">VPS Streaming</p>
                      <p className="text-sm text-gray-400">Servidor veloz para Hospedagem</p>
                    </div>
                  </Link>
                  <Link href="/fivem" className="w-full">
                    <div className="p-2 hover:bg-white/5 rounded-lg transition-colors duration-200">
                      <p className="text-base font-semibold text-white flex items-center gap-2">
                        VPS Fivem <CrownIcon size={14} />
                      </p>
                      <p className="text-sm text-gray-400">Hospedagem de FiveM</p>
                    </div>
                  </Link>
                  <Link href="/dedicado" className="w-full">
                    <div className="p-2 hover:bg-white/5 rounded-lg transition-colors duration-200">
                      <p className="text-base font-semibold text-white">VPS Dedicado</p>
                      <p className="text-sm text-gray-400">Configurações superiores, para aplicações grandes</p>
                    </div>
                  </Link>
                </motion.div>
              )}
            </div>
          </NavbarItem>

          <NavbarItem>
            <Link href="https://discord.gg/rGP7prMqF3" target="_blank" className="w-full">
              <Button
                className="w-full justify-between bg-transparent data-[hover=true]:bg-transparent font-semibold text-sm text-gray-300"
                radius="sm"
                variant="light"
              >
                Discord
              </Button>
            </Link>
          </NavbarItem>

          <NavbarItem>
            <NextLink href="https://app.neonhost.com.br/login" className="w-full">
              <Button
                className="w-full font-bold text-sm bg-gradient-to-r from-purple-600 to-pink-600 border-0 text-white rounded-full"
                size="md"
              >
                Acessar minha conta
              </Button>
            </NextLink>
          </NavbarItem>
        </div>
      </NavbarMenu>
    </Navbar>
  )
}
