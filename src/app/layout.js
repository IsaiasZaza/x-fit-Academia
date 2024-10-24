import { Inter } from "next/font/google";
import "./globals.css";

// Importando a fonte "Inter"
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Academia xFit",
  description: "Academia xFit: Onde treino e bem-estar se encontram.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
