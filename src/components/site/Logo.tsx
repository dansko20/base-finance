import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg viewBox="0 0 32 32" className="size-6" aria-hidden="true" fill="none">
        <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M6 19c3.5-4 6.5-4 10 0s6.5 4 10 0"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M6 13c3.5-4 6.5-4 10 0s6.5 4 10 0"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>
      <span className="text-sm font-semibold tracking-[0.18em]">DHCE CAPITAL</span>
    </span>
  );
}
