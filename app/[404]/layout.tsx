import { siteConfig } from "@/config/site";
import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: {
		default: "Hospedagem de Jogos no Brasil",
		template: "%s | NeonHost",
	},
	description:
		"Oferecemos VPS Neon com processadores AMD Ryzen e proteção Anti DDoS, ideais para servidores de jogos e aplicações de alto desempenho.",
	keywords: [
		"NeonHost",
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
	],
	openGraph: {
		title: "Hospedagem de Jogos no Brasil | NeonHost",
		description:
			"Hospedagem de alto desempenho, com baixa latência, infraestrutura no Brasil, armazenamento NVMe e proteção anti-DDoS para jogos como Minecraft, FiveM e muito mais.",
		url: "https://neonhost.com.br/",
		siteName: "NeonHost",
		images: ["/banner.webp"],
	},
	twitter: {
		card: "summary_large_image",
		title: "Hospedagem de Jogos no Brasil | NeonHost",
		description:
			"Desempenho superior e segurança com infraestrutura no Brasil. Hospede seus servidores de Minecraft, FiveM e outros jogos com proteção Anti DDoS.",
		images: ["/banner.webp"],
	},
	icons: {
		icon: "/favicon.ico",
	},
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return <>{children}</>;
}
