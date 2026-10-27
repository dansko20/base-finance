import asnLogo from "@/assets/partner-asn.png.asset.json";
import { PillLink } from "./PillButton";
import { Reveal } from "./motion";

const verdeling = [
  ["ASN Duurzaam Aandelenfonds", "20%", "40%", "65%"],
  ["ASN Milieu & Waterfonds", "0%", "10%", "15%"],
  ["[HUISFONDS] (ons eigen fonds)", "5%", "5%", "5%"],
  ["ASN Duurzaam Obligatiefonds", "55%", "30%", "10%"],
  ["ASN Groenprojectenfonds", "20%", "15%", "5%"],
  ["Fondskosten per jaar (gemiddeld)", "ca. 0,65%", "ca. 0,76%", "ca. 0,84%"],
  ["Rendement afgelopen 3 jaar, per jaar", "ca. 5,5%", "ca. 9,7%", "ca. 14,2%"],
  ["Rendement afgelopen 5 jaar, per jaar", "ca. 1,1%", "ca. 3,8%", "ca. 6,8%"],
];
const uitsluitAandelen = "Fossiele brandstoffen, kernenergie, wapens, dierproeven, ontbossing, bedrijven die mensenrechten schenden.";
const fondsen = [
  { naam: "ASN Duurzaam Aandelenfonds", asn: true, tekst: "Belegt wereldwijd in bedrijven die aan strenge duurzaamheidseisen voldoen.", r3: "17,75% per jaar", r5: "9,69% per jaar", kosten: "0,85%", risico: "Hoog", duurzaam: "Heeft een duurzaam doel volgens Europese regels (SFDR artikel 9). Stuurt op het klimaatdoel van Parijs: maximaal 1,5 graad opwarming.", uitsluit: uitsluitAandelen },
  { naam: "ASN Duurzaam Obligatiefonds", asn: true, tekst: "Leent geld uit aan overheden, plus groene en sociale obligaties (leningen voor duurzame of sociale projecten).", r3: "2,05% per jaar", r5: "−1,54% per jaar", kosten: "0,45%", risico: "Laag", duurzaam: "SFDR artikel 9. Verlaagt de CO2 uitstoot van de staatsobligaties elk jaar met 7%, op weg naar netto nul in 2050.", uitsluit: "Fossiele brandstoffen, kernenergie, landen die biodiversiteitsverdragen schenden, landen met de doodstraf of oorlogsmisdaden." },
  { naam: "ASN Milieu & Waterfonds", asn: true, tekst: "Belegt wereldwijd in bedrijven met oplossingen voor schoon water, duurzame energie, recycling en voedsel.", r3: "10,68% per jaar", r5: "2,00% per jaar", kosten: "1,00%", risico: "Hoog", duurzaam: "SFDR artikel 9 en klimaatdoel van 1,5 graad.", uitsluit: uitsluitAandelen },
  { naam: "ASN Groenprojectenfonds", asn: true, tekst: "Leent geld uit aan wind en zonneparken en andere groene projecten.", r3: "2,76% per jaar", r5: "−0,30% per jaar", kosten: "1,00%", risico: "Laag tot middel", duurzaam: "Erkend groenfonds. Daardoor krijg je een extra vrijstelling in box 3 en een extra heffingskorting.", extra: "Let op: soms is het fonds tijdelijk gesloten voor nieuwe inleg." },
  { naam: "[HUISFONDS]", asn: false, tekst: "Ons eigen duurzame fonds, beheerd door het team van BASE FINANCE.", nieuw: true },
];
const waarschuwing = "Indicatie op basis van de fondscijfers van oktober 2026, zonder het huisfonds. Dit is een voorbeeld, geen persoonlijk advies. Rendementen uit het verleden bieden geen garantie voor de toekomst. Je kunt (een deel van) je inleg verliezen.";

export function FondsenSecties() {
  return (
    <>
      <section className="section-y bg-surface"><div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal><p className="label-eyebrow">Verdeling</p><h2 className="mt-8 text-[clamp(2rem,4vw,3.5rem)] font-medium">Zo is jouw profiel verdeeld</h2></Reveal>
        <div className="mt-12 overflow-x-auto rounded-xl bg-background"><table className="w-full min-w-[640px] text-left text-sm"><thead><tr className="border-b border-border"><th className="p-4 font-medium">Fonds</th><th className="p-4 font-medium">Defensief</th><th className="p-4 font-medium">Neutraal</th><th className="p-4 font-medium">Offensief</th></tr></thead><tbody>{verdeling.map((r, i) => <tr key={r[0]} className="border-b border-border last:border-0"><td className={i > 4 ? "p-4 font-medium" : "p-4"}>{r[0]}</td>{r.slice(1).map((c, j) => <td key={j} className="p-4 text-muted-foreground">{c}</td>)}</tr>)}</tbody></table></div>
        <p className="mt-4 max-w-3xl text-xs text-muted-foreground">{waarschuwing}</p>
      </div></section>
      <section className="section-y bg-background"><div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal><p className="label-eyebrow">Fondsen</p><h2 className="mt-8 text-[clamp(2rem,4vw,3.5rem)] font-medium">In deze fondsen beleg je</h2><p className="mt-4 text-sm text-muted-foreground">Cijfers per oktober 2026.</p></Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">{fondsen.map((f, i) => <Reveal key={f.naam} delay={i * 0.08}><article className="h-full rounded-xl bg-surface p-8">
          {f.asn ? <div className="inline-flex rounded-lg bg-background p-2"><img src={asnLogo.url} alt="Logo van ASN Impact Investors" className="h-9 w-auto object-contain" loading="lazy" /></div> : null}
          <h3 className="mt-5 text-2xl font-medium">{f.naam}</h3><p className="mt-3 text-muted-foreground">{f.tekst}</p>
          {f.nieuw ? <p className="mt-5 text-sm text-primary">Nieuw fonds, nog geen rendementscijfers</p> : <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">{[["Rendement 3 jaar", f.r3], ["Rendement 5 jaar", f.r5], ["Kosten per jaar", f.kosten], ["Risico", f.risico]].map(([k, v]) => <div key={k}><dt className="text-muted-foreground">{k}</dt><dd className="font-medium">{v}</dd></div>)}</dl>}
          {f.duurzaam ? <p className="mt-5 text-sm"><span className="font-medium">Duurzaam: </span><span className="text-muted-foreground">{f.duurzaam}</span></p> : null}
          {f.extra ? <p className="mt-3 text-sm text-muted-foreground">{f.extra}</p> : null}
          {f.uitsluit ? <details className="mt-5 border-t border-border pt-4 text-sm"><summary className="cursor-pointer font-medium">Wat sluit dit fonds uit?</summary><p className="mt-3 text-muted-foreground">{f.uitsluit}</p></details> : null}
        </article></Reveal>)}</div>
        <p className="mt-6 max-w-3xl text-xs text-muted-foreground">{waarschuwing}</p>
      </div></section>
      <section className="section-y bg-surface"><div className="mx-auto grid max-w-[1400px] gap-10 px-5 sm:px-8 lg:grid-cols-2">
        <Reveal><p className="label-eyebrow">Eerlijk duurzaam</p><h2 className="mt-8 text-[clamp(2rem,4vw,3.5rem)] font-medium">Zo voorkomen we greenwashing</h2></Reveal>
        <Reveal delay={0.12}><p className="text-muted-foreground">Greenwashing is als iets duurzamer lijkt dan het is. Dat willen wij niet. We noemen een fonds alleen duurzaam als we kunnen laten zien waarom. Bij elk fonds zie je welke bedrijven worden uitgesloten en welk klimaatdoel het heeft. Duurzaam beleggen kan soms meer kosten of minder opleveren. Dat zeggen we je eerlijk, en jij beslist.</p><div className="mt-9"><PillLink to="/onze-partners">Waarom deze fondsen?</PillLink></div></Reveal>
      </div></section>
    </>
  );
}
