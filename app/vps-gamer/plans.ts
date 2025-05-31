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
		name: "VPS Gamer - 1",
		price: "72,90",
		link: "https://app.neonhost.com.br/index.php?rp=/store/vps-gamer/amd-ryzen-1",
		description: {
			ram: "2GB",
			ssd: "40GB",
			cores: "2 núcleos",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen 9","Cache-Externo","1Gbps","Painel de Controle","10TB Trafego"],
		},
	},
	{
		name: "VPS Gamer - 2",
		price: "92,90",
		link: "https://app.neonhost.com.br/index.php?rp=/store/vps-gamer/amd-ryzen-2",
		description: {
			ram: "4GB",
			ssd: "50GB",
			cores: "2 núcleos",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen 9","Cache-Externo","1Gbps","Painel de Controle","10TB Trafego"],
		},
	},
	{
		name: "VPS Gamer - 3",
		price: "119,90",
		link: "https://app.neonhost.com.br/index.php?rp=/store/vps-gamer/amd-ryzen-3",
		description: {
			ram: "6GB",
			ssd: "60GB",
			cores: "3 núcleos",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen 9","Cache-Externo","1Gbps","Painel de Controle","10TB Trafego"],
		},
	},
	{
		name: "VPS Gamer - 4",
		price: "169,90",
		link: "https://app.neonhost.com.br/index.php?rp=/store/vps-gamer/amd-ryzen-4",
		description: {
			ram: "8GB",
			ssd: "70GB",
			cores: "4 núcleos",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen 9","Cache-Externo","1Gbps","Painel de Controle","10TB Trafego"],
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
			ssd: "120GB",
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
			ssd: "160GB",
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
			ssd: "200GB",
			cores: "16 núcleos",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen 9","Cache-Externo","1Gbps","Painel de Controle","10TB Trafego"],
		},
	},
] as const;
