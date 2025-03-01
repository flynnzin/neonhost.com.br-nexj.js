"use client";

import { Button } from "@nextui-org/button";
import { Analytics } from "@vercel/analytics/react"
import { Box } from 'lucide-react';
import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuToggle,
} from "@nextui-org/navbar";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import {
	Gamepad2,
	GlobeLock,
	Handshake,
	LayoutGrid,
	ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import { default as Link, default as NextLink } from "next/link";
import { useState } from "react";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

export const NavbarComponent = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activePopover, setActivePopover] = useState<string | null>(null);
	const [popoverTimeout, setPopoverTimeout] = useState<NodeJS.Timeout | null>(
		null,
	);

	const handlePopover = (popoverKey: string) => {
		clearTimeout(popoverTimeout!); // Cancela o fechamento se o mouse voltar
		setActivePopover((prev) => (prev === popoverKey ? null : popoverKey));
	};

	const closePopoverWithDelay = () => {
		const timeout = setTimeout(() => {
			setActivePopover(null);
		}, 400);

		setPopoverTimeout(timeout);
	};

	const games = [
		{
			name: "Palworld",
			img: "/games/palworld.webp",
			link: "/game/palworld",
			discountPrice: "R$ 79,90",
		},
		{
			name: "Minecraft",
			img: "/games/minecraft.webp",
			link: "/game/minecraft",
			discountPrice: "R$ 13,90",
		},
		{
			name: "Rust",
			img: "/games/rust.webp",
			link: "/game/rust",
			discountPrice: "R$ 49,90",
		},
	];

	return (
		<Navbar
			className="bg-background-dark/30 backdrop-blur-md fixed"
			maxWidth={"2xl"}
			position="static"
			onMenuOpenChange={setIsMenuOpen}
		>
			<NavbarContent
				className="hidden sm:flex gap-4 items-center justify-start"
				justify="start"
			>
				<NavbarItem key="01" className="mt-4">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<Image
							src="/logo-branca.webp"
							alt="logo"
							height="150"
							width="150"
							className="h-full min-w-28 lg:min-w-48"
						/>
					</NextLink>
				</NavbarItem>

				<NavbarItem key="01" className="mt-4">
					<NextLink href="/" className="p-0">
						<p className="p-0 m-0 bg-transparent data-[hover=true]:bg-transparent font-semibold text-sm text-gray-300">
							Início
						</p>
					</NextLink>
				</NavbarItem>

				{/* Servidores */}
				<NavbarItem className="mt-4" onMouseLeave={closePopoverWithDelay}>
					<Popover
						placement="bottom"
						offset={20}
						showArrow
						isOpen={activePopover === "servers"}
					>
						<PopoverTrigger>
							<Button
								className="p-0 bg-transparent data-[hover=true]:bg-transparent font-semibold text-sm text-gray-300"
								radius="sm"
								variant="light"
								endContent={
									activePopover === "servers" ? (
										<BiChevronUp />
									) : (
										<BiChevronDown />
									)
								}
								onMouseEnter={() => handlePopover("servers")}
							>
								Servidores
							</Button>
						</PopoverTrigger>
						<PopoverContent
							className="w-[480px] p-0"
							onMouseEnter={() => clearTimeout(popoverTimeout!)}
							onMouseLeave={closePopoverWithDelay}
						>
							<div className="w-full p-5">
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
									<Link href="/vps-gamer">
										<div className="relative bg-gradient-to-b from-purple-500 to-pink-500 h-64 rounded-lg">
											<div className="absolute bottom-0 left-0 right-0 p-4">
												<Image
													src="/android-chrome-512x512.webp"
													alt="logo"
													height="256"
													width="50"
												/>
												<p className="text-lg font-bold">VPS Gamer</p>
												<p>Servidores localizados no Brasil.</p>
											</div>
										</div>
									</Link>
									<div>
										{[
											{
												href: "/semi-dedicado",
												title: "Semi Dedicado",
												description: "Servidores custo-benefício único.",
											},
											{
												href: "/vps-trader",
												title: "VPS Trader",
												description: "Servidor veloz para traders.",
											},
											{
												href: "/fivem",
												title: "VPS Fivem",
												description: "Hospedagem de FiveM.",
											},
											{
												href: "/protecaoddos",
												title: "Proteção DDoS",
												description: "Proteja seu servidor de ataque DDoS.",
											},
										].map((item, index) => (
											<Link href={item.href} key={index}>
												<div className="p-2 hover:bg-[#303030] rounded-lg">
													<p className="text-base font-semibold">
														{item.title}
													</p>
													<p className="text-sm text-gray-500">
														{item.description}
													</p>
												</div>
											</Link>
										))}
									</div>
								</div>
								<div className="mt-5">
									<Link href="/dedicado">
										<div className="bg-[#151515] hover:bg-[#303030] p-5 rounded-lg">
											<h3 className="text-base font-bold">Dedicado</h3>
											<p className="text-sm text-gray-400">
												Configurações superiores, para aplicação grandes.
											</p>
										</div>
									</Link>
								</div>
							</div>
						</PopoverContent>
					</Popover>
				</NavbarItem>

				{/* Jogos */}
				<NavbarItem className="mt-4" onMouseLeave={closePopoverWithDelay}>
					<Popover
						placement="bottom"
						offset={20}
						showArrow
						isOpen={activePopover === "games"}
					>
						<PopoverTrigger>
							<Button
								className="p-0 bg-transparent data-[hover=true]:bg-transparent font-semibold text-sm text-gray-300"
								radius="sm"
								variant="light"
								endContent={
									activePopover === "games" ? (
										<BiChevronUp />
									) : (
										<BiChevronDown />
									)
								}
								onMouseEnter={() => handlePopover("games")}
							>
								Jogos
							</Button>
						</PopoverTrigger>
						<PopoverContent
							className="w-[570px] p-0"
							onMouseEnter={() => clearTimeout(popoverTimeout!)}
							onMouseLeave={closePopoverWithDelay}
						>
							<div className="w-full p-5">
								<div className="grid grid-cols-2 gap-4">
									{games.slice(0, 3).map((item, index) => (
										<Link href={item.link} key={index}>
											<div className="p-2 rounded-lg flex items-center h-18 h-full hover:bg-[#303030]">
												<div className="flex items-center space-x-2">
													<Image
														src={item.img}
														alt={item.name}
														width={48}
														height={48}
														className="w-12 h-12 object-cover rounded-lg hover:animate-pulse"
													/>
													<div className="flex flex-col">
														<h3 className="text-md font-bold">{item.name}</h3>
														<p className="text-xs text-nowrap">
															Apartir de{" "}
															<span className="font-bold">
																{item.discountPrice}
															</span>
														</p>
													</div>
												</div>
											</div>
										</Link>
									))}
									<Link href="/games">
										<div className="p-2 rounded-lg flex items-center h-18 h-full hover:bg-[#303030]">
											<div className="flex items-center space-x-2">
												<LayoutGrid
													width={40}
													height={40}
													// fill="#fff"
													color="#fff"
													className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 object-cover rounded-lg hover:animate-pulse"
												/>
												<div className="flex flex-col">
													<h3 className="text-md font-bold">Todos jogos</h3>
													<p className="text-xs text-nowrap">
														Ver todos nossos jogos
													</p>
												</div>
											</div>
										</div>
									</Link>
								</div>
							</div>
						</PopoverContent>
					</Popover>
				</NavbarItem>

				{/* Hospedagem */}
				<NavbarItem className="mt-4" onMouseLeave={closePopoverWithDelay}>
					<Popover
						placement="bottom"
						offset={20}
						showArrow
						isOpen={activePopover === "hospedagem"}
					>
						<PopoverTrigger>
							<Button
								className="p-0 bg-transparent data-[hover=true]:bg-transparent font-semibold text-sm text-gray-300"
								radius="sm"
								variant="light"
								endContent={
									activePopover === "hospedagem" ? (
										<BiChevronUp />
									) : (
										<BiChevronDown />
									)
								}
								onMouseEnter={() => handlePopover("hospedagem")}
							>
							<Box />	Hospedagem
							</Button>
						</PopoverTrigger>
						<PopoverContent
							className="w-[700px] p-0"
							onMouseEnter={() => clearTimeout(popoverTimeout!)}
							onMouseLeave={closePopoverWithDelay}
						>
							<div className="w-full p-5">
								<div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
									{[
										{
											href: "/hospedagem/NodeJS",
											// href: "/anti-ddos",
											title: "Hospedagem NodeJS",
											description: "Hospede seus aplicativos.",
											icon: (
												<ShieldCheck
													width={40}
													height={40}
													color="#fff"
													className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 object-cover rounded-lg hover:animate-pulse"
												/>
											),
										},
										{
											href: "/Sites",
											title: "Hospedagem de Sites",
											description: "Acesse sua conta e gerencie seus serviços.",
											icon: (
												<GlobeLock
													width={40}
													height={40}
													color="#fff"
													className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 object-cover rounded-lg hover:animate-pulse"
												/>
											),
										},
									].map((item, index) => (
										<Link href={item.href} key={index}>
											<div className="bg-[#151515] hover:bg-[#303030] p-5 rounded-lg flex items-center h-18 h-full">
												<div className="mr-3">{item.icon}</div>
												<div>
													<h3 className="text-sm font-bold">{item.title}</h3>
													<p className="text-sm text-gray-400">
														{item.description}
													</p>
												</div>
											</div>
										</Link>
									))}
								</div>
							</div>
						</PopoverContent>
					</Popover>
				</NavbarItem>

				{/* Empresa */}
				<NavbarItem className="mt-4" onMouseLeave={closePopoverWithDelay}>
					<Popover
						placement="bottom"
						offset={20}
						showArrow
						isOpen={activePopover === "empresa"}
					>
						<PopoverTrigger>
							<Button
								className="p-0 bg-transparent data-[hover=true]:bg-transparent font-semibold text-sm text-gray-300"
								radius="sm"
								variant="light"
								endContent={
									activePopover === "empresa" ? (
										<BiChevronUp />
									) : (
										<BiChevronDown />
									)
								}
								onMouseEnter={() => handlePopover("empresa")}
							>
								Empresa
							</Button>
						</PopoverTrigger>
						<PopoverContent
							className="w-[700px] p-0"
							onMouseEnter={() => clearTimeout(popoverTimeout!)}
							onMouseLeave={closePopoverWithDelay}
						>
							<div className="w-full p-5">
								<div className="grid grid-cols-2 sm:grid-cols-2 gap-4">
									{[
										{
											href: "https://status.neonhost.com.br/",
											// href: "/anti-ddos",
											title: "Status Rede",
											description: "Mantenha informado do nosso status de rede.",
											icon: (
												<ShieldCheck
													width={40}
													height={40}
													color="#fff"
													className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 object-cover rounded-lg hover:animate-pulse"
												/>
											),
										},
										{
											href: "https://app.neonhost.com.br/login",
											title: "Área do Cliente",
											description: "Acesse sua conta e gerencie seus serviços.",
											icon: (
												<GlobeLock
													width={40}
													height={40}
													color="#fff"
													className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 object-cover rounded-lg hover:animate-pulse"
												/>
											),
										},
										{
											href: "https://game.neonhost.com.br",
											title: "Painel Administrativo",
											description:
												"Controle total dos seus servidores e jogos.",
											icon: (
												<Gamepad2
													width={40}
													height={40}
													color="#fff"
													className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 object-cover rounded-lg hover:animate-pulse"
												/>
											),
										},
										{
											href: "https://drive.google.com/file/d/1u89J-ACHVAsE8nTUwe9zWOaw06Eaqo16/view",
											title: "Regras e Diretrizes",
											description:
												"Conheça nossas políticas e evite problemas.",
											icon: (
												<Handshake
													width={40}
													height={40}
													color="#fff"
													className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 object-cover rounded-lg hover:animate-pulse"
												/>
											),
										},
									].map((item, index) => (
										<Link href={item.href} key={index}>
											<div className="bg-[#151515] hover:bg-[#303030] p-5 rounded-lg flex items-center h-18 h-full">
												<div className="mr-3">{item.icon}</div>
												<div>
													<h3 className="text-sm font-bold">{item.title}</h3>
													<p className="text-sm text-gray-400">
														{item.description}
													</p>
												</div>
											</div>
										</Link>
									))}
								</div>
							</div>
						</PopoverContent>
					</Popover>
				</NavbarItem>

			</NavbarContent>
			<NavbarContent>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					className="sm:hidden mt-4"
				/>
			</NavbarContent>
			<NavbarContent className="hidden mt-5 sm:flex" justify="end">
				<NavbarItem>
					<NextLink href="https://app.neonhost.com.br/login">
						<Button
							variant="flat"
							size="md"
							className="text-sm font-bold bg-pink-500 border-0 text-white rounded-full"
						>
							Acessar minha conta
						</Button>
					</NextLink>
				</NavbarItem>
				<NavbarItem className="sm:block hidden">
					<Link href="https://discord.gg/rGP7prMqF3" target="_blank">
						<Button
							isIconOnly
							className="bg-transparent"
							size="sm"
							aria-label="Discord"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								fill="currentColor"
								viewBox="0 0 16 16"
							>
								<path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
							</svg>
						</Button>
					</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarMenu className="pt-3">
				<div className="flex flex-col gap-2">
					<NavbarItem>
						<NextLink href="/" className="w-full">
							<p className="font-semibold text-sm text-gray-300">Início</p>
						</NextLink>
					</NavbarItem>
					<NavbarItem>
						<div className="flex flex-col gap-2 w-full">
							<Button
								className="w-full justify-between bg-transparent data-[hover=true]:bg-transparent font-semibold text-sm text-gray-300"
								radius="sm"
								variant="light"
								endContent={
									activePopover === "servers-mobile" ? (
										<BiChevronUp />
									) : (
										<BiChevronDown />
									)
								}
								onClick={() => handlePopover("servers-mobile")}
							>
								Servidores
							</Button>
							{activePopover === "servers-mobile" && (
								<div className="flex flex-col gap-2 pl-4">
									<Link href="/vps-gamer" className="w-full">
										<div className="p-2 hover:bg-[#303030] rounded-lg">
											<p className="text-base font-semibold">VPS Gamer</p>
											<p className="text-sm text-gray-500">
												Servidores localizados no Brasil
											</p>
										</div>
									</Link>
									<Link href="/semi-dedicado" className="w-full">
										<div className="p-2 hover:bg-[#303030] rounded-lg">
											<p className="text-base font-semibold">Semi Dedicado</p>
											<p className="text-sm text-gray-500">
												Servidores custo-benefício único
											</p>
										</div>
									</Link>
									<Link href="/vps-trader" className="w-full">
										<div className="p-2 hover:bg-[#303030] rounded-lg">
											<p className="text-base font-semibold">VPS Trader</p>
											<p className="text-sm text-gray-500">
												Servidor veloz para traders
											</p>
										</div>
									</Link>
									<Link href="/dedicado" className="w-full">
										<div className="p-2 hover:bg-[#303030] rounded-lg">
											<p className="text-base font-semibold">VPS Dedicado</p>
											<p className="text-sm text-gray-500">
												Configurações superiores, para aplicações grandes
											</p>
										</div>
									</Link>
								</div>
							)}
						</div>
					</NavbarItem>
					<NavbarItem>
						<div className="flex flex-col gap-2 w-full">
							<Button
								className="w-full justify-between bg-transparent data-[hover=true]:bg-transparent font-semibold text-sm text-gray-300"
								radius="sm"
								variant="light"
								endContent={
									activePopover === "games-mobile" ? (
										<BiChevronUp />
									) : (
										<BiChevronDown />
									)
								}
								onClick={() => handlePopover("games-mobile")}
							>
								Jogos
							</Button>
							{activePopover === "games-mobile" && (
								<ul className="flex flex-col gap-2 pl-4">
									{games.map((game, index) => (
										<li key={index}>
											<Link href={game.link} className="w-full">
												<div className="p-2 hover:bg-[#303030] rounded-lg flex items-center">
													<Image
														src={game.img}
														alt={game.name}
														width={48}
														height={48}
														className="w-12 h-12 object-cover rounded-lg"
													/>
													<div className="ml-3">
														<p className="text-base font-semibold">
															{game.name}
														</p>
														<p className="text-sm text-gray-500">
															A partir de {game.discountPrice}
														</p>
													</div>
												</div>
											</Link>
										</li>
									))}
									<li>
										<Link href="/games" className="w-full">
											<div className="p-2 hover:bg-[#303030] rounded-lg flex items-center">
												<LayoutGrid
													width={48}
													height={48}
													color="#fff"
													className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-lg"
												/>
												<div className="ml-3">
													<p className="text-base font-semibold">
														Todos os jogos
													</p>
													<p className="text-sm text-gray-500">
														Ver nossa lista completa
													</p>
												</div>
											</div>
										</Link>
									</li>
								</ul>
							)}
						</div>
					</NavbarItem>
					<NavbarItem>
						<div className="flex flex-col gap-2 w-full">
							<Button
								className="w-full justify-between bg-transparent data-[hover=true]:bg-transparent font-semibold text-sm text-gray-300"
								radius="sm"
								variant="light"
								endContent={
									activePopover === "empresa-mobile" ? (
										<BiChevronUp />
									) : (
										<BiChevronDown />
									)
								}
								onClick={() => handlePopover("empresa-mobile")}
							>
								Empresa
							</Button>
							{activePopover === "empresa-mobile" && (
								<div className="flex flex-col gap-2 pl-4">
									{[
										{
											href: "/anti-ddos",
											title: "Defesa Contra Ataques",
											description: "Mantenha seus servidores sempre seguros.",
											icon: (
												<ShieldCheck
													width={40}
													height={40}
													color="#fff"
													className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 object-cover rounded-lg hover:animate-pulse"
												/>
											),
										},
										{
											href: "https://app.neonhost.com.br/login",
											title: "Área do Cliente",
											description: "Acesse sua conta e gerencie seus serviços.",
											icon: (
												<GlobeLock
													width={40}
													height={40}
													color="#fff"
													className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 object-cover rounded-lg hover:animate-pulse"
												/>
											),
										},
										{
											href: "/painel",
											title: "Painel Administrativo",
											description:
												"Controle total dos seus servidores e jogos.",
											icon: (
												<Gamepad2
													width={40}
													height={40}
													color="#fff"
													className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 object-cover rounded-lg hover:animate-pulse"
												/>
											),
										},
										{
											href: "https://drive.google.com/file/d/1u89J-ACHVAsE8nTUwe9zWOaw06Eaqo16/view",
											title: "Regras e Diretrizes",
											description:
												"Conheça nossas políticas e evite problemas.",
											icon: (
												<Handshake
													width={40}
													height={40}
													color="#fff"
													className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 object-cover rounded-lg hover:animate-pulse"
												/>
											),
										},
									].map((item, index) => (
										<Link href={item.href} key={index}>
											<div className="p-2 hover:bg-[#303030] rounded-lg flex items-center">
												<div className="mr-3">{item.icon}</div>
												<div>
													<h3 className="text-sm font-bold">{item.title}</h3>
													<p className="text-sm text-gray-400 flex-wrap">
														{item.description}
													</p>
												</div>
											</div>
										</Link>
									))}
								</div>
							)}
						</div>
					</NavbarItem>
					<NavbarItem>
						<Link
							href="https://discord.gg/rGP7prMqF3"
							target="_blank"
							className="w-full"
						>
							<Button
								className="w-full justify-between bg-transparent data-[hover=true]:bg-transparent font-semibold text-sm text-gray-300"
								radius="sm"
								variant="light"
							>
								Discord
							</Button>
						</Link>
					</NavbarItem>
					<NavbarItem>
						<NextLink
							href="https://app.neonhost.com.br/login"
							className="w-full"
						>
							<Button
								className="w-full font-bold text-sm bg-pink-500 border-0 text-white rounded-full"
								size="md"
							>
								Acessar minha conta
							</Button>
						</NextLink>
					</NavbarItem>
				</div>
			</NavbarMenu>
		</Navbar>
	);
};
