import React from "react";

interface PillLabelProps {
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}

export function PillLabel({ children, dark = false, className = "" }: PillLabelProps) {
  if (dark) {
    return (
      <span
        className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 font-mono text-[10px] font-medium uppercase tracking-monowide bg-primary-bright/10 text-primary-bright border border-primary-bright/30 transition-colors ${className}`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-primary-bright" aria-hidden="true" />
        {children}
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 font-mono text-[10px] font-medium uppercase tracking-monowide bg-primary-soft text-primary-ink border border-primary-border transition-colors ${className}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-primary" aria-hidden="true" />
      {children}
    </span>
  );
}
