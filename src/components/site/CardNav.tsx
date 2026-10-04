import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUpRight, Calculator, CalendarDays, ChartNoAxesCombined, CheckSquare, ChevronDown, Home, Menu, Phone, Users, X } from "lucide-react";
import { useEffect, useRef, useState, type ComponentType } from "react";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";
import type { AppPath } from "./PillButton";

type Entry = { label: string; description: string; to: AppPath; icon: ComponentType<{ className?: string }> };
type MenuName = "advies" | "over" | "kennis";
const groups: Record<MenuName, { label: string; entries: Entry[] }> = {
  advies: { label: "Advies", entries: [
    { label: "Hypotheekadvies", description: "Hulp bij het kiezen van een hypotheek die bij je past.", to: "/hypotheekadvies", icon: Home },
    { label: "Beleggingsadvies", description: "Een duidelijk plan voor je vermogen op lange termijn.", to: "/beleggingsadvies", icon: ChartNoAxesCombined },
    { label: "Rekentools", description: "Reken zelf uit wat je ongeveer kunt lenen.", to: "/rekentools", icon: Calculator },
  ] },
  over: { label: "Over BASE", entries: [
    { label: "Over ons", description: "Wie we zijn en waarom we dit doen.", to: "/over-ons", icon: Users },
    { label: "Onze werkwijze", description: "Stap voor stap hoe een adviestraject verloopt.", to: "/werkwijze", icon: CheckSquare },
  ] },
  kennis: { label: "Kennismaken", entries: [
    { label: "Plan een gesprek", description: "Kies een moment voor een vrijblijvende kennismaking.", to: "/plan-een-gesprek", icon: CalendarDays },
    { label: "Contactgegevens", description: "Bel, mail of bezoek ons kantoor.", to: "/contactgegevens", icon: Phone },
  ] },
};
function EntryLink({ entry, close }: { entry: Entry; close: () => void }) {
  const Icon = entry.icon;
  return <Link to={entry.to} onClick={close} className="group flex gap-3 rounded-xl p-3 transition-colors hover:bg-accent"><span className="grid size-10 shrink-0 place-items-center rounded-lg bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground"><Icon className="size-[18px]" /></span><span><span className="flex items-center gap-1.5 text-sm font-semibold">{entry.label}<ArrowUpRight className="size-3.5 text-primary opacity-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" /></span><span className="mt-1 block text-xs leading-relaxed text-muted-foreground">{entry.description}</span></span></Link>;
}
export function CardNav({ className }: { className?: string }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [active, setActive] = useState<MenuName | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const close = () => { setActive(null); setMobileOpen(false); };
  useEffect(close, [pathname]);
  useEffect(() => { const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") close(); }; document.addEventListener("keydown", onKey); return () => document.removeEventListener("keydown", onKey); }, []);
  return <header className={cn("fixed inset-x-4 top-4 z-50 mx-auto max-w-[1400px] rounded-[20px] bg-background shadow-header", className)}>
    <div className="flex h-[72px] items-center justify-between gap-4 px-3 sm:px-5">
      <div className="flex items-center gap-2"><button type="button" aria-label={mobileOpen ? "Menu sluiten" : "Menu openen"} aria-expanded={mobileOpen} onClick={() => setMobileOpen((value) => !value)} className="grid size-11 place-items-center rounded-xl text-primary hover:bg-accent lg:hidden">{mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}</button><Link to="/" aria-label="BASE FINANCE home" className="flex items-center gap-2.5"><Logo /><span className="hidden text-[17px] font-bold text-primary sm:inline">BASE FINANCE</span></Link></div>
      <nav aria-label="Hoofdmenu" onMouseEnter={() => { if (closeTimer.current) clearTimeout(closeTimer.current); }} onMouseLeave={() => { closeTimer.current = setTimeout(() => setActive(null), 220); }} className="relative hidden lg:block">
        <div className="flex gap-1">{(Object.keys(groups) as MenuName[]).map((name) => <button key={name} type="button" aria-expanded={active === name} onMouseEnter={() => setActive(name)} onClick={() => setActive(active === name ? null : name)} className={cn("flex h-11 items-center gap-1.5 rounded-xl px-4 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-primary", active === name && "bg-accent text-primary")}>{groups[name].label}<ChevronDown className={cn("size-3.5 transition-transform", active === name && "rotate-180")} /></button>)}</div>
        <div className={cn("absolute left-1/2 top-[58px] w-[590px] -translate-x-1/2 rounded-[18px] border border-border bg-background p-3 shadow-header transition-all duration-300", active ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0")}>{active ? <div className={cn("grid gap-2", active !== "kennis" && "grid-cols-[1fr_210px]")}><div className="space-y-1">{groups[active].entries.map((entry) => <EntryLink key={entry.to} entry={entry} close={close} />)}</div>{active !== "kennis" ? <Link to={active === "advies" ? "/plan-een-gesprek" : "/over-ons"} onClick={close} className="flex min-h-52 flex-col justify-end rounded-[14px] bg-primary p-5 text-primary-foreground transition-transform hover:-translate-y-0.5"><Logo className="mb-auto opacity-30" /><h3 className="font-semibold">{active === "advies" ? "Gratis kennismaking" : "BASE FINANCE"}</h3><p className="mt-2 text-xs text-primary-foreground/70">{active === "advies" ? "Samen kijken we welk advies bij je past." : "Financieel advies dat helder en eerlijk is."}</p><span className="mt-4 flex items-center gap-1 text-sm font-semibold">Meer bekijken <ArrowUpRight className="size-4" /></span></Link> : null}</div> : null}</div>
      </nav>
      <Link to="/plan-een-gesprek" className="flex h-11 items-center gap-2 rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"><span className="hidden sm:inline">Plan een gesprek</span><span className="sm:hidden">Gesprek</span><ArrowUpRight className="size-4" /></Link>
    </div>
    <div className={cn("grid transition-[grid-template-rows] duration-500 lg:hidden", mobileOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}><div className="overflow-hidden"><div className="grid gap-2 p-2 pt-0 sm:grid-cols-3">{(Object.keys(groups) as MenuName[]).map((name, index) => <section key={name} className={cn("flex min-h-44 flex-col rounded-2xl p-5", index === 1 ? "bg-primary text-primary-foreground" : "border border-border bg-accent text-primary")}><h2 className="text-xl font-semibold">{name === "over" ? "BASE FINANCE" : groups[name].label}</h2><div className="mt-auto space-y-2 pt-5">{groups[name].entries.map((entry) => <Link key={entry.to} to={entry.to} onClick={close} className="flex items-center gap-1.5 text-sm font-medium">{entry.label}<ArrowUpRight className="size-3.5" /></Link>)}</div></section>)}</div></div></div>
  </header>;
}
