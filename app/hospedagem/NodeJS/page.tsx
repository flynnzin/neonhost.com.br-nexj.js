"use client";

import { Button, Card, Divider } from "@nextui-org/react";
import { plans } from "./plans";
import { AccordionItems } from "../../_components/accordion";
import { Info } from "lucide-react";
import Link from "next/link";
import ComparisonTable from "../../_components/comparison-table";
import { CardProduts } from "../../_components/card-products";

export default function VpsGamer() {
	return (
		<section className="max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto">
			<section className="pt-[25%] md:pt-[15%] lg:pt-[7%]">
				<div className="grid grid-cols-1 lg:grid-cols-2 mx-auto items-center max-w-7xl gap-8">
					<div>
						<h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
						NodeJS
						</h1>
						<p className="text-gray-400 text-base sm:text-lg mb-6 sm:mb-8">
						Pronto para produção. Deixe seu projeto 24h online com Banco de Dados, acesso sFTP, acesso a um Painel de Controle com tudo que você precisa e muito mais.
						</p>
						<div className="flex flex-wrap gap-3 sm:gap-4">
							<a href="#plans">
								<span className="bg-pink-600/20 text-pink-400 px-4 py-2 rounded-full text-sm font-medium cursor-pointer">
								Latência Global de 30ms
								</span>
							</a>
							<a href="#plans">
								<span className="bg-pink-600/20 text-pink-400 px-4 py-2 rounded-full text-sm font-medium cursor-pointer">
								99.99% de Uptime
								</span>
							</a>
							<a href="#plans">
								<span className="bg-pink-600/20 text-pink-400 px-4 py-2 rounded-full text-sm font-medium cursor-pointer">
								Escalabilidade Automática
								</span>
							</a>
							<a href="#plans">
								<span className="bg-pink-600/20 text-pink-400 px-4 py-2 rounded-full text-sm font-medium cursor-pointer">
								Suporte DevOps 24/7
								</span>
							</a>
						</div>
					</div>
					<div className="relative mt-8 lg:mt-0">
						<img
							src="/svgs/Cloud hosting-pana.svg"
							alt="VPS Neon Servers"
							className="mx-auto w-full max-w-[480px] lg:max-w-none h-auto sm:h-[480px] lg:h-[720px]"
						/>
					</div>
				</div>
			</section>
			<section className="pt-[5%] container mx-auto px-4 lg:px-6" id="plans">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold text-white mb-4">
						Escolha o Plano Perfeito para seu Servidor
					</h2>
					<p className="text-pink-500 mx-auto text-lg max-w-2xl">
						Nossos planos NodeJS são otimizados para oferecer a melhor
						experiência, com recursos dedicados e proteção contra
						ataques.
					</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-6">
					{plans.map((plan) => (
						<CardProduts
							key={plan.name}
							price={plan.price}
							link={plan.link}
							description={plan.description}
							name={plan.name}
						/>
					))}
				</div>
			</section>

			<Divider className="mt-24" />
			<section className="pt-[5%] px-4 lg:px-6">
				<div className="container mx-auto">
					<div className="rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 p-4 sm:p-6 md:p-12 text-center">
						<h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4">
							Precisa de mais recursos para seu servidor de jogos?
						</h2>
						<Button className="bg-white text-pink-500 hover:bg-white/90 font-bold px-6 sm:px-10">
							Falar com Especialista
						</Button>
					</div>
				</div>
			</section>

			<ComparisonTable />

			<Divider className="mt-20" />
			<section className="mt-[4%] mb-20 px-4 lg:px-6">
				<div className="items-center">
					<h1 className="text-xl md:text-4xl font-bold text-center pb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
						Perguntas Frequentes
						<div className="relative w-[140px] md:w-[340px] mx-auto mt-2 h-[1px] bg-gradient-to-r from-purple-400 to-pink-500" />
					</h1>
					<p className="text-base opacity-70 mb-4 text-center max-w-[300px] md:max-w-2xl mx-auto">
						Tire suas dúvidas sobre nossos serviços de NodeJS e comece a
						hospedar agora mesmo.
					</p>
				</div>
				<AccordionItems />
			</section>

			<section className="mt-[5%] px-4 lg:px-6">
				<div className="flex flex-col justify-center items-center">
					<h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center pb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
						Suporte Especializado
						<div className="relative w-[140px] sm:w-[240px] md:w-[340px] mx-auto mt-2 h-[1px] bg-gradient-to-r from-purple-400 to-pink-500" />
					</h1>
					<p className="text-base opacity-70 mb-4 text-center max-w-[300px] md:max-w-2xl mx-auto">
						Nossa equipe está pronta para ajudar você a configurar e otimizar
						seu servidor de jogos. Conte com nosso suporte 24/7.
					</p>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto mt-5 mb-20">
					<Card className="py-8 sm:py-10 px-4 sm:px-5 border-none transition-transform hover:scale-105 bg-cards-dark/60 w-full group">
						<p className="">
							<Info
								size={64}
								className="mx-auto text-pink-500 group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300 mb-4"
							/>
						</p>
						<h1 className="font-bold text-gray-100 text-xl text-center mb-4">
							Configuração Assistida
						</h1>
						<p className="mb-10 text-center text-gray-400">
							Ajudamos você a configurar seu servidor de jogos do zero, com as
							melhores práticas e otimizações para cada tipo de jogo.
						</p>
						<Link href="https://discord.gg/rGP7prMqF3" target="_blank">
							<Button
								className="absolute bottom-4 w-[calc(100%-64px)] left-1/2 transform -translate-x-1/2"
								size="md"
								variant="ghost"
							>
								Solicitar Configuração
							</Button>
						</Link>
					</Card>
					<Card className="py-8 sm:py-10 px-4 sm:px-5 border-none transition-transform hover:scale-105 bg-cards-dark/60 w-full group">
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
							Suporte técnico especializado em jogos disponível 24 horas por
							dia. Resolva problemas rapidamente e mantenha seu servidor sempre
							online.
						</p>
						<Link href="https://discord.gg/rGP7prMqF3" target="_blank">
							<Button
								className="absolute bottom-4 w-[calc(100%-64px)] left-1/2 transform -translate-x-1/2"
								size="md"
								variant="ghost"
							>
								Acessar Suporte
							</Button>
						</Link>
					</Card>
					<Card className="py-8 sm:py-10 px-4 sm:px-5 border-none transition-transform hover:scale-105 bg-cards-dark/60 w-full group">
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
							Acesse nossa base de conhecimento com tutoriais e guias para
							configurar e otimizar seu servidor de jogos da melhor forma.
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
								Ver Tutoriais
							</Button>
						</Link>
					</Card>
				</div>
			</section>
		</section>
	);
}
