import GlassCard from "@/components/ui/GlassCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Client Stories"
          title="코칭 성과 사례"
          subtitle="실제 코칭·멘토링을 통해 함께 이뤄낸 창업 성과"
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <GlassCard key={t.id} className="p-7 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#1A3C10]/80 text-white border border-[#2D6A1C]/50">
                  {t.badge}
                </span>
                <span className="text-xs text-white/40">{t.industry}</span>
              </div>
              <blockquote className="text-sm text-white/75 leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
