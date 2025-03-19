"use client";

import { Button } from "@nextui-org/button";
import { motion } from "framer-motion";
import { Card, Divider } from "@nextui-org/react";
import { AccordionItems } from "./_components/accordion";
// import HeroBackground from './_components/HeroBackground';


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



const plans = [
	{
		icon: <Gamepad2 className="w-8 h-8 text-pink-500" />,
		title: "VPS Gamer",
		description: "VPS de alta performance no Brasil com Anti-DDoS PRO",
		price: "69.90",
		link: "/vps-gamer",
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
					<div className="max-w-7xl mx-auto">
						<div className="mb-6 flex flex-col">
							<h1 className="text-4xl sm:text-5xl font-bold mb-4 text-transparent bg-clip-text animate-gradient-text">
								Servidores VPS no Brasil
							</h1>
							<h2 className="text-xl font-semibold mb-2">
  Servidores VPS com Alta Performance na Neon Host
</h2>
<p className="text-base leading-8 font-medium">
  Hospede seu projeto na <strong>Neon Host</strong> com nossos <strong>servidores VPS de alta performance</strong>. Soluções sob medida para <strong>sites, aplicativos e infraestruturas robustas</strong>. Aproveite <strong>99,9% de uptime</strong> e a melhor confiabilidade do mercado. 🚀
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

						{/* <style jsx>{`
				@keyframes gradientText {
					0% {
						background-position: 100% 0;
					}
					50% {
						background-position: 0 100%;
					}
					100% {
						background-position: 100% 0;
					}
				}

				.animate-gradient-text {
					background: linear-gradient(45deg, #b3429a, #8619f5, #fe8601);
					background-size: 300% 300%;
					-webkit-background-clip: text;
					color: transparent;
					animation: gradientText 3s ease infinite;
				}
			`}</style> */}

			<section className="pt-[15%]">
				<div className="container">
					<div className="text-center">
						<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
							Por que escolher a Neon Host?
						</h2>
						<p className="text-sm text-accent-primary">
							Experimente a diferença com nossas soluções de hospedagem premium
						</p>
					</div> 
					<div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 ">
						<Card className="p-6 border-none transition-transform hover:scale-105 bg-cards-dark bg-gradient-to-b from-[#0B0E13] to-[#131720] border border-gray-800/50 p-6 rounded-2xl shadow-xl hover:shadow-pink-500/10 transition-all duration-300 group">
							<ZapIcon className="h-12 w-12 text-pink-500" />
							<h3 className="mt-4 text-lg font-semibold">
								Rápido como um raio
							</h3>
							<p className="mt-2 text-muted-foreground">
								Experimente velocidades extremamente rápidas com nossa
								infraestrutura otimizada
							</p>
						</Card>
						<Card className="p-6 transition-transform hover:scale-105 bg-cards-dark bg-gradient-to-b from-[#0B0E13] to-[#131720] border border-gray-800/50 p-6 rounded-2xl shadow-xl hover:shadow-pink-500/10 transition-all duration-300 group">
							<ShieldCheckIcon className="h-12 w-12 text-pink-500" />
							<h3 className="mt-4 text-lg font-semibold">Proteção DDoS</h3>
							<p className="mt-2 text-muted-foreground">
								Fique protegido com nossas soluções de segurança de nível
								empresarial
							</p>
						</Card>
						<Card className="p-6 transition-transform hover:scale-105 bg-cards-dark bg-gradient-to-b from-[#0B0E13] to-[#131720] border border-gray-800/50 p-6 rounded-2xl shadow-xl hover:shadow-pink-500/10 transition-all duration-300 group">
							<HeartPulseIcon className="h-12 w-12 text-pink-500" />
							<h3 className="mt-4 text-lg font-semibold">99.9% Uptime</h3>
							<p className="mt-2 text-muted-foreground">
								Confie em nossa infraestrutura altamente disponível
							</p>
						</Card>
						<Card className="p-6 transition-transform hover:scale-105 bg-cards-dark bg-gradient-to-b from-[#0B0E13] to-[#131720] border border-gray-800/50 p-6 rounded-2xl shadow-xl hover:shadow-pink-500/10 transition-all duration-300 group">
							<ServerIcon className="h-12 w-12 text-pink-500" />
							<h3 className="mt-4 text-lg font-semibold">Hardware Premium</h3>
							<p className="mt-2 text-muted-foreground">
								Processadores de última geração e SSDs NVMe
							</p>
						</Card>
					</div>
				</div>
			</section> 

			<section className="pt-[10%]">
				<div className="container ">
					<div className="text-center ">
						<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
							Tecnologia de ponta
						</h2>
						<p className="text-sm text-accent-primary">
							Alimentado pelo hardware e software mais recentes
						</p>
					</div>
					<div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 bg-gradient-to-b from-[#0B0E13] to-[#131720] border border-gray-800/50 p-6 rounded-2xl shadow-xl hover:shadow-pink-500/10 transition-all duration-300 group">
						<div className="text-center">
							<CpuIcon className="h-12 w-12 mx-auto text-pink-500" />
							<h3 className="mt-4 text-lg font-semibold">
								CPUs de última geração
							</h3>
							<p className="text-sm text-accent-primary">
								AMD Ryzen & Intel Core
							</p>
						</div>
						<div className="text-center">
							<GaugeIcon className="h-12 w-12 mx-auto text-pink-500" />
							<h3 className="mt-4 text-lg font-semibold">Armazenamento NVMe</h3>
							<p className="text-sm text-accent-primary">
								Velocidade de até 7.000 MB/s
							</p>
						</div>
						<div className="text-center">
							<NetworkIcon className="h-12 w-12 mx-auto text-pink-500" />
							<h3 className="mt-4 text-lg font-semibold">Network</h3>
							<p className="text-sm text-accent-primary">
								Portas de 1 Gbps - 10 Gbps
							</p>
						</div>
						<div className="text-center">
							<ShieldIcon className="h-12 w-12 mx-auto text-pink-500" />
							<h3 className="mt-4 text-lg font-semibold">Segurança</h3>
							<p className="text-sm text-accent-primary">
								Proteção empresarial contra DDoS
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="pt-[10%]" id="plans">
				<div className="container">
					<div className="text-center">
						<h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
							Desbloqueie o potencial do seu projeto
						</h2>
						<p className="mt-1 text-lg leading-8 text-gray-400 max-w-2xl mx-auto">
							Nossa infraestrutura avançada e suporte técnico especializado
							oferecem desempenho, segurança e escalabilidade para impulsionar
							seu sucesso.
						</p>
					</div>
				</div>

				{/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mt-16 bg-gradient-to-b from-[#0B0E13] to-[#131720] border border-gray-800/50 p-6 rounded-2xl shadow-xl hover:shadow-pink-500/10 transition-all duration-300 group"> */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mt-16 ">
					{plans.map((plan, index) => (
						<div
							// className="bg-cards-dark/60 rounded-xl p-8 flex flex-col items-center text-center hover:scale-105 transition-transform group "
							className="bg-cards-dark/60 rounded-xl p-8 flex flex-col items-center text-center hover:scale-105 transition-transform group bg-gradient-to-b from-[#0B0E13] to-[#131720] border border-gray-800/50 p-6 rounded-2xl shadow-xl hover:shadow-pink-500/10 transition-all duration-300 group"
							key={index}
						>
							<div className="w-16 h-16 bg-pink-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:-translate-y-1 transition-transform">
								{plan.icon}
							</div>
							<h3 className="text-xl font-bold mb-2">{plan.title}</h3>
							<p className="text-sm text-gray-400 mb-2">{plan.description}</p>

							<div className="mt-auto">
								<p className="text-sm text-gray-400 mt-3 mb-1">
									Planos a partir de
								</p>
								<div className="flex items-baseline justify-center gap-1">
									<span className="text-sm text-pink-500">R$</span>
									<span className="text-4xl font-bold">
										{plan.price.split(".")[0]}
									</span>
									<span className="text-sm">.{plan.price.split(".")[1]}</span>
									<span className="text-sm text-gray-400">/mensal</span>
								</div>
								<Link href={plan.link}>
									<Button
										className="mt-6 w-full bg-gradient-to-r from-purple-500 to-pink-500 font-bold"
										variant="flat"
										size="lg"
									>
										Ver todos os planos
									</Button>
								</Link>
							</div>
						</div>
					))}
				</div>
			</section>

			<Divider className="mt-20" />
			<section className="pt-[5%]">
				<div className="container">
					<div className="rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 p-8 md:p-16 text-center">
						<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
							Pronto para começar?
						</h2>
						<p className="text-lg text-white/90 mb-8">
							Junte-se a milhares de clientes satisfeitos e experimente o poder
							da Anfitrião de Neon Host
						</p>
						<Button
								className="bg-white text-gray-950 hover:bg-white/90 font-bold px-10"
								onClick={() => window.location.href = "https://app.neonhost.com.br/"}
							>
								Implante seu servidor agora
							</Button>
					</div>
				</div>
			</section>

			<Divider className="mt-20" />
			<section className="mt-[4%] mb-20">
				<div className="items-center">
					<h1 className="text-xl md:text-4xl font-bold text-center pb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
						Perguntas Frequentes
						<div className="relative w-[140px] md:w-[340px] mx-auto mt-2 h-[1px] bg-gradient-to-r from-purple-400 to-pink-500" />
					</h1>
					<p className="text-base opacity-70 mb-4 text-center max-w-[300px] md:max-w-2xl mx-auto">
						Encontre respostas para as dúvidas mais comuns sobre nossos serviços
						de hospedagem.
					</p>
				</div>
				<AccordionItems />
			</section>

			<section className="mt-[5%]">
				<div className="flex flex-col justify-center items-center">
					<h1 className="text-xl md:text-4xl font-bold text-center pb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
						Fale conosco
						<div className="relative w-[140px] md:w-[340px] mx-auto mt-2 h-[1px] bg-gradient-to-r from-purple-400 to-pink-500" />
					</h1>
					<p className="text-base opacity-70 mb-4 text-center max-w-[300px] md:max-w-2xl mx-auto">
						Estamos aqui para ajudar com qualquer dúvida ou problema que você
						possa ter. Não hesite em nos contatar se precisar de assistência.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 mt-5 mb-20">
					<Card className="py-10 px-5 border-none transition-transform hover:scale-105 bg-cards-dark/60 w-full group bg-gradient-to-b from-[#0B0E13] to-[#131720] border border-gray-800/50 p-6 rounded-2xl shadow-xl hover:shadow-pink-500/10 transition-all duration-300 group">
						<p className="">
							<Info
								size={64}
								className="mx-auto text-pink-500 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300 mb-4"
							/>
						</p>
						<h1 className="font-bold text-gray-100 text-xl text-center mb-4">
							Consultoria Especializada
						</h1>
						<p className="mb-10 text-center text-gray-400">
							Nossa equipe de consultores está pronta para ajudar você a
							escolher a melhor solução para seu projeto. Atendimento
							personalizado de segunda a sexta, das 9h às 21h.
						</p>
						<Link href="https://discord.gg/rGP7prMqF3" target="_blank">
							<Button
								className="absolute bottom-4 w-[calc(100%-64px)] left-1/2 transform -translate-x-1/2"
								size="md"
								variant="ghost"
							>
								Falar com um consultor
							</Button>
						</Link>
					</Card>
					<Card className="py-10 px-5 border-none transition-transform hover:scale-105 bg-cards-dark/60 w-full group bg-gradient-to-b from-[#0B0E13] to-[#131720] border border-gray-800/50 p-6 rounded-2xl shadow-xl hover:shadow-pink-500/10 transition-all duration-300 group">
						<p className="">
							<Info
								size={64}
								className="mx-auto text-pink-500 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300 mb-4"
							/>
						</p>
						<h1 className="font-bold text-gray-100 text-xl text-center mb-4">
							Suporte 24/7
						</h1>
						<p className="mb-10 text-center text-gray-400">
							Suporte técnico especializado disponível 24 horas por dia, todos
							os dias do ano. Resolva suas dúvidas e problemas com rapidez
							através do nosso chat online.
						</p>
						<Link href="https://discord.gg/rGP7prMqF3" target="_blank">
							<Button
								className="absolute bottom-4 w-[calc(100%-64px)] left-1/2 transform -translate-x-1/2"
								size="md"
								variant="ghost"
							>
								Iniciar Suporte
							</Button>
						</Link>
					</Card>
					<Card className="py-10 px-5 border-none transition-transform hover:scale-105 bg-cards-dark/60 w-full group bg-gradient-to-b from-[#0B0E13] to-[#131720] border border-gray-800/50 p-6 rounded-2xl shadow-xl hover:shadow-pink-500/10 transition-all duration-300 group">
						<p className="">
							<Info
								size={64}
								className="mx-auto text-pink-500 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300 mb-4"
							/>
						</p>
						<h1 className="font-bold text-gray-100 text-xl text-center mb-4">
							Central de Ajuda
						</h1>
						<p className="mb-10 text-center text-gray-400">
							Acesse nossa base de conhecimento ou abra um ticket para suporte
							mais detalhado. Nossa equipe está pronta para te ajudar a resolver
							qualquer desafio técnico.
						</p>
						

						

						<Link
							href="https://app.neonhost.com.br/submitticket.php?step=2&deptid=1"
							target="_blank"
						>
							<Button
								className="absolute bottom-4 w-[calc(100%-64px)] left-1/2 transform -translate-x-1/2"
								size="md"
								variant="ghost"
							>
								Acessar central
							</Button>
						</Link>
					</Card>
				</div>
			</section>
		</section>
		
	);
}
