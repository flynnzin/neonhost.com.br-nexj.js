"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Plus } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function GameServersSection() {
  const [selectedGame, setSelectedGame] = useState("minecraft")
  const [isLoaded, setIsLoaded] = useState(false)

  // Efeito para marcar quando o componente estiver carregado
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const games = [
    { id: "minecraft", name: "Minecraft", logo: "/games/mine.webp", url: "/game/minecraft" },
    { id: "palworld", name: "Palworld", logo: "/games/pal.webp", url: "/game/palworld" },
    { id: "gtav", name: "GTA V", logo: "/games/gtavF.webp", url: "/game/gtav" },
    { id: "rust", name: "Rust", logo: "/games/rustF.webp", url: "/game/rust" },
    { id: "7days", name: "7 Days to Die", logo: "/games/7dtd.webp", url: "/game/7days" },
    { id: "dayz", name: "DayZ", logo: "/games/dayzF.webp", url: "/game/dayz" },
    { id: "zomboid", name: "Project Zomboid", logo: "/games/zomboid.webp", url: "/game/zomboid" },
    { id: "terraria", name: "Terraria", logo: "/games/terrariaF.webp", url: "/game/terraria" },
    { id: "arma3", name: "Arma 3", logo: "/games/armareforgerF.webp", url: "/game/arma3" },
    { id: "aloft", name: "Aloft", logo: "/games/aloftF.webp", url: "/game/aloft" },
    { id: "enshrouded", name: "Enshrouded", logo: "/games/enshrouded.webp", url: "/game/enshrouded" },
  ]

  const plans = {
    zomboid: [
      {
        name: "Zomboid 4GB",
        price: "69,90",
        features: ["4GB RAM", "15 GB NVMe"],
        icon: "/placeholder.svg?height=40&width=40&text=RS",
        contractUrl: "https://app.neonhost.com.br/index.php?rp=/store/project-zomboid/zomboid-4gb",
      },
      {
        name: "Zomboid 6GB",
        price: "89,90",
        features: ["6GB RAM", "25 GB NVMe"],
        icon: "/placeholder.svg?height=40&width=40&text=RS",
        contractUrl: "https://app.neonhost.com.br/index.php?rp=/store/project-zomboid/zomboid-6gb",
      },
      {
        name: "Zomboid 8GB",
        price: "119,90",
        features: ["10GB RAM", "40 GB NVMe"],
        icon: "/placeholder.svg?height=40&width=40&text=RS",
        contractUrl: "https://app.neonhost.com.br/index.php?rp=/store/project-zomboid/zomboid-8gb",
      },
      {
        name: "Outros",
        price: null,
        features: ["+16 GB RAM", "+75 GB NVMe"],
        icon: "/placeholder.svg?height=40&width=40&text=MC",
        contractUrl: "https://app.neonhost.com.br/index.php?rp=/store/project-zomboid/",
      },
    ],
    minecraft: [
      {
        name: "Plano Bedrock",
        price: "13,90",
        features: ["2 GB RAM", "Exclusivo Bedrock"],
        icon: "/placeholder.svg?height=40&width=40&text=MC",
        contractUrl: "https://app.neonhost.com.br/index.php?rp=/store/minecraft/plano-simples",
      },
      {
        name: "Plano Basic",
        price: "33,90",
        features: ["4 GB RAM", "Mods e Plugins"],
        icon: "/placeholder.svg?height=40&width=40&text=MC",
        contractUrl: "https://app.neonhost.com.br/index.php?rp=/store/minecraft/plano-basic",
      },
      {
        name: "Plano Advanced",
        price: "49,90",
        features: ["8 GB RAM", "Mods e Plugins"],
        icon: "/placeholder.svg?height=40&width=40&text=MC",
        contractUrl: "https://app.neonhost.com.br/index.php?rp=/store/minecraft/plano-advanced",
      },
      {
        name: "Outros",
        price: null,
        features: ["+8 GB RAM", "Mods e Plugins"],
        icon: "/placeholder.svg?height=40&width=40&text=MC",
        contractUrl: "https://app.neonhost.com.br/index.php?rp=/store/minecraft",
      },
    ],
    palworld: [
      {
        name: "Plano Básico",
        price: "29,90",
        features: ["10 jogadores", "6GB RAM"],
        icon: "/placeholder.svg?height=40&width=40&text=PW",
        contractUrl: "https://app.neonhost.com.br/index.php?rp=/store/palworld/palworld-6gb",
      },
      {
        name: "Plano Premium",
        price: "49,90",
        features: ["20 jogadores", "10GB RAM"],
        icon: "/placeholder.svg?height=40&width=40&text=PW",
        contractUrl: "https://app.neonhost.com.br/index.php?rp=/store/palworld/palworld-10gb",
      },
      {
        name: "Plano Ultimate",
        price: "79,90",
        features: ["40 jogadores", "14GB RAM"],
        icon: "/placeholder.svg?height=40&width=40&text=PW",
        contractUrl: "https://app.neonhost.com.br/index.php?rp=/store/palworld/palworld-14gb",
      },
      {
        name: "Outros",
        price: null,
        features: ["+40 jogadores", "+14GB RAM"],
        icon: "/placeholder.svg?height=40&width=40&text=MC",
        contractUrl: "https://app.neonhost.com.br/index.php?rp=/store/minecraft",
      },
    ],
    rust: [
      {
        name: "Plano Starter",
        price: "109,90",
        features: ["50 slots", "10GB RAM"],
        icon: "/placeholder.svg?height=40&width=40&text=RS",
        contractUrl: "https://app.neonhost.com.br/index.php?rp=/store/rust/rust-10gb",
      },
      {
        name: "Plano Pro",
        price: "169,90",
        features: ["100 slots", "16GB RAM"],
        icon: "/placeholder.svg?height=40&width=40&text=RS",
        contractUrl: "https://app.neonhost.com.br/index.php?rp=/store/rust/rust-16gb",
      },
      {
        name: "Plano Elite",
        price: "209,90",
        features: ["200 slots", "20GB RAM"],
        icon: "/placeholder.svg?height=40&width=40&text=RS",
        contractUrl: "https://app.neonhost.com.br/index.php?rp=/store/rust/rust-20gb",
      },
      {
        name: "Outros",
        price: null,
        features: ["+24 GB RAM", "+300 slots"],
        icon: "/placeholder.svg?height=40&width=40&text=MC",
        contractUrl: "https://app.neonhost.com.br/index.php?rp=/store/vps-gamer",
      },
    ],
    gtav: [
      {
        name: "AMD Ryzen - 1",
        price: "69,90",
        features: ["2GB RAM", "40 GB NVMe"],
        icon: "/placeholder.svg?height=40&width=40&text=RS",
        contractUrl: "https://app.neonhost.com.br/index.php?rp=/store/vps-gamer/amd-ryzen-1",
      },
      {
        name: "AMD Ryzen - 2",
        price: "89,90",
        features: ["4GB RAM", "40 GB NVMe"],
        icon: "/placeholder.svg?height=40&width=40&text=RS",
        contractUrl: "https://app.neonhost.com.br/index.php?rp=/store/vps-gamer/amd-ryzen-2",
      },
      {
        name: "Plano Elite",
        price: "119,90",
        features: ["6GB RAM", "60 GB NVMe"],
        icon: "/placeholder.svg?height=40&width=40&text=RS",
        contractUrl: "https://app.neonhost.com.br/index.php?rp=/store/vps-gamer/amd-ryzen-3",
      },
      {
        name: "Outros",
        price: null,
        features: ["+16 GB RAM", "+75 GB NVMe"],
        icon: "/placeholder.svg?height=40&width=40&text=MC",
        contractUrl: "https://app.neonhost.com.br/index.php?rp=/store/vps-gamer",
      },
    ],
    // Planos padrão para outros jogos
    default: [
      {
        name: "AMD Ryzen - 1",
        price: "69,90",
        features: ["2GB RAM", "40 GB NVMe"],
        icon: "/placeholder.svg?height=40&width=40&text=RS",
        contractUrl: "https://app.neonhost.com.br/index.php?rp=/store/vps-gamer/amd-ryzen-1",
      },
      {
        name: "AMD Ryzen - 2",
        price: "89,90",
        features: ["4GB RAM", "40 GB NVMe"],
        icon: "/placeholder.svg?height=40&width=40&text=RS",
        contractUrl: "https://app.neonhost.com.br/index.php?rp=/store/vps-gamer/amd-ryzen-2",
      },
      {
        name: "Plano Elite",
        price: "119,90",
        features: ["6GB RAM", "60 GB NVMe"],
        icon: "/placeholder.svg?height=40&width=40&text=RS",
        contractUrl: "https://app.neonhost.com.br/index.php?rp=/store/vps-gamer/amd-ryzen-3",
      },
      {
        name: "Outros",
        price: null,
        features: ["+16 GB RAM", "+75 GB NVMe"],
        icon: "/placeholder.svg?height=40&width=40&text=MC",
        contractUrl: "https://app.neonhost.com.br/index.php?rp=/store/vps-gamer",
      },
    ],
  }

  const getPlansForGame = (gameId: string) => {
    return plans[gameId as keyof typeof plans] || plans.default
  }
  
  const handleGameClick = (gameId: string) => {
    setSelectedGame(gameId)
  }

  const getSelectedGameUrl = () => {
    const selectedGameObj = games.find((game) => game.id === selectedGame)
    return selectedGameObj ? selectedGameObj.url : "/game"
  }

  // Encontrar o jogo selecionado para exibir sua imagem maior
  const selectedGameObj = games.find((game) => game.id === selectedGame)

  // Variantes de animação para diferentes elementos
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  }

  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  }

  const highlightVariants = {
    initial: { scale: 1 },
    highlight: {
      scale: [1, 1.05, 1],
      boxShadow: [
        "0px 0px 0px rgba(236, 72, 153, 0)",
        "0px 0px 20px rgba(236, 72, 153, 0.5)",
        "0px 0px 0px rgba(236, 72, 153, 0)",
      ],
      transition: {
        duration: 1.5,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
        ease: "easeInOut",
        times: [0, 0.5, 1],
      },
    },
  }

  return (
    <section className="py-16 bg-[#0a0a0e] overflow-hidden">
      <motion.div
        className="container mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        {/* Header otimizado */}
        <div className="mb-12">
          <motion.h2
            className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Sua plataforma de servidores de jogos
          </motion.h2>
          <p className="text-gray-400 text-lg max-w-3xl">
            Com nossa plataforma, você cria servidores de jogo online com facilidade.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Game Grid */}
          <motion.div className="lg:w-1/2" variants={itemVariants}>
            {/* Imagem do jogo selecionado em destaque */}
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedGame}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="mb-6 bg-gray-800/50 border border-pink-500 rounded-lg p-4 flex items-center justify-center relative overflow-hidden"
              >
                {selectedGameObj && (
                  <>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10"
                      animate={{
                        background: [
                          "linear-gradient(90deg, rgba(236,72,153,0.1) 0%, rgba(168,85,247,0.1) 100%)",
                          "linear-gradient(90deg, rgba(168,85,247,0.1) 0%, rgba(236,72,153,0.1) 100%)",
                          "linear-gradient(90deg, rgba(236,72,153,0.1) 0%, rgba(168,85,247,0.1) 100%)",
                        ],
                      }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                    />
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <Image
                        src={selectedGameObj.logo || "/placeholder.svg"}
                        alt={selectedGameObj.name}
                        width={240}
                        height={120}
                        className="h-16 w-auto object-contain relative z-10"
                      />
                    </motion.div>
                  </>
                )}
              </motion.div>
            </AnimatePresence>

            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4"
              variants={containerVariants}
            >
              {games.map((game, index) => (
                <motion.button
                  key={game.id}
                  onClick={() => handleGameClick(game.id)}
                  className={`bg-gray-800/50 border ${
                    selectedGame === game.id ? "border-pink-500" : "border-gray-700"
                  } rounded-lg p-4 h-24 flex items-center justify-center hover:border-pink-500/70 transition-colors relative overflow-hidden`}
                  variants={itemVariants}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.2 },
                  }}
                  whileTap={{ scale: 0.95 }}
                  custom={index}
                >
                  {selectedGame === game.id && (
                    <motion.div
                      className="absolute inset-0 bg-pink-500/10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      layoutId="selectedGameBackground"
                    />
                  )}
                  <Image
                    src={game.logo || "/placeholder.svg"}
                    alt={game.name}
                    width={120}
                    height={60}
                    className="max-h-12 w-auto object-contain relative z-10"
                  />
                </motion.button>
              ))}
              <motion.button
                className="bg-gray-800/50 border border-gray-700 rounded-lg p-4 h-24 flex items-center justify-center hover:border-pink-500/70 transition-colors"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Plus className="h-8 w-8 text-gray-400" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Plans */}
          <motion.div
            className="lg:w-1/2 bg-gray-800/30 rounded-xl p-6 relative overflow-hidden"
            variants={itemVariants}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-purple-500/5"
              animate={{
                background: [
                  "linear-gradient(135deg, rgba(236,72,153,0.05) 0%, rgba(168,85,247,0.05) 100%)",
                  "linear-gradient(135deg, rgba(168,85,247,0.05) 0%, rgba(236,72,153,0.05) 100%)",
                  "linear-gradient(135deg, rgba(236,72,153,0.05) 0%, rgba(168,85,247,0.05) 100%)",
                ],
              }}
              transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
            />

            <motion.div className="flex items-center justify-between mb-6 relative z-10" variants={fadeVariants}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedGame + "-header"}
                  className="flex items-center"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-xl font-bold capitalize">{selectedGameObj?.name || selectedGame}</h3>
                </motion.div>
              </AnimatePresence>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href={getSelectedGameUrl()} className="text-pink-500 hover:text-pink-400 text-sm relative group">
                  Ver todos os planos
                  <motion.span
                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 group-hover:w-full"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            </motion.div>

            <AnimatePresence mode="wait">
              <motion.div
                key={selectedGame + "-plans"}
                className="space-y-3 relative z-10"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                exit={{ opacity: 0 }}
              >
                {getPlansForGame(selectedGame).map((plan, index) => (
                  <motion.div
                    key={plan.name}
                    variants={itemVariants}
                    custom={index}
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.2 },
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 300,
                      damping: 24,
                    }}
                  >
                    <Link
                      href={plan.contractUrl}
                      className="block bg-gray-800/70 hover:bg-gray-800 border border-gray-700 rounded-lg py-3 px-4 transition-colors hover:border-pink-500/50 relative overflow-hidden"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-pink-500/0 via-pink-500/5 to-pink-500/0"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 1 }}
                      />
                      <div className="flex items-center justify-between relative z-10">
                        <div className="flex items-center">
                          <div>
                            <h4 className="font-bold">{plan.name}</h4>
                            <p className="text-sm text-gray-400">{plan.features.join(", ")}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <motion.div
                            className="text-pink-500 font-bold"
                            initial={{ opacity: 0.8 }}
                            whileHover={{ opacity: 1 }}
                          >
                           
                            <motion.span
                              className="text-xl"
                              whileHover={{
                                color: "#f472b6",
                                textShadow: "0 0 8px rgba(244, 114, 182, 0.5)",
                              }}
                            >
                              {plan.price ? `R$ ${plan.price}` : "Sob Consulta"}
                            </motion.span>
                          </motion.div>
                          <div className="text-xs text-gray-400"> {plan.price ? `/Por mês` : ""}</div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
