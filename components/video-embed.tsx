"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react"

interface VideoEmbedProps {
  url: string
}

export default function VideoEmbed({ url }: VideoEmbedProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [showControls, setShowControls] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [thumbnailUrl, setThumbnailUrl] = useState("")
  const videoRef = useRef<HTMLIFrameElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Extrair ID do vídeo e determinar a plataforma
  useEffect(() => {
    let videoId = ""
    let platform = ""

    if (url.includes("youtube.com") || url.includes("youtu.be")) {
      platform = "youtube"
      if (url.includes("youtube.com/watch?v=")) {
        videoId = url.split("v=")[1].split("&")[0]
      } else if (url.includes("youtu.be/")) {
        videoId = url.split("youtu.be/")[1].split("?")[0]
      }
      setThumbnailUrl(`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`)
    } else if (url.includes("vimeo.com")) {
      platform = "vimeo"
      videoId = url.split("vimeo.com/")[1].split("?")[0]
      // Vimeo requer uma API para obter a thumbnail, então usamos um placeholder
      setThumbnailUrl("/placeholder.svg?height=480&width=854&text=Vimeo+Video")
    } else {
      // Fallback para outros serviços de vídeo
      setThumbnailUrl("/placeholder.svg?height=480&width=854&text=Video")
    }

    // Simular carregamento
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [url])

  // Função para lidar com o clique no botão de play
  const handlePlayClick = () => {
    setIsPlaying(true)
    setShowControls(true)

    // Timeout para esconder os controles após alguns segundos
    setTimeout(() => {
      if (isPlaying) {
        setShowControls(false)
      }
    }, 3000)
  }

  // Função para alternar o estado de mudo
  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsMuted(!isMuted)
  }

  // Função para alternar o modo de tela cheia
  const toggleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation()

    if (!isFullscreen) {
      if (containerRef.current?.requestFullscreen) {
        containerRef.current.requestFullscreen()
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      }
    }

    setIsFullscreen(!isFullscreen)
  }

  // Função para fechar o vídeo
  const closeVideo = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsPlaying(false)
  }

  // Função para mostrar controles ao passar o mouse
  const handleMouseEnter = () => {
    if (isPlaying) {
      setShowControls(true)
    }
  }

  // Função para esconder controles ao remover o mouse
  const handleMouseLeave = () => {
    if (isPlaying) {
      setShowControls(false)
    }
  }

  // Construir URL do iframe com base na plataforma
  const getEmbedUrl = () => {
    if (url.includes("youtube.com") || url.includes("youtu.be")) {
      const videoId = url.includes("v=") ? url.split("v=")[1].split("&")[0] : url.split("youtu.be/")[1].split("?")[0]
      return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=${isMuted ? 1 : 0}`
    } else if (url.includes("vimeo.com")) {
      const videoId = url.split("vimeo.com/")[1].split("?")[0]
      return `https://player.vimeo.com/video/${videoId}?autoplay=1&muted=${isMuted ? 1 : 0}`
    }

    // Fallback para outros serviços ou URLs de vídeo
    return url
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-video rounded-lg overflow-hidden bg-black"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {!isPlaying ? (
        // Thumbnail com botão de play
        <div className="relative w-full h-full cursor-pointer group" onClick={handlePlayClick}>
          {/* Thumbnail */}
          <div className="absolute inset-0 bg-gray-900 animate-pulse">
            {isLoaded && (
              <img
                src={thumbnailUrl || "/placeholder.svg"}
                alt="Video thumbnail"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            )}
          </div>

          {/* Overlay escuro */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors"></div>

          {/* Botão de play */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-pink-500/90 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
              <Play className="h-8 w-8 md:h-10 md:w-10 text-white fill-white" />
            </div>
          </div>

          {/* Título do vídeo */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <p className="text-white font-medium">Assistir vídeo</p>
          </div>
        </div>
      ) : (
        // Iframe do vídeo
        <iframe
          ref={videoRef}
          src={getEmbedUrl()}
          className="absolute top-0 left-0 w-full h-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}

      {/* Controles de vídeo */}
      {isPlaying && showControls && (
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-between transition-opacity duration-300">
          <div className="flex items-center space-x-3">
            <button
              onClick={closeVideo}
              className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <Pause className="h-4 w-4 text-white" />
            </button>

            <button
              onClick={toggleMute}
              className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              {isMuted ? <VolumeX className="h-4 w-4 text-white" /> : <Volume2 className="h-4 w-4 text-white" />}
            </button>
          </div>

          <div>
            <button
              onClick={toggleFullscreen}
              className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              <Maximize className="h-4 w-4 text-white" />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
