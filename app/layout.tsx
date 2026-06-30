import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://showcase.snaplink.southlineone.com"),
  title: "SnapLink Showcase | Physical + Digital Customer Action System",
  description:
    "SnapLink connects smart profiles, QR/NFC products, digital displays, lead capture, and analytics in one premium system.",
  openGraph: {
    title: "SnapLink Showcase",
    description:
      "One link. Every connection. Physical products, digital profiles, QR/NFC, leads, digital displays, and analytics for modern businesses.",
    images: [
      {
        url: "/images/snaplink-og-image.jpg",
        width: 1536,
        height: 1024,
        alt: "SnapLink physical and digital customer action system"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "SnapLink Showcase | Physical + Digital Customer Action System",
    description:
      "SnapLink connects smart profiles, QR/NFC products, digital displays, lead capture, and analytics in one premium system.",
    images: ["/images/snaplink-og-image.jpg"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
