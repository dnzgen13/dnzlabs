import Script from "next/script";
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
  title: "DNZ Labs | AI Engineering & Applied Research",
  description:
    "DNZ Labs designs and deploys AI systems, intelligent agents and automation solutions for real-world business challenges.",
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
    title: "DNZ Labs | AI Engineering & Applied Research",
    description:
      "Designing and deploying AI systems, intelligent agents and automation solutions for real-world business challenges.",
    url: "https://dnzlabs.tech",
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
      <body className="min-h-full flex flex-col">
        {children}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JD1R252FQ2"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-JD1R252FQ2');
          `}
        </Script>

        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
    (function(m,e,t,r,i,k,a){
      m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
      m[i].l=1*new Date();
      for (var j = 0; j < document.scripts.length; j++) {
        if (document.scripts[j].src === r) return;
      }
      k=e.createElement(t),
      a=e.getElementsByTagName(t)[0],
      k.async=1,
      k.src=r,
      a.parentNode.insertBefore(k,a);
    })(window, document, 'script',
      'https://mc.yandex.ru/metrika/tag.js?id=109835996',
      'ym');

    ym(109835996, 'init', {
      ssr:true,
      webvisor:true,
      clickmap:true,
      ecommerce:"dataLayer",
      referrer: document.referrer,
      url: location.href,
      accurateTrackBounce:true,
      trackLinks:true
    });
  `}
        </Script>

      </body>
    </html>
  );
}