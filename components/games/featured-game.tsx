import Image from "next/image"
import Link from "next/link"

// Configuração do jogo em destaque
const featuredGameConfig = {
  id: "minecraft",
  name: "MINECRAFT",
  description:
    "Na NeonHost, oferecemos servidores populares como Vanilla, Forge, Mohist, Paper e Bedrock Edition, além de modpacks como Pixelmon, SkyFactory e RLCraft.",
  originalPrice: 20.9,
  currentPrice: 13.9,
  discount: 35,
  purchaseUrl: "https://app.neonhost.com.br/index.php?rp=/store/minecraft", // URL específica para compra
}

export function FeaturedGame() {
  return (
    <div className="relative w-full h-[500px] rounded-lg overflow-hidden mb-12">
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black z-10"></div>
      <div className="absolute inset-0 flex items-center">
        <div className="container mx-auto px-8 z-20">
          <div className="max-w-xl">
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-500 text-4xl font-bold mb-2">
              HOSPEDAGEM
            </h2>
            <h1 className="text-white text-5xl font-bold mb-6">{featuredGameConfig.name}</h1>
            <div className="mb-6">
              <p className="text-zinc-300 mb-2">JÁ DISPONÍVEL</p>
              <p className="text-zinc-300 mb-6">{featuredGameConfig.description}</p>
              <div className="flex items-center gap-4">
                <Link
                  href={featuredGameConfig.purchaseUrl}
                  className="bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white px-8 py-6 rounded-md inline-flex items-center justify-center font-medium transition-colors"
                >
                  Comprar agora
                </Link>
                <div className="flex items-center gap-2">
                  <span className="text-zinc-500 line-through">
                    R$ {featuredGameConfig.originalPrice.toFixed(2).replace(".", ",")}
                  </span>
                  <span className="text-white font-bold">
                    R$ {featuredGameConfig.currentPrice.toFixed(2).replace(".", ",")}
                  </span>
                  <span className="bg-gradient-to-r from-purple-600 to-orange-500 text-white text-xs px-2 py-1 rounded">
                    -{featuredGameConfig.discount}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        src="/placeholder.svg?height=500&width=1200"
        alt={featuredGameConfig.name}
        fill
        className="object-cover"
        priority
      />
    </div>
  )
}
