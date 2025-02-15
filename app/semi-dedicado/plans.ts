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
		name: "AMD Ryzen 1",
		price: "305,96",
		link: "https://app.neonhost.com.br/cart.php?a=confproduct&i=5",
		description: {
			ram: "16GB",
			ssd: "100GB",
			cores: "8 núcleos",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen"],
		},
	},
	{
		name: "AMD Ryzen 2",
		price: "450,90",
		link: "https://app.neonhost.com.br/cart.php?a=confproduct&i=6",
		description: {
			ram: "24GB",
			ssd: "250GB",
			cores: "8 núcleos",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen"],
		},
	},
	{
		name: "AMD Ryzen 3",
		price: "593,90",
		link: null,
		description: {
			ram: "32GB",
			ssd: "250GB",
			cores: "9 núcleos",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen"],
		},
	},
	{
		name: "AMD Ryzen 4",
		price: "669,90",
		link: null,
		description: {
			ram: "64GB",
			ssd: "350GB",
			cores: "9 núcleos",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen"],
		},
	},
] as const;
