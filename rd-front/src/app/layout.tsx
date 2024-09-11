import type { Metadata } from "next";
import localFont from "next/font/local";
import "./css/globals.css";
import Image from 'next/image';
import Link from "next/link";
import logo from './img/logo.png';
import React from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Runner Day",
  description: "마라톤 행사 정리 사이트",
    keywords: "마라톤, 동마, 제마, 동아마라톤, JTBC마라톤, 마라톤정보, 러닝크루, 러닝, 손기정마라톤, 롱기스트런",
    openGraph: {
        title: "Runner Day",
        description: "마라톤 행사 정리 사이트",
        url: "http://www.duckty.com", // 실제 사이트 URL로 교체
        siteName: "Runner Day",
        images: [
            {
                url: "./img/runnerDay.png", // 실제 이미지 URL로 교체
                width: 800,
                height: 600,
                alt: "Runner Day 마라톤 정보 사이트",
            },
        ],
        locale: "ko_KR", // 한국어로 설정
        type: "website",
    },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>

      <header>
          <div>
                <Link href="/">
                    <Image src={logo} alt="Logo" width={150} />
                </Link>
          </div>
      </header>

        {/*본문 위치*/}
      <div className="body_wrap">
          {children}
      </div>

      <footer>
        <a> Copyright © 2024 Runner day Platform. All rights reserved.</a>
      </footer>

      </body>
    </html>
  );
}
