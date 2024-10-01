import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Wrapper from "../components/wrapper/Wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Albokoes EnviroSustain",
  description: "Empowering Strategic Consulting and Innovations for a Sustainable World",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Wrapper>
          <Navbar />
          {children}
          <Footer />

        </Wrapper>
      </body>
    </html>
  );
}
