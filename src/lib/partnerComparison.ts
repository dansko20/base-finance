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

export const mortgageCriteria = [
  { title: "Duurzame hypotheekproducten", weight: 0.35, text: "Helpt de aanbieder je echt om je huis te verduurzamen, bijvoorbeeld met een extra lening tegen een lagere rente?" },
  { title: "Duurzaamheidsbeleid", weight: 0.25, text: "Heeft de aanbieder een duidelijk en openbaar beleid met concrete doelen voor milieu, mens en goed bestuur?" },
  { title: "Klantcommunicatie", weight: 0.25, text: "Legt de aanbieder duidelijk uit wat je mogelijkheden zijn en wat die kosten?" },
  { title: "Maatschappelijke betrokkenheid", weight: 0.15, text: "Doet de aanbieder ook iets voor de samenleving, naast het verstrekken van hypotheken?" },
];

export const mortgageProviders = [
  {
    name: "Allianz",
    description: "Een internationale verzekeraar die in Nederland ook hypotheken aanbiedt.",
    greenLoan: { name: "Groen Leningdeel", min: null, max: 35000 },
    measures: "zoals isolatie of een warmtepomp",
    reasons: ["Gratis HuisScan samen met HomeQgo: je ziet welke verbeteringen in jouw woning mogelijk zijn. Je kiest zelf welke maatregelen je uitvoert en door wie."],
    labelPlan: { appliesAtOrBelow: "D", target: "C" },
    incompatibleProduct: null,
    caution: "Extra lenen voor verduurzaming betekent ook een hogere schuld. Wij rekenen met je uit of dat verstandig en betaalbaar is.",
  },
  {
    name: "ASN Bank",
    description: "Een Nederlandse bank die zich al sinds 1960 richt op duurzaamheid.",
    greenLoan: { name: "Leningdeel Duurzaam Wonen", min: 2500, max: 30000 },
    measures: "",
    reasons: ["Bespaarhypotheek: het energielabel van je woning telt mee bij de rente.", "Duurzaamheid zit bij ASN in de kern van de bank en niet alleen in losse producten."],
    labelPlan: null,
    incompatibleProduct: "Bespaarhypotheek",
    caution: "Wij zoeken uit welke combinatie bij jou past.",
  },
];