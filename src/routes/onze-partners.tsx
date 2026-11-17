import { createFileRoute } from "@tanstack/react-router";
import { PartnerLogo } from "@/components/site/FundLogo";
import { LeesMeer } from "@/components/site/FundDetails";
import { fundSelection } from "@/lib/fundSelection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PillLink } from "@/components/site/PillButton";
import { Reveal } from "@/components/site/motion";
import { assetManagers, comparisonScore, mortgageCriteria, mortgageProviders } from "@/lib/partnerComparison";

export const Route = createFileRoute("/onze-partners")({
  head: () => ({ meta: [
    { title: "Onze partners | BASE FINANCE" },
    { name: "description", content: "Ontdek hoe BASE FINANCE vermogensbeheerders en de hypotheken van Allianz en ASN Bank onderzoekt op duurzaamheid, kosten en voorwaarden binnen ons studentenproject." },
    { property: "og:title", content: "Onze partners | BASE FINANCE" },
    { property: "og:description", content: "Onze vergelijking van vermogensbeheerders en onze onderzoekskeuze voor Allianz en ASN Bank, met duurzame hypotheekproducten en voorwaarden." },
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
        <section className="section-y bg-background"><div className="mx-auto max-w-[1400px] px-5 sm:px-8"><Reveal><p className="label-eyebrow">Onze keuze</p><h2 className="mt-8 text-[clamp(2rem,4vw,3.5rem)] font-medium">ASN Impact Investors, Robeco en BNP Paribas</h2></Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">{[
            { name: "ASN Impact Investors", logo: "asn" as const, text: "We kiezen het aandelenfonds en het Milieu & Waterfonds vanwege de strenge duurzaamheidsregels en de begrijpelijke uitleg in het Nederlands." },
            { name: "Robeco", logo: "robeco" as const, text: "Robeco had de hoogste totaalscore in onze vergelijking. Wij kiezen Robeco Smart Energy, een themafonds voor de overstap naar schone energie." },
            { name: "BNP Paribas", logo: "bnp" as const, text: "Van BNP Paribas kiezen we het Green Bond Fund: groene obligaties als stabielere aanvulling op de aandelenfondsen. Ook obligaties kunnen in waarde dalen." },
          ].map((item, i) => <Reveal key={item.name} delay={i * 0.08}><article className="h-full rounded-xl bg-surface p-8"><PartnerLogo logo={item.logo} name={item.name} /><h3 className="mt-6 text-2xl font-medium">{item.name}</h3><p className="mt-4 text-muted-foreground">{item.text}</p><LeesMeer funds={fundSelection.filter(f => f.logo === item.logo)} /></article></Reveal>)}</div>
        </div></section>
        <section className="section-y bg-surface"><div className="mx-auto grid max-w-[1400px] gap-10 px-5 sm:px-8 lg:grid-cols-2"><Reveal><p className="label-eyebrow">De fondsen</p><h2 className="mt-8 text-[clamp(2rem,4vw,3.5rem)] font-medium">Van beheerder naar fonds</h2></Reveal><Reveal delay={0.12}><p className="text-muted-foreground">De beheerdervergelijking hieronder is de eerste stap, niet de uiteindelijke fondsselectie. Robeco heeft daarin de hoogste totaalscore. Voor onze uiteindelijke selectie vergeleken we fondsen van ASN Impact Investors, Robeco en BNP Paribas op strategie, risico en rendement, kosten, communicatie, klimaatrisico’s en begrijpelijkheid. Daarnaast tonen we BASE FONDS, ons eigen oefenfonds uit het beleggingsspel van onze opleiding.</p><div className="mt-9"><PillLink to="/beleggingsadvies">Bekijk de fondsen</PillLink></div></Reveal></div></section>
        <section className="section-y bg-background"><div className="mx-auto max-w-[1400px] px-5 sm:px-8"><details className="border-y border-border py-6"><summary className="cursor-pointer text-2xl font-medium">Alle 12 vergeleken</summary><div className="mt-8 overflow-x-auto"><table className="w-full min-w-[680px] text-left text-sm"><caption className="sr-only">Onze beoordeling van twaalf vermogensbeheerders in oktober 2026</caption><thead><tr className="border-b border-border">{["Vermogensbeheerder", "Duurzaamheid", "Bestuur", "Nieuws", "Totaal"].map(label => <th key={label} scope="col" className="p-4 font-medium">{label}</th>)}</tr></thead><tbody>{assetManagers.map(manager => <tr key={manager.name} className="border-b border-border"><th scope="row" className="p-4 font-medium">{manager.name}</th>{[manager.sustainability, manager.governance, manager.news].map((score, i) => <td key={i} className="p-4 text-muted-foreground">{score}</td>)}<td className="p-4 font-medium">{comparisonScore(manager).toFixed(2).replace(".", ",")}</td></tr>)}</tbody></table></div><p className="mt-5 text-sm text-muted-foreground">Scores van 0 tot 10. Onze eigen beoordeling op basis van openbare bronnen, oktober 2026.</p></details></div></section>
      </TabsContent>
      <TabsContent value="hypotheken">
        <section className="section-y bg-surface"><div className="mx-auto grid max-w-[1400px] gap-10 px-5 sm:px-8 lg:grid-cols-2">
          <Reveal><p className="label-eyebrow">Hypotheken</p><h2 className="mt-8 text-[clamp(2rem,4vw,3.5rem)] font-medium">Wat is een hypotheekaanbieder?</h2></Reveal>
          <Reveal delay={0.12}><div className="space-y-5 text-muted-foreground"><p>Een hypotheekaanbieder is de bank of verzekeraar die je het geld voor je huis uitleent. BASE FINANCE leent zelf geen geld.</p><p>Wij zijn je adviseur: we kijken naar jouw situatie, rekenen uit wat haalbaar is en adviseren welke hypotheek bij je past. Die hypotheek sluit je daarna af bij de aanbieder.</p><p>We werken niet voor één bank en krijgen van geen enkele aanbieder provisie.</p></div></Reveal>
        </div></section>
        <section className="section-y bg-background"><div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <Reveal><p className="label-eyebrow">Onze vergelijking</p><h2 className="mt-8 text-[clamp(2rem,4vw,3.5rem)] font-medium">Hoe hebben wij gekozen?</h2><p className="mt-5 max-w-3xl text-muted-foreground">Wij hebben meerdere hypotheekaanbieders onderzocht en ze een score van 0 tot 10 gegeven op vier punten. Niet elk punt telt even zwaar. De aanbieders met de hoogste score hebben wij gekozen.</p></Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">{mortgageCriteria.map((item, i) => <Reveal key={item.title} delay={i * 0.08}><article className="h-full rounded-xl bg-surface p-8"><p className="text-sm text-primary">Telt voor {Math.round(item.weight * 100)}%</p><h3 className="mt-5 text-2xl font-medium">{item.title}</h3><p className="mt-4 text-muted-foreground">{item.text}</p></article></Reveal>)}</div>
          <Reveal><p className="mt-8 max-w-3xl text-muted-foreground">Wij kijken bewust niet alleen naar de laagste rente. Welke hypotheek voor jou het voordeligst is, rekenen we altijd uit in je persoonlijke advies.</p></Reveal>
        </div></section>
        <section className="section-y bg-surface"><div className="mx-auto max-w-[1400px] px-5 sm:px-8">
          <Reveal><p className="label-eyebrow">Onze onderzoekskeuze</p><h2 className="mt-8 text-[clamp(2rem,4vw,3.5rem)] font-medium">Onze twee hypotheekaanbieders</h2></Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">{mortgageProviders.map((provider, i) => <Reveal key={provider.name} delay={i * 0.08}><article className="h-full rounded-xl bg-background p-8">
            <PartnerLogo logo={provider.name.startsWith("Allianz") ? "allianz" : "asn"} name={provider.name} /><h3 className="mt-6 text-2xl font-medium">{provider.name}</h3><p className="mt-4 text-muted-foreground">{provider.description}</p>
            <h4 className="mt-8 font-medium">Waarom wij voor {provider.name} kiezen</h4>
            <ul className="mt-5 list-disc space-y-5 pl-5 text-muted-foreground">
              <li>{provider.greenLoan.name}: je kunt {provider.greenLoan.min === null ? "tot " : `${formatEuros(provider.greenLoan.min)} tot `}{formatEuros(provider.greenLoan.max)} extra lenen voor energiebesparende maatregelen{provider.measures ? `, ${provider.measures},` : ","} tegen een lagere rente.</li>
              {provider.reasons.map(reason => <li key={reason}>{reason}</li>)}
              {provider.labelPlan && <li>Bij een woning met energielabel {provider.labelPlan.appliesAtOrBelow} of lager vraagt Allianz om een plan om naar minimaal label {provider.labelPlan.target} te gaan.</li>}
            </ul>
            <div className="mt-8 border-t border-border pt-6"><h4 className="font-medium">Goed om te weten</h4><p className="mt-3 text-sm text-muted-foreground">{provider.incompatibleProduct && `Niet alle ASN producten zijn te combineren. Zo kan Duurzaam Wonen niet samen met de ${provider.incompatibleProduct}. `}{provider.caution}</p></div>
          </article></Reveal>)}</div>
        </div></section>
        <section className="section-y bg-surface"><div className="mx-auto grid max-w-[1400px] gap-10 px-5 sm:px-8 lg:grid-cols-2"><Reveal><p className="label-eyebrow">Wat we vergelijken</p><h2 className="mt-8 text-[clamp(2rem,4vw,3.5rem)] font-medium">Zo kiezen wij jouw hypotheek</h2></Reveal><Reveal delay={0.12}><ol className="space-y-6">{[
          "De rente én wat de hypotheek je in totaal kost over de hele looptijd.",
          "De voorwaarden: mag je de hypotheek meenemen als je verhuist, en hoeveel mag je per jaar zonder boete aflossen?",
          "Duurzaam: korting op je rente voor een energiezuinig huis, of extra geld lenen om je huis te verduurzamen.",
          "Wat past bij jouw inkomen, je plannen en het risico dat je wilt lopen.",
        ].map((text, i) => <li key={text} className="flex gap-5 border-t border-border pt-6"><span className="shrink-0 text-sm text-primary">0{i + 1}</span><p className="text-muted-foreground">{text}</p></li>)}</ol></Reveal></div></section>
        <section className="section-y bg-background"><div className="mx-auto grid max-w-[1400px] gap-10 px-5 sm:px-8 lg:grid-cols-2">
          <Reveal><p className="label-eyebrow">Jouw situatie voorop</p><h2 className="mt-8 text-[clamp(2rem,4vw,3.5rem)] font-medium">Duurzaam, maar altijd haalbaar</h2></Reveal>
          <Reveal delay={0.12}><p className="text-muted-foreground">Duurzaamheid is voor ons geen verkooppraatje, maar een onderdeel van de afweging. Jouw situatie en wensen blijven altijd het uitgangspunt. Past een andere keuze beter, dan zeggen we dat eerlijk.</p><div className="mt-8 border-t border-border pt-6 text-sm text-muted-foreground"><p>De genoemde bedragen en voorwaarden zijn gebaseerd op openbare informatie van de aanbieders en kunnen veranderen. Of een hypotheek bij je past, hangt altijd af van je persoonlijke situatie.</p><p className="mt-4">BASE FINANCE is een studentenproject binnen de minor Sustainable Finance &amp; Entrepreneurship van Hogeschool Inholland en heeft geen officiële samenwerking met deze aanbieders.</p></div></Reveal>
        </div></section>
      </TabsContent>
    </Tabs>
    <section className="section-y bg-background"><div className="mx-auto max-w-[1400px] px-5 text-center sm:px-8"><Reveal><h2 className="text-[clamp(2rem,4vw,3.5rem)] font-medium">Benieuwd welke keuze bij jou past?</h2><div className="mt-9 flex justify-center"><PillLink to="/plan-een-gesprek">Plan een kennismaking</PillLink></div></Reveal></div></section>
  </>;
}

function formatEuros(value: number) {
  return `€${value.toLocaleString("nl-NL")}`;
}