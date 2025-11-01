import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/i18n/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "AgriAga - AI-Powered Precision Agriculture Platform",
  description: "Transform your orchard operations with cutting-edge computer vision technology for automated tree counting, health monitoring, and data-driven crop management",
  icons: {
    icon: "/tom (1).png",
    apple: "/tom (1).png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/tom (1).png" type="image/png" />
        <link rel="apple-touch-icon" href="/tom (1).png" />
      </head>
      <body className={`${inter.variable} antialiased`} suppressHydrationWarning>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
