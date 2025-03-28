import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/components/auth/AuthProvider";
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ui/ThemeProvider';
import { theme } from '@/styles/theme';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Agentic Mechanic - AI-Powered Service History Analysis",
  description: "Upload your car's service log and get instant AI insights to buy smarter and avoid hidden surprises.",
  keywords: ["car service history", "used car buying", "AI car analysis", "service log analyzer", "car maintenance history"],
  authors: [{ name: "Agentic Mechanic Team" }],
  openGraph: {
    title: "Agentic Mechanic - AI-Powered Service History Analysis",
    description: "Upload your car's service log and get instant AI insights to buy smarter and avoid hidden surprises.",
    url: "https://agenticmechanic.com",
    siteName: "Agentic Mechanic",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${inter.className}`}
      >
        <ThemeProvider theme={theme}>
          <AuthProvider>
            {children}
          </AuthProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
