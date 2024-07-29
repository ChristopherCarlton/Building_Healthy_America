import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Building Healthy America",
  description: "WE'RE BUILDING A FIRST-OF-ITS-KIND NETWORK OF SUPPORT FOR FAMILIES OF CHILDREN WITH CHRONIC ILLNESS OR DISABILITY.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#1D568B" />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="pt-32">{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
