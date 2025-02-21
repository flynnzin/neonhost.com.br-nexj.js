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
		name: "VPS Neon - 1",
		price: "84,90",
		link: "https://app.neonhost.com.br/index.php?rp=/store/vps-fivem/vps-fivem-1",
		description: {
			ram: "2GB",
			ssd: "45GB",
			cores: "3 vCores",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen","Hospedagem Imagem"],
		},
	},
	{
		name: "VPS Neon - 2",
		price: "126,90",
		link: "https://app.neonhost.com.br/index.php?rp=/store/vps-fivem/vps-fivem-2",
		description: {
			ram: "4GB",
			ssd: "50GB",
			cores: "5 vCores",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen","Hospedagem Imagem"],
		},
	},
	{
		name: "VPS Neon - 3",
		price: "198,90",
		link: "https://app.neonhost.com.br/index.php?rp=/store/vps-fivem/vps-fivem-3",
		description: {
			ram: "6GB",
			ssd: "60GB",
			cores: "6 vCores",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen","Hospedagem Imagem"],
		},
	},
	{
		name: "VPS Neon - 4",
		price: "246,90",
		link: "https://app.neonhost.com.br/index.php?rp=/store/vps-fivem/vps-fivem-4",
		description: {
			ram: "8GB",
			ssd: "70GB",
			cores: "7 vCores",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen","Hospedagem Imagem"],
		},
	},
	{
		name: "VPS Neon - 5",
		price: "289,90",
		link: "https://app.neonhost.com.br/index.php?rp=/store/vps-fivem/vps-fivem-5",
		description: {
			ram: "10GB",
			ssd: "80GB",
			cores: "8 vCores",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen","Hospedagem Imagem"],
		},
	},
	{
		name: "VPS Neon - 6",
		price: "362,90",
		link: "https://app.neonhost.com.br/index.php?rp=/store/vps-fivem/vps-fivem-6",
		description: {
			ram: "12GB",
			ssd: "90GB",
			cores: "9 vCores",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen","Hospedagem Imagem"],
		},
	},
	{
		name: "VPS Neon - 7",
		price: "429,00",
		link: "https://app.neonhost.com.br/index.php?rp=/store/vps-fivem/vps-fivem-7",
		description: {
			ram: "16GB",
			ssd: "100GB",
			cores: "12 vCores",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen","Hospedagem Imagem"],
		},
	},
	{
		name: "VPS Neon - 8",
		price: "557,90",
		link: "https://app.neonhost.com.br/index.php?rp=/store/vps-fivem/vps-fivem-8",
		description: {
			ram: "20GB",
			ssd: "150GB",
			cores: "14 vCores",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen","Hospedagem Imagem"],
		},
	},
] as const;
