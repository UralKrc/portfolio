import { Inter } from "next/font/google";
import "./globals.css";
import { metadata, viewport } from "./metadata";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export { metadata, viewport };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
