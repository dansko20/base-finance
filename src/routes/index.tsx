import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Home, LineChart, Leaf, Compass } from "lucide-react";

import heroImg from "@/assets/hero-advies.jpg";
import overGesprek from "@/assets/over-gesprek.jpg";
import overWoning from "@/assets/over-woning.jpg";
import overLaptop from "@/assets/over-laptop.jpg";
import dienstHypotheek from "@/assets/dienst-hypotheek.jpg";
import dienstBeleggen from "@/assets/dienst-beleggen.jpg";
import dienstVerduurzamen from "@/assets/dienst-verduurzamen.jpg";
import dienstPlanning from "@/assets/dienst-planning.jpg";

import { Reveal, CountUp } from "@/components/site/motion";
import { PillLink } from "@/components/site/PillButton";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "DHCE Capital — Onafhankelijk advies voor hypotheek en vermogen" },
      {
        name: "description",
        content:
          "Duurzaam en persoonlijk advies over hypotheken, beleggen en vermogen. Plan een gratis kennismaking met DHCE Capital in Rotterdam.",
      },
      {
        property: "og:title",
        content: "DHCE Capital — Onafhankelijk advies voor hypotheek en vermogen",
      },
      {
        property: "og:description",
        content:
          "Duurzaam en persoonlijk advies over hypotheken, beleggen en vermogen.",
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
    text: "Van eerste woning tot oversluiten: wij vergelijken de hele markt en kiezen wat bij jouw leven past.",
  },
  {
    icon: LineChart,
    title: "Beleggingsadvies",
    image: dienstBeleggen,
    text: "Een portefeuille met duidelijke risico's, lage kosten en een duurzame invulling die je begrijpt.",
  },
  {
    icon: Leaf,
    title: "Verduurzamen",
    image: dienstVerduurzamen,
    text: "Isolatie, warmtepomp of zonnepanelen slim meefinancieren, inclusief subsidies en groene rentekorting.",
  },
  {
    icon: Compass,
    title: "Financiële planning",
    image: dienstPlanning,
    text: "Overzicht voor later: pensioen, schenken, arbeidsongeschiktheid en de buffer die je echt nodig hebt.",
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
            alt="Adviseurs van DHCE Capital in gesprek met een klant"
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
            Onafhankelijk advies
            <br />
            voor hypotheek en vermogen
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="mt-6 max-w-xl text-hero-foreground/80"
          >
            Duurzaam, persoonlijk en zonder verkooppraatjes. Wij rekenen jouw keuzes
            door en kiezen samen de route die op lange termijn klopt.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <PillLink to="/contact">Plan een gratis kennismaking</PillLink>
            <PillLink to="/diensten" variant="ghost" className="text-hero-foreground">
              Bekijk onze diensten
            </PillLink>
          </motion.div>
        </motion.div>
      </section>

      {/* Over ons */}
      <section className="section-y bg-background">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <Reveal>
              <p className="label-eyebrow">Over ons</p>
              <h2 className="mt-10 max-w-lg text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.08]">
                Advies dat verder kijkt
                <br />
                dan de laagste rente
              </h2>
            </Reveal>
            <Reveal delay={0.15} className="lg:pt-1">
              <div className="max-w-xl space-y-6 text-muted-foreground">
                <p>
                  DHCE Capital is volledig onafhankelijk. We ontvangen geen provisie van
                  geldverstrekkers of fondsen, waardoor ons advies alleen gestuurd wordt
                  door jouw situatie en jouw doelen.
                </p>
                <p>
                  Duurzaamheid zit in alles wat we doen: van groene financieringen en
                  verduurzaming van je woning tot beleggingsportefeuilles die rekening
                  houden met klimaat en governance. Zo bouw je vermogen op waar je over
                  twintig jaar nog blij mee bent.
                </p>
                <div className="pt-2">
                  <PillLink to="/over-ons" variant="outline">
                    Meer over ons kantoor
                  </PillLink>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-3">
            {[
              { src: overGesprek, alt: "Adviesgesprek aan tafel" },
              { src: overWoning, alt: "Duurzame woning met zonnepanelen" },
              { src: overLaptop, alt: "Laptop met rendementsgrafiek" },
            ].map((img, i) => (
              <Reveal key={img.alt} delay={i * 0.12}>
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="h-[300px] w-full rounded-xl object-cover sm:h-[420px]"
                />
              </Reveal>
            ))}
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
                Vier expertises,
                <br />
                één financieel plan
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="max-w-md text-muted-foreground lg:mt-20">
                Alles hangt met elkaar samen. Daarom bekijken we je hypotheek, je
                vermogen en je woonlasten in samenhang, niet als losse producten.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {diensten.map((d, i) => (
              <Reveal key={d.title} delay={i * 0.12}>
                <article className="group h-full overflow-hidden rounded-xl bg-background transition-shadow duration-500 hover:shadow-soft">
                  <img
                    src={d.image}
                    alt={d.title}
                    loading="lazy"
                    width={1024}
                    height={1024}
                    className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
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
              <PillLink to="/diensten">Bekijk alle diensten</PillLink>
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
              In vier stappen
              <br />
              naar rust in je geldzaken
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-px overflow-hidden rounded-xl bg-border sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Kennismaking",
                text: "Een vrijblijvend gesprek van een uur over je plannen, je woonwens en je vermogen.",
              },
              {
                step: "02",
                title: "Analyse",
                text: "We brengen inkomen, lasten, risico's en duurzaamheidskansen volledig in kaart.",
              },
              {
                step: "03",
                title: "Advies",
                text: "Je krijgt een helder rapport met scenario's, kosten en onze concrete aanbeveling.",
              },
              {
                step: "04",
                title: "Uitvoering",
                text: "Wij regelen aanvraag, notaris en overdracht en blijven je jaarlijks volgen.",
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
              <PillLink to="/contact">Plan een gesprek</PillLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
