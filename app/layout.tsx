import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-sans",
	weight: ["400", "500", "600", "700"],
});

const dmSerif = DM_Serif_Display({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-serif",
	weight: "400",
});

export const metadata: Metadata = {
	metadataBase: new URL("https://SEU-PROJETO.vercel.app"),
	title: "Tati Silva Nail Designer | Unhas em Novo Hamburgo",
	description:
		"Blindagem, esmaltação em gel, alongamento e manutenção com atendimento individual em Canudos, Novo Hamburgo.",
	keywords: [
		"Tati Silva Nail Designer",
		"Tati unhas",
		"unhas em Novo Hamburgo",
		"unhas Canudos",
		"esmaltação em gel Novo Hamburgo",
		"alongamento de unhas Novo Hamburgo",
		"blindagem de unhas Novo Hamburgo",
	],
	openGraph: {
		title: "Tati Silva Nail Designer | Unhas em Novo Hamburgo",
		description:
			"Blindagem, esmaltação em gel, alongamento e manutenção com atendimento individual em Canudos, Novo Hamburgo.",
		url: "https://SEU-PROJETO.vercel.app",
		siteName: "Tati Silva Nail Designer",
		locale: "pt_BR",
		type: "website",
		images: [
			{
				url: "/galeria/hero-capa.png",
				width: 1200,
				height: 630,
				alt: "Tati Silva Nail Designer em Novo Hamburgo",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Tati Silva Nail Designer | Unhas em Novo Hamburgo",
		description:
			"Blindagem, esmaltação em gel, alongamento e manutenção em Canudos, Novo Hamburgo.",
		images: ["/hero-capa.png"],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<body
				className={`${dmSans.variable} ${dmSerif.variable} bg-[#fcf8f6] text-[#4a3d3d] antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
