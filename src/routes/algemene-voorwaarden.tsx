import { createFileRoute } from "@tanstack/react-router";
import { PillLink } from "@/components/site/PillButton";
import { Reveal } from "@/components/site/motion";

export const Route = createFileRoute("/algemene-voorwaarden")({
  head: () => ({ meta: [
    { title: "Algemene voorwaarden | BASE FINANCE" },
    { name: "description", content: "Kort en duidelijk: de afspraken tussen jou en BASE FINANCE." },
    { property: "og:title", content: "Algemene voorwaarden | BASE FINANCE" },
    { property: "og:description", content: "De afspraken tussen jou en BASE FINANCE, in gewone taal." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Voorwaarden,
});

const artikelen = [
  ["Wie we zijn", "BASE FINANCE is een onafhankelijk adviesbureau voor hypotheken en beleggen, gevestigd in Rotterdam."],
  ["Wat we doen", "We geven advies en bemiddelen bij het aanvragen van een hypotheek. We beheren jouw geld niet en beleggen niet voor je."],
  ["Wanneer de opdracht start", "Na het gratis kennismakingsgesprek, als jij de opdrachtbevestiging ondertekent."],
  ["Kosten en betalen", "Je betaalt de vaste tarieven die op de pagina Tarieven staan. Het Basiskamp abonnement is maandelijks opzegbaar."],
  ["Bedenktijd", "Je hebt 14 dagen bedenktijd na het ondertekenen. Zolang we nog niet aan het werk zijn, kost opzeggen niets."],
  ["Wat we van jou vragen", "Juiste en volledige informatie. Klopt die niet, dan kan het advies ook niet kloppen."],
  ["Aansprakelijkheid", "We zijn aansprakelijk tot maximaal het bedrag dat onze beroepsaansprakelijkheidsverzekering uitkeert."],
  ["Klachten", "Meld een klacht eerst bij ons. Je krijgt binnen 14 dagen een reactie. Kom je er met ons niet uit, dan kun je naar het Kifid."],
  ["Privacy", "We gebruiken je gegevens alleen voor jouw advies en delen ze niet zonder jouw toestemming."],
  ["Recht", "Op deze voorwaarden is Nederlands recht van toepassing."],
];

function Voorwaarden() {
  return <>
    <section className="bg-background px-5 pb-16 pt-40 sm:px-8"><div className="mx-auto max-w-3xl"><Reveal><p className="label-eyebrow">Juridisch</p><h1 className="mt-8 text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.04]">Algemene voorwaarden</h1><p className="mt-7 text-muted-foreground">Kort en duidelijk: dit zijn de afspraken tussen jou en BASE FINANCE.</p></Reveal></div></section>
    <section className="section-y bg-surface"><div className="mx-auto max-w-3xl space-y-8 px-5 sm:px-8">{artikelen.map(([t, d], i) => <div key={t} className="border-t border-border pt-6"><h2 className="text-xl font-medium"><span className="text-primary">{i + 1}.</span> {t}</h2><p className="mt-3 text-muted-foreground">{d}</p></div>)}</div></section>
    <section className="section-y bg-background"><div className="mx-auto max-w-[1400px] px-5 text-center sm:px-8"><Reveal><h2 className="text-[clamp(2rem,4vw,3.5rem)] font-medium">Nog vragen?</h2><div className="mt-9 flex justify-center"><PillLink to="/plan-een-gesprek">Plan een gesprek</PillLink></div></Reveal></div></section>
  </>;
}
