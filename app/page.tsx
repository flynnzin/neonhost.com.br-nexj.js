"use client";

import { Button } from "@nextui-org/button";
import { motion } from "framer-motion";
import { Card, Divider } from "@nextui-org/react";
import { AccordionItems } from "./_components/accordion";
import GameServersSection from "@/components/game-servers-section"
import TestimonialsSection from "@/components/testimonials-section"
import ProtectionDashboard from "@/components/protection-dashboard"
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
import Map from "./_components/map";

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

			<section className="pt-[25%] md:pt-[15%] lg:pt-[7%] flex flex-col">
			
				<motion.div
					initial={{ opacity: 0, y: 100 }} // Começa invisível e deslocado para baixo
					whileInView={{ opacity: 1, y: 0 }} // Aparece suavemente
					transition={{ duration: 1.2, ease: "easeOut" }} // Tempo da animação
					viewport={{ once: true }} // Apenas uma vez quando aparecer na tela
					className="grid grid-cols-1 lg:grid-cols-2 mx-auto items-center"
				>
					<div className="max-w-7xl mx-auto" >
						<div className="mb-6 flex flex-col">
							<h1 className="text-4xl sm:text-5xl font-bold mb-4 text-transparent bg-clip-text animate-gradient-text">
								Servidores VPS no Brasil
							</h1>
							<h2 className="text-xl font-semibold mb-2">
								Servidores VPS com Alta Performance na Neon Host
							</h2>
							<p className="text-sm leading-7 font-medium">
								Tenha desempenho e estabilidade com os <span className="font-semibold">VPS da Neon Host</span>. Soluções sob medida e <span className="font-semibold">99,9% de uptime garantido</span>.
							</p>
						</div>
						<div className="flex items-center gap-4">
							<a href="#plans" >
								<Button
									variant="solid"
									size="lg"
									className="text-sm font-normal bg-accent-primary/70 hover:bg-accent-primary border-0 text-white rounded-md px-8"
								>
									Saber Mais
								</Button>
							</a>
						</div>
					</div>
					<CookieConsent />
					<motion.img
						initial={{ opacity: 0, scale: 0.8 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 1.2, delay: 0.4 }}
						viewport={{ once: true }}
						src="/svgs/Server-rafiki.svg"
						alt="Server-rafiki"
						className="animate-bounce-y mx-auto w-full h-[620px] hidden sm:flex"
						id="features"
					/>
				</motion.div>
			</section>

			<style jsx>{`
  @keyframes animate-gradient {
    to {
      background-position: 200%;
    }
  }

  .animate-gradient-text {
    background: linear-gradient(
      to right,
      #b3429a,
      #8619f5,
      #b3429a
    );
    background-size: 200%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: animate-gradient 3.5s linear infinite;
  }
			`}</style>

		<Divider className="mt-5" />
			<GameServersSection />
		<Divider className="mt-5" />

		<ProtectionDashboard />
		
		<Divider className="mt-5" />
		<section className="pt-[5%]" id="plans">
				<div className="container">
					<motion.div
						className="text-center"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={slideIn}
					>
						<h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
							Desbloqueie o potencial do seu projeto
						</h2>
						<p className="mt-1 text-lg leading-8 text-gray-400 max-w-2xl mx-auto">
							Nossa infraestrutura avançada e suporte técnico especializado
							oferecem desempenho, segurança e escalabilidade para impulsionar
							seu sucesso.
						</p>
					</motion.div>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mt-16">
					{plans.map((plan, index) => (
						<motion.div
							key={index}
							className="relative overflow-hidden bg-cards-dark/60 rounded-xl p-8 flex flex-col items-center text-center hover:scale-105 transition-transform group bg-gradient-to-b from-[#0B0E13] to-[#131720] border border-gray-800/50 shadow-xl hover:shadow-pink-500/10 transition-all duration-300"
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, amount: 0.2 }}
							variants={{ hidden: { opacity: 0, x: -50 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: index * 0.2 } } }}
						>
							<motion.div
								className="w-16 h-16 bg-pink-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform"
								whileHover={{ scale: 1.1 }}
							>
								{plan.icon}
							</motion.div>
							<h3 className="text-xl font-bold mb-2">{plan.title}</h3>
							<p className="text-sm text-gray-400 mb-2">{plan.description}</p>

							<div className="mt-auto">
								<p className="text-sm text-gray-400 mt-3 mb-1">Planos a partir de</p>
								<div className="flex items-baseline justify-center gap-1">
									<span className="text-sm text-pink-500">R$</span>
									<span className="text-4xl font-bold">{plan.price.split(".")[0]}</span>
									<span className="text-sm">.{plan.price.split(".")[1]}</span>
									<span className="text-sm text-gray-400">/mensal</span>
								</div>
								<Link href={plan.link}>
									<motion.div whileHover={{ scale: 1.05 }}>
										<Button
											className="mt-6 w-full bg-gradient-to-r from-purple-500 to-pink-500 font-bold"
											variant="flat"
											size="lg"
										>
											Ver todos os planos
										</Button>
									</motion.div>
								</Link>
							</div>
						</motion.div>
					))}
				</div>
			</section>

			<Divider className="mt-10" />

			
			<motion.section
				className="pt-[15%]"
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, ease: "easeOut" }}
				viewport={{ once: true, amount: 0.2 }}
			>
				<div className="container">
					<div className="text-center">
						<motion.h2
							className="text-3xl font-bold tracking-tight sm:text-4xl"
							variants={textTypingVariant}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
						>
							{"Por que escolher a Neon Host?".split("").map((char, i) => (
								<motion.span key={i} variants={letterVariant}>{char}</motion.span>
							))}
						</motion.h2>
						<motion.p
							className="text-sm text-accent-primary"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ duration: 1.5, ease: "easeOut" }}
							viewport={{ once: true }}
						>
							Experimente a diferença com nossas soluções de hospedagem premium
						</motion.p>
					</div>

					<div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
						{[{
							icon: <ZapIcon className="h-12 w-12 text-pink-500" />,
							title: "Rápido como um raio",
							description: "Experimente velocidades extremamente rápidas com nossa infraestrutura otimizada"
						}, {
							icon: <ShieldCheckIcon className="h-12 w-12 text-pink-500" />,
							title: "Proteção DDoS",
							description: "Fique protegido com nossas soluções de segurança de nível empresarial"
						}, {
							icon: <HeartPulseIcon className="h-12 w-12 text-pink-500" />,
							title: "99.9% Uptime",
							description: "Confie em nossa infraestrutura altamente disponível"
						},
						{
							icon: <CpuIcon className="h-12 w-12 text-pink-500" />,
							title: "CPUs de última gerações",
							description: "Processadores como AMD Ryzen 9 5900x / AMD Ryzen 7 7700x"
						},
						{
							icon: <ServerIcon className="h-12 w-12 text-pink-500" />,
							title: "Hardware Premium",
							description: "Processadores de última geração e SSDs NVMe"
						},
						{
							icon: <GaugeIcon className="h-12 w-12 text-pink-500" />,
							title: "Armazenamento NVMe",
							description: "Velocidade de até 7.000 MB/s"
						},
						{
							icon: <NetworkIcon className="h-12 w-12 text-pink-500" />,
							title: "Network",
							description: "Portas de 1 Gbps - 10 Gbps"
						}, {
							icon: <ShieldIcon className="h-12 w-12 text-pink-500" />,
							title: "Segurança",
							description: "Proteção empresarial contra DDoS"
						}].map((item, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 1, ease: "easeOut", delay: index * 0.2 }}
								viewport={{ once: true }}
							>
								<Card className="p-6 transition-transform hover:scale-105 bg-cards-dark bg-gradient-to-b from-[#0B0E13] to-[#131720] border border-gray-800/50 p-6 rounded-2xl shadow-xl hover:shadow-pink-500/10 transition-all duration-300 group">
									{item.icon}
									<h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
									<p className="mt-2 text-muted-foreground">{item.description}</p>
								</Card>
							</motion.div>
						))}
					</div>
				</div>
			</motion.section>

			<Divider className="mt-12" />
			<TestimonialsSection />

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
