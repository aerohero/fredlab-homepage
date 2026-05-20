"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input type="hidden" name="access_key" value="36a362db-f3c0-47fb-9349-2c5da2114b0a" />
      <input type="hidden" name="subject" value="stayCurious 홈페이지 문의" />
      <input type="checkbox" name="botcheck" className="hidden" />

      <div>
        <label className="block text-xs font-semibold text-white/50 mb-2">이름 *</label>
        <input
          type="text"
          name="name"
          required
          placeholder="홍길동"
          className="w-full px-4 py-3 rounded-xl glass bg-transparent text-white placeholder-white/25 text-sm outline-none focus:ring-1 focus:ring-[#2D6A1C]"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-white/50 mb-2">이메일 *</label>
        <input
          type="email"
          name="email"
          required
          placeholder="hello@example.com"
          className="w-full px-4 py-3 rounded-xl glass bg-transparent text-white placeholder-white/25 text-sm outline-none focus:ring-1 focus:ring-[#2D6A1C]"
        />
      </div>

      <div>
        <label className="block text-xs font-semibold text-white/50 mb-2">문의 유형</label>
        <select
          name="inquiry_type"
          className="w-full px-4 py-3 rounded-xl glass bg-[#09090B] text-white/70 text-sm outline-none focus:ring-1 focus:ring-[#2D6A1C]"
        >
          <option value="">선택해주세요</option>
          <option value="coaching">창업 코칭/멘토링</option>
          <option value="program">창업교육 프로그램</option>
          <option value="patent">특허전략 컨설팅</option>
          <option value="lecture">강의/특강</option>
          <option value="other">기타</option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-semibold text-white/50 mb-2">문의 내용 *</label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="문의하실 내용을 자유롭게 작성해주세요."
          className="w-full px-4 py-3 rounded-xl glass bg-transparent text-white placeholder-white/25 text-sm outline-none focus:ring-1 focus:ring-[#2D6A1C] resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full py-3.5 rounded-xl bg-[#1A3C10] hover:bg-[#2D6A1C] disabled:opacity-50 text-white font-semibold text-sm transition-colors"
      >
        {status === "sending" ? "전송 중..." : "문의 보내기"}
      </button>

      {status === "success" && (
        <p className="text-sm text-[#2D6A1C] text-center">
          문의가 접수되었습니다. 빠르게 답변 드리겠습니다.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-400 text-center">
          오류가 발생했습니다. 다시 시도해주세요.
        </p>
      )}
    </form>
  );
}
