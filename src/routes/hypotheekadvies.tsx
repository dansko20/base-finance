import { createFileRoute } from "@tanstack/react-router";

import dienstHypotheek from "@/assets/starter-huissleutels.jpg";
import { Faq } from "@/components/site/Faq";
import { PillLink } from "@/components/site/PillButton";
import { Reveal } from "@/components/site/motion";

export const Route = createFileRoute("/hypotheekadvies")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Hypotheekadvies | BASE FINANCE" },
      { name: "description", content: "Hypotheekadvies voor je eerste huis: inzicht in wat je kunt lenen, je eigen geld en je maandlast met één vaste adviseur." },
      { property: "og:title", content: "Hypotheekadvies | BASE FINANCE" },
      { property: "og:description", content: "Persoonlijk hypotheekadvies met een heldere vergelijking en begeleiding tot de notaris." },
    ],
  }),
  component: Hypotheekadvies,
});

const doelgroepen = [
  { title: "Wat kun je lenen?", text: "Met je inkomen en vaste uitgaven berekenen we wat je kunt lenen. Zo weet je in welke prijsklasse je kunt zoeken." },
  { title: "Wat heb je zelf nodig?", text: "Naast je hypotheek heb je spaargeld nodig voor bijvoorbeeld de notaris en de aankoopkosten. We zetten die bedragen voor je op een rij." },
  { title: "Wat betaal je per maand?", text: "We kijken niet alleen naar het maximale bedrag, maar vooral naar een maandlast waarbij je prettig kunt blijven leven." },
];

const faq = [
  { vraag: "Is de eerste kennismaking gratis?", antwoord: "Ja. In het eerste gesprek bespreken we je situatie, wensen en de verwachte kosten van een vervolgtraject." },
  { vraag: "Vergelijken jullie alle geldverstrekkers?", antwoord: "We zijn onafhankelijk en vergelijken vijf aanbieders op rente, voorwaarden en duurzaamheid. Op de pagina Onze partners zie je welke en waarom." },
  { vraag: "Kan verduurzaming worden meegefinancierd?", antwoord: "Vaak wel. We bekijken het energielabel, de maatregelen en de extra leenruimte die daarbij mogelijk is." },
  { vraag: "Hoe lang duurt een hypotheekaanvraag?", antwoord: "Dat verschilt per situatie en geldverstrekker. Je krijgt vooraf een realistische planning en tijdens het traject houden we je op de hoogte." },
];

function Hypotheekadvies() {
  return (
    <>
      <section className="bg-background px-5 pb-16 pt-40 sm:px-8">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="label-eyebrow">Advies</p>
            <h1 className="mt-8 max-w-4xl text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.04]">Hypotheekadvies dat past bij je leven</h1>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="mx-auto grid max-w-[1400px] gap-6 px-5 sm:px-8 lg:grid-cols-3">
          {doelgroepen.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.1}>
              <article className="h-full rounded-xl bg-background p-8">
                <h2 className="text-2xl font-medium">{item.title}</h2>
                <p className="mt-4 text-muted-foreground">{item.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-y bg-background">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 sm:px-8 lg:grid-cols-2">
          <Reveal><img src={dienstHypotheek} alt="Jonge vrouw met de sleutels van haar eerste huis" loading="lazy" width={1024} height={1280} className="h-full min-h-[380px] w-full rounded-xl object-cover" /></Reveal>
          <Reveal delay={0.12}>
            <p className="label-eyebrow">Het adviestraject</p>
            <h2 className="mt-8 text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.08]">Van eerste berekening tot sleuteloverdracht</h2>
            <div className="mt-8 space-y-5 text-muted-foreground">
              <p>Je vaste adviseur kent je plannen al. Samen kijken we naar je inkomen, spaargeld, leningen en woonwens. Daarna vergelijken we hypotheken op rente, voorwaarden en wat je elke maand betaalt.</p>
              <p>Je krijgt duidelijke uitleg over de kosten en risico’s. We bespreken ook of energiezuinige keuzes passen bij je budget. Na je keuze regelen we de aanvraag en houden we contact met de bank, de woningtaxateur en de notaris.</p>
            </div>
            <div className="mt-9"><PillLink to="/plan-een-gesprek">Plan een gesprek</PillLink></div>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-5 sm:px-8 lg:grid-cols-2">
          <Reveal><p className="label-eyebrow">Oversluiten</p><h2 className="mt-8 max-w-xl text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.08]">Oversluiten: alleen als het je iets oplevert</h2></Reveal>
          <Reveal delay={0.12}>
            <div className="max-w-xl space-y-5 text-muted-foreground">
              <p>Oversluiten betekent dat je je huidige hypotheek vervangt door een nieuwe, meestal omdat de rente lager is. Dat kost wel geld: vaak een boeterente (de boete die je bank vraagt als je eerder aflost), advieskosten, een notaris en soms een taxatie.</p>
              <p>Wij rekenen eerst voor je uit na hoeveel maanden je die kosten hebt terugverdiend. Levert het niets op? Dan zeggen we dat eerlijk. Goed om te weten: boeterente en advieskosten zijn meestal aftrekbaar van de belasting.</p>
            </div>
            <div className="mt-9"><PillLink to="/tarieven" variant="outline">Bekijk de kosten van oversluiten</PillLink></div>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-background">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <Reveal><p className="label-eyebrow">Veelgestelde vragen</p><h2 className="mb-10 mt-8 text-4xl font-medium">Goed om vooraf te weten</h2></Reveal>
          <Faq items={faq} />
        </div>
      </section>

      <section className="section-y bg-primary text-primary-foreground">
        <div className="mx-auto max-w-[1400px] px-5 text-center sm:px-8">
          <Reveal><h2 className="text-[clamp(2rem,4vw,3.5rem)] font-medium">Benieuwd naar je maximale hypotheek?</h2><div className="mt-9 flex justify-center"><PillLink to="/rekentools" variant="outline">Open de rekentool</PillLink></div></Reveal>
        </div>
      </section>
    </>
  );
}