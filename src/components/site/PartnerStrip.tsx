import allianz from "@/assets/partner-allianz-transparant.png.asset.json";
import asn from "@/assets/partner-asn-transparant.png.asset.json";
import robeco from "@/assets/partner-robeco-transparant.png.asset.json";
import bnp from "@/assets/partner-bnp-paribas-transparant.png.asset.json";
import { Reveal } from "./motion";
import { PillLink } from "./PillButton";

const partners = [
  { name: "ASN", rol: "Hypotheken en beleggen", logo: asn.url },
  { name: "Allianz", rol: "Hypotheken", logo: allianz.url },
  { name: "Robeco", rol: "Vermogensbeheer", logo: robeco.url },
  { name: "BNP Paribas", rol: "Vermogensbeheer", logo: bnp.url },
];

export function PartnerStrip() {
  return <section className="section-y bg-primary text-primary-foreground"><div className="mx-auto max-w-[1400px] px-5 sm:px-8">
    <Reveal><p className="text-sm text-primary-foreground/60">Onze partners</p><h2 className="mt-8 max-w-2xl text-[clamp(2rem,4vw,3.5rem)] font-medium leading-[1.08]">Partijen uit onze vergelijking</h2></Reveal>
    <div className="mt-14 grid grid-cols-2 gap-10 lg:grid-cols-4">{partners.map((p, i) => <Reveal key={p.name} delay={i * 0.1}><div className="flex flex-col items-center text-center"><div className="flex h-24 w-full items-center justify-center"><img src={p.logo} alt={`Logo van ${p.name}`} loading="lazy" className="max-h-full max-w-[180px] object-contain" /></div><p className="mt-5 font-medium">{p.name}</p><p className="mt-1 text-sm text-primary-foreground/70">{p.rol}</p></div></Reveal>)}</div>
    <Reveal delay={0.2}><div className="mt-14 flex justify-center"><PillLink to="/onze-partners" variant="outline">Bekijk hoe we partijen vergelijken</PillLink></div></Reveal>
  </div></section>;
}
