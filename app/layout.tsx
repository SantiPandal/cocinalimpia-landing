import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "FumigaTuCasa.com — Control de Plagas Residencial en CDMX",
  description:
    "Fumigacion profesional para casas y departamentos en CDMX. Certificados COFEPRIS. Cotiza por WhatsApp.",
  icons: {
    icon: "/images/logo-fumigatucasa-favicon-32.png",
    apple: "/images/logo-fumigatucasa-icon-180.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${montserrat.variable} antialiased`}>{children}</body>
    </html>
  );
}
