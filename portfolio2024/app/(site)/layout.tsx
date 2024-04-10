import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Michele Cheow Portfolio",
  description: "Generated by Next + Sanity",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="max-w-3xl mx-auto py-10">
        <header>
          <Link
            href="/"
            className="bg-gradient-to-r from-blue-400 to-purple-800 bg-clip-text text-transparent text-lg font-bold"
          >
            Michele
          </Link>
        </header>
        <main className="py-10">{children}</main>
      </body>
    </html>
  );
}
