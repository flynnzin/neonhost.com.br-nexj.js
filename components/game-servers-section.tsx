"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { ChevronRight, Gamepad2, Server, Shield, Cpu, HardDrive, Users, ArrowRight, Sparkles } from "lucide-react"

export default function GameServersSection() {
  const [selectedGame, setSelectedGame] = useState("minecraft")
  const [isLoaded, setIsLoaded] = useState(false)
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 })

  // Efeito para marcar quando o componente estiver carregado
  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const games = [
    { id: "minecraft", name: "Minecraft", logo: "/games/mine.webp", url: "/games/minecraft", color: "#62B47F" },
    { id: "palworld", name: "Palworld", logo: "/games/pal.webp", url: "/games/palworld", color: "#4FACF7" },
    { id: "gtav", name: "GTA V", logo: "/games/gtavF.webp", url: "/games/gtav", color: "#F7AF4F" },
    { id: "rust", name: "Rust", logo: "/games/rustF.webp", url: "/games/rust", color: "#CD412B" },
    { id: "7days", name: "7 Days to Die", logo: "/games/7dtd.webp", url: "/games/7days", color: "#B33E3E" },
    { id: "dayz", name: "DayZ", logo: "/games/dayzF.webp", url: "/games/dayz", color: "#5D7F62" },
    { id: "zomboid", name: "Project Zomboid", logo: "/games/zomboid.webp", url: "/games/zomboid", color: "#4A6D8C" },
    { id: "terraria", name: "Terraria", logo: "/games/terrariaF.webp", url: "/games/terraria", color: "#9553FF" },
    { id: "arma3", name: "Arma 3", logo: "/games/armareforgerF.webp", url: "/games/arma3", color: "#8C4A4A" },
    { id: "aloft", name: "Aloft", logo: "/games/aloftF.webp", url: "/games/aloft", color: "#4F7FAF" },
    {
      id: "enshrouded",
      name: "Enshrouded",
      logo: "/games/enshrouded.webp",
      url: "/games/enshrouded",
      color: "#7F4F6F",
    },
  ]

  const plans = {
    zomboid: [
      {
        name: "Zomboid 4GB",
        price: "69,90",
        features: ["4GB RAM", "15 GB NVMe", "Até 10 jogadores", "Suporte 24/7"],
        icon: <Gamepad2 className="h-5 w-5" />,
        contractUrl: "https://app.neonhost.com.br/index.php?rp=/store/project-zomboid/zomboid-4gb",
        recommended: false,
      },
      {
        name: "Zomboid 6GB",
        price: "89,90",
        features: ["6GB RAM", "25 GB NVMe", "Até 20 jogadores", "Suporte 24/7"],
        icon: <Gamepad2 className="h-5 w-5" />,
        contractUrl: "https://app.neonhost.com.br/index.php?rp=/store/project-zomboid/zomboid-6gb",
        recommended: true,
      },
      {
        name: "Zomboid 8GB",
        price: "119,90",
        features: ["10GB RAM", "40 GB NVMe", "Até 40 jogadores", "Suporte 24/7"],
        icon: <Gamepad2 className="h-5 w-5" />,
        contractUrl: "https://app.neonhost.com.br/index.php?rp=/store/project-zomboid/zomboid-8gb",
        recommended: false,
      },
      {
        name: "Plano Personalizado",
        price: null,
        features: ["+16 GB RAM", "+75 GB NVMe", "Jogadores ilimitados", "Suporte prioritário"],
        icon: <Sparkles className="h-5 w-5" />,
        contractUrl: "https://app.neonhost.com.br/index.php?rp=/store/project-zomboid/",
        recommended: false,
      },
    ],
    minecraft: [
      {
        name: "Plano Bedrock",
        price: "13,90",
        features: ["2 GB RAM", "Exclusivo Bedrock", "Até 10 jogadores", "Painel de controle"],
        icon: <Gamepad2 className="h-5 w-5" />,
        contractUrl: "https://app.neonhost.com.br/index.php?rp=/store/minecraft/plano-simples",
        recommended: false,
      },
      {
        name: "Plano Basic",
        price: "33,90",
        features: ["4 GB RAM", "Mods e Plugins", "Até 20 jogadores", "Painel de controle"],
        icon: <Gamepad2 className="h-5 w-5" />,
        contractUrl: "https://app.neonhost.com.br/index.php?rp=/store/minecraft/plano-basic",
        recommended: true,
      },
      {
        name: "Plano Advanced",
        price: "49,90",
        features: ["8 GB RAM", "Mods e Plugins", "Até 40 jogadores", "Painel de controle"],
        icon: <Server className="h-5 w-5" />,
        contractUrl: "https://app.neonhost.com.br/index.php?rp=/store/minecraft/plano-advanced",
        recommended: false,
      },
      {
        name: "Plano Personalizado",
        price: null,
        features: ["+8 GB RAM", "Mods e Plugins", "Jogadores ilimitados", "Suporte prioritário"],
        icon: <Sparkles className="h-5 w-5" />,
        contractUrl: "https://app.neonhost.com.br/index.php?rp=/store/minecraft",
        recommended: false,
      },
    ],
    palworld: [
      {
        name: "Plano Básico",
        price: "29,90",
        features: ["10 jogadores", "6GB RAM", "Backups automáticos", "Painel de controle"],
        icon: <Gamepad2 className="h-5 w-5" />,
        contractUrl: "https://app.neonhost.com.br/index.php?rp=/store/palworld/palworld-6gb",
        recommended: false,
      },
      {
        name: "Plano Premium",
        price: "49,90",
        features: ["20 jogadores", "10GB RAM", "Backups automáticos", "Painel de controle"],
        icon: <Server className="h-5 w-5" />,
        contractUrl: "https://app.neonhost.com.br/index.php?rp=/store/palworld/palworld-10gb",
        recommended: true,
      },
      {
        name: "Plano Ultimate",
        price: "79,90",
        features: ["40 jogadores", "14GB RAM", "Backups automáticos", "Painel de controle"],
        icon: <Shield className="h-5 w-5" />,
        contractUrl: "https://app.neonhost.com.br/index.php?rp=/store/palworld/palworld-14gb",
        recommended: false,
      },
      {
        name: "Plano Personalizado",
        price: null,
        features: ["+40 jogadores", "+14GB RAM", "Backups automáticos", "Suporte prioritário"],
        icon: <Sparkles className="h-5 w-5" />,
        contractUrl: "https://app.neonhost.com.br/index.php?rp=/store/minecraft",
        recommended: false,
      },
    ],
    rust: [
      {
        name: "Plano Starter",
        price: "109,90",
        features: ["50 slots", "10GB RAM", "Anti-DDoS", "Painel de controle"],
        icon: <Gamepad2 className="h-5 w-5" />,
        contractUrl: "https://app.neonhost.com.br/index.php?rp=/store/rust/rust-10gb",
        recommended: false,
      },
      {
        name: "Plano Pro",
        price: "169,90",
        features: ["100 slots", "16GB RAM", "Anti-DDoS", "Painel de controle"],
        icon: <Server className="h-5 w-5" />,
        contractUrl: "https://app.neonhost.com.br/index.php?rp=/store/rust/rust-16gb",
        recommended: true,
      },
      {
        name: "Plano Elite",
        price: "209,90",
        features: ["200 slots", "20GB RAM", "Anti-DDoS", "Painel de controle"],
        icon: <Shield className="h-5 w-5" />,
        contractUrl: "https://app.neonhost.com.br/index.php?rp=/store/rust/rust-20gb",
        recommended: false,
      },
      {
        name: "Plano Personalizado",
        price: null,
        features: ["+24 GB RAM", "+300 slots", "Anti-DDoS", "Suporte prioritário"],
        icon: <Sparkles className="h-5 w-5" />,
        contractUrl: "https://app.neonhost.com.br/index.php?rp=/store/vps-gamer",
        recommended: false,
      },
    ],
    gtav: [
      {
        name: "AMD Ryzen - 1",
        price: "69,90",
        features: ["2GB RAM", "40 GB NVMe", "Anti-DDoS", "Painel de controle"],
        icon: <Cpu className="h-5 w-5" />,
        contractUrl: "https://app.neonhost.com.br/index.php?rp=/store/vps-gamer/amd-ryzen-1",
        recommended: false,
      },
      {
        name: "AMD Ryzen - 2",
        price: "89,90",
        features: ["4GB RAM", "40 GB NVMe", "Anti-DDoS", "Painel de controle"],
        icon: <Cpu className="h-5 w-5" />,
        contractUrl: "https://app.neonhost.com.br/index.php?rp=/store/vps-gamer/amd-ryzen-2",
        recommended: false,
      },
      {
        name: "Plano Elite",
        price: "119,90",
        features: ["6GB RAM", "60 GB NVMe", "Anti-DDoS", "Painel de controle"],
        icon: <Shield className="h-5 w-5" />,
        contractUrl: "https://app.neonhost.com.br/index.php?rp=/store/vps-gamer/amd-ryzen-3",
        recommended: true,
      },
      {
        name: "Plano Personalizado",
        price: null,
        features: ["+16 GB RAM", "+75 GB NVMe", "Anti-DDoS", "Suporte prioritário"],
        icon: <Sparkles className="h-5 w-5" />,
        contractUrl: "https://app.neonhost.com.br/index.php?rp=/store/vps-gamer",
        recommended: false,
      },
    ],
    // Planos padrão para outros jogos
    default: [
      {
        name: "AMD Ryzen - 1",
        price: "69,90",
        features: ["2GB RAM", "40 GB NVMe", "Anti-DDoS", "Painel de controle"],
        icon: <Cpu className="h-5 w-5" />,
        contractUrl: "https://app.neonhost.com.br/index.php?rp=/store/vps-gamer/amd-ryzen-1",
        recommended: false,
      },
      {
        name: "AMD Ryzen - 2",
        price: "89,90",
        features: ["4GB RAM", "40 GB NVMe", "Anti-DDoS", "Painel de controle"],
        icon: <Cpu className="h-5 w-5" />,
        contractUrl: "https://app.neonhost.com.br/index.php?rp=/store/vps-gamer/amd-ryzen-2",
        recommended: true,
      },
      {
        name: "Plano Elite",
        price: "119,90",
        features: ["6GB RAM", "60 GB NVMe", "Anti-DDoS", "Painel de controle"],
        icon: <Shield className="h-5 w-5" />,
        contractUrl: "https://app.neonhost.com.br/index.php?rp=/store/vps-gamer/amd-ryzen-3",
        recommended: false,
      },
      {
        name: "Plano Personalizado",
        price: null,
        features: ["+16 GB RAM", "+75 GB NVMe", "Anti-DDoS", "Suporte prioritário"],
        icon: <Sparkles className="h-5 w-5" />,
        contractUrl: "https://app.neonhost.com.br/index.php?rp=/store/vps-gamer",
        recommended: false,
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
    return selectedGameObj ? selectedGameObj.url : "/games"
  }

  // Encontrar o jogo selecionado para exibir sua imagem maior
  const selectedGameObj = games.find((game) => game.id === selectedGame)
  const selectedGameColor = selectedGameObj?.color || "#9553ff"

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

  return (
    <section className="w-full py-20 overflow-hidden relative" ref={sectionRef}>
      {/* Background elements */}
      <div className="absolute inset-0 bg-[#0a0a0e] -z-10"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#9553ff]/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#ff3e9d]/50 to-transparent"></div>
        <div className="absolute -top-[400px] -left-[400px] w-[800px] h-[800px] rounded-full bg-[#9553ff]/5 blur-[120px]"></div>
        <div className="absolute -bottom-[400px] -right-[400px] w-[800px] h-[800px] rounded-full bg-[#ff3e9d]/5 blur-[120px]"></div>
      </div>

      <div className="w-full px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <motion.div
            className="inline-flex items-center justify-center mb-4 bg-gradient-to-br from-[#9553ff]/20 to-[#ff3e9d]/20 p-3 rounded-full"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Gamepad2 className="h-8 w-8 text-[#ff3e9d]" />
          </motion.div>
          <h2 className="text-5xl md:text-5xl font-bold mb-5 bg-clip-text text-transparent bg-gradient-to-r from-[#9553ff] to-[#ff3e9d]">
            Sua plataforma de servidores
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Com nossa plataforma, você cria servidores de jogo online com facilidade e desempenho superior.
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Game Selection - Left Side */}
          <motion.div
            className="lg:col-span-4 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Featured Game Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`featured-${selectedGame}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="relative rounded-2xl overflow-hidden h-[200px] group"
                style={{
                  background: `linear-gradient(135deg, ${selectedGameColor}20 0%, #0a0a0e 100%)`,
                  boxShadow: `0 0 40px ${selectedGameColor}10`,
                }}
              >
                {selectedGameObj && (
                  <>
                    {/* Animated background */}
                    <motion.div
                      className="absolute inset-0 opacity-30"
                      animate={{
                        background: [
                          `radial-gradient(circle at 30% 30%, ${selectedGameColor}30 0%, transparent 70%)`,
                          `radial-gradient(circle at 70% 70%, ${selectedGameColor}30 0%, transparent 70%)`,
                          `radial-gradient(circle at 30% 30%, ${selectedGameColor}30 0%, transparent 70%)`,
                        ],
                      }}
                      transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    />

                    {/* Game logo */}
                    <div className="absolute inset-0 flex items-center justify-center p-8">
                      <motion.div
                        initial={{ y: 10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        <Image
                          src={selectedGameObj.logo || "/placeholder.svg"}
                          alt={selectedGameObj.name}
                          width={240}
                          height={120}
                          className="h-24 w-auto object-contain z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] group-hover:scale-105 transition-transform duration-500"
                        />
                      </motion.div>
                    </div>

                    {/* Bottom gradient overlay */}
                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0a0a0e] to-transparent" />

                    {/* Game name */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                      <h3 className="text-xl font-bold text-white">{selectedGameObj.name}</h3>
                      <div className="h-1 w-16 mx-auto mt-2 rounded-full" style={{ background: selectedGameColor }} />
                    </div>
                  </>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Game Selection Grid */}
            <div className="bg-[#0f0f13] border border-gray-800 rounded-xl p-4">
              <h3 className="text-sm font-medium text-gray-400 mb-3 flex items-center">
                <Server className="h-4 w-4 mr-2 text-[#9553ff]" />
                Escolha seu jogo
              </h3>

              <div className="grid grid-cols-3 gap-3">
                {games.slice(0, 9).map((game) => (
                  <motion.button
                    key={game.id}
                    onClick={() => handleGameClick(game.id)}
                    className={`relative rounded-lg p-2 h-16 flex items-center justify-center transition-all duration-300 overflow-hidden ${
                      selectedGame === game.id ? "ring-2" : "hover:ring-1 hover:bg-gray-800/50"
                    }`}
                    style={{
                      background: selectedGame === game.id ? `${game.color}15` : "rgba(17, 17, 23, 0.5)",
                      // ringColor: selectedGame === game.id ? game.color : "transparent",
                    }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Image
                      src={game.logo || "/placeholder.svg"}
                      alt={game.name}
                      width={80}
                      height={40}
                      className="max-h-10 w-auto object-contain"
                    />

                    {selectedGame === game.id && (
                      <motion.div
                        className="absolute inset-0 opacity-20"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.2 }}
                        layoutId="selectedGameHighlight"
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Game Features */}
            <div className="bg-[#0f0f13] border border-gray-800 rounded-xl p-4">
              <h3 className="text-sm font-medium text-gray-400 mb-3 flex items-center">
                <Shield className="h-4 w-4 mr-2 text-[#ff3e9d]" />
                Recursos inclusos
              </h3>

              <div className="space-y-3">
                {[
                  { icon: <Shield className="h-4 w-4 text-[#ff3e9d]" />, text: "Proteção Anti-DDoS avançada" },
                  { icon: <Server className="h-4 w-4 text-[#9553ff]" />, text: "Armazenamento NVMe ultrarrápido" },
                  { icon: <Cpu className="h-4 w-4 text-[#ff3e9d]" />, text: "Processadores AMD Ryzen" },
                  { icon: <HardDrive className="h-4 w-4 text-[#9553ff]" />, text: "Backups automáticos" },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center p-2 rounded-lg bg-gray-800/20 border border-gray-800/50"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                  >
                    <div className="mr-3 p-1.5 rounded-full bg-gray-800/50">{feature.icon}</div>
                    <span className="text-sm text-gray-300">{feature.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Plans - Right Side */}
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-[#0f0f13] border border-gray-800 rounded-2xl overflow-hidden">
              {/* Header */}
              <div className="p-6 border-b border-gray-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                  <AnimatePresence mode="wait">
                    <motion.h3
                      key={`title-${selectedGame}`}
                      className="text-xl font-bold text-white flex items-center"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      Planos para {selectedGameObj?.name || ""}
                      <div className="ml-2 h-2 w-2 rounded-full" style={{ background: selectedGameColor }} />
                    </motion.h3>
                  </AnimatePresence>
                  <p className="text-gray-400 text-sm mt-1">Escolha o plano ideal para seu servidor</p>
                </div>

                <Link
                  href={getSelectedGameUrl()}
                  className="group flex items-center text-sm font-medium text-[#9553ff] hover:text-[#ff3e9d] transition-colors"
                >
                  Ver todos os planos
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Plans Grid */}
              <div className="p-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`plans-${selectedGame}`}
                    className="grid grid-cols-1 md:grid-cols-2 gap-4"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={containerVariants}
                  >
                    {getPlansForGame(selectedGame).map((plan, index) => (
                      <motion.div
                        key={`${selectedGame}-${plan.name}`}
                        variants={itemVariants}
                        onHoverStart={() => setHoveredPlan(plan.name)}
                        onHoverEnd={() => setHoveredPlan(null)}
                        className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
                          plan.recommended ? "border-2" : "border"
                        }`}
                        style={{
                          borderColor: plan.recommended
                            ? selectedGameColor
                            : hoveredPlan === plan.name
                              ? `${selectedGameColor}50`
                              : "rgba(31, 41, 55, 0.5)",
                          background:
                            hoveredPlan === plan.name || plan.recommended
                              ? `linear-gradient(135deg, ${selectedGameColor}10 0%, rgba(17, 17, 23, 0.8) 100%)`
                              : "rgba(17, 17, 23, 0.5)",
                        }}
                      >
                        {/* Recommended badge */}
                        {plan.recommended && (
                          <div
                            className="absolute top-0 right-0 text-xs font-medium py-1 px-3 rounded-bl-lg"
                            style={{ background: selectedGameColor, color: "#fff" }}
                          >
                            Recomendado
                          </div>
                        )}

                        <div className="p-5">
                          {/* Header */}
                          <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center">
                              <div
                                className="w-8 h-8 rounded-full flex items-center justify-center mr-3"
                                style={{ background: `${selectedGameColor}20` }}
                              >
                                {typeof plan.icon === "string" ? (
                                  <Image src={plan.icon || "/placeholder.svg"} alt="" width={20} height={20} />
                                ) : (
                                  <div className="text-white">{plan.icon}</div>
                                )}
                              </div>
                              <div>
                                <h4 className="font-bold text-white">{plan.name}</h4>
                              </div>
                            </div>

                            <div className="text-right">
                              {plan.price ? (
                                <>
                                  <div className="text-2xl font-bold" style={{ color: selectedGameColor }}>
                                    R$ {plan.price}
                                  </div>
                                  <div className="text-xs text-gray-400">/mês</div>
                                </>
                              ) : (
                                <div className="text-lg font-medium text-[#ff3e9d]">Sob Consulta</div>
                              )}
                            </div>
                          </div>

                          {/* Features */}
                          <div className="space-y-2 mb-5">
                            {plan.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center text-sm text-gray-300">
                                <div
                                  className="w-1.5 h-1.5 rounded-full mr-2"
                                  style={{ background: selectedGameColor }}
                                />
                                {feature}
                              </div>
                            ))}
                          </div>

                          {/* Action button */}
                          <Link
                            href={plan.contractUrl}
                            className="block w-full py-2.5 px-4 rounded-lg text-center text-sm font-medium transition-all duration-300"
                            style={{
                              background:
                                hoveredPlan === plan.name || plan.recommended
                                  ? selectedGameColor
                                  : `${selectedGameColor}20`,
                              color: hoveredPlan === plan.name || plan.recommended ? "#fff" : selectedGameColor,
                            }}
                          >
                            {plan.price ? "Contratar agora" : "Solicitar orçamento"}
                            <ChevronRight className="inline-block ml-1 h-4 w-4" />
                          </Link>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-gray-800 bg-gray-900/30">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-[#ff3e9d] mr-2" />
                    <span className="text-sm text-gray-400">Milhares de jogadores confiam na NeonHost</span>
                  </div>

                  <div className="hidden md:flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <motion.div
                        key={star}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + star * 0.1 }}
                      >
                        <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      </motion.div>
                    ))}
                    <span className="text-sm text-gray-400 ml-1">5.0</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
