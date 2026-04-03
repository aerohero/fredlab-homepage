const services = [
  {
    icon: "🎯",
    title: "1:1 창업 코칭",
    subtitle: "아이디어 디벨롭",
    description:
      "예비창업자와 초기 스타트업을 위한 맞춤형 1:1 코칭. 아이디어 검증부터 비즈니스 모델 수립까지.",
    badge: "인기",
    badgeColor: "var(--brand-lime)",
    href: "https://linktr.ee/fredlab",
    features: ["아이디어 검증", "BM 수립", "린 스타트업 방법론", "주 1회 세션"],
  },
  {
    icon: "👥",
    title: "그룹 워크숍",
    subtitle: "팀/단체 교육",
    description:
      "스타트업 팀, 사내 혁신 그룹, 예비창업자 커뮤니티를 위한 인터랙티브 워크숍 프로그램.",
    badge: null,
    href: "https://linktr.ee/fredlab",
    features: ["커스텀 커리큘럼", "실습 중심", "10~30인 최적", "온/오프라인"],
  },
  {
    icon: "🏛️",
    title: "기관 출강",
    subtitle: "공공기관 · 대학",
    description:
      "창업지원센터, 대학, 지자체 등 공공기관 창업교육 프로그램 기획 및 강연 서비스.",
    badge: "B2B",
    badgeColor: "var(--brand-sage)",
    href: "https://linktr.ee/fredlab",
    features: ["기관 맞춤 설계", "교육 콘텐츠 제작", "강사 파견", "성과 리포트"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--brand-lime)", filter: "brightness(0.7)" }}
          >
            Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            창업교육 서비스
          </h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--muted)" }}>
            목적에 맞는 교육 방식으로, 실질적인 창업 역량을 키웁니다.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <a
              key={service.title}
              href={service.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-2xl p-6 flex flex-col gap-4 group hover:-translate-y-1 transition-all duration-200"
            >
              <div className="flex items-start justify-between">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{ background: "rgba(26,60,16,0.08)" }}
                >
                  {service.icon}
                </div>
                {service.badge && (
                  <span
                    className="text-xs font-bold px-2 py-1 rounded-full"
                    style={{
                      background: service.badgeColor,
                      color: "var(--brand-forest)",
                    }}
                  >
                    {service.badge}
                  </span>
                )}
              </div>

              <div>
                <p className="text-xs font-medium mb-1" style={{ color: "var(--muted)" }}>
                  {service.subtitle}
                </p>
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  {service.description}
                </p>
              </div>

              <ul className="flex flex-col gap-1.5 mt-auto">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <span style={{ color: "var(--brand-forest)" }}>✓</span>
                    <span style={{ color: "var(--muted)" }}>{f}</span>
                  </li>
                ))}
              </ul>

              <div
                className="flex items-center gap-1 text-sm font-semibold mt-2 group-hover:gap-2 transition-all"
                style={{ color: "var(--brand-forest)" }}
              >
                자세히 보기 <span>→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
