import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";
import { ContextCharacterProvider } from "@/context/context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CharactersWars",
  description: "Generated by Max Martinez",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider>
          <ContextCharacterProvider>
            <Navbar />
            {children}
          </ContextCharacterProvider>
        </ChakraProvider>
      </body>
    </html>
  );
}
