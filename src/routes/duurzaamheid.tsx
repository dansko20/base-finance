import { createFileRoute } from "@tanstack/react-router";
import {
  Leaf,
  Sprout,
  Trees,
  FileCheck2,
  Cloud,
  Bike,
  Ban,
  BadgeCheck,
  ShieldCheck,
  SearchCheck,
  Scale,
  Eye,
} from "lucide-react";
import { Reveal, CountUp } from "@/components/site/motion";
import { PillLink } from "@/components/site/PillButton";

export const Route = createFileRoute("/duurzaamheid")({
  head: () => ({ meta: [
    { title: "Duurzaamheid | BASE FINANCE" },
    { name: "description", content: "Hoe BASE FINANCE zelf duurzaam werkt: 5 bomen in Ivoorkust per afgerond advies, een kantoorassortiment met uitsluitingen en een provisievrij advies met openbare criteria." },
    { property: "og:title", content: "Duurzaamheid | BASE FINANCE" },
    { property: "og:description", content: "Ons boomplantprogramma in Ivoorkust, onze kantoorkeuze voor duurzame partijen en onze afspraak: geen provisie en openheid van zaken." },
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

const assortiment = [
  { icon: SearchCheck, title: "Bewust assortiment", text: "We werken alleen met partijen die duurzaamheid serieus nemen: ASN Bank en Allianz voor hypotheken, Robeco en BNP Paribas voor beleggen. Wat niet op die lijst staat, leggen we je niet voor." },
  { icon: Ban, title: "Duidelijke uitsluitingen", text: "Aanbieders en fondsen met wapens, tabak, kinderarbeid of uitbreiding van fossiele winning sluiten we uit. Over dat besluit onderhandelen we niet, hoe aantrekkelijk de rente of het rendement ook lijkt." },
  { icon: Scale, title: "Zelf getoetst, niet overgenomen", text: "We laten ons niet leiden door een marketingclaim of een groen labeltje. Ons eigen team toetst elke partij op dezelfde criteria en die toetsing staat open en bloot op onze site." },
];

const transparantie = [
  { icon: ShieldCheck, title: "Provisievrij kantoor", text: "We krijgen geen cent provisie of beloning van banken of fondshuizen. Sinds 2013 mag dat ook niet. Jij betaalt alleen ons advies, dus ons enige belang is jouw belang." },
  { icon: Eye, title: "Openheid van zaken", text: "Onze beoordelingscriteria, de weging ervan en de scores per partij staan voor iedereen zichtbaar. Geen geheime deals achter gesloten deuren." },
  { icon: BadgeCheck, title: "Geen greenwashing", text: "We doen geen vage groene beloften. Wat we beloven, zoals 5 bomen per afgerond advies en papierloos werken, maken we concreet en controleerbaar." },
  { icon: Leaf, title: "Eerlijk over haalbaarheid", text: "We moedigen starters nooit aan om over hun grenzen heen te gaan. Een financieel leven dat op de lange termijn klopt, vinden wij ook duurzaamheid." },
];

const kantoor = [
  { icon: FileCheck2, title: "Papierloos werken", text: "Je dossier, je adviesrapport en je handtekening zijn volledig digitaal. Geen ordners, geen printwerk." },
  { icon: Cloud, title: "Digitale gesprekken", text: "Veel gesprekken doen we online. Dat scheelt jou reistijd en ons allebei CO₂-uitstoot." },
  { icon: Bike, title: "Groen naar kantoor", text: "Ons team komt met de fiets of het OV naar ons kantoor in Rotterdam." },
  { icon: Sprout, title: "Zuinig kantoor", text: "We gebruiken groene stroom, LED-verlichting en energiezuinige laptops die we zo lang mogelijk gebruiken." },
];

function Duurzaamheid() {
  return <>
    <section className="bg-background px-5 pb-16 pt-40 sm:px-8"><div className="mx-auto max-w-[1400px]"><Reveal><p className="label-eyebrow">Duurzaamheid</p><h1 className="mt-8 max-w-4xl text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.04]">Hoe wij zelf met de toekomst omgaan</h1><p className="mt-8 max-w-xl text-muted-foreground">Duurzaamheid begint niet bij jouw hypotheek, maar bij hoe ons kantoor draait. Met wie we samenwerken, wat we weigeren aan te bieden en hoeveel we laten zien van onze keuzes. Dat is waar deze pagina over gaat.</p></Reveal></div></section>

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

    <section className="section-y bg-background"><div className="mx-auto max-w-[1400px] px-5 sm:px-8"><Reveal><p className="label-eyebrow">Onze kantoorkeuze</p><h2 className="mt-8 max-w-3xl text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.08]">Alleen partijen die het serieus menen</h2><p className="mt-8 max-w-2xl text-muted-foreground">Een advies is zo duurzaam als de producten erachter. Daarom bepalen wij vooraf wie er op ons kantoor mag staan, en net zo belangrijk: wie er niet mag staan.</p></Reveal>
      <div className="mt-14 grid gap-px overflow-hidden rounded-xl bg-border lg:grid-cols-3">{assortiment.map((a, i) => <Reveal key={a.title} delay={i * 0.1}><div className="h-full bg-background p-8"><a.icon className="size-6 text-primary" /><h3 className="mt-5 text-lg font-medium">{a.title}</h3><p className="mt-3 text-sm text-muted-foreground">{a.text}</p></div></Reveal>)}</div>
      <Reveal delay={0.15}><div className="mt-12 flex justify-center"><PillLink to="/onze-partners" variant="outline">Bekijk onze partijvergelijking</PillLink></div></Reveal>
    </div></section>

    <section className="section-y bg-surface"><div className="mx-auto max-w-[1400px] px-5 sm:px-8"><Reveal><p className="label-eyebrow">Transparantie</p><h2 className="mt-8 max-w-3xl text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.08]">Eerlijk zakendoen hoort erbij</h2><p className="mt-8 max-w-2xl text-muted-foreground">Bomen planten is zichtbaar. Hoe een kantoor met geld en belangen omgaat, zie je niet direct. Daarom zetten we onze afspraken op een rij.</p></Reveal>
      <div className="mt-14 grid gap-6 sm:grid-cols-2">{transparantie.map((t, i) => <Reveal key={t.title} delay={i * 0.1}><article className="h-full rounded-xl bg-background p-8"><t.icon className="size-6 text-primary" /><h3 className="mt-5 text-xl font-medium">{t.title}</h3><p className="mt-3 text-sm text-muted-foreground">{t.text}</p></article></Reveal>)}</div>
      <Reveal delay={0.15}><div className="mt-12 flex flex-wrap justify-center gap-4"><PillLink to="/tarieven" variant="outline">Onze tarieven</PillLink><PillLink to="/algemene-voorwaarden" variant="ghost">Lees onze voorwaarden</PillLink></div></Reveal>
    </div></section>

    <section className="section-y bg-background"><div className="mx-auto max-w-[1400px] px-5 sm:px-8"><Reveal><p className="label-eyebrow">Ons kantoor</p><h2 className="mt-8 max-w-xl text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.08]">Zo werken we zelf duurzaam</h2></Reveal>
      <div className="mt-14 grid gap-px overflow-hidden rounded-xl bg-border sm:grid-cols-2 lg:grid-cols-4">{kantoor.map((k, i) => <Reveal key={k.title} delay={i * 0.1}><div className="h-full bg-background p-8"><k.icon className="size-6 text-primary" /><h3 className="mt-5 text-lg font-medium">{k.title}</h3><p className="mt-3 text-sm text-muted-foreground">{k.text}</p></div></Reveal>)}</div>
    </div></section>

    <section className="section-y bg-background"><div className="mx-auto max-w-[1400px] px-5 text-center sm:px-8"><Reveal><Sprout className="mx-auto size-10 text-primary" /><h2 className="mx-auto mt-6 max-w-2xl text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.08]">Plant jouw eerste 5 bomen</h2><p className="mx-auto mt-6 max-w-lg text-muted-foreground">Start met een gratis kennismaking. Rond je een adviestraject af, dan planten we 5 bomen voor je.</p><div className="mt-10 flex justify-center"><PillLink to="/plan-een-gesprek">Plan een gesprek</PillLink></div></Reveal></div></section>
  </>;
}
