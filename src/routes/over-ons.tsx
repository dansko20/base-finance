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
      { title: "Over ons | Onafhankelijk en duurzaam | BASE FINANCE" },
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
              <p className="text-sm text-primary-foreground/70">Voor starters van 21 tot 35 jaar</p>
              <p className="mt-6 max-w-4xl text-[clamp(2rem,4.5vw,4rem)] font-medium leading-[1.06]">
                Van je eerste vaste baan naar je eerste eigen huis.
              </p>
              <p className="mt-6 max-w-2xl text-primary-foreground/80">
                We beginnen jaren vóór de aankoop, zodat je niet pas bij de bezichtiging ontdekt wat er kan.
              </p>
              <div className="mt-12 grid gap-8 sm:grid-cols-3">
                {[
                  { n: "01", t: "Eigen geld opbouwen", d: "Met beleggingsadvies laat je je spaargeld voor je werken." },
                  { n: "02", t: "Jouw sleuteldatum", d: "Je weet wanneer je naar verwachting kunt kopen." },
                  { n: "03", t: "Hypotheek met korting", d: "Is het zover? Als klant krijg je korting op je hypotheekadvies." },
                ].map((s, i) => (
                  <Reveal key={s.n} delay={0.1 + i * 0.12}>
                    <div className="border-t border-primary-foreground/20 pt-6">
                      <p className="text-sm text-primary-foreground/60">{s.n}</p>
                      <h3 className="mt-3 text-xl font-medium">{s.t}</h3>
                      <p className="mt-2 text-sm text-primary-foreground/70">{s.d}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
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
              <p>BASE FINANCE is je basiskamp voor elke financiële stap. Voor starters van 21 tot 35 jaar: je eerste baan, je eerste belegging, straks je eigen huis.</p>
              <p>Je krijgt één vaste adviseur voor beleggen én je hypotheek. Samen maken we een plan met een datum waarop je een huis kunt kopen. Die datum is een verwachting, geen garantie. We houden hem samen actueel.</p>
              <p>Duurzaamheid nemen we altijd mee, maar jouw situatie gaat voor.</p>
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

      <section className="pb-8 pt-16">
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

      <section className="section-y bg-background">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <Reveal>
            <p className="label-eyebrow">Vergunningen en diploma's</p>
            <h2 className="mt-8 max-w-xl text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.08]">Je kunt op ons rekenen</h2>
            <p className="mt-6 max-w-xl text-muted-foreground">Bij geldzaken wil je zeker weten dat je goed geholpen wordt. Daarom voldoen we aan alle regels voor financieel advies.</p>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Vergunning van de AFM", text: "We adviseren over hypotheken en beleggingen onder toezicht van de Autoriteit Financiële Markten." },
              { title: "Aangesloten bij het Kifid", text: "Ben je niet tevreden en komen we er samen niet uit? Dan kun je terecht bij het Klachteninstituut Financiële Dienstverlening." },
              { title: "Gediplomeerde adviseurs", text: "Al onze adviseurs hebben Wft Basis, plus Wft Hypothecair Krediet of Wft Vermogen. We houden onze kennis elk jaar bij." },
              { title: "Ingeschreven bij de KvK", text: "We staan ingeschreven bij de Kamer van Koophandel." },
              { title: "Verzekerd", text: "We hebben een beroepsaansprakelijkheidsverzekering." },
            ].map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08}>
                <div className="h-full rounded-xl bg-surface p-8">
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
            { value: 2026, label: "Opgericht in Rotterdam", plain: true },
            { value: 5, label: "Adviseurs" },
            { value: 5, label: "Geselecteerde fondsen, inclusief BASE FONDS" },
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
