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
		price: "12,90",
		link: 'https://app.neonhost.com.br/index.php?rp=/store/discord/plano-discord1',
		description: {
			ram: "2GB",
			ssd: "15GB",
			cores: "2 núcleos",
			attrs: ["NodeJS", "Acesso Web/FTP","Banco de Dados MySQL","Servidor brasileiro"],
		},
	},
	{
		name: "Plano Basic - 2",
		price: "22,75",
		link: 'https://app.neonhost.com.br/index.php?rp=/store/discord/plano-discord2',
		description: {
			ram: "4GB",
			ssd: "20GB",
			cores: "4 núcleos",
			attrs: ["NodeJS", "Acesso Web/FTP","Banco de Dados MySQL","Servidor brasileiro"],
		},
	},
	{
		name: "Plano Advanced - 3",
		price: "33,55",
		link: 'https://app.neonhost.com.br/index.php?rp=/store/discord/plano-discord3',
		description: {
			ram: "8GB",
			ssd: "50GB",
			cores: "8 núcleos",
			attrs: ["NodeJS", "Acesso Web/FTP","Banco de Dados MySQL","Servidor brasileiro"],
		},
	},
	{
		name: "Plano Advanced - 4",
		price: "33,55",
		link: 'https://app.neonhost.com.br/index.php?rp=/store/discord/plano-discord4',
		description: {
			ram: "12GB",
			ssd: "60GB",
			cores: "8 núcleos",
			attrs: ["NodeJS", "Acesso Web/FTP","Banco de Dados MySQL","Servidor brasileiro"],
		},
	},
] as const;
