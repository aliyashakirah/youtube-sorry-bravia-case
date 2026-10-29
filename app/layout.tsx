import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Claim Ready — A Free Warranty Claim Checklist",
  description: "A free checklist for anyone about to file a warranty claim. A warranty claim is decided on records. Keep yours, and ask for theirs in writing.",
  keywords: ["warranty claim", "consumer rights", "claim ready", "checklist", "consumer complaints"],
  authors: [{ name: "Claim Ready" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#087A58",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased selection:bg-primary-soft-2 selection:text-primary-ink bg-white text-on-surface">
        {children}
      </body>
    </html>
  );
}
