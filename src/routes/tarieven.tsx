import { createFileRoute } from "@tanstack/react-router";
import { Faq } from "@/components/site/Faq";
import { PillLink } from "@/components/site/PillButton";
import { Reveal } from "@/components/site/motion";

export const Route = createFileRoute("/tarieven")({
  head: () => ({ meta: [
    { title: "Tarieven | BASE FINANCE" },
    { name: "description", content: "Vooraf weten wat je betaalt: de vaste tarieven van BASE FINANCE voor beleggingsadvies en hypotheekadvies." },
    { property: "og:title", content: "Tarieven | BASE FINANCE" },
    { property: "og:description", content: "Geen provisie, wel heldere vaste tarieven. Je eerste kennismaking is gratis." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Tarieven,
});

const tarieven = [
  { t: "Kennismakingsgesprek", p: "Gratis", d: "We bespreken je situatie, je wensen en wat een traject kost. Je zit nergens aan vast." },
  { t: "Beleggingsadviesrapport", p: "€149 eenmalig", d: "Een vragenlijst, een gesprek, jouw risicoprofiel en een rapport met passende duurzame fondsen." },
  { t: "Basiskamp abonnement", p: "€9,95 per maand", d: "Maandelijks opzegbaar.", lijst: ["Je vaste adviseur", "Elk jaar een check van je beleggingen", "Een seintje als je verdeling is scheefgegroeid", "Een gesprek als je leven verandert, zoals een nieuwe baan", "Korting op je hypotheekadvies"], accent: true },
  { t: "Hypotheektraject", p: "€1.995", sub: "Voor abonnees €1.795", d: "Van berekening en vergelijking tot aanvraag en notaris." },
  { t: "Oversluiten", p: "€1.495", d: "We rekenen eerst gratis voor je uit of het je iets oplevert." },
];
const kosten = [
  { vraag: "Bij beleggen", antwoord: "Fondskosten: bij onze fondsen tussen 0,45% en 1,00% per jaar. Daarnaast kosten van de bank of het beleggingsplatform waar je belegt, zoals service of transactiekosten." },
  { vraag: "Bij een hypotheek", antwoord: "Taxatie van je woning (vaak rond €700 tot €750), de notaris voor de hypotheekakte (vaak €700 tot €1.200) en eventueel de Nationale Hypotheek Garantie (NHG: een eenmalige premie die je beschermt als je je hypotheek door pech niet meer kunt betalen)." },
  { vraag: "Bij oversluiten", antwoord: "Vaak een boeterente (de boete die je bank vraagt als je eerder aflost). Die is meestal aftrekbaar van de belasting." },
];

function Tarieven() {
  return <>
    <section className="bg-background px-5 pb-16 pt-40 sm:px-8"><div className="mx-auto max-w-[1400px]"><Reveal><p className="label-eyebrow">Tarieven</p><h1 className="mt-8 max-w-4xl text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.04]">Vooraf weten wat je betaalt</h1><p className="mt-7 max-w-2xl text-muted-foreground">Wij krijgen geen provisie van banken of fondsen. Dat mag ook niet: sinds 2013 geldt een provisieverbod. Jij betaalt alleen ons advies. Zo weet je zeker dat ons advies om jou draait.</p></Reveal></div></section>
    <section className="section-y bg-surface"><div className="mx-auto max-w-[1400px] px-5 sm:px-8"><Reveal><p className="label-eyebrow">Onze tarieven</p></Reveal><div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{tarieven.map((x, i) => <Reveal key={x.t} delay={i * 0.08}><article className={x.accent ? "h-full rounded-xl bg-primary p-8 text-primary-foreground" : "h-full rounded-xl bg-background p-8"}><h2 className="text-2xl font-medium">{x.t}</h2><p className="mt-4 text-3xl font-medium">{x.p}</p>{x.sub ? <p className="mt-1 text-sm opacity-80">{x.sub}</p> : null}<p className={x.accent ? "mt-4 text-primary-foreground/80" : "mt-4 text-muted-foreground"}>{x.d}</p>{x.lijst ? <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-primary-foreground/80">{x.lijst.map((l) => <li key={l}>{l}</li>)}</ul> : null}</article></Reveal>)}</div><p className="mt-8 text-sm text-muted-foreground">Van elk adviestraject gaat €25 naar het planten van bomen.</p></div></section>
    <section className="section-y bg-background"><div className="mx-auto grid max-w-[1400px] gap-6 px-5 sm:px-8 lg:grid-cols-2"><Reveal><h2 className="text-[clamp(2rem,4vw,3.5rem)] font-medium">Goed om te weten</h2></Reveal><Reveal delay={0.12}><div className="space-y-5 text-muted-foreground"><p>Hypotheekadvies is aftrekbaar. De kosten voor advies en bemiddeling mag je aftrekken van je inkomen, als je de hypotheek ook echt afsluit. In 2026 krijg je zo maximaal 37,56% terug.</p><p>Over advieskosten betaal je geen btw.</p></div></Reveal></div></section>
    <section className="section-y bg-surface"><div className="mx-auto max-w-4xl px-5 sm:px-8"><Reveal><h2 className="text-4xl font-medium">Andere kosten die je kunt tegenkomen</h2><p className="mb-10 mt-6 text-muted-foreground">Deze kosten betaal je niet aan ons, maar aan andere partijen. We zetten ze vooraf voor je op een rij.</p></Reveal><Faq items={kosten} /></div></section>
    <section className="section-y bg-background"><div className="mx-auto max-w-[1400px] px-5 text-center sm:px-8"><Reveal><h2 className="text-[clamp(2rem,4vw,3.5rem)] font-medium">Vragen over de kosten?</h2><div className="mt-9 flex justify-center"><PillLink to="/plan-een-gesprek">Plan een gratis kennismaking</PillLink></div></Reveal></div></section>
  </>;
}
