export interface Plan {
	name: string;
	price: string;
	link: string | null;
	description: {
		ram: string;
		ssd: string;
		cores: string;
		attrs: string[];
	};
}

export const plans: Plan[] = [
	{
		name: "AMD Ryzen 1",
		price: "305,96",
		link: "https://app.neonhost.com.br/index.php?rp=/store/semi-dedicados/semi-dedicado-1",
		description: {
			ram: "16GB",
			ssd: "100GB",
			cores: "8 núcleos",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen 9","Cache-Externo","1Gbps","Painel de Controle","30TB Trafego"],
		},
	},
	{
		name: "AMD Ryzen 2",
		price: "450,90",
		link: "https://app.neonhost.com.br/index.php?rp=/store/semi-dedicados/semi-dedicada-2",
		description: {
			ram: "24GB",
			ssd: "250GB",
			cores: "8 núcleos",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen 9","Cache-Externo","1Gbps","Painel de Controle","30TB Trafego"],
		},
	},
	{
		name: "AMD Ryzen 3",
		price: "593,90",
		link: "https://app.neonhost.com.br/index.php?rp=/store/semi-dedicados/semi-dedicada-3",
		description: {
			ram: "32GB",
			ssd: "250GB",
			cores: "9 núcleos",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen 9","Cache-Externo","1Gbps","Painel de Controle","30TB Trafego"],
		},
	},
	{
		name: "AMD Ryzen 4",
		price: "669,90",
		link: "https://app.neonhost.com.br/index.php?rp=/store/semi-dedicados/semi-dedicada-4",
		description: {
			ram: "64GB",
			ssd: "350GB",
			cores: "9 núcleos",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen 9","Cache-Externo","1Gbps","Painel de Controle","30TB Trafego"],
		},
	},
] as const;
