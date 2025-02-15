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
		price: "69,90",
		link: "https://app.neonhost.com.br/index.php?rp=/store/vps-gamer/amd-ryzen-1",
		description: {
			ram: "1GB",
			ssd: "10GB",
			cores: "2 núcleos",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen","Jogadores ilimitados","FTP WEB/Filezilla"],
		},
	},
	{
		name: "Plano Basic - 2",
		price: "89,90",
		link: "https://app.neonhost.com.br/index.php?rp=/store/vps-gamer/amd-ryzen-2",
		description: {
			ram: "3GB",
			ssd: "10GB",
			cores: "2 núcleos",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen","Jogadores ilimitados","FTP WEB/Filezilla"],
		},
	},
	{
		name: "Plano Advanced - 3",
		price: "119,90",
		link: "https://app.neonhost.com.br/index.php?rp=/store/vps-gamer/amd-ryzen-3",
		description: {
			ram: "6GB",
			ssd: "15GB",
			cores: "3 núcleos",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen","Jogadores ilimitados","FTP WEB/Filezilla"],
		},
	},
	{
		name: "Plano Pro - 4",
		price: "169,90",
		link: "https://app.neonhost.com.br/index.php?rp=/store/vps-gamer/amd-ryzen-4",
		description: {
			ram: "10GB",
			ssd: "15GB",
			cores: "4 núcleos",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen","Jogadores ilimitados","FTP WEB/Filezilla"],
		},
	},
	{
		name: "Plano Ultra - 5",
		price: "259,90",
		link: "https://app.neonhost.com.br/index.php?rp=/store/vps-gamer/amd-ryzen-5",
		description: {
			ram: "16GB",
			ssd: "15GB",
			cores: "6 núcleos",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen","Jogadores ilimitados","FTP WEB/Filezilla"],
		},
	},
	{
		name: "Plano Enterprise - 6",
		price: "359,90",
		link: "https://app.neonhost.com.br/index.php?rp=/store/vps-gamer/vps-gamer-amd-ryzen-6",
		description: {
			ram: "24GB",
			ssd: "20GB",
			cores: "10 núcleos",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen","Jogadores ilimitados","FTP WEB/Filezilla"],
		},
	},
	{
		name: "Plano Dedicated - 7",
		price: "450,00",
		link: "https://app.neonhost.com.br/index.php?rp=/store/vps-gamer/vps-gamer-amd-ryzen-7",
		description: {
			ram: "32GB",
			ssd: "50GB",
			cores: "12 núcleos",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen","Jogadores ilimitados","FTP WEB/Filezilla"],
		},
	},
] as const;
