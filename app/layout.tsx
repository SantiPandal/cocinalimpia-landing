import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "CocinaLimpia.mx — Control de Plagas para Restaurantes",
  description:
    "Fumigación profesional y control de plagas para cocinas comerciales en México. Certificados COFEPRIS. Cotiza por WhatsApp.",
  icons: {
    icon: "/images/logo-cocinalimpia-bueno-favicon-32.png",
    apple: "/images/logo-cocinalimpia-bueno-icon-180.png",
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
