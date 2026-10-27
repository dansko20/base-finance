import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/motion";
import { PillLink } from "@/components/site/PillButton";

export const Route = createFileRoute("/werkwijze")({
  head: () => ({ meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    { title: "Onze werkwijze | BASE FINANCE" },
    { name: "description", content: "Van je eerste vaste baan naar een eigen huis: ontdek je toekomstplan en onze zes stappen." },
    { property: "og:title", content: "Onze werkwijze | BASE FINANCE" },
    { property: "og:description", content: "Van oriëntatie tot nazorg: één vaste adviseur begeleidt je bij elke stap." },
  ] }),
  component: Werkwijze,
});

const stappen = [
  { nr: "01", title: "Oriëntatie", gratis: true, text: "Je kijkt rond op onze site en gebruikt de rekentools. Zo zie je alvast wat er ongeveer kan." },
  { nr: "02", title: "Kennismakingsgesprek", gratis: true, text: "Je vertelt over je situatie, wensen en doelen. Wij leggen uit wat we voor je kunnen doen en wat het kost." },
  { nr: "03", title: "Inventarisatie", gratis: true, text: "We zetten je inkomen, uitgaven, spaargeld en schulden op een rij. Zo zien we welke mogelijkheden bij je passen." },
  { nr: "04", title: "Adviestraject", tarieven: true, text: "Je vaste adviseur werkt een persoonlijk advies uit, voor je beleggingen, je hypotheek of allebei." },
  { nr: "05", title: "Adviesrapport", text: "Je krijgt een helder rapport met onze aanbevelingen en een datum waarop je naar verwachting een huis kunt kopen." },
  { nr: "06", title: "Begeleiding en nazorg", text: "We helpen je met de uitvoering en blijven bereikbaar. Met het Basiskamp abonnement kijken we elk jaar of je plan nog klopt." },
];

function Werkwijze() {
  return <><section className="bg-background px-5 pb-16 pt-40 sm:px-8"><div className="mx-auto max-w-[1400px]"><Reveal><p className="label-eyebrow">Onze werkwijze</p><h1 className="mt-8 max-w-4xl text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.04]">Zes stappen naar je eigen huis</h1></Reveal></div></section><section id="jouw-financiele-toekomst" className="section-y scroll-mt-28 bg-background"><div className="mx-auto grid max-w-[1400px] gap-10 px-5 sm:px-8 lg:grid-cols-2"><Reveal><p className="label-eyebrow">Jouw toekomstplan</p><h2 className="mt-8 max-w-xl text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.08]">Jouw financiële toekomst</h2></Reveal><Reveal delay={0.12}><div className="max-w-xl space-y-6 text-muted-foreground"><p>Tussen je 21e en 35e verandert er veel. Je eerste baan, een huurwoning, wat spaargeld en vragen over later. Door nu bewust naar je geld te kijken, krijg je overzicht zonder dat je alles meteen hoeft te weten.</p><p>Misschien wil je een eigen huis, minder zorgen over geld of de vrijheid om keuzes te maken. Hoe eerder je weet wat je nodig hebt, hoe gerichter je kunt sparen en plannen. Kleine stappen geven je meer grip.</p><p>We brengen eerst je situatie in kaart. Daarna kijken we of beleggen richting je doel past bij de tijd die je hebt en het risico dat je kunt dragen. Geld dat je binnenkort nodig hebt voor je huis, houd je liever beschikbaar. Als kopen haalbaar wordt, zoeken we een hypotheek die bij je past.</p><p>Je vaste adviseur rekent toe naar een concrete streefdatum waarop je je eigen huis kunt kopen en begeleidt je tot die tijd. Die datum is gebaseerd op aannames over inkomen, sparen, woningprijzen en rente, niet op gegarandeerd beleggingsresultaat. Verandert je situatie? Dan passen we samen je plan aan.</p></div></Reveal></div></section><section className="section-y bg-surface"><div className="mx-auto max-w-[1100px] px-5 sm:px-8">{stappen.map((stap, index) => <Reveal key={stap.nr} delay={index * 0.08}><article className="grid gap-5 border-t border-border py-10 sm:grid-cols-[100px_1fr_1.4fr]"><span className="text-primary">{stap.nr}</span><div><h2 className="text-2xl font-medium">{stap.title}</h2>{stap.gratis ? <span className="mt-3 inline-block rounded-full bg-accent px-2.5 py-0.5 text-xs text-primary">Gratis</span> : null}</div><div><p className="text-muted-foreground">{stap.text}</p>{stap.tarieven ? <Link to="/tarieven" className="mt-3 inline-block text-sm text-primary underline-offset-4 hover:underline">Bekijk onze tarieven</Link> : null}</div></article></Reveal>)}</div></section><section className="section-y bg-background"><div className="mx-auto max-w-[1400px] px-5 text-center sm:px-8"><Reveal><h2 className="text-[clamp(2rem,4vw,3.5rem)] font-medium">Klaar voor de eerste stap?</h2><div className="mt-9 flex justify-center"><PillLink to="/plan-een-gesprek">Plan een kennismaking</PillLink></div></Reveal></div></section></>;
}