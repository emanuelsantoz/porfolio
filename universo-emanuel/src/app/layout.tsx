import type { Metadata } from "next";
import { Inter, Fira_Code, Patrick_Hand } from "next/font/google";
import "./globals.css";
import { PersonaProvider } from "@/components/providers/PersonaProvider";
import { GamificationProvider } from "@/components/providers/GamificationProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-fira" });
const patrickHand = Patrick_Hand({ weight: "400", subsets: ["latin"], variable: "--font-patrick" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "Universo Emanuel",
    template: "%s | Universo Emanuel",
  },
  description: "O ecossistema digital de Emanuel Santos",
  openGraph: {
    title: "Universo Emanuel",
    description: "O ecossistema digital de Emanuel Santos",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Universo Emanuel",
    description: "O ecossistema digital de Emanuel Santos",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} ${firaCode.variable} ${patrickHand.variable} font-sans antialiased overflow-x-hidden`}>
        <PersonaProvider>
          <GamificationProvider>{children}</GamificationProvider>
        </PersonaProvider>
      </body>
    </html>
  );
}
