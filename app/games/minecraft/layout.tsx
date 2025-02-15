import { Footer } from "@/components/footer";
import { NavbarComponent } from "@/components/navbar";
import { siteConfig } from "@/config/site";
import "@/styles/globals.css";
import clsx from "clsx";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
	title: {
		default: "VPS Gamer | Servidores para Jogos | NeonHost",
		template: "%s | NeonHost",
	},
	description:
		"VPS Gamer com processadores de alta frequência, baixa latência e proteção anti-DDoS. Ideal para servidores de Minecraft, CS:GO, ARK e mais. Ativação instantânea e painel de controle intuitivo.",
	keywords: [
		"vps gamer",
		"servidor minecraft",
		"servidor csgo",
		"servidor ark",
		"hosting jogos",
		"vps jogos",
		"servidor games",
		"vps baixa latencia",
		"servidor ddos protection",
		"hosting brasil",
		"vps brasil",
		"servidor game brasil",
	],
	openGraph: {
		type: "website",
		locale: "pt_BR",
		url: "https://neonhost.com.br/vps-gamer",
		title: "VPS Gamer | Servidores para Jogos | NeonHost",
		description:
			"VPS Gamer com processadores de alta frequência e proteção anti-DDoS. Ideal para servidores de jogos.",
		siteName: "NeonHost",
		images: [
			{
				url: "/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "NeonHost - VPS Gamer",
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
		title: "VPS Gamer | NeonHost",
		card: "summary_large_image",
		description:
			"VPS Gamer com processadores de alta frequência e proteção anti-DDoS. Ideal para servidores de jogos.",
		images: ["/og-image.jpg"],
	},
	alternates: {
		canonical: "https://neonhost.com.br/vps-gamer",
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
