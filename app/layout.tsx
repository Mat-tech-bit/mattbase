import type { Metadata, Viewport } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import "./globals.css";

import { ThemeToggleProvider } from "./theme";
import Navbar from "./navbar/page";
import Footer from "./footer/page";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Matthew Akinyemi | Software Engineer & Designer",
  description: "Portfolio of Matthew Akinyemi, a Software Engineer specializing in building high-performance, visually stunning web applications with modern technologies.",
  keywords: ["Software Engineer", "Frontend Developer", "React", "Next.js", "TypeScript", "Portfolio"],
  authors: [{ name: "Matthew Akinyemi" }],
  openGraph: {
    title: "Matthew Akinyemi | Software Engineer",
    description: "Building the future of the web with precision and style.",
    url: "https://matthewakinyemi.dev",
    siteName: "Matthew Akinyemi Portfolio",
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
      <body className={inter.variable}>
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
