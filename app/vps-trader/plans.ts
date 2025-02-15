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
		price: "74,90",
		link: "https://app.neonhost.com.br/index.php?rp=/store/vps-trader/ryzen-amd-1",
		description: {
			ram: "2GB",
			ssd: "40GB",
			cores: "2 vCores",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen"],
		},
	},
	{
		name: "VPS Neon - 2",
		price: "139,90",
		link: "https://app.neonhost.com.br/index.php?rp=/store/vps-trader/ryzen-amd-2",
		description: {
			ram: "4GB",
			ssd: "50GB",
			cores: "3 vCores",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen"],
		},
	},
	{
		name: "VPS Neon - 3",
		price: "209,90",
		link: "https://app.neonhost.com.br/index.php?rp=/store/vps-trader/ryzen-amd-3",
		description: {
			ram: "6GB",
			ssd: "60GB",
			cores: "4 vCores",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen"],
		},
	},
	{
		name: "VPS Neon - 4",
		price: "249,90",
		link: "https://app.neonhost.com.br/index.php?rp=/store/vps-trader/ryzen-amd-4",
		description: {
			ram: "8GB",
			ssd: "70GB",
			cores: "5 vCores",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen"],
		},
	},
	{
		name: "VPS Neon - 5",
		price: "309,90",
		link: "https://app.neonhost.com.br/index.php?rp=/store/vps-trader/ryzen-amd-5",
		description: {
			ram: "10GB",
			ssd: "80GB",
			cores: "6 vCores",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen"],
		},
	},
	{
		name: "VPS Neon - 6",
		price: "369,90",
		link: "https://app.neonhost.com.br/index.php?rp=/store/vps-trader/ryzen-amd-6",
		description: {
			ram: "12GB",
			ssd: "90GB",
			cores: "7 vCores",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen"],
		},
	},
	{
		name: "VPS Neon - 7",
		price: "419,00",
		link: "https://app.neonhost.com.br/index.php?rp=/store/vps-trader/ryzen-amd-7",
		description: {
			ram: "16GB",
			ssd: "100GB",
			cores: "8 vCores",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen"],
		},
	},
] as const;
