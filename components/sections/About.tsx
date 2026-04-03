const highlights = [
  { label: "창업교육 전문", value: "5년+" },
  { label: "교육 수료생", value: "500+" },
  { label: "파트너 기관", value: "50+" },
  { label: "교육 프로그램", value: "20+" },
];

const expertise = [
  "린 스타트업 방법론",
  "비즈니스 모델 캔버스",
  "고객 개발 인터뷰",
  "MVP 설계 및 검증",
  "투자 유치 전략",
  "창업 생태계 네트워킹",
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24"
      style={{ background: "var(--surface)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Profile visual */}
          <div className="relative">
            <div
              className="w-full aspect-square max-w-sm mx-auto rounded-3xl flex items-center justify-center text-8xl"
              style={{
                background: "linear-gradient(135deg, rgba(26,60,16,0.1) 0%, rgba(115,250,121,0.15) 100%)",
                border: "1px solid var(--border)",
              }}
            >
              🌱
            </div>
            {/* Floating badge */}
            <div
              className="absolute -bottom-4 -right-4 glass rounded-2xl p-4 max-w-[180px]"
            >
              <p className="text-xs font-semibold" style={{ color: "var(--muted)" }}>
                전문 분야
              </p>
              <p className="text-sm font-bold mt-0.5" style={{ color: "var(--brand-forest)" }}>
                스타트업 창업교육
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p
              className="text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: "var(--brand-lime)", filter: "brightness(0.7)" }}
            >
              About
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              창업을 가르치는 것이 아니라
              <br />
              <span style={{ color: "var(--brand-forest)" }}>창업을 함께합니다.</span>
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "var(--muted)" }}>
              Fredlab은 예비창업자와 초기 스타트업이 아이디어를 검증하고 실제
              비즈니스로 성장시킬 수 있도록 돕는 창업교육 전문 기관입니다.
              이론이 아닌 실전 경험을 바탕으로 한 교육을 제공합니다.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: "var(--muted)" }}>
              공공기관, 대학, 민간 교육기관 등 다양한 파트너와 함께
              창업생태계 발전에 기여하고 있습니다.
            </p>

            {/* Expertise tags */}
            <div className="flex flex-wrap gap-2 mb-10">
              {expertise.map((e) => (
                <span
                  key={e}
                  className="text-sm px-3 py-1.5 rounded-lg font-medium"
                  style={{
                    background: "rgba(26,60,16,0.08)",
                    color: "var(--brand-forest)",
                  }}
                >
                  {e}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="rounded-xl p-4"
                  style={{ background: "var(--background)" }}
                >
                  <div
                    className="text-2xl font-bold font-display"
                    style={{ color: "var(--brand-forest)" }}
                  >
                    {h.value}
                  </div>
                  <div className="text-sm mt-0.5" style={{ color: "var(--muted)" }}>
                    {h.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
