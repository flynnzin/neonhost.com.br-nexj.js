"use client";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "@nextui-org/button"
import { Navbar, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuToggle } from "@nextui-org/navbar"
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react"
import { Gamepad2, Handshake, Globe, LayoutGrid, ShieldCheck, ServerCrash, Box, MessageCircle } from "lucide-react"
import Image from "next/image"
import { default as Link, default as NextLink } from "next/link"
import { useState } from "react"
import { BiChevronDown, BiChevronUp, BiLogoDiscord, BiLogoDiscordAlt } from "react-icons/bi"
import { motion } from "framer-motion"
import { useTheme } from "./theme-provider";

export const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activePopover, setActivePopover] = useState<string | null>(null)
  const [popoverTimeout, setPopoverTimeout] = useState<NodeJS.Timeout | null>(null)
  const { theme } = useTheme();

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
      className="bg-white dark:bg-gray-900 fixed border-b border-gray-200 dark:border-gray-800 h-16 top-[35px]"
      maxWidth={"2xl"}
      position="static"
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="hidden sm:flex gap-6 items-center justify-start" justify="start">
        <NavbarItem key="01" className="mt-0">
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <NextLink className="flex justify-start items-center gap-1" href="/">
              <Image
                src={theme !== "dark" ? "/logo-preta.png": "/logo-branca.webp"}
                alt="logo"
                height="140"
                width="140"
                className="h-full min-w-28 lg:min-w-44"
              />
              
            </NextLink>
          </motion.div>
        </NavbarItem>

        {/* Servidores */}
        <NavbarItem className="mt-0" onMouseLeave={closePopoverWithDelay}>
          <Popover placement="bottom" offset={20} showArrow isOpen={activePopover === "new"}>
            <PopoverTrigger>
              <Button
                className="p-2 bg-transparent data-[hover=true]:bg-transparent font-semibold text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
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
              className="w-[420px] p-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-2xl"
              onMouseEnter={() => clearTimeout(popoverTimeout!)}
              onMouseLeave={closePopoverWithDelay}
            >
              <div className="w-full p-6">
                <div className="space-y-3">
                  <Link href="/vps-gamer">
                    <motion.div
                      whileHover={{ x: 4 }}
                      className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
                    >
                      <div className="p-3 rounded-xl bg-purple-100 border border-purple-200">
                        <Gamepad2 className="h-4 w-4 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-bold text-gray-900 dark:text-white mb-1">VPS Gamer</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Servidores localizados em São Paulo com máxima performance.</div>
                      </div>
                    </motion.div>
                  </Link>

                  <Link href="/semi-dedicado">
                    <motion.div
                      whileHover={{ x: 4 }}
                      className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
                    >
                      <div className="p-3 rounded-xl bg-purple-100 border border-purple-200">
                        <Gamepad2 className="h-4 w-4 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-bold text-gray-900 dark:text-white mb-1">Semi-Dedicado</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">
                          Configurações Semi-Dedicadas, para aplicações grandes.
                        </div>
                      </div>
                    </motion.div>
                  </Link>

                  <Link href="/dedicado">
                    <motion.div
                      whileHover={{ x: 4 }}
                      className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
                    >
                      <div className="p-3 rounded-xl bg-purple-100 border border-purple-200">
                        <ServerCrash className="h-4 w-4 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-bold text-gray-900 dark:text-white mb-1">Servidor Dedicado</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Hardware exclusivo para você.</div>
                      </div>
                    </motion.div>
                  </Link>
                </div>
              </div>


            </PopoverContent>
          </Popover>
        </NavbarItem>

        <NavbarItem key="games" className="mt-0">
          <NextLink href="/games" className="p-0">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-2 p-2 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
            >
              <span className="font-semibold text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 flex items-center gap-2">
                <Gamepad2 className="h-4 w-4" />
                Jogos
              </span>

            </motion.div>
          </NextLink>
        </NavbarItem>

        <NavbarItem key="minecraft" className="mt-0">
          <NextLink href="/minecraft" className="p-0">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-2 p-2 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
            >
              <span className="font-semibold text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 flex items-center gap-2">
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
                className="p-2 bg-transparent data-[hover=true]:bg-transparent font-semibold text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
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
              className="w-[420px] p-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-2xl"
              onMouseEnter={() => clearTimeout(popoverTimeout!)}
              onMouseLeave={closePopoverWithDelay}
            >
              <div className="w-full p-6">
                <div className="space-y-3">
                  <Link href="/games">
                    <motion.div
                      whileHover={{ x: 4 }}
                      className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
                    >
                      <div className="p-3 rounded-xl bg-blue-100 border border-blue-200">
                        <Gamepad2 className="h-4 w-4 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-bold text-gray-900 dark:text-white mb-1">Servidores Jogos</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Explore nossa seleção de jogos disponíveis.</div>
                      </div>
                    </motion.div>
                  </Link>

                  <Link href="https://suporte.neonhost.com.br" target="_blank">
                    <motion.div
                      whileHover={{ x: 4 }}
                      className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
                    >
                      <div className="p-3 rounded-xl bg-green-100 border border-green-200">
                        <Globe className="h-4 w-4 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-bold text-gray-900 dark:text-white mb-1">Base de conhecimento</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Acesse tutoriais e documentação completa.</div>
                      </div>
                    </motion.div>
                  </Link>

                  <Link href="https://www.youtube.com/@neonhost/videos" target="_blank">
                    <motion.div
                      whileHover={{ x: 4 }}
                      className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
                    >
                      <div className="p-3 rounded-xl bg-green-100 border border-green-200">
                        <Box className="h-4 w-4 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-bold text-gray-900 dark:text-white mb-1">Base de Tutorial</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Acesse tutoriais via YouTube.</div>
                      </div>
                    </motion.div>
                  </Link>

                  <Link href="https://wa.me/5524992430751" target="_blank">
                    <motion.div
                      whileHover={{ x: 4 }}
                      className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
                    >
                      <div className="p-3 rounded-xl bg-green-100 border border-green-200">
                        <MessageCircle className="h-4 w-4 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-bold text-gray-900 dark:text-white mb-1">WhatsApp</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">Entre em contato pelo WhatsApp.</div>
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
                className="p-2 bg-transparent data-[hover=true]:bg-transparent font-semibold text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
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
              className="w-[450px] p-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-2xl"
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
                        className="p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                      >
                        <div className="p-3 rounded-lg bg-gradient-to-r from-green-500/20 to-emerald-500/20 mb-3 w-fit">
                          <item.icon className="h-4 w-4 text-green-400" />
                        </div>
                        <div className="text-sm font-medium text-gray-900 dark:text-white mb-1">{item.title}</div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">{item.description}</div>
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
            className="flex items-center gap-2 p-2 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200"
          >
            <span className="font-semibold text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200 flex items-center gap-2">
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
        <NavbarItem>
          <ThemeToggle />
        </NavbarItem>
        <NavbarItem key="discord" className="sm:block hidden">
          <Link href="https://discord.gg/rGP7prMqF3" target="_blank">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              <BiLogoDiscordAlt className="w-5 h-5 text-gray-600 dark:text-gray-300" />
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

      <NavbarMenu className="pt-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="flex flex-col gap-2">
          <NavbarItem>
            <NextLink href="/" className="w-full">
              <p className="font-semibold text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-200">
                Início
              </p>
            </NextLink>
          </NavbarItem>

          <NavbarItem>
            <div className="flex flex-col gap-2 w-full">
              <Button
                className="w-full justify-between bg-transparent data-[hover=true]:bg-transparent font-semibold text-sm text-gray-600 dark:text-gray-300"
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
                    <div className="p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200">
                      <p className="text-base font-semibold text-gray-900 dark:text-white">VPS Gamer</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Servidores localizados no Brasil</p>
                    </div>
                  </Link>
                  <Link href="/semi-dedicado" className="w-full">
                    <div className="p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200">
                      <p className="text-base font-semibold text-gray-900 dark:text-white">Semi-Dedicado</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Configurações Semi-Dedicadas, para aplicações grandes</p>
                    </div>
                  </Link>
                  <Link href="/dedicado" className="w-full">
                    <div className="p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200">
                      <p className="text-base font-semibold text-gray-900 dark:text-white">VPS Dedicado</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Configurações superiores, para aplicações grandes</p>
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
                className="w-full justify-between bg-transparent data-[hover=true]:bg-transparent font-semibold text-sm text-gray-600 dark:text-gray-300"
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
                    <div className="p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200">
                      <p className="text-base font-semibold text-gray-900 dark:text-white">Servidores Jogos</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Explore nossa seleção de jogos disponíveis</p>
                    </div>
                  </Link>
                  <Link href="https://suporte.neonhost.com.br" target="_blank" className="w-full">
                    <div className="p-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-200">
                      <p className="text-base font-semibold text-gray-900 dark:text-white">Base de conhecimento</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Acesse tutoriais e documentação completa</p>
                    </div>
                  </Link>
                </motion.div>
              )}
            </div>
          </NavbarItem>

          <NavbarItem>
            <Link href="https://discord.gg/rGP7prMqF3" target="_blank" className="w-full">
              <Button
                className="w-full justify-between bg-transparent data-[hover=true]:bg-transparent font-semibold text-sm text-gray-600 dark:text-gray-300"
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

