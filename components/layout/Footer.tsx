import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto py-12 border-t border-white/10 bg-white/3">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="font-display text-lg font-bold text-white">FREDLAB</span>
              <span className="text-xs px-1.5 py-0.5 rounded font-semibold bg-[#1A3C10] text-white/90">
                창업교육
              </span>
            </div>
            <p className="text-sm text-white/50 leading-relaxed">
              비즈니스를 통한 가치창출을 함께 합니다.
              <br />
              창업교육 · 멘토링 · 특허전략 · 강의/특강
            </p>
          </div>

          <div className="flex gap-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-3 text-white/40">
                페이지
              </p>
              <ul className="space-y-2 text-sm text-white/60">
                {[
                  { href: "/service", label: "서비스" },
                  { href: "/portfolio", label: "실적" },
                  { href: "/about", label: "소개" },
                  { href: "/contact", label: "문의" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-3 text-white/40">
                채널
              </p>
              <ul className="space-y-2 text-sm text-white/60">
                <li>
                  <a
                    href="https://www.instagram.com/fredlab.dk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://brunch.co.kr/@fredlab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Brunch
                  </a>
                </li>
                <li>
                  <a
                    href="https://linktr.ee/fredlab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Linktree
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 text-xs text-white/30 space-y-1">
          <p>서울시 성동구 왕십리로 326, 623A</p>
          <p>대표자: 김대홍 · 사업자등록번호: 501-64-20821 · 통신판매업신고: 2021-서울성동-02746</p>
          <p className="mt-2">© {new Date().getFullYear()} FREDLAB · 창업코치 김대홍. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
