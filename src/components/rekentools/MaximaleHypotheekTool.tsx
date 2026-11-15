import { Check } from "lucide-react";
import { useMemo, useState } from "react";

import { ENERGIELABELS, NORMJAAR } from "@/lib/rekentools/normen2026";
import {
  DEFAULT_INPUT,
  berekenMaximaleHypotheek,
  euro,
  euro2,
  type Aanvrager,
  type MaximaleHypotheekInput,
} from "@/lib/rekentools/maximaleHypotheek";
import { ChoiceGrid, NumberQuestion, RekentoolWizard, ResultRow, fieldClass, type WizardStep } from "./RekentoolWizard";

function JaNee({ label, value, onSelect }: { label: string; value: boolean | null; onSelect: (value: boolean) => void }) {
  return (
    <ChoiceGrid
      label={label}
      selected={value === null ? null : value ? "ja" : "nee"}
      options={[{ value: "nee", label: "Nee" }, { value: "ja", label: "Ja" }]}
      onSelect={(choice) => onSelect(choice === "ja")}
    />
  );
}

export function MaximaleHypotheekTool() {
  const [input, setInput] = useState<MaximaleHypotheekInput>(DEFAULT_INPUT);
  const [samenKopen, setSamenKopen] = useState<boolean | null>(null);
  const [answered, setAnswered] = useState<Set<string>>(new Set());
  const result = useMemo(() => berekenMaximaleHypotheek(input), [input]);
  const set = <K extends keyof MaximaleHypotheekInput>(key: K, value: MaximaleHypotheekInput[K]) => setInput((current) => ({ ...current, [key]: value }));
  const answer = (id: string) => setAnswered((current) => new Set(current).add(id));
  const setApplicant = <K extends keyof Aanvrager>(nummer: 1 | 2, key: K, value: Aanvrager[K]) => {
    const applicantKey = nummer === 1 ? "aanvrager1" : "aanvrager2";
    setInput((current) => ({ ...current, [applicantKey]: { ...current[applicantKey], [key]: value } }));
  };
  const salary = (nummer: 1 | 2, label: string) => {
    const key = nummer === 1 ? "aanvrager1" : "aanvrager2";
    const id = `salaris-${nummer}`;
    return <NumberQuestion label={label} value={input[key].brutoMaandsalaris} onAnswer={() => answer(id)} onChange={(value) => setApplicant(nummer, "brutoMaandsalaris", value)} />;
  };
  const otherIncome = (nummer: 1 | 2, label: string) => {
    const key = nummer === 1 ? "aanvrager1" : "aanvrager2";
    const id = `ander-inkomen-${nummer}`;
    return <NumberQuestion label={label} value={input[key].anderVastInkomen} onAnswer={() => answer(id)} onChange={(value) => setApplicant(nummer, "anderVastInkomen", value)} />;
  };
  const thirteenthMonth = (nummer: 1 | 2) => {
    const key = nummer === 1 ? "aanvrager1" : "aanvrager2";
    const id = `dertiende-${nummer}`;
    return <JaNee label="Vaste dertiende maand" value={answered.has(id) ? input[key].dertiendeMaand : null} onSelect={(value) => { setApplicant(nummer, "dertiendeMaand", value); answer(id); }} />;
  };

  const steps: WizardStep[] = [
    {
      id: "samenkopen",
      question: "Koop je alleen of samen met je partner?",
      hint: "Bij samen kopen vragen we daarna ook het inkomen van je partner. Alleenstaanden kunnen onder voorwaarden extra leenruimte krijgen.",
      isAnswered: samenKopen !== null,
      content: <JaNee label="Samen kopen" value={samenKopen} onSelect={(value) => { setSamenKopen(value); if (!value) set("aanvrager2", DEFAULT_INPUT.aanvrager2); }} />,
    },
    {
      id: "salaris-1",
      question: "Wat is je bruto maandsalaris?",
      hint: "Je salaris per maand vóór belasting, zonder vakantiegeld. We rekenen standaard met 8% vakantiegeld.",
      isAnswered: answered.has("salaris-1"),
      content: salary(1, "Bruto maandsalaris"),
    },
    {
      id: "dertiende-1",
      question: "Heb je een vaste dertiende maand?",
      hint: "Kies alleen ja als een extra maandsalaris vast in je arbeidscontract staat.",
      isAnswered: answered.has("dertiende-1"),
      content: thirteenthMonth(1),
    },
    {
      id: "ander-inkomen-1",
      question: "Heb je daarnaast ander vast inkomen per jaar?",
      hint: "Bijvoorbeeld een vaste toeslag, eindejaarsuitkering of vast overwerk. Vul € 0 in als je geen ander vast inkomen hebt.",
      isAnswered: answered.has("ander-inkomen-1"),
      content: otherIncome(1, "Ander vast inkomen per jaar"),
    },
    ...(samenKopen ? [
      {
        id: "salaris-2",
        question: "Wat is het bruto maandsalaris van je partner?",
        hint: "Het salaris per maand vóór belasting, zonder vakantiegeld. Ook hier rekenen we met 8% vakantiegeld.",
        isAnswered: answered.has("salaris-2"),
        content: salary(2, "Bruto maandsalaris partner"),
      },
      {
        id: "dertiende-2",
        question: "Heeft je partner een vaste dertiende maand?",
        hint: "Kies alleen ja als een extra maandsalaris vast in het arbeidscontract staat.",
        isAnswered: answered.has("dertiende-2"),
        content: thirteenthMonth(2),
      },
      {
        id: "ander-inkomen-2",
        question: "Heeft je partner ander vast inkomen per jaar?",
        hint: "Bijvoorbeeld een vaste toeslag of eindejaarsuitkering. Vul € 0 in als dit niet zo is.",
        isAnswered: answered.has("ander-inkomen-2"),
        content: otherIncome(2, "Ander vast inkomen partner per jaar"),
      },
    ] : []),
    {
      id: "roodstand",
      question: "Wat is de gezamenlijke limiet van jullie roodstand?",
      hint: "Ook als je nooit roodstaat, telt de volledige limiet mee. Vul € 0 in als je geen roodstand kunt nemen.",
      isAnswered: answered.has("roodstand"),
      content: <NumberQuestion label="Limiet roodstand" value={input.roodstandLimiet} onAnswer={() => answer("roodstand")} onChange={(value) => set("roodstandLimiet", value)} />,
    },
    {
      id: "leningen",
      question: "Wat is het totaal van jullie andere leningen?",
      hint: "Bijvoorbeeld een doorlopend krediet, persoonlijke lening of private lease. Vul € 0 in als je deze leningen niet hebt.",
      isAnswered: answered.has("leningen"),
      content: <NumberQuestion label="Andere leningen" value={input.andereLeningen} onAnswer={() => answer("leningen")} onChange={(value) => set("andereLeningen", value)} />,
    },
    {
      id: "duo",
      question: "Hoeveel betaal je maandelijks aan DUO?",
      hint: "Gebruik het bedrag dat je nu per maand betaalt. Vul € 0 in als je geen studieschuld aflost.",
      isAnswered: answered.has("duo"),
      content: <NumberQuestion label="DUO-maandbedrag" value={input.duoMaandbedrag} onAnswer={() => answer("duo")} onChange={(value) => set("duoMaandbedrag", value)} />,
    },
    {
      id: "energielabel",
      question: "Welk energielabel heeft de woning?",
      hint: "Weet je het niet? Kies E, F of G. Dan rekent de tool voorzichtig. Het label kan extra leenruimte geven.",
      isAnswered: answered.has("energielabel"),
      content: (
        <select
          aria-label="Energielabel van de woning"
          value={answered.has("energielabel") ? input.energielabel : ""}
          onChange={(event) => { answer("energielabel"); set("energielabel", event.target.value as MaximaleHypotheekInput["energielabel"]); }}
          className={`${fieldClass} mx-auto block max-w-md`}
        >
          <option value="" disabled>Kies een energielabel</option>
          {ENERGIELABELS.map((label) => <option key={label}>{label}</option>)}
        </select>
      ),
    },
    {
      id: "verduurzaming",
      question: "Hoeveel wil je lenen voor verduurzaming?",
      hint: "Bijvoorbeeld voor isolatie, zonnepanelen of een warmtepomp. Vul € 0 in als je geen verduurzaming wilt financieren.",
      isAnswered: answered.has("verduurzaming"),
      content: <NumberQuestion label="Bedrag voor verduurzaming" value={input.verduurzaming} onAnswer={() => answer("verduurzaming")} onChange={(value) => set("verduurzaming", value)} />,
    },
  ];

  const uitkomst = (
    <div>
      <div className="overflow-hidden rounded-xl bg-primary text-primary-foreground">
        <div className="p-7 sm:p-8">
          <p className="text-sm font-medium">Je kunt ongeveer lenen</p>
          <p className="mt-3 text-[clamp(2.75rem,8vw,4.5rem)] font-medium leading-none tabular-nums">{euro(result.metVerduurzaming)}</p>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">Op basis van {result.rente.toFixed(2)}% rente, 10 jaar vast met NHG en een looptijd van 30 jaar.</p>
        </div>
        <div className="border-t border-primary-foreground/20 px-7 py-5 sm:px-8">
          <ResultRow inverse label="Zonder verduurzaming" value={euro(result.zonderVerduurzaming)} />
          <ResultRow inverse label="Extra voor verduurzaming" value={euro(result.verduurzamingOpslag)} />
          <ResultRow inverse label="Geschatte bruto maandlast" value={euro2(result.brutoMaandlast)} />
          <ResultRow inverse label="NHG mogelijk (indicatie)" value={result.nhgMogelijk ? "Ja" : "Nee"} />
        </div>
      </div>

      <div className="mt-6 rounded-xl bg-surface p-6 sm:p-7">
        <p className="label-eyebrow">Zo rekenen wij</p>
        <div className="mt-4 space-y-3 text-sm">
          <div className="flex gap-3"><Check className="mt-0.5 size-4 shrink-0 text-primary" /><p><strong>{euro(result.toetsinkomen)}</strong> gezamenlijk jaarinkomen, inclusief 8% vakantiegeld.</p></div>
          <div className="flex gap-3"><Check className="mt-0.5 size-4 shrink-0 text-primary" /><p><strong>{result.lastpercentage.toFixed(1)}%</strong> van het inkomen mag volgens de officiële tabel naar wonen.</p></div>
          <div className="flex gap-3"><Check className="mt-0.5 size-4 shrink-0 text-primary" /><p><strong>{euro2(result.kredietlast + result.studieschuldLast)}</strong> per maand gaat eraf voor leningen en studieschuld.</p></div>
          {result.labelOpslag > 0 ? <div className="flex gap-3"><Check className="mt-0.5 size-4 shrink-0 text-primary" /><p><strong>{euro(result.labelOpslag)}</strong> extra leenruimte door het energielabel.</p></div> : null}
          {result.alleenstaandeOpslag > 0 ? <div className="flex gap-3"><Check className="mt-0.5 size-4 shrink-0 text-primary" /><p><strong>{euro(result.alleenstaandeOpslag)}</strong> extra leenruimte omdat je alleen koopt.</p></div> : null}
        </div>
      </div>
      <p className="mt-6 text-xs leading-relaxed text-muted-foreground">Let op: dit is een indicatie op basis van de regels van {NORMJAAR}. Je eigen situatie kan anders zijn. Je kunt maximaal de waarde van het huis lenen en bijkomende kosten betaal je meestal zelf. Aan deze berekening kun je geen rechten ontlenen.</p>
    </div>
  );

  return (
    <RekentoolWizard
      title="Maximale hypotheek"
      intro="Beantwoord de vragen in je eigen tempo. Je ziet je maximale hypotheek en maandlast pas nadat alles is ingevuld."
      steps={steps}
      result={uitkomst}
      onReset={() => { setInput(DEFAULT_INPUT); setSamenKopen(null); setAnswered(new Set()); }}
    />
  );
}
