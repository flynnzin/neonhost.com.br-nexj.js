import Image from "next/image"
import Link from "next/link"
import { Check } from "lucide-react"

interface PlanosPageProps {
  params: {
    id: string
  }
}

export default function PlanosPage({ params }: PlanosPageProps) {
  // Simulando dados do jogo baseado no ID
  const gameData = getGameData(params.id)

  if (!gameData) {
    return <div className="min-h-screen flex items-center justify-center">Jogo não encontrado</div>
  }

  return (
    <main className="min-h-screen bg-black text-white pb-16">
      {/* Cabeçalho do jogo */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold">{gameData.name}</h1>

        {/* Navegação */}
        <div className="flex border-b border-purple-500/20 mt-4">
          <Link href={`/games/${params.id}`} className="text-zinc-400 hover:text-white px-4 py-2">
            Visão Geral
          </Link>
          <Link
            href={`/games/${params.id}/planos`}
            className="text-white border-b-2 border-orange-500 px-4 py-2 font-medium"
          >
            Planos
          </Link>
          <Link href={`/games/${params.id}/perguntas`} className="text-zinc-400 hover:text-white px-4 py-2">
            Perguntas frequentes
          </Link>
        </div>

        {/* Planos */}
        <div className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gameData.plans.map((plan) => (
              <div
                key={plan.name}
                className="bg-zinc-900/50 rounded-lg border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 overflow-hidden"
              >
                <div className="relative">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={gameData.featuredImage || "/placeholder.svg"}
                      alt={`Plano ${plan.name}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 p-4 w-full">
                    <h3 className="text-xl font-bold text-white">Plano {plan.name}</h3>
                    <p className="text-zinc-300">{plan.ram}</p>
                  </div>
                </div>

                <div className="p-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 mr-3 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span className="text-zinc-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 border-t border-purple-500/10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="inline-block bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                      -{plan.discount}%
                    </div>
                    <div>
                      <span className="text-zinc-500 line-through text-sm">
                        R$ {plan.originalPrice.toFixed(2).replace(".", ",")}
                      </span>
                      <span className="text-white font-bold text-xl ml-2">
                        R$ {plan.price.toFixed(2).replace(".", ",")}
                      </span>
                    </div>
                  </div>
                  <button className="w-full bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white py-2 rounded-md font-medium transition-colors">
                    <Link
                      href={plan.Payment || `/checkout/${params.id}/${plan.name.toLowerCase()}`}
                      className="block w-full"
                    >
                      Contratar agora
                    </Link>
                  </button>
                  <button className="w-full bg-transparent text-zinc-400 hover:text-white py-2 rounded-md text-sm mt-2 transition-colors">
                    Em caso de dúvidas, clique aqui
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparação de planos */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Comparação de planos</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-zinc-900/70">
                  <th className="p-4 text-left border-b border-purple-500/20">Recursos</th>
                  {gameData.plans.map((plan) => (
                    <th key={plan.name} className="p-4 text-center border-b border-purple-500/20">
                      <Link
                        href={plan.Payment || `/checkout/${params.id}/${plan.name.toLowerCase()}`}
                        className="hover:text-purple-400 transition-colors"
                      >
                        {plan.name}
                      </Link>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border-b border-purple-500/10">RAM</td>
                  {gameData.plans.map((plan) => (
                    <td key={plan.name} className="p-4 text-center border-b border-purple-500/10">
                      <Link
                        href={plan.Payment || `/checkout/${params.id}/${plan.name.toLowerCase()}`}
                        className="hover:text-purple-400 transition-colors"
                      >
                        {plan.ram}
                      </Link>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 border-b border-purple-500/10">Jogadores</td>
                  {gameData.plans.map((plan, index) => (
                    <td key={plan.name} className="p-4 text-center border-b border-purple-500/10">
                      {["20", "50", "100", "Ilimitado", "Ilimitado", "Ilimitado", "Ilimitado", "Ilimitado"][index]}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 border-b border-purple-500/10">Armazenamento</td>
                  {gameData.plans.map((plan, index) => (
                    <td key={plan.name} className="p-4 text-center border-b border-purple-500/10">
                      {["10GB", "20GB", "50GB", "100GB", "110GB", "110GB", "110GB", "110GB"][index]}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 border-b border-purple-500/10">Backups</td>
                  {gameData.plans.map((plan, index) => (
                    <td key={plan.name} className="p-4 text-center border-b border-purple-500/10">
                      {["1", "3", "5", "7", "7", "7", "7", "7"][index]}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 border-b border-purple-500/10">Preço</td>
                  {gameData.plans.map((plan) => (
                    <td key={plan.name} className="p-4 text-center border-b border-purple-500/10">
                      <Link
                        href={plan.Payment || `/checkout/${params.id}/${plan.name.toLowerCase()}`}
                        className="font-bold hover:text-purple-400 transition-colors"
                      >
                        R$ {plan.price.toFixed(2).replace(".", ",")}
                      </Link>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4"></td>
                  {gameData.plans.map((plan) => (
                    <td key={plan.name} className="p-4 text-center">
                      <button className="bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white px-4 py-2 rounded-md font-medium text-sm transition-colors">
                        <Link
                          href={plan.Payment || `/checkout/${params.id}/${plan.name.toLowerCase()}`}
                          className="block w-full"
                        >
                          Contratar
                        </Link>
                      </button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  )
}

// Função para obter dados do jogo baseado no ID
function getGameData(id: string) {
  const games = {
    minecraft: {
      id: "minecraft",
      name: "Minecraft",
      featuredImage: "/games/page/mine.jpg",
      plans: [
        {
          name: "Simples - 1",
          ram: "1 GB RAM",
          features: ["Exclusivo Bedrock", "Suporta Addons", "SSD NVMe", "AMD Ryzen"],
          originalPrice: 23.98, // calculado
          price: 19.9,
          discount: 17,
          Payment: "https://app.neonhost.com.br/index.php?rp=/store/minecraft/plano-simples",
        },
        {
          name: "Basic - 2",
          ram: "3 GB RAM",
          features: ["Mods e Plugins", "FTP Web/Filezilla", "Bedrock & Java", "Subdomínio GRÁTIS", "SSD NVMe"],
          originalPrice: 45.66, // calculado
          price: 37.9,
          discount: 17,
          Payment: "https://app.neonhost.com.br/index.php?rp=/store/minecraft/plano-basic",
        },
        {
          name: "Advanced - 3",
          ram: "6 GB RAM",
          features: ["Mods e Plugins", "FTP Web/Filezilla", "Bedrock & Java", "Subdomínio GRÁTIS", "SSD NVMe"],
          originalPrice: 60.12, // calculado
          price: 49.9,
          discount: 17,
          Payment: "https://app.neonhost.com.br/index.php?rp=/store/minecraft/plano-advanced",
        },
        {
          name: "Pro - 4",
          ram: "10 GB RAM",
          features: ["Mods e Plugins", "FTP Web/Filezilla", "Bedrock & Java", "Subdomínio GRÁTIS", "SSD NVMe"],
          originalPrice: 89.04, // calculado
          price: 73.9,
          discount: 17,
          Payment: "https://app.neonhost.com.br/index.php?rp=/store/minecraft/plano-pro",
        },
        {
          name: "Ultra - 5",
          ram: "16 GB RAM",
          features: ["Exclusivo Bedrock", "Suporta Addons", "SSD NVMe", "AMD Ryzen"],
          originalPrice: 23.98,
          price: 19.9,
          discount: 17,
          Payment: "https://app.neonhost.com.br/index.php?rp=/store/minecraft/plano-ultra",
        },
        {
          name: "Enterprise - 6",
          ram: "20 GB RAM",
          features: ["Mods e Plugins", "FTP Web/Filezilla", "Bedrock & Java", "Subdomínio GRÁTIS", "SSD NVMe"],
          originalPrice: 45.66,
          price: 37.9,
          discount: 17,
          Payment: "https://app.neonhost.com.br/index.php?rp=/store/minecraft/plano-enterprise",
        },
        {
          name: "Dedicated - 7",
          ram: "24 GB RAM",
          features: ["Mods e Plugins", "FTP Web/Filezilla", "Bedrock & Java", "Subdomínio GRÁTIS", "SSD NVMe"],
          originalPrice: 60.12,
          price: 49.9,
          discount: 17,
          Payment: "https://app.neonhost.com.br/index.php?rp=/store/minecraft/plano-dedicated-7",
        },
        {
          name: "Dedicated - 8",
          ram: "32 GB RAM",
          features: ["Mods e Plugins", "FTP Web/Filezilla", "Bedrock & Java", "Subdomínio GRÁTIS", "SSD NVMe"],
          originalPrice: 89.04,
          price: 73.9,
          discount: 17,
          Payment: "https://app.neonhost.com.br/index.php?rp=/store/minecraft/plano-dedicated-8",
        },
      ],
    },
    palworld: {
      id: "palworld",
      name: "Palworld",
      featuredImage: "/games/page/pal.png",
      plans: [
        {
          name: "Simples - 1",
          ram: "10 jogadores",
          features: ["6GB RAM", "Suporte a Mods", "SSD NVMe", "AMD Ryzen"],
          originalPrice: 104.33, // calculado com base em 33% de desconto sobre 69.90
          price: 69.90,
          discount: 33,
          Payment: "https://app.neonhost.com.br/index.php?rp=/store/palworld/palworld-6gb",
        },
        {
          name: "Basic - 2",
          ram: "30 jogadores",
          features: ["10GB RAM", "Suporte a Mods", "Configuração Personalizada", "Subdomínio GRÁTIS", "SSD NVMe"],
          originalPrice: 159.28, // calculado com base em 31% de desconto sobre 109.90
          price: 109.90,
          discount: 31,
          Payment: "https://app.neonhost.com.br/index.php?rp=/store/palworld/palworld-10gb",
        },
        {
          name: "Advanced - 3",
          ram: "50 jogadores",
          features: ["14GB RAM", "Suporte a Mods", "Configuração Personalizada", "Subdomínio GRÁTIS", "SSD NVMe"],
          originalPrice: 223.73, // calculado com base em 33% de desconto sobre 149.90
          price: 149.90,
          discount: 33,
          Payment: "https://app.neonhost.com.br/index.php?rp=/store/palworld/palworld-14gb",
        },
        {
          name: "Ultimate",
          ram: "100 jogadores",
          features: ["32GB RAM", "Suporte a Mods", "Configuração Personalizada", "Domínio GRÁTIS", "SSD NVMe"],
          originalPrice: 308.68, // calculado com base em 32% de desconto sobre 209.90
          price: 209.90,
          discount: 32,
          Payment: "https://app.neonhost.com.br/index.php?rp=/store/palworld",
        },
      ],
    },
    projectzombiod: {
      id: "projectzombiod",
      name: "projectzombiod",
      featuredImage: "/games/page/projectzombiod.webp",
      plans: [
        {
          name: "Simples - 1",
          ram: "10 jogadores",
          features: ["4GB RAM", "Suporte a Mods", "SSD NVMe", "AMD Ryzen"],
          originalPrice: 74.48, // calculado (33% de desconto sobre 49.90)
          price: 49.90,
          discount: 33,
          Payment: "https://app.neonhost.com.br/index.php?rp=/store/project-zomboid/zomboid-4gb",
        },
        {
          name: "Basic - 2",
          ram: "30 jogadores",
          features: ["6GB RAM", "Suporte a Mods", "Configuração Personalizada", "Subdomínio GRÁTIS", "SSD NVMe"],
          originalPrice: 101.30, // calculado (31% de desconto sobre 69.90)
          price: 69.90,
          discount: 31,
          Payment: "https://app.neonhost.com.br/index.php?rp=/store/project-zomboid/zomboid-6gb",
        },
        {
          name: "Advanced - 3",
          ram: "50 jogadores",
          features: ["8GB RAM", "Suporte a Mods", "Configuração Personalizada", "Subdomínio GRÁTIS", "SSD NVMe"],
          originalPrice: 134.18, // calculado (33% de desconto sobre 89.90)
          price: 89.90,
          discount: 33,
          Payment: "https://app.neonhost.com.br/index.php?rp=/store/project-zomboid/zomboid-8gb",
        },
        {
          name: "Ultimate",
          ram: "100 jogadores",
          features: ["32GB RAM", "Suporte a Mods", "Configuração Personalizada", "Domínio GRÁTIS", "SSD NVMe"],
          originalPrice: 264.56, // calculado (32% de desconto sobre 179.90)
          price: 179.90,
          discount: 32,
          Payment: "https://neonhost.com/payment/palworld/ultimate",
        },
      ],
    },
    enshrouded: {
      id: "enshrouded",
      name: "enshrouded",
      featuredImage: "/games/page/enshrouded.jpg",
      plans: [
        {
          name: "Simples - 1",
          ram: "10 jogadores",
          features: ["6GB RAM", "Suporte a Mods", "SSD NVMe", "AMD Ryzen"],
          originalPrice: 104.33, // 69.90 com 33% de desconto
          price: 69.90,
          discount: 33,
          Payment: "https://app.neonhost.com.br/index.php?rp=/store/enshrouded/enshrouded-6gb",
        },
        {
          name: "Basic - 2",
          ram: "30 jogadores",
          features: ["10GB RAM", "Suporte a Mods", "Configuração Personalizada", "Subdomínio GRÁTIS", "SSD NVMe"],
          originalPrice: 159.28, // 109.90 com 31% de desconto
          price: 109.90,
          discount: 31,
          Payment: "https://app.neonhost.com.br/index.php?rp=/store/enshrouded/enshrouded-10gb",
        },
        {
          name: "Advanced - 3",
          ram: "50 jogadores",
          features: ["14GB RAM", "Suporte a Mods", "Configuração Personalizada", "Subdomínio GRÁTIS", "SSD NVMe"],
          originalPrice: 223.73, // 149.90 com 33% de desconto
          price: 149.90,
          discount: 33,
          Payment: "https://app.neonhost.com.br/index.php?rp=/store/enshrouded/enshrouded-14gb",
        },
        {
          name: "Ultimate",
          ram: "100 jogadores",
          features: ["32GB RAM", "Suporte a Mods", "Configuração Personalizada", "Domínio GRÁTIS", "SSD NVMe"],
          originalPrice: 264.56, // 179.90 com 32% de desconto
          price: 179.90,
          discount: 32,
          Payment: "https://app.neonhost.com.br/index.php?rp=/store/enshrouded/",
        },
      ],
    },
    armareforger: {
      id: "armareforger",
      name: "armareforger",
      featuredImage: "/games/page/armareforger.jpg",
      plans: [
        {
          name: "Simples - 1",
          ram: "10 jogadores",
          features: ["4GB RAM", "Suporte a Mods", "SSD NVMe", "AMD Ryzen"],
          originalPrice: 74.48,
          price: 49.90,
          discount: 33,
          Payment: "https://app.neonhost.com.br/index.php?rp=/store/arma-reforger/armareforger-4gb",
        },
        {
          name: "Basic - 2",
          ram: "30 jogadores",
          features: ["6GB RAM", "Suporte a Mods", "Configuração Personalizada", "Subdomínio GRÁTIS", "SSD NVMe"],
          originalPrice: 101.3,
          price: 69.90,
          discount: 31,
          Payment: "https://app.neonhost.com.br/index.php?rp=/store/arma-reforger/armareforger-6gb",
        },
        {
          name: "Advanced - 3",
          ram: "50 jogadores",
          features: ["8GB RAM", "Suporte a Mods", "Configuração Personalizada", "Subdomínio GRÁTIS", "SSD NVMe"],
          originalPrice: 132.84,
          price: 89.00,
          discount: 33,
          Payment: "https://app.neonhost.com.br/index.php?rp=/store/arma-reforger/armareforger-8gb",
        },
        {
          name: "Ultimate",
          ram: "100 jogadores",
          features: ["32GB RAM", "Suporte a Mods", "Configuração Personalizada", "Domínio GRÁTIS", "SSD NVMe"],
          originalPrice: 264.56,
          price: 179.90,
          discount: 32,
          Payment: "https://app.neonhost.com.br/index.php?rp=/store/arma-reforger/",
        },
      ],
    },
    dayz: {
      id: "dayz",
      name: "dayz",
      featuredImage: "/games/page/dayz.webp",
      plans: [
        {
          name: "Simples - 1",
          ram: "Ilimitado jogadores",
          features: ["6GB RAM", "Suporte a Mods", "SSD NVMe", "AMD Ryzen"],
          originalPrice: 178.96,
          price: 119.90,
          discount: 33,
          Payment: "https://app.neonhost.com.br/index.php?rp=/store/vps-gamer/amd-ryzen-3",
        },
        {
          name: "Basic - 2",
          ram: "Ilimitado jogadores",
          features: ["8GB RAM", "Suporte a Mods", "Configuração Personalizada", "Subdomínio GRÁTIS", "SSD NVMe"],
          originalPrice: 246.23,
          price: 169.90,
          discount: 31,
          Payment: "https://app.neonhost.com.br/index.php?rp=/store/vps-gamer/amd-ryzen-4",
        },
        {
          name: "Advanced - 3",
          ram: "Ilimitado jogadores",
          features: ["12GB RAM", "Suporte a Mods", "Configuração Personalizada", "Subdomínio GRÁTIS", "SSD NVMe"],
          originalPrice: 387.91,
          price: 259.90,
          discount: 33,
          Payment: "https://app.neonhost.com.br/index.php?rp=/store/vps-gamer/amd-ryzen-5",
        },
        {
          name: "Ultimate",
          ram: "Ilimitado jogadores",
          features: ["16GB RAM", "Suporte a Mods", "Configuração Personalizada", "Domínio GRÁTIS", "SSD NVMe"],
          originalPrice: 529.26,
          price: 359.90,
          discount: 32,
          Payment: "https://app.neonhost.com.br/index.php?rp=/store/vps-gamer/vps-gamer-amd-ryzen-6",
        },
      ],
    },
    fivem: {
      id: "fivem",
      name: "fivem",
      featuredImage: "/games/page/gtaV.jpg",
      plans: [
        {
          name: "Simples - 1",
          ram: "Ilimitado jogadores",
          features: ["6GB RAM", "Suporte a Mods", "SSD NVMe", "AMD Ryzen"],
          originalPrice: 178.96,
          price: 119.90,
          discount: 33,
          Payment: "https://app.neonhost.com.br/index.php?rp=/store/vps-gamer/amd-ryzen-3",
        },
        {
          name: "Basic - 2",
          ram: "Ilimitado jogadores",
          features: ["8GB RAM", "Suporte a Mods", "Configuração Personalizada", "Subdomínio GRÁTIS", "SSD NVMe"],
          originalPrice: 246.23,
          price: 169.90,
          discount: 31,
          Payment: "https://app.neonhost.com.br/index.php?rp=/store/vps-gamer/amd-ryzen-4",
        },
        {
          name: "Advanced - 3",
          ram: "Ilimitado jogadores",
          features: ["12GB RAM", "Suporte a Mods", "Configuração Personalizada", "Subdomínio GRÁTIS", "SSD NVMe"],
          originalPrice: 387.91,
          price: 259.90,
          discount: 33,
          Payment: "https://app.neonhost.com.br/index.php?rp=/store/vps-gamer/amd-ryzen-5",
        },
        {
          name: "Ultimate",
          ram: "Ilimitado jogadores",
          features: ["16GB RAM", "Suporte a Mods", "Configuração Personalizada", "Domínio GRÁTIS", "SSD NVMe"],
          originalPrice: 529.26,
          price: 359.90,
          discount: 32,
          Payment: "https://app.neonhost.com.br/index.php?rp=/store/vps-gamer/vps-gamer-amd-ryzen-6",
        },
      ],
    },
    rust: {
      id: "rust",
      name: "rust",
      featuredImage: "/games/page/rust.jpg",
      plans: [
        {
          name: "Simples - 1",
          ram: "Ilimitado jogadores",
          features: ["6GB RAM", "Suporte a Mods", "SSD NVMe", "AMD Ryzen"],
          originalPrice: 178.96,
          price: 119.90,
          discount: 33,
          Payment: "https://app.neonhost.com.br/index.php?rp=/store/vps-gamer/amd-ryzen-3",
        },
        {
          name: "Basic - 2",
          ram: "Ilimitado jogadores",
          features: ["8GB RAM", "Suporte a Mods", "Configuração Personalizada", "Subdomínio GRÁTIS", "SSD NVMe"],
          originalPrice: 246.23,
          price: 169.90,
          discount: 31,
          Payment: "https://app.neonhost.com.br/index.php?rp=/store/vps-gamer/amd-ryzen-4",
        },
        {
          name: "Advanced - 3",
          ram: "Ilimitado jogadores",
          features: ["12GB RAM", "Suporte a Mods", "Configuração Personalizada", "Subdomínio GRÁTIS", "SSD NVMe"],
          originalPrice: 387.91,
          price: 259.90,
          discount: 33,
          Payment: "https://app.neonhost.com.br/index.php?rp=/store/vps-gamer/amd-ryzen-5",
        },
        {
          name: "Ultimate",
          ram: "Ilimitado jogadores",
          features: ["16GB RAM", "Suporte a Mods", "Configuração Personalizada", "Domínio GRÁTIS", "SSD NVMe"],
          originalPrice: 529.26,
          price: 359.90,
          discount: 32,
          Payment: "https://app.neonhost.com.br/index.php?rp=/store/vps-gamer/vps-gamer-amd-ryzen-6",
        },
      ],
    },
  }

  return games[id as keyof typeof games]
}
