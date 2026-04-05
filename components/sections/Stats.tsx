import { stats } from "@/data/services";
import GlassCard from "@/components/ui/GlassCard";

export default function Stats() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <GlassCard key={stat.label} className="p-6 text-center">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-1">
                {stat.value}
                <span className="text-2xl text-[#2D6A1C]">{stat.unit}</span>
              </div>
              <div className="text-sm text-white/50 leading-snug">{stat.label}</div>
            </GlassCard>
          ))}
        </div>
        <p className="text-xs text-white/30 text-center mt-4">
          ※ 코칭/멘토링 횟수 및 팀 수는 2026.03. 기준
        </p>
      </div>
    </section>
  );
}
