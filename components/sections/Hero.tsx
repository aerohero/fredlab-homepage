export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(26,60,16,0.15) 0%, transparent 70%), var(--background)",
        }}
      />
      {/* Decorative orb */}
      <div
        className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full blur-3xl -z-10 opacity-20"
        style={{ background: "var(--brand-lime)" }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8">
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ background: "var(--brand-lime)" }}
          />
          <span className="text-sm font-medium" style={{ color: "var(--muted)" }}>
            창업교육 전문가 · 1:1 코칭 가능
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight">
          아이디어를
          <br />
          <span
            className="font-display"
            style={{ color: "var(--brand-forest)" }}
          >
            실제 비즈니스로.
          </span>
        </h1>

        <p
          className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          스타트업 교육 · 1:1 창업 코칭 · 기관 출강
          <br />
          검증된 방법론으로 창업 여정을 함께합니다.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-xl text-base font-semibold transition-all hover:opacity-90 hover:-translate-y-0.5 shadow-lg"
            style={{
              background: "var(--brand-forest)",
              color: "white",
              boxShadow: "0 8px 24px rgba(26,60,16,0.3)",
            }}
          >
            1:1 코칭 신청하기
          </a>
          <a
            href="#services"
            className="px-8 py-3.5 rounded-xl text-base font-semibold glass transition-all hover:-translate-y-0.5"
            style={{ color: "var(--foreground)" }}
          >
            서비스 알아보기 →
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            { value: "500+", label: "교육 수료생" },
            { value: "50+", label: "기관 출강" },
            { value: "5년+", label: "창업교육 경력" },
          ].map((stat) => (
            <div key={stat.label} className="glass rounded-2xl p-4 text-center">
              <div
                className="text-2xl font-bold font-display"
                style={{ color: "var(--brand-forest)" }}
              >
                {stat.value}
              </div>
              <div className="text-xs mt-1" style={{ color: "var(--muted)" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
