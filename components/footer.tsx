"use client";

import { Button } from "@nextui-org/button";
import Link from "next/link";

export const Footer = () => {
	const sections = [
		{
			title: "Servidores",
			links: [
				{ name: "VPS Neon", url: "/vps-gamer" },
				{ name: "VPS Trader", url: "/vps-trader" },
				{ name: "VPS FiveM", url: "/fivem" },
				{ name: "Semi-Dedicado", url: "/semi-dedicado" },
				{ name: "Dedicado", url: "/dedicado" },
			],
		},
		{
			title: "Jogos",
			links: [
				{ name: "Palworld", url: "/game/palworld" },
				{ name: "Minecraft", url: "/game/minecraft" },
				{ name: "Rust", url: "/game/rust" },
			],
		},
		{
			title: "Suporte",
			links: [
				{
					name: "Central de Ajuda",
					url: "https://app.neonhost.com.br/submitticket.php?step=2&deptid=1",
				},
				{ name: "Discord", url: "https://discord.gg/rGP7prMqF3" },
				{ name: "FAQ", url: "https://help.neonhost.com.br/" },
			],
		},
		{
			title: "Empresa",
			links: [
				{ name: "Área do Cliente", url: "https://app.neonhost.com.br/login" },
				{ name: "Status Rede", url: "https://status.neonhost.com.br/" },
				{ name: "Sobre Nós", url: "/sobre" },
				{ name: "Termos de Serviço", url: "https://cdn.neonhost.com.br/neonhostinger/Termos-NeonHost.pdf" },
			],
		},
		
	];
	return (
		<>
		{/* <OpenWidget /> */}
			<footer className="bg-background-dark border-t border-t-gray-800">
				<div className="mx-auto max-w-7xl px-6 py-12">
					<div className="grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-12">
						<div className="col-span-2 md:col-span-4">
							<div className="flex items-center space-x-2 mb-6">
								<img
									src="/logo-branca.webp"
									alt="NeonHost"
									className="h-full w-52"
								/>
							</div>
							<p className="text-sm text-gray-400 mb-6">
								Hospedagem de alta performance com suporte 24/7. Servidores
								otimizados para jogos, aplicações web e VPS no Brasil.
							</p>
							<div className="flex space-x-4">
								<Link href="https://discord.gg/rGP7prMqF3" target="_blank">
									<Button
										isIconOnly
										className="bg-pink-500/20 hover:bg-pink-700"
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
								<Link href="https://instagram.com" target="_blank">
									<Button
										isIconOnly
										className="bg-pink-500/20 hover:bg-pink-700"
										size="sm"
										aria-label="Instagram"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="20"
											height="20"
											fill="currentColor"
											viewBox="0 0 16 16"
										>
											<path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
										</svg>
									</Button>
								</Link>
							</div>
						</div>

						{sections.map((section, index) => (
							<div key={`${index + 1}`} className="col-span-1 md:col-span-2">
								<h1 className="font-bold text-gray-100 mb-4">
									{section.title}
								</h1>
								<ul className="space-y-3">
									{section.links.map((link, i) => (
										<li key={link.name}>
											<Link
												href={link.url}
												className="text-sm text-gray-400 hover:text-pink-500 transition-colors"
												target={
													link.url.startsWith("http") ? "_blank" : undefined
												}
											>
												{link.name}
											</Link>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>

					<div className="mt-12 pt-8 border-t -mb-4 border-gray-800">
						<div className="flex flex-col md:flex-row justify-between items-center">
							<p className="text-sm text-gray-400">
								{new Date().getFullYear()} NeonHost. Todos os direitos
								reservados.
							</p>
							<p className="text-sm text-gray-400 mt-4 md:mt-0">
							Desenvolvido por {" "}
								<a
									href="https://www.loctor.dev"
									target="_blank"
									rel="noopener noreferrer"
									className="text-pink-500 hover:text-pink-400 transition-colors"
								>
									<span className="font-bold">Loctor</span>
								</a>
							</p>
							<p className="text-sm text-gray-400 mt-4 md:mt-0">
								CNPJ: {" "}
								<a
									href="https://www.neonhost.com.br"
									target="_blank"
									rel="noopener noreferrer"
									className="text-pink-500 hover:text-pink-400 transition-colors"
								>
									<span className="font-bold">59.630.804/0001-17</span>
								</a>
							</p>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};
