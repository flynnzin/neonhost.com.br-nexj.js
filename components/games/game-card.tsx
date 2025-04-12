import Image from "next/image"
import Link from "next/link"

interface GameCardProps {
  id: string
  name: string
  image: string
  originalPrice: number
  currentPrice: number
  discount?: number
}

export function GameCard({ id, name, image, originalPrice, currentPrice, discount }: GameCardProps) {
  return (
    <Link href={`/games/${id}`} className="group">
      <div className="relative rounded-lg overflow-hidden">
        <div className="aspect-[4/3] relative">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <div className="absolute bottom-0 left-0 w-full p-2 bg-gradient-to-t from-black to-transparent">
          <h3 className="text-white font-medium">{name}</h3>
        </div>
      </div>
      <div className="mt-2 flex items-center gap-2">
        {discount && (
          <span className="bg-gradient-to-r from-purple-600 to-orange-500 text-white text-xs px-2 py-1 rounded">
            -{discount}%
          </span>
        )}
        {originalPrice !== currentPrice && (
          <span className="text-zinc-500 line-through text-sm">R$ {originalPrice.toFixed(2).replace(".", ",")}</span>
        )}
        <span className="text-white font-bold">R$ {currentPrice.toFixed(2).replace(".", ",")}</span>
      </div>
    </Link>
  )
}
