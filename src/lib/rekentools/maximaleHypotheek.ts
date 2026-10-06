import {
  ALLEENSTAANDE_INKOMENSGRENS,
  ALLEENSTAANDE_OPSLAG,
  ENERGIELABEL_NORMEN,
  FINANCIERINGSLAST_RENTEKOLOMMEN,
  FINANCIERINGSLAST_TABEL,
  KREDIET_MAANDLAST_FACTOR,
  NHG_KOSTENGRENS,
  NHG_KOSTENGRENS_VERDUURZAMING,
  NORMJAAR,
  STANDAARD_LOOPTIJD_JAREN,
  STUDIESCHULD_FACTOREN,
  VAKANTIEGELD_PERCENTAGE,
  WEBSITE_RENTE,
  type Energielabel,
} from "./normen2026";

export type Aanvrager = {
  brutoMaandsalaris: number;
  dertiendeMaand: boolean;
  anderVastInkomen: number;
};

export type MaximaleHypotheekInput = {
  aanvrager1: Aanvrager;
  aanvrager2: Aanvrager;
  roodstandLimiet: number;
  andereLeningen: number;
  duoMaandbedrag: number;
  energielabel: Energielabel;
  verduurzaming: number;
};

export type MaximaleHypotheekResultaat = {
  normjaar: number;
  rente: number;
  inkomen1: number;
  inkomen2: number;
  toetsinkomen: number;
  lastpercentage: number;
  maximaleMaandlast: number;
  kredietlast: number;
  studieschuldFactor: number;
  studieschuldLast: number;
  beschikbareMaandlast: number;
  basisLening: number;
  labelOpslag: number;
  verduurzamingOpslag: number;
  alleenstaandeOpslag: number;
  zonderVerduurzaming: number;
  metVerduurzaming: number;
  brutoMaandlast: number;
  nhgMogelijk: boolean;
};

const positief = (waarde: number) => Number.isFinite(waarde) && waarde > 0 ? waarde : 0;

function jaarinkomen(aanvrager: Aanvrager) {
  const salaris = positief(aanvrager.brutoMaandsalaris);
  return salaris * 12 * (1 + VAKANTIEGELD_PERCENTAGE)
    + (aanvrager.dertiendeMaand ? salaris : 0)
    + positief(aanvrager.anderVastInkomen);
}

export function zoekLastpercentage(toetsinkomen: number, rente = WEBSITE_RENTE) {
  const rij = [...FINANCIERINGSLAST_TABEL]
    .reverse()
    .find((item) => toetsinkomen >= item.inkomenVanaf) ?? FINANCIERINGSLAST_TABEL[0];
  let kolom = 0;
  FINANCIERINGSLAST_RENTEKOLOMMEN.forEach((ondergrens, index) => {
    if (rente >= ondergrens) kolom = index;
  });
  return rij?.percentages[kolom] ?? 0;
}

export function zoekStudieschuldFactor(rente = WEBSITE_RENTE) {
  return [...STUDIESCHULD_FACTOREN]
    .reverse()
    .find((item) => rente >= item.renteVanaf)?.factor ?? STUDIESCHULD_FACTOREN[0].factor;
}

export function annuiteitLeenbedrag(maandlast: number, rente = WEBSITE_RENTE) {
  const maandrente = rente / 100 / 12;
  const maanden = STANDAARD_LOOPTIJD_JAREN * 12;
  if (maandlast <= 0) return 0;
  return maandrente === 0
    ? maandlast * maanden
    : maandlast * (1 - Math.pow(1 + maandrente, -maanden)) / maandrente;
}

export function berekenMaximaleHypotheek(input: MaximaleHypotheekInput): MaximaleHypotheekResultaat {
  const inkomen1 = jaarinkomen(input.aanvrager1);
  const inkomen2 = jaarinkomen(input.aanvrager2);
  const toetsinkomen = inkomen1 + inkomen2;
  const lastpercentage = zoekLastpercentage(toetsinkomen);
  const maximaleMaandlast = toetsinkomen * (lastpercentage / 100) / 12;
  const kredietlast = (positief(input.roodstandLimiet) + positief(input.andereLeningen)) * KREDIET_MAANDLAST_FACTOR;
  const studieschuldFactor = zoekStudieschuldFactor();
  const studieschuldLast = positief(input.duoMaandbedrag) * studieschuldFactor;
  const beschikbareMaandlast = Math.max(0, maximaleMaandlast - kredietlast - studieschuldLast);
  const basisLening = annuiteitLeenbedrag(beschikbareMaandlast);
  const labelNorm = ENERGIELABEL_NORMEN[input.energielabel];
  const labelOpslag = toetsinkomen > 0 ? labelNorm.labelOpslag : 0;
  const verduurzamingOpslag = toetsinkomen > 0
    ? Math.min(positief(input.verduurzaming), labelNorm.verduurzamingMax)
    : 0;
  const alleenstaandeOpslag = inkomen2 === 0 && toetsinkomen > ALLEENSTAANDE_INKOMENSGRENS
    ? ALLEENSTAANDE_OPSLAG
    : 0;
  const zonderVerduurzaming = Math.floor(basisLening + labelOpslag + alleenstaandeOpslag);
  const metVerduurzaming = Math.floor(zonderVerduurzaming + verduurzamingOpslag);
  const brutoMaandlast = metVerduurzaming > 0
    ? metVerduurzaming / annuiteitLeenbedrag(1)
    : 0;
  const nhgGrens = verduurzamingOpslag > 0 ? NHG_KOSTENGRENS_VERDUURZAMING : NHG_KOSTENGRENS;

  return {
    normjaar: NORMJAAR,
    rente: WEBSITE_RENTE,
    inkomen1,
    inkomen2,
    toetsinkomen,
    lastpercentage,
    maximaleMaandlast,
    kredietlast,
    studieschuldFactor,
    studieschuldLast,
    beschikbareMaandlast,
    basisLening,
    labelOpslag,
    verduurzamingOpslag,
    alleenstaandeOpslag,
    zonderVerduurzaming,
    metVerduurzaming,
    brutoMaandlast,
    nhgMogelijk: metVerduurzaming <= nhgGrens,
  };
}

export const DEFAULT_INPUT: MaximaleHypotheekInput = {
  aanvrager1: { brutoMaandsalaris: 0, dertiendeMaand: false, anderVastInkomen: 0 },
  aanvrager2: { brutoMaandsalaris: 0, dertiendeMaand: false, anderVastInkomen: 0 },
  roodstandLimiet: 0,
  andereLeningen: 0,
  duoMaandbedrag: 0,
  energielabel: "E, F of G",
  verduurzaming: 0,
};

export const euro = (waarde: number) => new Intl.NumberFormat("nl-NL", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0,
}).format(Number.isFinite(waarde) ? waarde : 0);

export const euro2 = (waarde: number) => new Intl.NumberFormat("nl-NL", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
}).format(Number.isFinite(waarde) ? waarde : 0);