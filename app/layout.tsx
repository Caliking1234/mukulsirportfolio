import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_componenets/navbar";
import Head from "next/head";
import Footer from "./_componenets/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mukul Pandey",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
