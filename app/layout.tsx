import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shashika Ekanayaka | Full Stack Developer & Software Engineer",
  description: "Portfolio of Shashika Ekanayaka - Computer Science undergraduate at UCSC, specializing in Full Stack Development, Microservices Architecture, and DevOps. Building scalable applications with React, Spring Boot, and cloud technologies.",
  keywords: [
    "Full Stack Developer",
    "Software Engineer",
    "React Developer",
    "Spring Boot",
    "DevOps",
    "Microservices",
    "Sri Lanka",
    "UCSC",
    "Web Development",
    "Mobile Development",
  ],
  authors: [{ name: "Shashika Ekanayaka" }],
  creator: "Shashika Ekanayaka",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shashika.dev",
    title: "Shashika Ekanayaka | Full Stack Developer",
    description: "Building the future of software with modern technologies",
    siteName: "Shashika Ekanayaka Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shashika Ekanayaka | Full Stack Developer",
    description: "Building the future of software with modern technologies",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
