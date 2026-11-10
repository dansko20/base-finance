export const fundSelection = [
  {
    name: "ASN Duurzaam Aandelenfonds", manager: "ASN Impact Investors", kind: "Wereldwijd aandelenfonds", logo: "asn",
    explanation: "Belegt wereldwijd in aandelen: kleine delen van bedrijven. In onze fondsvergelijking viel het op door de strengste duurzaamheidsregels, het hoogste rendement en de laagste kosten binnen deze vergelijking. ASN legt in begrijpelijk Nederlands uit wat het fonds doet.",
    annualCost: [0.85], transactionCost: 0.10,
    caution: "Het fonds werkt pas sinds 2025 met het huidige beleid. Oudere rendementen zeggen daarom minder over de huidige aanpak.",
  },
  {
    name: "Fidelity Sustainable Global Corporate Bond", manager: "Fidelity International", kind: "Wereldwijd obligatiefonds", logo: null,
    explanation: "Belegt in duurzame bedrijfsobligaties: leningen aan bedrijven. Volgens ons aangeleverde onderzoek waren er bij deze beheerder de afgelopen jaren geen boetes of greenwashing, waarbij beleggingen duurzamer lijken dan ze zijn. Obligaties zijn bedoeld om het risico te verlagen, bijvoorbeeld als je huisaankoop dichterbij komt. Ook obligaties kunnen in waarde dalen.",
    annualCost: [0.70, 1.05], transactionCost: null,
    caution: "Het fonds bestaat pas sinds 2024 en belegt alleen in bedrijfsobligaties, niet in staatsobligaties. De kosten hangen af van de fondsklasse: de variant van het fonds waarin je belegt.",
  },
  {
    name: "ASN Milieu & Waterfonds", manager: "ASN Impact Investors", kind: "Themafonds voor milieu en water", logo: "asn",
    explanation: "Belegt in bedrijven met oplossingen voor water, energie en milieu. We kiezen dit fonds vanwege de strenge selectie op klimaat, biodiversiteit en mensenrechten. ASN geeft elke maand uitleg in het Nederlands.",
    annualCost: [1.00], transactionCost: 0.25,
    caution: "Een fonds met één thema schommelt meer dan een breed aandelenfonds.",
  },
  {
    name: "Candriam Sustainable Equity Circular Economy", manager: "Candriam", kind: "Themafonds voor circulaire economie", logo: null,
    explanation: "Belegt in bedrijven die afval verminderen, materialen hergebruiken en producten langer laten meegaan. Wij kiezen de fondsklasse zonder provisie, zodat de kosten laag blijven.",
    annualCost: [1.10], transactionCost: 0.11,
    caution: "Volgens het aangeleverde onderzoek was het rendement over de afgelopen vijf jaar negatief. De informatie van Candriam is alleen in het Engels.",
  },
  {
    name: "BASE FONDS", manager: "BASE FINANCE", kind: "Eigen fonds binnen ons schoolproject", logo: "base",
    explanation: "Ons eigen fonds, opgebouwd tijdens het beleggingsspel van onze opleiding. Hiermee laten we zien hoe wij zelf beleggen. Dit is een oefenfonds binnen ons fictieve schoolproject, geen echt fonds waarin je kunt instappen.",
    annualCost: [], transactionCost: null,
    caution: "Er zijn geen fondskosten of rendementscijfers aangeleverd voor dit oefenfonds.",
  },
] as const;

export const fundDisclaimer = "De fondsselectie en informatie zijn aangeleverd voor ons schoolproject en zijn geen persoonlijk advies of bevestiging van echte samenwerkingen. Kosten en fondsvoorwaarden kunnen veranderen. Rendementen uit het verleden bieden geen garantie voor de toekomst. Je kunt (een deel van) je inleg verliezen.";