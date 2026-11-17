export type FundLogo = "asn" | "base" | "bnp" | "robeco";

export type Fund = {
  name: string; manager: string; kind: string; logo: FundLogo;
  explanation: string; annualCost: readonly number[]; transactionCost: number | null;
  costIsIndicative: boolean; caution: string;
  details: { strategy: string; risk: string; forStarters: string };
};

export const fundSelection: readonly Fund[] = [
  {
    name: "ASN Duurzaam Aandelenfonds", manager: "ASN Impact Investors", kind: "Wereldwijd aandelenfonds", logo: "asn",
    explanation: "Belegt wereldwijd in aandelen: kleine delen van bedrijven. In onze fondsvergelijking viel het op door de strengste duurzaamheidsregels, het hoogste rendement en de laagste kosten binnen deze vergelijking. ASN legt in begrijpelijk Nederlands uit wat het fonds doet.",
    annualCost: [0.85], transactionCost: 0.10, costIsIndicative: false,
    caution: "Het fonds werkt pas sinds 2025 met het huidige beleid. Oudere rendementen zeggen daarom minder over de huidige aanpak.",
    details: { strategy: "Spreidt je geld over veel beursgenoteerde bedrijven wereldwijd die voldoen aan strenge eisen voor klimaat, biodiversiteit en mensenrechten.", risk: "Aandelen kunnen flink schommelen. Geschikt als je je geld minstens vijf tot tien jaar niet nodig hebt.", forStarters: "Een brede basis voor vermogensopbouw op de lange termijn, bijvoorbeeld voor later of een volgende woning." },
  },
  {
    name: "BNP Paribas Green Bond Fund", manager: "BNP Paribas Asset Management", kind: "Groen obligatiefonds", logo: "bnp",
    explanation: "Belegt in groene obligaties: leningen aan overheden en bedrijven waarvan het geld naar duurzame projecten gaat, zoals schone energie en energiezuinige gebouwen. BNP Paribas kwam als een van de drie beste uit onze vergelijking van twaalf vermogensbeheerders.",
    annualCost: [0.65], transactionCost: null, costIsIndicative: true,
    caution: "Obligaties schommelen minder dan aandelen, maar kunnen in waarde dalen, vooral als de rente stijgt.",
    details: { strategy: "Leent geld uit aan overheden en bedrijven, met de afspraak dat het wordt besteed aan aantoonbaar groene projecten.", risk: "Lager risico dan aandelen. Rentestijgingen kunnen de koers tijdelijk drukken.", forStarters: "Past als stabielere aanvulling, bijvoorbeeld wanneer je huisaankoop dichterbij komt en je minder risico wilt." },
  },
  {
    name: "ASN Milieu & Waterfonds", manager: "ASN Impact Investors", kind: "Themafonds voor milieu en water", logo: "asn",
    explanation: "Belegt in bedrijven met oplossingen voor water, energie en milieu. We kiezen dit fonds vanwege de strenge selectie op klimaat, biodiversiteit en mensenrechten. ASN geeft elke maand uitleg in het Nederlands.",
    annualCost: [1.00], transactionCost: 0.25, costIsIndicative: false,
    caution: "Een fonds met één thema schommelt meer dan een breed aandelenfonds.",
    details: { strategy: "Kiest bedrijven die werken aan schoon water, recycling, schone energie en een gezonder milieu.", risk: "Hoger risico door de focus op één thema. Gebruik het als aanvulling, niet als basis.", forStarters: "Voor wie bewust een deel van zijn geld wil inzetten voor milieu en water." },
  },
  {
    name: "Robeco Smart Energy", manager: "Robeco", kind: "Themafonds voor de energietransitie", logo: "robeco",
    explanation: "Belegt in bedrijven die de overstap naar schone energie mogelijk maken, zoals zonne- en windenergie, slimme stroomnetten en energiezuinige technologie. Robeco had de hoogste totaalscore in onze vergelijking van twaalf vermogensbeheerders.",
    annualCost: [0.85], transactionCost: null, costIsIndicative: true,
    caution: "Een themafonds schommelt meer dan een breed aandelenfonds. Energie- en techbedrijven kunnen sterk in koers bewegen.",
    details: { strategy: "Selecteert wereldwijd bedrijven in de hele keten van schone energie: opwekking, opslag, netten en efficiënt verbruik.", risk: "Hoog risico door de focus op één sector. Alleen geschikt voor een kleiner deel van je geld en een lange horizon.", forStarters: "Voor wie extra groei zoekt binnen een duurzaam thema en schommelingen kan opvangen." },
  },
  {
    name: "BASE FONDS", manager: "BASE FINANCE", kind: "Eigen fonds binnen ons schoolproject", logo: "base",
    explanation: "Ons eigen fonds, opgebouwd tijdens het beleggingsspel van onze opleiding. Hiermee laten we zien hoe wij zelf beleggen. Dit is een oefenfonds binnen ons fictieve schoolproject, geen echt fonds waarin je kunt instappen.",
    annualCost: [], transactionCost: null, costIsIndicative: false,
    caution: "Er zijn geen fondskosten of rendementscijfers aangeleverd voor dit oefenfonds.",
    details: { strategy: "Een oefenportefeuille die we tijdens het beleggingsspel van onze opleiding hebben samengesteld.", risk: "Niet van toepassing: je kunt niet in dit fonds beleggen.", forStarters: "Laat zien hoe wij zelf keuzes maken en afwegen." },
  },
];

export const fundDisclaimer = "De fondsselectie en informatie zijn aangeleverd voor ons schoolproject en zijn geen persoonlijk advies of bevestiging van echte samenwerkingen. Kosten met de vermelding 'indicatief' zijn schattingen; kijk voor de actuele kosten in de fondsdocumentatie. Rendementen uit het verleden bieden geen garantie voor de toekomst. Je kunt (een deel van) je inleg verliezen.";
