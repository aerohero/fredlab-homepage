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
  title: {
    default: "FREDLAB | 창업교육 & 멘토링 전문",
    template: "%s | FREDLAB",
  },
  description:
    "창업교육, 멘토링, 특허전략 전문 코치 김대홍. 예비·초기 창업가의 아이디어를 사업으로 만드는 과정, 그 모든 단계에서 함께합니다.",
  keywords: ["창업교육", "창업멘토링", "스타트업", "창업코치", "프레드랩", "Fredlab", "특허전략"],
  authors: [{ name: "Fredlab" }],
  openGraph: {
    title: "FREDLAB | 창업교육 & 멘토링 전문",
    description: "지속가능한 가치창출을 함께 고민합니다.",
    url: "https://fredlab-homepage.vercel.app",
    siteName: "FREDLAB",
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
    <html lang="ko" className={`${capriola.variable} dark`}>
      <head>
        <link
          rel="preload"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        <link
          rel="stylesheet"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased bg-[#09090B] text-white">
        {children}
      </body>
    </html>
  );
}
