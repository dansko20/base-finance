import { Check } from "lucide-react";
import { Reveal } from "@/components/site/motion";

const punten = [
  "Je verwachte koopdatum en wat je daarvoor nodig hebt",
  "Je maximale hypotheek en een maandlast die past",
  "Een spaar- en beleggingsplan naar je koopwens",
  "Scenario's met studieschuld, partner en NHG",
];

export function RapportPreview() {
  return (
    <section className="section-y bg-background">
      <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal>
          <p className="label-eyebrow">Het adviesrapport</p>
          <h2 className="mt-8 max-w-lg text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.08]">Dit krijg je in handen: jouw Toekomstplan</h2>
          <p className="mt-6 max-w-md text-muted-foreground">Na het adviestraject ontvang je een helder rapport. Geen kleine lettertjes, wel concrete stappen.</p>
          <ul className="mt-8 space-y-3">
            {punten.map((p) => (
              <li key={p} className="flex gap-3"><Check className="mt-0.5 size-5 shrink-0 text-primary" />{p}</li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-muted-foreground">Voorbeeld met fictieve cijfers.</p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="relative mx-auto max-w-md">
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-2xl bg-accent" />
            <div className="relative rounded-2xl border border-border bg-background p-8 shadow-soft">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <p className="font-medium">BASE Toekomstplan</p>
                <p className="text-xs text-muted-foreground">Voor: Sanne, 26</p>
              </div>
              <div className="mt-6 rounded-xl bg-primary p-5 text-primary-foreground">
                <p className="text-xs text-primary-foreground/70">Verwachte koopdatum</p>
                <p className="mt-1 text-3xl font-medium">Maart 2028</p>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="rounded-xl bg-surface p-4"><p className="text-xs text-muted-foreground">Maximale hypotheek</p><p className="mt-1 text-xl font-medium">€ 265.000</p></div>
                <div className="rounded-xl bg-surface p-4"><p className="text-xs text-muted-foreground">Maandlast</p><p className="mt-1 text-xl font-medium">€ 1.150</p></div>
              </div>
              <div className="mt-6">
                <div className="flex justify-between text-xs text-muted-foreground"><span>Eigen geld opgebouwd</span><span>€ 9.000 / € 15.000</span></div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-surface"><div className="h-full w-3/5 rounded-full bg-primary" /></div>
              </div>
              <div className="mt-6 space-y-2 text-sm">
                <p className="flex justify-between"><span className="text-muted-foreground">Maandelijks sparen</span><span>€ 250</span></p>
                <p className="flex justify-between"><span className="text-muted-foreground">Maandelijks beleggen</span><span>€ 150</span></p>
                <p className="flex justify-between"><span className="text-muted-foreground">Scenario</span><span>Met NHG</span></p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
