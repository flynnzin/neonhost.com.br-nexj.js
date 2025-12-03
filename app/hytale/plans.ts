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
		name: "PLANO KWEEBEC",
		price: "37,90",
		link: "https://app.neonhost.com.br/index.php?rp=/store/vps-gamer/amd-ryzen-1",
		description: {
			ram: "4GB",
			ssd: "15GB",
			cores: "2 núcleos",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen 9","Cache-Externo","1Gbps / 20TB","Painel de Controle","Incluso NeonShield"],
		},
	},
	{
		name: "PLANO SCARAK",
		price: "48,90",
		link: "https://app.neonhost.com.br/index.php?rp=/store/vps-gamer/amd-ryzen-2",
		description: {
			ram: "6GB",
			ssd: "20GB",
			cores: "3 núcleos",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen 9","Cache-Externo","1Gbps / 20TB","Painel de Controle","Incluso NeonShield"],
		},
	},
	{
		name: "PLANO OUTLANDER",
		price: "77,90",
		link: "https://app.neonhost.com.br/index.php?rp=/store/vps-gamer/amd-ryzen-3",
		description: {
			ram: "10GB",
			ssd: "25GB",
			cores: "4 núcleos",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen 9","Cache-Externo","1Gbps / 20TB","Painel de Controle","Incluso NeonShield"],
		},
	},
	{
		name: "PLANO GAIA",
		price: "118,90",
		link: "https://app.neonhost.com.br/index.php?rp=/store/vps-gamer/amd-ryzen-4",
		description: {
			ram: "16GB",
			ssd: "30GB",
			cores: "5 núcleos",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen 9","Cache-Externo","1Gbps / 20TB","Painel de Controle","Incluso NeonShield"],
		},
	},
	

] as const;
