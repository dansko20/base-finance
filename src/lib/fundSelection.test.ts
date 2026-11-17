import { expect, test } from "bun:test";
import { fundSelection } from "./fundSelection";

test("offers the five funds from the top three managers plus BASE FONDS", () => {
  expect(fundSelection.map(f => f.name)).toEqual(["ASN Duurzaam Aandelenfonds", "BNP Paribas Green Bond Fund", "ASN Milieu & Waterfonds", "Robeco Smart Energy", "BASE FONDS"]);
});
test("only ASN, BNP Paribas, Robeco and BASE are managers", () => expect([...new Set(fundSelection.map(f => f.manager))]).toEqual(["ASN Impact Investors", "BNP Paribas Asset Management", "Robeco", "BASE FINANCE"]));
test("ASN equity annual cost is 0.85 percent", () => expect(fundSelection[0]!.annualCost).toEqual([0.85]));
test("ASN equity transaction cost is 0.10 percent", () => expect(fundSelection[0]!.transactionCost).toBe(0.10));
test("ASN environment annual cost is 1 percent", () => expect(fundSelection[2]!.annualCost).toEqual([1]));
test("ASN environment transaction cost is 0.25 percent", () => expect(fundSelection[2]!.transactionCost).toBe(0.25));
test("BNP and Robeco costs are marked indicative", () => expect([fundSelection[1]!.costIsIndicative, fundSelection[3]!.costIsIndicative]).toEqual([true, true]));
