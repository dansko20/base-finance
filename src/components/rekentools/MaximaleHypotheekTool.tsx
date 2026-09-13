import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, AlertTriangle, CheckCircle2 } from "lucide-react";
import { useMemo, useState, type ReactNode } from "react";

import {
  ENERGIELABELS,
  NORMJAAR,
  STUDIESTELSELS,
  STUDIESTELSEL_LABEL,
  type Energielabel,
  type Studiestelsel,
} from "@/lib/rekentools/normen2026";
import {
  DEFAULT_INPUT,
  berekenMaximaleHypotheek,
  euro,
  euro2,
  type MaximaleHypotheekInput,
} from "@/lib/rekentools/maximaleHypotheek";
import { cn } from "@/lib/utils";

const fieldClass =
  "w-full rounded-lg border border-input bg-background px-4 py-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring/30";

function Field({
  label,
  hint,
  children,
}: {
  label: string;
  hint?: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm">{label}</span>
      {children}
      {hint ? <span className="mt-1.5 block text-xs text-muted-foreground">{hint}</span> : null}
    </label>
  );
}

function Group({ title, children }: { title: string; children: ReactNode }) {
  return (
    <fieldset className="rounded-xl bg-background p-6">
      <legend className="label-eyebrow px-1">{title}</legend>
      <div className="mt-5 grid gap-5 sm:grid-cols-2">{children}</div>
    </fieldset>
  );
}

function Toggle({
  label,
  value,
  onChange,
}: {
  label: string;
  value: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label className="flex items-center justify-between gap-4 rounded-lg border border-input px-4 py-3 text-sm">
      <span>{label}</span>
      <input
        type="checkbox"
        checked={value}
        onChange={(e) => onChange(e.target.checked)}
        className="size-4 accent-[var(--color-primary)]"
      />
    </label>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-6 border-b border-border py-3 text-sm last:border-0">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-medium tabular-nums">{value}</span>
    </div>
  );
}

export function MaximaleHypotheekTool() {
  const [input, setInput] = useState<MaximaleHypotheekInput>(DEFAULT_INPUT);
  const [uitlegOpen, setUitlegOpen] = useState(false);

  const set = <K extends keyof MaximaleHypotheekInput>(
    key: K,
    value: MaximaleHypotheekInput[K],
  ) => setInput((prev) => ({ ...prev, [key]: value }));

  const num = (v: string) => (v === "" ? 0 : Number(v));

  const r = useMemo(() => berekenMaximaleHypotheek(input), [input]);
  const maxBar = Math.max(r.ltiBedrag, r.ltvBedrag, 1);

  return (
    <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
      {/* Invoer */}
      <div className="space-y-5">
        <Group title="Inkomen">
          <Field label="Bruto jaarinkomen aanvrager 1">
            <input
              type="number"
              min={0}
              step={1000}
              value={input.inkomen1 || ""}
              onChange={(e) => set("inkomen1", num(e.target.value))}
              className={fieldClass}
            />
          </Field>
          <Field label="Contract aanvrager 1">
            <select
              value={input.contract1}
              onChange={(e) => set("contract1", e.target.value as "vast" | "tijdelijk")}
              className={fieldClass}
            >
              <option value="vast">Vast contract</option>
              <option value="tijdelijk">Tijdelijk contract</option>
            </select>
          </Field>
          <Field label="Bruto jaarinkomen aanvrager 2 (optioneel)">
            <input
              type="number"
              min={0}
              step={1000}
              value={input.inkomen2 || ""}
              onChange={(e) => set("inkomen2", num(e.target.value))}
              className={fieldClass}
            />
          </Field>
          <Field label="Contract aanvrager 2">
            <select
              value={input.contract2}
              onChange={(e) => set("contract2", e.target.value as "vast" | "tijdelijk")}
              className={fieldClass}
            >
              <option value="vast">Vast contract</option>
              <option value="tijdelijk">Tijdelijk contract</option>
            </select>
          </Field>
          <Toggle
            label="Vakantiegeld meerekenen (8%)"
            value={input.vakantiegeldMeerekenen}
            onChange={(v) => set("vakantiegeldMeerekenen", v)}
          />
          <Toggle
            label="Vaste eindejaarsuitkering meerekenen"
            value={input.eindejaarsuitkeringMeerekenen}
            onChange={(v) => set("eindejaarsuitkeringMeerekenen", v)}
          />
          {input.eindejaarsuitkeringMeerekenen ? (
            <Field label="Eindejaarsuitkering per jaar">
              <input
                type="number"
                min={0}
                step={100}
                value={input.eindejaarsuitkering || ""}
                onChange={(e) => set("eindejaarsuitkering", num(e.target.value))}
                className={fieldClass}
              />
            </Field>
          ) : null}
        </Group>

        <Group title="Woning">
          <Field label="Koopsom of woningwaarde">
            <input
              type="number"
              min={0}
              step={5000}
              value={input.woningwaarde || ""}
              onChange={(e) => set("woningwaarde", num(e.target.value))}
              className={fieldClass}
            />
          </Field>
          <Field label="Energielabel">
            <select
              value={input.energielabel}
              onChange={(e) => set("energielabel", e.target.value as Energielabel)}
              className={fieldClass}
            >
              {ENERGIELABELS.map((l) => (
                <option key={l} value={l}>
                  Label {l}
                </option>
              ))}
            </select>
          </Field>
          <Toggle
            label="Wordt er verduurzaamd?"
            value={input.verduurzamen}
            onChange={(v) => set("verduurzamen", v)}
          />
        </Group>

        <Group title="Lening">
          <Field label="Rentevaste periode (jaren)">
            <input
              type="number"
              min={1}
              max={30}
              value={input.rentevastPeriode || ""}
              onChange={(e) => set("rentevastPeriode", num(e.target.value))}
              className={fieldClass}
            />
          </Field>
          <Field label="Werkelijke hypotheekrente (%)">
            <input
              type="number"
              min={0}
              step={0.1}
              value={input.rente || ""}
              onChange={(e) => set("rente", num(e.target.value))}
              className={fieldClass}
            />
          </Field>
          <Field label="Looptijd (jaren)">
            <input
              type="number"
              min={5}
              max={30}
              value={input.looptijd || ""}
              onChange={(e) => set("looptijd", num(e.target.value))}
              className={fieldClass}
            />
          </Field>
          <Field
            label="Financieringslastpercentage handmatig (%)"
            hint="Leeg laten om de officiële tabel te gebruiken. De tabel verandert per jaar."
          >
            <input
              type="number"
              min={0}
              step={0.1}
              placeholder={r.lastpercentageTabel.toFixed(1)}
              value={input.lastpercentageOverride ?? ""}
              onChange={(e) =>
                set(
                  "lastpercentageOverride",
                  e.target.value === "" ? null : Number(e.target.value),
                )
              }
              className={fieldClass}
            />
          </Field>
        </Group>

        <Group title="Verplichtingen">
          <Field label="Studieschuld (oorspronkelijk bedrag)">
            <input
              type="number"
              min={0}
              step={500}
              value={input.studieschuld || ""}
              onChange={(e) => set("studieschuld", num(e.target.value))}
              className={fieldClass}
            />
          </Field>
          <Field label="Stelsel studieschuld">
            <select
              value={input.studiestelsel}
              onChange={(e) => set("studiestelsel", e.target.value as Studiestelsel)}
              className={fieldClass}
            >
              {STUDIESTELSELS.map((s) => (
                <option key={s} value={s}>
                  {STUDIESTELSEL_LABEL[s]}
                </option>
              ))}
            </select>
          </Field>
          <Field
            label="Reeds afgelost op studieschuld"
            hint="Geldverstrekkers rekenen met de oorspronkelijke schuld, tenzij je aantoont dat er is afgelost."
          >
            <input
              type="number"
              min={0}
              step={500}
              value={input.studieschuldAfgelost || ""}
              onChange={(e) => set("studieschuldAfgelost", num(e.target.value))}
              className={fieldClass}
            />
          </Field>
          <Field label="Kredietlimiet consumptief/doorlopend krediet">
            <input
              type="number"
              min={0}
              step={500}
              value={input.kredietlimiet || ""}
              onChange={(e) => set("kredietlimiet", num(e.target.value))}
              className={fieldClass}
            />
          </Field>
          <Field label="Alimentatie per maand">
            <input
              type="number"
              min={0}
              step={25}
              value={input.alimentatie || ""}
              onChange={(e) => set("alimentatie", num(e.target.value))}
              className={fieldClass}
            />
          </Field>
          <Field label="Lease of private lease per maand">
            <input
              type="number"
              min={0}
              step={25}
              value={input.lease || ""}
              onChange={(e) => set("lease", num(e.target.value))}
              className={fieldClass}
            />
          </Field>
        </Group>

        <Group title="Eigen geld en kosten koper">
          <Field label="Beschikbaar eigen geld">
            <input
              type="number"
              min={0}
              step={1000}
              value={input.eigenGeld || ""}
              onChange={(e) => set("eigenGeld", num(e.target.value))}
              className={fieldClass}
            />
          </Field>
          <Field label="Kosten koper (% van de koopsom)">
            <input
              type="number"
              min={0}
              step={0.1}
              value={input.kostenKoperPercentage}
              onChange={(e) => set("kostenKoperPercentage", num(e.target.value))}
              className={fieldClass}
            />
          </Field>
          <Field
            label="Overdrachtsbelasting (%)"
            hint="Apart instelbaar, dit tarief kan per jaar wijzigen."
          >
            <input
              type="number"
              min={0}
              step={0.1}
              value={input.overdrachtsbelastingPercentage}
              onChange={(e) => set("overdrachtsbelastingPercentage", num(e.target.value))}
              className={fieldClass}
            />
          </Field>
        </Group>
      </div>

      {/* Uitkomst */}
      <div className="lg:sticky lg:top-28 lg:self-start">
        <div className="rounded-xl bg-primary p-7 text-primary-foreground">
          <p className="text-sm text-primary-foreground/70">Maximale hypotheek</p>
          <motion.p
            key={Math.round(r.maximaleHypotheek)}
            initial={{ opacity: 0.4, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="mt-3 text-[clamp(2.5rem,5vw,4rem)] font-medium leading-none tabular-nums"
          >
            {euro(r.maximaleHypotheek)}
          </motion.p>
          <p className="mt-4 text-sm text-primary-foreground/80">{r.beperkendeUitleg}</p>

          {/* Schuifbalken */}
          <div className="mt-7 space-y-5">
            <div>
              <div className="flex justify-between text-sm text-primary-foreground/80">
                <span>Rente</span>
                <span className="tabular-nums">{input.rente.toFixed(2)}%</span>
              </div>
              <input
                type="range"
                min={0.5}
                max={9}
                step={0.05}
                value={input.rente}
                onChange={(e) => set("rente", Number(e.target.value))}
                aria-label="Rente aanpassen"
                className="mt-2 w-full accent-[var(--color-accent)]"
              />
            </div>
            <div>
              <div className="flex justify-between text-sm text-primary-foreground/80">
                <span>Bruto jaarinkomen aanvrager 1</span>
                <span className="tabular-nums">{euro(input.inkomen1)}</span>
              </div>
              <input
                type="range"
                min={20000}
                max={250000}
                step={500}
                value={input.inkomen1}
                onChange={(e) => set("inkomen1", Number(e.target.value))}
                aria-label="Inkomen aanpassen"
                className="mt-2 w-full accent-[var(--color-accent)]"
              />
            </div>
          </div>
        </div>

        {/* Staafdiagram */}
        <div className="mt-5 rounded-xl bg-background p-7">
          <p className="label-eyebrow">Wat bepaalt de grens?</p>
          <div className="mt-6 space-y-5">
            {[
              {
                naam: "Op basis van inkomen (LTI)",
                bedrag: r.ltiBedrag,
                actief: r.beperkendeFactor === "inkomen",
              },
              {
                naam: `Op basis van woningwaarde (LTV ${Math.round(r.ltvPercentage * 100)}%)`,
                bedrag: r.ltvBedrag,
                actief: r.beperkendeFactor === "woningwaarde",
              },
            ].map((bar) => (
              <div key={bar.naam}>
                <div className="flex justify-between text-sm">
                  <span className={cn(bar.actief ? "font-medium" : "text-muted-foreground")}>
                    {bar.naam}
                  </span>
                  <span className="tabular-nums">{euro(bar.bedrag)}</span>
                </div>
                <div className="mt-2 h-3 overflow-hidden rounded-full bg-surface">
                  <motion.div
                    animate={{ width: `${(bar.bedrag / maxBar) * 100}%` }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className={cn(
                      "h-full rounded-full",
                      bar.actief ? "bg-primary" : "bg-primary/35",
                    )}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Maandlast */}
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <div className="rounded-xl bg-background p-7">
            <p className="label-eyebrow">Geschatte maandlast</p>
            <p className="mt-5 text-3xl font-medium tabular-nums">
              {euro(r.maandlastBruto)}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">bruto per maand</p>
            <p className="mt-4 text-xl font-medium tabular-nums">{euro(r.maandlastNetto)}</p>
            <p className="mt-1 text-sm text-muted-foreground">
              netto, indicatief met renteaftrek
            </p>
          </div>
          <div className="rounded-xl bg-background p-7">
            <p className="label-eyebrow">Benodigd eigen geld</p>
            <p className="mt-5 text-3xl font-medium tabular-nums">
              {euro(r.benodigdEigenGeld)}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              inclusief {input.kostenKoperPercentage}% kosten koper
            </p>
            <div
              className={cn(
                "mt-4 flex items-start gap-2 rounded-lg p-3 text-sm",
                r.eigenGeldVoldoende
                  ? "bg-accent text-foreground"
                  : "bg-destructive/10 text-destructive",
              )}
            >
              {r.eigenGeldVoldoende ? (
                <CheckCircle2 className="mt-0.5 size-4 shrink-0" />
              ) : (
                <AlertTriangle className="mt-0.5 size-4 shrink-0" />
              )}
              <span>
                {r.eigenGeldVoldoende
                  ? "Je eigen geld is voldoende voor deze aankoop."
                  : `Je komt ${euro(r.eigenGeldTekort)} eigen geld tekort.`}
              </span>
            </div>
          </div>
        </div>

        {/* NHG */}
        <div className="mt-5 rounded-xl bg-background p-7">
          <p className="label-eyebrow">Nationale Hypotheek Garantie</p>
          <div className="mt-5">
            <Row
              label="Kostengrens 2026"
              value={euro(r.nhgGrens)}
            />
            <Row
              label="Binnen de NHG-grens?"
              value={r.nhgMogelijk ? "Ja" : "Nee"}
            />
            <Row label="Eenmalige premie (0,4%)" value={euro(r.nhgPremie)} />
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Met NHG krijg je bij de meeste geldverstrekkers een rentekorting. Dat
            voordeel is hier niet automatisch meegerekend.
          </p>
        </div>

        {/* Hoe is dit berekend */}
        <div className="mt-5 overflow-hidden rounded-xl bg-background">
          <button
            type="button"
            onClick={() => setUitlegOpen((v) => !v)}
            aria-expanded={uitlegOpen}
            className="flex w-full items-center justify-between gap-4 p-7 text-left"
          >
            <span className="text-lg font-medium">Hoe is dit berekend?</span>
            <ChevronDown
              className={cn(
                "size-5 text-primary transition-transform duration-300",
                uitlegOpen && "rotate-180",
              )}
            />
          </button>
          <AnimatePresence initial={false}>
            {uitlegOpen ? (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <div className="px-7 pb-7">
                  <Row label="1. Toetsinkomen" value={euro(r.toetsinkomen)} />
                  <Row
                    label="2. Toetsrente"
                    value={`${r.toetsrente.toFixed(2)}%`}
                  />
                  <p className="py-3 text-xs text-muted-foreground">{r.toetsrenteUitleg}</p>
                  <Row
                    label="3. Financieringslastpercentage uit tabel"
                    value={`${r.lastpercentageTabel.toFixed(2)}%`}
                  />
                  <Row
                    label={`4. Correctie energielabel ${input.energielabel}`}
                    value={`× ${r.energielabelFactor.toFixed(3)}`}
                  />
                  <Row
                    label={
                      r.lastpercentageHandmatig
                        ? "Gebruikt percentage (handmatig)"
                        : "Gebruikt percentage"
                    }
                    value={`${r.lastpercentage.toFixed(2)}%`}
                  />
                  <Row label="5. Maximale bruto jaarlast" value={euro(r.brutoJaarlast)} />
                  <Row label="5. Maximale bruto maandlast" value={euro2(r.brutoMaandlast)} />
                  <Row label="6. Last studieschuld" value={`− ${euro2(r.studieschuldLast)}`} />
                  <Row label="6. Last krediet (2% limiet)" value={`− ${euro2(r.kredietLast)}`} />
                  <Row label="6. Alimentatie" value={`− ${euro2(r.alimentatie)}`} />
                  <Row label="6. Lease" value={`− ${euro2(r.lease)}`} />
                  <Row
                    label="6. Beschikbare maandlast"
                    value={euro2(r.beschikbareMaandlast)}
                  />
                  <Row label="7. LTI-uitkomst (annuïtair terugrekenen)" value={euro(r.ltiBedrag)} />
                  <Row
                    label={`8. LTV-uitkomst (${Math.round(r.ltvPercentage * 100)}% woningwaarde)`}
                    value={euro(r.ltvBedrag)}
                  />
                  <Row label="9. Maximale hypotheek (laagste)" value={euro(r.maximaleHypotheek)} />
                  <Row label="11. Kosten koper" value={euro(r.kostenKoper)} />
                  <Row
                    label="11. Waarvan overdrachtsbelasting"
                    value={euro(r.overdrachtsbelasting)}
                  />
                </div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        </div>

        <p className="mt-5 text-xs text-muted-foreground">
          De financieringslasttabel komt uit de{" "}
          <a
            href="https://wetten.overheid.nl/BWBR0032503/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-foreground"
          >
            Tijdelijke regeling hypothecair krediet
          </a>
          . Deze tabel wordt jaarlijks per 1 januari aangepast. Berekend met de normen
          van {NORMJAAR}.
        </p>

        <p className="mt-4 rounded-xl bg-surface p-5 text-xs text-muted-foreground">
          Dit is een indicatieve berekening op basis van de normen van 2026 en geen
          persoonlijk financieel advies. De werkelijke berekening hangt af van de
          actuele normen van het Nibud, de eisen van de geldverstrekker en jouw
          persoonlijke situatie. Plan een gesprek voor een berekening die klopt voor
          jou.
        </p>
      </div>
    </div>
  );
}
