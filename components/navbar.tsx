"use client"

import { Button } from "@nextui-org/button"
import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/navbar"
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react"
import { Gamepad2, Globe, LayoutGrid, ShieldCheck, ServerCrash, Box, MessageCircle } from "lucide-react"
import Image from "next/image"
import { default as Link, default as NextLink } from "next/link"
import { useState } from "react"
import { BiChevronDown } from "react-icons/bi"
import { motion } from "framer-motion"

export const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activePopover, setActivePopover] = useState<string | null>(null)
  const [popoverTimeout, setPopoverTimeout] = useState<NodeJS.Timeout | null>(null)

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
      className="bg-white fixed border-b border-gray-200 h-16"
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
        <NavbarItem key="jogos" className="mt-0">
          <NextLink href="/games" className="p-0">
            <Button
              className="p-2 bg-transparent data-[hover=true]:bg-transparent font-semibold text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
              radius="sm"
              variant="light"
            >
              <Gamepad2 className="h-4 w-4" /> Jogos
            </Button>
          </NextLink>
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
                    { name: "Sobre nós", link: "/about" },
                    { name: "Equipe", link: "/team" },
                    { name: "Parcerias", link: "/partnerships" },
                    { name: "Contato", link: "/contact" },
                  ].map((item, index) => (
                    <Link href={item.link} key={index}>
                      <motion.div
                        whileHover={{ x: 4 }}
                        className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-200"
                      >
                        <div className="p-3 rounded-xl bg-gray-100 border border-gray-200">
                          <ShieldCheck className="h-4 w-4 text-gray-600" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-bold text-gray-900 mb-1">{item.name}</div>
                          <div className="text-xs text-gray-600">Saiba mais sobre nós.</div>
                        </div>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  )
}
