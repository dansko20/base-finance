import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Home, LineChart } from "lucide-react";

import heroImg from "@/assets/starters-eerste-appartement.jpg";
import dienstHypotheek from "@/assets/hypotheek-sleutel-voordeur.jpg";
import dienstBeleggen from "@/assets/beleggen-man-laptop-voorkant.jpg";

import { Reveal, CountUp } from "@/components/site/motion";
import { PillAnchor, PillLink } from "@/components/site/PillButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "BASE FINANCE — Advies voor hypotheek en vermogen" },
      {
        name: "description",
        content:
          "Je eerste baan, je eerste belegging en straks je eigen huis. BASE FINANCE helpt starters met één vaste adviseur en een helder plan.",
      },
      {
        property: "og:title",
        content: "BASE FINANCE — Onafhankelijk advies voor hypotheek en vermogen",
      },
      {
        property: "og:description",
        content:
          "Rust en grip op je toekomst: hypotheekadvies en beleggingsadvies voor starters met één vaste adviseur.",
      },
    ],
  }),
  component: Home_,
});

const diensten = [
  {
    icon: Home,
    title: "Hypotheekadvies",
    image: dienstHypotheek,
    text: "Je eerste huis begint met overzicht: wat kun je lenen en welke maandlast past bij je?",
  },
  {
    icon: LineChart,
    title: "Beleggingsadvies",
    image: dienstBeleggen,
    text: "Samen kijken we of beleggen past bij je koopwens, je spaargeld en de tijd die je hebt.",
  },
];

function Home_() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-8%"]);

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative h-[92vh] min-h-[600px] overflow-hidden">
        <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10 scale-110">
          <img
            src={heroImg}
            alt="Jong stel met verhuisdozen in hun eerste appartement"
            width={1920}
            height={1088}
            className="size-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </motion.div>

        <motion.div
          style={{ y: textY }}
          className="mx-auto flex h-full max-w-[1400px] flex-col justify-end px-5 pb-20 sm:px-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl text-[clamp(2.5rem,7vw,5.5rem)] font-medium leading-[1.02] text-hero-foreground"
          >
            Jouw financiële toekomst begint vandaag.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="mt-6 max-w-xl text-hero-foreground/80"
          >
            Je eerste vaste baan, je eerste belegging, straks je eigen huis. Wij helpen je stap voor stap, met één vaste adviseur die met je meedenkt.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <PillLink to="/plan-een-gesprek">Plan een gratis kennismaking</PillLink>
            <PillLink to="/hypotheekadvies" variant="ghost" className="text-hero-foreground">
              Bekijk hypotheekadvies
            </PillLink>
          </motion.div>
        </motion.div>
      </section>

      {/* Over ons */}
      <section className="section-y bg-background">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <Reveal>
              <p className="label-eyebrow">Jouw volgende stap</p>
              <h2 className="mt-10 max-w-lg text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.08]">
                Waar sta jij nu?
              </h2>
            </Reveal>
            <Reveal delay={0.15} className="lg:pt-1">
              <div className="max-w-xl space-y-6 text-muted-foreground">
                <p>
                  Ik huur nu, maar wanneer kan ik eigenlijk kopen?
                </p>
                <p>
                  Ik heb wat spaargeld, maar ik weet niet of ik moet beleggen.
                </p>
                <p>Ik heb mijn eerste vaste baan. Wat zijn mijn volgende stappen?</p>
                <p>Je hoeft het niet alleen uit te zoeken.</p>
                <p>Van je eerste baan naar je eigen huis: samen maken we je toekomstplan, met overzicht en haalbare stappen.

                </p>
                <div className="pt-2">
                  <PillAnchor href="/werkwijze#jouw-financiele-toekomst" variant="outline">
                    Ontdek jouw toekomstplan
                  </PillAnchor>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Diensten */}
      <section className="section-y bg-surface">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <Reveal>
              <p className="label-eyebrow">Onze diensten</p>
              <h2 className="mt-8 max-w-md text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.08]">
                Twee expertises,
                <br />
                één financieel plan
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="max-w-md text-muted-foreground lg:mt-20">
                Eén vaste adviseur kijkt met je mee bij beleggen én je hypotheek. Duurzame keuzes nemen we mee, maar jouw situatie staat voorop.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {diensten.map((d, i) => (
              <Reveal key={d.title} delay={i * 0.12}>
                <article className="group h-full overflow-hidden rounded-xl bg-background transition-shadow duration-500 hover:shadow-soft">
                  <img
                    src={d.image}
                    alt={d.title}
                    loading="lazy"
                    width={1280}
                    height={800}
                    className="h-[26rem] w-full object-cover object-[center_18%] transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                  <div className="p-6">
                    <d.icon className="size-6 text-primary" />
                    <h3 className="mt-4 text-xl font-medium">{d.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground">{d.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2}>
            <div className="mt-12 flex justify-center">
              <PillLink to="/rekentools">Bekijk onze rekentools</PillLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Resultaten */}
      <section className="section-y bg-primary text-primary-foreground">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <Reveal>
            <p className="text-sm text-primary-foreground/60">In cijfers</p>
            <h2 className="mt-8 max-w-2xl text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.08]">
              Resultaten waar
              <br />
              onze klanten op bouwen
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: 1850, suffix: "+", label: "Begeleide hypotheekaanvragen" },
              { value: 420, prefix: "€", suffix: " mln", label: "Geadviseerd vermogen" },
              { value: 9.4, decimals: 1, label: "Gemiddelde klantbeoordeling" },
              { value: 18, label: "Jaar ervaring in de markt" },
            ].map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.12}>
                <div className="border-t border-primary-foreground/20 pt-6">
                  <p className="text-[clamp(2.5rem,5vw,4rem)] font-medium leading-none">
                    <CountUp
                      to={stat.value}
                      prefix={stat.prefix ?? ""}
                      suffix={stat.suffix ?? ""}
                      decimals={stat.decimals ?? 0}
                    />
                  </p>
                  <p className="mt-4 text-sm text-primary-foreground/70">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Werkwijze */}
      <section className="section-y bg-background">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <Reveal>
            <p className="label-eyebrow">Werkwijze</p>
            <h2 className="mt-8 max-w-xl text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.08]">
              Van eerste gesprek
              <br />
              naar je eigen huis
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden rounded-xl bg-border sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Kennismaking",
                text: "We luisteren naar je vragen, je woonwens en wat je nu al hebt gespaard.",
              },
              {
                step: "02",
                title: "Analyse",
                text: "We zetten je inkomen, uitgaven en spaargeld op een rij. Dat geeft overzicht.",
              },
              {
                step: "03",
                title: "Advies",
                text: "Je krijgt een helder plan voor je koopwens. Beleggen bespreken we alleen als het bij je past.",
              },
              {
                step: "04",
                title: "Uitvoering",
                text: "Dezelfde adviseur helpt met je hypotheek en blijft bereikbaar voor je vragen.",
              },
            ].map((s, i) => (
              <Reveal key={s.step} delay={i * 0.12}>
                <div className="h-full bg-background p-8">
                  <span className="text-sm text-primary">{s.step}</span>
                  <h3 className="mt-6 text-xl font-medium">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-y bg-surface">
        <div className="mx-auto max-w-[1400px] px-5 text-center sm:px-8">
          <Reveal>
            <h2 className="mx-auto max-w-2xl text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.08]">
              Benieuwd wat er financieel mogelijk is?
            </h2>
            <p className="mx-auto mt-6 max-w-lg text-muted-foreground">
              De eerste kennismaking is gratis en volledig vrijblijvend, online of op
              ons kantoor in Rotterdam.
            </p>
            <div className="mt-10 flex justify-center">
              <PillLink to="/plan-een-gesprek">Plan een gesprek</PillLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
