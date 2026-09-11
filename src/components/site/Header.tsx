import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import { PillLink, type AppPath } from "./PillButton";

const nav: { to: AppPath; label: string }[] = [
  { to: "/", label: "Home" },
  { to: "/diensten", label: "Diensten" },
  { to: "/over-ons", label: "Over ons" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const overlay = pathname === "/" && !scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out",
          scrolled
            ? "bg-background/95 py-3 shadow-header backdrop-blur-md"
            : "bg-transparent py-6",
        )}
      >
        <div
          className={cn(
            "mx-auto grid max-w-[1400px] grid-cols-[auto_1fr_auto] items-center gap-4 px-5 transition-colors duration-500 sm:px-8",
            overlay ? "text-white" : "text-foreground",
          )}
        >
          <button
            type="button"
            onClick={() => setOpen(true)}
            className={cn(
              "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors duration-300",
              overlay
                ? "border-white/40 hover:bg-white/10"
                : "border-border hover:bg-secondary",
            )}
          >
            <Menu className="size-4" />
            <span className="hidden sm:inline">Menu</span>
          </button>

          <Link to="/" className="justify-self-center" aria-label="DHCE Capital home">
            <Logo />
          </Link>

          <div className="justify-self-end">
            <Link
              to="/contact"
              className={cn(
                "hidden rounded-full px-5 py-2 text-sm transition-colors duration-300 md:inline-flex",
                overlay
                  ? "border border-white/40 hover:bg-white/10"
                  : "bg-primary text-primary-foreground hover:bg-primary/90",
              )}
            >
              Plan een gesprek
            </Link>
            <Link
              to="/contact"
              className="md:hidden text-sm underline-offset-4 hover:underline"
            >
              Contact
            </Link>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-primary text-primary-foreground"
          >
            <div className="mx-auto flex h-full max-w-[1400px] flex-col px-5 py-6 sm:px-8">
              <div className="flex items-center justify-between">
                <Logo />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-4 py-2 text-sm transition-colors hover:bg-primary-foreground/10"
                >
                  <X className="size-4" /> Sluiten
                </button>
              </div>

              <nav className="mt-auto mb-auto flex flex-col gap-2">
                {nav.map((item, i) => (
                  <motion.div
                    key={item.to}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 * i + 0.1, duration: 0.6 }}
                  >
                    <Link
                      to={item.to}
                      className="block text-4xl font-medium tracking-tight transition-opacity hover:opacity-70 sm:text-6xl"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-primary-foreground/20 pt-6 text-sm">
                <a href="tel:+31102000000" className="hover:opacity-70">
                  +31 (0)10 200 00 00
                </a>
                <a href="mailto:advies@dhcecapital.nl" className="hover:opacity-70">
                  advies@dhcecapital.nl
                </a>
                <PillLink to="/contact" variant="outline">
                  Plan een gesprek
                </PillLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
