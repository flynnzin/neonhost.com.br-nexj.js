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
    id: "minecraft-1gb",
    name: "Minecraft - 1GB",
    price: 13.9,
    originalPrice: 29.9,
    discount: 53,
    players: 5,
    ram: "2GB",
    cpu: "2 vCores",
    storage: "10GB NVMe",
    features: [
      "Backup Diário Automático",
      "Suporte 24/7 Especializado",
      "Proteção Anti-DDoS",
      "Painel de Controle Web",
      "Modpacks Pré-instalados",
      "Plugins Ilimitados",
      "Acesso FTP/SFTP",
      "Banco MySQL Incluído",
    ],
    paymentLink: "https://app.neonhost.com.br/index.php?rp=/store/minecraft/plano-simples",
    edition: "java", // Definido como Java Edition
  },
  {
    id: "minecraft-3gb",
    name: "Minecraft - 3GB",
    price: 33.9,
    originalPrice: 59.9,
    discount: 43,
    players: 25,
    ram: "3GB",
    cpu: "4 vCores",
    storage: "25GB NVMe",
    features: [
      "Backup Diário Automático",
      "Suporte 24/7 Especializado",
      "Proteção Anti-DDoS",
      "Painel de Controle Web",
      "Modpacks Pré-instalados",
      "Plugins Ilimitados",
      "Acesso FTP/SFTP",
      "Banco MySQL Incluído",
      "Instalador de Mods",
      "Mundos Customizados",
    ],
    paymentLink: "https://app.neonhost.com.br/index.php?rp=/store/minecraft/plano-basic",
    isPopular: true,
    edition: "java", // Definido como Java Edition
  },
  {
    id: "minecraft-6gb",
    name: "Minecraft - 6GB",
    price: 49.9,
    originalPrice: 119.9,
    discount: 58,
    players: 50,
    ram: "6GB",
    cpu: "6 vCores",
    storage: "50GB NVMe",
    features: [
      "Backup Diário Automático",
      "Suporte 24/7 Especializado",
      "Proteção Anti-DDoS",
      "Painel de Controle Web",
      "Modpacks Pré-instalados",
      "Plugins Ilimitados",
      "Acesso FTP/SFTP",
      "Banco MySQL Incluído",
      "Instalador de Mods",
      "Mundos Customizados",
      "Suporte a Forge/Fabric",
      "Backup Sob Demanda",
    ],
    paymentLink: "https://app.neonhost.com.br/index.php?rp=/store/minecraft/plano-advanced",
    isRecommended: true,
    edition: "java", // Definido como Java Edition
  },
  {
    id: "minecraft-8gb",
    name: "Minecraft - 8GB",
    price: 77.42,
    originalPrice: 159.9,
    discount: 52,
    players: 75,
    ram: "8GB",
    cpu: "6 vCores",
    storage: "75GB NVMe",
    features: [
      "Backup Diário Automático",
      "Suporte 24/7 Especializado",
      "Proteção Anti-DDoS",
      "Painel de Controle Web",
      "Modpacks Pré-instalados",
      "Plugins Ilimitados",
      "Acesso FTP/SFTP",
      "Banco MySQL Incluído",
      "Instalador de Mods",
      "Mundos Customizados",
      "Suporte a Forge/Fabric",
      "Backup Sob Demanda",
      "Suporte Prioritário",
      "Configurações Avançadas",
    ],
    paymentLink: "https://app.neonhost.com.br/index.php?rp=/store/minecraft/plano-pro",
    edition: "java", // Definido como Java Edition
  },
  {
    id: "minecraft-16gb",
    name: "Minecraft - 16GB",
    price: 94.92,
    originalPrice: 182.23,
    discount: 48,
    players: 100,
    ram: "16GB",
    cpu: "7 vCores",
    storage: "100GB NVMe",
    features: [
      "Backup Diário Automático",
      "Suporte 24/7 Especializado",
      "Proteção Anti-DDoS",
      "Painel de Controle Web",
      "Modpacks Pré-instalados",
      "Plugins Ilimitados",
      "Acesso FTP/SFTP",
      "Banco MySQL Incluído",
      "Instalador de Mods",
      "Mundos Customizados",
      "Suporte a Forge/Fabric",
      "Backup Sob Demanda",
      "Suporte Prioritário",
      "Configurações Avançadas",
      "Múltiplos Mundos",
      "API Personalizada",
    ],
    paymentLink: "https://app.neonhost.com.br/index.php?rp=/store/minecraft/plano-ultra",
    edition: "java", // Definido como Java Edition
  },
  {
    id: "minecraft-20gb",
    name: "Minecraft - 20GB",
    price: 129.92,
    originalPrice: 210.23,
    discount: 38,
    players: 125,
    ram: "20GB",
    cpu: "8 vCores",
    storage: "150GB NVMe",
    features: [
      "Backup Diário Automático",
      "Suporte 24/7 Especializado",
      "Proteção Anti-DDoS",
      "Painel de Controle Web",
      "Modpacks Pré-instalados",
      "Plugins Ilimitados",
      "Acesso FTP/SFTP",
      "Banco MySQL Incluído",
      "Instalador de Mods",
      "Mundos Customizados",
      "Suporte a Forge/Fabric",
      "Backup Sob Demanda",
      "Suporte Prioritário",
      "Configurações Avançadas",
      "Múltiplos Mundos",
      "API Personalizada",
      "Suporte Dedicado",
      "Configuração Personalizada",
    ],
    paymentLink: "https://app.neonhost.com.br/index.php?rp=/store/minecraft/plano-enterprise",
    edition: "java", // Definido como Java Edition
  },
  // Exemplo de plano Bedrock (você pode adicionar mais ou ajustar conforme necessário)
  {
    id: "minecraft-bedrock-basic",
    name: "Minecraft Bedrock Básico",
    price: 15.9,
    originalPrice: undefined, // changed from null to undefined
    discount: undefined,      // changed from null to undefined
    players: 15,
    ram: "2GB",
    cpu: "2 vCores",
    storage: "15GB NVMe",
    features: [
      "Backup Diário Automático",
      "Suporte 24/7 Especializado",
      "Proteção Anti-DDoS",
      "Painel de Controle Web",
      "Add-ons e Comportamentos",
      "Acesso FTP/SFTP",
    ],
    paymentLink: "https://app.neonhost.com.br/index.php?rp=/store/minecraft/plano-bedrock-basico",
    edition: "bedrock", // Definido como Bedrock Edition
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
