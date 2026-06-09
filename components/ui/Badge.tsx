import type { ReactNode } from "react";

export function Badge({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-brand-200/70 bg-brand-50/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-700 dark:border-brand-400/20 dark:bg-brand-500/10 dark:text-brand-300 ${className}`}
    >
      {children}
    </span>
  );
}
