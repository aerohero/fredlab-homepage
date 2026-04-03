import Link from "next/link";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeader from "@/components/ui/SectionHeader";

const badges = ["경영지도사 (재무관리)", "창업보육매니저", "한국기업기술가치평가사"];

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <SectionHeader
              eyebrow="About"
              title="창업코치 김대홍"
            />
            <p className="text-base text-white/65 leading-relaxed mb-4">
              특허법인 및 컨설팅 業에서 10년 이상의 경력을 보유한 실무형 전문가,
              경영지도사 자격을 기초로 창업교육·코칭·특허전략을 지원합니다.
            </p>
            <p className="text-base text-white/65 leading-relaxed mb-8">
              예비·초기 창업가의 아이디어를 사업으로 만드는 과정,
              그 모든 단계에서 함께합니다.
            </p>

            {/* Qualification badges */}
            <div className="flex flex-wrap gap-2 mb-8">
              {badges.map((b) => (
                <span
                  key={b}
                  className="text-xs px-3 py-1.5 rounded-full glass text-white/70 font-medium"
                >
                  {b}
                </span>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#2D6A1C] hover:text-[#4a9a2c] transition-colors"
            >
              프로필 전체 보기 →
            </Link>
          </div>

          {/* Visual card */}
          <GlassCard elevated className="p-8">
            <div className="text-center mb-6">
              <div className="w-20 h-20 rounded-2xl bg-[#1A3C10]/30 border border-[#2D6A1C]/30 flex items-center justify-center text-4xl mx-auto mb-4">
                🌱
              </div>
              <p className="font-bold text-white text-lg">김대홍</p>
              <p className="text-white/50 text-sm">FREDLAB 대표 · 창업코치</p>
            </div>
            <div className="space-y-3">
              {[
                "창업교육 · 멘토링 전문",
                "특허전략 컨설팅 · IP-R&D",
                "정부지원사업 사업계획서 코칭",
                "피칭덱 작성 및 발표 코칭",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm text-white/60">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2D6A1C] shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
