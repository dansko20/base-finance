/**
 * Hypotheeknormen 2026, overgenomen uit de aangeleverde BASE FINANCE-rekentool.
 * Bron: TRHK 2026, AFM, NHG en het werkblad "Normen 2026".
 * Jaarlijks per 1 januari actualiseren.
 */
export const NORMJAAR = 2026;
export const MINIMUM_TOETSRENTE = 5; // TRHK art. 3 lid 9; AFM toetsrente Q4 2026.
export const RENTEVAST_GRENS_JAREN = 10; // TRHK art. 3 lid 9.
export const KREDIET_MAANDLAST_FACTOR = 0.02; // 2% van limiet/oorspronkelijk bedrag.
export const STANDAARD_LOOPTIJD_JAREN = 30; // Maximale looptijd in dit model.
export const ALLEENSTAANDE_OPSLAG = 17000; // TRHK art. 3 lid 8 (2026).
export const ALLEENSTAANDE_INKOMENSGRENS = 30000; // Niet-AOW, TRHK art. 3 lid 8.
export const NHG_KOSTENGRENS = 470000; // NHG-kostengrens 2026.
export const NHG_KOSTENGRENS_VERDUURZAMING = 498200; // NHG-grens met voorzieningen.
export const NHG_PREMIE = 0.004; // Borgtochtprovisie NHG 2026: 0,4%.
export const WEBSITE_RENTE = 4.07; // Laagste 10 jaar vast met NHG, Geld.nl, 28-09-2026.
export const VAKANTIEGELD_PERCENTAGE = 0.08; // Gebruikelijke 8% uit het Excel-model.

export const ENERGIELABELS = [
  "E, F of G", "C of D", "A of B", "A+ of A++", "A+++", "A++++",
  "A++++ met energieprestatiegarantie 10 jaar",
] as const;
export type Energielabel = (typeof ENERGIELABELS)[number];

/** Extra leenruimte volgens TRHK art. 4 lid 3 en 4, bedragen 2026. */
export const ENERGIELABEL_NORMEN: Record<Energielabel, { labelOpslag: number; verduurzamingMax: number }> = {
  "E, F of G": { labelOpslag: 0, verduurzamingMax: 20000 },
  "C of D": { labelOpslag: 5000, verduurzamingMax: 15000 },
  "A of B": { labelOpslag: 10000, verduurzamingMax: 10000 },
  "A+ of A++": { labelOpslag: 20000, verduurzamingMax: 10000 },
  "A+++": { labelOpslag: 25000, verduurzamingMax: 0 },
  "A++++": { labelOpslag: 30000, verduurzamingMax: 0 },
  "A++++ met energieprestatiegarantie 10 jaar": { labelOpslag: 40000, verduurzamingMax: 0 },
};

/** Studieschuldfactor over het actuele DUO-maandbedrag, TRHK art. 3a lid 2. */
export const STUDIESCHULD_FACTOREN = [
  { renteVanaf: 0, factor: 1.05 }, { renteVanaf: 2.001, factor: 1.10 },
  { renteVanaf: 2.501, factor: 1.15 }, { renteVanaf: 3.001, factor: 1.20 },
  { renteVanaf: 3.501, factor: 1.20 }, { renteVanaf: 4.001, factor: 1.25 },
  { renteVanaf: 4.501, factor: 1.30 }, { renteVanaf: 5.001, factor: 1.30 },
  { renteVanaf: 5.501, factor: 1.35 }, { renteVanaf: 6.001, factor: 1.40 },
] as const;

/** Kolomondergrenzen en volledige financieringslasttabel 2026 uit het Excel-model. */
export const FINANCIERINGSLAST_RENTEKOLOMMEN = [0, 1.501, 2.001, 2.501, 3.001, 3.501, 4.001, 4.501, 5.001, 5.501, 6.001, 6.501] as const;
export const FINANCIERINGSLAST_TABEL = [
  { inkomenVanaf: 30000, percentages: [15.5, 16.5, 17.5, 18.4, 19.3, 20.1, 20.9, 21.6, 22.2, 22.7, 23.2, 23.7] },
  { inkomenVanaf: 31000, percentages: [16.2, 17.3, 18.3, 19.3, 20.2, 21.2, 22, 22.7, 23.4, 24.1, 24.6, 25.1] },
  { inkomenVanaf: 32000, percentages: [16.7, 17.9, 19, 20.1, 21.1, 22.1, 23, 23.8, 24.6, 25.3, 25.9, 26.4] },
  { inkomenVanaf: 33000, percentages: [17.1, 18.3, 19.5, 20.6, 21.6, 22.6, 23.6, 24.6, 25.4, 26.1, 26.8, 27.4] },
  { inkomenVanaf: 34000, percentages: [17.3, 18.5, 19.6, 20.6, 21.6, 22.6, 23.6, 24.6, 25.5, 26.4, 27.3, 28.1] },
  { inkomenVanaf: 35000, percentages: [17.4, 18.5, 19.6, 20.6, 21.6, 22.6, 23.6, 24.6, 25.5, 26.4, 27.3, 28.1] },
  { inkomenVanaf: 36000, percentages: [17.4, 18.5, 19.6, 20.6, 21.6, 22.6, 23.6, 24.6, 25.5, 26.4, 27.3, 28.1] },
  { inkomenVanaf: 37000, percentages: [17.4, 18.5, 19.6, 20.6, 21.6, 22.6, 23.6, 24.6, 25.5, 26.4, 27.3, 28.1] },
  { inkomenVanaf: 38000, percentages: [17.4, 18.5, 19.6, 20.6, 21.6, 22.6, 23.6, 24.6, 25.5, 26.4, 27.3, 28.1] },
  { inkomenVanaf: 39000, percentages: [17.4, 18.5, 19.6, 20.6, 21.6, 22.6, 23.6, 24.6, 25.5, 26.4, 27.3, 28.1] },
  { inkomenVanaf: 40000, percentages: [17.4, 18.5, 19.6, 20.6, 21.6, 22.6, 23.6, 24.6, 25.5, 26.4, 27.3, 28.1] },
  { inkomenVanaf: 41000, percentages: [17.4, 18.5, 19.6, 20.6, 21.6, 22.6, 23.6, 24.6, 25.5, 26.4, 27.3, 28.1] },
  { inkomenVanaf: 42000, percentages: [17.4, 18.5, 19.6, 20.6, 21.6, 22.6, 23.6, 24.6, 25.5, 26.4, 27.3, 28.1] },
  { inkomenVanaf: 43000, percentages: [17.4, 18.5, 19.6, 20.6, 21.6, 22.6, 23.6, 24.6, 25.5, 26.4, 27.3, 28.1] },
  { inkomenVanaf: 44000, percentages: [17.4, 18.5, 19.6, 20.6, 21.6, 22.6, 23.6, 24.6, 25.5, 26.4, 27.3, 28.1] },
  { inkomenVanaf: 45000, percentages: [17.4, 18.5, 19.6, 20.6, 21.6, 22.6, 23.6, 24.6, 25.5, 26.4, 27.3, 28.1] },
  { inkomenVanaf: 46000, percentages: [17.4, 18.5, 19.6, 20.6, 21.6, 22.6, 23.6, 24.6, 25.5, 26.4, 27.3, 28.1] },
  { inkomenVanaf: 47000, percentages: [17.4, 18.5, 19.6, 20.6, 21.6, 22.6, 23.6, 24.6, 25.5, 26.4, 27.3, 28.1] },
  { inkomenVanaf: 48000, percentages: [17.4, 18.5, 19.6, 20.6, 21.6, 22.6, 23.6, 24.6, 25.5, 26.4, 27.3, 28.1] },
  { inkomenVanaf: 49000, percentages: [17.4, 18.5, 19.6, 20.6, 21.6, 22.6, 23.6, 24.6, 25.5, 26.4, 27.3, 28.1] },
  { inkomenVanaf: 50000, percentages: [17.4, 18.5, 19.6, 20.6, 21.6, 22.6, 23.6, 24.6, 25.5, 26.4, 27.3, 28.1] },
  { inkomenVanaf: 51000, percentages: [17.4, 18.5, 19.6, 20.6, 21.6, 22.6, 23.6, 24.6, 25.5, 26.4, 27.3, 28.1] },
  { inkomenVanaf: 52000, percentages: [17.4, 18.5, 19.6, 20.6, 21.6, 22.6, 23.6, 24.6, 25.5, 26.4, 27.3, 28.1] },
  { inkomenVanaf: 53000, percentages: [17.4, 18.5, 19.6, 20.6, 21.6, 22.6, 23.6, 24.6, 25.5, 26.4, 27.3, 28.1] },
  { inkomenVanaf: 54000, percentages: [17.4, 18.5, 19.6, 20.6, 21.6, 22.6, 23.6, 24.6, 25.5, 26.4, 27.3, 28.1] },
  { inkomenVanaf: 55000, percentages: [17.4, 18.5, 19.6, 20.6, 21.6, 22.6, 23.6, 24.6, 25.5, 26.4, 27.3, 28.1] },
  { inkomenVanaf: 56000, percentages: [17.4, 18.5, 19.6, 20.6, 21.6, 22.6, 23.6, 24.6, 25.5, 26.4, 27.3, 28.1] },
  { inkomenVanaf: 57000, percentages: [17.5, 18.5, 19.6, 20.6, 21.6, 22.6, 23.6, 24.6, 25.5, 26.4, 27.3, 28.1] },
  { inkomenVanaf: 58000, percentages: [17.6, 18.6, 19.6, 20.6, 21.6, 22.6, 23.6, 24.6, 25.5, 26.4, 27.3, 28.1] },
  { inkomenVanaf: 59000, percentages: [17.6, 18.6, 19.6, 20.6, 21.6, 22.6, 23.6, 24.6, 25.5, 26.4, 27.3, 28.1] },
  { inkomenVanaf: 60000, percentages: [17.7, 18.7, 19.7, 20.7, 21.6, 22.6, 23.6, 24.6, 25.5, 26.4, 27.3, 28.1] },
  { inkomenVanaf: 61000, percentages: [17.7, 18.7, 19.7, 20.7, 21.7, 22.6, 23.6, 24.6, 25.5, 26.4, 27.3, 28.1] },
  { inkomenVanaf: 62000, percentages: [17.8, 18.8, 19.8, 20.7, 21.7, 22.7, 23.6, 24.6, 25.5, 26.4, 27.3, 28.1] },
  { inkomenVanaf: 63000, percentages: [17.8, 18.9, 19.9, 20.9, 21.8, 22.7, 23.7, 24.6, 25.5, 26.4, 27.3, 28.1] },
  { inkomenVanaf: 64000, percentages: [17.9, 18.9, 19.9, 21, 21.9, 22.8, 23.7, 24.6, 25.5, 26.4, 27.3, 28.1] },
  { inkomenVanaf: 65000, percentages: [18, 19, 20, 21, 22, 22.9, 23.8, 24.7, 25.5, 26.4, 27.3, 28.1] },
  { inkomenVanaf: 66000, percentages: [18.1, 19.1, 20.1, 21.1, 22.1, 23, 23.9, 24.7, 25.6, 26.4, 27.3, 28.1] },
  { inkomenVanaf: 67000, percentages: [18.2, 19.2, 20.2, 21.2, 22.2, 23.1, 24, 24.8, 25.7, 26.5, 27.3, 28.1] },
  { inkomenVanaf: 68000, percentages: [18.3, 19.4, 20.4, 21.4, 22.3, 23.2, 24.1, 25, 25.8, 26.7, 27.4, 28.2] },
  { inkomenVanaf: 69000, percentages: [18.5, 19.5, 20.5, 21.5, 22.5, 23.4, 24.3, 25.1, 26, 26.8, 27.6, 28.3] },
  { inkomenVanaf: 70000, percentages: [18.6, 19.7, 20.7, 21.7, 22.7, 23.6, 24.5, 25.3, 26.2, 27, 27.8, 28.5] },
  { inkomenVanaf: 71000, percentages: [18.8, 19.9, 20.9, 21.9, 22.9, 23.8, 24.7, 25.6, 26.4, 27.2, 28, 28.7] },
  { inkomenVanaf: 72000, percentages: [19, 20, 21.1, 22.1, 23.1, 24.1, 25, 25.8, 26.6, 27.4, 28.2, 28.9] },
  { inkomenVanaf: 73000, percentages: [19.1, 20.2, 21.3, 22.3, 23.3, 24.3, 25.2, 26, 26.9, 27.6, 28.4, 29.2] },
  { inkomenVanaf: 74000, percentages: [19.3, 20.4, 21.5, 22.5, 23.5, 24.5, 25.4, 26.3, 27.1, 27.9, 28.6, 29.3] },
  { inkomenVanaf: 75000, percentages: [19.4, 20.5, 21.6, 22.6, 23.7, 24.6, 25.6, 26.4, 27.3, 28.1, 28.8, 29.5] },
  { inkomenVanaf: 76000, percentages: [19.5, 20.6, 21.7, 22.8, 23.8, 24.8, 25.7, 26.6, 27.5, 28.2, 29, 29.7] },
  { inkomenVanaf: 77000, percentages: [19.6, 20.8, 21.9, 22.9, 24, 24.9, 25.9, 26.8, 27.6, 28.4, 29.2, 29.9] },
  { inkomenVanaf: 78000, percentages: [19.7, 20.9, 22, 23.1, 24.1, 25.1, 26.1, 27, 27.8, 28.6, 29.4, 30.1] },
  { inkomenVanaf: 79000, percentages: [19.8, 20.9, 22.1, 23.2, 24.2, 25.2, 26.2, 27.1, 27.9, 28.7, 29.5, 30.2] },
  { inkomenVanaf: 80000, percentages: [19.9, 21, 22.2, 23.2, 24.3, 25.3, 26.3, 27.2, 28.1, 28.9, 29.6, 30.3] },
  { inkomenVanaf: 81000, percentages: [20, 21.1, 22.2, 23.3, 24.3, 25.4, 26.4, 27.3, 28.1, 29, 29.7, 30.4] },
  { inkomenVanaf: 82000, percentages: [20.1, 21.2, 22.3, 23.4, 24.4, 25.4, 26.4, 27.3, 28.2, 29, 29.8, 30.5] },
  { inkomenVanaf: 83000, percentages: [20.1, 21.2, 22.3, 23.4, 24.4, 25.4, 26.4, 27.4, 28.2, 29.1, 29.9, 30.6] },
  { inkomenVanaf: 84000, percentages: [20.2, 21.3, 22.4, 23.4, 24.5, 25.5, 26.5, 27.4, 28.3, 29.1, 29.9, 30.6] },
  { inkomenVanaf: 85000, percentages: [20.2, 21.3, 22.4, 23.5, 24.5, 25.5, 26.5, 27.4, 28.3, 29.2, 29.9, 30.7] },
  { inkomenVanaf: 86000, percentages: [20.2, 21.4, 22.5, 23.5, 24.6, 25.6, 26.5, 27.4, 28.4, 29.2, 30, 30.7] },
  { inkomenVanaf: 87000, percentages: [20.3, 21.4, 22.5, 23.6, 24.6, 25.6, 26.6, 27.5, 28.4, 29.2, 30, 30.8] },
  { inkomenVanaf: 88000, percentages: [20.4, 21.5, 22.5, 23.6, 24.6, 25.6, 26.6, 27.5, 28.4, 29.3, 30.1, 30.8] },
  { inkomenVanaf: 89000, percentages: [20.5, 21.5, 22.6, 23.7, 24.7, 25.7, 26.6, 27.6, 28.4, 29.3, 30.1, 30.8] },
  { inkomenVanaf: 90000, percentages: [20.5, 21.6, 22.6, 23.7, 24.7, 25.7, 26.7, 27.6, 28.5, 29.3, 30.1, 30.9] },
  { inkomenVanaf: 91000, percentages: [20.5, 21.6, 22.7, 23.7, 24.8, 25.8, 26.7, 27.6, 28.5, 29.3, 30.2, 30.9] },
  { inkomenVanaf: 92000, percentages: [20.6, 21.7, 22.7, 23.8, 24.8, 25.8, 26.8, 27.7, 28.6, 29.4, 30.2, 31] },
  { inkomenVanaf: 93000, percentages: [20.7, 21.7, 22.8, 23.8, 24.8, 25.8, 26.8, 27.7, 28.6, 29.4, 30.2, 31] },
  { inkomenVanaf: 94000, percentages: [20.8, 21.8, 22.8, 23.9, 24.9, 25.9, 26.9, 27.8, 28.6, 29.5, 30.2, 31] },
  { inkomenVanaf: 95000, percentages: [20.8, 21.9, 22.9, 23.9, 25, 25.9, 26.9, 27.8, 28.7, 29.5, 30.3, 31] },
  { inkomenVanaf: 96000, percentages: [20.9, 21.9, 23, 24, 25, 26, 26.9, 27.9, 28.7, 29.5, 30.3, 31] },
  { inkomenVanaf: 97000, percentages: [21, 22, 23, 24, 25, 26, 27, 27.9, 28.8, 29.6, 30.4, 31.1] },
  { inkomenVanaf: 98000, percentages: [21, 22.1, 23.1, 24.1, 25.1, 26.1, 27, 27.9, 28.8, 29.6, 30.4, 31.1] },
  { inkomenVanaf: 99000, percentages: [21.1, 22.1, 23.2, 24.2, 25.1, 26.1, 27.1, 28, 28.8, 29.6, 30.4, 31.2] },
  { inkomenVanaf: 100000, percentages: [21.1, 22.2, 23.2, 24.2, 25.2, 26.1, 27.1, 28, 28.9, 29.7, 30.5, 31.2] },
  { inkomenVanaf: 101000, percentages: [21.2, 22.2, 23.3, 24.3, 25.3, 26.2, 27.1, 28, 28.9, 29.7, 30.5, 31.2] },
  { inkomenVanaf: 102000, percentages: [21.2, 22.3, 23.4, 24.4, 25.3, 26.3, 27.1, 28.1, 28.9, 29.8, 30.5, 31.3] },
  { inkomenVanaf: 103000, percentages: [21.3, 22.4, 23.4, 24.4, 25.4, 26.3, 27.2, 28.1, 29, 29.8, 30.6, 31.3] },
  { inkomenVanaf: 104000, percentages: [21.3, 22.4, 23.5, 24.5, 25.5, 26.4, 27.3, 28.1, 29, 29.8, 30.6, 31.3] },
  { inkomenVanaf: 105000, percentages: [21.3, 22.5, 23.5, 24.5, 25.5, 26.5, 27.3, 28.2, 29.1, 29.9, 30.6, 31.4] },
  { inkomenVanaf: 106000, percentages: [21.4, 22.5, 23.6, 24.6, 25.6, 26.5, 27.4, 28.2, 29.1, 29.9, 30.7, 31.4] },
  { inkomenVanaf: 107000, percentages: [21.4, 22.5, 23.7, 24.7, 25.6, 26.6, 27.5, 28.3, 29.1, 30, 30.7, 31.5] },
  { inkomenVanaf: 108000, percentages: [21.5, 22.6, 23.7, 24.7, 25.7, 26.7, 27.5, 28.4, 29.2, 30, 30.8, 31.5] },
  { inkomenVanaf: 109000, percentages: [21.5, 22.6, 23.7, 24.8, 25.8, 26.7, 27.6, 28.4, 29.2, 30, 30.8, 31.5] },
  { inkomenVanaf: 110000, percentages: [21.6, 22.7, 23.7, 24.8, 25.8, 26.7, 27.7, 28.5, 29.3, 30, 30.8, 31.5] },
  { inkomenVanaf: 111000, percentages: [21.6, 22.7, 23.8, 24.8, 25.9, 26.8, 27.7, 28.5, 29.3, 30.1, 30.8, 31.6] },
  { inkomenVanaf: 112000, percentages: [21.7, 22.8, 23.8, 24.9, 25.9, 26.8, 27.7, 28.6, 29.4, 30.1, 30.9, 31.6] },
  { inkomenVanaf: 113000, percentages: [21.7, 22.8, 23.9, 24.9, 25.9, 26.9, 27.8, 28.7, 29.4, 30.2, 30.9, 31.7] },
  { inkomenVanaf: 114000, percentages: [21.8, 22.9, 23.9, 25, 25.9, 26.9, 27.8, 28.7, 29.5, 30.2, 30.9, 31.7] },
  { inkomenVanaf: 115000, percentages: [21.8, 22.9, 24, 25, 26, 26.9, 27.9, 28.7, 29.5, 30.3, 31, 31.7] },
  { inkomenVanaf: 116000, percentages: [21.8, 22.9, 24, 25, 26, 27, 27.9, 28.8, 29.6, 30.3, 31, 31.7] },
  { inkomenVanaf: 117000, percentages: [21.9, 23, 24.1, 25.1, 26.1, 27, 28, 28.8, 29.6, 30.4, 31.1, 31.8] },
  { inkomenVanaf: 118000, percentages: [21.9, 23, 24.1, 25.1, 26.1, 27.1, 28, 28.9, 29.7, 30.4, 31.1, 31.8] },
  { inkomenVanaf: 119000, percentages: [22, 23.1, 24.1, 25.2, 26.2, 27.1, 28, 28.9, 29.7, 30.5, 31.2, 31.9] },
  { inkomenVanaf: 120000, percentages: [22, 23.1, 24.2, 25.2, 26.2, 27.2, 28.1, 28.9, 29.8, 30.5, 31.3, 31.9] },
  { inkomenVanaf: 121000, percentages: [22, 23.2, 24.2, 25.3, 26.3, 27.2, 28.1, 29, 29.8, 30.6, 31.3, 32] },
  { inkomenVanaf: 122000, percentages: [22.1, 23.2, 24.3, 25.3, 26.3, 27.3, 28.2, 29, 29.9, 30.6, 31.4, 32] },
  { inkomenVanaf: 123000, percentages: [22.1, 23.2, 24.3, 25.4, 26.4, 27.3, 28.2, 29.1, 29.9, 30.7, 31.4, 32.1] },
  { inkomenVanaf: 124000, percentages: [22.2, 23.3, 24.4, 25.4, 26.4, 27.4, 28.3, 29.1, 29.9, 30.8, 31.5, 32.1] },
  { inkomenVanaf: 125000, percentages: [22.2, 23.3, 24.4, 25.5, 26.5, 27.4, 28.3, 29.2, 30, 30.8, 31.5, 32.2] },
] as const;
