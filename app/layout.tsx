import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Hemant Pandey | Full Stack Developer",
  description:
    "Full Stack Developer specializing in React, Next.js, and Node.js. Building scalable web applications with modern technologies.",
  keywords: ["Full Stack Developer", "React", "Next.js", "Node.js", "Portfolio"],
  authors: [{ name: "Hemant Pandey" }],
  openGraph: {
    title: "Hemant Pandey | Full Stack Developer",
    description: "Full Stack Developer specializing in React, Next.js, and Node.js",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
