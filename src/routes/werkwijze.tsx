import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/motion";
import { PillLink } from "@/components/site/PillButton";

export const Route = createFileRoute("/werkwijze")({
  head: () => ({ meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    { title: "Onze werkwijze | BASE FINANCE" },
    { name: "description", content: "Van je eerste vaste baan naar een eigen huis: ontdek je toekomstplan en onze drie stappen." },
    { property: "og:title", content: "Onze werkwijze | BASE FINANCE" },
    { property: "og:description", content: "Kennismaken, jouw plan en je huis kopen: één vaste adviseur begeleidt je bij elke stap." },
  ] }),
  component: Werkwijze,
});

const stappen = [
  { nr: "01", title: "Kennismaken", text: "We brengen jouw situatie en wensen in kaart. Wat komt er binnen, wat geef je uit en wat heb je gespaard? Je vaste adviseur luistert naar je vragen en legt uit welke vervolgstappen en kosten je kunt verwachten." },
  { nr: "02", title: "Jouw plan", text: "We kijken hoe je kunt beleggen richting je eigen huis. Eerst houden we spaargeld apart voor onverwachte uitgaven. Beleggen doen we alleen als je genoeg tijd hebt en mogelijke verliezen kunt dragen. Je krijgt een haalbaar plan met een concrete streefdatum en duidelijke aannames." },
  { nr: "03", title: "Je huis kopen", text: "Dezelfde adviseur helpt je met je hypotheek. We bekijken wat je kunt lenen, welk eigen geld nodig is en welke maandlast bij je past. We vergelijken hypotheken, regelen de aanvraag en begeleiden je tot de sleuteloverdracht." },
];

function Werkwijze() {
  return <><section className="bg-background px-5 pb-16 pt-40 sm:px-8"><div className="mx-auto max-w-[1400px]"><Reveal><p className="label-eyebrow">Onze werkwijze</p><h1 className="mt-8 max-w-4xl text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.04]">Drie stappen naar je eigen huis</h1></Reveal></div></section><section id="jouw-financiele-toekomst" className="section-y scroll-mt-28 bg-background"><div className="mx-auto grid max-w-[1400px] gap-10 px-5 sm:px-8 lg:grid-cols-2"><Reveal><p className="label-eyebrow">Jouw toekomstplan</p><h2 className="mt-8 max-w-xl text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.08]">Jouw financiële toekomst</h2></Reveal><Reveal delay={0.12}><div className="max-w-xl space-y-6 text-muted-foreground"><p>Tussen je 21e en 35e verandert er veel. Je eerste baan, een huurwoning, wat spaargeld en vragen over later. Door nu bewust naar je geld te kijken, krijg je overzicht zonder dat je alles meteen hoeft te weten.</p><p>Misschien wil je een eigen huis, minder zorgen over geld of de vrijheid om keuzes te maken. Hoe eerder je weet wat je nodig hebt, hoe gerichter je kunt sparen en plannen. Kleine stappen geven je meer grip.</p><p>We brengen eerst je situatie in kaart. Daarna kijken we of beleggen richting je doel past bij de tijd die je hebt en het risico dat je kunt dragen. Geld dat je binnenkort nodig hebt voor je huis, houd je liever beschikbaar. Als kopen haalbaar wordt, zoeken we een hypotheek die bij je past.</p><p>Je vaste adviseur rekent toe naar een concrete streefdatum waarop je je eigen huis kunt kopen en begeleidt je tot die tijd. Die datum is gebaseerd op aannames over inkomen, sparen, woningprijzen en rente, niet op gegarandeerd beleggingsresultaat. Verandert je situatie? Dan passen we samen je plan aan.</p></div></Reveal></div></section><section className="section-y bg-surface"><div className="mx-auto max-w-[1100px] px-5 sm:px-8">{stappen.map((stap, index) => <Reveal key={stap.nr} delay={index * 0.08}><article className="grid gap-5 border-t border-border py-10 sm:grid-cols-[100px_1fr_1.4fr]"><span className="text-primary">{stap.nr}</span><h2 className="text-2xl font-medium">{stap.title}</h2><p className="text-muted-foreground">{stap.text}</p></article></Reveal>)}</div></section><section className="section-y bg-background"><div className="mx-auto max-w-[1400px] px-5 text-center sm:px-8"><Reveal><h2 className="text-[clamp(2rem,4vw,3.5rem)] font-medium">Klaar voor de eerste stap?</h2><div className="mt-9 flex justify-center"><PillLink to="/plan-een-gesprek">Plan een kennismaking</PillLink></div></Reveal></div></section></>;
}