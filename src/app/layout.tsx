import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Profile App",
  description: "authentication project",
  icons: {
    icon: "icon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col items-around justify-between">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}

{
  /* <body className={inter.className}></body> */
}
