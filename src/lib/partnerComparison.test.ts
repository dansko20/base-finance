import { describe, expect, test } from "bun:test";
import { assetManagers, comparisonScore, comparisonWeights, mortgageCriteria, mortgageProviders } from "./partnerComparison";

describe("Supplied partner comparison", () => {
  test("sustainability accounts for 50%", () => {
    expect(comparisonWeights.sustainability).toBe(0.5);
    expect(comparisonScore({ sustainability: 10, governance: 0, news: 0 })).toBe(5);
  });
  test("governance accounts for 25%", () => {
    expect(comparisonScore({ sustainability: 0, governance: 10, news: 0 })).toBe(2.5);
  });
  test("news accounts for 25%", () => {
    expect(comparisonScore({ sustainability: 0, governance: 0, news: 10 })).toBe(2.5);
  });
  test("includes all twelve supplied managers and their exact totals", () => {
    expect(assetManagers).toHaveLength(12);
    expect(assetManagers.map(comparisonScore)).toEqual([8, 7.5, 7.5, 7.25, 7.25, 6.25, 5.25, 5, 4.25, 4.25, 3.25, 3.25]);
  });
});

describe("Supplied mortgage provider rules", () => {
  test("sustainable mortgage products account for 35%", () => {
    expect(mortgageCriteria[0]?.weight).toBe(0.35);
  });
  test("sustainability policy accounts for 25%", () => {
    expect(mortgageCriteria[1]?.weight).toBe(0.25);
  });
  test("customer communication accounts for 25%", () => {
    expect(mortgageCriteria[2]?.weight).toBe(0.25);
  });
  test("social engagement accounts for 15%", () => {
    expect(mortgageCriteria[3]?.weight).toBe(0.15);
  });
  test("selects only the two supplied providers", () => {
    expect(mortgageProviders.map(provider => provider.name)).toEqual(["Allianz", "ASN Bank"]);
  });
  test("Allianz green loan is capped at 35000 euros", () => {
    expect(mortgageProviders.find(provider => provider.name === "Allianz")?.greenLoan.max).toBe(35000);
  });
  test("Allianz requires a plan from label D or below to at least C", () => {
    expect(mortgageProviders.find(provider => provider.name === "Allianz")?.labelPlan).toEqual({ appliesAtOrBelow: "D", target: "C" });
  });
  test("ASN sustainable living loan starts at 2500 euros", () => {
    expect(mortgageProviders.find(provider => provider.name === "ASN Bank")?.greenLoan.min).toBe(2500);
  });
  test("ASN sustainable living loan is capped at 30000 euros", () => {
    expect(mortgageProviders.find(provider => provider.name === "ASN Bank")?.greenLoan.max).toBe(30000);
  });
  test("ASN sustainable living loan cannot combine with Bespaarhypotheek", () => {
    expect(mortgageProviders.find(provider => provider.name === "ASN Bank")?.incompatibleProduct).toBe("Bespaarhypotheek");
  });
});