interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeader({ eyebrow, title, subtitle, center = false }: SectionHeaderProps) {
  const align = center ? "text-center" : "";
  return (
    <div className={`mb-12 ${align}`}>
      {eyebrow && (
        <span className="text-sm font-semibold tracking-widest uppercase text-[#2D6A1C] mb-3 block">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">{title}</h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
