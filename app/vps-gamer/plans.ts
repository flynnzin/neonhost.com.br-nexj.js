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
		name: "NeonInitial",
		price: "72,90",
		link: "https://app.neonhost.com.br/index.php?rp=/store/vps-gamer/amd-ryzen-1",
		description: {
			ram: "2GB",
			ssd: "40GB",
			cores: "2 núcleos",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen 9","Cache-Externo","1Gbps / 20TB","Painel de Controle",],
		},
	},
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
		price: "129,90",
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
		name: "NeonPower",
		price: "239,90",
		link: "https://app.neonhost.com.br/index.php?rp=/store/vps-gamer/amd-ryzen-5",
		description: {
			ram: "10GB",
			ssd: "80GB",
			cores: "7 núcleos",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen 9","Cache-Externo","1Gbps / 20TB","Painel de Controle",],
		},
	},
	{
		name: "NeonPro",
		price: "289,90",
		link: "https://app.neonhost.com.br/index.php?rp=/store/vps-gamer/vps-gamer-amd-ryzen-6",
		description: {
			ram: "12GB",
			ssd: "90GB",
			cores: "8 núcleos",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen 9","Cache-Externo","1Gbps / 20TB","Painel de Controle",],
		},
	},
	{
		name: "NeonXtreme",
		price: "339,90",
		link: "https://app.neonhost.com.br/index.php?rp=/store/vps-gamer/vps-gamer-amd-ryzen-7",
		description: {
			ram: "17GB",
			ssd: "90GB",
			cores: "9 núcleos",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen 9","Cache-Externo","1Gbps / 20TB","Painel de Controle",],
		},
	},

] as const;
