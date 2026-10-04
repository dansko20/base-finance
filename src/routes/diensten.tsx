import { createFileRoute } from "@tanstack/react-router";
import { Home, LineChart } from "lucide-react";

import dienstHypotheek from "@/assets/dienst-hypotheek.jpg";
import dienstBeleggen from "@/assets/dienst-beleggen.jpg";

import { Reveal } from "@/components/site/motion";
import { PillLink } from "@/components/site/PillButton";

export const Route = createFileRoute("/diensten")({
  head: () => ({
    meta: [
      { title: "Diensten — Hypotheek en beleggen | BASE FINANCE" },
      {
        name: "description",
        content:
          "Onafhankelijk hypotheekadvies en beleggingsadvies zonder provisie.",
      },
      { property: "og:title", content: "Diensten | BASE FINANCE" },
      {
        property: "og:description",
        content:
          "Hypotheekadvies en beleggingsadvies bij BASE FINANCE.",
      },
    ],
  }),
  component: Diensten,
});

const diensten = [
  {
    icon: Home,
    title: "Hypotheekadvies",
    image: dienstHypotheek,
    intro:
      "Je eerste woning, doorstromen of oversluiten. Wij vergelijken alle geldverstrekkers en rekenen scenario's door tot je zeker weet dat de maandlast comfortabel blijft.",
    points: [
      "Volledige marktvergelijking, geen vaste partners",
      "Groene rentekorting en energiebespaarbudget",
      "Begeleiding tot en met de notaris",
    ],
  },
  {
    icon: LineChart,
    title: "Beleggingsadvies",
    image: dienstBeleggen,
    intro:
      "Vermogen laten groeien met een portefeuille die past bij je horizon en je risicobereidheid, met lage kosten en heldere rapportage.",
    points: [
      "Risicoprofiel en doelvermogen als vertrekpunt",
      "Duurzame indexfondsen met lage lopende kosten",
      "Halfjaarlijkse evaluatie en herbalancering",
    ],
  },
];

function Diensten() {
  return (
    <>
      <section className="bg-background px-5 pb-16 pt-40 sm:px-8">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="label-eyebrow">Onze diensten</p>
            <h1 className="mt-8 max-w-3xl text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.04]">
              Alles wat je nodig hebt om rustig te beslissen
            </h1>
            <p className="mt-8 max-w-xl text-muted-foreground">
              Wij werken zonder provisie van banken of fondsen. Je betaalt een vast
              tarief per traject en weet daardoor vooraf precies waar je aan toe bent.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="mx-auto max-w-[1400px] space-y-6 px-5 sm:px-8">
          {diensten.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.08}>
              <article className="grid gap-8 overflow-hidden rounded-xl bg-background p-6 lg:grid-cols-[1fr_1.2fr] lg:p-8">
                <img
                  src={d.image}
                  alt={d.title}
                  loading="lazy"
                  width={1024}
                  height={1024}
                  className="h-72 w-full rounded-lg object-cover lg:h-full"
                />
                <div className="lg:py-4">
                  <d.icon className="size-6 text-primary" />
                  <h2 className="mt-5 text-3xl font-medium sm:text-4xl">{d.title}</h2>
                  <p className="mt-5 max-w-xl text-muted-foreground">{d.intro}</p>
                  <ul className="mt-6 space-y-3 text-sm">
                    {d.points.map((p) => (
                      <li key={p} className="flex gap-3 border-t border-border pt-3">
                        <span className="text-primary">—</span>
                        <span className="text-muted-foreground">{p}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <PillLink to="/plan-een-gesprek" variant="outline">
                      Bespreek {d.title.toLowerCase()}
                    </PillLink>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-y bg-background">
        <div className="mx-auto max-w-[1400px] px-5 text-center sm:px-8">
          <Reveal>
            <h2 className="mx-auto max-w-2xl text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.08]">
              Niet zeker welk traject bij je past?
            </h2>
            <div className="mt-10 flex justify-center">
              <PillLink to="/plan-een-gesprek">Plan een gratis kennismaking</PillLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
