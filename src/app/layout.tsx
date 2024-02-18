import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({ subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  title: "JordanShoes Desafio",
  description: "Desafio da comunidade Codelandia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/logo-jordan.svg" sizes="any" />
      </head>
      <body className={archivo.className}>{children}</body>
    </html>
  );
}
