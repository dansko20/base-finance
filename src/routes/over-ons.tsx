import { createFileRoute } from "@tanstack/react-router";

import overGesprek from "@/assets/starters-adviesgesprek.jpg";
import overWoning from "@/assets/starter-huissleutels.jpg";
import overLaptop from "@/assets/starter-financien.jpg";
import { AdvisorTeam } from "@/components/site/AdvisorTeam";

import { Reveal, CountUp } from "@/components/site/motion";
import { PillLink } from "@/components/site/PillButton";

export const Route = createFileRoute("/over-ons")({
  head: () => ({
    meta: [
      { title: "Over ons — Onafhankelijk en duurzaam | BASE FINANCE" },
      {
        name: "description",
        content:
          "BASE FINANCE is het Base Camp voor starters van 21 tot 35 jaar: één vaste adviseur voor beleggen en je eerste hypotheek.",
      },
      { property: "og:title", content: "Over BASE FINANCE" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        property: "og:description",
        content:
          "Maak kennis met je Base Camp: één vaste adviseur, een helder plan en duurzame keuzes die bij jouw situatie passen.",
      },
    ],
  }),
  component: OverOns,
});

function OverOns() {
  return (
    <>
      <section className="bg-background px-5 pb-8 pt-40 sm:px-8">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <div className="rounded-xl bg-primary p-8 text-primary-foreground sm:p-12 lg:p-16">
              <p className="max-w-5xl text-[clamp(1.375rem,2.6vw,2.25rem)] font-medium leading-[1.3]">
                BASE FINANCE helpt starters van 21 tot 35 jaar met een vast inkomen rond modaal op weg naar hun eerste huis. We beginnen jaren vóór de aankoop. Met beleggingsadvies bouw je eigen geld op, en we geven je een sleuteldatum: wanneer je naar verwachting kunt kopen. Is het zover, dan regelen we ook je hypotheekadvies, met korting omdat je al klant bent.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-background px-5 pb-16 pt-16 sm:px-8">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="label-eyebrow">Over ons</p>
            <h1 className="mt-8 max-w-xl text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.04]">
              Jouw Base Camp
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="max-w-xl space-y-6 text-muted-foreground lg:pt-24">
              <p>
                BASE FINANCE is je basiskamp voor elke financiële stap. We helpen starters van 21 tot 35 jaar: je hebt je eerste vaste baan, huurt of woont nog thuis en denkt aan een eigen huis. Bij ons krijg je één vaste adviseur voor beleggen én je hypotheek.
              </p>
              <p>
                Wij geven je één vaste adviseur en een helder plan, zodat je precies weet wanneer je je eigen huis kunt kopen. Eerlijk, zonder kleine lettertjes.
              </p>
              <p>We werken met een concrete streefdatum op basis van je situatie en duidelijke aannames. Dat is geen garantie: je inkomen, woningprijzen en rente kunnen veranderen. Samen houden we je plan actueel.
              </p>
              <p>Duurzaamheid nemen we mee in elk advies, maar jouw situatie staat altijd voorop. Zo bouw je aan rust en grip op je toekomst.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <Reveal>
            <h2 className="max-w-xl text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.08]">
              Onze missie & visie
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {[
              {
                title: "Onze missie",
                quote: "Wij willen jonge mensen helpen om met vertrouwen financiële keuzes te maken voor hun toekomst.",
                text: "BASE FINANCE wil jonge werkenden helpen om met vertrouwen financiële keuzes te maken. Het kopen van een eerste woning en het opbouwen van vermogen hebben grote gevolgen voor je financiële toekomst. Daarom vinden we het belangrijk dat je je mogelijkheden, kosten en risico’s begrijpt voordat je een beslissing neemt.",
              },
              {
                title: "Onze visie",
                quote: "Een toekomst waarin jonge mensen hun eerste woning kunnen kopen en bewust vermogen kunnen opbouwen.",
                text: "BASE FINANCE streeft naar een toekomst waarin jonge werkenden met voldoende kennis en vertrouwen hun eerste woning kunnen kopen en bewust vermogen kunnen opbouwen. We ondersteunen je daarbij met een financieel plan dat ook na de aankoop van je woning relevant blijft.",
              },
            ].map((b, i) => (
              <Reveal key={b.title} delay={i * 0.12}>
                <div className="h-full rounded-xl bg-background p-8 sm:p-10">
                  <h3 className="text-xl font-medium">{b.title}</h3>
                  <p className="mt-5 text-2xl font-medium leading-snug">“{b.quote}”</p>
                  <p className="mt-5 text-sm text-muted-foreground">{b.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-8">
        <div className="mx-auto grid max-w-[1400px] gap-5 px-5 sm:grid-cols-3 sm:px-8">
          {[
            { src: overGesprek, alt: "Ontspannen gesprek tussen een starter en een jonge adviseur" },
            { src: overWoning, alt: "Starter met de sleutels van haar eerste huis" },
            { src: overLaptop, alt: "Jongvolwassene bekijkt haar financiën aan de keukentafel" },
          ].map((img, i) => (
            <Reveal key={img.alt} delay={i * 0.12}>
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                width={1024}
                height={1280}
                className="h-[320px] w-full rounded-xl object-cover sm:h-[440px]"
              />
            </Reveal>
          ))}
        </div>
      </section>

      <AdvisorTeam />

      <section className="section-y bg-surface">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <Reveal>
            <p className="label-eyebrow">Waar we voor staan</p>
            <h2 className="mt-8 max-w-xl text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.08]">
              Drie beloftes die
              <br />
              we altijd nakomen
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Geen provisie",
                text: "Wij worden alleen door jou betaald. Zo weet je zeker dat een advies nooit door een vergoeding is ingegeven.",
              },
              {
                title: "Duurzaam als standaard",
                text: "We bespreken duurzame mogelijkheden bij beleggen en je woning. Jij kiest wat past bij je wensen en wat je kunt betalen.",
              },
              {
                title: "Begrijpelijke taal",
                text: "Eerlijke uitleg over kosten, kansen en risico’s. Je krijgt een helder plan dat je begrijpt, zonder kleine lettertjes.",
              },
            ].map((v, i) => (
              <Reveal key={v.title} delay={i * 0.12}>
                <div className="h-full rounded-xl bg-background p-8">
                  <h3 className="text-xl font-medium">{v.title}</h3>
                  <p className="mt-4 text-sm text-muted-foreground">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-[1400px] gap-10 px-5 sm:px-8 lg:grid-cols-3">
          {[
            { value: 2008, label: "Opgericht in Rotterdam", plain: true },
            { value: 5, label: "Adviseurs" },
            { value: 96, suffix: "%", label: "Klanten beveelt ons aan" },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 0.12}>
              <div className="border-t border-primary-foreground/20 pt-6">
                <p className="text-[clamp(2.5rem,5vw,4rem)] font-medium leading-none">
                  {s.plain ? s.value : <CountUp to={s.value} suffix={s.suffix ?? ""} />}
                </p>
                <p className="mt-4 text-sm text-primary-foreground/70">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-y bg-background">
        <div className="mx-auto max-w-[1400px] px-5 text-center sm:px-8">
          <Reveal>
            <h2 className="mx-auto max-w-2xl text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.08]">
              Leer ons kennen bij een kop koffie
            </h2>
            <div className="mt-10 flex justify-center">
              <PillLink to="/plan-een-gesprek">Plan een gesprek</PillLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
