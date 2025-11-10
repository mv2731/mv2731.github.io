import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maya Venkatraman",
  description: "Research Software Engineer at the AlQuraishi Laboratory, Columbia University. Part-time M.A. in Statistics. Building a prokaryotic genome language model.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-inter antialiased`}
      >
        {/* Navigation at the very top */}
        <nav className="w-full backdrop-blur-sm border-b border-green-800 z-50" style={{ backgroundColor: '#0f1511' }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 font-bold text-xl text-slate-100">Maya Venkatraman</div>
            <div className="hidden sm:flex space-x-8">
              <Link href="/" className="text-slate-200 hover:text-slate-100">Home</Link>
              <a href="#education" className="text-slate-200 hover:text-slate-100">Education</a>
              <a href="#research" className="text-slate-200 hover:text-slate-100">Research</a>
              <a href="#industry" className="text-slate-200 hover:text-slate-100">Industry</a>
              <a href="#publications" className="text-slate-200 hover:text-slate-100">Publications</a>
              <a href="#news" className="text-slate-200 hover:text-slate-100">News</a>
              <a href="#awards" className="text-slate-200 hover:text-slate-100">Awards</a>
            </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
