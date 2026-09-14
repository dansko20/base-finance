import { createFileRoute } from "@tanstack/react-router";

import { MaximaleHypotheekTool } from "@/components/rekentools/MaximaleHypotheekTool";
import { Reveal } from "@/components/site/motion";

export const Route = createFileRoute("/rekentools")({
  head: () => ({ meta: [
    { title: "Rekentools | BASE FINANCE" },
    { name: "description", content: "Bereken een indicatie van je maximale hypotheek met de normen van 2026." },
    { property: "og:title", content: "Rekentools | BASE FINANCE" },
    { property: "og:description", content: "Ontdek met de maximale-hypotheektool wat er financieel mogelijk is." },
  ] }),
  component: Rekentools,
});

function Rekentools() {
  return (
    <>
      <section className="bg-background px-5 pb-14 pt-40 sm:px-8"><div className="mx-auto max-w-[1400px]"><Reveal><p className="label-eyebrow">Rekentools</p><h1 className="mt-8 max-w-4xl text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.04]">Wat kun je maximaal lenen?</h1><p className="mt-7 max-w-2xl text-muted-foreground">Vul je gegevens in en zie direct een indicatie van je maximale hypotheek, maandlasten en benodigde eigen geld.</p></Reveal></div></section>
      <section className="bg-surface px-5 py-6 sm:px-8"><div className="mx-auto max-w-[1400px]"><div className="inline-flex rounded-lg bg-background p-1 text-sm"><span className="rounded-md bg-primary px-4 py-2 text-primary-foreground">Maximale hypotheek</span><span className="px-4 py-2 text-muted-foreground">Maandlasten — binnenkort</span><span className="hidden px-4 py-2 text-muted-foreground sm:block">Vermogensgroei — binnenkort</span></div></div></section>
      <section className="bg-surface px-5 pb-24 pt-8 sm:px-8"><div className="mx-auto max-w-[1400px]"><MaximaleHypotheekTool /></div></section>
    </>
  );
}