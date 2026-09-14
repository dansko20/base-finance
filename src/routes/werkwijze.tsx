import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/motion";
import { PillLink } from "@/components/site/PillButton";

export const Route = createFileRoute("/werkwijze")({
  head: () => ({ meta: [
    { title: "Onze werkwijze | BASE FINANCE" },
    { name: "description", content: "Van kennismaking en analyse tot persoonlijk advies en zorgvuldige uitvoering." },
    { property: "og:title", content: "Onze werkwijze | BASE FINANCE" },
    { property: "og:description", content: "Bekijk hoe BASE FINANCE in vier heldere stappen naar passend financieel advies werkt." },
  ] }),
  component: Werkwijze,
});

const stappen = [
  { nr: "01", title: "Kennismaking", text: "In een vrijblijvend gesprek nemen we de tijd voor je vraag, plannen en verwachtingen. We vertellen wat we voor je kunnen betekenen, welke informatie nodig is en welke kosten bij het traject horen." },
  { nr: "02", title: "Analyse", text: "We brengen inkomen, vermogen, lasten, fiscale positie en risico’s zorgvuldig in kaart. Ook rekenen we verschillende toekomstscenario’s door, zodat keuzes niet alleen vandaag maar ook later passend blijven." },
  { nr: "03", title: "Advies", text: "Je ontvangt een helder advies met onderbouwde alternatieven, voorwaarden en kosten. We bespreken alles persoonlijk en nemen pas een besluit wanneer jij de gevolgen en afwegingen begrijpt." },
  { nr: "04", title: "Uitvoering", text: "Na je keuze regelen we de aanvraag en stemmen we af met alle betrokken partijen. We bewaken deadlines, controleren documenten en blijven ook na afronding beschikbaar voor vragen en periodieke evaluatie." },
];

function Werkwijze() {
  return <><section className="bg-background px-5 pb-16 pt-40 sm:px-8"><div className="mx-auto max-w-[1400px]"><Reveal><p className="label-eyebrow">Onze werkwijze</p><h1 className="mt-8 max-w-4xl text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.04]">Vier heldere stappen, één doordacht advies</h1></Reveal></div></section><section className="section-y bg-surface"><div className="mx-auto max-w-[1100px] px-5 sm:px-8">{stappen.map((stap, index) => <Reveal key={stap.nr} delay={index * 0.08}><article className="grid gap-5 border-t border-border py-10 sm:grid-cols-[100px_1fr_1.4fr]"><span className="text-primary">{stap.nr}</span><h2 className="text-2xl font-medium">{stap.title}</h2><p className="text-muted-foreground">{stap.text}</p></article></Reveal>)}</div></section><section className="section-y bg-background"><div className="mx-auto max-w-[1400px] px-5 text-center sm:px-8"><Reveal><h2 className="text-[clamp(2rem,4vw,3.5rem)] font-medium">Klaar voor de eerste stap?</h2><div className="mt-9 flex justify-center"><PillLink to="/plan-een-gesprek">Plan een kennismaking</PillLink></div></Reveal></div></section></>;
}