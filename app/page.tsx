"use client";

import { Button } from "@nextui-org/button";
import { motion } from "framer-motion";
import { Card, Divider } from "@nextui-org/react";
import { AccordionItems } from "./_components/accordion";
import GameServersSection from "@/components/game-servers-section"
import TestimonialsSection from "@/components/testimonials-section"
import ProtectionDashboard from "@/components/protection-dashboard"
import ProcessorComparison from "@/components/processor-comparison"
import WhyChooseUs from "@/components/why-choose-us"
import CookieConsent from "@/components/cookie-consent"
// import HeroBackground from './_components/HeroBackground';

const textTypingVariant = {
	hidden: { opacity: 1 },
	visible: {
		transition: {
			staggerChildren: 0.05,
		},
	},
};

const letterVariant = {
	hidden: { opacity: 0 },
	visible: { opacity: 1 },
};

const fadeInVariant = {
	hidden: { opacity: 0, y: -20, filter: "blur(10px)" },
	visible: {
		opacity: 1,
		y: 0,
		filter: "blur(0px)",
		transition: { duration: 1, ease: "easeOut" }
	}
};

const slideIn = {
	hidden: { opacity: 0, x: -50 },
	visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const legoBuild = {
	hidden: { opacity: 0, y: 50, scale: 0.8 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			duration: 0.8,
			ease: "easeOut",
			staggerChildren: 0.2,
		},
	},
};

const pieceVariants = {
	hidden: { opacity: 0, y: 20, scale: 0.9 },
	visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5 } },
};

const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2,
			delayChildren: 0.3
		}
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 50 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			type: "spring",
			stiffness: 100,
			damping: 10
		}
	},
};

const hoverVariants = {
	hover: {
		scale: 1.05,
		boxShadow: "0 0 30px rgba(236, 72, 153, 0.3)",
		transition: {
			type: "spring",
			stiffness: 300,
			damping: 10
		}
	}
};

const iconVariants = {
	hover: {
		scale: 1.2,
		rotate: 10,
		transition: {
			type: "spring",
			stiffness: 400,
			damping: 10
		}
	}
};

function useTypingEffect(text2: string, typingSpeed = 150, deletingSpeed = 100, pauseTime = 1000) {
	const [displayedText, setDisplayedText] = useState("");
	const [isDeleting, setIsDeleting] = useState(false);
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const handleTyping = () => {
			setDisplayedText((prev) =>
				isDeleting ? text2.substring(0, prev.length - 1) : text2.substring(0, prev.length + 1)
			);

			if (!isDeleting && displayedText === text2) {
				setTimeout(() => setIsDeleting(true), pauseTime);
			} else if (isDeleting && displayedText === "") {
				setIsDeleting(false);
			}
		};

		const timeout = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
		return () => clearTimeout(timeout);
	}, [displayedText, isDeleting]);

	return displayedText;
}

import {
	HeartPulseIcon,
	ServerIcon,
	ShieldCheckIcon,
	ZapIcon,
	CpuIcon,
	GaugeIcon,
	NetworkIcon,
	ShieldIcon,
	Info,
	Gamepad2,
	Cpu,
	CircleCheckBig,
	Server,
} from "lucide-react";
import { LoadingScreen } from "./_components/loading-screen";
import Link from "next/link";

import React from 'react';
import { useEffect, useState } from "react";

const plans = [
	{
		icon: <Gamepad2 className="w-8 h-8 text-pink-500" />,
		title: "VPS Neon",
		description: "VPS de alta performance no Brasil com Anti-DDoS PRO",
		price: "69.90",
		link: "/vps-neon",
	},
	{
		icon: <CircleCheckBig className="w-8 h-8 text-pink-500" />,
		title: "VPS Trader",
		description: "Servidores para trader com tráfego mensal ilimitado",
		price: "74.90",
		link: "/vps-trader",
	},
	{
		icon: <Server className="w-8 h-8 text-pink-500" />,
		title: "Semi-Dedicados",
		description: "Servidores robustos Windows e Linux no Brasil",
		price: "305.96",
		link: "/semi-dedicado",
	},
	{
		icon: <Cpu className="w-8 h-8 text-pink-500" />,
		title: "Servidores Dedicados",
		description: "Servidores físicos de alta performance no Brasil",
		price: "1550.00",
		link: "/dedicado",
	},
];


export default function Home() {
	const displayedText = useTypingEffect("Perguntas Frequentes");
	return (

		<section className="max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto">

			{/* <LoadingScreen /> */}
			<section className="relative py-20 overflow-hidden">
			<div className="container relative mx-auto px-6 md:px-8 lg:px-12 text-center">
				{/* <div className="container relative mx-auto px-4 text-center"> */}
					<div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-purple-900/30">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="32"
							height="32"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="text-pink-500"
						>
							<path d="M17 12h-3a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2Z" />
							<path d="M10 6H7a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Z" />
							<path d="M17 6h-3a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Z" />
							<path d="M10 12H7a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2Z" />
						</svg>
					</div>
					<h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
						Sua plataforma de{" "}
						<span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
							servidores de jogos
						</span>
					</h1>
					<p className="mx-auto mb-8 max-w-2xl text-lg text-zinc-400">
						Com nossa plataforma, você cria servidores de jogo online com facilidade e desempenho superior.
					</p>
					<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
						<Button className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-lg py-6 px-8">
							Começar agora
						</Button>
						<Button
							// variant="outline"
							className="w-full sm:w-auto border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white text-lg py-6 px-8"
						>
							Ver planos
						</Button>
					</div>
				</div>
			</section>
			<section className="pt-[25%] md:pt-[15%] lg:pt-[7%] flex flex-col">
				<ProcessorComparison />
			</section>

			{/* <ProtectionDashboard /> */}


			<TestimonialsSection />

			<Divider className="mt-10" />

			<WhyChooseUs />


			<Divider className="mt-10" />


			<section className="pt-[8%] relative overflow-hidden">
				<div className="container relative z-10">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={legoBuild}
						className="rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 p-8 md:p-16 text-center shadow-2xl shadow-pink-500/20"
					>
						<motion.h2 variants={pieceVariants} className="text-3xl md:text-4xl font-bold text-white mb-4 drop-shadow-lg">
							Pronto para começar?
						</motion.h2>
						<motion.p variants={pieceVariants} className="text-lg text-white/90 mb-8 drop-shadow">
							Junte-se a milhares de clientes satisfeitos e experimente o poder da Anfitrião de Neon Host
						</motion.p>
						<motion.div variants={pieceVariants} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
							<Button
								className="bg-white text-gray-950 hover:bg-white/90 font-bold px-10 shadow-lg shadow-gray-500/20"
								onClick={() => window.location.href = "https://app.neonhost.com.br/"}
							>
								Implante seu servidor agora
							</Button>
						</motion.div>
					</motion.div>
				</div>
			</section>

			<Divider className="mt-20" />







			<motion.section
				className="mt-[4%] mb-20"
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true }}
				variants={containerVariants}
			>
				<motion.div className="items-center" variants={itemVariants}>
					<h1 className="text-xl md:text-4xl font-bold text-center pb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
						{displayedText}
						<span className="animate-blink">|</span>
						<div className="relative w-[140px] md:w-[340px] mx-auto mt-2 h-[1px] bg-gradient-to-r from-purple-400 to-pink-500" />
					</h1>
					<p className="text-base opacity-70 mb-4 text-center max-w-[300px] md:max-w-2xl mx-auto">
						Encontre respostas para as dúvidas mais comuns sobre nossos serviços de hospedagem.
					</p>
				</motion.div>
				<motion.div variants={itemVariants}>
					<AccordionItems />
				</motion.div>
			</motion.section>









			<section className="mt-[5%]">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="flex flex-col justify-center items-center"
				>
					<motion.h1
						initial={{ opacity: 0, y: -20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						viewport={{ once: true }}
						className="text-xl md:text-4xl font-bold text-center pb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
					>
						Fale conosco
						<motion.div
							initial={{ width: 0 }}
							whileInView={{ width: "100%" }}
							transition={{ duration: 1, delay: 0.3 }}
							viewport={{ once: true }}
							className="relative w-[140px] md:w-[340px] mx-auto mt-2 h-[1px] bg-gradient-to-r from-purple-400 to-pink-500"
						/>
					</motion.h1>
					<motion.p
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						viewport={{ once: true }}
						className="text-base opacity-70 mb-4 text-center max-w-[300px] md:max-w-2xl mx-auto"
					>
						Estamos aqui para ajudar com qualquer dúvida ou problema que você
						possa ter. Não hesite em nos contatar se precisar de assistência.
					</motion.p>
				</motion.div>
				<motion.div
					variants={containerVariants}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 mt-5 mb-20"
				>
					<motion.div variants={itemVariants}>
						<motion.div
							variants={hoverVariants}
							whileHover="hover"
						>
							<Card className="py-10 px-5 border-none transition-transform bg-cards-dark/60 w-full group bg-gradient-to-b from-[#0B0E13] to-[#131720] border border-gray-800/50 p-6 rounded-2xl shadow-xl hover:shadow-pink-500/10 transition-all duration-300 group">
								<motion.p
									variants={iconVariants}
									whileHover="hover"
								>
									<Info
										size={64}
										className="mx-auto text-pink-500 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300 mb-4"
									/>
								</motion.p>
								<motion.h1
									initial={{ opacity: 0 }}
									whileInView={{ opacity: 1 }}
									transition={{ duration: 0.5, delay: 0.4 }}
									viewport={{ once: true }}
									className="font-bold text-gray-100 text-xl text-center mb-4"
								>
									Consultoria Especializada
								</motion.h1>
								<motion.p
									initial={{ opacity: 0 }}
									whileInView={{ opacity: 1 }}
									transition={{ duration: 0.5, delay: 0.5 }}
									viewport={{ once: true }}
									className="mb-10 text-center text-gray-400"
								>
									Nossa equipe de consultores está pronta para ajudar você a
									escolher a melhor solução para seu projeto. Atendimento
									personalizado de segunda a sexta, das 9h às 21h.
								</motion.p>
								<Link href="https://discord.gg/rGP7prMqF3" target="_blank">
									<motion.div
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
									>
										<Button
											className="absolute bottom-4 w-[calc(100%-64px)] left-1/2 transform -translate-x-1/2"
											size="md"
											variant="ghost"
										>
											Falar com um consultor
										</Button>
									</motion.div>
								</Link>
							</Card>
						</motion.div>
					</motion.div>
					<motion.div variants={itemVariants}>
						<motion.div
							variants={hoverVariants}
							whileHover="hover"
						>
							<Card className="py-10 px-5 border-none transition-transform bg-cards-dark/60 w-full group bg-gradient-to-b from-[#0B0E13] to-[#131720] border border-gray-800/50 p-6 rounded-2xl shadow-xl hover:shadow-pink-500/10 transition-all duration-300 group">
								<motion.p
									variants={iconVariants}
									whileHover="hover"
								>
									<Info
										size={64}
										className="mx-auto text-pink-500 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300 mb-4"
									/>
								</motion.p>
								<motion.h1
									initial={{ opacity: 0 }}
									whileInView={{ opacity: 1 }}
									transition={{ duration: 0.5, delay: 0.4 }}
									viewport={{ once: true }}
									className="font-bold text-gray-100 text-xl text-center mb-4"
								>
									Suporte 24/7
								</motion.h1>
								<motion.p
									initial={{ opacity: 0 }}
									whileInView={{ opacity: 1 }}
									transition={{ duration: 0.5, delay: 0.5 }}
									viewport={{ once: true }}
									className="mb-10 text-center text-gray-400"
								>
									Suporte técnico especializado disponível 24 horas por dia, todos
									os dias do ano. Resolva suas dúvidas e problemas com rapidez
									através do nosso chat online.
								</motion.p>
								<Link href="https://discord.gg/rGP7prMqF3" target="_blank">
									<motion.div
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
									>
										<Button
											className="absolute bottom-4 w-[calc(100%-64px)] left-1/2 transform -translate-x-1/2"
											size="md"
											variant="ghost"
										>
											Iniciar Suporte
										</Button>
									</motion.div>
								</Link>
							</Card>
						</motion.div>
					</motion.div>
					<motion.div variants={itemVariants}>
						<motion.div
							variants={hoverVariants}
							whileHover="hover"
						>
							<Card className="py-10 px-5 border-none transition-transform bg-cards-dark/60 w-full group bg-gradient-to-b from-[#0B0E13] to-[#131720] border border-gray-800/50 p-6 rounded-2xl shadow-xl hover:shadow-pink-500/10 transition-all duration-300 group">
								<motion.p
									variants={iconVariants}
									whileHover="hover"
								>
									<Info
										size={64}
										className="mx-auto text-pink-500 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300 mb-4"
									/>
								</motion.p>
								<motion.h1
									initial={{ opacity: 0 }}
									whileInView={{ opacity: 1 }}
									transition={{ duration: 0.5, delay: 0.4 }}
									viewport={{ once: true }}
									className="font-bold text-gray-100 text-xl text-center mb-4"
								>
									Central de Ajuda
								</motion.h1>
								<motion.p
									initial={{ opacity: 0 }}
									whileInView={{ opacity: 1 }}
									transition={{ duration: 0.5, delay: 0.5 }}
									viewport={{ once: true }}
									className="mb-10 text-center text-gray-400"
								>
									Acesse nossa base de conhecimento ou abra um ticket para suporte
									mais detalhado. Nossa equipe está pronta para te ajudar a resolver
									qualquer desafio técnico.
								</motion.p>
								<Link
									href="https://app.neonhost.com.br/submitticket.php?step=2&deptid=1"
									target="_blank"
								>
									<motion.div
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
									>
										<Button
											className="absolute bottom-4 w-[calc(100%-64px)] left-1/2 transform -translate-x-1/2"
											size="md"
											variant="ghost"
										>
											Acessar central
										</Button>
									</motion.div>
								</Link>
							</Card>
						</motion.div>
					</motion.div>
				</motion.div>
			</section>
		</section>

	);
}
