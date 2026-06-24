import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import Navbar from '../components/nav/nav'
import Footer from '../components/footer/footer'
import LoaderProvider from '../components/portfolio/loader-overlay'
import NextThemeProvider from "@/provider/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wave Mayola — Software Engineer",
  description: "Wave Mayola — backend software engineer in Cebu, Philippines, building reliable, high-performance systems in Golang and PHP.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <link rel="icon" href="/wave-logo.svg" />
      <body className="antialiased">
        <NextThemeProvider>
          <LoaderProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </LoaderProvider>
        </NextThemeProvider>
      </body>
    </html>
  );
}
