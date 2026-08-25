import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { PersonaProvider } from "@/components/providers/PersonaProvider";
import { GamificationProvider } from "@/components/providers/GamificationProvider";
import { WelcomeLoader } from "@/components/pages/WelcomeLoader";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "Emanuel Santos | Produtos digitais",
    template: "%s | Emanuel Santos",
  },
  description: "Ideias ganham forma e continuam.",
  openGraph: {
    title: "Emanuel Santos | Produtos digitais",
    description: "Ideias ganham forma e continuam.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emanuel Santos | Produtos digitais",
    description: "Ideias ganham forma e continuam.",
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
        <Script id="emanuel-welcome-state" strategy="beforeInteractive">
          {`try { if (sessionStorage.getItem("emanuel-universe-welcome-seen")) document.documentElement.dataset.universeReady = "true"; } catch {}`}
        </Script>
        <WelcomeLoader />
        <PersonaProvider>
          <GamificationProvider>{children}</GamificationProvider>
        </PersonaProvider>
      </body>
    </html>
  );
}
