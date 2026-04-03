export default function CTA() {
  return (
    <section
      id="contact"
      className="py-24"
      style={{ background: "var(--surface)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, var(--brand-forest) 0%, var(--brand-forest-light) 100%)",
          }}
        >
          {/* Decorative orbs */}
          <div
            className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20"
            style={{ background: "var(--brand-lime)", transform: "translate(30%, -30%)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-48 h-48 rounded-full blur-3xl opacity-15"
            style={{ background: "var(--brand-sage)", transform: "translate(-20%, 20%)" }}
          />

          <div className="relative z-10">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6"
              style={{
                background: "var(--brand-lime)",
                color: "var(--brand-forest)",
              }}
            >
              지금 시작하세요
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              창업 여정을 함께 시작할 준비가
              <br />
              되셨나요?
            </h2>
            <p className="text-base sm:text-lg mb-10" style={{ color: "rgba(255,255,255,0.75)" }}>
              1:1 코칭 신청, 프로그램 문의, 기관 출강 제안 모두 환영합니다.
              <br />
              링크트리에서 원하는 방식으로 연결하세요.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://linktr.ee/fredlab"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-xl text-base font-semibold transition-all hover:opacity-90 hover:-translate-y-0.5"
                style={{
                  background: "var(--brand-lime)",
                  color: "var(--brand-forest)",
                }}
              >
                코칭 신청하기
              </a>
              <a
                href="https://linktr.ee/fredlab"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-xl text-base font-semibold transition-all hover:-translate-y-0.5"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  color: "white",
                  border: "1px solid rgba(255,255,255,0.25)",
                  backdropFilter: "blur(8px)",
                }}
              >
                프로그램 소개서 받기
              </a>
            </div>

            <p className="mt-8 text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
              linktr.ee/fredlab · brunch.co.kr/@fredlab
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
