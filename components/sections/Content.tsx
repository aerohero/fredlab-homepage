const contentLinks = [
  {
    platform: "Brunch",
    icon: "✍️",
    description: "창업과 스타트업에 대한 인사이트를 담은 글",
    href: "https://brunch.co.kr/@fredlab",
    cta: "브런치 읽기",
  },
  {
    platform: "Class101",
    icon: "🎓",
    description: "온라인 강의 — 창업 아이디어 디벨롭 코칭",
    href: "https://linktr.ee/fredlab",
    cta: "강의 보기",
  },
  {
    platform: "소개서",
    icon: "📋",
    description: "로컬창업교육 프로그램 소개서 다운로드",
    href: "https://linktr.ee/fredlab",
    cta: "소개서 받기",
  },
  {
    platform: "Archive",
    icon: "🗂️",
    description: "창업 관련 자료 및 레퍼런스 아카이브",
    href: "https://linktr.ee/fredlab",
    cta: "자료 보기",
  },
];

export default function Content() {
  return (
    <section id="content" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-3"
            style={{ color: "var(--brand-lime)", filter: "brightness(0.7)" }}
          >
            Content
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">콘텐츠</h2>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--muted)" }}>
            창업에 관한 인사이트와 자료를 공유합니다.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {contentLinks.map((item) => (
            <a
              key={item.platform}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-2xl p-6 flex items-center gap-5 group hover:-translate-y-0.5 transition-all"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
                style={{ background: "rgba(26,60,16,0.08)" }}
              >
                {item.icon}
              </div>
              <div className="min-w-0">
                <p className="text-xs font-semibold mb-0.5" style={{ color: "var(--muted)" }}>
                  {item.platform}
                </p>
                <p className="text-sm font-medium leading-snug truncate">
                  {item.description}
                </p>
              </div>
              <span
                className="ml-auto shrink-0 text-sm font-semibold group-hover:translate-x-0.5 transition-transform"
                style={{ color: "var(--brand-forest)" }}
              >
                →
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
