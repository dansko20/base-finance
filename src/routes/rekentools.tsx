import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { Box3Tool } from "@/components/rekentools/Box3Tool";
import { MaximaleHypotheekTool } from "@/components/rekentools/MaximaleHypotheekTool";
import { SparenOfBeleggenTool } from "@/components/rekentools/SparenOfBeleggenTool";
import { Reveal } from "@/components/site/motion";

export const Route = createFileRoute("/rekentools")({
  head: () => ({ meta: [
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { title: "Rekentools voor hypotheek, sparen en box 3 | BASE FINANCE" },
    { name: "description", content: "Bereken stap voor stap je maximale hypotheek, vergelijk sparen met beleggen en maak een indicatie van je box 3-belasting in 2026." },
    { property: "og:title", content: "Rekentools voor hypotheek, sparen en box 3 | BASE FINANCE" },
    { property: "og:description", content: "Drie duidelijke rekentools die je vraag voor vraag naar een persoonlijke indicatie helpen." },
  ] }),
  component: Rekentools,
});

type Tool = "hypotheek" | "sparen-beleggen" | "box3";

const tools: { id: Tool; label: string }[] = [
  { id: "hypotheek", label: "Maximale hypotheek" },
  { id: "sparen-beleggen", label: "Sparen of beleggen" },
  { id: "box3", label: "Box 3-belasting" },
];

function Rekentools() {
  const [activeTool, setActiveTool] = useState<Tool>("hypotheek");

  return (
    <>
      <section className="bg-background px-5 pb-14 pt-40 sm:px-8">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <p className="label-eyebrow">Rekentools</p>
            <h1 className="mt-8 max-w-4xl text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.04]">Reken je volgende stap uit</h1>
            <p className="mt-7 max-w-2xl text-muted-foreground">Kies een rekentool en beantwoord één vraag per keer. Daarna zie je een persoonlijke indicatie met een heldere uitleg van de berekening.</p>
          </Reveal>
        </div>
      </section>
      <section className="bg-surface px-5 py-6 sm:px-8">
        <div className="mx-auto max-w-[1400px]">
          <div role="tablist" aria-label="Kies een rekentool" className="inline-flex max-w-full flex-wrap gap-1 rounded-lg bg-background p-1 text-sm">
            {tools.map((tool) => (
              <button
                key={tool.id}
                id={`tab-${tool.id}`}
                type="button"
                role="tab"
                aria-selected={activeTool === tool.id}
                aria-controls={`panel-${tool.id}`}
                onClick={() => setActiveTool(tool.id)}
                className={`rounded-md px-4 py-2.5 transition-colors ${activeTool === tool.id ? "bg-primary text-primary-foreground" : "hover:bg-surface"}`}
              >
                {tool.label}
              </button>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-surface px-5 pb-24 pt-8 sm:px-8">
        <div className="mx-auto max-w-[1400px]">
          <div role="tabpanel" id={`panel-${activeTool}`} aria-labelledby={`tab-${activeTool}`}>
            {activeTool === "hypotheek" ? <MaximaleHypotheekTool /> : null}
            {activeTool === "sparen-beleggen" ? <SparenOfBeleggenTool /> : null}
            {activeTool === "box3" ? <Box3Tool /> : null}
          </div>
        </div>
      </section>
    </>
  );
}
