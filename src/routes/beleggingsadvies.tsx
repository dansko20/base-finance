import { createFileRoute } from "@tanstack/react-router";

import dienstBeleggen from "@/assets/starter-financien.jpg";
import { Faq } from "@/components/site/Faq";
import { PillLink } from "@/components/site/PillButton";
import { Reveal } from "@/components/site/motion";

export const Route = createFileRoute("/beleggingsadvies")({
  head: () => ({ meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    { title: "Beleggingsadvies | BASE FINANCE" },
    { name: "description", content: "Beleggingsadvies voor starters met een koopwens. Ontdek of beleggen past bij je spaargeld, doel en de tijd die je hebt." },
    { property: "og:title", content: "Beleggingsadvies | BASE FINANCE" },
    { property: "og:description", content: "Een begrijpelijke, duurzame portefeuille met heldere kosten en een passend risicoprofiel." },
  ] }),
  component: Beleggingsadvies,
});

const profielen = [
  { title: "Defensief", ratio: "25% aandelen · 75% obligaties", text: "Meer nadruk op minder schommelingen, maar ook hier kun je geld verliezen. Aandelen zijn delen van bedrijven; obligaties zijn leningen aan bedrijven of overheden." },
  { title: "Neutraal", ratio: "55% aandelen · 45% obligaties", text: "Een mix van aandelen en obligaties: je spreidt je geld over bedrijven en leningen. De waarde kan stijgen én dalen; je hebt tijd nodig om schommelingen op te vangen." },
  { title: "Offensief", ratio: "85% aandelen · 15% obligaties", text: "Meer aandelen betekent grotere mogelijke schommelingen en verliezen. Alleen passend als je het geld lange tijd kunt missen en dat risico kunt én wilt dragen." },
];

const faq = [
  { vraag: "Met welk bedrag kan ik beginnen?", antwoord: "Dat hangt af van je doel en het spaargeld dat je achter de hand moet houden voor onverwachte uitgaven. Eerst kijken we welk bedrag je langere tijd verantwoord kunt missen." },
  { vraag: "Beleggen jullie duurzaam?", antwoord: "Duurzaamheid is een vast onderdeel van onze selectie. We maken inzichtelijk welke criteria en uitsluitingen worden toegepast." },
  { vraag: "Kan ik mijn portefeuille tussentijds aanpassen?", antwoord: "Ja. We bespreken regelmatig of je beleggingen nog passen bij je doel, je koopdatum en het risico dat je wilt nemen." },
];

function Beleggingsadvies() {
  return (
    <>
      <section className="bg-background px-5 pb-16 pt-40 sm:px-8"><div className="mx-auto max-w-[1400px]"><Reveal><p className="label-eyebrow">Advies</p><h1 className="mt-8 max-w-4xl text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.04]">Beleggen met een plan dat je begrijpt</h1></Reveal></div></section>
      <section className="section-y bg-surface"><div className="mx-auto grid max-w-[1400px] gap-12 px-5 sm:px-8 lg:grid-cols-2"><Reveal><img src={dienstBeleggen} alt="Jongvolwassene met laptop en koffie bekijkt haar financiën" loading="lazy" width={1024} height={1280} className="h-full min-h-[390px] w-full rounded-xl object-cover" /></Reveal><Reveal delay={0.12}><p className="label-eyebrow">Voor jouw doel</p><h2 className="mt-8 text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.08]">Beleggen richting je eigen huis</h2><p className="mt-7 text-muted-foreground">Heb je spaargeld en denk je aan een eigen huis? Je vaste adviseur kijkt eerst naar je doel, je uitgaven en wanneer je het geld nodig hebt. Beleggen kan passen als je genoeg tijd hebt, maar is niet altijd de beste stap. Je kunt geld verliezen. Geld voor een aankoop op korte termijn houden we daarom liever beschikbaar.</p><div className="mt-9"><PillLink to="/plan-een-gesprek">Bespreek je doel</PillLink></div></Reveal></div></section>
      <section className="section-y bg-background"><div className="mx-auto max-w-[1400px] px-5 sm:px-8"><Reveal><p className="label-eyebrow">Risicoprofielen</p><h2 className="mt-8 text-[clamp(2rem,4vw,3.5rem)] font-medium">Hoeveel risico past bij je?</h2></Reveal><div className="mt-12 grid gap-6 lg:grid-cols-3">{profielen.map((item, index) => <Reveal key={item.title} delay={index * 0.1}><article className="h-full rounded-xl bg-surface p-8"><p className="text-sm text-primary">{item.ratio}</p><h3 className="mt-5 text-2xl font-medium">{item.title}</h3><p className="mt-4 text-muted-foreground">{item.text}</p></article></Reveal>)}</div></div></section>
      <section className="section-y bg-primary text-primary-foreground"><div className="mx-auto grid max-w-[1400px] gap-10 px-5 sm:px-8 lg:grid-cols-2"><Reveal><p className="text-sm text-primary-foreground/70">Kosten en werkwijze</p><h2 className="mt-8 text-[clamp(2rem,4vw,3.5rem)] font-medium">Transparant vóórdat je begint</h2></Reveal><Reveal delay={0.12}><div className="space-y-5 text-primary-foreground/80"><p>Na de kennismaking bekijken we wat je kunt missen, wanneer je wilt kopen en hoe je met mogelijke verliezen omgaat. Je krijgt een voorstel met duidelijke kosten en uitleg over hoe we je geld over verschillende beleggingen verdelen. De verdelingen hierboven zijn voorbeelden, geen persoonlijk advies.</p><p>We ontvangen geen vergoeding van fondsaanbieders. Je betaalt volgens de afspraken in je voorstel. We bespreken duurzame mogelijkheden zonder ze op te dringen en volgen je plan. Komt je koopdatum dichterbij? Dan kijken we of je risico moet afbouwen. Dezelfde adviseur helpt later met je hypotheek.</p></div></Reveal></div></section>
      <section className="section-y bg-surface"><div className="mx-auto max-w-4xl px-5 sm:px-8"><Reveal><p className="label-eyebrow">Veelgestelde vragen</p><h2 className="mb-10 mt-8 text-4xl font-medium">Goed om te weten voordat je belegt</h2></Reveal><Faq items={faq} /></div></section>
      <section className="section-y bg-background"><div className="mx-auto max-w-[1400px] px-5 text-center sm:px-8"><Reveal><h2 className="text-[clamp(2rem,4vw,3.5rem)] font-medium">Eerst je financiële ruimte verkennen?</h2><div className="mt-9 flex justify-center"><PillLink to="/rekentools">Bekijk de rekentools</PillLink></div></Reveal></div></section>
    </>
  );
}