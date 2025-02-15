"use client";

import { Button, Card, Divider } from "@nextui-org/react";
import { plans } from "./plans";
import { AccordionItems } from "../_components/accordion";
import { Info } from "lucide-react";
import Link from "next/link";
import ComparisonTable from "../_components/comparison-table";
import { CardProduts } from "../_components/card-products";

export default function SemiDedicado() {
	return (
		<section className="max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto">
			<section className="pt-[25%] md:pt-[15%] lg:pt-[7%]">
				<div className="grid grid-cols-1 lg:grid-cols-2 mx-auto items-center max-w-7xl">
					<div>
						<h1 className="text-4xl lg:text-4xl font-bold text-white mb-6">
							Semi-Dedicados de alta performance para seus projetos
						</h1>
						<p className="text-gray-400 text-lg mb-8">
							Nossas máquinas são equipadas com hardware de ponta e estamos
							sempre de olho nas novidades do mercado para oferecer-los a melhor
							experiência possível com toda a segurança e confiabilidade que
							você precisa!
						</p>
						<div className="flex flex-wrap gap-4">
							<a href="#plans">
								<span className="bg-pink-600/20 text-pink-400 px-4 py-2 rounded-full text-sm font-medium cursor-pointer">
									Ativação instantânea
								</span>
							</a>
							<a href="#plans">
								<span className="bg-pink-600/20 text-pink-400 px-4 py-2 rounded-full text-sm font-medium cursor-pointer">
									Proteção DDoS 200 TB/s
								</span>
							</a>
							<a href="#plans">
								<span className="bg-pink-600/20 text-pink-400 px-4 py-2 rounded-full text-sm font-medium cursor-pointer">
									99.9% de uptime
								</span>
							</a>
						</div>
					</div>
					<div className="relative">
						<img
							src="/svgs/Cloud hosting-pana.svg"
							alt="Servidores Semi Dedicados"
							className="mx-auto w-full h-[720px] hidden sm:flex"
						/>
					</div>
				</div>
			</section>
			<section className="pt-[5%] container mx-auto" id="plans">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold text-white mb-4">
						Encontre o plano ideal para o seu negócio
					</h2>
					<p className="text-pink-500 mx-auto text-lg max-w-2xl">
						Nossos planos semi-dedicados são ideais para sites e aplicativos com
						alto tráfego e necessidades de recursos intensivos.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xl:gap-6">
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
			<section className="pt-[5%]">
				<div className="container mx-auto">
					<div className="rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 p-6 md:p-12 text-center">
						<h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
							Precisa de uma configuração diferente ou tem alguma dúvida sobre
							os planos?
						</h2>
						<Button className="bg-white text-gray-950 hover:bg-white/90 font-bold px-10">
							Entrar em contato
						</Button>
					</div>
				</div>
			</section>

			<ComparisonTable />

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
					<Card className="py-10 px-5 border-none transition-transform hover:scale-105 bg-cards-dark/60 w-full group">
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
					<Card className="py-10 px-5 border-none transition-transform hover:scale-105 bg-cards-dark/60 w-full group">
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
								Iniciar chat
							</Button>
						</Link>
					</Card>
					<Card className="py-10 px-5 border-none transition-transform hover:scale-105 bg-cards-dark/60 w-full group">
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
