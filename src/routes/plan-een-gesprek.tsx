import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check } from "lucide-react";

import { PillButton } from "@/components/site/PillButton";
import { Reveal } from "@/components/site/motion";

export const Route = createFileRoute("/plan-een-gesprek")({
  head: () => ({ meta: [
    { title: "Plan een gesprek | BASE FINANCE" },
    { name: "description", content: "Plan een gratis en vrijblijvende kennismaking met een financieel adviseur van BASE FINANCE." },
    { property: "og:title", content: "Plan een gesprek | BASE FINANCE" },
    { property: "og:description", content: "Bespreek je hypotheek- of beleggingsvraag tijdens een vrijblijvende kennismaking." },
  ] }),
  component: PlanEenGesprek,
});

function PlanEenGesprek() {
  const [sent, setSent] = useState(false);
  const field = "w-full rounded-lg border border-input bg-background px-4 py-3 outline-none transition-shadow focus:ring-2 focus:ring-ring/30";
  return <section className="min-h-screen bg-surface px-5 pb-24 pt-40 sm:px-8"><div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[0.8fr_1.2fr]"><Reveal><p className="label-eyebrow">Kennismaken</p><h1 className="mt-8 max-w-xl text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.04]">Plan een vrijblijvend gesprek</h1><p className="mt-8 max-w-md text-muted-foreground">Vertel kort waar je mee geholpen wilt worden. We nemen binnen één werkdag contact op om een geschikt moment te vinden.</p></Reveal><Reveal delay={0.12}><div className="rounded-xl bg-background p-6 sm:p-10">{sent ? <div className="flex min-h-[480px] flex-col items-center justify-center text-center"><span className="grid size-14 place-items-center rounded-full bg-accent text-primary"><Check className="size-6" /></span><h2 className="mt-6 text-3xl font-medium">Aanvraag ontvangen</h2><p className="mt-4 text-muted-foreground">We nemen binnen één werkdag contact met je op.</p></div> : <form className="space-y-6" onSubmit={(event) => { event.preventDefault(); setSent(true); }}><label className="block"><span className="mb-2 block text-sm">Naam</span><input required name="name" autoComplete="name" className={field} /></label><div className="grid gap-6 sm:grid-cols-2"><label className="block"><span className="mb-2 block text-sm">E-mailadres</span><input required name="email" type="email" autoComplete="email" className={field} /></label><label className="block"><span className="mb-2 block text-sm">Telefoonnummer</span><input name="phone" type="tel" autoComplete="tel" className={field} /></label></div><label className="block"><span className="mb-2 block text-sm">Keuze van dienst</span><select name="service" className={field}><option>Hypotheekadvies</option><option>Beleggingsadvies</option><option>Anders</option></select></label><label className="block"><span className="mb-2 block text-sm">Bericht</span><textarea name="message" rows={6} className={field} /></label><PillButton>Verstuur aanvraag</PillButton></form>}</div></Reveal></div></section>;
}