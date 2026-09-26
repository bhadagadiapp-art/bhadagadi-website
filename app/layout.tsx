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
  metadataBase: new URL("https://bhadagadi.in"),

  title: "Bhadagadi | India's Next Generation Taxi Platform",

  description:
    "Bhadagadi is India's next generation taxi platform, connecting riders and drivers with smarter, safer and more convenient transportation.",

  keywords: [
    "Bhadagadi",
    "Bhadagadi taxi",
    "Bhadagadi app",
    "Bhadagadi India",
    "taxi booking",
    "cab booking",
    "taxi service",
    "ride booking",
    "driver platform",
    "India taxi app",
  ],

  authors: [{ name: "Bhadagadi" }],

  creator: "Bhadagadi",
  publisher: "Bhadagadi",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Bhadagadi | India's Next Generation Taxi Platform",
    description:
      "Bhadagadi connects passengers and drivers with a modern, affordable and premium ride experience across India.",
    url: "https://bhadagadi.in",
    siteName: "Bhadagadi",
    type: "website",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "Bhadagadi | India's Next Generation Taxi Platform",
    description:
      "Bhadagadi connects passengers and drivers with a modern, affordable and premium ride experience across India.",
  },

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
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Bhadagadi",
              alternateName: "Bhadagadi Taxi",
              url: "https://bhadagadi.in",
              email: "bhadagadiapp@gmail.com",
              description:
                "Bhadagadi is India's next generation taxi platform, connecting riders and drivers with smarter, safer and more convenient transportation.",
            }),
          }}
        />

        {children}
      </body>
    </html>
  );
}