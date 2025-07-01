export interface Game {
  id: string
  name: string
  slug: string
  image: string
  logo?: string
  featuredImage?: string
  description: string
  shortDescription: string
  price: number
  originalPrice?: number
  discount?: number
  category: string
  rating: number
  players: string
  isPopular?: boolean
  isNew?: boolean
  isFeatured?: boolean
  paymentLink: string
  vpsLink?: string
  communityLink?: string
  platforms: string[]
  developer: string
  features: string[]
  minPlayers: number
  maxPlayers: number
  requirements: {
    ram: string
    cpu: string
    storage: string
  }
  plans: {
    id: string
    name: string
    price: number
    originalPrice?: number
    players: number
    ram: string
    cpu: string
    storage: string
    features: string[]
    paymentLink: string
  }[]
  faq: {
    question: string
    answer: string
  }[]
  testimonials: {
    title: string
    author: string
    content: string
    rating: number
  }[]
}

export const gamesConfig: Game[] = [
    // MINECRAFT
  {
    id: "minecraft",
    name: "Minecraft",
    slug: "minecraft",
    image: "/games/minecraft.webp",
    logo: "/games/minecraft.webp",
    featuredImage: "/games/minecraft.webp",
    description:
      "Na NeonHost, oferecemos servidores populares como Vanilla, Forge, Mohist, Paper e Bedrock Edition, além de modpacks como Pixelmon, SkyFactory e RLCraft. Nossos servidores são otimizados para oferecer a melhor experiência de jogo possível.",
    shortDescription: "O jogo de construção mais popular do mundo com mods ilimitados",
    price: 19.9,
    originalPrice: 29.9,
    discount: 34,
    category: "Sandbox",
    rating: 4.9,
    players: "15.2K",
    isPopular: true,
    isFeatured: true,
    paymentLink: "https://app.neonhost.com.br/games/minecraft",
    vpsLink: "/vps-gamer",
    communityLink: "https://discord.gg/neonhost",
    platforms: ["PC", "Xbox", "PlayStation", "Switch", "Mobile"],
    developer: "Mojang Studios",
    features: [
      "Modpacks Automáticos",
      "Backup Diário",
      "Suporte 24/7",
      "Anti-DDoS Incluído",
      "Painel de Controle",
      "FTP/SFTP Access",
      "Plugins Ilimitados",
      "Mundos Customizados",
    ],
    minPlayers: 1,
    maxPlayers: 200,
    requirements: {
      ram: "2GB mínimo",
      cpu: "Intel i3 ou AMD equivalente",
      storage: "5GB disponível",
    },
    plans: [
      {
        id: "minecraft-1gb",
        name: "Minecraft - 1GB",
        price: 13.9,
        originalPrice: 29.9,
        players: 5,
        ram: "2GB",
        cpu: "2 vCores",
        storage: "10GB NVMe",
        features: [
            "Backup Diário",
          "Suporte 24/7",
          "Anti-DDoS",
          "Painel Web",
          "Modpacks",
          "Plugins",
          "FTP Access",
          "MySQL",
        ],
        paymentLink: "https://app.neonhost.com.br/index.php?rp=/store/minecraft/plano-simples",
      },
      {
        id: "minecraft-3gb",
        name: "Minecraft - 3GB",
        price: 33.9,
        originalPrice: 59.9,
        players: 25,
        ram: "3GB",
        cpu: "4 vCores",
        storage: "25GB NVMe",
        features: [
            "Backup Diário",
          "Suporte 24/7",
          "Anti-DDoS",
          "Painel Web",
          "Modpacks",
          "Plugins",
          "FTP Access",
          "MySQL",
        ],
        paymentLink: "https://app.neonhost.com.br/index.php?rp=/store/minecraft/plano-basic",
      },
      {
        id: "minecraft-6gb",
        name: "Minecraft - 6GB",
        price: 49.9,
        originalPrice: 119.9,
        players: 50,
        ram: "6GB",
        cpu: "6 vCores",
        storage: "50GB NVMe",
        features: [
          "Backup Diário",
          "Suporte 24/7",
          "Anti-DDoS",
          "Painel Web",
          "Modpacks",
          "Plugins",
          "FTP Access",
          "MySQL",
        ],
        paymentLink: "https://app.neonhost.com.br/index.php?rp=/store/minecraft/plano-advanced",
      },
      {
        id: "minecraft-8gb",
        name: "Minecraft - 8GB",
        price: 77.42,
        originalPrice: 159.9,
        players: 75,
        ram: "6GB",
        cpu: "6 vCores",
        storage: "50GB NVMe",
        features: [
          "Backup Diário",
          "Suporte 24/7",
          "Anti-DDoS",
          "Painel Web",
          "Modpacks",
          "Plugins",
          "FTP Access",
          "MySQL",
        ],
        paymentLink: "https://app.neonhost.com.br/index.php?rp=/store/minecraft/plano-pro",
      },
      {
        id: "minecraft-16gb",
        name: "Minecraft - 16GB",
        price: 94.92,
        originalPrice: 182.23,
        players: 100,
        ram: "16GB",
        cpu: "7 vCores",
        storage: "55GB NVMe",
        features: [
          "Backup Diário",
          "Suporte 24/7",
          "Anti-DDoS",
          "Painel Web",
          "Modpacks",
          "Plugins",
          "FTP Access",
          "MySQL",
        ],
        paymentLink: "https://app.neonhost.com.br/index.php?rp=/store/minecraft/plano-ultra",
      },
      {
        id: "minecraft-20gb",
        name: "Minecraft - 20GB",
        price: 129.92,
        originalPrice: 210.23,
        players: 125,
        ram: "20GB",
        cpu: "7 vCores",
        storage: "55GB NVMe",
        features: [
          "Backup Diário",
          "Suporte 24/7",
          "Anti-DDoS",
          "Painel Web",
          "Modpacks",
          "Plugins",
          "FTP Access",
          "MySQL",
        ],
        paymentLink: "https://app.neonhost.com.br/index.php?rp=/store/minecraft/plano-enterprise",
      },
    ],
    faq: [
      {
        question: "Onde estão localizados os servidores?",
        answer:
          "Nossos servidores estão localizados em São Paulo, Brasil, garantindo baixa latência para jogadores brasileiros.",
      },
      {
        question: "Como funciona o reembolso?",
        answer: "Oferecemos reembolso em até 7 dias após a compra, sem perguntas.",
      },
      {
        question: "Posso rodar mods?",
        answer:
          "Sim, todos os nossos planos suportam mods e plugins, exceto o plano Bedrock que é exclusivo para Minecraft Bedrock Edition.",
      },
      {
        question: "Posso aumentar meu plano?",
        answer: "Sim, você pode fazer upgrade do seu plano a qualquer momento através do painel de controle.",
      },
    ],
    testimonials: [
      {
        title: "NeonHost é incrível",
        author: "Humberto Junior",
        content:
          "A neonhost é incrível, custo benefício e um belo suporte, tanto pra colocar mods e essas coisas, recomendo e irei utilizar muito",
        rating: 5,
      },
      {
        title: "Uso e recomendo",
        author: "Alexandre Denardi",
        content:
          "Já uso a empresa para hospedar servidores a anos GTA RP, servidores Linux, hoje estou até mesmo com meu banco de dados hospedado, sem quedas e SLA perfeito.",
        rating: 5,
      },
    ],
  },


    // PWALWORD
  {
    id: "palworld",
    name: "Palworld",
    slug: "palworld",
    image: "/games/palworld.webp",
    logo: "/games/palworld.webp",
    featuredImage: "/games/palworld.webp",
    description:
      "Hospede seu próprio servidor de Palworld com a NeonHost. Capture, colecione e batalhe com criaturas em um mundo aberto cheio de aventuras e desafios. Nossos servidores são otimizados para suportar grandes quantidades de jogadores e Pals.",
    shortDescription: "Capture criaturas em um mundo aberto cheio de aventuras",
    price: 79.9,
    originalPrice: 120.0,
    discount: 34,
    category: "Aventura",
    rating: 4.8,
    players: "8.5K",
    isNew: true,
    isPopular: true,
    paymentLink: "https://app.neonhost.com.br/games/palworld",
    vpsLink: "/vps-gamer",
    communityLink: "https://discord.gg/neonhost",
    platforms: ["PC", "Xbox"],
    developer: "Pocketpair",
    features: [
      "Configuração Personalizada",
      "Backup Automático",
      "Suporte 24/7",
      "Anti-DDoS Incluído",
      "Painel de Controle",
      "Mods Suportados",
      "Mundo Persistente",
      "PvP/PvE Configurável",
    ],
    minPlayers: 1,
    maxPlayers: 32,
    requirements: {
      ram: "4GB mínimo",
      cpu: "Intel i5 ou AMD equivalente",
      storage: "8GB disponível",
    },
    plans: [
      {
        id: "palworld-6gb",
        name: "Palworld 6GB",
        price: 69.9,
        originalPrice: 120.0,
        players: 10,
        ram: "6GB",
        cpu: "4 vCores",
        storage: "35GB NVMe",
        features: [
          "Backup Automático",
          "Suporte 24/7",
          "Anti-DDoS",
          "Painel Web",
          "Mods",
          "Configuração Avançada",
          "FTP Access",
          "Base Dedicada",],
        paymentLink: "https://app.neonhost.com.br/index.php?rp=/store/palworld/palworld-6gb",
      },
      {
        id: "palworld-10gb",
        name: "Palworld 10GB",
        price: 109.9,
        originalPrice: 199.9,
        players: 20,
        ram: "10GB",
        cpu: "6 vCores",
        storage: "50GB NVMe",
        features: [
          "Backup Automático",
          "Suporte 24/7",
          "Anti-DDoS",
          "Painel Web",
          "Mods",
          "Configuração Avançada",
          "FTP Access",
          "Base Dedicada",
        ],
        paymentLink: "https://app.neonhost.com.br/index.php?rp=/store/palworld/palworld-10gb",
      },
      {
        id: "palworld-pro",
        name: "Palworld 14GB",
        price: 149.9,
        originalPrice: 223.9,
        players: 32,
        ram: "14GB",
        cpu: "8 vCores",
        storage: "75GB NVMe",
        features: [
          "Backup Automático",
          "Suporte 24/7",
          "Anti-DDoS",
          "Painel Web",
          "Mods",
          "Configuração Avançada",
          "FTP Access",
          "Base Dedicada",
        ],
        paymentLink: "https://app.neonhost.com.br/checkout/palworld-pro",
      },
    ],
    faq: [
      {
        question: "Quantos jogadores o servidor suporta?",
        answer:
          "Depende do plano escolhido, mas nossos servidores de Palworld suportam de 10 a 32 jogadores simultâneos.",
      },
      {
        question: "Posso instalar mods no servidor?",
        answer: "Sim, todos os nossos planos de Palworld suportam mods e configurações personalizadas.",
      },
      {
        question: "Como funciona o backup?",
        answer:
          "Realizamos backups automáticos diários do seu servidor, e você também pode criar backups manuais a qualquer momento.",
      },
    ],
    testimonials: [
      {
        title: "Servidor estável",
        author: "Ricardo Almeida",
        content:
          "Servidor de Palworld muito estável, sem quedas e com ótimo desempenho mesmo com muitos jogadores online.",
        rating: 5,
      },
      {
        title: "Suporte excelente",
        author: "Mariana Costa",
        content:
          "O suporte da NeonHost é excelente, me ajudaram a configurar mods no meu servidor de Palworld rapidamente.",
        rating: 5,
      },
    ],
  },


    //   RUST
  {
    id: "rust",
    name: "Rust",
    slug: "rust",
    image: "/games/rust.webp",
    logo: "/games/rust.webp",
    featuredImage: "/games/rust.webp",
    description:
      "Sobrevivência hardcore em mundo hostil. Construa, lute e sobreviva em um dos jogos de sobrevivência mais desafiadores. Nossos servidores Rust oferecem performance excepcional e configurações personalizáveis.",
    shortDescription: "Sobrevivência hardcore em mundo hostil",
    price: 85.0,
    originalPrice: 120.0,
    discount: 29,
    category: "Sobrevivência",
    rating: 4.5,
    players: "9.2K",
    paymentLink: "https://app.neonhost.com.br/games/rust",
    vpsLink: "/vps-gamer",
    communityLink: "https://discord.gg/neonhost",
    platforms: ["PC"],
    developer: "Facepunch Studios",
    features: [
      "Configuração Personalizada",
      "Backup Automático",
      "Suporte 24/7",
      "Anti-DDoS Incluído",
      "Painel RustAdmin",
      "Plugins Oxide",
      "Wipe Automático",
      "Mapas Customizados",
    ],
    minPlayers: 1,
    maxPlayers: 300,
    requirements: {
      ram: "6GB mínimo",
      cpu: "Intel i5 ou AMD equivalente",
      storage: "15GB disponível",
    },
    plans: [
      {
        id: "rust-10gb",
        name: "Rust 10GB",
        price: 109.90,
        originalPrice: 120.0,
        players: 50,
        ram: "10GB",
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
      },
      {
        id: "rust-16gb",
        name: "Rust 16GB",
        price: 169.9,
        originalPrice: 229.9,
        players: 100,
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
      },
      {
        id: "rust-20gb",
        name: "Rust 20GB",
        price: 209.9,
        originalPrice: 290.9,
        players: 100,
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
      },
    ],
    faq: [
      {
        question: "O que são plugins Oxide?",
        answer: "Oxide é um framework que permite adicionar plugins e modificações ao servidor Rust.",
      },
      {
        question: "Como funciona o wipe automático?",
        answer: "Você pode configurar wipes automáticos semanais ou mensais através do painel de controle.",
      },
    ],
    testimonials: [
      {
        title: "Performance excelente",
        author: "João Santos",
        content: "Servidor Rust com performance incrível, sem lag mesmo com 100 players online.",
        rating: 5,
      },
    ],
  },


    //   VALHEIM
  {
    id: "valheim",
    name: "Valheim",
    slug: "valheim",
    image: "/games/valheim.webp",
    logo: "/games/valheim.webp",
    featuredImage: "/games/valheim.webp",
    description:
      "Aventura viking cooperativa épica. Explore, construa e sobreviva em um mundo inspirado na mitologia nórdica com até 10 amigos.",
    shortDescription: "Aventura viking cooperativa épica",
    price: 49.9,
    originalPrice: 69.9,
    discount: 29,
    category: "Aventura",
    rating: 4.7,
    players: "4.2K",
    paymentLink: "https://app.neonhost.com.br/games/valheim",
    vpsLink: "/vps-gamer",
    communityLink: "https://discord.gg/neonhost",
    platforms: ["PC"],
    developer: "Iron Gate AB",
    features: [
      "Mundo Persistente",
      "Backup Automático",
      "Suporte 24/7",
      "Anti-DDoS Incluído",
      "Painel de Controle",
      "Mods Suportados",
      "Configuração Fácil",
      "Crossplay",
    ],
    minPlayers: 1,
    maxPlayers: 10,
    requirements: {
      ram: "2GB mínimo",
      cpu: "Intel i3 ou AMD equivalente",
      storage: "5GB disponível",
    },
    plans: [
      {
        id: "valheim-basic",
        name: "Básico",
        price: 49.9,
        originalPrice: 69.9,
        players: 10,
        ram: "2GB",
        cpu: "2 vCores",
        storage: "15GB NVMe",
        features: ["Painel Web", "Backup Automático", "Suporte 24/7", "Anti-DDoS"],
        paymentLink: "https://app.neonhost.com.br/checkout/valheim-basic",
      },
    ],
    faq: [
      {
        question: "Quantos jogadores suporta?",
        answer: "Valheim suporta até 10 jogadores por servidor oficialmente.",
      },
    ],
    testimonials: [
      {
        title: "Diversão garantida",
        author: "Ana Costa",
        content: "Jogo Valheim com meus amigos no servidor da NeonHost há meses, nunca deu problema.",
        rating: 5,
      },
    ],
  },


    //   CS2
  {
    id: "cs2",
    name: "Counter-Strike 2",
    slug: "counter-strike-2",
    image: "/games/cs2.webp",
    logo: "/games/cs2.webp",
    featuredImage: "/games/cs2.webp",
    description:
      "O FPS competitivo mais jogado do mundo. Crie seu servidor CS2 personalizado com mapas, modos de jogo e configurações exclusivas.",
    shortDescription: "O FPS competitivo mais jogado",
    price: 39.9,
    originalPrice: 59.9,
    discount: 33,
    category: "FPS",
    rating: 4.8,
    players: "12.5K",
    paymentLink: "https://app.neonhost.com.br/games/cs2",
    vpsLink: "/vps-gamer",
    communityLink: "https://discord.gg/neonhost",
    platforms: ["PC"],
    developer: "Valve Corporation",
    features: [
      "Mapas Customizados",
      "Plugins SourceMod",
      "Backup Automático",
      "Suporte 24/7",
      "Anti-DDoS Incluído",
      "Painel de Controle",
      "Configuração Competitiva",
      "Workshop Integration",
    ],
    minPlayers: 2,
    maxPlayers: 64,
    requirements: {
      ram: "2GB mínimo",
      cpu: "Intel i3 ou AMD equivalente",
      storage: "8GB disponível",
    },
    plans: [
      {
        id: "cs2-2gb",
        name: "Counter-Strike 2 - 2GB",
        price: 29.9,
        originalPrice: 59.9,
        players: 20,
        ram: "2GB",
        cpu: "1 vCores",
        storage: "5GB NVMe",
        features: ["SourceMod", "Mapas Custom", "Backup Automático", "Suporte 24/7", "Anti-DDoS","128 Tick",],
        paymentLink: "https://app.neonhost.com.br/index.php?rp=/store/counter-strike-2/counter-strike-2-2gb",
      },
      {
        id: "cs2-4gb",
        name: "Counter-Strike 2 - 4GB",
        price: 49.9,
        originalPrice: 78.9,
        players: 32,
        ram: "4GB",
        cpu: "3 vCores",
        storage: "25GB NVMe",
        features: [
          "SourceMod",
          "Mapas Custom",
          "Backup Automático",
          "Suporte 24/7",
          "Anti-DDoS",
          "Plugins Premium",
          "128 Tick",
        ],
        paymentLink: "https://app.neonhost.com.br/index.php?rp=/store/counter-strike-2/counter-strike-2-4gb",
      },
      {
        id: "cs2-6gb",
        name: "Counter-Strike 2 - 6GB",
        price: 69.9,
        originalPrice: 95.9,
        players: 64,
        ram: "6GB",
        cpu: "5 vCores",
        storage: "40GB NVMe",
        features: [
          "SourceMod",
          "Mapas Custom",
          "Backup Automático",
          "Suporte 24/7",
          "Anti-DDoS",
          "Plugins Premium",
          "128 Tick",
        ],
        paymentLink: "https://app.neonhost.com.br/index.php?rp=/store/counter-strike-2/counter-strike-2-6gb",
      },
    ],
    faq: [
      {
        question: "Suporta 128 tick?",
        answer: "Sim, nossos servidores premium suportam 128 tick para melhor precisão competitiva.",
      },
      {
        question: "Posso instalar plugins?",
        answer: "Sim, suportamos SourceMod e plugins personalizados.",
      },
    ],
    testimonials: [
      {
        title: "Perfeito para competitivo",
        author: "Pedro Oliveira",
        content: "Uso para treinos da minha equipe, servidor sempre estável e com boa latência.",
        rating: 5,
      },
    ],
  },

    //   ARK EVOLVED
  {
    id: "ark",
    name: "ARK: Survival Evolved",
    slug: "ark-survival-evolved",
    image: "/games/ark.avif",
    logo: "/games/ark.avif",
    featuredImage: "/games/ark.avif",
    description:
      "Sobreviva com dinossauros em um mundo pré-histórico. Domestique criaturas, construa bases e explore um mundo cheio de perigos e aventuras.",
    shortDescription: "Sobreviva com dinossauros",
    price: 89.9,
    originalPrice: 119.9,
    discount: 25,
    category: "Sobrevivência",
    rating: 4.4,
    players: "6.9K",
    paymentLink: "https://app.neonhost.com.br/games/ark",
    vpsLink: "/vps-gamer",
    communityLink: "https://discord.gg/neonhost",
    platforms: ["PC", "Xbox", "PlayStation"],
    developer: "Studio Wildcard",
    features: [
      "Mods Steam Workshop",
      "Configuração Avançada",
      "Backup Automático",
      "Suporte 24/7",
      "Anti-DDoS Incluído",
      "Painel de Controle",
      "Crossplay",
      "Cluster Support",
    ],
    minPlayers: 1,
    maxPlayers: 100,
    requirements: {
      ram: "6GB mínimo",
      cpu: "Intel i5 ou AMD equivalente",
      storage: "20GB disponível",
    },
    plans: [
      {
        id: "ark-6gb",
        name: "Ark Survival Evolved - 6GB",
        price: 80.27,
        originalPrice: 119.9,
        players: 20,
        ram: "6GB",
        cpu: "4 vCores",
        storage: "40GB NVMe",
        features: ["Mods Workshop", "Painel Web", "Backup Automático", "Suporte 24/7", "Anti-DDoS"],
        paymentLink: "https://app.neonhost.com.br/index.php?rp=/store/ark-survival-evolved/ark-survival-evolved-6gb",
      },
      {
        id: "ark-16gb",
        name: "Ark Survival Evolved - 16GB",
        price: 129.27,
        originalPrice: 219.9,
        players: 50,
        ram: "16GB",
        cpu: "6 vCores",
        storage: "80GB NVMe",
        features: [
          "Mods Workshop",
          "Painel Web",
          "Backup Automático",
          "Suporte 24/7",
          "Anti-DDoS",
          "Cluster",
          "Configuração Avançada",
        ],
        paymentLink: "https://app.neonhost.com.br/index.php?rp=/store/ark-survival-evolved/ark-survival-evolved-16gb",
      },
    ],
    faq: [
      {
        question: "Suporta mods do Steam Workshop?",
        answer: "Sim, você pode instalar qualquer mod disponível no Steam Workshop automaticamente.",
      },
      {
        question: "O que é cluster?",
        answer: "Cluster permite conectar múltiplos mapas ARK para transferir personagens e itens entre eles.",
      },
    ],
    testimonials: [
      {
        title: "Servidor estável",
        author: "Lucas Ferreira",
        content: "Jogo ARK há anos, esse é o servidor mais estável que já usei. Recomendo!",
        rating: 5,
      },
    ],
  },

    //   Ark Survival Ascended
  {
    id: "ark-ascended",
    name: "Ark Survival Ascended",
    slug: "ark-survival-ascended",
    image: "/games/arkAscended.jpg",
    logo: "/games/arkAscended.jpg",
    featuredImage: "/games/arkAscended.jpg",
    description:
      "Sobreviva com dinossauros em um mundo pré-histórico. Domestique criaturas, construa bases e explore um mundo cheio de perigos e aventuras.",
    shortDescription: "Sobreviva com dinossauros",
    price: 89.9,
    originalPrice: 119.9,
    discount: 25,
    category: "Sobrevivência",
    rating: 4.4,
    players: "6.9K",
    paymentLink: "https://app.neonhost.com.br/games/ark",
    vpsLink: "/vps-gamer",
    communityLink: "https://discord.gg/neonhost",
    platforms: ["PC", "Xbox", "PlayStation"],
    developer: "Studio Wildcard",
    features: [
      "Mods Steam Workshop",
      "Configuração Avançada",
      "Backup Automático",
      "Suporte 24/7",
      "Anti-DDoS Incluído",
      "Painel de Controle",
      "Crossplay",
      "Cluster Support",
    ],
    minPlayers: 1,
    maxPlayers: 100,
    requirements: {
      ram: "6GB mínimo",
      cpu: "Intel i5 ou AMD equivalente",
      storage: "20GB disponível",
    },
    plans: [
      {
        id: "ark-6gb",
        name: "Ark Survival Evolved - 6GB",
        price: 80.27,
        originalPrice: 119.9,
        players: 20,
        ram: "6GB",
        cpu: "4 vCores",
        storage: "40GB NVMe",
        features: ["Mods Workshop", "Painel Web", "Backup Automático", "Suporte 24/7", "Anti-DDoS"],
        paymentLink: "https://app.neonhost.com.br/index.php?rp=/store/ark-survival-evolved/ark-survival-evolved-6gb",
      },
      {
        id: "ark-16gb",
        name: "Ark Survival Evolved - 16GB",
        price: 129.27,
        originalPrice: 219.9,
        players: 50,
        ram: "16GB",
        cpu: "6 vCores",
        storage: "80GB NVMe",
        features: [
          "Mods Workshop",
          "Painel Web",
          "Backup Automático",
          "Suporte 24/7",
          "Anti-DDoS",
          "Cluster",
          "Configuração Avançada",
        ],
        paymentLink: "https://app.neonhost.com.br/index.php?rp=/store/ark-survival-evolved/ark-survival-evolved-16gb",
      },
    ],
    faq: [
      {
        question: "Suporta mods do Steam Workshop?",
        answer: "Sim, você pode instalar qualquer mod disponível no Steam Workshop automaticamente.",
      },
      {
        question: "O que é cluster?",
        answer: "Cluster permite conectar múltiplos mapas ARK para transferir personagens e itens entre eles.",
      },
    ],
    testimonials: [
      {
        title: "Servidor estável",
        author: "Lucas Ferreira",
        content: "Jogo ARK há anos, esse é o servidor mais estável que já usei. Recomendo!",
        rating: 5,
      },
    ],
  },
]

// Funções utilitárias
export function getGameById(id: string): Game | undefined {
  return gamesConfig.find((game) => game.id === id || game.slug === id)
}

export function getGamesByCategory(category: string): Game[] {
  return gamesConfig.filter((game) => game.category.toLowerCase() === category.toLowerCase())
}

export function getFeaturedGames(): Game[] {
  return gamesConfig.filter((game) => game.isFeatured)
}

export function getPopularGames(): Game[] {
  return gamesConfig.filter((game) => game.isPopular)
}

export function getNewGames(): Game[] {
  return gamesConfig.filter((game) => game.isNew)
}

export function getDiscountedGames(): Game[] {
  return gamesConfig.filter((game) => game.discount && game.discount > 0)
}

export function searchGames(query: string): Game[] {
  const lowercaseQuery = query.toLowerCase()
  return gamesConfig.filter(
    (game) =>
      game.name.toLowerCase().includes(lowercaseQuery) ||
      game.category.toLowerCase().includes(lowercaseQuery) ||
      game.description.toLowerCase().includes(lowercaseQuery),
  )
}

export function getGameCategories(): string[] {
  const categories: string[] = gamesConfig.map((game) => game.category)
  const uniqueCategories = Array.from(new Set(categories))
  return uniqueCategories
}
