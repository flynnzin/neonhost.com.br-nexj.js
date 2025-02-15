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
		link: null,
		description: {
			ram: "8GB",
			ssd: "25GB",
			cores: "2 núcleos",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen","FTP WEB/Filezilla","Mods e Plugins"],
		},
	},
	{
		name: "Plano Basic - 2",
		price: "127,90",
		link: null,
		description: {
			ram: "12GB",
			ssd: "25GB",
			cores: "2 núcleos",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen","FTP WEB/Filezilla","Mods e Plugins"],
		},
	},
	{
		name: "Plano Advanced - 3",
		price: "197,90",
		link: null,
		description: {
			ram: "16GB",
			ssd: "30GB",
			cores: "5 núcleos",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen","FTP WEB/Filezilla","Mods e Plugins"],
		},
	},
	{
		name: "Plano Pro - 4",
		price: "310,90",
		link: null,
		description: {
			ram: "24GB",
			ssd: "35GB",
			cores: "5 núcleos",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen","FTP Web/Filezilla","Mods e Plugins"],
		},
	},
] as const;
