import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";

export const metadata: Metadata = {
  title: "소개",
  description: "창업코치 김대홍 — stayCurious 대표 소개, 경력, 자격증",
};

const certificates = [
  "경영지도사 (재무관리)",
  "창업보육매니저",
  "한국기업기술가치평가사",
];

const expertise = [
  "창업교육 프로그램 기획·운영",
  "커뮤니케이션형 멘토링",
  "정부지원사업 사업계획서 코칭",
  "IR 피칭덱 작성 및 발표 코칭",
  "특허전략 컨설팅 (선행기술조사, 특허맵, IP-R&D)",
  "해커톤 기획·운영·퍼실레이팅",
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="About"
            title="창업코치 김대홍"
            subtitle="stayCurious 대표"
            center
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Profile card */}
            <GlassCard elevated className="p-8 text-center lg:col-span-1">
              <div className="w-24 h-24 rounded-2xl bg-[#1A3C10]/30 border border-[#2D6A1C]/30 flex items-center justify-center text-5xl mx-auto mb-5">
                🌱
              </div>
              <h2 className="font-bold text-white text-xl mb-1">김대홍</h2>
              <p className="text-white/50 text-sm mb-6">stayCurious 대표 · 창업코치</p>

              <div className="space-y-2 mb-6">
                {certificates.map((cert) => (
                  <span
                    key={cert}
                    className="block text-xs px-3 py-2 rounded-lg glass text-white/65"
                  >
                    {cert}
                  </span>
                ))}
              </div>

              <Link
                href="/contact"
                className="block w-full px-4 py-2.5 rounded-xl bg-[#1A3C10] hover:bg-[#2D6A1C] text-white text-sm font-semibold text-center transition-colors"
              >
                문의하기
              </Link>
            </GlassCard>

            {/* Bio */}
            <div className="lg:col-span-2 space-y-6">
              <GlassCard className="p-7">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-4">소개</h3>
                <p className="text-white/70 leading-relaxed mb-4">
                  특허법인 및 컨설팅 業에서 10년 이상의 경력을 보유한 실무형 전문가로,
                  경영지도사 자격을 기초로 창업교육·코칭·특허전략을 지원합니다.
                </p>
                <p className="text-white/70 leading-relaxed">
                  예비·초기 창업가의 아이디어를 사업으로 만드는 과정, 그 모든 단계에서 함께합니다.
                  솔루션의 제시나 평가를 지양하고, 창업가가 가진 고민에 대해 함께 해결책을 모색하는
                  소통형 멘토링을 지향합니다.
                </p>
              </GlassCard>

              <GlassCard className="p-7">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-4">전문 분야</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {expertise.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-white/65">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2D6A1C] mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
