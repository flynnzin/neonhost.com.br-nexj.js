import { Footer } from "@/components/footer";
import { NavbarComponent } from "@/components/navbar";
import { siteConfig } from "@/config/site";
import "@/styles/globals.css";
import clsx from "clsx";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
	title: {
		default: "Servidores Dedicados | NeonHost",
		template: "%s | NeonHost",
	},
	description:
		"Servidores Dedicados com processadores AMD Ryzen de última geração. Hardware exclusivo e recursos 100% dedicados para máxima performance. Ideal para aplicações enterprise, jogos e projetos que demandam alto desempenho.",
	keywords: [
		"servidor dedicado",
		"hosting dedicado",
		"servidor AMD Ryzen",
		"hosting alta performance",
		"servidor jogos",
		"servidor enterprise",
		"hosting exclusivo",
		"servidor baixa latência",
		"hosting garantido",
		"servidor Brasil",
	],
	openGraph: {
		type: "website",
		locale: "pt_BR",
		url: "https://neonhost.com.br/dedicados",
		title: "Servidores Dedicados | NeonHost",
		description:
			"Servidores Dedicados com processadores AMD Ryzen, até 128GB de RAM DDR5 e SSD NVMe. Performance e confiabilidade para suas aplicações.",
		siteName: "NeonHost",
		// images: [
		//     {
		//         url: "/og-image.jpg",
		//         width: 1200,
		//         height: 630,
		//         alt: "NeonHost - Servidores Dedicados",
		//     },
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
		title: "Servidores Dedicados | NeonHost",
		card: "summary_large_image",
		description:
			"Servidores Dedicados com processadores AMD Ryzen, até 128GB de RAM DDR5 e SSD NVMe. Performance e confiabilidade para suas aplicações.",
		images: ["/og-image.jpg"],
	},
	alternates: {
		canonical: "https://neonhost.com.br/dedicados",
	},
};

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "white" },
		{ media: "(prefers-color-scheme: dark)", color: "black" },
	],
};

const inter = Inter({ subsets: ["latin"] });

export default function DedicadosLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
