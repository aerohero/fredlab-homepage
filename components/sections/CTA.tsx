import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-10 sm:p-16 text-center overflow-hidden glass-elevated">
          {/* Decorative orb */}
          <div
            className="absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl opacity-15 pointer-events-none"
            style={{ background: "#1A3C10", transform: "translate(30%, -30%)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-48 h-48 rounded-full blur-3xl opacity-10 pointer-events-none"
            style={{ background: "#2D6A1C", transform: "translate(-20%, 20%)" }}
          />

          <div className="relative z-10">
            <span className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6 bg-[#1A3C10] text-white/80 border border-[#2D6A1C]/50">
              지금 시작하세요
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              비즈니스를 통한 가치창출을
              <br />
              함께 합니다.
            </h2>
            <p className="text-base sm:text-lg text-white/60 max-w-xl mx-auto mb-10 leading-relaxed">
              아이디어 검증부터 사업계획서, 정부지원사업 전략까지
              <br />
              언제든지 연락주세요.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-xl text-base font-semibold bg-[#1A3C10] hover:bg-[#2D6A1C] text-white transition-colors shadow-[0_8px_24px_rgba(26,60,16,0.4)]"
              >
                문의하기 →
              </Link>
            </div>

            <p className="mt-8 text-sm text-white/30">
              instagram.com/fredlab.dk · linktr.ee/fredlab · brunch.co.kr/@fredlab
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
