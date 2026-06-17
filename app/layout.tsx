import type { Metadata, Viewport } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import "./globals.css";

import { ThemeToggleProvider } from "./theme";
import Navbar from "./navbar/page";
import Footer from "./footer/page";

import { Inter, Geist_Mono } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Terminal Yard Operating System | The New Industry Standard in Yard Operations",
  description: "Terminal Yard Operating System (YOS) is the high-performance orchestration platform replacing manual friction with real-time yard automation. Optimize spotters, gates, and assets in a single mission-critical console.",
  keywords: ["Logistics", "Yard Management", "YMS", "Terminal Industries", "Yard Operating System", "Supply Chain Automation", "Dock Orchestration", "Fleet Telemetry"],
  authors: [{ name: "Terminal Industries" }],
  openGraph: {
    title: "Terminal Yard Operating System | Yard Operations Platform",
    description: "The New Industry Standard in Yard Operations. Automate and orchestrate gates, spotters, and dock doors.",
    url: "https://terminalindustries.com",
    siteName: "Terminal Yard Operating System",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <body className={`${inter.variable} ${geistMono.variable}`}>
        <AppRouterCacheProvider>
          <ThemeToggleProvider>
            <div style={{ overflowX: "hidden", width: "100%", position: "relative" }}>
              <Navbar />
              <main>{children}</main>
              <Footer />
            </div>
          </ThemeToggleProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

