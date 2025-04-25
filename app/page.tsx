"use client"

import { Button } from "@nextui-org/button"
import { motion } from "framer-motion"
import GameServersSection from "@/components/game-servers-section"
import TestimonialsSection from "@/components/testimonials-section"
import Link from "next/link"
import { ZapIcon, ShieldIcon, Clock, Headset, Sparkles, Server } from "lucide-react"
import { useRef, useEffect } from "react"

// Animation variants
const fadeInVariant = {
	hidden: { opacity: 0, y: -20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.7, ease: "easeOut" },
	},
}

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.15,
			delayChildren: 0.2,
		},
	},
}

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			type: "spring",
			stiffness: 100,
			damping: 12,
		},
	},
}

export default function Home() {
	const featuresRef = useRef(null)
	const ctaRef = useRef(null)

	// Efeito para adicionar classe ao body para garantir fundo escuro
	useEffect(() => {
		document.body.classList.add("bg-[#050507]")
		return () => {
			document.body.classList.remove("bg-[#050507]")
		}
	}, [])

	return (
		<section className="w-full bg-[#050507]">
			{/* Hero Section - GameServersSection */}
			<div className="w-full">
				<GameServersSection />
			</div>

			{/* Divider com efeito de gradiente */}
			<div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 relative">
				<div className="h-px w-full bg-gradient-to-r from-transparent via-[#9553ff]/50 to-transparent my-8"></div>

				<div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-[#050507] px-8 py-1">
					<motion.div
						initial={{ scale: 0.8, opacity: 0 }}
						whileInView={{ scale: 1, opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="flex items-center justify-center space-x-2"
					>
						<div className="h-1 w-1 rounded-full bg-[#9553ff]"></div>
						<div className="h-1 w-1 rounded-full bg-[#ff3e9d]"></div>
						<div className="h-1 w-1 rounded-full bg-[#9553ff]"></div>
					</motion.div>
				</div>
			</div>

			{/* Features Section */}
			<motion.section
				ref={featuresRef}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-100px" }}
				variants={containerVariants}
				className="w-full py-20 md:py-28"
			>
				<div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8">
					<motion.div variants={itemVariants} className="text-center mb-14">
						<motion.div
							className="inline-flex items-center justify-center mb-4 bg-gradient-to-br from-[#9553ff]/20 to-[#ff3e9d]/20 p-3 rounded-full"
							initial={{ scale: 0.8, opacity: 0 }}
							whileInView={{ scale: 1, opacity: 1 }}
							viewport={{ once: true }}
							transition={{ delay: 0.2, duration: 0.5 }}
						>
							<Server className="h-8 w-8 text-[#ff3e9d]" />
						</motion.div>
						<h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-[#9553ff] to-[#ff3e9d] bg-clip-text text-transparent">
							Infraestrutura de Ponta
						</h2>
						<div className="w-24 h-1 bg-gradient-to-r from-[#9553ff] to-[#ff3e9d] mx-auto"></div>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
						<motion.div
							variants={itemVariants}
							whileHover={{ y: -5, transition: { duration: 0.3 } }}
							className="flex flex-col items-center text-center p-8 rounded-xl bg-[#0B0E13] border border-gray-800/50 hover:border-[#9553ff]/30 transition-all duration-300 group"
						>
							<div className="bg-gradient-to-br from-[#9553ff] to-[#9553ff]/70 p-5 rounded-full mb-6 group-hover:shadow-lg group-hover:shadow-[#9553ff]/20 transition-all duration-300">
								<ZapIcon className="w-8 h-8 text-white" />
							</div>
							<h3 className="text-2xl font-bold mb-3 text-white">Latência de 20ms</h3>
							<p className="text-gray-300">
								Experiência de jogo fluida e resposta rápida para seus jogadores, garantindo a melhor jogabilidade.
							</p>
						</motion.div>

						<motion.div
							variants={itemVariants}
							whileHover={{ y: -5, transition: { duration: 0.3 } }}
							className="flex flex-col items-center text-center p-8 rounded-xl bg-[#0B0E13] border border-gray-800/50 hover:border-[#ff3e9d]/30 transition-all duration-300 group"
						>
							<div className="bg-gradient-to-br from-[#ff3e9d] to-[#ff3e9d]/70 p-5 rounded-full mb-6 group-hover:shadow-lg group-hover:shadow-[#ff3e9d]/20 transition-all duration-300">
								<ShieldIcon className="w-8 h-8 text-white" />
							</div>
							<h3 className="text-2xl font-bold mb-3 text-white">Proteção DDoS</h3>
							<p className="text-gray-300">
								Defesa integrada contra ataques, mantendo seus serviços sempre online e protegidos 24/7.
							</p>
						</motion.div>

						<motion.div
							variants={itemVariants}
							whileHover={{ y: -5, transition: { duration: 0.3 } }}
							className="flex flex-col items-center text-center p-8 rounded-xl bg-[#0B0E13] border border-gray-800/50 hover:border-[#9553ff]/30 transition-all duration-300 group"
						>
							<div className="bg-gradient-to-br from-[#9553ff] to-[#9553ff]/70 p-5 rounded-full mb-6 group-hover:shadow-lg group-hover:shadow-[#9553ff]/20 transition-all duration-300">
								<Clock className="w-8 h-8 text-white" />
							</div>
							<h3 className="text-2xl font-bold mb-3 text-white">Uptime 99,9%</h3>
							<p className="text-gray-300">
								Garantimos 99,9% de uptime, mantendo seus sites e jogos sempre online para seus usuários.
							</p>
						</motion.div>

						<motion.div
							variants={itemVariants}
							whileHover={{ y: -5, transition: { duration: 0.3 } }}
							className="flex flex-col items-center text-center p-8 rounded-xl bg-[#0B0E13] border border-gray-800/50 hover:border-[#ff3e9d]/30 transition-all duration-300 group"
						>
							<div className="bg-gradient-to-br from-[#ff3e9d] to-[#ff3e9d]/70 p-5 rounded-full mb-6 group-hover:shadow-lg group-hover:shadow-[#ff3e9d]/20 transition-all duration-300">
								<Headset className="w-8 h-8 text-white" />
							</div>
							<h3 className="text-2xl font-bold mb-3 text-white">Suporte 24/7</h3>
							<p className="text-gray-300">
								Assistência rápida e eficiente a qualquer hora, com atendimento amigável e especializado.
							</p>
						</motion.div>
					</div>
				</div>

				{/* Divider com efeito de gradiente */}
				<div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 relative mt-20">
					<div className="h-px w-full bg-gradient-to-r from-transparent via-[#ff3e9d]/50 to-transparent"></div>

					<div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-[#050507] px-8 py-1">
						<motion.div
							initial={{ scale: 0.8, opacity: 0 }}
							whileInView={{ scale: 1, opacity: 1 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5 }}
							className="flex items-center justify-center space-x-2"
						>
							<div className="h-1 w-1 rounded-full bg-[#ff3e9d]"></div>
							<div className="h-1 w-1 rounded-full bg-[#9553ff]"></div>
							<div className="h-1 w-1 rounded-full bg-[#ff3e9d]"></div>
						</motion.div>
					</div>
				</div>
			</motion.section>

			{/* Testimonials Section */}
			<div className="w-full py-2">

				<TestimonialsSection />
			</div>

			{/* Divider com efeito de gradiente */}
			<div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 relative my-10">
				<div className="h-px w-full bg-gradient-to-r from-transparent via-[#9553ff]/50 to-transparent"></div>

				<div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-[#050507] px-8 py-1">
					<motion.div
						initial={{ scale: 0.8, opacity: 0 }}
						whileInView={{ scale: 1, opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="flex items-center justify-center space-x-2"
					>
						<div className="h-1 w-1 rounded-full bg-[#9553ff]"></div>
						<div className="h-1 w-1 rounded-full bg-[#ff3e9d]"></div>
						<div className="h-1 w-1 rounded-full bg-[#9553ff]"></div>
					</motion.div>
				</div>
			</div>

			{/* CTA Section */}
			<motion.section
				ref={ctaRef}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, margin: "-100px" }}
				variants={containerVariants}
				className="w-full py-20 md:py-28"
			>
				<div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8">
					<motion.div variants={itemVariants} className="rounded-xl overflow-hidden relative">
						{/* Background com efeito de gradiente */}
						<div className="absolute inset-0 bg-gradient-to-br from-[#0B0E13] to-[#131720] opacity-80"></div>
						<div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1920')] bg-cover bg-center opacity-10"></div>

						{/* Efeito de brilho nos cantos */}
						<div className="absolute top-0 left-0 w-[200px] h-[200px] bg-[#9553ff]/10 blur-[100px] rounded-full"></div>
						<div className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-[#ff3e9d]/10 blur-[100px] rounded-full"></div>

						{/* Borda com gradiente */}
						<div className="absolute inset-0 rounded-xl p-[1px] bg-gradient-to-br from-[#9553ff]/40 via-transparent to-[#ff3e9d]/40"></div>

						<div className="relative p-12 md:p-20 text-center z-10">
							<motion.div variants={itemVariants} className="max-w-3xl mx-auto">
								<h2 className="text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
									Pronto para revolucionar sua experiência de jogo?
								</h2>
								<p className="text-xl text-gray-300 mb-10">
									Junte-se a milhares de clientes satisfeitos e experimente o poder da NeonHost com servidores de alta
									performance.
								</p>
								<motion.div
									whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(149, 83, 255, 0.3)" }}
									whileTap={{ scale: 0.97 }}
									className="inline-block"
								>
									<Link href="https://app.neonhost.com.br/">
										<Button className="bg-gradient-to-r from-[#9553ff] to-[#ff3e9d] hover:opacity-90 text-white text-lg font-bold px-10 py-6 rounded-xl">
											Implante seu servidor agora
										</Button>
									</Link>
								</motion.div>
							</motion.div>
						</div>
					</motion.div>
				</div>
			</motion.section>

		</section>
	)
}
