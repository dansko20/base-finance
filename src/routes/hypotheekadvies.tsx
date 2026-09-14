import { createFileRoute } from "@tanstack/react-router";

import dienstHypotheek from "@/assets/dienst-hypotheek.jpg";
import { Faq } from "@/components/site/Faq";
import { PillLink } from "@/components/site/PillButton";
import { Reveal } from "@/components/site/motion";

export const Route = createFileRoute("/hypotheekadvies")({
  head: () => ({
    meta: [
      { title: "Hypotheekadvies | BASE FINANCE" },
      { name: "description", content: "Onafhankelijk hypotheekadvies voor starters, doorstromers en oversluiters." },
      { property: "og:title", content: "Hypotheekadvies | BASE FINANCE" },
      { property: "og:description", content: "Persoonlijk hypotheekadvies met een heldere vergelijking en begeleiding tot de notaris." },
    ],
  }),
  component: Hypotheekadvies,
});

const doelgroepen = [
  { title: "Starters", text: "We brengen je leenruimte, maandlasten en benodigde eigen geld in kaart en begeleiden je bij je eerste bod." },
  { title: "Doorstromers", text: "We rekenen verkoop, overwaarde, overbruggingskrediet en de financiering van je volgende woning als één geheel door." },
  { title: "Oversluiters", text: "We vergelijken rentevoordeel, boeterente en kosten, zodat je weet of oversluiten echt voordeel oplevert." },
];

const faq = [
  { vraag: "Is de eerste kennismaking gratis?", antwoord: "Ja. In het eerste gesprek bespreken we je situatie, wensen en de verwachte kosten van een vervolgtraject." },
  { vraag: "Vergelijken jullie alle geldverstrekkers?", antwoord: "We werken onafhankelijk en vergelijken een breed aanbod op rente, voorwaarden en flexibiliteit." },
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
          <Reveal><img src={dienstHypotheek} alt="Persoonlijk hypotheekadvies" width={1024} height={1024} className="h-full min-h-[380px] w-full rounded-xl object-cover" /></Reveal>
          <Reveal delay={0.12}>
            <p className="label-eyebrow">Het adviestraject</p>
            <h2 className="mt-8 text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.08]">Van eerste berekening tot sleuteloverdracht</h2>
            <div className="mt-8 space-y-5 text-muted-foreground">
              <p>We beginnen met je wensen, inkomen, verplichtingen en toekomstplannen. Daarna vergelijken we passende hypotheken en rekenen we meerdere scenario’s door.</p>
              <p>Je ontvangt een begrijpelijk advies met de maandlasten, risico’s en voorwaarden. Na je keuze verzorgen we de aanvraag en houden we contact met geldverstrekker, taxateur en notaris.</p>
            </div>
            <div className="mt-9"><PillLink to="/plan-een-gesprek">Plan een gesprek</PillLink></div>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-surface">
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