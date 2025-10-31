"use client"

import { Button } from "@nextui-org/button"
import { Navbar, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuToggle } from "@nextui-org/navbar"
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react"
import { Gamepad2, Handshake, Globe, LayoutGrid, ShieldCheck, ServerCrash, Box, MessageCircle } from "lucide-react"
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
      link: "/minecraft",
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
      link: "/rust",
      discountPrice: "R$ 80,90",
    },
  ]

  return (
    <Navbar
      className="bg-white fixed border-b border-gray-200 h-16 top-[35px]"
      maxWidth={"2xl"}
      position="static"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="hidden sm:flex gap-6 items-center justify-start" justify="start">
        <NavbarItem key="01" className="mt-0">
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <NextLink className="flex justify-start items-center gap-1" href="/">
              <Image
                src="/logo-preta.png"
                alt="logo"
                height="140"
                width="140"
                className="h-full min-w-28 lg:min-w-44"
              />
            </NextLink>
          </motion.div>
        </NavbarItem>

        <NavbarItem key="02" className="mt-0">
          <NextLink href="/" className="p-0">
            <p className="p-0 m-0 bg-transparent data-[hover=true]:bg-transparent font-semibold text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">
              Início
            </p>
          </NextLink>
        </NavbarItem>

        {/* Servidores */}
        <NavbarItem className="mt-0" onMouseLeave={closePopoverWithDelay}>
          <Popover placement="bottom" offset={20} showArrow isOpen={activePopover === "new"}>
            <PopoverTrigger>
              <Button
                className="p-2 bg-transparent data-[hover=true]:bg-transparent font-semibold text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                radius="sm"
                variant="light"
                endContent={
                  <motion.div animate={{ rotate: activePopover === "new" ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <BiChevronDown className="h-4 w-4" />
                  </motion.div>
                }
                onMouseEnter={() => handlePopover("new")}
              >
                <Box className="h-4 w-4" /> Servidores
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-[420px] p-0 bg-white border border-gray-200 rounded-2xl shadow-2xl"
              onMouseEnter={() => clearTimeout(popoverTimeout!)}
              onMouseLeave={closePopoverWithDelay}
            >
              <div className="w-full p-6">
                <div className="space-y-3">
                  <Link href="/vps-gamer">
                    <motion.div
                      whileHover={{ x: 4 }}
                      className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-200"
                    >
                      <div className="p-3 rounded-xl bg-purple-100 border border-purple-200">
                        <Gamepad2 className="h-4 w-4 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-bold text-gray-900 mb-1">VPS Gamer</div>
                        <div className="text-xs text-gray-600">Servidores Premium para jogos.</div>
                      </div>
                    </motion.div>
                  </Link>

                  <Link href="/semi-dedicado">
                    <motion.div
                      whileHover={{ x: 4 }}
                      className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-200"
                    >
                      <div className="p-3 rounded-xl bg-purple-100 border border-purple-200">
                        <Gamepad2 className="h-4 w-4 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-bold text-gray-900 mb-1">Semi-Dedicado</div>
                        <div className="text-xs text-gray-600">
                          Configurações Semi-Dedicadas, para aplicações grandes.
                        </div>
                      </div>
                    </motion.div>
                  </Link>

                  <Link href="/dedicado">
                    <motion.div
                      whileHover={{ x: 4 }}
                      className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-200"
                    >
                      <div className="p-3 rounded-xl bg-purple-100 border border-purple-200">
                        <ServerCrash className="h-4 w-4 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-bold text-gray-900 mb-1">Servidor Dedicado</div>
                        <div className="text-xs text-gray-600">Hardware exclusivo para você.</div>
                      </div>
                    </motion.div>
                  </Link>
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
                className="p-2 bg-transparent data-[hover=true]:bg-transparent font-semibold text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                radius="sm"
                variant="light"
                endContent={
                  <motion.div animate={{ rotate: activePopover === "games" ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <BiChevronDown className="h-4 w-4" />
                  </motion.div>
                }
                onMouseEnter={() => handlePopover("games")}
              >
                <Gamepad2 className="h-4 w-4" /> Jogos
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-[500px] p-0 bg-white border border-gray-200 rounded-2xl shadow-2xl"
              onMouseEnter={() => clearTimeout(popoverTimeout!)}
              onMouseLeave={closePopoverWithDelay}
            >
              <div className="w-full p-6">
                <div className="grid grid-cols-2 gap-4">
                  {games.map((item, index) => (
                    <Link href={item.link} key={index}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-colors duration-200"
                      >
                        <Image
                          src={item.img || "/placeholder.svg"}
                          alt={item.name}
                          width={40}
                          height={40}
                          className="w-10 h-10 rounded-lg object-cover"
                        />
                        <div>
                          <div className="text-sm font-medium text-gray-900">{item.name}</div>
                          <div className="text-xs text-nowrap text-gray-600">{item.discountPrice}</div>
                        </div>
                      </motion.div>
                    </Link>
                  ))}
                  <Link href="/games">
                    <div className="p-2 rounded-lg flex items-center h-18 h-full hover:bg-gray-50">
                      <div className="flex items-center space-x-2">
                        <LayoutGrid
                          width={40}
                          height={40}
                          color="#fff"
                          className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 object-cover rounded-lg hover:animate-pulse"
                        />
                        <div className="flex flex-col">
                          <h3 className="text-md font-bold text-gray-900">Todos jogos</h3>
                          <p className="text-xs text-nowrap text-gray-600">Ver todos nossos jogos</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </NavbarItem>

        {/* Minecraft */}
        <NavbarItem key="minecraft" className="mt-0">
          <NextLink href="/minecraft" className="p-0">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-2 p-2 rounded-xl hover:bg-gray-50 transition-all duration-200"
            >
              <span className="font-semibold text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center gap-2">
                <Gamepad2 className="h-4 w-4" />
                Minecraft
              </span>
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1 text-xs font-bold text-white bg-gradient-to-r from-purple-600 via-violet-600 to-purple-700 rounded-full shadow-lg shadow-purple-500/30 border border-purple-400/50 animate-pulse"
              >
                AMD RYZEN 9 7900X
              </motion.span>
            </motion.div>
          </NextLink>
        </NavbarItem>

        {/* Plataforma */}
        <NavbarItem className="mt-0" onMouseLeave={closePopoverWithDelay}>
          <Popover placement="bottom" offset={20} showArrow isOpen={activePopover === "plataforma"}>
            <PopoverTrigger>
              <Button
                className="p-2 bg-transparent data-[hover=true]:bg-transparent font-semibold text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                radius="sm"
                variant="light"
                endContent={
                  <motion.div
                    animate={{ rotate: activePopover === "plataforma" ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <BiChevronDown className="h-4 w-4" />
                  </motion.div>
                }
                onMouseEnter={() => handlePopover("plataforma")}
              >
                <LayoutGrid className="h-4 w-4" /> Plataforma
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-[420px] p-0 bg-white border border-gray-200 rounded-2xl shadow-2xl"
              onMouseEnter={() => clearTimeout(popoverTimeout!)}
              onMouseLeave={closePopoverWithDelay}
            >
              <div className="w-full p-6">
                <div className="space-y-3">
                  <Link href="/games">
                    <motion.div
                      whileHover={{ x: 4 }}
                      className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-200"
                    >
                      <div className="p-3 rounded-xl bg-blue-100 border border-blue-200">
                        <Gamepad2 className="h-4 w-4 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-bold text-gray-900 mb-1">Servidores Jogos</div>
                        <div className="text-xs text-gray-600">Explore nossa seleção de jogos disponíveis.</div>
                      </div>
                    </motion.div>
                  </Link>

                  <Link href="https://suporte.neonhost.com.br" target="_blank">
                    <motion.div
                      whileHover={{ x: 4 }}
                      className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-200"
                    >
                      <div className="p-3 rounded-xl bg-green-100 border border-green-200">
                        <Globe className="h-4 w-4 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-bold text-gray-900 mb-1">Base de conhecimento</div>
                        <div className="text-xs text-gray-600">Acesse tutoriais e documentação completa.</div>
                      </div>
                    </motion.div>
                  </Link>

                  <Link href="https://www.youtube.com/@neonhost/videos" target="_blank">
                    <motion.div
                      whileHover={{ x: 4 }}
                      className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-200"
                    >
                      <div className="p-3 rounded-xl bg-green-100 border border-green-200">
                        <Box className="h-4 w-4 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-bold text-gray-900 mb-1">Base de Tutorial</div>
                        <div className="text-xs text-gray-600">Acesse tutoriais via YouTube.</div>
                      </div>
                    </motion.div>
                  </Link>

                  <Link href="https://wa.me/5524992430751" target="_blank">
                    <motion.div
                      whileHover={{ x: 4 }}
                      className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-200"
                    >
                      <div className="p-3 rounded-xl bg-green-100 border border-green-200">
                        <MessageCircle className="h-4 w-4 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-bold text-gray-900 mb-1">WhatsApp</div>
                        <div className="text-xs text-gray-600">Entre em contato pelo WhatsApp.</div>
                      </div>
                    </motion.div>
                  </Link>
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
                className="p-2 bg-transparent data-[hover=true]:bg-transparent font-semibold text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                radius="sm"
                variant="light"
                endContent={
                  <motion.div
                    animate={{ rotate: activePopover === "empresa" ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <BiChevronDown className="h-4 w-4" />
                  </motion.div>
                }
                onMouseEnter={() => handlePopover("empresa")}
              >
                <Globe className="h-4 w-4" /> Empresa
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-[450px] p-0 bg-white border border-gray-200 rounded-2xl shadow-2xl"
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
                        className="p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200"
                      >
                        <div className="p-3 rounded-lg bg-gradient-to-r from-green-500/20 to-emerald-500/20 mb-3 w-fit">
                          <item.icon className="h-4 w-4 text-green-400" />
                        </div>
                        <div className="text-sm font-medium text-gray-900 mb-1">{item.title}</div>
                        <div className="text-xs text-gray-600">{item.description}</div>
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
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-2 p-2 rounded-xl hover:bg-gray-50 transition-all duration-200"
          >
            <span className="font-semibold text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 flex items-center gap-2">
              Host Fivem
            </span>
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="px-3 py-1 text-xs font-bold text-white bg-gradient-to-r from-purple-600 via-violet-600 to-purple-700 rounded-full shadow-lg shadow-purple-500/30 border border-purple-400/50 animate-pulse"
            >
              AMD RYZEN 9 9900X
            </motion.span>
          </motion.div>
        </NextLink>
      </NavbarItem>

      <NavbarContent>
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="sm:hidden mt-0" />
      </NavbarContent>

      <NavbarContent className="hidden mt-0 sm:flex" justify="end">
        <NavbarItem key="discord" className="sm:block hidden">
          <Link href="https://discord.gg/rGP7prMqF3" target="_blank">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="text-gray-600"
              >
                <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.631-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
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
                className="text-sm font-bold bg-gradient-to-r from-purple-600 to-pink-600 border-0 text-white rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-200 px-5 py-2"
              >
                Acessar conta
              </Button>
            </motion.div>
          </NextLink>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="pt-3 bg-white border-t border-gray-200">
        <div className="flex flex-col gap-2">
          <NavbarItem>
            <NextLink href="/" className="w-full">
              <p className="font-semibold text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200">
                Início
              </p>
            </NextLink>
          </NavbarItem>

          <NavbarItem>
            <div className="flex flex-col gap-2 w-full">
              <Button
                className="w-full justify-between bg-transparent data-[hover=true]:bg-transparent font-semibold text-sm text-gray-600"
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
                    <div className="p-2 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                      <p className="text-base font-semibold text-gray-900">VPS Gamer</p>
                      <p className="text-sm text-gray-600">Servidores localizados no Brasil</p>
                    </div>
                  </Link>
                  <Link href="/semi-dedicado" className="w-full">
                    <div className="p-2 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                      <p className="text-base font-semibold text-gray-900">Semi-Dedicado</p>
                      <p className="text-sm text-gray-600">Configurações Semi-Dedicadas, para aplicações grandes</p>
                    </div>
                  </Link>
                  <Link href="/dedicado" className="w-full">
                    <div className="p-2 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                      <p className="text-base font-semibold text-gray-900">VPS Dedicado</p>
                      <p className="text-sm text-gray-600">Configurações superiores, para aplicações grandes</p>
                    </div>
                  </Link>
                </motion.div>
              )}
            </div>
          </NavbarItem>

          {/* Plataforma Mobile */}
          <NavbarItem>
            <div className="flex flex-col gap-2 w-full">
              <Button
                className="w-full justify-between bg-transparent data-[hover=true]:bg-transparent font-semibold text-sm text-gray-600"
                radius="sm"
                variant="light"
                endContent={activePopover === "plataforma-mobile" ? <BiChevronUp /> : <BiChevronDown />}
                onClick={() => handlePopover("plataforma-mobile")}
              >
                Plataforma
              </Button>
              {activePopover === "plataforma-mobile" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  className="flex flex-col gap-2 pl-4"
                >
                  <Link href="/games" className="w-full">
                    <div className="p-2 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                      <p className="text-base font-semibold text-gray-900">Servidores Jogos</p>
                      <p className="text-sm text-gray-600">Explore nossa seleção de jogos disponíveis</p>
                    </div>
                  </Link>
                  <Link href="https://suporte.neonhost.com.br" target="_blank" className="w-full">
                    <div className="p-2 hover:bg-gray-50 rounded-lg transition-colors duration-200">
                      <p className="text-base font-semibold text-gray-900">Base de conhecimento</p>
                      <p className="text-sm text-gray-600">Acesse tutoriais e documentação completa</p>
                    </div>
                  </Link>
                </motion.div>
              )}
            </div>
          </NavbarItem>

          <NavbarItem>
            <Link href="https://discord.gg/rGP7prMqF3" target="_blank" className="w-full">
              <Button
                className="w-full justify-between bg-transparent data-[hover=true]:bg-transparent font-semibold text-sm text-gray-600"
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
