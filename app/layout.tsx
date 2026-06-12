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

export const metadata = {
  title: "DNZ Labs | AI Engineering & Research",
  description:
    "DNZ Labs is an independent AI engineering and research lab focused on AI agents, LLM applications, automation and information intelligence.",
  keywords: [
    "AI Engineering",
    "AI Agents",
    "LLM Applications",
    "Automation",
    "Artificial Intelligence",
    "DNZ Labs",
  ],
  authors: [{ name: "DNZ Labs" }],
  openGraph: {
    title: "DNZ Labs | AI Engineering & Research",
    description:
      "Independent AI engineering lab focused on AI agents, LLM applications and automation systems.",
    url: "https://dnzlabs.vercel.app",
    siteName: "DNZ Labs",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DNZ Labs",
      },
    ],

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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
