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
  title: "Ameer Hasan | Video Editor & Graphic Designer Portfolio",
  description: "Explore the professional Graphic Designer & Video Editor portfolio of Ameer Hasan. Specialized in cinematic editing, motion graphics, social media campaigns, and brand identity design. Based in Jaipur, Rajasthan, India.",
  keywords: ["Ameer Hasan", "Video Editor", "Graphic Designer", "Portfolio", "Motion Graphics", "Jaipur", "Softhunters", "Cinematic Video Editing", "Branding Identity"],
  authors: [{ name: "Ameer Hasan" }],
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
      style={{ scrollBehavior: "smooth" }}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

