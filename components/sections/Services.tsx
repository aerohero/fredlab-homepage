import Link from "next/link";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Services"
          title="프레드랩 창업 지원 서비스"
          subtitle="예비·초기 창업가를 위한 맞춤형 린스타트업 · 로컬창업 교육, 코칭, 특허 · 브랜드 전략"
          center
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <GlassCard key={service.id} className="p-7 group hover:bg-white/8 transition-colors">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-lg font-bold text-white">{service.title}</h3>
                <span className="text-white/30 text-xl group-hover:text-white/60 transition-colors">→</span>
              </div>
              <p className="text-sm text-white/60 leading-relaxed mb-5">{service.shortDesc}</p>
              <Link
                href={service.href}
                className="text-sm font-semibold text-[#2D6A1C] hover:text-[#4a9a2c] transition-colors"
              >
                자세히 보기 →
              </Link>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
