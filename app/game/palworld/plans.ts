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
		link: "https://app.neonhost.com.br/index.php?rp=/store/palworld/palworld-6gb",
		description: {
			ram: "6GB",
			ssd: "15GB",
			cores: "6 núcleos",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen","FTP WEB/Filezilla","Mods e Plugins"],
		},
	},
	{
		name: "Plano Basic - 2",
		price: "109,90",
		link: "https://app.neonhost.com.br/index.php?rp=/store/palworld/palworld-10gb",
		description: {
			ram: "10GB",
			ssd: "18GB",
			cores: "6 núcleos",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen","FTP WEB/Filezilla","Mods e Plugins"],
		},
	},
	{
		name: "Plano Advanced - 3",
		price: "149.90",
		link: "https://app.neonhost.com.br/index.php?rp=/store/palworld/palworld-14gb",
		description: {
			ram: "14GB",
			ssd: "18GB",
			cores: "6 núcleos",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen","FTP WEB/Filezilla","Mods e Plugins"],
		},
	},
] as const;
