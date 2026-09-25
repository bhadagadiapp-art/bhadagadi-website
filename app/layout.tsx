import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bhadagadi | India's Next Generation Taxi Platform",
  description:
    "Bhadagadi is India's next generation taxi platform, connecting riders and drivers with smarter, safer and more convenient transportation.",
  keywords: [
    "Bhadagadi",
    "taxi booking",
    "cab booking",
    "taxi service",
    "ride booking",
    "driver platform",
    "India taxi app",
    "Bhadagadi taxi",
  ],
  authors: [{ name: "Bhadagadi" }],
  creator: "Bhadagadi",
  publisher: "Bhadagadi",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={'${geistSans.variable} ${geistMono.variable} h-full antialiased'}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}