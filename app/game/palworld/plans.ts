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
		price: "13,90",
		link: null,
		description: {
			ram: "8GB",
			ssd: "15GB",
			cores: "2 núcleos",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen","Xbox Gamepass e Steam","Mods e Plugins"],
		},
	},
	{
		name: "Plano Basic - 2",
		price: "33,90",
		link: null,
		description: {
			ram: "12GB",
			ssd: "20GB",
			cores: "2 núcleos",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen","Xbox Gamepass e Steam","Mods e Plugins"],
		},
	},
	{
		name: "Plano Advanced - 3",
		price: "49,90",
		link: null,
		description: {
			ram: "15GB",
			ssd: "25GB",
			cores: "3 núcleos",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen","Xbox Gamepass e Steam","Mods e Plugins"],
		},
	},
	{
		name: "Plano Pro - 4",
		price: "73,90",
		link: null,
		description: {
			ram: "20GB",
			ssd: "30GB",
			cores: "4 núcleos",
			attrs: ["Anti-DDoS Incluso", "AMD Ryzen","Xbox Gamepass e Steam","Mods e Plugins"],
		},
	},
] as const;
