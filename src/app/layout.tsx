import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Navbar from "@/components/component/navbar";
import protfolioWebsite from "@/assets/portfolio-website.jpg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clark Wayne",
  description:
    "I love to build things for the web. I specialize in creating fast, responsive, and accessible websites.",
  openGraph: {
    title: "Clark Wayne's Portfolio",
    description:
      "I love to build things for the web. I specialize in creating fast, responsive, and accessible websites.",
    url: "https://clarkwayne.vercel.app",
    images: [
      {
        url: protfolioWebsite.src,
        width: 1920,
        height: 1080,
        alt: "Home Page Hero Image",
      },
    ],
    type: "website",
    locale: "en_US",
    siteName: "Clark Wayne",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
