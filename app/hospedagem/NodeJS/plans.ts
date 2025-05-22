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
		name: "Node.JS - Iniciante",
		price: "2,00",
		link: 'https://app.neonhost.com.br/index.php?rp=/store/nodejs/service-nodejs-iniciante',
		description: {
			ram: "1GB",
			ssd: "10GB",
			cores: "2 núcleos",
			attrs: ["NodeJS", "Acesso Web/FTP","Banco de Dados MySQL","Servidor brasileiro"],
		},
	},
	{
		name: "Node.JS - Shine",
		price: "5,99",
		link: 'https://app.neonhost.com.br/index.php?rp=/store/discord/plano-discord1',
		description: {
			ram: "2GB",
			ssd: "15GB",
			cores: "2 núcleos",
			attrs: ["NodeJS", "Acesso Web/FTP","Banco de Dados MySQL","Servidor brasileiro"],
		},
	},
	{
		name: "Node.JS - Vortex",
		price: "10,99",
		link: 'https://app.neonhost.com.br/index.php?rp=/store/discord/plano-discord2',
		description: {
			ram: "4GB",
			ssd: "20GB",
			cores: "4 núcleos",
			attrs: ["NodeJS", "Acesso Web/FTP","Banco de Dados MySQL","Servidor brasileiro"],
		},
	},
	{
		name: "Node.JS - Echo",
		price: "24,95",
		link: 'https://app.neonhost.com.br/index.php?rp=/store/discord/plano-discord3',
		description: {
			ram: "8GB",
			ssd: "50GB",
			cores: "8 núcleos",
			attrs: ["NodeJS", "Acesso Web/FTP","Banco de Dados MySQL","Servidor brasileiro"],
		},
	},
	{
		name: "Node.JS - Drift",
		price: "32,99",
		link: 'https://app.neonhost.com.br/index.php?rp=/store/discord/plano-discord4',
		description: {
			ram: "12GB",
			ssd: "60GB",
			cores: "8 núcleos",
			attrs: ["NodeJS", "Acesso Web/FTP","Banco de Dados MySQL","Servidor brasileiro"],
		},
	},
] as const;
