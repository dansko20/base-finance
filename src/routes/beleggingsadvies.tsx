import { createFileRoute } from "@tanstack/react-router";

import dienstBeleggen from "@/assets/dienst-beleggen.jpg";
import { Faq } from "@/components/site/Faq";
import { PillLink } from "@/components/site/PillButton";
import { Reveal } from "@/components/site/motion";

export const Route = createFileRoute("/beleggingsadvies")({
  head: () => ({ meta: [
    { title: "Beleggingsadvies | BASE FINANCE" },
    { name: "description", content: "Onafhankelijk beleggingsadvies afgestemd op je doelen, horizon en risicoprofiel." },
    { property: "og:title", content: "Beleggingsadvies | BASE FINANCE" },
    { property: "og:description", content: "Een begrijpelijke, duurzame portefeuille met heldere kosten en een passend risicoprofiel." },
  ] }),
  component: Beleggingsadvies,
});

const profielen = [
  { title: "Defensief", ratio: "25% aandelen · 75% obligaties", text: "Voor wie behoud en beperkte schommelingen belangrijker vindt dan maximaal rendement." },
  { title: "Neutraal", ratio: "55% aandelen · 45% obligaties", text: "Een evenwicht tussen groei en stabiliteit voor doelen op de middellange tot lange termijn." },
  { title: "Offensief", ratio: "85% aandelen · 15% obligaties", text: "Voor een lange horizon en wie grotere tussentijdse schommelingen kan en wil dragen." },
];

const faq = [
  { vraag: "Met welk bedrag kan ik beginnen?", antwoord: "Dat hangt af van je buffer, doel en beleggingsvorm. We beoordelen eerst welk bedrag je verantwoord kunt missen." },
  { vraag: "Beleggen jullie duurzaam?", antwoord: "Duurzaamheid is een vast onderdeel van onze selectie. We maken inzichtelijk welke criteria en uitsluitingen worden toegepast." },
  { vraag: "Kan ik mijn portefeuille tussentijds aanpassen?", antwoord: "Ja. We evalueren periodiek en passen aan wanneer je situatie, doel of risicobereidheid verandert." },
];

function Beleggingsadvies() {
  return (
    <>
      <section className="bg-background px-5 pb-16 pt-40 sm:px-8"><div className="mx-auto max-w-[1400px]"><Reveal><p className="label-eyebrow">Advies</p><h1 className="mt-8 max-w-4xl text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.04]">Beleggen met een plan dat je begrijpt</h1></Reveal></div></section>
      <section className="section-y bg-surface"><div className="mx-auto grid max-w-[1400px] gap-12 px-5 sm:px-8 lg:grid-cols-2"><Reveal><img src={dienstBeleggen} alt="Beleggingsadvies en vermogensplanning" width={1024} height={1024} className="h-full min-h-[390px] w-full rounded-xl object-cover" /></Reveal><Reveal delay={0.12}><p className="label-eyebrow">Voor jouw doel</p><h2 className="mt-8 text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.08]">Van vermogen opbouwen tot inkomen voor later</h2><p className="mt-7 text-muted-foreground">We vertalen je doel, termijn en financiële ruimte naar een gespreide portefeuille. Je weet waarin je belegt, welk risico je loopt en wat het kost.</p><div className="mt-9"><PillLink to="/plan-een-gesprek">Bespreek je doel</PillLink></div></Reveal></div></section>
      <section className="section-y bg-background"><div className="mx-auto max-w-[1400px] px-5 sm:px-8"><Reveal><p className="label-eyebrow">Risicoprofielen</p><h2 className="mt-8 text-[clamp(2rem,4vw,3.5rem)] font-medium">Een verhouding die bij je past</h2></Reveal><div className="mt-12 grid gap-6 lg:grid-cols-3">{profielen.map((item, index) => <Reveal key={item.title} delay={index * 0.1}><article className="h-full rounded-xl bg-surface p-8"><p className="text-sm text-primary">{item.ratio}</p><h3 className="mt-5 text-2xl font-medium">{item.title}</h3><p className="mt-4 text-muted-foreground">{item.text}</p></article></Reveal>)}</div></div></section>
      <section className="section-y bg-primary text-primary-foreground"><div className="mx-auto grid max-w-[1400px] gap-10 px-5 sm:px-8 lg:grid-cols-2"><Reveal><p className="text-sm text-primary-foreground/70">Kosten en werkwijze</p><h2 className="mt-8 text-[clamp(2rem,4vw,3.5rem)] font-medium">Transparant vóórdat je begint</h2></Reveal><Reveal delay={0.12}><div className="space-y-5 text-primary-foreground/80"><p>Na de kennismaking brengen we je financiële positie, doelen en risicobereidheid in kaart. Je ontvangt een concreet voorstel met spreiding, verwachte schommelingen en alle kosten.</p><p>We ontvangen geen provisie van fondshuizen. Je betaalt voor advies en beheer volgens de afspraken in je voorstel. Minimaal jaarlijks bespreken we de voortgang en herbalanceren we waar nodig.</p></div></Reveal></div></section>
      <section className="section-y bg-surface"><div className="mx-auto max-w-4xl px-5 sm:px-8"><Reveal><p className="label-eyebrow">Veelgestelde vragen</p><h2 className="mb-10 mt-8 text-4xl font-medium">Beleggen zonder verrassingen</h2></Reveal><Faq items={faq} /></div></section>
      <section className="section-y bg-background"><div className="mx-auto max-w-[1400px] px-5 text-center sm:px-8"><Reveal><h2 className="text-[clamp(2rem,4vw,3.5rem)] font-medium">Eerst je financiële ruimte verkennen?</h2><div className="mt-9 flex justify-center"><PillLink to="/rekentools">Bekijk de rekentools</PillLink></div></Reveal></div></section>
    </>
  );
}