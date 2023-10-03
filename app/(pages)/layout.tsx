import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/app/(components)/molecules/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="flex flex-col items-center p-4">{children}</main>
      </body>
    </html>
  );
}
