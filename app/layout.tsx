import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wrapflow.tools"),
  title: { default: "WrapFlow.Tools", template: "%s | WrapFlow.Tools" },
  description: "Precision tools for vehicle wrap professionals.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} dark`}>
      <body className="relative min-h-screen overflow-x-hidden bg-[#06060a] font-sans text-zinc-100 antialiased">
        {children}
      </body>
    </html>
  );
}