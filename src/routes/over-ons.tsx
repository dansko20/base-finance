import { createFileRoute } from "@tanstack/react-router";

import overGesprek from "@/assets/over-gesprek.jpg";
import overWoning from "@/assets/over-woning.jpg";
import overLaptop from "@/assets/over-laptop.jpg";

import { Reveal, CountUp } from "@/components/site/motion";
import { PillLink } from "@/components/site/PillButton";

export const Route = createFileRoute("/over-ons")({
  head: () => ({
    meta: [
      { title: "Over ons — Onafhankelijk en duurzaam | BASE FINANCE" },
      {
        name: "description",
        content:
          "BASE FINANCE is een onafhankelijk financieel adviesbureau in Rotterdam met duurzaam hypotheek- en beleggingsadvies.",
      },
      { property: "og:title", content: "Over BASE FINANCE" },
      {
        property: "og:description",
        content:
          "Onafhankelijk financieel adviesbureau in Rotterdam, gespecialiseerd in duurzaam hypotheek- en beleggingsadvies.",
      },
    ],
  }),
  component: OverOns,
});

function OverOns() {
  return (
    <>
      <section className="bg-background px-5 pb-16 pt-40 sm:px-8">
        <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="label-eyebrow">Over ons</p>
            <h1 className="mt-8 max-w-xl text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.04]">
              Onafhankelijk sinds dag één
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="max-w-xl space-y-6 text-muted-foreground lg:pt-24">
              <p>
                BASE FINANCE is in 2008 opgericht in Rotterdam met één uitgangspunt:
                advies moet vrij zijn van commerciële belangen. We ontvangen daarom geen
                provisie van geldverstrekkers, verzekeraars of fondshuizen.
              </p>
              <p>
                Ons team van acht adviseurs en planners begeleidt starters, doorstromers
                en ondernemers. Duurzaamheid is geen extraatje maar een vast onderdeel
                van elk advies: van energielabel en verduurzamingsbudget tot de
                fondsselectie in je portefeuille.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-8">
        <div className="mx-auto grid max-w-[1400px] gap-5 px-5 sm:grid-cols-3 sm:px-8">
          {[
            { src: overGesprek, alt: "Adviesgesprek bij BASE FINANCE" },
            { src: overWoning, alt: "Verduurzaamde woning" },
            { src: overLaptop, alt: "Rendementsoverzicht op laptop" },
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

      <section className="section-y bg-background">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <Reveal><p className="label-eyebrow">Ons team</p><h2 className="mt-8 text-[clamp(2rem,4vw,3.5rem)] font-medium">Persoonlijk advies begint bij mensen</h2></Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              { src: overGesprek, naam: "Eva de Boer", functie: "Hypotheekadviseur" },
              { src: overWoning, naam: "Thomas van Dijk", functie: "Financieel planner" },
              { src: overLaptop, naam: "Noor Bakker", functie: "Beleggingsadviseur" },
            ].map((persoon, i) => (
              <Reveal key={persoon.naam} delay={i * 0.1}><article><img src={persoon.src} alt={`${persoon.naam}, ${persoon.functie}`} width={1024} height={1280} loading="lazy" className="h-[380px] w-full rounded-xl object-cover" /><h3 className="mt-5 text-xl font-medium">{persoon.naam}</h3><p className="mt-1 text-sm text-muted-foreground">{persoon.functie}</p></article></Reveal>
            ))}
          </div>
        </div>
      </section>

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
                text: "Bij elk traject rekenen we uit wat verduurzaming oplevert voor je maandlast, comfort en woningwaarde.",
              },
              {
                title: "Begrijpelijke taal",
                text: "Geen jargon en geen kleine lettertjes: je krijgt een rapport dat je aan je keukentafel kunt uitleggen.",
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
            { value: 8, label: "Adviseurs en planners" },
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
