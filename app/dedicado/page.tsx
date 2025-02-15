"use client";

import { Card, CardBody, Chip, Divider } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import {
	Star,
	ArrowDownToDot,
	ArrowUpFromDot,
	Cpu,
	HardDrive,
	MemoryStick,
	Network,
	Info,
} from "lucide-react";
import Link from "next/link";
import { AccordionItems } from "../_components/accordion";
import ComparisonTable from "../_components/comparison-table";

const plans = [
	{
		nome: "AMD Ryzen 5 5600X",
		frequencia: "3.7GHz até 4.6GHz",
		disponibilidade: true,
		preco: 800.0,
		nucleos: 6,
		threads: 12,
		icons: [
			{
				icone: <Cpu size={30} />,
				titulo: "6 Núcleos",
				descricao: "12 threads",
			},
			{
				icone: <HardDrive size={30} />,
				titulo: "Armazenamento",
				descricao: "1TB DE SSD NVME",
			},
			{
				icone: <Network size={30} />,
				titulo: "Rede",
				descricao: "1GBPS UPLINK",
			},
			{
				icone: <MemoryStick size={30} />,
				titulo: "64GB DE RAM",
				descricao: "DDR4",
			},
			{
				icone: <ArrowUpFromDot size={30} />,
				titulo: "Inputstream",
				descricao: "20Tb Incluso",
			},
			{
				icone: <ArrowDownToDot size={30} />,
				titulo: "Outputstream",
				descricao: "20Tb Incluso",
			},
		],
	},
	{
		nome: "AMD Ryzen 7 7700X",
		frequencia: "4.5GHz até 5.4GHz",
		disponibilidade: true,
		preco: 1550.0,
		nucleos: 8,
		threads: 16,
		icons: [
			{
				icone: <Cpu size={30} />,
				titulo: "8 Núcleos",
				descricao: "16 threads",
			},
			{
				icone: <HardDrive size={30} />,
				titulo: "Armazenamento",
				descricao: "2TB DE SSD NVME",
			},
			{
				icone: <Network size={30} />,
				titulo: "Rede",
				descricao: "1GBPS UPLINK",
			},
			{
				icone: <MemoryStick size={30} />,
				titulo: "128GB DE RAM",
				descricao: "DDR5",
			},
			{
				icone: <ArrowUpFromDot size={30} />,
				titulo: "Inputstream",
				descricao: "20Tb Incluso",
			},
			{
				icone: <ArrowDownToDot size={30} />,
				titulo: "Outputstream",
				descricao: "20Tb Incluso",
			},
		],
	},
	{
		nome: "AMD Ryzen 9 7900X",
		frequencia: "4.7GHz até 5.6GHz",
		disponibilidade: true,
		preco: 1650.0,
		nucleos: 12,
		threads: 24,
		icons: [
			{
				icone: <Cpu size={30} />,
				titulo: "12 Núcleos",
				descricao: "24 threads",
			},
			{
				icone: <HardDrive size={30} />,
				titulo: "Armazenamento",
				descricao: "2TB DE SSD NVME",
			},
			{
				icone: <Network size={30} />,
				titulo: "Rede",
				descricao: "1GBPS UPLINK",
			},
			{
				icone: <MemoryStick size={30} />,
				titulo: "128GB DE RAM",
				descricao: "DDR5",
			},
			{
				icone: <ArrowUpFromDot size={30} />,
				titulo: "Inputstream",
				descricao: "20Tb Incluso",
			},
			{
				icone: <ArrowDownToDot size={30} />,
				titulo: "Outputstream",
				descricao: "20Tb Incluso",
			},
		],
	},
	{
		nome: "AMD Ryzen 9 5900X",
		frequencia: "3.7GHz até 4.8GHz",
		disponibilidade: true,
		preco: 1200.0,
		nucleos: 12,
		threads: 24,
		icons: [
			{
				icone: <Cpu size={30} />,
				titulo: "12 Núcleos",
				descricao: "24 threads",
			},
			{
				icone: <HardDrive size={30} />,
				titulo: "Armazenamento",
				descricao: "2TB DE SSD NVME M.2",
			},
			{
				icone: <Network size={30} />,
				titulo: "Rede",
				descricao: "1GBPS UPLINK",
			},
			{
				icone: <MemoryStick size={30} />,
				titulo: "128GB DE RAM",
				descricao: "DDR4",
			},
			{
				icone: <ArrowUpFromDot size={30} />,
				titulo: "Inputstream",
				descricao: "20Tb Incluso",
			},
			{
				icone: <ArrowDownToDot size={30} />,
				titulo: "Outputstream",
				descricao: "20Tb Incluso",
			},
		],
	},
	{
		nome: "AMD Ryzen 7 5800X",
		frequencia: "3.8GHz até 4.7GHz",
		disponibilidade: true,
		preco: 1100.0,
		nucleos: 8,
		threads: 16,
		icons: [
			{
				icone: <Cpu size={30} />,
				titulo: "8 Núcleos",
				descricao: "16 threads",
			},
			{
				icone: <HardDrive size={30} />,
				titulo: "Armazenamento",
				descricao: "2TB DE SSD NVME",
			},
			{
				icone: <Network size={30} />,
				titulo: "Rede",
				descricao: "1GBPS UPLINK",
			},
			{
				icone: <MemoryStick size={30} />,
				titulo: "128GB DE RAM",
				descricao: "DDR4",
			},
			{
				icone: <ArrowUpFromDot size={30} />,
				titulo: "Inputstream",
				descricao: "20Tb Incluso",
			},
			{
				icone: <ArrowDownToDot size={30} />,
				titulo: "Outputstream",
				descricao: "20Tb Incluso",
			},
		],
	},
];

export default function Dedicados() {
	return (
		<section className="max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-7xl mx-auto">
			<section className="pt-[25%] md:pt-[15%] lg:pt-[7%] mx-auto max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl">
				<div className="grid grid-cols-1 lg:grid-cols-2 mx-auto items-center max-w-7xl">
					<div>
						<h1 className="text-center md:text-start text-4xl lg:text-4xl font-bold text-white mb-6">
							Servidores Dedicados de Alta Performance
						</h1>
						<p className="text-center md:text-start text-gray-400 text-lg mb-8">
							Hardware exclusivo com processadores AMD Ryzen de última geração.
							Recursos 100% dedicados para seu projeto, garantindo máxima
							performance e total controle sobre seu ambiente. Ideal para
							aplicações enterprise, jogos e projetos que demandam alto
							desempenho.
						</p>
						<div className="justify-center md:justify-start flex flex-wrap gap-4">
							<a href="#plans">
								<span className="bg-pink-600/20 text-pink-400 px-4 py-2 rounded-full text-sm font-medium cursor-pointer">
									Preços acessíveis
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
							src="/svgs/Cloud hosting-cuate.svg"
							alt="Servidores Dedicados"
							className="mx-auto w-full h-[720px] hidden sm:flex"
						/>
					</div>
				</div>
			</section>
			<section className="pt-[5%] container mx-auto" id="plans">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold mb-4">
						Poder computacional sem compromisso
					</h2>
					<p className="text-pink-500 mx-auto text-base md:text-lg max-w-2xl">
						Servidores dedicados com hardware exclusivo, ideal para aplicações
						que exigem alta performance, baixa latência e recursos garantidos.
					</p>
				</div>

				<div>
					{plans.map((plano, index) => (
						<Card
							key={index}
							className="max-w-xs md:max-w-2xl lg:max-w-4xl xl:max-w-full mx-auto mt-10 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 relative overflow-hidden group"
						>
							{/* Efeitos de fundo */}
							<div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]"></div>
							<div className="absolute inset-0 flex items-center justify-center opacity-20">
								<div className="w-[800px] h-[800px] bg-gradient-to-r from-purple-500/20 via-transparent to-pink-500/20 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-500"></div>
							</div>

							<CardBody className="relative z-10">
								<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-12 gap-4 p-5">
									<div className="col-span-1 sm:col-span-2 md:col-span-3 flex flex-col items-center justify-center relative">
										{/* Efeito de brilho no logo */}
										<div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-xl animate-pulse"></div>
										<img
											src="amd-logo.webp"
											alt="amd-logo"
											className="relative z-10 hover:scale-105 transition-transform duration-300"
										/>
										<p className="pt-3 text-center font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent text-xl">
											{plano.nome}
										</p>
										<p className="text-center pt-4 text-sm text-gray-400 font-medium">
											{plano.frequencia}
										</p>
										<div className="mt-5 relative">
											<div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
											<Chip
												size="lg"
												className="font-bold relative"
												variant="shadow"
												color={plano.disponibilidade ? "success" : "danger"}
											>
												{plano.disponibilidade ? "Disponível" : "Indisponível"}
											</Chip>
										</div>
									</div>

									<div className="col-span-1 sm:col-span-2 md:col-span-6 flex-col items-center justify-center pt-5">
										<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
											{plano.icons.map((cpu, index) => (
												<div
													key={index}
													className="flex flex-col items-center justify-center p-4 rounded-xl bg-gradient-to-b from-gray-800/50 to-gray-900/50 hover:from-gray-800 hover:to-purple-900/30 transition-all duration-300 backdrop-blur-sm hover:scale-105 relative group/item"
												>
													{/* Efeito de borda brilhante */}
													<div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl opacity-0 group-hover/item:opacity-100 transition-opacity"></div>

													<div className="relative z-10">
														<div className="flex items-center justify-center text-purple-400 group-hover/item:text-pink-400 transition-colors duration-300">
															{cpu.icone}
														</div>
														<div className="text-center mt-3">
															<h1 className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
																{cpu.titulo}
															</h1>
															<p className="text-sm text-gray-400 mt-1 group-hover/item:text-gray-300 transition-colors">
																{cpu.descricao}
															</p>
														</div>
													</div>
												</div>
											))}
										</div>
									</div>

									<div className="col-span-1 sm:col-span-2 md:col-span-3 flex flex-col items-center justify-center relative">
										{/* Efeito de brilho no preço */}
										<div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-pink-500/20 to-transparent rounded-full blur-xl"></div>
										<h4 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent relative group-hover:scale-105 transition-transform duration-300">
											R$ {plano.preco.toFixed(2)}
											<span className="text-sm text-gray-400">/mês</span>
										</h4>
										<a
											href="https://wa.me/5511968927685?text=Gostaria%20de%20saber%20sobre%20dedicados"
											target="_blank"
											rel="noopener noreferrer"
											className="w-full mt-3 relative"
										>
											{/* Efeito de brilho no botão */}
											<div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg blur opacity-25 group-hover:opacity-40 transition-opacity"></div>
											<Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-3 group/btn transition-all duration-300 relative">
												<Star className="group-hover/btn:rotate-180 transition-transform duration-500" />
												<span className="ml-2">Contratar</span>
											</Button>
										</a>
									</div>
								</div>
							</CardBody>
						</Card>
					))}
				</div>
			</section>

			<Divider className="mt-24" />
			<section className="pt-[5%]">
				<div className="container mx-auto">
					<div className="mx-auto max-w-2xl lg:max-w-full rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 p-6 md:p-12 text-center">
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
