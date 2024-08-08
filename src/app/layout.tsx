import type { Metadata } from "next";
import { Inter, Lato } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });

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
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-VW1MY3XV29"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-VW1MY3XV29');
            `,
          }}
        />
      </head>
      <body className={`${inter.className} ${lato.className}`}>
        <Header />
        <main className="pt-32">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
