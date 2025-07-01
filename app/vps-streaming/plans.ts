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
		name: "VPS Streaming - 1",
		price: "249,90",
		link: "https://app.neonhost.com.br/index.php?rp=/store/vps-streaming/vps-streaming-1",
		description: {
			ram: "10GB",
			ssd: "80GB",
			cores: "3 vCores",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen 9","1Gbps","Painel de Controle","10TB Trafego"],
		},
	},
	{
		name: "VPS Streaming - 2",
		price: "299,90",
		link: "https://app.neonhost.com.br/index.php?rp=/store/vps-streaming/vps-streaming-2",
		description: {
			ram: "12GB",
			ssd: "90GB",
			cores: "6 vCores",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen 9","1Gbps","Painel de Controle","10TB Trafego"],
		},
	},
	{
		name: "VPS Streaming - 3",
		price: "349,90",
		link: "https://app.neonhost.com.br/index.php?rp=/store/vps-streaming/vps-streaming-3",
		description: {
			ram: "16GB",
			ssd: "100GB",
			cores: "7 vCores",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen 9","1Gbps","Painel de Controle","10TB Trafego"],
		},
	},
	{
		name: "VPS Streaming - 4",
		price: "449,90",
		link: "https://app.neonhost.com.br/index.php?rp=/store/vps-streaming/vps-streaming-4",
		description: {
			ram: "20GB",
			ssd: "100GB",
			cores: "9 vCores",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen 9","1Gbps","Painel de Controle","10TB Trafego"],
		},
	},
] as const;
