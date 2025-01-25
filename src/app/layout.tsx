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
  title: "Orison",
  description: "おりなす",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 text-gray-800 sm:bg-[url('/images/bg2.png')] bg-cover bg-center bg-fixed relative`}
      >
        {/* 背景用の薄暗いオーバーレイ */}
        <div className="sm:absolute sm:inset-0 sm:bg-white sm:bg-opacity-30 sm:pointer-events-none"></div>

        <div className="min-h-screen flex justify-center sm:justify-end items-center sm:mr-56 relative ">
          <main className="mobile">{children}</main>
        </div>
      </body>
    </html>
  );
}
