/**
 * Normen en percentages voor hypotheekberekeningen — NORMJAAR 2026.
 *
 * LET OP: al deze bedragen en percentages worden jaarlijks per 1 januari
 * herzien. Kopieer dit bestand bij een nieuw normjaar naar normen2027.ts en
 * pas de waarden aan; laat de bronvermelding per getal staan.
 */

/** Het normjaar waar onderstaande waarden bij horen. */
export const NORMJAAR = 2026;

/**
 * Wettelijke minimum toetsrente.
 * Bron: Tijdelijke regeling hypothecair krediet, art. 4 —
 * bij een rentevastperiode korter dan 10 jaar moet minimaal 5% worden getoetst.
 */
export const MINIMUM_TOETSRENTE = 5; // procent

/**
 * Grens voor de rentevastperiode waarboven met de werkelijke rente mag worden
 * getoetst. Bron: Tijdelijke regeling hypothecair krediet, art. 4.
 */
export const RENTEVAST_GRENS_JAREN = 10;

/**
 * Rentestanden (in procenten) waarvoor de Nibud-financieringslasttabel
 * kolommen kent. Tussenliggende rentes worden lineair geïnterpoleerd.
 * Bron: bijlage 1 Tijdelijke regeling hypothecair krediet (Nibud-tabellen).
 */
export const FINANCIERINGSLAST_RENTEKOLOMMEN = [2, 3, 4, 5, 6, 7];

/**
 * Financieringslastpercentages (in procenten van het toetsinkomen) per
 * inkomensklasse en per toetsrente.
 *
 * Dit is GEEN formule maar een wettelijke opzoektabel.
 * Bron: bijlage 1 Tijdelijke regeling hypothecair krediet (Nibud).
 * IJkpunt: modaal inkomen (± € 46.500) bij 5% toetsrente ≈ 24,6%.
 * De tabel wordt jaarlijks door het Nibud herzien.
 */
export const FINANCIERINGSLAST_TABEL: { inkomenVanaf: number; percentages: number[] }[] = [
  { inkomenVanaf: 0, percentages: [13.0, 13.5, 14.0, 14.5, 15.5, 16.5] },
  { inkomenVanaf: 20000, percentages: [15.0, 15.5, 16.0, 16.5, 17.5, 18.5] },
  { inkomenVanaf: 25000, percentages: [17.5, 18.0, 18.5, 19.0, 20.0, 21.0] },
  { inkomenVanaf: 30000, percentages: [19.5, 20.0, 20.5, 21.0, 22.0, 23.0] },
  { inkomenVanaf: 35000, percentages: [21.0, 21.5, 22.0, 22.5, 23.5, 24.5] },
  { inkomenVanaf: 40000, percentages: [22.0, 22.5, 23.0, 23.5, 24.5, 25.5] },
  { inkomenVanaf: 46500, percentages: [23.0, 23.5, 24.0, 24.6, 25.5, 26.5] },
  { inkomenVanaf: 55000, percentages: [24.0, 24.5, 25.0, 25.5, 26.5, 27.5] },
  { inkomenVanaf: 65000, percentages: [25.0, 25.5, 26.0, 26.5, 27.5, 28.5] },
  { inkomenVanaf: 80000, percentages: [26.0, 26.5, 27.0, 27.5, 28.5, 29.5] },
  { inkomenVanaf: 100000, percentages: [27.0, 27.5, 28.0, 28.5, 29.5, 30.0] },
  { inkomenVanaf: 150000, percentages: [28.0, 28.5, 29.0, 29.5, 30.0, 30.0] },
];

export const ENERGIELABELS = [
  "G",
  "F",
  "E",
  "D",
  "C",
  "B",
  "A",
  "A+",
  "A++",
  "A+++",
  "A++++",
] as const;

export type Energielabel = (typeof ENERGIELABELS)[number];

/**
 * Correctiefactor op het financieringslastpercentage per energielabel.
 * Bij een gunstig label wordt met lagere energiekosten gerekend, waardoor er
 * meer leenruimte ontstaat. Label D geldt als ijkpunt (factor 1,00);
 * label A of beter geeft circa 6% extra leenruimte.
 * Bron: energielabelregels in de Tijdelijke regeling hypothecair krediet 2026.
 */
export const ENERGIELABEL_FACTOR: Record<Energielabel, number> = {
  G: 0.97,
  F: 0.98,
  E: 0.99,
  D: 1.0,
  C: 1.01,
  B: 1.02,
  A: 1.06,
  "A+": 1.065,
  "A++": 1.07,
  "A+++": 1.075,
  "A++++": 1.08,
};

export const STUDIESTELSELS = ["oud", "leenstelsel", "nieuw"] as const;
export type Studiestelsel = (typeof STUDIESTELSELS)[number];

/**
 * Maandelijkse wegingsfactor over de OORSPRONKELIJKE studieschuld.
 * Bron: acceptatienormen geldverstrekkers / Nibud; jaarlijks herzien.
 * - oud stelsel (vóór 2015): 0,65% per maand
 * - leenstelsel (2015–2023): 0,45% per maand
 * - nieuw stelsel (vanaf 2023): 0,35% per maand
 */
export const STUDIESCHULD_FACTOR: Record<Studiestelsel, number> = {
  oud: 0.0065,
  leenstelsel: 0.0045,
  nieuw: 0.0035,
};

export const STUDIESTELSEL_LABEL: Record<Studiestelsel, string> = {
  oud: "Oud stelsel (vóór 2015)",
  leenstelsel: "Leenstelsel (2015 – 2023)",
  nieuw: "Nieuw stelsel (vanaf 2023)",
};

/**
 * Maandlast consumptief/doorlopend krediet: 2% van de kredietlimiet per maand.
 * Bron: standaard acceptatienorm geldverstrekkers.
 */
export const KREDIET_MAANDLAST_FACTOR = 0.02;

/**
 * Maximale Loan-to-Value: 100% van de woningwaarde (2026).
 * Bij energiebesparende maatregelen mag dit oplopen tot 106%, waarbij het
 * meerdere uitsluitend aan die maatregelen mag worden besteed.
 * Bron: Tijdelijke regeling hypothecair krediet, art. 5.
 */
export const LTV_BASIS = 1.0;
export const LTV_VERDUURZAMING = 1.06;

/**
 * NHG 2026. Bron: Nationale Hypotheek Garantie, voorwaarden & normen 2026.
 */
export const NHG_KOSTENGRENS = 470000;
export const NHG_KOSTENGRENS_VERDUURZAMING = 498200;
export const NHG_PREMIE = 0.004; // 0,4% van de hypotheeksom

/**
 * Kosten koper: standaard 5% van de koopsom (taxatie, notaris, advies,
 * overdrachtsbelasting). Instelbaar in de tool.
 */
export const KOSTEN_KOPER_PERCENTAGE = 5; // procent
/** Overdrachtsbelasting bestaande bouw, eigen bewoning. Kan jaarlijks wijzigen. */
export const OVERDRACHTSBELASTING_PERCENTAGE = 2; // procent

/** Gemiddeld tarief eerste schijf inkomstenbelasting voor renteaftrek-indicatie. */
export const RENTEAFTREK_TARIEF = 0.3697;

/** Standaard looptijd van een hypotheek in jaren. */
export const STANDAARD_LOOPTIJD_JAREN = 30;

/** Vakantiegeld: 8% van het bruto jaarsalaris. */
export const VAKANTIEGELD_PERCENTAGE = 0.08;
