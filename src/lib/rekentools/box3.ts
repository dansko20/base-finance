import {
  BOX3_NORMJAAR,
  BOX3_TARIEF,
  FORFAIT_BELEGGEN,
  FORFAIT_SCHULDEN,
  FORFAIT_SPAREN,
  GROENE_VRIJSTELLING,
  HEFFINGSVRIJ_VERMOGEN,
  RISICOPROFIELEN,
  SCHULDENDREMPEL,
  type Risicoprofiel,
} from "./normenBox3_2026";

const positief = (waarde: number) => Number.isFinite(waarde) && waarde > 0 ? waarde : 0;
const begrens = (waarde: number, max: number) => Math.min(positief(waarde), max);

export type Box3Input = {
  fiscalePartner: boolean;
  spaargeld: number;
  groenSparen: number;
  beleggingen: number;
  groenBeleggen: number;
  schulden: number;
};

export type Box3Resultaat = {
  normjaar: number;
  personen: number;
  spaargeld: number;
  beleggingen: number;
  vrijstellingGroenSparen: number;
  vrijstellingGroenBeleggen: number;
  belastSparen: number;
  belastBeleggen: number;
  schuldenNaDrempel: number;
  rendementsgrondslag: number;
  rendementSparen: number;
  rendementBeleggen: number;
  rendementSchulden: number;
  rendementOpVermogen: number;
  effectiefRendement: number;
  heffingsvrijVermogen: number;
  grondslagSparenBeleggen: number;
  aandeelRendementsgrondslag: number;
  voordeelSparenBeleggen: number;
  belasting: number;
};

export function berekenBox3(input: Box3Input): Box3Resultaat {
  const personen = input.fiscalePartner ? 2 : 1;
  const spaargeld = positief(input.spaargeld);
  const beleggingen = positief(input.beleggingen);
  const groeneVrijstelling = GROENE_VRIJSTELLING * personen;

  // Net als in de Excel gaan groene beleggingen eerst van de gezamenlijke vrijstelling af.
  const vrijstellingGroenBeleggen = Math.min(
    begrens(input.groenBeleggen, beleggingen),
    groeneVrijstelling,
  );
  const vrijstellingGroenSparen = Math.min(
    begrens(input.groenSparen, spaargeld),
    groeneVrijstelling - vrijstellingGroenBeleggen,
  );
  const belastSparen = spaargeld - vrijstellingGroenSparen;
  const belastBeleggen = beleggingen - vrijstellingGroenBeleggen;
  const schuldenNaDrempel = Math.max(0, positief(input.schulden) - SCHULDENDREMPEL * personen);
  const rendementsgrondslag = belastSparen + belastBeleggen - schuldenNaDrempel;
  const rendementSparen = belastSparen * FORFAIT_SPAREN;
  const rendementBeleggen = belastBeleggen * FORFAIT_BELEGGEN;
  const rendementSchulden = -schuldenNaDrempel * FORFAIT_SCHULDEN;
  const rendementOpVermogen = rendementSparen + rendementBeleggen + rendementSchulden;
  const effectiefRendement = rendementsgrondslag <= 0 ? 0 : rendementOpVermogen / rendementsgrondslag;
  const heffingsvrijVermogen = HEFFINGSVRIJ_VERMOGEN * personen;
  const grondslagSparenBeleggen = Math.max(0, rendementsgrondslag - heffingsvrijVermogen);
  const aandeelRendementsgrondslag = rendementsgrondslag <= 0
    ? 0
    : grondslagSparenBeleggen / rendementsgrondslag;
  const voordeelSparenBeleggen = Math.max(0, rendementOpVermogen * aandeelRendementsgrondslag);

  return {
    normjaar: BOX3_NORMJAAR,
    personen,
    spaargeld,
    beleggingen,
    vrijstellingGroenSparen,
    vrijstellingGroenBeleggen,
    belastSparen,
    belastBeleggen,
    schuldenNaDrempel,
    rendementsgrondslag,
    rendementSparen,
    rendementBeleggen,
    rendementSchulden,
    rendementOpVermogen,
    effectiefRendement,
    heffingsvrijVermogen,
    grondslagSparenBeleggen,
    aandeelRendementsgrondslag,
    voordeelSparenBeleggen,
    belasting: voordeelSparenBeleggen * BOX3_TARIEF,
  };
}

export type SparenOfBeleggenInput = {
  fiscalePartner: boolean;
  vastSpaargeld: number;
  groenSparen: number;
  twijfelBedrag: number;
  beleggingspercentage: number;
  groenBeleggen: number;
  schulden: number;
  spaarrente: number;
  risicoprofiel: Risicoprofiel;
  eigenRendement: number;
};

export type NettoScenario = Box3Resultaat & {
  brutoRendement: number;
  nettoRendement: number;
  nettoRendementPercentage: number;
};

function nettoScenario(box3: Box3Resultaat, spaarrente: number, beleggingsrendement: number): NettoScenario {
  const brutoRendement = box3.spaargeld * spaarrente + box3.beleggingen * beleggingsrendement;
  const nettoRendement = brutoRendement - box3.belasting;
  const totaleBezittingen = box3.spaargeld + box3.beleggingen;
  return {
    ...box3,
    brutoRendement,
    nettoRendement,
    nettoRendementPercentage: totaleBezittingen === 0 ? 0 : nettoRendement / totaleBezittingen,
  };
}

export function verwachtRendement(input: SparenOfBeleggenInput) {
  if (input.risicoprofiel === "Eigen") return positief(input.eigenRendement) / 100;
  return (RISICOPROFIELEN.find((profiel) => profiel.id === input.risicoprofiel)?.rendement ?? 0) / 100;
}

export function berekenSparenOfBeleggen(input: SparenOfBeleggenInput) {
  const vastSpaargeld = positief(input.vastSpaargeld);
  const twijfelBedrag = positief(input.twijfelBedrag);
  const beleggingsdeel = Math.min(100, positief(input.beleggingspercentage)) / 100;
  const spaarrente = positief(input.spaarrente) / 100;
  const beleggingsrendement = verwachtRendement(input);
  const gezamenlijk = {
    fiscalePartner: input.fiscalePartner,
    groenSparen: input.groenSparen,
    schulden: input.schulden,
  };
  const allesSparen = nettoScenario(berekenBox3({
    ...gezamenlijk,
    spaargeld: vastSpaargeld + twijfelBedrag,
    beleggingen: 0,
    groenBeleggen: 0,
  }), spaarrente, beleggingsrendement);
  const sparenEnBeleggen = nettoScenario(berekenBox3({
    ...gezamenlijk,
    spaargeld: vastSpaargeld + twijfelBedrag * (1 - beleggingsdeel),
    beleggingen: twijfelBedrag * beleggingsdeel,
    groenBeleggen: input.groenBeleggen,
  }), spaarrente, beleggingsrendement);
  const extraBelasting = sparenEnBeleggen.belasting - allesSparen.belasting;
  const extraNettoRendement = sparenEnBeleggen.nettoRendement - allesSparen.nettoRendement;
  const omslagpunt = sparenEnBeleggen.beleggingen === 0
    ? spaarrente
    : spaarrente + extraBelasting / sparenEnBeleggen.beleggingen;

  return {
    allesSparen,
    sparenEnBeleggen,
    beleggingsrendement,
    extraBelasting,
    extraNettoRendement,
    omslagpunt,
    belastingPer100Sparen: 100 * FORFAIT_SPAREN * BOX3_TARIEF * sparenEnBeleggen.aandeelRendementsgrondslag,
    belastingPer100Beleggen: 100 * FORFAIT_BELEGGEN * BOX3_TARIEF * sparenEnBeleggen.aandeelRendementsgrondslag,
  };
}

export const DEFAULT_BOX3_INPUT: Box3Input = {
  fiscalePartner: false,
  spaargeld: 0,
  groenSparen: 0,
  beleggingen: 0,
  groenBeleggen: 0,
  schulden: 0,
};

export const DEFAULT_SPAREN_OF_BELEGGEN_INPUT: SparenOfBeleggenInput = {
  fiscalePartner: false,
  vastSpaargeld: 0,
  groenSparen: 0,
  twijfelBedrag: 0,
  beleggingspercentage: 0,
  groenBeleggen: 0,
  schulden: 0,
  spaarrente: 0,
  risicoprofiel: "Neutraal",
  eigenRendement: 0,
};
