import { Button } from "@nextui-org/react";
import {
	CircleCheckBig,
	Cpu,
	HardDrive,
	MemoryStick,
	MonitorCog,
} from "lucide-react";
import Link from "next/link";

export function CardProduts(vpsItem: {
	name: string;
	price: string;
	link: string | null;
	description: {
		ram: string;
		ssd: string;
		cores: string;
		jogadores?: string;
		attrs: string[];
	};
}) {
	return (
		<div className="relative bg-gradient-to-b from-[#0B0E13] to-[#131720] border border-gray-800/50 p-6 rounded-2xl shadow-xl hover:shadow-pink-500/10 transition-all duration-300 group">
			{/* Efeito de brilho no hover */}
			<div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

			<div className="relative">
				{/* Badge do nome */}
				<div className="inline-block px-4 py-1 bg-pink-500/10 rounded-full mb-4">
					<h4 className="text-lg font-semibold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
						{vpsItem.name}
					</h4>
				</div>

				{/* Preço */}
				<div className="space-y-1">
					<h1 className="text-4xl font-bold">
						<span className="text-white">{vpsItem.price}</span>
						<span className="text-gray-400 text-sm font-normal ml-1">/mês</span>
					</h1>
					<p className="text-sm text-gray-400 flex items-center gap-1">
						{vpsItem.description.jogadores ? (
							<>
								Recomendado para
								<span className="rounded bg-gradient-to-r from-pink-400 to-purple-400 px-1 py-0.5 font-semibold text-white">
									{vpsItem.description.jogadores} jogadores
								</span>
							</>
						) : (
							"Hospedado em Brasil 🇧🇷"
						)}
					</p>

				</div>

				{/* Especificações Principais */}
				<div className="mt-6 space-y-4">
					<div className="grid grid-cols-3 gap-3">
						<div className="bg-[#0B0E13]/80 backdrop-blur-sm border border-gray-800/50 p-3 rounded-xl text-center">
							<MemoryStick size={18} className="mx-auto mb-1 text-pink-400" />
							<p className="font-medium text-sm text-white">
								{vpsItem.description.ram}
							</p>
							<p className="text-xs text-gray-500 mt-0.5">RAM</p>
						</div>
						<div className="bg-[#0B0E13]/80 backdrop-blur-sm border border-gray-800/50 p-3 rounded-xl text-center">
							<Cpu size={18} className="mx-auto mb-1 text-pink-400" />
							<p className="font-medium text-sm text-white">
								{vpsItem.description.cores}
							</p>
							<p className="text-xs text-gray-500 mt-0.5">CPU</p>
						</div>
						<div className="bg-[#0B0E13]/80 backdrop-blur-sm border border-gray-800/50 p-3 rounded-xl text-center">
							<HardDrive size={18} className="mx-auto mb-1 text-pink-400" />
							<p className="font-medium text-sm text-white">
								{vpsItem.description.ssd}
							</p>
							<p className="text-xs text-gray-500 mt-0.5">SSD</p>
						</div>
					</div>
				</div>

				{/* Painel de Controle Badge */}
				<div className="mt-6 flex items-center justify-center">
					<div className="px-4 py-2 bg-[#0B0E13]/80 backdrop-blur-sm border border-gray-800/50 rounded-full">
						<p className="text-xs flex items-center gap-2 text-gray-300">
							<MonitorCog size={14} className="text-green-400" />
							Painel de Controle Incluso
						</p>
					</div>
				</div>

				{/* Features */}
				<div className="mt-6 space-y-3">
					{vpsItem.description.attrs.map((item, index) => (
						<div key={index} className="flex items-start gap-2">
							<CircleCheckBig className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
							<p className="text-sm text-gray-300">{item}</p>
						</div>
					))}
				</div>

				{/* Botão */}
				<div className="mt-6">
					{vpsItem.link ? (
						<Link href={vpsItem.link} target="_blank" className="block">
							<Button
								className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold py-6 rounded-xl hover:opacity-90 transition-opacity"
								size="lg"
							>
								Contratar Agora
							</Button>
						</Link>
					) : (
						<Button
							className="w-full bg-gradient-to-r from-gray-700 to-gray-600 text-white font-semibold py-6 rounded-xl opacity-75 cursor-not-allowed"
							size="lg"
							disabled
						>
							Sem Estoque
						</Button>
					)}
				</div>
			</div>
		</div>
	);
}
