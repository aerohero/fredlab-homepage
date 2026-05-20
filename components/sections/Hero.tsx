import Link from "next/link";
import { tags } from "@/data/services";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background radial gradient */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(26,60,16,0.25) 0%, transparent 65%), #09090B",
        }}
      />
      {/* Decorative orb */}
      <div
        className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl -z-10 opacity-10"
        style={{ background: "#1A3C10" }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Brand badge */}
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#2D6A1C] animate-pulse" />
          <span className="text-sm font-medium text-white/60">
            창업교육 전문가 · 1:1 코칭
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4 tracking-tight">
          stayCurious
        </h1>
        <p className="text-2xl sm:text-3xl font-bold text-white/80 mb-6">창업코치 김대홍</p>

        <p className="text-lg sm:text-xl text-white/60 max-w-2xl mx-auto mb-4 leading-relaxed">
          비즈니스를 통한 가치창출을 함께 합니다.
        </p>
        <p className="text-base sm:text-lg text-white/50 max-w-xl mx-auto mb-10 leading-relaxed">
          예비·초기 창업가의 아이디어를 사업으로 만드는 과정,
          <br />그 모든 단계에서 함께합니다.
        </p>

        {/* Tag badges */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-3 py-1.5 rounded-full glass text-white/60 font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/contact"
            className="px-8 py-3.5 rounded-xl text-base font-semibold bg-[#1A3C10] hover:bg-[#2D6A1C] text-white transition-colors shadow-[0_8px_24px_rgba(26,60,16,0.4)]"
          >
            문의하기 →
          </Link>
          <Link
            href="/service"
            className="px-8 py-3.5 rounded-xl text-base font-semibold glass hover:bg-white/10 text-white transition-colors"
          >
            서비스 보기
          </Link>
        </div>
      </div>
    </section>
  );
}
