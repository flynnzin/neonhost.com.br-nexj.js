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
		price: "80,90",
		link: "https://app.neonhost.com.br/index.php?rp=/store/project-zomboid/zomboid-4gb",
		description: {
			ram: "4GB",
			ssd: "10GB",
			cores: "2 núcleos",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen","FTP WEB/Filezilla","Mods e Plugins"],
		},
	},
	{
		name: "Plano Basic - 2",
		price: "69.90",
		link: "https://app.neonhost.com.br/index.php?rp=/store/project-zomboid/zomboid-6gb",
		description: {
			ram: "6GB",
			ssd: "15GB",
			cores: "2 núcleos",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen","FTP WEB/Filezilla","Mods e Plugins"],
		},
	},
	{
		name: "Plano Advanced - 3",
		price: "89.90",
		link: "https://app.neonhost.com.br/index.php?rp=/store/project-zomboid/zomboid-8gb",
		description: {
			ram: "8GB",
			ssd: "15GB",
			cores: "5 núcleos",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen","FTP WEB/Filezilla","Mods e Plugins"],
		},
	},
] as const;
