import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";
import { PillLink, type AppPath } from "./PillButton";

const menu: { to: AppPath; label: string }[] = [
  { to: "/hypotheekadvies", label: "Hypotheekadvies" },
  { to: "/beleggingsadvies", label: "Beleggingsadvies" },
  { to: "/rekentools", label: "Rekentools" },
  { to: "/over-ons", label: "Over ons" },
  { to: "/werkwijze", label: "Onze werkwijze" },
  { to: "/contactgegevens", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1400px] px-5 py-16 sm:px-8">
        <Logo className="text-primary" />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <h2 className="max-w-sm text-3xl font-medium sm:text-4xl">
              Samenwerken start met een goed gesprek
            </h2>
            <div className="mt-8 space-y-3 text-muted-foreground">
              <p>
                <a href="tel:+31102000000" className="hover:text-foreground">
                  +31 (0)10 200 00 00
                </a>
              </p>
              <p>
                <a href="mailto:advies@basefinance.nl" className="hover:text-foreground">
                  advies@basefinance.nl
                </a>
              </p>
              <p>Weena 505, 3013 AL Rotterdam</p>
            </div>
            <div className="mt-8">
              <PillLink to="/plan-een-gesprek">Neem contact op</PillLink>
            </div>
          </div>

          <div className="lg:border-l lg:border-border lg:pl-12">
            <p className="label-eyebrow">Menu</p>
            <ul className="mt-6 space-y-4 text-muted-foreground">
              {menu.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="transition-colors hover:text-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="label-eyebrow">Onze expertises</p>
            <ul className="mt-6 space-y-4 text-muted-foreground">
              <li><Link to="/hypotheekadvies" className="transition-colors hover:text-foreground">Hypotheekadvies</Link></li>
              <li><Link to="/beleggingsadvies" className="transition-colors hover:text-foreground">Beleggingsadvies</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground">
          <p>
            © BASE FINANCE B.V. {new Date().getFullYear()} · AFM-vergunning ·
            KvK 87654321
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="transition-colors hover:text-foreground"
          >
            Terug naar boven
          </button>
        </div>
      </div>
    </footer>
  );
}
