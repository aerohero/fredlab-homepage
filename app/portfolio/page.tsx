import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { portfolioData } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "실적",
  description: "stayCurious — 2011년부터 현재까지 누적 창업교육·멘토링·특허전략 실적",
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Portfolio"
            title="실적"
            subtitle="2011년부터 현재까지 누적 창업교육 · 멘토링 · 특허전략 실적"
            center
          />

          <div className="space-y-6">
            {portfolioData.map((year) => (
              <GlassCard key={year.year} className="p-7">
                <h2 className="text-2xl font-bold text-white mb-5">{year.year}</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {year.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/65">
                      <span className="w-2 h-2 rounded-full bg-[#1A3C10] mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
