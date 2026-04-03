import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import PinriseBanner from '@/components/PinriseBanner';

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hello Nails 128 | Premium Nail Studio in Lower East Side, NYC",
  description:
    "Hello Nails 128 — a premium nail studio at 128 Rivington St, New York. Expert manicures, pedicures, and nail art in the heart of the Lower East Side.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">{children}        <PinriseBanner />
              
{/* Pinrise Sales Banner */}
<script src="https://portal.pinrise.io/api/portal/banner.js?id=56d90c5c-d47d-4374-ac3e-7ab523d1a831" defer></script>
      </body>
    </html>
  );
}
