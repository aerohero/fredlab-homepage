import Link from "next/link";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { previewItems } from "@/data/portfolio";

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Portfolio"
          title="주요 실적"
          subtitle="2011년부터 현재까지 창업교육·멘토링·특허전략 누적 실적"
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {previewItems.map((item, i) => (
            <GlassCard key={i} className="px-5 py-4 flex items-center gap-3 hover:bg-white/8 transition-colors">
              <span className="w-2 h-2 rounded-full bg-[#1A3C10] shrink-0" />
              <span className="text-sm text-white/70 leading-snug">{item}</span>
            </GlassCard>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass hover:bg-white/10 text-sm font-semibold text-white transition-colors"
          >
            전체 실적 보기 →
          </Link>
        </div>
      </div>
    </section>
  );
}
