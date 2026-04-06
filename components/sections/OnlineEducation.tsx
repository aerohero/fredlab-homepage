"use client";

import { useRef } from "react";
import Image from "next/image";
import GlassCard from "@/components/ui/GlassCard";
import SectionHeader from "@/components/ui/SectionHeader";
import { courseInfo, brunchArticles } from "@/data/education";

function ScrollArrow({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full glass hover:bg-white/10 text-white/60 hover:text-white transition-colors shrink-0"
      aria-label={direction === "left" ? "이전" : "다음"}
    >
      {direction === "left" ? "\u2190" : "\u2192"}
    </button>
  );
}

function useCarousel() {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: "left" | "right") => {
    if (!ref.current) return;
    const amount = ref.current.clientWidth * 0.8;
    ref.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };
  return { ref, scrollLeft: () => scroll("left"), scrollRight: () => scroll("right") };
}

export default function OnlineEducation() {
  const videoCarousel = useCarousel();
  const brunchCarousel = useCarousel();

  return (
    <section id="education" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Online Education"
          title="온라인 교육 & 콘텐츠"
          subtitle="영상 강의와 창업 인사이트 칼럼으로 언제 어디서나 학습하세요"
          center
        />

        {/* Class101 Course Feature */}
        <GlassCard elevated className="p-6 sm:p-8 mb-10">
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-center">
            {/* Thumbnail */}
            <div className="w-full lg:w-1/2 shrink-0">
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
                <Image
                  src={courseInfo.thumbnail}
                  alt={courseInfo.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>

            {/* Course Info */}
            <div className="flex-1 min-w-0">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-full bg-[#1A3C10]/80 text-white border border-[#2D6A1C]/50 mb-4">
                Class101
              </span>
              <h3 className="text-xl sm:text-2xl font-bold leading-tight mb-3">
                {courseInfo.title}
              </h3>
              <p className="text-sm text-white/60 leading-relaxed mb-4">
                {courseInfo.subtitle}
              </p>
              <div className="flex items-center gap-4 text-sm text-white/50 mb-6">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#2D6A1C]" />
                  {courseInfo.duration}
                </span>
              </div>
              <a
                href={courseInfo.productUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-[#1A3C10] hover:bg-[#2D6A1C] text-white transition-colors"
              >
                강의 보러가기 &rarr;
              </a>
            </div>
          </div>
        </GlassCard>

        {/* Video Preview Carousel */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-lg font-bold">강의 미리보기</h3>
            <div className="flex items-center gap-2">
              <ScrollArrow direction="left" onClick={videoCarousel.scrollLeft} />
              <ScrollArrow direction="right" onClick={videoCarousel.scrollRight} />
            </div>
          </div>

          <div
            ref={videoCarousel.ref}
            className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {courseInfo.previews.map((preview, i) => (
              <a
                key={i}
                href={preview.href}
                target="_blank"
                rel="noopener noreferrer"
                className="snap-start shrink-0 w-[280px] sm:w-[320px] group"
              >
                <GlassCard className="p-5 h-full hover:bg-white/8 transition-all group-hover:-translate-y-0.5">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 bg-[#1A3C10]/30">
                    <svg
                      className="w-6 h-6 text-[#2D6A1C]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-sm font-semibold mb-1">{preview.title}</p>
                  <p className="text-xs text-white/50">
                    Class101에서 보기 &rarr;
                  </p>
                </GlassCard>
              </a>
            ))}
          </div>
        </div>

        {/* Brunch Articles Carousel */}
        <div>
          <div className="flex items-center justify-between mb-5">
            <h3 className="text-lg font-bold">
              창업 인사이트 &mdash; 브런치 칼럼
            </h3>
            <div className="flex items-center gap-2">
              <ScrollArrow direction="left" onClick={brunchCarousel.scrollLeft} />
              <ScrollArrow direction="right" onClick={brunchCarousel.scrollRight} />
            </div>
          </div>

          <div
            ref={brunchCarousel.ref}
            className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {brunchArticles.map((article) => (
              <a
                key={article.id}
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className="snap-start shrink-0 w-[260px] sm:w-[280px] group"
              >
                <GlassCard className="p-5 h-full hover:bg-white/8 transition-all group-hover:-translate-y-0.5 flex flex-col">
                  <span className="text-xs text-white/40 mb-3">{article.date}</span>
                  <h4 className="text-sm font-bold leading-snug mb-2">
                    {article.title}
                  </h4>
                  <p className="text-xs text-white/50 leading-relaxed mb-4 flex-1">
                    {article.subtitle}
                  </p>
                  <span className="text-xs font-semibold text-[#2D6A1C] group-hover:translate-x-0.5 transition-transform">
                    브런치에서 읽기 &rarr;
                  </span>
                </GlassCard>
              </a>
            ))}
          </div>

          <div className="text-center mt-6">
            <a
              href="https://brunch.co.kr/@fredlab"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass hover:bg-white/10 text-sm font-semibold text-white transition-colors"
            >
              브런치에서 더 읽기 &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
