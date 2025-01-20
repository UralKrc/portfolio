import { Inter } from "next/font/google";
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
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <JsonLd />
          {children}
        </Providers>
      </body>
    </html>
  );
}
