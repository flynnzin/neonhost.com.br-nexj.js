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
		name: "Plano Pidgeon",
		price: "39,90",
		link: "#breve",
		description: {
			ram: "2GB",
			ssd: "40GB",
			cores: "2 núcleos",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen 9","Cache-Externo","1Gbps / 20TB","Painel de Controle","Incluso NeonShield"],
		},
	},
	{
		name: "Plano Kweebec",
		price: "51,62",
		link: "#breve",
		description: {
			ram: "4GB",
			ssd: "50GB",
			cores: "3 núcleos",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen 9","Cache-Externo","1Gbps / 20TB","Painel de Controle","Incluso NeonShield"],
		},
	},
	{
		name: "Plano Catfish",
		price: "79,90",
		link: "#breve",
		description: {
			ram: "6GB",
			ssd: "60GB",
			cores: "4 núcleos",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen 9","Cache-Externo","1Gbps / 20TB","Painel de Controle","Incluso NeonShield"],
		},
	},
	{
		name: "Plano Bison",
		price: "118,90",
		link: "#breve",
		description: {
			ram: "8GB",
			ssd: "70GB",
			cores: "5 núcleos",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen 9","Cache-Externo","1Gbps / 20TB","Painel de Controle","Incluso NeonShield"],
		},
	},
	// {
	// 	name: "Plano Boar",
	// 	price: "239,90",
	// 	link: "#breve",
	// 	description: {
	// 		ram: "10GB",
	// 		ssd: "80GB",
	// 		cores: "7 núcleos",
	// 		attrs: ["Anti-DDoS Incluso", "AMD Ryzen 9","Cache-Externo","1Gbps / 20TB","Painel de Controle","Incluso NeonShield"],
	// 	},
	// },
	// {
	// 	name: "Plano Flamingo",
	// 	price: "289,90",
	// 	link: "#breve",
	// 	description: {
	// 		ram: "12GB",
	// 		ssd: "90GB",
	// 		cores: "8 núcleos",
	// 		attrs: ["Anti-DDoS Incluso", "AMD Ryzen 9","Cache-Externo","1Gbps / 20TB","Painel de Controle","Incluso NeonShield"],
	// 	},
	// },
	// {
	// 	name: "Plano Meerkat",
	// 	price: "339,90",
	// 	link: "#breve",
	// 	description: {
	// 		ram: "17GB",
	// 		ssd: "90GB",
	// 		cores: "9 núcleos",
	// 		attrs: ["Anti-DDoS Incluso", "AMD Ryzen 9","Cache-Externo","1Gbps / 20TB","Painel de Controle","Incluso NeonShield"],
	// 	},
	// },

] as const;
