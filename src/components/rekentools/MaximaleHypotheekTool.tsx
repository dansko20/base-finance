import { motion } from "motion/react";
import { Check, Info } from "lucide-react";
import { useMemo, useState, type ReactNode } from "react";

import { ENERGIELABELS, NORMJAAR } from "@/lib/rekentools/normen2026";
import {
  DEFAULT_INPUT,
  berekenMaximaleHypotheek,
  euro,
  euro2,
  type Aanvrager,
  type MaximaleHypotheekInput,
} from "@/lib/rekentools/maximaleHypotheek";

const fieldClass = "w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring/30";

function Field({ label, hint, children }: { label: string; hint: string; children: ReactNode }) {
  return <label className="block"><span className="mb-2 block text-sm font-medium">{label}</span>{children}<span className="mt-2 block text-xs leading-relaxed text-muted-foreground">{hint}</span></label>;
}

function MoneyInput({ value, onChange }: { value: number; onChange: (value: number) => void }) {
  return <div className="relative"><span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">€</span><input type="number" min={0} step={100} value={value || ""} onChange={(event) => onChange(Number(event.target.value) || 0)} className={`${fieldClass} pl-8`} /></div>;
}

function Applicant({ title, value, onChange }: { title: string; value: Aanvrager; onChange: (value: Aanvrager) => void }) {
  const update = <K extends keyof Aanvrager>(key: K, next: Aanvrager[K]) => onChange({ ...value, [key]: next });
  return <div className="rounded-lg border border-border p-5"><h3 className="text-lg font-medium">{title}</h3><div className="mt-5 space-y-5"><Field label="Bruto maandsalaris" hint="Je salaris per maand vóór belasting, zonder vakantiegeld."><MoneyInput value={value.brutoMaandsalaris} onChange={(next) => update("brutoMaandsalaris", next)} /></Field><Field label="Vaste 13e maand" hint="Alleen wanneer een extra maandsalaris vast in je contract staat."><div className="grid grid-cols-2 gap-2">{[false, true].map((choice) => <button key={String(choice)} type="button" onClick={() => update("dertiendeMaand", choice)} className={`rounded-lg border px-4 py-3 text-sm transition-colors ${value.dertiendeMaand === choice ? "border-primary bg-primary font-medium" : "border-input bg-background hover:bg-surface"}`}>{choice ? "Ja" : "Nee"}</button>)}</div></Field><Field label="Ander vast inkomen per jaar" hint="Bijvoorbeeld een vaste toeslag, eindejaarsuitkering of vast overwerk."><MoneyInput value={value.anderVastInkomen} onChange={(next) => update("anderVastInkomen", next)} /></Field></div></div>;
}

function Detail({ label, value }: { label: string; value: string }) {
  return <div className="flex items-start justify-between gap-4 border-b border-primary-foreground/20 py-3 text-sm last:border-0"><span className="text-primary-foreground/70">{label}</span><span className="text-right font-medium tabular-nums">{value}</span></div>;
}

export function MaximaleHypotheekTool() {
  const [input, setInput] = useState<MaximaleHypotheekInput>(DEFAULT_INPUT);
  const result = useMemo(() => berekenMaximaleHypotheek(input), [input]);
  const set = <K extends keyof MaximaleHypotheekInput>(key: K, value: MaximaleHypotheekInput[K]) => setInput((current) => ({ ...current, [key]: value }));

  return <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
    <div className="rounded-xl bg-background p-6 sm:p-8">
      <div className="flex items-start gap-3 border-b border-border pb-6"><span className="grid size-9 shrink-0 place-items-center rounded-full bg-primary"><Info className="size-4" /></span><div><h2 className="text-2xl font-medium">Vul je gegevens in</h2><p className="mt-1 text-sm text-muted-foreground">Lege velden tellen als € 0. Vakantiegeld rekenen we standaard mee als 8%.</p></div></div>
      <div className="mt-7 grid gap-5 sm:grid-cols-2"><Applicant title="Jij" value={input.aanvrager1} onChange={(value) => set("aanvrager1", value)} /><Applicant title="Je partner (optioneel)" value={input.aanvrager2} onChange={(value) => set("aanvrager2", value)} /></div>
      <div className="mt-8 border-t border-border pt-7"><h3 className="text-xl font-medium">Leningen en verplichtingen</h3><div className="mt-5 grid gap-5 sm:grid-cols-2"><Field label="Limiet roodstand" hint="Ook als je nooit rood staat, telt de volledige limiet mee."><MoneyInput value={input.roodstandLimiet} onChange={(value) => set("roodstandLimiet", value)} /></Field><Field label="Andere leningen (totaal)" hint="Bijvoorbeeld doorlopend krediet, persoonlijke lening of private lease."><MoneyInput value={input.andereLeningen} onChange={(value) => set("andereLeningen", value)} /></Field><Field label="DUO-maandbedrag" hint="Het bedrag dat je nu per maand betaalt. Geen studieschuld? Laat leeg."><MoneyInput value={input.duoMaandbedrag} onChange={(value) => set("duoMaandbedrag", value)} /></Field></div></div>
      <div className="mt-8 border-t border-border pt-7"><h3 className="text-xl font-medium">Woning en verduurzaming</h3><div className="mt-5 grid gap-5 sm:grid-cols-2"><Field label="Energielabel van het huis" hint="Weet je het niet? Kies E, F of G; dan rekenen we voorzichtig."><select value={input.energielabel} onChange={(event) => set("energielabel", event.target.value as MaximaleHypotheekInput["energielabel"])} className={fieldClass}>{ENERGIELABELS.map((label) => <option key={label}>{label}</option>)}</select></Field><Field label="Bedrag voor verduurzaming" hint="Bijvoorbeeld isolatie, zonnepanelen of een warmtepomp."><MoneyInput value={input.verduurzaming} onChange={(value) => set("verduurzaming", value)} /></Field></div></div>
    </div>

    <div className="lg:sticky lg:top-28 lg:self-start">
      <div className="overflow-hidden rounded-xl bg-primary text-primary-foreground">
        <div className="p-7 sm:p-8"><p className="text-sm font-medium">Je kunt ongeveer lenen</p><motion.p key={result.metVerduurzaming} initial={{ opacity: .45, y: 7 }} animate={{ opacity: 1, y: 0 }} className="mt-3 text-[clamp(2.75rem,6vw,4.5rem)] font-medium leading-none tabular-nums">{euro(result.metVerduurzaming)}</motion.p><p className="mt-4 text-sm text-primary-foreground/70">Op basis van {result.rente.toFixed(2)}% rente, 10 jaar vast met NHG en een looptijd van 30 jaar.</p></div>
        <div className="border-t border-primary-foreground/20 px-7 py-5 sm:px-8"><Detail label="Zonder verduurzaming" value={euro(result.zonderVerduurzaming)} /><Detail label="Extra voor verduurzaming" value={euro(result.verduurzamingOpslag)} /><Detail label="Geschatte bruto maandlast" value={euro2(result.brutoMaandlast)} /><Detail label="NHG mogelijk (indicatie)" value={result.nhgMogelijk ? "Ja" : "Nee"} /></div>
      </div>
      <div className="mt-5 rounded-xl bg-background p-7"><p className="label-eyebrow">Zo rekenen wij</p><div className="mt-4 space-y-3 text-sm"><div className="flex gap-3"><Check className="mt-0.5 size-4 shrink-0 text-primary" /><p><strong>{euro(result.toetsinkomen)}</strong> gezamenlijk jaarinkomen, inclusief 8% vakantiegeld.</p></div><div className="flex gap-3"><Check className="mt-0.5 size-4 shrink-0 text-primary" /><p><strong>{result.lastpercentage.toFixed(1)}%</strong> van het inkomen mag volgens de officiële tabel naar wonen.</p></div><div className="flex gap-3"><Check className="mt-0.5 size-4 shrink-0 text-primary" /><p><strong>{euro2(result.kredietlast + result.studieschuldLast)}</strong> per maand gaat eraf voor leningen en studieschuld.</p></div>{result.labelOpslag > 0 ? <div className="flex gap-3"><Check className="mt-0.5 size-4 shrink-0 text-primary" /><p><strong>{euro(result.labelOpslag)}</strong> extra leenruimte door het energielabel.</p></div> : null}{result.alleenstaandeOpslag > 0 ? <div className="flex gap-3"><Check className="mt-0.5 size-4 shrink-0 text-primary" /><p><strong>{euro(result.alleenstaandeOpslag)}</strong> extra leenruimte omdat je alleen koopt.</p></div> : null}</div></div>
      <p className="mt-5 rounded-xl bg-background p-5 text-xs leading-relaxed text-muted-foreground">Let op: dit is een indicatie op basis van de regels van {NORMJAAR}. Je eigen situatie kan anders zijn. Je kunt maximaal de waarde van het huis lenen en bijkomende kosten betaal je meestal zelf. Aan deze berekening kun je geen rechten ontlenen.</p>
    </div>
  </div>;
}