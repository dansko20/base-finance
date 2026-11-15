import { describe, expect, test } from "bun:test";

import { berekenBox3, berekenSparenOfBeleggen } from "./box3";
import { BOX3_TARIEF, FORFAIT_BELEGGEN, FORFAIT_SCHULDEN, FORFAIT_SPAREN, GROENE_VRIJSTELLING, HEFFINGSVRIJ_VERMOGEN, SCHULDENDREMPEL } from "./normenBox3_2026";

const dichtbij = (werkelijk: number, verwacht: number) => expect(werkelijk).toBeCloseTo(verwacht, 8);

describe("box 3-normen 2026 uit de aangeleverde Excel", () => {
  test("gebruikt de forfaits en het tarief uit het werkblad", () => {
    expect(FORFAIT_SPAREN).toBe(0.0137);
    expect(FORFAIT_BELEGGEN).toBe(0.06);
    expect(FORFAIT_SCHULDEN).toBe(0.027);
    expect(BOX3_TARIEF).toBe(0.36);
  });

  test("gebruikt de vrijstellingen en schuldendrempel per persoon", () => {
    expect(HEFFINGSVRIJ_VERMOGEN).toBe(59357);
    expect(SCHULDENDREMPEL).toBe(3800);
    expect(GROENE_VRIJSTELLING).toBe(26715);
  });
});

describe("vergelijking met doorgerekende Excel-voorbeelden", () => {
  test("€ 100.000 alles sparen zonder fiscale partner", () => {
    const resultaat = berekenSparenOfBeleggen({
      fiscalePartner: false,
      vastSpaargeld: 0,
      groenSparen: 0,
      twijfelBedrag: 100000,
      beleggingspercentage: 0,
      groenBeleggen: 0,
      schulden: 0,
      spaarrente: 1.2,
      risicoprofiel: "Neutraal",
      eigenRendement: 0,
    });

    dichtbij(resultaat.allesSparen.belasting, 200.451276);
    dichtbij(resultaat.allesSparen.nettoRendement, 999.548724);
    dichtbij(resultaat.extraNettoRendement, 0);
    dichtbij(resultaat.omslagpunt, 0.012);
  });

  test("€ 50.000 buffer en € 100.000 twijfelbedrag, waarvan 50% belegd", () => {
    const resultaat = berekenSparenOfBeleggen({
      fiscalePartner: false,
      vastSpaargeld: 50000,
      groenSparen: 0,
      twijfelBedrag: 100000,
      beleggingspercentage: 50,
      groenBeleggen: 0,
      schulden: 0,
      spaarrente: 1.2,
      risicoprofiel: "Neutraal",
      eigenRendement: 0,
    });

    dichtbij(resultaat.allesSparen.belasting, 447.051276);
    dichtbij(resultaat.sparenEnBeleggen.belasting, 950.663784);
    dichtbij(resultaat.allesSparen.nettoRendement, 1352.948724);
    dichtbij(resultaat.sparenEnBeleggen.nettoRendement, 2049.336216);
    dichtbij(resultaat.extraBelasting, 503.612508);
    dichtbij(resultaat.extraNettoRendement, 696.387492);
    dichtbij(resultaat.omslagpunt, 0.02207225016);
  });

  test("fiscale partners met groen vermogen, 75% beleggen en een box 3-schuld", () => {
    const resultaat = berekenSparenOfBeleggen({
      fiscalePartner: true,
      vastSpaargeld: 40000,
      groenSparen: 10000,
      twijfelBedrag: 200000,
      beleggingspercentage: 75,
      groenBeleggen: 30000,
      schulden: 20000,
      spaarrente: 1,
      risicoprofiel: "Offensief",
      eigenRendement: 0,
    });

    dichtbij(resultaat.allesSparen.belasting, 460.725143161765);
    dichtbij(resultaat.sparenEnBeleggen.belasting, 1052.39595070362);
    dichtbij(resultaat.allesSparen.nettoRendement, 1939.27485683824);
    dichtbij(resultaat.sparenEnBeleggen.nettoRendement, 6297.60404929638);
    dichtbij(resultaat.extraBelasting, 591.67080754186);
    dichtbij(resultaat.extraNettoRendement, 4358.32919245814);
    dichtbij(resultaat.omslagpunt, 0.0139444720502791);
  });
});

describe("vrijstellingen en grenzen", () => {
  test("deelt de groene vrijstelling eerst toe aan beleggen en daarna aan sparen", () => {
    const resultaat = berekenBox3({
      fiscalePartner: false,
      spaargeld: 50000,
      groenSparen: 10000,
      beleggingen: 50000,
      groenBeleggen: 20000,
      schulden: 0,
    });

    expect(resultaat.vrijstellingGroenBeleggen).toBe(20000);
    expect(resultaat.vrijstellingGroenSparen).toBe(6715);
  });

  test("verdubbelt de schuldendrempel voor fiscale partners", () => {
    const resultaat = berekenBox3({
      fiscalePartner: true,
      spaargeld: 0,
      groenSparen: 0,
      beleggingen: 0,
      groenBeleggen: 0,
      schulden: 20000,
    });

    expect(resultaat.schuldenNaDrempel).toBe(12400);
  });

  test("accepteert een negatief eigen rendement zoals de rendementstabel in Excel", () => {
    const resultaat = berekenSparenOfBeleggen({
      fiscalePartner: false,
      vastSpaargeld: 0,
      groenSparen: 0,
      twijfelBedrag: 100000,
      beleggingspercentage: 100,
      groenBeleggen: 0,
      schulden: 0,
      spaarrente: 1.2,
      risicoprofiel: "Eigen",
      eigenRendement: -5,
    });

    dichtbij(resultaat.sparenEnBeleggen.brutoRendement, -5000);
  });
});
