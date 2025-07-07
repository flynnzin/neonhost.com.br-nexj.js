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
		name: "NeonStart",
		price: "96,90",
		link: "https://app.neonhost.com.br/index.php?rp=/store/vps-gamer/amd-ryzen-2",
		description: {
			ram: "4GB",
			ssd: "50GB",
			cores: "3 núcleos",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen 9","Cache-Externo","1Gbps / 20TB","Painel de Controle",],
		},
	},
	{
		name: "NeonBoost",
		price: "149,90",
		link: "https://app.neonhost.com.br/index.php?rp=/store/vps-gamer/amd-ryzen-3",
		description: {
			ram: "6GB",
			ssd: "60GB",
			cores: "4 núcleos",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen 9","Cache-Externo","1Gbps / 20TB","Painel de Controle",],
		},
	},
	{
		name: "NeonCore",
		price: "189,90",
		link: "https://app.neonhost.com.br/index.php?rp=/store/vps-gamer/amd-ryzen-4",
		description: {
			ram: "8GB",
			ssd: "70GB",
			cores: "5 núcleos",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen 9","Cache-Externo","1Gbps / 20TB","Painel de Controle",],
		},
	},
	{
		name: "VPS Gamer - 5",
		price: "259,90",
		link: "https://app.neonhost.com.br/index.php?rp=/store/vps-gamer/amd-ryzen-5",
		description: {
			ram: "12GB",
			ssd: "80GB",
			cores: "6 núcleos",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen 9","Cache-Externo","1Gbps","Painel de Controle","10TB Trafego"],
		},
	},
	{
		name: "VPS Gamer - 6",
		price: "359,90",
		link: "https://app.neonhost.com.br/index.php?rp=/store/vps-gamer/vps-gamer-amd-ryzen-6",
		description: {
			ram: "16GB",
			ssd: "100GB",
			cores: "10 núcleos",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen 9","Cache-Externo","1Gbps","Painel de Controle","10TB Trafego"],
		},
	},
	{
		name: "VPS Gamer - 7",
		price: "450,00",
		link: "https://app.neonhost.com.br/index.php?rp=/store/vps-gamer/vps-gamer-amd-ryzen-7",
		description: {
			ram: "20GB",
			ssd: "120GB",
			cores: "12 núcleos",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen 9","Cache-Externo","1Gbps","Painel de Controle","10TB Trafego"],
		},
	},
	{
		name: "VPS Gamer - 8",
		price: "560,00",
		link: "https://app.neonhost.com.br/index.php?rp=/store/vps-gamer/amd-ryzen-8",
		description: {
			ram: "32GB",
			ssd: "150GB",
			cores: "16 núcleos",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen 9","Cache-Externo","1Gbps","Painel de Controle","10TB Trafego"],
		},
	},
] as const;
