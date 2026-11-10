import { expect, test } from "bun:test";
import { fundSelection } from "./fundSelection";

test("offers the five supplied funds", () => {
  expect(fundSelection.map(f => f.name)).toEqual(["ASN Duurzaam Aandelenfonds", "Fidelity Sustainable Global Corporate Bond", "ASN Milieu & Waterfonds", "Candriam Sustainable Equity Circular Economy", "BASE FONDS"]);
});
test("ASN equity annual cost is 0.85 percent", () => expect(fundSelection[0].annualCost).toEqual([0.85]));
test("ASN equity transaction cost is 0.10 percent", () => expect(fundSelection[0].transactionCost).toBe(0.10));
test("Fidelity annual costs range from 0.70 to 1.05 percent", () => expect(fundSelection[1].annualCost).toEqual([0.70, 1.05]));
test("ASN environment annual cost is 1 percent", () => expect(fundSelection[2].annualCost).toEqual([1]));
test("ASN environment transaction cost is 0.25 percent", () => expect(fundSelection[2].transactionCost).toBe(0.25));
test("Candriam annual cost is 1.10 percent", () => expect(fundSelection[3].annualCost).toEqual([1.10]));
test("Candriam transaction cost is 0.11 percent", () => expect(fundSelection[3].transactionCost).toBe(0.11));