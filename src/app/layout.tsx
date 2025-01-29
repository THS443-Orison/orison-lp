import type { Metadata } from "next";
import { Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import QR from "@/assets/images/QR.png";
import CtaMessage from "@/components/CtaMessage";

const ZenKakuGothicNew = Zen_Kaku_Gothic_New({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "折り紙で織りなす未来都市「ORISON」",
  description: "あなたの折り紙で、折りなす日本を織りなしていく町づくり体験。その手で祈る新世界へ！",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${ZenKakuGothicNew.variable} antialiased text-gray-800 sm:bg-[url('/images/feature.png')] bg-cover bg-center bg-fixed relative`}
      >
        {/* 背景用の薄暗いオーバーレイ */}
        <div className="sm:absolute sm:inset-0 sm:bg-white sm:bg-opacity-30 sm:pointer-events-none w-full">
          <div className="fixed lg:bottom-40 md:left-58 md:bottom-24 md:left-24 sm:bottom-16 sm:left-8 animate-randomMove">
            <CtaMessage />
            <Image
              src={QR}
              alt="QR"
              className="sm:shadow-md sm:shadow-gray-500 xl:rounded-[40px] lg:rounded-[26px] hidden lg:block lg:w-[240px] xl:w-[300px] 2xl:w-[360px]"
            />
          </div>
        </div>
        <div className="sm:min-h-screen sm:flex justify-center sm:justify-end items-center sm:mr-56 relative bg-background">
          {children}
        </div>
      </body>
    </html>
  );
}
