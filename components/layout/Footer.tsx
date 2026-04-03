export default function Footer() {
  return (
    <footer
      className="mt-auto py-12 border-t"
      style={{ borderColor: "var(--border)", background: "var(--surface)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span
                className="font-display text-lg font-bold"
                style={{ color: "var(--brand-forest)" }}
              >
                Fredlab
              </span>
              <span
                className="text-xs px-1.5 py-0.5 rounded font-semibold"
                style={{
                  background: "var(--brand-lime)",
                  color: "var(--brand-forest)",
                }}
              >
                창업교육
              </span>
            </div>
            <p className="text-sm" style={{ color: "var(--muted)" }}>
              아이디어를 실제 비즈니스로.
              <br />
              창업 코칭 · 워크숍 · 기관 출강
            </p>
          </div>

          <div className="flex gap-12">
            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "var(--muted)" }}
              >
                서비스
              </p>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#services" className="hover:text-forest transition-colors">
                    1:1 코칭
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-forest transition-colors">
                    그룹 워크숍
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-forest transition-colors">
                    기관 출강
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p
                className="text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ color: "var(--muted)" }}
              >
                채널
              </p>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://brunch.co.kr/@fredlab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-forest transition-colors"
                  >
                    Brunch
                  </a>
                </li>
                <li>
                  <a
                    href="https://linktr.ee/fredlab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-forest transition-colors"
                  >
                    Linktree
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className="mt-10 pt-6 border-t text-xs"
          style={{ borderColor: "var(--border)", color: "var(--muted)" }}
        >
          © {new Date().getFullYear()} Fredlab. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
