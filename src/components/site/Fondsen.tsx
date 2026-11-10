import asnLogo from "@/assets/partner-asn.png.asset.json";
import baseLogo from "@/assets/base-finance-logo.png.asset.json";
import candriamLogo from "@/assets/partner-candriam.png.asset.json";
import fidelityLogo from "@/assets/partner-fidelity.png.asset.json";
import { fundSelection, fundDisclaimer } from "@/lib/fundSelection";
import { PillLink } from "./PillButton";
import { Reveal } from "./motion";

const percentage = (value: number) => `${value.toLocaleString("nl-NL", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%`;

const logos = { asn: asnLogo.url, base: baseLogo.url, candriam: candriamLogo.url, fidelity: fidelityLogo.url };

export function FondsenSecties() {
  return <>
    <section className="section-y bg-surface"><div className="mx-auto max-w-[1400px] px-5 sm:px-8">
      <Reveal><p className="label-eyebrow">Onze fondsselectie</p><h2 className="mt-8 text-[clamp(2rem,4vw,3.5rem)] font-medium">Vijf fondsen, bewust gekozen</h2>
        <p className="mt-5 max-w-3xl text-muted-foreground">Wij bieden binnen ons schoolproject vijf fondsen aan. Eerst beoordeelden we twaalf vermogensbeheerders op hun duurzaamheidsbeleid, hoe ze bestuurd worden en of ze negatief in het nieuws zijn geweest. Voor onze uiteindelijke fondsselectie kozen we ASN Impact Investors, Candriam en Fidelity International. Daarna vergeleken we hun fondsen op strategie, risico en rendement, kosten, communicatie, klimaatrisico’s en hoe begrijpelijk hun informatie is.</p>
      </Reveal>
      <p className="mt-6 max-w-3xl text-xs text-muted-foreground">{fundDisclaimer}</p>
    </div></section>
    <section className="section-y bg-background"><div className="mx-auto max-w-[1400px] px-5 sm:px-8">
      <Reveal><p className="label-eyebrow">Fondsen</p><h2 className="mt-8 text-[clamp(2rem,4vw,3.5rem)] font-medium">Onze vijf fondsen</h2></Reveal>
      <div className="mt-12 grid gap-6 lg:grid-cols-2">{fundSelection.map((fund, i) => <Reveal key={fund.name} delay={i * 0.08}><article className="h-full rounded-xl bg-surface p-6 sm:p-8">
        {fund.logo && <div className="inline-flex rounded-lg bg-background p-2"><img src={logos[fund.logo]} alt={`Logo van ${fund.manager}`} className={fund.logo === "asn" ? "h-9 w-auto max-w-full object-contain" : "size-16 object-contain"} loading="lazy" /></div>}
        <p className="mt-5 text-sm text-primary">{fund.kind}</p>
        <h3 className="mt-3 break-words text-2xl font-medium">{fund.name}</h3>
        <p className="mt-3 text-sm text-muted-foreground">Beheerder: {fund.manager}</p>
        <h4 className="mt-6 font-medium">Waarom wij dit fonds kiezen</h4><p className="mt-3 text-muted-foreground">{fund.explanation}</p>
        {fund.annualCost.length > 0 && <dl className="mt-6 grid gap-4 sm:grid-cols-2"><div><dt className="text-sm text-muted-foreground">Kosten per jaar</dt><dd className="mt-1 font-medium">{fund.annualCost.map(percentage).join(" tot ")}{fund.annualCost.length > 1 ? " (afhankelijk van de fondsklasse)" : ""}</dd></div>{fund.transactionCost !== null && <div><dt className="text-sm text-muted-foreground">Transactiekosten (extra)</dt><dd className="mt-1 font-medium">{percentage(fund.transactionCost)}</dd></div>}</dl>}
        <div className="mt-6 border-t border-border pt-5"><h4 className="font-medium">Goed om te weten</h4><p className="mt-3 text-sm text-muted-foreground">{fund.caution}</p></div>
      </article></Reveal>)}</div>
      <p className="mt-6 max-w-3xl text-xs text-muted-foreground">{fundDisclaimer}</p>
    </div></section>
    <section className="section-y bg-surface"><div className="mx-auto grid max-w-[1400px] gap-10 px-5 sm:px-8 lg:grid-cols-2">
      <Reveal><p className="label-eyebrow">Jouw doel voorop</p><h2 className="mt-8 text-[clamp(2rem,4vw,3.5rem)] font-medium">Welk fonds past bij jou?</h2></Reveal>
      <Reveal delay={0.12}><p className="text-muted-foreground">Welk fonds bij jou past, hangt af van je doel, hoe lang je wilt beleggen en hoeveel risico je kunt dragen. Dat bespreken we samen in je adviesgesprek. Ook de verdeling van je geld stemmen we daarop af. Rendementen uit het verleden bieden geen garantie voor de toekomst.</p><div className="mt-9"><PillLink to="/plan-een-gesprek">Bespreek je doel</PillLink></div></Reveal>
    </div></section>
    <section className="section-y bg-background"><div className="mx-auto grid max-w-[1400px] gap-10 px-5 sm:px-8 lg:grid-cols-2">
      <Reveal><p className="label-eyebrow">Eerlijk duurzaam</p><h2 className="mt-8 text-[clamp(2rem,4vw,3.5rem)] font-medium">Zo voorkomen we greenwashing</h2></Reveal>
      <Reveal delay={0.12}><p className="text-muted-foreground">Greenwashing is als iets duurzamer lijkt dan het is. Dat willen wij niet. We bekijken wat een fonds daadwerkelijk doet en leggen onze keuze uit. Duurzaam beleggen kan soms meer kosten of minder opleveren. Dat zeggen we je eerlijk, en jij beslist.</p><div className="mt-9"><PillLink to="/onze-partners">Waarom deze beheerders?</PillLink></div></Reveal>
    </div></section>
  </>;
}
