import { createFileRoute } from "@tanstack/react-router";
import asnLogo from "@/assets/partner-asn.png.asset.json";
import robecoLogo from "@/assets/partner-robeco.png.asset.json";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PillLink } from "@/components/site/PillButton";
import { Reveal } from "@/components/site/motion";
import { assetManagers, comparisonScore } from "@/lib/partnerComparison";

export const Route = createFileRoute("/onze-partners")({
  head: () => ({ meta: [
    { title: "Onze partners | BASE FINANCE" },
    { name: "description", content: "Ontdek hoe BASE FINANCE vermogensbeheerders en hypotheken vergelijkt op duurzaamheid, kosten en voorwaarden binnen ons schoolproject." },
    { property: "og:title", content: "Onze partners | BASE FINANCE" },
    { property: "og:description", content: "Onze vergelijking van vermogensbeheerders en de punten waarop we hypotheken beoordelen." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: OnzePartners,
});

const criteria = [
  { title: "Duurzaamheid", weight: "50%", text: "Is een beheerder echt duurzaam, of alleen op papier? We kijken naar onafhankelijk onderzoek, niet alleen naar wat ze zelf zeggen." },
  { title: "Bestuur", weight: "25%", text: "Is het bedrijf goed geregeld en duidelijk naar klanten?" },
  { title: "Nieuws", weight: "25%", text: "Zijn er boetes of schandalen geweest, en hoe zijn die opgelost?" },
];

function OnzePartners() {
  return <>
    <section className="bg-background px-5 pb-16 pt-40 sm:px-8"><div className="mx-auto max-w-[1400px]"><Reveal>
      <p className="label-eyebrow">Onze partners</p>
      <h1 className="mt-8 max-w-4xl text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.04]">Met wie we werken, en waarom</h1>
      <p className="mt-7 max-w-2xl text-muted-foreground">Wij adviseren je onafhankelijk. We werken niet voor één bank en krijgen van niemand provisie. Daarom kunnen we eerlijk kiezen met wie we samenwerken. Hier zie je hoe we dat hebben gedaan.</p>
      <p className="mt-5 max-w-2xl text-sm text-muted-foreground">BASE FINANCE is een fictief schoolproject. Dit is onze onderzoekskeuze, geen bevestiging van echte samenwerkingen.</p>
    </Reveal></div></section>
    <Tabs defaultValue="beleggen">
      <div className="mx-auto max-w-[1400px] px-5 pb-8 sm:px-8"><TabsList aria-label="Soort partners"><TabsTrigger value="beleggen">Beleggen</TabsTrigger><TabsTrigger value="hypotheken">Hypotheken</TabsTrigger></TabsList></div>
      <TabsContent value="beleggen">
        <section className="section-y bg-surface"><div className="mx-auto max-w-[1400px] px-5 sm:px-8"><Reveal>
          <p className="label-eyebrow">Onze vergelijking</p><h2 className="mt-8 text-[clamp(2rem,4vw,3.5rem)] font-medium">Zo hebben we gekozen</h2>
          <p className="mt-5 text-muted-foreground">We hebben 12 grote vermogensbeheerders vergeleken op drie punten:</p>
        </Reveal><div className="mt-12 grid gap-6 lg:grid-cols-3">{criteria.map((item, i) => <Reveal key={item.title} delay={i * 0.08}><article className="h-full rounded-xl bg-background p-8"><p className="text-sm text-primary">Telt voor {item.weight}</p><h3 className="mt-5 text-2xl font-medium">{item.title}</h3><p className="mt-4 text-muted-foreground">{item.text}</p></article></Reveal>)}</div></div></section>
        <section className="section-y bg-background"><div className="mx-auto max-w-[1400px] px-5 sm:px-8"><Reveal><p className="label-eyebrow">Onze keuze</p><h2 className="mt-8 text-[clamp(2rem,4vw,3.5rem)] font-medium">Robeco en ASN Impact Investors</h2></Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">{[
            { name: "Robeco", logo: robecoLogo.url, text: "Kwam als beste uit onze vergelijking. Bij onafhankelijk onderzoek naar 76 grote vermogensbeheerders scoort Robeco het hoogst op verantwoord beleggen. Bijna al hun fondsen hebben duurzame kenmerken." },
            { name: "ASN Impact Investors", logo: asnLogo.url, text: "Elk fonds heeft een duurzaam doel. De uitsluitingen zijn streng en de klimaatdoelen concreet. Een Nederlandse partij." },
          ].map((item, i) => <Reveal key={item.name} delay={i * 0.08}><article className="h-full rounded-xl bg-surface p-8"><div className="inline-flex rounded-lg bg-background p-3"><img src={item.logo} alt={`Logo van ${item.name}`} className="h-12 w-auto max-w-full object-contain" loading="lazy" /></div><h3 className="mt-6 text-2xl font-medium">{item.name}</h3><p className="mt-4 text-muted-foreground">{item.text}</p></article></Reveal>)}</div>
        </div></section>
        <section className="section-y bg-surface"><div className="mx-auto grid max-w-[1400px] gap-10 px-5 sm:px-8 lg:grid-cols-2"><Reveal><p className="label-eyebrow">De fondsen</p><h2 className="mt-8 text-[clamp(2rem,4vw,3.5rem)] font-medium">Waarom onze fondsen van ASN komen</h2></Reveal><Reveal delay={0.12}><p className="text-muted-foreground">Daarna vergeleken we per soort fonds een fonds van Robeco met een fonds van ASN. We keken naar rendement en risico, kosten, duurzaamheid, klimaatrisico's en hoe duidelijk het fonds uitlegt wat het doet. In alle vier de vergelijkingen won ASN, vooral door de strenge duurzaamheidseisen en lage kosten.</p><div className="mt-9"><PillLink to="/beleggingsadvies">Bekijk de fondsen</PillLink></div></Reveal></div></section>
        <section className="section-y bg-background"><div className="mx-auto max-w-[1400px] px-5 sm:px-8"><details className="border-y border-border py-6"><summary className="cursor-pointer text-2xl font-medium">Alle 12 vergeleken</summary><div className="mt-8 overflow-x-auto"><table className="w-full min-w-[680px] text-left text-sm"><caption className="sr-only">Onze beoordeling van twaalf vermogensbeheerders in oktober 2026</caption><thead><tr className="border-b border-border">{["Vermogensbeheerder", "Duurzaamheid", "Bestuur", "Nieuws", "Totaal"].map(label => <th key={label} scope="col" className="p-4 font-medium">{label}</th>)}</tr></thead><tbody>{assetManagers.map(manager => <tr key={manager.name} className="border-b border-border"><th scope="row" className="p-4 font-medium">{manager.name}</th>{[manager.sustainability, manager.governance, manager.news].map((score, i) => <td key={i} className="p-4 text-muted-foreground">{score}</td>)}<td className="p-4 font-medium">{comparisonScore(manager).toFixed(2).replace(".", ",")}</td></tr>)}</tbody></table></div><p className="mt-5 text-sm text-muted-foreground">Scores van 0 tot 10. Onze eigen beoordeling op basis van openbare bronnen, oktober 2026.</p></details></div></section>
      </TabsContent>
      <TabsContent value="hypotheken">
        <section className="section-y bg-surface"><div className="mx-auto max-w-[1400px] px-5 sm:px-8"><Reveal><p className="label-eyebrow">Hypotheken</p><h2 className="mt-8 text-[clamp(2rem,4vw,3.5rem)] font-medium">Een vergelijking die om jou draait</h2><p className="mt-6 max-w-3xl text-muted-foreground">We werken niet voor één bank. In ons schoolproject vergelijken we hypotheken van vijf aanbieders. Van geen van hen krijgen we geld. Jij betaalt alleen ons advies, dus wij hebben er geen belang bij welke bank je kiest.</p></Reveal></div></section>
        <section className="section-y bg-background"><div className="mx-auto max-w-[1400px] px-5 sm:px-8"><Reveal><h2 className="text-[clamp(2rem,4vw,3.5rem)] font-medium">Met deze aanbieders werken we samen</h2><p className="mt-5 text-muted-foreground">De namen en onderbouwing van de vijf aanbieders worden nog aangevuld.</p></Reveal><div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{[1, 2, 3, 4, 5].map((number, i) => <Reveal key={number} delay={i * 0.08}><article className="h-full rounded-xl bg-surface p-8"><h3 className="text-2xl font-medium">[AANBIEDER {number}]</h3><p className="mt-4 text-muted-foreground">[WAAROM DEZE AANBIEDER]</p></article></Reveal>)}</div></div></section>
        <section className="section-y bg-surface"><div className="mx-auto grid max-w-[1400px] gap-10 px-5 sm:px-8 lg:grid-cols-2"><Reveal><p className="label-eyebrow">Wat we vergelijken</p><h2 className="mt-8 text-[clamp(2rem,4vw,3.5rem)] font-medium">Zo kiezen wij jouw hypotheek</h2></Reveal><Reveal delay={0.12}><ol className="space-y-6">{[
          "De rente én wat de hypotheek je in totaal kost over de hele looptijd.",
          "De voorwaarden: mag je de hypotheek meenemen als je verhuist, en hoeveel mag je per jaar zonder boete aflossen?",
          "Duurzaam: korting op je rente voor een energiezuinig huis, of extra geld lenen om je huis te verduurzamen.",
          "Wat past bij jouw inkomen, je plannen en het risico dat je wilt lopen.",
        ].map((text, i) => <li key={text} className="flex gap-5 border-t border-border pt-6"><span className="shrink-0 text-sm text-primary">0{i + 1}</span><p className="text-muted-foreground">{text}</p></li>)}</ol></Reveal></div></section>
      </TabsContent>
    </Tabs>
    <section className="section-y bg-background"><div className="mx-auto max-w-[1400px] px-5 text-center sm:px-8"><Reveal><h2 className="text-[clamp(2rem,4vw,3.5rem)] font-medium">Benieuwd welke keuze bij jou past?</h2><div className="mt-9 flex justify-center"><PillLink to="/plan-een-gesprek">Plan een kennismaking</PillLink></div></Reveal></div></section>
  </>;
}