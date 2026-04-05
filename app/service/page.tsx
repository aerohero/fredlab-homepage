import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeader from "@/components/ui/SectionHeader";
import Link from "next/link";

export const metadata: Metadata = {
  title: "서비스",
  description: "프레드랩 창업 지원 서비스 — 창업교육 프로그램, 멘토링, 특허전략 컨설팅, 강의/특강",
};

const serviceDetails = [
  {
    id: "program",
    title: "창업교육 프로그램 운영",
    description:
      "예비/초기/로컬 창업가를 대상으로 창업 아이템 발굴, 시장검증을 통한 BM 고도화(아이디어 디벨롭), 사업계획수립을 주요내용으로 한 창업가 육성 프로그램을 기획하고 운영합니다.",
    includes: [
      "사업계획서 및 IR피칭(덱) 코칭",
      "창업 아이디어 디벨롭 코칭",
      "해커톤",
      "커리큘럼 설계",
    ],
    curriculum: [
      { step: "1단계", content: "창업가 탐구 및 아이디어 탐색 (지역자원조사)" },
      { step: "2단계", content: "아이디어 디벨롭" },
      { step: "3단계", content: "사업계획 구체화 및 피칭덱 작성/발표" },
      { step: "4단계", content: "선배 창업가 멘토링" },
    ],
  },
  {
    id: "mentoring",
    title: "커뮤니케이션형 멘토링",
    description:
      "창업에 성공하기 위해 필요한 요소로 푸쉬하고 압박하는 것을 지양하고, 창업가의 생각을 구체화시키며, 창업가의 의지가 무르익을 수 있도록, 그리고 그 시간과 과정을 통해 창업가 내면의 가능성이 발현될 수 있도록 소통형 멘토링을 지향합니다.",
    quote: "솔루션의 제시나 평가를 지양하고, 창업가가 가진 고민에 대해 함께 해결책을 모색합니다.",
  },
  {
    id: "patent",
    title: "특허전략 컨설팅 및 PM",
    description:
      "경영 관점에서 특허를 고민하고 전략 및 연구개발, 기술로드맵을 지원합니다.",
    items: ["선행기술조사", "특허맵 (특허동향조사)", "IP-R&D", "SMK"],
  },
  {
    id: "lecture",
    title: "강의/특강",
    description:
      "워크숍을 통한 학습자 주도형 교육을 추구합니다.",
    topics: [
      { no: 1, content: "(기술)창업 아이템 발굴", type: "강의 및 워크숍" },
      { no: 2, content: "고객 분석", type: "강의 및 워크숍" },
      { no: 3, content: "MVP (핵심기능제품)", type: "강의 및 워크숍" },
      { no: 4, content: "이해관계자 분석 기반 비즈니스 모델 구조화", type: "강의 및 워크숍" },
      { no: 5, content: "피칭덱(사업계획서) 작성방법", type: "강의 및 워크숍" },
      { no: 6, content: "로컬창업전략", type: "특강" },
      { no: 7, content: "온라인 마케팅의 중요성과 접근방법", type: "특강" },
      { no: 8, content: "창업가에게 필요한 정부지원사업 이해하기", type: "특강" },
      { no: 9, content: "창업가가 알아야 할 지식재산제도", type: "특강" },
      { no: 10, content: "창업가가 알아야 할 세무제도", type: "특강" },
      { no: 11, content: "창업가가 알아야 할 노무제도", type: "특강" },
      { no: 12, content: "특허맵, IP-R&D 실무역량교육", type: "강의 및 실습" },
    ],
  },
];

export default function ServicePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Service"
            title="프레드랩이 제공하는 창업 지원 서비스"
            subtitle="예비·초기 창업가를 위한 맞춤형 린스타트업 · 로컬창업 교육, 코칭, 특허 · 브랜드 전략"
            center
          />

          <div className="space-y-8">
            {serviceDetails.map((service) => (
              <GlassCard key={service.id} className="p-8" id={service.id}>
                <h2 className="text-xl font-bold text-white mb-4">{service.title}</h2>
                <p className="text-white/65 leading-relaxed mb-6">{service.description}</p>

                {"quote" in service && service.quote && (
                  <blockquote className="border-l-2 border-[#1A3C10] pl-4 italic text-white/50 mb-6">
                    {service.quote}
                  </blockquote>
                )}

                {"includes" in service && service.includes && (
                  <div className="mb-6">
                    <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-3">포함 내용</p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.includes.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-white/65">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2D6A1C]" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {"curriculum" in service && service.curriculum && (
                  <div className="mb-4">
                    <p className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-3">커리큘럼</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.curriculum.map((c) => (
                        <div key={c.step} className="glass rounded-xl px-4 py-3">
                          <span className="text-xs text-[#2D6A1C] font-bold">{c.step}</span>
                          <p className="text-sm text-white/70 mt-1">{c.content}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {"items" in service && service.items && (
                  <div className="flex flex-wrap gap-2">
                    {service.items.map((item) => (
                      <span key={item} className="text-xs px-3 py-1.5 rounded-full glass text-white/65">
                        {item}
                      </span>
                    ))}
                  </div>
                )}

                {"topics" in service && service.topics && (
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="text-left py-2 pr-4 text-white/40 font-medium w-8">No</th>
                          <th className="text-left py-2 pr-4 text-white/40 font-medium">내용</th>
                          <th className="text-left py-2 text-white/40 font-medium">방식</th>
                        </tr>
                      </thead>
                      <tbody>
                        {service.topics.map((t) => (
                          <tr key={t.no} className="border-b border-white/5">
                            <td className="py-2.5 pr-4 text-white/30">{t.no}</td>
                            <td className="py-2.5 pr-4 text-white/70">{t.content}</td>
                            <td className="py-2.5 text-white/40 text-xs">{t.type}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </GlassCard>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#1A3C10] hover:bg-[#2D6A1C] text-white font-semibold transition-colors"
            >
              문의하기 →
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
