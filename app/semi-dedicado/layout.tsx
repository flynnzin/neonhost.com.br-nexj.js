import { Footer } from "@/components/footer";
import { NavbarComponent } from "@/components/navbar";
import { siteConfig } from "@/config/site";
import "@/styles/globals.css";
import clsx from "clsx";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
	title: {
		default:
			"Servidores Semi-Dedicados | Hospedagem de Alto Desempenho | NeonHost",
		template: "%s | NeonHost",
	},
	description:
		"Servidores Semi-Dedicados com processadores AMD Ryzen, SSD NVMe e proteção DDoS. Ideal para aplicações de alta performance, sites, sistemas e jogos. Suporte 24/7 e uptime garantido.",
	keywords: [
		"servidor semi dedicado",
		"hospedagem semi dedicada",
		"servidor semi dedicado brasil",
		"servidor amd ryzen",
		"servidor com proteção ddos",
		"servidor alta performance",
		"hospedagem de sites",
		"servidor para jogos",
		"servidor nvme",
		"servidor com suporte 24/7",
		"servidor uptime garantido",
		"neonhost",
		"servidor brasil",
	],
	openGraph: {
		type: "website",
		locale: "pt_BR",
		url: "https://neonhost.com.br/semi-dedicado",
		title: "Servidores Semi-Dedicados | NeonHost",
		description:
			"Servidores Semi-Dedicados com processadores AMD Ryzen, SSD NVMe e proteção DDoS. Performance e confiabilidade para suas aplicações.",
		siteName: "NeonHost",
		// images: [
		// 	{
		// 		url: "/og-image.jpg",
		// 		width: 1200,
		// 		height: 630,
		// 		alt: "NeonHost - Servidores Semi-Dedicados",
		// 	},
		// ],
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
		title: "Servidores Semi-Dedicados | NeonHost",
		card: "summary_large_image",
		description:
			"Servidores Semi-Dedicados com processadores AMD Ryzen, SSD NVMe e proteção DDoS. Performance e confiabilidade para suas aplicações.",
		images: ["/og-image.jpg"],
	},
	alternates: {
		canonical: "https://neonhost.com.br/semi-dedicado",
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
};

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
