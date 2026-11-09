import { describe, expect, test } from "bun:test";
import { assetManagers, comparisonScore, comparisonWeights } from "./partnerComparison";

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