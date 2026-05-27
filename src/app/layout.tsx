import type { Metadata } from "next";
import { Baloo_2, Fredoka, Poppins, Nunito, Patrick_Hand, Schoolbell, Lilita_One } from "next/font/google";
import "./globals.css";

const baloo2 = Baloo_2({
  subsets: ["latin"],
  variable: "--font-baloo2",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const patrickHand = Patrick_Hand({
  subsets: ["latin"],
  variable: "--font-patrickhand",
  display: "swap",
  weight: ["400"],
});

const schoolbell = Schoolbell({
  subsets: ["latin"],
  variable: "--font-schoolbell",
  display: "swap",
  weight: ["400"],
});

const lilitaOne = Lilita_One({
  subsets: ["latin"],
  variable: "--font-lilita",
  display: "swap",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Khairul Azizi | Creative Portfolio 2025",
  description:
    "A playful, scrapbook-inspired portfolio showcasing animation and UI/UX design work by Khairul Azizi — Designer + Web Creator.",
  keywords: ["portfolio", "designer", "animator", "UI/UX", "web creator", "Khairul Azizi"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${baloo2.variable} ${fredoka.variable} ${poppins.variable} ${nunito.variable} ${patrickHand.variable} ${schoolbell.variable} ${lilitaOne.variable}`}
    >
      <body className="antialiased grain-overlay notebook-grid pencil-cursor">
        {children}
      </body>
    </html>
  );
}
