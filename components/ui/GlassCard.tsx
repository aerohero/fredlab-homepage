import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  elevated?: boolean;
  id?: string;
}

export default function GlassCard({ children, className = "", elevated = false, id }: GlassCardProps) {
  const base = elevated ? "glass-elevated" : "glass";
  return (
    <div id={id} className={`${base} rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] ${className}`}>
      {children}
    </div>
  );
}
