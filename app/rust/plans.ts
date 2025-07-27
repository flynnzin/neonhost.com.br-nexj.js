export interface MinecraftPlan {
  id: string
  name: string
  price: number
  originalPrice?: number
  discount?: number
  players: number
  ram: string
  cpu: string
  storage: string
  features: string[]
  paymentLink: string
  isPopular?: boolean
  isRecommended?: boolean
  edition: "java" | "bedrock" // Adicionado a propriedade edition
}

export const minecraftPlans: MinecraftPlan[] = [
  {
    id: "rust-12gb",
    name: "Rust - 12GB",
    price: 124.90,
    // originalPrice: 59.9,
    // discount: 43,
    players: 100,
    ram: "12GB",
    cpu: "4 vCores",
    storage: "45GB NVMe",
    features: [
      "RustAdmin",
          "Oxide",
          "Backup Automático",
          "Suporte 24/7",
          "Anti-DDoS",
          "Plugins Premium",
          "Mapas Custom",
    ],
    paymentLink: "https://app.neonhost.com.br/index.php?rp=/store/rust/rust-10gb",
    isPopular: true,
    edition: "java", // Definido como Java Edition
  },
  {
    id: "rust-16gb",
    name: "Rust - 16GB",
    price: 197.9,
    // originalPrice: 119.9,
    // discount: 58,
    players: 175,
    ram: "16GB",
    cpu: "6 vCores",
    storage: "60GB NVMe",
    features: [
      "RustAdmin",
          "Oxide",
          "Backup Automático",
          "Suporte 24/7",
          "Anti-DDoS",
          "Plugins Premium",
          "Mapas Custom",
    ],
    paymentLink: "https://app.neonhost.com.br/index.php?rp=/store/rust/rust-16gb",
    isRecommended: true,
    edition: "java", // Definido como Java Edition
  },
  {
    id: "rust-20gb",
    name: "Rust - 20GB",
    price: 259.9,
    // originalPrice: 159.9,
    // discount: 52,
    players: 300,
    ram: "20GB",
    cpu: "6 vCores",
    storage: "75GB NVMe",
    features: [
      "RustAdmin",
          "Oxide",
          "Backup Automático",
          "Suporte 24/7",
          "Anti-DDoS",
          "Plugins Premium",
          "Mapas Custom",
    ],
    paymentLink: "https://app.neonhost.com.br/index.php?rp=/store/rust/rust-20gb",
    edition: "java", // Definido como Java Edition
  },
]

export const minecraftFeatures = [
  {
    title: "Modpacks Automáticos",
    description: "Instale modpacks populares como Pixelmon, SkyFactory, RLCraft com um clique",
    icon: "⚡",
  },
  {
    title: "Backup Diário",
    description: "Seus mundos são salvos automaticamente todos os dias, sem perda de dados",
    icon: "💾",
  },
  {
    title: "Suporte 24/7",
    description: "Equipe especializada em Minecraft disponível 24 horas por dia",
    icon: "🎧",
  },
  {
    title: "Anti-DDoS Incluído",
    description: "Proteção avançada contra ataques DDoS sem custo adicional",
    icon: "🛡️",
  },
  {
    title: "Painel Intuitivo",
    description: "Gerencie seu servidor através de um painel web fácil de usar",
    icon: "🎮",
  },
  {
    title: "Plugins Ilimitados",
    description: "Instale quantos plugins quiser para personalizar seu servidor",
    icon: "🔧",
  },
]

export const supportedVersions = [
  {
    name: "Vanilla",
    description: "Minecraft puro, sem modificações",
    icon: "🍦",
  },
  {
    name: "Paper",
    description: "Otimizado para performance e plugins",
    icon: "📄",
  },
  {
    name: "Forge",
    description: "Suporte completo para mods",
    icon: "⚒️",
  },
  {
    name: "Fabric",
    description: "Framework moderno para mods",
    icon: "🧵",
  },
  {
    name: "Bedrock",
    description: "Para dispositivos móveis e consoles",
    icon: "📱",
  },
  {
    name: "Mohist",
    description: "Mods e plugins juntos",
    icon: "🔥",
  },
]

export const popularModpacks = [
  {
    name: "Pixelmon",
    description: "Pokémon no mundo do Minecraft",
    players: "2.5K+",
  },
  {
    name: "SkyFactory",
    description: "Sobrevivência no céu",
    players: "1.8K+",
  },
  {
    name: "RLCraft",
    description: "Minecraft extremamente difícil",
    players: "3.2K+",
  },
  {
    name: "All The Mods",
    description: "Centenas de mods em um pack",
    players: "1.5K+",
  },
  {
    name: "SkyBlock",
    description: "Sobrevivência em uma ilha",
    players: "4.1K+",
  },
  {
    name: "Prison",
    description: "Sistema de prisão e mineração",
    players: "2.9K+",
  },
]
