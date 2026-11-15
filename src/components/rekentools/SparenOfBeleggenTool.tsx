import { useMemo, useState } from "react";

import { DEFAULT_SPAREN_OF_BELEGGEN_INPUT, berekenSparenOfBeleggen, type NettoScenario, type SparenOfBeleggenInput } from "@/lib/rekentools/box3";
import { euro, euro2 } from "@/lib/rekentools/maximaleHypotheek";
import { BOX3_NORMJAAR, RISICOPROFIELEN } from "@/lib/rekentools/normenBox3_2026";
import { ChoiceGrid, NumberQuestion, RekentoolWizard, ResultRow, type WizardStep } from "./RekentoolWizard";

const procent = (waarde: number) => `${(waarde * 100).toLocaleString("nl-NL", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%`;

function ScenarioKaart({ titel, subtitel, scenario }: { titel: string; subtitel: string; scenario: NettoScenario }) {
  return (
    <div className="rounded-xl bg-surface p-6">
      <h3 className="text-xl font-medium">{titel}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{subtitel}</p>
      <p className="mt-6 text-3xl font-medium tabular-nums">{euro2(scenario.nettoRendement)}</p>
      <p className="mt-1 text-sm text-muted-foreground">verwacht netto rendement per jaar</p>
      <div className="mt-5">
        <ResultRow label="Bruto rendement" value={euro2(scenario.brutoRendement)} />
        <ResultRow label="Box 3-belasting" value={euro2(scenario.belasting)} />
        <ResultRow label="Netto rendement" value={procent(scenario.nettoRendementPercentage)} />
      </div>
    </div>
  );
}

export function SparenOfBeleggenTool() {
  const [input, setInput] = useState<SparenOfBeleggenInput>(DEFAULT_SPAREN_OF_BELEGGEN_INPUT);
  const [partnerKeuze, setPartnerKeuze] = useState<"alleen" | "samen" | null>(null);
  const [answered, setAnswered] = useState<Set<string>>(new Set());
  const result = useMemo(() => berekenSparenOfBeleggen(input), [input]);
  const set = <K extends keyof SparenOfBeleggenInput>(key: K, value: SparenOfBeleggenInput[K]) => setInput((current) => ({ ...current, [key]: value }));
  const answer = (id: string) => setAnswered((current) => new Set(current).add(id));
  const money = (id: string, key: "vastSpaargeld" | "groenSparen" | "twijfelBedrag" | "groenBeleggen" | "schulden", label: string) => (
    <NumberQuestion label={label} value={input[key]} onAnswer={() => answer(id)} onChange={(value) => set(key, value)} />
  );

  const steps: WizardStep[] = [
    {
      id: "partner",
      question: "Heb je een fiscale partner?",
      hint: "Met een fiscale partner verdubbelen het heffingsvrij vermogen, de schuldendrempel en de vrijstelling voor groen vermogen.",
      isAnswered: partnerKeuze !== null,
      content: <ChoiceGrid label="Fiscale partner" selected={partnerKeuze} options={[{ value: "alleen", label: "Nee, ik bereken voor mijzelf" }, { value: "samen", label: "Ja, we berekenen samen" }]} onSelect={(value) => { setPartnerKeuze(value); set("fiscalePartner", value === "samen"); }} />,
    },
    {
      id: "buffer",
      question: "Hoeveel geld blijft sowieso op je spaarrekening staan?",
      hint: "Bijvoorbeeld je buffer voor onverwachte uitgaven of geld dat je binnen vijf jaar nodig hebt. Vul € 0 in als dit niet voor je geldt.",
      isAnswered: answered.has("buffer"),
      content: money("buffer", "vastSpaargeld", "Spaargeld dat blijft staan"),
    },
    {
      id: "groen-sparen",
      question: "Hoeveel daarvan staat op een erkende groene spaarrekening?",
      hint: "Vul € 0 in als je geen groen spaargeld hebt. De vrijstelling geldt voor groen sparen en groen beleggen samen.",
      isAnswered: answered.has("groen-sparen"),
      content: money("groen-sparen", "groenSparen", "Groen spaargeld"),
    },
    {
      id: "twijfel",
      question: "Over welk bedrag twijfel je: sparen of beleggen?",
      hint: "Dit is het bedrag dat je in beide scenario’s anders verdeelt. Je vaste spaarbuffer blijft altijd op de spaarrekening.",
      isAnswered: answered.has("twijfel"),
      content: money("twijfel", "twijfelBedrag", "Bedrag om te verdelen"),
    },
    {
      id: "deel-beleggen",
      question: "Welk deel van dat bedrag wil je beleggen?",
      hint: "100% betekent dat het hele twijfelbedrag naar beleggingen gaat. Bij 0% vergelijk je twee keer alles sparen.",
      isAnswered: answered.has("deel-beleggen"),
      content: <NumberQuestion label="Percentage beleggen" value={input.beleggingspercentage} prefix="" suffix="%" max={100} step={5} onAnswer={() => answer("deel-beleggen")} onChange={(value) => set("beleggingspercentage", Math.min(100, Math.max(0, value)))} />,
    },
    {
      id: "groen-beleggen",
      question: "Hoeveel van je beleggingen gaat naar erkende groene fondsen?",
      hint: "Vul € 0 in als je niet groen belegt. Het bedrag kan niet meer meetellen dan je daadwerkelijk belegt.",
      isAnswered: answered.has("groen-beleggen"),
      content: money("groen-beleggen", "groenBeleggen", "Groene beleggingen"),
    },
    {
      id: "schulden",
      question: "Heb je schulden die in box 3 vallen?",
      hint: "Bijvoorbeeld een consumptief krediet. Je hypotheek voor je eigen huis hoort hier niet bij. Vul € 0 in zonder box 3-schulden.",
      isAnswered: answered.has("schulden"),
      content: money("schulden", "schulden", "Schulden in box 3"),
    },
    {
      id: "spaarrente",
      question: "Welke spaarrente verwacht je per jaar?",
      hint: "Vul de rente op je eigen spaarrekening in. In de Excel staat oktober 2026 als richtlijn ongeveer 1,00% tot 1,30% bij drie grootbanken.",
      isAnswered: answered.has("spaarrente"),
      content: <NumberQuestion label="Spaarrente per jaar" value={input.spaarrente} prefix="" suffix="%" step={0.1} placeholder="bijv. 1,2" onAnswer={() => answer("spaarrente")} onChange={(value) => set("spaarrente", value)} />,
    },
    {
      id: "profiel",
      question: "Welk risicoprofiel past bij je?",
      hint: "Het verwachte rendement is een langetermijnverwachting na kosten, geen garantie. Een los jaar kan ook negatief zijn.",
      isAnswered: answered.has("profiel"),
      content: <ChoiceGrid label="Risicoprofiel" columns={1} selected={answered.has("profiel") ? input.risicoprofiel : null} options={RISICOPROFIELEN.map((profiel) => ({ value: profiel.id, label: profiel.id, description: `${profiel.verdeling}${profiel.rendement === null ? "" : ` · verwacht ${profiel.rendement.toLocaleString("nl-NL")}% per jaar`}` }))} onSelect={(value) => { set("risicoprofiel", value); answer("profiel"); }} />,
    },
    ...(input.risicoprofiel === "Eigen" && answered.has("profiel") ? [{
      id: "eigen-rendement",
      question: "Welk beleggingsrendement verwacht je zelf per jaar?",
      hint: "Vul je verwachting na kosten in. De tool rekent met dit ene gemiddelde, maar werkelijke rendementen wisselen per jaar.",
      isAnswered: answered.has("eigen-rendement"),
      content: <NumberQuestion label="Eigen verwacht rendement" value={input.eigenRendement} prefix="" suffix="%" min={-100} step={0.1} onAnswer={() => answer("eigen-rendement")} onChange={(value) => set("eigenRendement", value)} />,
    }] : []),
  ];

  const gunstiger = result.extraNettoRendement >= 0 ? "Sparen en beleggen" : "Alles sparen";
  const uitkomst = (
    <div>
      <div className="overflow-hidden rounded-xl bg-primary text-primary-foreground">
        <div className="p-7 sm:p-8">
          <p className="text-sm font-medium">Verwacht verschil per jaar</p>
          <p className="mt-3 text-[clamp(2.5rem,7vw,4.25rem)] font-medium leading-none tabular-nums">{euro2(Math.abs(result.extraNettoRendement))}</p>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/75">
            {result.extraNettoRendement === 0 ? "Beide scenario’s komen met deze invoer op hetzelfde uit." : `${gunstiger} komt naar verwachting het gunstigst uit. Dit is het verschil na box 3-belasting.`}
          </p>
        </div>
        <div className="border-t border-primary-foreground/20 px-7 py-5 sm:px-8">
          <ResultRow inverse label="Extra box 3-belasting bij beleggen" value={euro2(result.extraBelasting)} />
          <ResultRow inverse label="Beleggen loont vanaf verwacht rendement" value={procent(result.omslagpunt)} />
          <ResultRow inverse label="Jouw verwachte beleggingsrendement" value={procent(result.beleggingsrendement)} />
        </div>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <ScenarioKaart titel="A. Alles sparen" subtitel="Je hele twijfelbedrag blijft op de spaarrekening." scenario={result.allesSparen} />
        <ScenarioKaart titel="B. Sparen en beleggen" subtitel={`${input.beleggingspercentage.toLocaleString("nl-NL")}% van je twijfelbedrag wordt belegd.`} scenario={result.sparenEnBeleggen} />
      </div>
      <div className="mt-6 rounded-xl bg-surface p-6">
        <p className="label-eyebrow">Belasting per € 100 boven de vrijstelling</p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <ResultRow label="Per € 100 spaargeld" value={euro2(result.belastingPer100Sparen)} />
          <ResultRow label="Per € 100 belegd vermogen" value={euro2(result.belastingPer100Beleggen)} />
        </div>
      </div>
      <p className="mt-6 text-xs leading-relaxed text-muted-foreground">Dit is een indicatie voor één jaar volgens de aangeleverde Excel en de box 3-regels van {BOX3_NORMJAAR}. Verwachte beleggingsrendementen zijn nooit zeker en de werkelijke belasting kan afwijken. De rente die je zelf op schulden betaalt, is niet meegenomen. Aan deze berekening kun je geen rechten ontlenen.</p>
    </div>
  );

  return (
    <RekentoolWizard
      title="Sparen of beleggen"
      intro="Vergelijk wat je in één jaar netto overhoudt als je alles spaart of een deel belegt. Je ziet de uitkomst pas na de laatste vraag."
      steps={steps}
      result={uitkomst}
      onReset={() => { setInput(DEFAULT_SPAREN_OF_BELEGGEN_INPUT); setPartnerKeuze(null); setAnswered(new Set()); }}
    />
  );
}
