/**
 * Box 3-normen 2026 uit Rekentool_BOX_3_Danilo_Skoric.xlsx.
 * Bron vermeld in het werkblad: Wet IB 2001 en Nationale Nederlanden, Beheerd Beleggen 2026.
 * Jaarlijks per 1 januari actualiseren.
 */
export const BOX3_NORMJAAR = 2026;
export const FORFAIT_SPAREN = 0.0137;
export const FORFAIT_BELEGGEN = 0.06;
export const FORFAIT_SCHULDEN = 0.027;
export const HEFFINGSVRIJ_VERMOGEN = 59357;
export const SCHULDENDREMPEL = 3800;
export const GROENE_VRIJSTELLING = 26715;
export const BOX3_TARIEF = 0.36;

export const RISICOPROFIELEN = [
  { id: "Defensief", verdeling: "30% aandelen / 70% obligaties", rendement: 3 },
  { id: "Neutraal", verdeling: "50% aandelen / 50% obligaties", rendement: 3.6 },
  { id: "Offensief", verdeling: "75% aandelen / 25% obligaties", rendement: 4.3 },
  { id: "Zeer offensief", verdeling: "90% aandelen / 10% obligaties", rendement: 4.7 },
  { id: "Eigen", verdeling: "Kies zelf een verwacht rendement", rendement: null },
] as const;

export type Risicoprofiel = (typeof RISICOPROFIELEN)[number]["id"];
