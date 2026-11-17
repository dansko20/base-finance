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

const hypotheekvormen = [
  { title: "Annuïteitenhypotheek", text: "Je betaalt elke maand ongeveer hetzelfde bruto bedrag. In het begin is dat vooral rente, later vooral aflossing.", plus: ["Voorspelbare maandlast", "Lagere maandlast in de eerste jaren", "Hypotheekrenteaftrek mogelijk"], min: ["Je betaalt in totaal meer rente dan bij lineair", "Je schuld daalt in het begin langzaam"] },
  { title: "Lineaire hypotheek", text: "Je lost elke maand hetzelfde bedrag af. Daardoor daalt je rente, en dus je maandlast, elk jaar.", plus: ["Je betaalt in totaal de minste rente", "Je schuld daalt snel", "Hypotheekrenteaftrek mogelijk"], min: ["Hoogste maandlast in het begin", "Je kunt soms minder lenen"] },
  { title: "Aflossingsvrij", text: "Je betaalt alleen rente en lost niets af. Je schuld blijft dus even hoog.", plus: ["Laagste maandlast"], min: ["Geen hypotheekrenteaftrek bij nieuwe hypotheken", "Je schuld blijft staan", "Maximaal 50% van de woningwaarde"] },
];

const regelingen = [
  { title: "Vrijstelling overdrachtsbelasting", text: "Ben je 18 tot en met 34 jaar en ga je zelf in de woning wonen? Dan betaal je onder voorwaarden geen overdrachtsbelasting, zolang de woning onder de wettelijke grens blijft. Je kunt dit één keer gebruiken." },
  { title: "Nationale Hypotheek Garantie (NHG)", text: "Met NHG krijg je vaak een lagere rente en ben je beter beschermd als je je hypotheek door bijvoorbeeld werkloosheid of scheiding niet meer kunt betalen. Je betaalt eenmalig een borgtochtprovisie." },
  { title: "Starterslening", text: "Sommige gemeenten bieden een starterslening aan via SVn. Die overbrugt het verschil tussen de koopprijs en wat je bij de bank kunt lenen. Of jouw gemeente meedoet, zoeken we voor je uit." },
  { title: "Extra lenen voor verduurzaming", text: "Voor energiebesparende maatregelen zoals isolatie of zonnepanelen kun je vaak extra lenen, afhankelijk van het energielabel. Bij Allianz en ASN Bank kan dat ook tegen een lagere rente." },
];

const kostenKoper = [
  { title: "Notaris", text: "Voor de leveringsakte en de hypotheekakte." },
  { title: "Taxatie", text: "De geldverstrekker wil weten wat de woning waard is." },
  { title: "Bouwkundige keuring", text: "Niet verplicht, wel verstandig om verborgen gebreken te vinden." },
  { title: "Advies- en bemiddelingskosten", text: "Onze vaste tarieven staan op de pagina Tarieven." },
  { title: "NHG-borgtochtprovisie", text: "Een eenmalig percentage van je hypotheek als je NHG gebruikt." },
  { title: "Overdrachtsbelasting", text: "2% van de koopprijs, tenzij je de startersvrijstelling kunt gebruiken." },
];

const faq = [
  { vraag: "Is de eerste kennismaking gratis?", antwoord: "Ja. In het eerste gesprek bespreken we je situatie, wensen en de verwachte kosten van een vervolgtraject." },
  { vraag: "Vergelijken jullie alle geldverstrekkers?", antwoord: "Nee. In ons studentenproject hebben we meerdere aanbieders onderzocht en Allianz en ASN Bank gekozen. We kijken naar rente, voorwaarden en duurzaamheid, met jouw situatie voorop. Op de pagina Onze partners lees je waarom. We hebben geen officiële samenwerking met deze aanbieders." },
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

      <section className="section-y bg-background">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <Reveal><p className="label-eyebrow">Hypotheekvormen</p><h2 className="mt-8 text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.08]">Welke hypotheken zijn er?</h2><p className="mt-5 max-w-3xl text-muted-foreground">De hypotheekvorm bepaalt hoe je terugbetaalt. Dat heeft invloed op je maandlast nu en op wat je in totaal betaalt.</p></Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">{hypotheekvormen.map((v, i) => <Reveal key={v.title} delay={i * 0.08}><article className="h-full rounded-xl bg-surface p-8">
            <h3 className="text-2xl font-medium">{v.title}</h3><p className="mt-4 text-muted-foreground">{v.text}</p>
            <h4 className="mt-6 font-medium">Voordelen</h4><ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">{v.plus.map(x => <li key={x}>{x}</li>)}</ul>
            <h4 className="mt-5 font-medium">Nadelen</h4><ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">{v.min.map(x => <li key={x}>{x}</li>)}</ul>
          </article></Reveal>)}</div>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <Reveal><p className="label-eyebrow">Voor starters</p><h2 className="mt-8 text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.08]">Regelingen die je kunnen helpen</h2></Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">{regelingen.map((r, i) => <Reveal key={r.title} delay={i * 0.08}><article className="h-full rounded-xl bg-background p-8"><h3 className="text-2xl font-medium">{r.title}</h3><p className="mt-4 text-muted-foreground">{r.text}</p></article></Reveal>)}</div>
          <p className="mt-6 max-w-3xl text-xs text-muted-foreground">Bedragen en voorwaarden kunnen jaarlijks veranderen. In je adviesgesprek controleren we wat op jouw situatie van toepassing is.</p>
        </div>
      </section>

      <section className="section-y bg-background">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-5 sm:px-8 lg:grid-cols-2">
          <Reveal><p className="label-eyebrow">Kosten koper</p><h2 className="mt-8 text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.08]">Wat betaal je naast de woning?</h2><p className="mt-5 max-w-xl text-muted-foreground">Deze kosten betaal je meestal uit je eigen spaargeld. Reken voor een starter grofweg op 2 tot 4 procent van de koopprijs.</p></Reveal>
          <Reveal delay={0.12}><ul className="space-y-4">{kostenKoper.map(k => <li key={k.title} className="rounded-xl bg-surface p-5"><p className="font-medium">{k.title}</p><p className="mt-1 text-sm text-muted-foreground">{k.text}</p></li>)}</ul></Reveal>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-5 sm:px-8 lg:grid-cols-2">
          <Reveal><p className="label-eyebrow">Onze aanbieders</p><h2 className="mt-8 text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.08]">Allianz en ASN Bank</h2></Reveal>
          <Reveal delay={0.12}><p className="text-muted-foreground">In ons onderzoek kozen we Allianz en ASN Bank, onder meer vanwege hun duurzame leningdelen en heldere voorwaarden. Lees hoe we ze vergeleken en wat ze bieden.</p><div className="mt-9"><PillLink to="/onze-partners">Bekijk onze hypotheekaanbieders</PillLink></div></Reveal>
        </div>
      </section>

      <section className="section-y bg-background">
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