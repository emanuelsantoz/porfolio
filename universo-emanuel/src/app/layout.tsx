import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { PersonaProvider } from "@/components/providers/PersonaProvider";
import { GamificationProvider } from "@/components/providers/GamificationProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "ES/0 — Emanuel Santos",
    template: "%s | Emanuel Santos",
  },
  description: "Ideias ganham força quando se tornam úteis para alguém.",
  openGraph: {
    title: "ES/0 — Emanuel Santos",
    description: "Ideias ganham força quando se tornam úteis para alguém.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "ES/0 — Emanuel Santos",
    description: "Ideias ganham força quando se tornam úteis para alguém.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable} font-sans antialiased overflow-x-hidden`}>
        <PersonaProvider>
          <GamificationProvider>{children}</GamificationProvider>
        </PersonaProvider>
      </body>
    </html>
  );
}
