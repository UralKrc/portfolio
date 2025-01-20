import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { JsonLd } from "./JsonLd";
import { siteMetadata } from "./metadata";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = siteMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="/favicon.ico"
          type="image/x-icon"
          sizes="32x32"
        />
        <link
          rel="icon"
          href="/icon-512x512.png"
          type="image/png"
          sizes="512x512"
        />
        <link rel="apple-touch-icon" href="/icon-192x192.png" sizes="192x192" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <JsonLd />
          {children}
        </Providers>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
      </body>
    </html>
  );
}
