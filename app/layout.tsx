import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Theme from "./Theme";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home | MacLearn",
  description:
    "MacLearn is the best online platform for learning and improving your web development skills with high quality articles on HTML, CSS, detailed references, and a playground for you to experiment with your knowledge!",
  authors: [{ name: "MacWeb", url: "https://macweb.app" }],
  openGraph: {
    title: "MacLearn",
    description:
      "MacLearn is the best online platform for learning and improving your web development skills with high quality articles on HTML, CSS, detailed references, and a playground for you to experiment with your knowledge!",
    url: "https://maclearn.macweb.app",
    siteName: "MacLearn",
    images: [
      {
        url: "/logo.png",
        width: 200,
        height: 200,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <Theme>
          <Nav />
          {children}
          <Footer />
        </Theme>
      </body>
    </html>
  );
}
