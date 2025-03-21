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
		name: "Plano Simples - 1",
		price: "13,90",
		link: "https://app.neonhost.com.br/index.php?rp=/store/minecraft/plano-simples",
		description: {
			ram: "1GB",
			ssd: "10GB",
			cores: "2 núcleos",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen","Jogadores ilimitados","FTP WEB/Filezilla"],
		},
	},
	{
		name: "Plano Basic - 2",
		price: "33,90",
		link: "https://app.neonhost.com.br/index.php?rp=/store/minecraft/plano-basic",
		description: {
			ram: "3GB",
			ssd: "10GB",
			cores: "2 núcleos",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen","Jogadores ilimitados","FTP WEB/Filezilla"],
		},
	},
	{
		name: "Plano Advanced - 3",
		price: "49,90",
		link: "https://app.neonhost.com.br/index.php?rp=/store/minecraft/plano-advanced",
		description: {
			ram: "6GB",
			ssd: "15GB",
			cores: "3 núcleos",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen","Jogadores ilimitados","FTP WEB/Filezilla"],
		},
	},
	{
		name: "Plano Pro - 4",
		price: "73,90",
		link: "https://app.neonhost.com.br/index.php?rp=/store/minecraft/plano-pro",
		description: {
			ram: "10GB",
			ssd: "15GB",
			cores: "4 núcleos",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen","Jogadores ilimitados","FTP WEB/Filezilla"],
		},
	},
	{
		name: "Plano Ultra - 5",
		price: "94,90",
		link: "https://app.neonhost.com.br/index.php?rp=/store/minecraft/plano-ultra",
		description: {
			ram: "16GB",
			ssd: "15GB",
			cores: "6 núcleos",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen","Jogadores ilimitados","FTP WEB/Filezilla"],
		},
	},
	{
		name: "Plano Enterprise - 6",
		price: "129,90",
		link: "https://app.neonhost.com.br/index.php?rp=/store/minecraft/plano-enterprise",
		description: {
			ram: "20GB",
			ssd: "20GB",
			cores: "10 núcleos",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen","Jogadores ilimitados","FTP WEB/Filezilla"],
		},
	},
	{
		name: "Plano Dedicated - 7",
		price: "169,00",
		link: "https://app.neonhost.com.br/index.php?rp=/store/minecraft/plano-dedicated-7",
		description: {
			ram: "24GB",
			ssd: "50GB",
			cores: "12 núcleos",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen","Jogadores ilimitados","FTP WEB/Filezilla"],
		},
	},
	{
		name: "Plano Dedicated - 8",
		price: "259,00",
		link: "https://app.neonhost.com.br/index.php?rp=/store/minecraft/plano-dedicated-8",
		description: {
			ram: "32GB",
			ssd: "75GB",
			cores: "12 núcleos",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen","Jogadores ilimitados","FTP WEB/Filezilla"],
		},
	},
] as const;
