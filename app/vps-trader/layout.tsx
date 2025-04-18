import { Footer } from "@/components/footer";
import { NavbarComponent } from "@/components/navbar";
import { siteConfig } from "@/config/site";
import "@/styles/globals.css";
import clsx from "clsx";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
	title: {
		default: "VPS Neon | Servidores para Jogos | NeonHost",
		template: "%s | NeonHost",
	},
	description:
		"VPS Neon com processadores de alta frequência, baixa latência e proteção anti-DDoS. Ideal para servidores de Minecraft, CS:GO, ARK e mais. Ativação instantânea e painel de controle intuitivo.",
	keywords: [
		"NeonHost",
		"BrasilFivemHost",
		"fivemhost",
		"Fivem Host",
		"bbhost",
		"BBHost",
		"BBHOST",
		"WyzeHost",
		"TynaHost",
		"Hostinger",
		"DokeHost",
		"HeavyHost",
		"OminiHost",
		"BH Servers",
		"Ultahost",
		"KnownHost",
		"Linode",
		"DigitalOcean",
		"Azure",
		"Namecheap",
		"NetEarthOne",
		"FlameHost",
		"RazeHost",
		"Loding Hosting",
		"Nice Hosting",
		"VPS Neon",
		"VPS Brasil",
		"Proteção Anti DDoS",
		"servidor de Minecraft",
		"servidor de FiveM",
		"servidor de Rust",
		"hospedagem de jogos no Brasil",
		"servidor dedicado para jogos",
		"servidor de ARK",
		"servidor de Satisfactory",
		"VPS para jogos",
		"servidores dedicados Brasil",
		"gaming VPS",
		"FiveM VPS",
		"Minecraft VPS",
		"VPS com NVMe",
		"servidor de Counter Strike",
		"servidor de CS:GO",
		"servidor de GTA RP",
		"servidor de Unturned",
		"VPS Linux",
		"VPS Windows",
		"servidor com proteção DDoS",
		"cloud gaming",
		"hospedagem de jogos multiplayer",
		"servidor dedicado gamer",
		"servidor de Minecraft Brasil",
		"VPS com alta performance",
		"VPS barato",
		"VPS para trading",
		"servidor dedicado NVMe",
		"cloud hosting",
		"FlameHost",
		"RazeHost",
		"Loding Hosting",
		"Nice Hosting",
		"wyze",
		"wyze host",
		"host",
		"ddos",
		"webhost",
		"hospedagem",
		"site",
		"vps",
		"vps gamer",
		"gaming vps",
		"vps",
		"semi dedicado",
		"servidor dedicado",
		"teamspeak",
		"team-speak",
		"team-speak 3 server",
		"proteção ddos",
		"server",
		"servidor",
		"servidor",
		"serviço de hospedagem",
		"hospedagem brasil",
		"host brasileira",
		"host 0ms",
		"melhor host do brasil",
		"onde hospedar",
		"como hospedar um site",
		"como hospedar um site",
		"como hospedar fivem",
		"host de jogo",
		"vrising",
		"como criar servidor de vrising",
		"como criar servidor de gta rp",
		"como criar servidor de fivem",
		"como criar servidor de cidade fivem",
		"como criar servidor de cidade fivem rp",
		"jogar vrising online",
		"vrising online",
		"melhor servidor vrising",
		"vrising server",
		"host fivem",
		"hospedagem de fivem",
		"fivem",
		"host minecraft",
		"hospedagem minecraft",
		"minecraft",
		"como deixar fivem online 24 horas",
		"criar cidade fivem",
		"cidade",
		"host de fivem",
		"host gta rp",
		"hospedagem para gta rp",
		"host fivem br",
		"fivem host",
		"ddos",
		"proteção ddos",
		"anti-ddos",
		"Hostzone",
		"Hostinger",
		"HeavyHost",
		"BH Servers",
		"Ultahost",
		"KnownHost",
		"Linode",
		"DigitalOcean",
		"Azure",
		"Namecheap",
		"NetEarthOne",
		"FlameHost",
		"RazeHost",
		"Loding Hosting",
		"Nice Hosting",
		"VPS Neon",
		"VPS Brasil",
		"Proteção Anti DDoS",
		"servidor de Minecraft",
		"servidor de FiveM",
		"servidor de Rust",
		"hospedagem de jogos no Brasil",
		"servidor dedicado para jogos",
		"servidor de ARK",
		"servidor de Satisfactory",
		"VPS para jogos",
		"servidores dedicados Brasil",
		"gaming VPS",
		"FiveM VPS",
		"Minecraft VPS",
		"VPS com NVMe",
		"servidor de Counter Strike",
		"servidor de CS:GO",
		"servidor de GTA RP",
		"servidor de Unturned",
		"VPS Linux",
		"VPS Windows",
		"servidor com proteção DDoS",
		"cloud gaming",
		"hospedagem de jogos multiplayer",
		"servidor dedicado gamer",
		"servidor de Minecraft Brasil",
		"VPS com alta performance",
		"VPS barato",
		"VPS para trading",
		"servidor dedicado NVMe",
		"cloud hosting",
		"cache externo",
		"cache externo fivem",
		"cache externo gtarp",
		"cache-externo",
		"cache-externo fivem",
		"cache-externo gtarp",
		"cache-externo vps",
		"cache-externo vps gamer",
		"cache externo vps",
		"cache externo vps gamer",
		"cache externo redm",
		"cache externo rd2",
		"host de redm",
		"vps redm",
		"vps rd2",
		"Vps Redm",
	],

	openGraph: {
		type: "website",
		locale: "pt_BR",
		url: "https://neonhost.com.br/vps-neon",
		title: "VPS Neon | Servidores para Jogos | NeonHost",
		description:
			"VPS Neon com processadores de alta frequência e proteção anti-DDoS. Ideal para servidores de jogos.",
		siteName: "NeonHost",
		images: [
			{
				url: "/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "NeonHost - VPS Neon",
			},
		],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	twitter: {
		title: "VPS Neon | NeonHost",
		card: "summary_large_image",
		description:
			"VPS Neon com processadores de alta frequência e proteção anti-DDoS. Ideal para servidores de jogos.",
		images: ["/og-image.jpg"],
	},
	alternates: {
		canonical: "https://neonhost.com.br/vps-neon",
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
};

const inter = Inter({ subsets: ["latin"] });

export default function VpsGamerLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
