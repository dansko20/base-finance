import { Check } from "lucide-react";
import { useMemo, useState } from "react";

import { DEFAULT_BOX3_INPUT, berekenBox3, type Box3Input } from "@/lib/rekentools/box3";
import { euro, euro2 } from "@/lib/rekentools/maximaleHypotheek";
import { BOX3_NORMJAAR, BOX3_TARIEF, FORFAIT_BELEGGEN, FORFAIT_SPAREN } from "@/lib/rekentools/normenBox3_2026";
import { ChoiceGrid, NumberQuestion, RekentoolWizard, ResultRow, fieldClass, type WizardStep } from "./RekentoolWizard";

const percentage = (waarde: number) => `${(waarde * 100).toLocaleString("nl-NL", { maximumFractionDigits: 2 })}%`;

export function Box3Tool() {
  const [input, setInput] = useState<Box3Input>(DEFAULT_BOX3_INPUT);
  const [partnerKeuze, setPartnerKeuze] = useState<"alleen" | "samen" | null>(null);
  const [answered, setAnswered] = useState<Set<string>>(new Set());
  const result = useMemo(() => berekenBox3(input), [input]);
  const set = <K extends keyof Box3Input>(key: K, value: Box3Input[K]) => setInput((current) => ({ ...current, [key]: value }));
  const answer = (id: string) => setAnswered((current) => new Set(current).add(id));
  const money = (id: string, key: "spaargeld" | "groenSparen" | "beleggingen" | "groenBeleggen" | "schulden", label: string) => (
    <NumberQuestion label={label} value={input[key]} onAnswer={() => answer(id)} onChange={(value) => set(key, value)} />
  );

  const steps: WizardStep[] = [
    {
      id: "partner",
      question: "Heb je een fiscale partner?",
      hint: "Getrouwd of geregistreerd partners krijgen samen twee keer het heffingsvrij vermogen, de schuldendrempel en de groene vrijstelling.",
      isAnswered: partnerKeuze !== null,
      content: <ChoiceGrid label="Fiscale partner" selected={partnerKeuze} options={[{ value: "alleen", label: "Nee, ik bereken voor mijzelf" }, { value: "samen", label: "Ja, we berekenen samen" }]} onSelect={(value) => { setPartnerKeuze(value); set("fiscalePartner", value === "samen"); }} />,
    },
    {
      id: "spaargeld",
      question: "Hoeveel spaargeld hebben jullie op 1 januari 2026?",
      hint: "Tel alle bank- en spaartegoeden in box 3 bij elkaar. Je eigen huis hoort hier niet bij.",
      isAnswered: answered.has("spaargeld"),
      content: money("spaargeld", "spaargeld", "Totaal spaargeld"),
    },
    {
      id: "groen-sparen",
      question: "Hoeveel daarvan staat op een erkende groene spaarrekening?",
      hint: "Vul € 0 in als je geen groen spaargeld hebt. Groen sparen en groen beleggen delen samen één vrijstelling.",
      isAnswered: answered.has("groen-sparen"),
      content: money("groen-sparen", "groenSparen", "Groen spaargeld"),
    },
    {
      id: "beleggingen",
      question: "Wat is de waarde van je beleggingen op 1 januari 2026?",
      hint: "Denk aan aandelen, obligaties en beleggingsfondsen in box 3. Vul € 0 in als je niet belegt.",
      isAnswered: answered.has("beleggingen"),
      content: money("beleggingen", "beleggingen", "Totale beleggingen"),
    },
    {
      id: "groen-beleggen",
      question: "Hoeveel daarvan zit in erkende groene beleggingsfondsen?",
      hint: "Vul € 0 in als dit niet voor je geldt. De tool verdeelt de vrijstelling eerst over groene beleggingen en daarna over groen sparen, net als de Excel.",
      isAnswered: answered.has("groen-beleggen"),
      content: money("groen-beleggen", "groenBeleggen", "Groene beleggingen"),
    },
    {
      id: "schulden",
      question: "Heb je schulden die in box 3 vallen?",
      hint: "Bijvoorbeeld een consumptief krediet. Je hypotheek voor je eigen huis valt in box 1 en vul je hier niet in. Vul € 0 in zonder box 3-schulden.",
      isAnswered: answered.has("schulden"),
      content: money("schulden", "schulden", "Schulden in box 3"),
    },
  ];

  const uitkomst = (
    <div>
      <div className="overflow-hidden rounded-xl bg-primary text-primary-foreground">
        <div className="p-7 sm:p-8">
          <p className="text-sm font-medium">Geschatte box 3-belasting over {BOX3_NORMJAAR}</p>
          <p className="mt-3 text-[clamp(2.75rem,8vw,4.5rem)] font-medium leading-none tabular-nums">{euro2(result.belasting)}</p>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
            {result.belasting === 0 ? "Volgens deze berekening betaal je geen box 3-belasting. Dit kan door het heffingsvrij vermogen, je schulden of vrijgesteld groen vermogen komen." : `Dit is ${percentage(BOX3_TARIEF)} van je berekende voordeel uit sparen en beleggen.`}
          </p>
        </div>
        <div className="border-t border-primary-foreground/20 px-7 py-5 sm:px-8">
          <ResultRow inverse label="Heffingsvrij vermogen" value={euro(result.heffingsvrijVermogen)} />
          <ResultRow inverse label="Grondslag sparen en beleggen" value={euro(result.grondslagSparenBeleggen)} />
          <ResultRow inverse label="Voordeel uit sparen en beleggen" value={euro2(result.voordeelSparenBeleggen)} />
        </div>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl bg-surface p-6">
          <p className="label-eyebrow">Je vermogen in de berekening</p>
          <div className="mt-4">
            <ResultRow label="Spaargeld" value={euro(result.spaargeld)} />
            <ResultRow label="Beleggingen" value={euro(result.beleggingen)} />
            <ResultRow label="Vrijstelling groen sparen" value={euro(result.vrijstellingGroenSparen)} />
            <ResultRow label="Vrijstelling groen beleggen" value={euro(result.vrijstellingGroenBeleggen)} />
            <ResultRow label="Schulden na de drempel" value={euro(result.schuldenNaDrempel)} />
          </div>
        </div>
        <div className="rounded-xl bg-surface p-6">
          <p className="label-eyebrow">Forfaitair rendement</p>
          <div className="mt-4 space-y-3 text-sm">
            <div className="flex gap-3"><Check className="mt-0.5 size-4 shrink-0 text-primary" /><p>{percentage(FORFAIT_SPAREN)} over belast spaargeld: <strong>{euro2(result.rendementSparen)}</strong>.</p></div>
            <div className="flex gap-3"><Check className="mt-0.5 size-4 shrink-0 text-primary" /><p>{percentage(FORFAIT_BELEGGEN)} over belaste beleggingen: <strong>{euro2(result.rendementBeleggen)}</strong>.</p></div>
            <div className="flex gap-3"><Check className="mt-0.5 size-4 shrink-0 text-primary" /><p>Aftrek voor schulden: <strong>{euro2(result.rendementSchulden)}</strong>.</p></div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-xs leading-relaxed text-muted-foreground">Dit is een indicatie volgens de aangeleverde Excel en de daarin gebruikte box 3-regels van {BOX3_NORMJAAR}. De tool gebruikt de forfaitaire werkwijze en vraagt daarom niet naar je werkelijke rendement. Je echte aangifte kan afwijken. Aan deze berekening kun je geen rechten ontlenen.</p>
    </div>
  );

  return (
    <RekentoolWizard
      title="Box 3-belasting"
      intro="Beantwoord zes vragen over je vermogen op 1 januari. Daarna zie je de geschatte belasting en de tussenstappen."
      steps={steps}
      result={uitkomst}
      onReset={() => { setInput(DEFAULT_BOX3_INPUT); setPartnerKeuze(null); setAnswered(new Set()); }}
    />
  );
}
