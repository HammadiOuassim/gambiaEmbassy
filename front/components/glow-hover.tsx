import type { ReactNode } from "react";

const GLOW =
  "conic-gradient(from 200deg at 50% 50%, #fb7185, #c084fc, #fb923c, #f472b6, #818cf8, #fb7185)";

export function GlowHover({
  children,
  className = "",
  glowClassName = "rounded-[1.6rem]",
}: {
  children: ReactNode;
  className?: string;
  glowClassName?: string;
}) {
  return (
    <div className={`group relative z-0 hover:z-20 ${className}`}>
      <span
        aria-hidden
        className={`pointer-events-none absolute -inset-2 opacity-0 blur-[18px] transition-opacity duration-300 group-hover:opacity-100 ${glowClassName}`}
        style={{ background: GLOW }}
      />
      {children}
    </div>
  );
}
