import { Check } from "lucide-react";

export default function ComparisonTable() {
	return (
		<div className="hidden md:block pt-[5%] text-gray-900 dark:text-white">
			<div className="max-w-5xl mx-auto">
				<h1 className="text-2xl font-bold text-center mb-6">NeonHost vs Outros</h1>

				<div className="grid grid-cols-1 md:grid-cols-[1fr,1.2fr,1fr] gap-0">
					{/* Headers */}
					<div className="hidden md:block" />
					<div className="bg-pink-700 rounded-t-lg p-4">
						<h2 className="text-2xl font-bold text-center text-white">NeonHost</h2>
					</div>
					<div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-t-lg">
						<h2 className="text-2xl font-bold text-center">Outros</h2>
					</div>

					{specifications.map((spec) => (
						<div key={spec.label} className="contents">
							<div className="flex flex-col justify-end items-end">
								<div className="py-2 pr-3">{spec.label}</div>
								<div className="border-b-1 border-dashed border-gray-200 dark:border-gray-800 w-52" />
							</div>
							<div className="bg-pink-600 text-center py-2 text-white">{spec.gamer}</div>
							<div className="text-center py-2 bg-gray-100 dark:bg-gray-800">{spec.intel}</div>
						</div>
					))}

					{features.map((feature, index) => (
						<div key={feature} className="contents">
							<div className="flex flex-col justify-end items-end">
								<div className="text-right py-2 pr-3">{feature}</div>
								<div className="border-b-1 border-dashed border-gray-200 dark:border-gray-800 w-52" />
							</div>
							<div
								className={`bg-pink-600 flex justify-center items-center py-2 text-white ${index === features.length - 1 ? "rounded-b-lg" : ""}`}
							>
								<Check className="w-4 h-4" />
							</div>
							<div className={`flex justify-center items-center py-2 bg-gray-100 dark:bg-gray-800 ${index === features.length - 1 ? "rounded-b-lg" : ""}`}>
								<Check className="w-4 h-4" />
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

const specifications = [
	{
		label: "RAM",
		gamer: "DDR5/DDR4 5000/3200 Mhz",
		intel: "DDR3 2200 Mhz",
	},
	{
		label: "CPU",
		gamer: "Ryzen 9 50xx / Ryzen 7 7700X",
		intel: "CORE/EPYC",
	},
	{
		label: "SSD",
		gamer: "NVMe (2500+ MB)",
		intel: "SATA SSD/NVMe",
	},
	{
		label: "Backups",
		gamer: "Opcionais para contrato",
		intel: "Opcionais para contrato",
	},
	{
		label: "Suporte Humanizado",
		gamer: "para que sua VPS funcione Corretamente",
		intel: "para que sua VPS funcione Corretamente",
	},
	{
		label: "Localização",
		gamer: "São Paulo",
		intel: "São Paulo",
	},
	{
		label: "Prooxy Reverso",
		gamer: "Temos sistema de cache-externo",
		intel: "Não tem",
	},
];

const features = ["Rede Premium", "Opcionais", "Proteção DDoS"];
