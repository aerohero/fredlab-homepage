import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeader from "@/components/ui/SectionHeader";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "문의",
  description: "stayCurious 창업교육 · 멘토링 문의 — 언제든지 연락주세요.",
};

const contactInfo = [
  { label: "Instagram", value: "instagram.com/fredlab.dk", href: "https://www.instagram.com/fredlab.dk" },
  { label: "Linktree", value: "linktr.ee/fredlab", href: "https://linktr.ee/fredlab" },
  { label: "Brunch", value: "brunch.co.kr/@fredlab", href: "https://brunch.co.kr/@fredlab" },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Contact"
            title="문의하기"
            subtitle="창업교육, 멘토링, 특허전략 관련 문의를 남겨주세요."
            center
          />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-4">
              <GlassCard className="p-6">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-4">채널</h3>
                <ul className="space-y-3">
                  {contactInfo.map((info) => (
                    <li key={info.label}>
                      <p className="text-xs text-white/40 mb-0.5">{info.label}</p>
                      <a
                        href={info.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[#2D6A1C] hover:text-[#4a9a2c] transition-colors"
                      >
                        {info.value}
                      </a>
                    </li>
                  ))}
                </ul>
              </GlassCard>

              <GlassCard className="p-6">
                <p className="text-sm text-white/60 leading-relaxed">
                  창업교육 프로그램, 멘토링, 특허전략 컨설팅, 강의/특강 문의를
                  아래 폼으로 보내주시면 빠르게 답변 드리겠습니다.
                </p>
              </GlassCard>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              <GlassCard className="p-7">
                <ContactForm />
              </GlassCard>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
