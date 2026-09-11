import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type AppPath = "/" | "/diensten" | "/over-ons" | "/contact";

type Variant = "primary" | "outline" | "ghost";

const base =
  "group inline-flex items-center gap-3 rounded-full text-sm font-medium transition-all duration-300 ease-out";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-foreground pl-6 pr-2 py-2 hover:bg-primary/90 hover:shadow-soft hover:-translate-y-0.5",
  outline:
    "bg-background text-foreground border border-border pl-6 pr-2 py-2 hover:border-primary/40 hover:shadow-soft hover:-translate-y-0.5",
  ghost:
    "text-current pl-1 pr-2 py-2 hover:opacity-80 underline-offset-8 hover:underline",
};

function Inner({ children, variant }: { children: ReactNode; variant: Variant }) {
  return (
    <>
      <span>{children}</span>
      <span
        className={cn(
          "grid size-8 shrink-0 place-items-center rounded-full transition-transform duration-300 group-hover:translate-x-0.5",
          variant === "primary" && "bg-primary-foreground/15",
          variant === "outline" && "bg-primary text-primary-foreground",
          variant === "ghost" && "border border-current/30",
        )}
      >
        <ArrowRight className="size-4" />
      </span>
    </>
  );
}

export function PillLink({
  to,
  children,
  variant = "primary",
  className,
}: {
  to: AppPath;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link to={to} className={cn(base, variants[variant], className)}>
      <Inner variant={variant}>{children}</Inner>
    </Link>
  );
}

export function PillAnchor({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <a href={href} className={cn(base, variants[variant], className)}>
      <Inner variant={variant}>{children}</Inner>
    </a>
  );
}

export function PillButton({
  children,
  variant = "primary",
  className,
  type = "submit",
}: {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  type?: "submit" | "button";
}) {
  return (
    <button type={type} className={cn(base, variants[variant], className)}>
      <Inner variant={variant}>{children}</Inner>
    </button>
  );
}
