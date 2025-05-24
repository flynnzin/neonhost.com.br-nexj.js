import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

interface GamePageProps {
  params: {
    id: string
  }
}

export default function GamePage({ params }: GamePageProps) {
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
          <Link href={`/games/${params.id}`} className="text-white border-b-2 border-orange-500 px-4 py-2 font-medium">
            Visão Geral
          </Link>
          <Link href={`/games/${params.id}/planos`} className="text-zinc-400 hover:text-white px-4 py-2">
            Planos
          </Link>
          <Link href={`/games/${params.id}/perguntas`} className="text-zinc-400 hover:text-white px-4 py-2">
            Perguntas frequentes
          </Link>
        </div>

        {/* Conteúdo principal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* Coluna da esquerda - Imagem e descrição */}
          <div className="lg:col-span-2">
            <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden">
              <Image
                src={gameData.featuredImage || "/placeholder.svg"}
                alt={gameData.name}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-500 text-3xl font-bold mb-2">
                  HOSPEDAGEM
                </h2>
                <h1 className="text-white text-4xl font-bold">{gameData.name.toUpperCase()}</h1>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-zinc-300 mb-6">{gameData.description}</p>

              {/* Sistemas */}
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Sistemas</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {gameData.systems.map((system) => (
                    <div
                      key={system.name}
                      className="bg-zinc-900/50 border border-purple-500/10 rounded-lg p-3 text-center hover:border-purple-500/30 transition-colors"
                    >
                      {system.name}
                    </div>
                  ))}
                </div>
              </div>

              {/* Informações */}
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Informações</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {gameData.info.map((info) => (
                    <div
                      key={info.name}
                      className="bg-zinc-900/50 border border-purple-500/10 rounded-lg p-3 text-center hover:border-purple-500/30 transition-colors"
                    >
                      {info.name}
                    </div>
                  ))}
                </div>
              </div>

              {/* Avaliações */}
              <div className="mt-12">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold">Notas e avaliações</h3>
                  <Link href={`/games/${params.id}/avaliacoes`} className="text-zinc-400 hover:text-white text-sm">
                    Visualizar todas as avaliações
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  {gameData.ratings.map((rating) => (
                    <div key={rating.platform} className="flex flex-col items-center">
                      <div className="w-24 h-24 rounded-full border-4 border-purple-500 flex items-center justify-center mb-2">
                        <span className="text-2xl font-bold">{rating.score}</span>
                      </div>
                      <span className="text-zinc-400 text-sm">Classificação do {rating.platform}</span>
                    </div>
                  ))}
                </div>

                {/* Depoimentos */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {gameData.testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-zinc-900/50 rounded-lg p-6 border border-purple-500/10">
                      <h4 className="font-bold mb-1">{testimonial.title}</h4>
                      <p className="text-zinc-400 text-sm mb-4">por {testimonial.author}</p>
                      <p className="text-zinc-300 text-sm">{testimonial.content}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6">Perguntas frequentes</h3>
                <div className="space-y-4">
                  {gameData.faq.map((item, index) => (
                    <div key={index} className="border border-purple-500/10 rounded-lg overflow-hidden">
                      <button className="flex items-center justify-between w-full p-4 text-left bg-zinc-900/50 hover:bg-zinc-800/50 transition-colors">
                        <span className="font-medium">{item.question}</span>
                        <ChevronDown size={20} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Coluna da direita - Preço e detalhes */}
          <div className="lg:col-span-1">
            <div className="bg-zinc-900/50 rounded-lg border border-purple-500/10 overflow-hidden sticky top-24">
              {/* Logo do jogo */}
              <div className="p-6 flex justify-center">
                <Image
                  src={gameData.logo || "/placeholder.svg"}
                  alt={gameData.name}
                  width={200}
                  height={60}
                  className="object-contain"
                />
              </div>

              {/* Preço */}
              <div className="px-6 pb-4 text-center">
                <div className="inline-block bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded mb-2">
                  -{gameData.discount}%
                </div>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-zinc-500 line-through">
                    R$ {gameData.originalPrice.toFixed(2).replace(".", ",")}
                  </span>
                  <span className="text-white font-bold text-2xl">
                    R$ {gameData.price.toFixed(2).replace(".", ",")}
                  </span>
                </div>
              </div>

              {/* Botões de ação */}
              <div className="px-6 pb-6 space-y-3">
                <button className="w-full bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-700 hover:to-orange-600 text-white py-3 rounded-md font-medium transition-colors">
                  <Link href={`/games/${params.id}/planos`} className="block w-full">
                    Visualizar planos
                  </Link>
                </button>
                <button className="w-full bg-zinc-800 hover:bg-zinc-700 text-white py-3 rounded-md font-medium transition-colors">
                  <Link href={gameData.ComunityPaln || "#"} className="block w-full">
                    Comunidade
                  </Link>
                </button>
                <button className="w-full bg-zinc-800 hover:bg-zinc-700 text-white py-3 rounded-md font-medium transition-colors">
                  <Link href={gameData.VpsPlan || "#"} className="block w-full">
                    VPS
                  </Link>
                </button>
              </div>

              {/* Detalhes técnicos */}
              <div className="border-t border-purple-500/10 px-6 py-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Tipo de Reembolso:</span>
                    <span className="text-white">Reembolso em até 7 dias</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Desenvolvedor:</span>
                    <span className="text-white">{gameData.developer}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Mods:</span>
                    <span className="text-white">Permitido</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Processador:</span>
                    <span className="text-white">AMD Ryzen</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Plataforma:</span>
                    <span className="text-white">{gameData.platforms.join(", ")}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Melhor host */}
        <div className="mt-16 bg-zinc-900/50 rounded-lg border border-purple-500/10 p-8">
          <h2 className="text-2xl font-bold mb-2">Qual a melhor host para {gameData.name}?</h2>
          <p className="text-zinc-300">
            A NeonHost é a primeira hospedagem de jogos no Brasil, garantimos baixa latência e hardware potente. Com
            proteção DDoS mitigamos qualquer tipo de ataque, mantendo sua gameplay limpa.
          </p>
        </div>

        {/* Missão */}
        <div className="mt-16 flex items-center justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold mb-4">Seu sonho, nossa missão!</h2>
            <p className="text-zinc-300">
              Oferecemos uma ampla gama de planos para atender a diversos tipos de projetos, desde hospedagem de
              servidores de Minecraft, FiveM e outros jogos, até VPS para aplicações de sites, bots e soluções digitais
              em geral. Nossas opções escaláveis e econômicas garantem desempenho e confiabilidade, atendendo tanto a
              pequenas iniciativas quanto a grandes demandas de infraestrutura.
            </p>
          </div>
          <div className="hidden lg:block">
            <Image
              src="/games/page/catneon.png"
              alt="NeonHost Mascote"
              width={200}
              height={200}
              className="object-contain"
            />
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
      logo: "/games/page/mine.jpg",
      featuredImage: "/games/page/mine.jpg",
      VpsPlan: "/vps-gamer",
      ComunityPaln: "https://discord.gg/neonhost",
      description:
        "Na NeonHost, oferecemos servidores populares como Vanilla, Forge, Mohist, Paper e Bedrock Edition, além de modpacks como Pixelmon, SkyFactory e RLCraft.",
      originalPrice: 20.9,
      price: 13.9,
      discount: 35,
      developer: "Mojang Studios",
      platforms: ["PC", "Xbox", "PlayStation", "Switch"],
      systems: [{ name: "Mods e Plugins" }, { name: "Modpacks" }, { name: "Atualização automática" }],
      info: [{ name: "Proteção DDoS" }, { name: "São Paulo" }, { name: "Multiplataforma" }],
      ratings: [
        { platform: "Google", score: "100%" },
        { platform: "Trustpilot", score: "100%" },
        { platform: "Discord", score: "100%" },
      ],
      testimonials: [
        {
          title: "NeonHost é incrível",
          author: "Humberto Junior",
          content:
            "A neonhost é incrível, custo benefício e um belo suporte, tanto pra colocar mods e essas coisas, recomendo e irei utilizar muito",
        },
        {
          title: "Uso e recomendo",
          author: "Alexandre Denardi",
          content:
            "Já uso a empresa para hospedar servidores a anos GTA RP, servidores Linux, hoje estou até mesmo com meu banco de dados hospedado, sem quedas e SLA perfeito.",
        },
        {
          title: "Excelente suporte",
          author: "Tomas",
          content:
            "NeonHost com suporte e jogos top para jogar, já contratei outros, mas esse servidor está muito bom e com equipamentos muito bons também.",
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
        {
          question: "Como faço pra acessar após a compra?",
          answer: "Após a compra, você receberá um email com as instruções de acesso ao painel de controle.",
        },
      ],
      plans: [
        {
          name: "Bedrock",
          ram: "5 jogadores",
          features: ["Exclusivo Bedrock", "Suporta Addons", "SSD NVMe", "AMD Ryzen"],
          originalPrice: 29.9,
          price: 19.9,
          discount: 34,
          LinkCompra: "dsadsadsa",
        },
        {
          name: "Basic",
          ram: "4 GB RAM",
          features: ["Mods e Plugins", "FTP Web/Filezilla", "Bedrock & Java", "Subdomínio GRÁTIS", "SSD NVMe"],
          originalPrice: 49.9,
          price: 37.9,
          discount: 24,
          LinkCompra: "dsadsadsa",
        },
        {
          name: "Advanced",
          ram: "6 GB RAM",
          features: ["Mods e Plugins", "FTP Web/Filezilla", "Bedrock & Java", "Subdomínio GRÁTIS", "SSD NVMe"],
          originalPrice: 69.9,
          price: 49.9,
          discount: 29,
          LinkCompra: "dsadsadsa",
        },
        {
          name: "Pro",
          ram: "10 GB RAM",
          features: ["Mods e Plugins", "FTP Web/Filezilla", "Bedrock & Java", "Subdomínio GRÁTIS", "SSD NVMe"],
          originalPrice: 99.9,
          price: 73.9,
          discount: 26,
          LinkCompra: "dsadsadsa",
        },
      ],
    },
    palworld: {
      id: "palworld",
      name: "Palworld",
      logo: "/games/page/pal.png",
      featuredImage: "/games/page/pal.png",
      VpsPlan: "/vps-neon",
      ComunityPaln: "https://discord.gg/neonhost",
      description:
        "Hospede seu próprio servidor de Palworld com a NeonHost. Capture, colecione e batalhe com criaturas em um mundo aberto cheio de aventuras e desafios.",
      originalPrice: 120.0,
      price: 79.9,
      discount: 34,
      developer: "Pocketpair",
      platforms: ["PC", "Xbox"],
      systems: [{ name: "Mods e Plugins" }, { name: "Configuração Personalizada" }, { name: "Atualização automática" }],
      info: [{ name: "Proteção DDoS" }, { name: "São Paulo" }, { name: "Multiplataforma" }],
      ratings: [
        { platform: "Google", score: "100%" },
        { platform: "Trustpilot", score: "100%" },
        { platform: "Discord", score: "100%" },
      ],
      testimonials: [
        {
          title: "Servidor estável",
          author: "Ricardo Almeida",
          content:
            "Servidor de Palworld muito estável, sem quedas e com ótimo desempenho mesmo com muitos jogadores online.",
        },
        {
          title: "Suporte excelente",
          author: "Mariana Costa",
          content:
            "O suporte da NeonHost é excelente, me ajudaram a configurar mods no meu servidor de Palworld rapidamente.",
        },
        {
          title: "Recomendo demais",
          author: "Felipe Santos",
          content: "Melhor hospedagem para Palworld, preço justo e servidor com ótimo desempenho. Recomendo demais!",
        },
      ],
      faq: [
        {
          question: "Quantos jogadores o servidor suporta?",
          answer:
            "Depende do plano escolhido, mas nossos servidores de Palworld suportam de 10 a 100 jogadores simultâneos.",
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
        {
          question: "Posso transferir meu mundo existente?",
          answer: "Sim, nossa equipe de suporte pode ajudar a transferir seu mundo existente para nosso servidor.",
        },
        {
          question: "O servidor fica online 24/7?",
          answer: "Sim, todos os nossos servidores ficam online 24 horas por dia, 7 dias por semana.",
        },
      ],
      plans: [
        {
          name: "Starter",
          ram: "10 jogadores",
          features: ["4GB RAM", "Suporte a Mods", "SSD NVMe", "AMD Ryzen"],
          originalPrice: 89.9,
          price: 59.9,
          discount: 33,
          LinkCompra: "dsadsadsa",
        },
        {
          name: "Advanced",
          ram: "30 jogadores",
          features: ["8GB RAM", "Suporte a Mods", "Configuração Personalizada", "Subdomínio GRÁTIS", "SSD NVMe"],
          originalPrice: 129.9,
          price: 89.9,
          discount: 31,
          LinkCompra: "dsadsadsa",
        },
        {
          name: "Pro",
          ram: "50 jogadores",
          features: ["16GB RAM", "Suporte a Mods", "Configuração Personalizada", "Subdomínio GRÁTIS", "SSD NVMe"],
          originalPrice: 179.9,
          price: 119.9,
          discount: 33,
          LinkCompra: "dsadsadsa",
        },
        {
          name: "Ultimate",
          ram: "100 jogadores",
          features: ["32GB RAM", "Suporte a Mods", "Configuração Personalizada", "Domínio GRÁTIS", "SSD NVMe"],
          originalPrice: 249.9,
          price: 169.9,
          discount: 32,
          LinkCompra: "dsadsadsa",
        },
      ],
    },
    projectzombiod: {
      id: "projectzombiod",
      name: "Project-Zombiod",
      logo: "/games/page/projectzombiod.webp",
      featuredImage: "/games/page/projectzombiod.webp",
      VpsPlan: "/vps-neon",
      ComunityPaln: "https://discord.gg/neonhost",
      description:
        "Hospede seu próprio servidor de Palworld com a NeonHost. Capture, colecione e batalhe com criaturas em um mundo aberto cheio de aventuras e desafios.",
      originalPrice: 120.0,
      price: 79.9,
      discount: 34,
      developer: "The Indie Stone",
      platforms: ["PC", "Xbox"],
      systems: [{ name: "Mods e Plugins" }, { name: "Configuração Personalizada" }, { name: "Atualização automática" }],
      info: [{ name: "Proteção DDoS" }, { name: "São Paulo" }, { name: "Multiplataforma" }],
      ratings: [
        { platform: "Google", score: "100%" },
        { platform: "Trustpilot", score: "100%" },
        { platform: "Discord", score: "100%" },
      ],
      testimonials: [
        {
          title: "Servidor estável",
          author: "Ricardo Almeida",
          content:
            "Servidor de Palworld muito estável, sem quedas e com ótimo desempenho mesmo com muitos jogadores online.",
        },
        {
          title: "Suporte excelente",
          author: "Mariana Costa",
          content:
            "O suporte da NeonHost é excelente, me ajudaram a configurar mods no meu servidor de Palworld rapidamente.",
        },
        {
          title: "Recomendo demais",
          author: "Felipe Santos",
          content: "Melhor hospedagem para Palworld, preço justo e servidor com ótimo desempenho. Recomendo demais!",
        },
      ],
      faq: [
        {
          question: "Quantos jogadores o servidor suporta?",
          answer:
            "Depende do plano escolhido, mas nossos servidores de Palworld suportam de 10 a 100 jogadores simultâneos.",
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
        {
          question: "Posso transferir meu mundo existente?",
          answer: "Sim, nossa equipe de suporte pode ajudar a transferir seu mundo existente para nosso servidor.",
        },
        {
          question: "O servidor fica online 24/7?",
          answer: "Sim, todos os nossos servidores ficam online 24 horas por dia, 7 dias por semana.",
        },
      ],
      plans: [
        {
          name: "Starter",
          ram: "10 jogadores",
          features: ["4GB RAM", "Suporte a Mods", "SSD NVMe", "AMD Ryzen"],
          originalPrice: 89.9,
          price: 59.9,
          discount: 33,
          LinkCompra: "dsadsadsa",
        },
        {
          name: "Advanced",
          ram: "30 jogadores",
          features: ["8GB RAM", "Suporte a Mods", "Configuração Personalizada", "Subdomínio GRÁTIS", "SSD NVMe"],
          originalPrice: 129.9,
          price: 89.9,
          discount: 31,
          LinkCompra: "dsadsadsa",
        },
        {
          name: "Pro",
          ram: "50 jogadores",
          features: ["16GB RAM", "Suporte a Mods", "Configuração Personalizada", "Subdomínio GRÁTIS", "SSD NVMe"],
          originalPrice: 179.9,
          price: 119.9,
          discount: 33,
          LinkCompra: "dsadsadsa",
        },
        {
          name: "Ultimate",
          ram: "100 jogadores",
          features: ["32GB RAM", "Suporte a Mods", "Configuração Personalizada", "Domínio GRÁTIS", "SSD NVMe"],
          originalPrice: 249.9,
          price: 169.9,
          discount: 32,
          LinkCompra: "dsadsadsa",
        },
      ],
    },
    enshrouded: {
      id: "enshrouded",
      name: "enshrouded",
      logo: "/games/page/enshrouded.jpg",
      featuredImage: "/games/page/enshrouded.jpg",
      VpsPlan: "/vps-neon",
      ComunityPaln: "https://discord.gg/neonhost",
      description:
        "Hospede seu próprio servidor de Palworld com a NeonHost. Capture, colecione e batalhe com criaturas em um mundo aberto cheio de aventuras e desafios.",
      originalPrice: 120.0,
      price: 79.9,
      discount: 34,
      developer: "Pocketpair",
      platforms: ["PC", "Xbox"],
      systems: [{ name: "Mods e Plugins" }, { name: "Configuração Personalizada" }, { name: "Atualização automática" }],
      info: [{ name: "Proteção DDoS" }, { name: "São Paulo" }, { name: "Multiplataforma" }],
      ratings: [
        { platform: "Google", score: "100%" },
        { platform: "Trustpilot", score: "100%" },
        { platform: "Discord", score: "100%" },
      ],
      testimonials: [
        {
          title: "Servidor estável",
          author: "Ricardo Almeida",
          content:
            "Servidor de Palworld muito estável, sem quedas e com ótimo desempenho mesmo com muitos jogadores online.",
        },
        {
          title: "Suporte excelente",
          author: "Mariana Costa",
          content:
            "O suporte da NeonHost é excelente, me ajudaram a configurar mods no meu servidor de Palworld rapidamente.",
        },
        {
          title: "Recomendo demais",
          author: "Felipe Santos",
          content: "Melhor hospedagem para Palworld, preço justo e servidor com ótimo desempenho. Recomendo demais!",
        },
      ],
      faq: [
        {
          question: "Quantos jogadores o servidor suporta?",
          answer:
            "Depende do plano escolhido, mas nossos servidores de Palworld suportam de 10 a 100 jogadores simultâneos.",
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
        {
          question: "Posso transferir meu mundo existente?",
          answer: "Sim, nossa equipe de suporte pode ajudar a transferir seu mundo existente para nosso servidor.",
        },
        {
          question: "O servidor fica online 24/7?",
          answer: "Sim, todos os nossos servidores ficam online 24 horas por dia, 7 dias por semana.",
        },
      ],
      plans: [
        {
          name: "Starter",
          ram: "10 jogadores",
          features: ["4GB RAM", "Suporte a Mods", "SSD NVMe", "AMD Ryzen"],
          originalPrice: 89.9,
          price: 59.9,
          discount: 33,
          LinkCompra: "dsadsadsa",
        },
        {
          name: "Advanced",
          ram: "30 jogadores",
          features: ["8GB RAM", "Suporte a Mods", "Configuração Personalizada", "Subdomínio GRÁTIS", "SSD NVMe"],
          originalPrice: 129.9,
          price: 89.9,
          discount: 31,
          LinkCompra: "dsadsadsa",
        },
        {
          name: "Pro",
          ram: "50 jogadores",
          features: ["16GB RAM", "Suporte a Mods", "Configuração Personalizada", "Subdomínio GRÁTIS", "SSD NVMe"],
          originalPrice: 179.9,
          price: 119.9,
          discount: 33,
          LinkCompra: "dsadsadsa",
        },
        {
          name: "Ultimate",
          ram: "100 jogadores",
          features: ["32GB RAM", "Suporte a Mods", "Configuração Personalizada", "Domínio GRÁTIS", "SSD NVMe"],
          originalPrice: 249.9,
          price: 169.9,
          discount: 32,
          LinkCompra: "dsadsadsa",
        },
      ],
    },
    armareforger: {
      id: "armareforger",
      name: "arma reforger",
      logo: "/games/page/armareforger.jpg",
      featuredImage: "/games/page/armareforger.jpg",
      VpsPlan: "/vps-neon",
      ComunityPaln: "https://discord.gg/neonhost",
      description:
        "Hospede seu próprio servidor de Palworld com a NeonHost. Capture, colecione e batalhe com criaturas em um mundo aberto cheio de aventuras e desafios.",
      originalPrice: 120.0,
      price: 79.9,
      discount: 34,
      developer: "Pocketpair",
      platforms: ["PC", "Xbox"],
      systems: [{ name: "Mods e Plugins" }, { name: "Configuração Personalizada" }, { name: "Atualização automática" }],
      info: [{ name: "Proteção DDoS" }, { name: "São Paulo" }, { name: "Multiplataforma" }],
      ratings: [
        { platform: "Google", score: "100%" },
        { platform: "Trustpilot", score: "100%" },
        { platform: "Discord", score: "100%" },
      ],
      testimonials: [
        {
          title: "Servidor estável",
          author: "Ricardo Almeida",
          content:
            "Servidor de Palworld muito estável, sem quedas e com ótimo desempenho mesmo com muitos jogadores online.",
        },
        {
          title: "Suporte excelente",
          author: "Mariana Costa",
          content:
            "O suporte da NeonHost é excelente, me ajudaram a configurar mods no meu servidor de Palworld rapidamente.",
        },
        {
          title: "Recomendo demais",
          author: "Felipe Santos",
          content: "Melhor hospedagem para Palworld, preço justo e servidor com ótimo desempenho. Recomendo demais!",
        },
      ],
      faq: [
        {
          question: "Quantos jogadores o servidor suporta?",
          answer:
            "Depende do plano escolhido, mas nossos servidores de Palworld suportam de 10 a 100 jogadores simultâneos.",
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
        {
          question: "Posso transferir meu mundo existente?",
          answer: "Sim, nossa equipe de suporte pode ajudar a transferir seu mundo existente para nosso servidor.",
        },
        {
          question: "O servidor fica online 24/7?",
          answer: "Sim, todos os nossos servidores ficam online 24 horas por dia, 7 dias por semana.",
        },
      ],
      plans: [
        {
          name: "Starter",
          ram: "10 jogadores",
          features: ["4GB RAM", "Suporte a Mods", "SSD NVMe", "AMD Ryzen"],
          originalPrice: 89.9,
          price: 59.9,
          discount: 33,
          LinkCompra: "dsadsadsa",
        },
        {
          name: "Advanced",
          ram: "30 jogadores",
          features: ["8GB RAM", "Suporte a Mods", "Configuração Personalizada", "Subdomínio GRÁTIS", "SSD NVMe"],
          originalPrice: 129.9,
          price: 89.9,
          discount: 31,
          LinkCompra: "dsadsadsa",
        },
        {
          name: "Pro",
          ram: "50 jogadores",
          features: ["16GB RAM", "Suporte a Mods", "Configuração Personalizada", "Subdomínio GRÁTIS", "SSD NVMe"],
          originalPrice: 179.9,
          price: 119.9,
          discount: 33,
          LinkCompra: "dsadsadsa",
        },
        {
          name: "Ultimate",
          ram: "100 jogadores",
          features: ["32GB RAM", "Suporte a Mods", "Configuração Personalizada", "Domínio GRÁTIS", "SSD NVMe"],
          originalPrice: 249.9,
          price: 169.9,
          discount: 32,
          LinkCompra: "dsadsadsa",
        },
      ],
    },
    dayz: {
      id: "dayz",
      name: "dayz",
      logo: "/games/page/dayz.webp",
      featuredImage: "/games/page/dayz.webp",
      VpsPlan: "/vps-neon",
      ComunityPaln: "https://discord.gg/neonhost",
      description:
        "Hospede seu próprio servidor de Palworld com a NeonHost. Capture, colecione e batalhe com criaturas em um mundo aberto cheio de aventuras e desafios.",
      originalPrice: 120.0,
      price: 79.9,
      discount: 34,
      developer: "Pocketpair",
      platforms: ["PC", "Xbox"],
      systems: [{ name: "Mods e Plugins" }, { name: "Configuração Personalizada" }, { name: "Atualização automática" }],
      info: [{ name: "Proteção DDoS" }, { name: "São Paulo" }, { name: "Multiplataforma" }],
      ratings: [
        { platform: "Google", score: "100%" },
        { platform: "Trustpilot", score: "100%" },
        { platform: "Discord", score: "100%" },
      ],
      testimonials: [
        {
          title: "Servidor estável",
          author: "Ricardo Almeida",
          content:
            "Servidor de Palworld muito estável, sem quedas e com ótimo desempenho mesmo com muitos jogadores online.",
        },
        {
          title: "Suporte excelente",
          author: "Mariana Costa",
          content:
            "O suporte da NeonHost é excelente, me ajudaram a configurar mods no meu servidor de Palworld rapidamente.",
        },
        {
          title: "Recomendo demais",
          author: "Felipe Santos",
          content: "Melhor hospedagem para Palworld, preço justo e servidor com ótimo desempenho. Recomendo demais!",
        },
      ],
      faq: [
        {
          question: "Quantos jogadores o servidor suporta?",
          answer:
            "Depende do plano escolhido, mas nossos servidores de Palworld suportam de 10 a 100 jogadores simultâneos.",
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
        {
          question: "Posso transferir meu mundo existente?",
          answer: "Sim, nossa equipe de suporte pode ajudar a transferir seu mundo existente para nosso servidor.",
        },
        {
          question: "O servidor fica online 24/7?",
          answer: "Sim, todos os nossos servidores ficam online 24 horas por dia, 7 dias por semana.",
        },
      ],
      plans: [
        {
          name: "Starter",
          ram: "10 jogadores",
          features: ["4GB RAM", "Suporte a Mods", "SSD NVMe", "AMD Ryzen"],
          originalPrice: 89.9,
          price: 59.9,
          discount: 33,
          LinkCompra: "dsadsadsa",
        },
        {
          name: "Advanced",
          ram: "30 jogadores",
          features: ["8GB RAM", "Suporte a Mods", "Configuração Personalizada", "Subdomínio GRÁTIS", "SSD NVMe"],
          originalPrice: 129.9,
          price: 89.9,
          discount: 31,
          LinkCompra: "dsadsadsa",
        },
        {
          name: "Pro",
          ram: "50 jogadores",
          features: ["16GB RAM", "Suporte a Mods", "Configuração Personalizada", "Subdomínio GRÁTIS", "SSD NVMe"],
          originalPrice: 179.9,
          price: 119.9,
          discount: 33,
          LinkCompra: "dsadsadsa",
        },
        {
          name: "Ultimate",
          ram: "100 jogadores",
          features: ["32GB RAM", "Suporte a Mods", "Configuração Personalizada", "Domínio GRÁTIS", "SSD NVMe"],
          originalPrice: 249.9,
          price: 169.9,
          discount: 32,
          LinkCompra: "dsadsadsa",
        },
      ],
    },
    fivem: {
      id: "fivem",
      name: "fivem",
      logo: "/games/page/gtaV.jpg",
      featuredImage: "/games/page/gtaV.jpg",
      VpsPlan: "/fivem",
      ComunityPaln: "https://discord.gg/neonhost",
      description:
        "Hospede seu próprio servidor de Palworld com a NeonHost. Capture, colecione e batalhe com criaturas em um mundo aberto cheio de aventuras e desafios.",
      originalPrice: 120.0,
      price: 79.9,
      discount: 34,
      developer: "Rockstar",
      platforms: ["PC", "Xbox"],
      systems: [{ name: "Mods e Plugins" }, { name: "Configuração Personalizada" }, { name: "Atualização automática" }],
      info: [{ name: "Proteção DDoS" }, { name: "São Paulo" }, { name: "Multiplataforma" }],
      ratings: [
        { platform: "Google", score: "100%" },
        { platform: "Trustpilot", score: "100%" },
        { platform: "Discord", score: "100%" },
      ],
      testimonials: [
        {
          title: "Servidor estável",
          author: "Ricardo Almeida",
          content:
            "Servidor de Palworld muito estável, sem quedas e com ótimo desempenho mesmo com muitos jogadores online.",
        },
        {
          title: "Suporte excelente",
          author: "Mariana Costa",
          content:
            "O suporte da NeonHost é excelente, me ajudaram a configurar mods no meu servidor de Palworld rapidamente.",
        },
        {
          title: "Recomendo demais",
          author: "Felipe Santos",
          content: "Melhor hospedagem para Palworld, preço justo e servidor com ótimo desempenho. Recomendo demais!",
        },
      ],
      faq: [
        {
          question: "Quantos jogadores o servidor suporta?",
          answer:
            "Depende do plano escolhido, mas nossos servidores de Palworld suportam de 10 a 100 jogadores simultâneos.",
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
        {
          question: "Posso transferir meu mundo existente?",
          answer: "Sim, nossa equipe de suporte pode ajudar a transferir seu mundo existente para nosso servidor.",
        },
        {
          question: "O servidor fica online 24/7?",
          answer: "Sim, todos os nossos servidores ficam online 24 horas por dia, 7 dias por semana.",
        },
      ],
      plans: [
        {
          name: "Starter",
          ram: "10 jogadores",
          features: ["4GB RAM", "Suporte a Mods", "SSD NVMe", "AMD Ryzen"],
          originalPrice: 89.9,
          price: 59.9,
          discount: 33,
          LinkCompra: "dsadsadsa",
        },
        {
          name: "Advanced",
          ram: "30 jogadores",
          features: ["8GB RAM", "Suporte a Mods", "Configuração Personalizada", "Subdomínio GRÁTIS", "SSD NVMe"],
          originalPrice: 129.9,
          price: 89.9,
          discount: 31,
          LinkCompra: "dsadsadsa",
        },
        {
          name: "Pro",
          ram: "50 jogadores",
          features: ["16GB RAM", "Suporte a Mods", "Configuração Personalizada", "Subdomínio GRÁTIS", "SSD NVMe"],
          originalPrice: 179.9,
          price: 119.9,
          discount: 33,
          LinkCompra: "dsadsadsa",
        },
        {
          name: "Ultimate",
          ram: "100 jogadores",
          features: ["32GB RAM", "Suporte a Mods", "Configuração Personalizada", "Domínio GRÁTIS", "SSD NVMe"],
          originalPrice: 249.9,
          price: 169.9,
          discount: 32,
          LinkCompra: "dsadsadsa",
        },
      ],
    },
    rust: {
      id: "rust",
      name: "rust",
      logo: "/games/page/rust.jpg",
      featuredImage: "/games/page/rust.jpg",
      VpsPlan: "/vps-neon",
      ComunityPaln: "https://discord.gg/neonhost",
      description:
        "Hospede seu próprio servidor de Palworld com a NeonHost. Capture, colecione e batalhe com criaturas em um mundo aberto cheio de aventuras e desafios.",
      originalPrice: 120.0,
      price: 79.9,
      discount: 34,
      developer: "Rockstar",
      platforms: ["PC", "Xbox"],
      systems: [{ name: "Mods e Plugins" }, { name: "Configuração Personalizada" }, { name: "Atualização automática" }],
      info: [{ name: "Proteção DDoS" }, { name: "São Paulo" }, { name: "Multiplataforma" }],
      ratings: [
        { platform: "Google", score: "100%" },
        { platform: "Trustpilot", score: "100%" },
        { platform: "Discord", score: "100%" },
      ],
      testimonials: [
        {
          title: "Servidor estável",
          author: "Ricardo Almeida",
          content:
            "Servidor de Palworld muito estável, sem quedas e com ótimo desempenho mesmo com muitos jogadores online.",
        },
        {
          title: "Suporte excelente",
          author: "Mariana Costa",
          content:
            "O suporte da NeonHost é excelente, me ajudaram a configurar mods no meu servidor de Palworld rapidamente.",
        },
        {
          title: "Recomendo demais",
          author: "Felipe Santos",
          content: "Melhor hospedagem para Palworld, preço justo e servidor com ótimo desempenho. Recomendo demais!",
        },
      ],
      faq: [
        {
          question: "Quantos jogadores o servidor suporta?",
          answer:
            "Depende do plano escolhido, mas nossos servidores de Palworld suportam de 10 a 100 jogadores simultâneos.",
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
        {
          question: "Posso transferir meu mundo existente?",
          answer: "Sim, nossa equipe de suporte pode ajudar a transferir seu mundo existente para nosso servidor.",
        },
        {
          question: "O servidor fica online 24/7?",
          answer: "Sim, todos os nossos servidores ficam online 24 horas por dia, 7 dias por semana.",
        },
      ],
      plans: [
        {
          name: "Starter",
          ram: "10 jogadores",
          features: ["4GB RAM", "Suporte a Mods", "SSD NVMe", "AMD Ryzen"],
          originalPrice: 89.9,
          price: 59.9,
          discount: 33,
          LinkCompra: "dsadsadsa",
        },
        {
          name: "Advanced",
          ram: "30 jogadores",
          features: ["8GB RAM", "Suporte a Mods", "Configuração Personalizada", "Subdomínio GRÁTIS", "SSD NVMe"],
          originalPrice: 129.9,
          price: 89.9,
          discount: 31,
          LinkCompra: "dsadsadsa",
        },
        {
          name: "Pro",
          ram: "50 jogadores",
          features: ["16GB RAM", "Suporte a Mods", "Configuração Personalizada", "Subdomínio GRÁTIS", "SSD NVMe"],
          originalPrice: 179.9,
          price: 119.9,
          discount: 33,
          LinkCompra: "dsadsadsa",
        },
        {
          name: "Ultimate",
          ram: "100 jogadores",
          features: ["32GB RAM", "Suporte a Mods", "Configuração Personalizada", "Domínio GRÁTIS", "SSD NVMe"],
          originalPrice: 249.9,
          price: 169.9,
          discount: 32,
          LinkCompra: "dsadsadsa",
        },
      ],
    },
    // Adicione mais jogos conforme necessário
  }

  return games[id as keyof typeof games]
}
