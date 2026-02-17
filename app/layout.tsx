import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: "Dobeon Consulting & Advisory",
  description: "Dobeon Consulting & Advisory is a boutique advisory firm focused exclusively on complex healthcare and life sciences mandates. Discreet. Strategic. Execution-Centric.",
  keywords: ["healthcare consulting", "life sciences", "strategic execution", "global health", "digital modernization", "capital strategy"],
  authors: [{ name: "Dobeon Consulting & Advisory" }],
  icons: {
    icon: [
      { url: "/logo.svg", type: "image/svg+xml" },
      { url: "/logo.jpeg", sizes: "512x512", type: "image/jpeg" },
    ],
    apple: "/logo.jpeg",
  },
  openGraph: {
    title: "Dobeon Consulting & Advisory",
    description: "Discreet. Strategic. Execution-Centric. Boutique advisory firm focused on complex healthcare and life sciences mandates.",
    type: "website",
    images: ["/logo.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${playfair.variable} antialiased`}
      >
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
