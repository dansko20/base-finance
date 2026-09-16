import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import type { AppPath } from "./PillButton";

type NavLink = { label: string; to: AppPath; ariaLabel: string };
type CardNavItem = { label: string; className: string; links: NavLink[] };

const items: CardNavItem[] = [
  {
    label: "Advies",
    className: "bg-primary text-primary-foreground",
    links: [
      { label: "Hypotheekadvies", to: "/hypotheekadvies", ariaLabel: "Bekijk hypotheekadvies" },
      { label: "Beleggingsadvies", to: "/beleggingsadvies", ariaLabel: "Bekijk beleggingsadvies" },
      { label: "Rekentools", to: "/rekentools", ariaLabel: "Bekijk rekentools" },
    ],
  },
  {
    label: "BASE FINANCE",
    className: "bg-foreground text-background",
    links: [
      { label: "Over ons", to: "/over-ons", ariaLabel: "Lees over BASE FINANCE" },
      { label: "Onze werkwijze", to: "/werkwijze", ariaLabel: "Bekijk onze werkwijze" },
    ],
  },
  {
    label: "Kennismaken",
    className: "bg-accent text-accent-foreground",
    links: [
      { label: "Plan een gesprek", to: "/plan-een-gesprek", ariaLabel: "Plan een gesprek" },
      { label: "Contactgegevens", to: "/contactgegevens", ariaLabel: "Bekijk contactgegevens" },
    ],
  },
];

export function CardNav({ className }: { className?: string }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [expanded, setExpanded] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    setExpanded(false);
    gsap.set(navRef.current, { height: 60 });
  }, [pathname]);

  const calculateHeight = () => {
    if (typeof window === "undefined") return 260;
    return window.matchMedia("(max-width: 768px)").matches ? 390 : 260;
  };

  useLayoutEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const ctx = gsap.context(() => {
      gsap.set(nav, { height: 60, overflow: "hidden" });
      gsap.set(cardsRef.current, { y: 45, opacity: 0 });
      timelineRef.current = gsap
        .timeline({ paused: true })
        .to(nav, { height: calculateHeight, duration: 0.42, ease: "power3.out" })
        .to(
          cardsRef.current,
          { y: 0, opacity: 1, duration: 0.4, ease: "power3.out", stagger: 0.08 },
          "-=0.16",
        );
    }, nav);

    const resize = () => {
      if (expanded) gsap.set(nav, { height: calculateHeight() });
    };
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      timelineRef.current?.kill();
      ctx.revert();
    };
  }, [expanded]);

  useLayoutEffect(() => {
    if (!expanded) return;
    timelineRef.current?.progress(0).play();
  }, [expanded]);

  const toggle = () => {
    if (!expanded) {
      setExpanded(true);
      return;
    }
    timelineRef.current?.eventCallback("onReverseComplete", () => setExpanded(false));
    timelineRef.current?.reverse();
  };

  const overlay = pathname === "/";

  return (
    <div
      className={cn(
        "fixed left-1/2 top-5 z-50 w-[calc(100%-2rem)] max-w-[860px] -translate-x-1/2 md:top-7",
        className,
      )}
    >
      <div
        ref={navRef}
        className="relative rounded-xl border border-primary bg-background shadow-header"
      >
        <div className="absolute inset-x-0 top-0 z-10 grid h-[60px] grid-cols-[1fr_auto_1fr] items-center rounded-xl bg-primary px-3 sm:px-4">
          <button
            type="button"
            onClick={toggle}
            aria-label={expanded ? "Menu sluiten" : "Menu openen"}
            aria-expanded={expanded}
            className="group justify-self-start p-2"
          >
            <span className="sr-only">Menu</span>
            <span className="flex w-7 flex-col gap-1.5">
              <span
                className={cn(
                  "h-px w-full bg-foreground transition-transform duration-300",
                  expanded && "translate-y-[3.5px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "h-px w-full bg-foreground transition-transform duration-300",
                  expanded && "-translate-y-[3.5px] -rotate-45",
                )}
              />
            </span>
          </button>

          <Link to="/" aria-label="BASE FINANCE home" onClick={() => setExpanded(false)}>
            <Logo />
          </Link>

          <Link
            to="/plan-een-gesprek"
            onClick={() => setExpanded(false)}
            className="justify-self-end rounded-lg bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-all duration-300 hover:opacity-85 hover:shadow-soft"
          >
            <span className="hidden sm:inline">Plan een gesprek</span>
            <span className="sm:hidden">Contact</span>
          </Link>
        </div>

        <div
          className={cn(
            "absolute inset-x-0 bottom-0 top-[60px] grid gap-2 p-2 md:grid-cols-3",
            expanded ? "visible pointer-events-auto" : "invisible pointer-events-none",
          )}
        >
          {items.map((item, index) => (
            <div
              key={item.label}
              ref={(element) => {
                cardsRef.current[index] = element;
              }}
              className={cn(
                "flex min-h-[96px] flex-col rounded-lg p-4 md:min-h-0",
                item.className,
              )}
            >
              <p className="text-xl font-medium">{item.label}</p>
              <div className="mt-auto flex flex-col gap-1 pt-3">
                {item.links.map((link) => (
                  <Link
                    key={link.label}
                    to={link.to}
                    aria-label={link.ariaLabel}
                    onClick={() => setExpanded(false)}
                    className="group/link inline-flex items-center gap-1.5 text-sm transition-opacity hover:opacity-70"
                  >
                    {link.label}
                    <ArrowUpRight className="size-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {overlay && !expanded ? (
        <span className="sr-only">Navigatie over de homepage-afbeelding</span>
      ) : null}
    </div>
  );
}