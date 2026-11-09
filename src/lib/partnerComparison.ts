// BASE FINANCE's own comparison, supplied for the school project, October 2026.
export const comparisonWeights = { sustainability: 0.5, governance: 0.25, news: 0.25 };

export const assetManagers = [
  { name: "Robeco", sustainability: 9, governance: 7, news: 7 },
  { name: "ASN Impact Investors", sustainability: 9, governance: 6, news: 6 },
  { name: "BNP Paribas Asset Management", sustainability: 8, governance: 6, news: 8 },
  { name: "Triodos Investment Management", sustainability: 9, governance: 6, news: 5 },
  { name: "Candriam", sustainability: 8, governance: 7, news: 6 },
  { name: "Amundi", sustainability: 6, governance: 7, news: 6 },
  { name: "Fidelity International", sustainability: 4, governance: 5, news: 8 },
  { name: "Allianz Global Investors", sustainability: 7, governance: 4, news: 2 },
  { name: "DWS Group", sustainability: 5, governance: 5, news: 2 },
  { name: "UBS Asset Management", sustainability: 4, governance: 5, news: 4 },
  { name: "BlackRock", sustainability: 3, governance: 4, news: 3 },
  { name: "Vanguard", sustainability: 2, governance: 6, news: 3 },
];

export function comparisonScore(manager: { sustainability: number; governance: number; news: number }) {
  return manager.sustainability * comparisonWeights.sustainability
    + manager.governance * comparisonWeights.governance
    + manager.news * comparisonWeights.news;
}