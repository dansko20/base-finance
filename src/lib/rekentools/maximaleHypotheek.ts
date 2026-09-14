/**
 * Rekenregels voor de maximale hypotheek (normjaar 2026).
 * Deze module bevat uitsluitend rekenlogica — geen opmaak of React.
 */

import {
  ENERGIELABEL_FACTOR,
  FINANCIERINGSLAST_RENTEKOLOMMEN,
  FINANCIERINGSLAST_TABEL,
  KOSTEN_KOPER_PERCENTAGE,
  KREDIET_MAANDLAST_FACTOR,
  LTV_BASIS,
  LTV_VERDUURZAMING,
  MINIMUM_TOETSRENTE,
  NHG_KOSTENGRENS,
  NHG_KOSTENGRENS_VERDUURZAMING,
  NHG_PREMIE,
  NORMJAAR,
  RENTEAFTREK_TARIEF,
  RENTEVAST_GRENS_JAREN,
  STUDIESCHULD_FACTOR,
  VAKANTIEGELD_PERCENTAGE,
  type Energielabel,
  type Studiestelsel,
} from "./normen2026";

export type MaximaleHypotheekInput = {
  inkomen1: number;
  inkomen2: number;
  contract1: "vast" | "tijdelijk";
  contract2: "vast" | "tijdelijk";
  vakantiegeldMeerekenen: boolean;
  eindejaarsuitkering: number; // bruto bedrag per jaar (vast)
  eindejaarsuitkeringMeerekenen: boolean;

  woningwaarde: number;
  energielabel: Energielabel;
  verduurzamen: boolean;

  rentevastPeriode: number; // jaren
  rente: number; // werkelijke rente in procent
  looptijd: number; // jaren

  studieschuld: number; // oorspronkelijk bedrag
  studieschuldAfgelost: number;
  studiestelsel: Studiestelsel;
  kredietlimiet: number;
  alimentatie: number; // per maand
  lease: number; // per maand

  eigenGeld: number;
  kostenKoperPercentage: number;
  overdrachtsbelastingPercentage: number;
  /** Handmatige override van het financieringslastpercentage (in procent). */
  lastpercentageOverride: number | null;
};

export type MaximaleHypotheekResultaat = {
  normjaar: number;
  toetsinkomen: number;
  toetsrente: number;
  toetsrenteUitleg: string;
  lastpercentageTabel: number;
  energielabelFactor: number;
  lastpercentage: number;
  lastpercentageHandmatig: boolean;
  brutoJaarlast: number;
  brutoMaandlast: number;
  studieschuldLast: number;
  kredietLast: number;
  alimentatie: number;
  lease: number;
  beschikbareMaandlast: number;
  ltiBedrag: number;
  ltvPercentage: number;
  ltvBedrag: number;
  maximaleHypotheek: number;
  beperkendeFactor: "inkomen" | "woningwaarde";
  beperkendeUitleg: string;
  maandlastBruto: number;
  maandlastNetto: number;
  nhgMogelijk: boolean;
  nhgGrens: number;
  nhgPremie: number;
  kostenKoper: number;
  overdrachtsbelasting: number;
  benodigdEigenGeld: number;
  eigenGeldTekort: number;
  eigenGeldVoldoende: boolean;
};

const clamp0 = (n: number) => (Number.isFinite(n) && n > 0 ? n : 0);

/** Stap 1 — toetsinkomen. Het tweede inkomen telt voor 100% mee. */
export function bepaalToetsinkomen(input: MaximaleHypotheekInput): number {
  const basis = clamp0(input.inkomen1) + clamp0(input.inkomen2);
  const vakantiegeld = input.vakantiegeldMeerekenen ? basis * VAKANTIEGELD_PERCENTAGE : 0;
  const eindejaar = input.eindejaarsuitkeringMeerekenen
    ? clamp0(input.eindejaarsuitkering)
    : 0;
  return basis + vakantiegeld + eindejaar;
}

/** Stap 2 — toetsrente: minimaal 5% bij een rentevastperiode korter dan 10 jaar. */
export function bepaalToetsrente(rente: number, rentevastPeriode: number) {
  if (rentevastPeriode < RENTEVAST_GRENS_JAREN) {
    const toetsrente = Math.max(rente, MINIMUM_TOETSRENTE);
    return {
      toetsrente,
      uitleg:
        `De rentevastperiode is ${rentevastPeriode} jaar, korter dan ${RENTEVAST_GRENS_JAREN} jaar. ` +
        `Daarom is wettelijk getoetst op de hoogste van de werkelijke rente (${rente.toFixed(2)}%) ` +
        `en de minimum toetsrente (${MINIMUM_TOETSRENTE.toFixed(2)}%).`,
    };
  }
  return {
    toetsrente: rente,
    uitleg:
      `De rentevastperiode is ${rentevastPeriode} jaar, ${RENTEVAST_GRENS_JAREN} jaar of langer. ` +
      `Daarom mag met de werkelijke rente van ${rente.toFixed(2)}% worden getoetst.`,
  };
}

/** Stap 3 — financieringslastpercentage opzoeken in de Nibud-tabel. */
export function zoekLastpercentage(toetsinkomen: number, toetsrente: number): number {
  const rij =
    [...FINANCIERINGSLAST_TABEL]
      .reverse()
      .find((r) => toetsinkomen >= r.inkomenVanaf) ?? FINANCIERINGSLAST_TABEL[0]!;

  const kolommen = FINANCIERINGSLAST_RENTEKOLOMMEN;
  const p = rij.percentages;
  if (toetsrente <= kolommen[0]!) return p[0]!;
  if (toetsrente >= kolommen[kolommen.length - 1]!) return p[p.length - 1]!;

  for (let i = 0; i < kolommen.length - 1; i++) {
    const lo = kolommen[i]!;
    const hi = kolommen[i + 1]!;
    if (toetsrente >= lo && toetsrente <= hi) {
      const t = (toetsrente - lo) / (hi - lo);
      return p[i]! + (p[i + 1]! - p[i]!) * t;
    }
  }
  return p[p.length - 1]!;
}

/** Stap 7 — contante waarde van een annuïteit (omgekeerde annuïteitenformule). */
export function annuiteitLeenbedrag(
  maandlast: number,
  jaarrente: number,
  looptijdJaren: number,
): number {
  const i = jaarrente / 100 / 12;
  const n = looptijdJaren * 12;
  if (maandlast <= 0 || n <= 0) return 0;
  if (i === 0) return maandlast * n;
  return (maandlast * (1 - Math.pow(1 + i, -n))) / i;
}

/** Maandlast (annuïteit) bij een gegeven leenbedrag. */
export function annuiteitMaandlast(
  bedrag: number,
  jaarrente: number,
  looptijdJaren: number,
): number {
  const i = jaarrente / 100 / 12;
  const n = looptijdJaren * 12;
  if (bedrag <= 0 || n <= 0) return 0;
  if (i === 0) return bedrag / n;
  return (bedrag * i) / (1 - Math.pow(1 + i, -n));
}

export function berekenMaximaleHypotheek(
  input: MaximaleHypotheekInput,
): MaximaleHypotheekResultaat {
  // Stap 1
  const toetsinkomen = bepaalToetsinkomen(input);

  // Stap 2
  const { toetsrente, uitleg: toetsrenteUitleg } = bepaalToetsrente(
    clamp0(input.rente),
    clamp0(input.rentevastPeriode),
  );

  // Stap 3 + 4
  const lastpercentageTabel = zoekLastpercentage(toetsinkomen, toetsrente);
  const energielabelFactor = ENERGIELABEL_FACTOR[input.energielabel] ?? 1;
  const lastpercentageHandmatig =
    input.lastpercentageOverride !== null && input.lastpercentageOverride > 0;
  const lastpercentage = lastpercentageHandmatig && input.lastpercentageOverride !== null
    ? input.lastpercentageOverride
    : lastpercentageTabel * energielabelFactor;

  // Stap 5
  const brutoJaarlast = toetsinkomen * (lastpercentage / 100);
  const brutoMaandlast = brutoJaarlast / 12;

  // Stap 6
  const openstaandeStudieschuld = Math.max(
    clamp0(input.studieschuld) - clamp0(input.studieschuldAfgelost),
    0,
  );
  const studieschuldLast =
    openstaandeStudieschuld * STUDIESCHULD_FACTOR[input.studiestelsel];
  const kredietLast = clamp0(input.kredietlimiet) * KREDIET_MAANDLAST_FACTOR;
  const alimentatie = clamp0(input.alimentatie);
  const lease = clamp0(input.lease);
  const beschikbareMaandlast = Math.max(
    brutoMaandlast - studieschuldLast - kredietLast - alimentatie - lease,
    0,
  );

  // Stap 7
  const ltiBedrag = annuiteitLeenbedrag(beschikbareMaandlast, toetsrente, input.looptijd);

  // Stap 8
  const ltvPercentage = input.verduurzamen ? LTV_VERDUURZAMING : LTV_BASIS;
  const ltvBedrag = clamp0(input.woningwaarde) * ltvPercentage;

  // Stap 9
  const maximaleHypotheek = Math.min(ltiBedrag, ltvBedrag);
  const beperkendeFactor = ltiBedrag <= ltvBedrag ? "inkomen" : "woningwaarde";
  const beperkendeUitleg =
    beperkendeFactor === "inkomen"
      ? "Je inkomen is de beperkende factor: op basis van de woningwaarde zou je meer kunnen lenen."
      : "De woningwaarde is de beperkende factor: op basis van je inkomen zou je meer kunnen lenen.";

  // Maandlasten bij dit bedrag (met de werkelijke rente)
  const maandlastBruto = annuiteitMaandlast(
    maximaleHypotheek,
    clamp0(input.rente),
    input.looptijd,
  );
  const eersteMaandRente = (maximaleHypotheek * (clamp0(input.rente) / 100)) / 12;
  const maandlastNetto = maandlastBruto - eersteMaandRente * RENTEAFTREK_TARIEF;

  // Stap 10 — NHG
  const nhgGrens = input.verduurzamen
    ? NHG_KOSTENGRENS_VERDUURZAMING
    : NHG_KOSTENGRENS;
  const nhgMogelijk = maximaleHypotheek <= nhgGrens;
  const nhgPremie = maximaleHypotheek * NHG_PREMIE;

  // Stap 11 — eigen geld en kosten koper
  const koopsom = clamp0(input.woningwaarde);
  const kostenKoper = koopsom * (input.kostenKoperPercentage / 100);
  const overdrachtsbelasting = koopsom * (input.overdrachtsbelastingPercentage / 100);
  const benodigdEigenGeld = Math.max(koopsom - maximaleHypotheek, 0) + kostenKoper;
  const eigenGeldTekort = benodigdEigenGeld - clamp0(input.eigenGeld);

  return {
    normjaar: NORMJAAR,
    toetsinkomen,
    toetsrente,
    toetsrenteUitleg,
    lastpercentageTabel,
    energielabelFactor,
    lastpercentage,
    lastpercentageHandmatig,
    brutoJaarlast,
    brutoMaandlast,
    studieschuldLast,
    kredietLast,
    alimentatie,
    lease,
    beschikbareMaandlast,
    ltiBedrag,
    ltvPercentage,
    ltvBedrag,
    maximaleHypotheek,
    beperkendeFactor,
    beperkendeUitleg,
    maandlastBruto,
    maandlastNetto,
    nhgMogelijk,
    nhgGrens,
    nhgPremie,
    kostenKoper,
    overdrachtsbelasting,
    benodigdEigenGeld,
    eigenGeldTekort,
    eigenGeldVoldoende: eigenGeldTekort <= 0,
  };
}

export const DEFAULT_INPUT: MaximaleHypotheekInput = {
  inkomen1: 52000,
  inkomen2: 0,
  contract1: "vast",
  contract2: "vast",
  vakantiegeldMeerekenen: true,
  eindejaarsuitkering: 0,
  eindejaarsuitkeringMeerekenen: false,
  woningwaarde: 375000,
  energielabel: "C",
  verduurzamen: false,
  rentevastPeriode: 10,
  rente: 4.2,
  looptijd: 30,
  studieschuld: 0,
  studieschuldAfgelost: 0,
  studiestelsel: "leenstelsel",
  kredietlimiet: 0,
  alimentatie: 0,
  lease: 0,
  eigenGeld: 30000,
  kostenKoperPercentage: KOSTEN_KOPER_PERCENTAGE,
  overdrachtsbelastingPercentage: 2,
  lastpercentageOverride: null,
};

export const euro = (n: number) =>
  new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(Number.isFinite(n) ? n : 0);

export const euro2 = (n: number) =>
  new Intl.NumberFormat("nl-NL", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(Number.isFinite(n) ? n : 0);
