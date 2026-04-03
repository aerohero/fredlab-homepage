import type { Metadata } from "next";
import { Capriola } from "next/font/google";
import "./globals.css";

const capriola = Capriola({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-capriola",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fredlab | 창업교육 전문가",
  description:
    "1:1 창업 코칭, 그룹 워크숍, 기관 출강 — 아이디어를 실제 비즈니스로. Fredlab과 함께 스타트업 여정을 시작하세요.",
  keywords: ["창업교육", "스타트업", "창업코칭", "프레드랩", "Fredlab"],
  authors: [{ name: "Fredlab" }],
  openGraph: {
    title: "Fredlab | 창업교육 전문가",
    description: "아이디어를 실제 비즈니스로. Fredlab 창업교육",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${capriola.variable} h-full`}>
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
