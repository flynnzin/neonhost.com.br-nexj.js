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
			ram: "10GB",
			ssd: "20GB",
			cores: "6 núcleos",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen","FTP WEB/Filezilla","Mods e Plugins"],
		},
	},
	{
		name: "Plano Basic - 2",
		price: "69.90",
		link: "https://app.neonhost.com.br/index.php?rp=/store/project-zomboid/zomboid-6gb",
		description: {
			ram: "16GB",
			ssd: "25GB",
			cores: "6 núcleos",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen","FTP WEB/Filezilla","Mods e Plugins"],
		},
	},
	{
		name: "Plano Advanced - 3",
		price: "89.90",
		link: "https://app.neonhost.com.br/index.php?rp=/store/project-zomboid/zomboid-8gb",
		description: {
			ram: "20GB",
			ssd: "30GB",
			cores: "6 núcleos",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen","FTP WEB/Filezilla","Mods e Plugins"],
		},
	},
] as const;
