import { createFileRoute } from "@tanstack/react-router";
import { Leaf, Sprout, Trees, FileCheck2, Cloud, Bike, Home, LineChart } from "lucide-react";
import { Reveal, CountUp } from "@/components/site/motion";
import { PillLink } from "@/components/site/PillButton";

export const Route = createFileRoute("/duurzaamheid")({
  head: () => ({ meta: [
    { title: "Duurzaamheid | BASE FINANCE" },
    { name: "description", content: "Het BASE Green Initiative: voor elk afgerond adviestraject planten we 5 bomen in Ivoorkust. Lees hoe duurzaam ons kantoor en advies is." },
    { property: "og:title", content: "Duurzaamheid | BASE FINANCE" },
    { property: "og:description", content: "5 bomen in Ivoorkust per afgerond advies, duurzaam hypotheekadvies en een papierloos kantoor." },
    { property: "og:type", content: "article" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Duurzaamheid,
});

const stats = [
  { value: 1250, suffix: "+", label: "Bomen geplant via adviezen van BASE-starters" },
  { value: 5, suffix: "", label: "Bomen per afgerond adviestraject" },
  { value: 100, suffix: "%", label: "Papierloos, van intake tot adviesrapport" },
];

const advies = [
  { icon: Home, title: "Duurzaam hypotheekadvies", text: "We kijken standaard naar extra leenruimte voor energiebesparende maatregelen en naar rentekorting bij een goed energielabel. In onze vergelijking zitten aanbieders met duurzame hypotheken, zoals ASN Bank en Allianz." },
  { icon: LineChart, title: "Verantwoord beleggen", text: "Onze fondsselectie bestaat uit gescreende fondsen, zoals het ASN Duurzaam Aandelenfonds, ASN Milieu & Waterfonds, BNP Paribas Green Bond Fund en Robeco Smart Energy. Of beleggen bij je past, hangt altijd af van je eigen situatie." },
];

const kantoor = [
  { icon: FileCheck2, title: "Papierloos werken", text: "Je dossier, je adviesrapport en je handtekening zijn volledig digitaal. Geen ordners, geen printwerk." },
  { icon: Cloud, title: "Digitale gesprekken", text: "Veel gesprekken doen we online. Dat scheelt jou reistijd en ons allebei CO₂-uitstoot." },
  { icon: Bike, title: "Groen naar kantoor", text: "Ons team komt met de fiets of het OV naar ons kantoor in Rotterdam." },
  { icon: Leaf, title: "Zuinig kantoor", text: "We gebruiken groene stroom, LED-verlichting en energiezuinige laptops die we zo lang mogelijk gebruiken." },
];

function Duurzaamheid() {
  return <>
    <section className="bg-background px-5 pb-16 pt-40 sm:px-8"><div className="mx-auto max-w-[1400px]"><Reveal><p className="label-eyebrow">Duurzaamheid</p><h1 className="mt-8 max-w-4xl text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.04]">Financieel advies met oog voor morgen</h1><p className="mt-8 max-w-xl text-muted-foreground">Je bouwt aan je eigen toekomst. Wij vinden dat die toekomst ook een gezonde planeet verdient. Daarom nemen we duurzaamheid mee in ons advies en in hoe we werken.</p></Reveal></div></section>

    <section className="section-y bg-surface"><div className="mx-auto grid max-w-[1400px] gap-10 px-5 sm:px-8 lg:grid-cols-2">
      <Reveal><p className="label-eyebrow">BASE Green Initiative</p><h2 className="mt-8 max-w-xl text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.08]">Elk advies plant 5 bomen in Ivoorkust</h2><Trees className="mt-10 size-12 text-primary" /></Reveal>
      <Reveal delay={0.12}><div className="max-w-xl space-y-6 text-muted-foreground">
        <p>Voor elk afgerond adviestraject, hypotheek of beleggen, gaat een deel van ons adviesloon naar het planten van 5 bomen in Ivoorkust. Jij betaalt daar niets extra voor.</p>
        <p><strong className="font-medium text-foreground">Waarom Ivoorkust?</strong> Het land heeft in de afgelopen decennia een groot deel van zijn regenwoud verloren, onder meer door de cacaoteelt. Herbebossing herstelt de bodem, beschermt water en geeft dieren weer leefruimte.</p>
        <p><strong className="font-medium text-foreground">Bomen tussen de cacao.</strong> De bomen worden geplant met lokale boeren, tussen hun gewassen (agroforestry). Zo geven ze schaduw, houden ze de grond vruchtbaar en leveren ze de boeren op termijn extra inkomen op, bijvoorbeeld uit fruit.</p>
        <p className="text-sm">BASE FINANCE is een fictief adviesbureau voor een schoolproject. Het programma en de aantallen zijn een voorbeeld van hoe wij dit zouden inrichten.</p>
      </div></Reveal>
    </div></section>

    <section className="section-y bg-primary text-primary-foreground"><div className="mx-auto max-w-[1400px] px-5 sm:px-8"><Reveal><p className="text-sm text-primary-foreground/60">Onze impact</p><h2 className="mt-8 max-w-2xl text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.08]">Wat we samen al hebben gedaan</h2></Reveal>
      <div className="mt-16 grid gap-10 sm:grid-cols-3">{stats.map((s, i) => <Reveal key={s.label} delay={i * 0.12}><div className="border-t border-primary-foreground/20 pt-6"><p className="text-[clamp(2.5rem,5vw,4rem)] font-medium leading-none"><CountUp to={s.value} prefix="" suffix={s.suffix} decimals={0} /></p><p className="mt-4 text-sm text-primary-foreground/70">{s.label}</p></div></Reveal>)}</div>
    </div></section>

    <section className="section-y bg-background"><div className="mx-auto max-w-[1400px] px-5 sm:px-8"><Reveal><p className="label-eyebrow">In ons advies</p><h2 className="mt-8 max-w-xl text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.08]">Duurzaam, als het bij je past</h2></Reveal>
      <div className="mt-14 grid gap-6 sm:grid-cols-2">{advies.map((a, i) => <Reveal key={a.title} delay={i * 0.12}><article className="h-full rounded-xl bg-surface p-8"><a.icon className="size-6 text-primary" /><h3 className="mt-5 text-xl font-medium">{a.title}</h3><p className="mt-3 text-sm text-muted-foreground">{a.text}</p></article></Reveal>)}</div>
    </div></section>

    <section className="section-y bg-surface"><div className="mx-auto max-w-[1400px] px-5 sm:px-8"><Reveal><p className="label-eyebrow">Ons kantoor</p><h2 className="mt-8 max-w-xl text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.08]">Zo werken we zelf duurzaam</h2></Reveal>
      <div className="mt-14 grid gap-px overflow-hidden rounded-xl bg-border sm:grid-cols-2 lg:grid-cols-4">{kantoor.map((k, i) => <Reveal key={k.title} delay={i * 0.1}><div className="h-full bg-background p-8"><k.icon className="size-6 text-primary" /><h3 className="mt-5 text-lg font-medium">{k.title}</h3><p className="mt-3 text-sm text-muted-foreground">{k.text}</p></div></Reveal>)}</div>
    </div></section>

    <section className="section-y bg-background"><div className="mx-auto max-w-[1400px] px-5 text-center sm:px-8"><Reveal><Sprout className="mx-auto size-10 text-primary" /><h2 className="mx-auto mt-6 max-w-2xl text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.08]">Plant jouw eerste 5 bomen</h2><p className="mx-auto mt-6 max-w-lg text-muted-foreground">Start met een gratis kennismaking. Rond je een adviestraject af, dan planten we 5 bomen voor je.</p><div className="mt-10 flex justify-center"><PillLink to="/plan-een-gesprek">Plan een gesprek</PillLink></div></Reveal></div></section>
  </>;
}
