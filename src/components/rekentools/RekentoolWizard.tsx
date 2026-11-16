import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, Check, Info, RotateCcw } from "lucide-react";
import { useState, type ReactNode } from "react";

export const fieldClass = "w-full rounded-lg border border-input bg-background px-4 py-3 text-base outline-none transition-shadow focus:ring-2 focus:ring-ring/30";

export type WizardStep = {
  id: string;
  question: string;
  hint: string;
  content: ReactNode;
  isAnswered: boolean;
};

type NumberQuestionProps = {
  label: string;
  value: number;
  onChange: (value: number) => void;
  onAnswer: () => void;
  prefix?: string;
  suffix?: string;
  min?: number;
  max?: number;
  step?: number;
  placeholder?: string;
};

export function NumberQuestion({
  label,
  value,
  onChange,
  onAnswer,
  prefix = "€",
  suffix,
  min = 0,
  max,
  step = 100,
  placeholder = "0",
}: NumberQuestionProps) {
  return (
    <div className="relative w-full max-w-2xl">
      {prefix ? <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">{prefix}</span> : null}
      <input
        aria-label={label}
        type="number"
        inputMode="decimal"
        min={min}
        max={max}
        step={step}
        value={value || ""}
        placeholder={placeholder}
        onChange={(event) => {
          onAnswer();
          onChange(Number(event.target.value) || 0);
        }}
        className={`${fieldClass} py-4 text-lg tabular-nums ${prefix ? "pl-9" : ""} ${suffix ? "pr-14" : ""}`}
      />
      {suffix ? <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground">{suffix}</span> : null}
    </div>
  );
}

export type Choice<T extends string> = {
  value: T;
  label: string;
  description?: string;
};

export function ChoiceGrid<T extends string>({
  label,
  options,
  selected,
  onSelect,
  columns = 2,
}: {
  label: string;
  options: Choice<T>[];
  selected: T | null;
  onSelect: (value: T) => void;
  columns?: 1 | 2;
}) {
  return (
    <div aria-label={label} className={`grid gap-3 ${columns === 2 ? "sm:grid-cols-2" : ""}`}>
      {options.map((option) => {
        const active = selected === option.value;
        return (
          <button
            key={option.value}
            type="button"
            aria-pressed={active}
            onClick={() => onSelect(option.value)}
            className={`rounded-lg border px-5 py-4 text-left transition-colors ${active ? "border-primary bg-primary text-primary-foreground" : "border-input bg-background hover:bg-surface"}`}
          >
            <span className="flex items-center justify-between gap-3 font-medium">
              {option.label}
              {active ? <Check className="size-4 shrink-0" /> : null}
            </span>
            {option.description ? <span className={`mt-1 block text-sm leading-relaxed ${active ? "text-primary-foreground/75" : "text-muted-foreground"}`}>{option.description}</span> : null}
          </button>
        );
      })}
    </div>
  );
}

export function ResultRow({ label, value, inverse = false }: { label: string; value: string; inverse?: boolean }) {
  return (
    <div className={`flex items-start justify-between gap-5 border-b py-3 text-sm last:border-0 ${inverse ? "border-primary-foreground/20" : "border-border"}`}>
      <span className={inverse ? "text-primary-foreground/70" : "text-muted-foreground"}>{label}</span>
      <span className="text-right font-medium tabular-nums">{value}</span>
    </div>
  );
}

export function RekentoolWizard({
  title,
  intro,
  steps,
  result,
  onReset,
}: {
  title: string;
  intro: string;
  steps: WizardStep[];
  result: ReactNode;
  onReset: () => void;
}) {
  const [stepIndex, setStepIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [direction, setDirection] = useState(1);
  const activeIndex = Math.min(stepIndex, steps.length - 1);
  const step = steps[activeIndex]!;

  const next = () => {
    if (!step.isAnswered) return;
    setDirection(1);
    if (activeIndex === steps.length - 1) setShowResult(true);
    else setStepIndex(activeIndex + 1);
  };
  const previous = () => {
    setDirection(-1);
    if (showResult) setShowResult(false);
    else setStepIndex(Math.max(0, activeIndex - 1));
  };
  const reset = () => {
    setDirection(-1);
    setStepIndex(0);
    setShowResult(false);
    onReset();
  };

  return (
    <div className="w-full overflow-hidden rounded-lg border border-border bg-background">
      <div className="border-b border-border p-6 sm:p-8">
        <div className="flex items-start gap-3">
          <span className="grid size-9 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
            {showResult ? <Check className="size-4" /> : <Info className="size-4" />}
          </span>
          <div>
            <h2 className="text-2xl font-medium">{title}</h2>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{intro}</p>
          </div>
        </div>
        <div className="mt-6 flex items-center gap-4">
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-surface">
            <motion.div
              className="h-full rounded-full bg-primary"
              animate={{ width: `${showResult ? 100 : ((activeIndex + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <span className="shrink-0 text-xs font-medium tabular-nums text-muted-foreground">
            {showResult ? "Alle vragen beantwoord" : `Vraag ${activeIndex + 1} van ${steps.length}`}
          </span>
        </div>
      </div>

      <AnimatePresence mode="wait" initial={false} custom={direction}>
        <motion.div
          key={showResult ? "resultaat" : step.id}
          initial={{ opacity: 0, x: direction * 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction * -24 }}
          transition={{ duration: 0.22 }}
          className="p-6 sm:p-8"
        >
          {showResult ? result : (
            <form onSubmit={(event) => { event.preventDefault(); next(); }}>
              <div className="min-h-[280px]">
                <h3 className="max-w-2xl text-[clamp(1.55rem,4vw,2.15rem)] font-medium leading-tight">{step.question}</h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">{step.hint}</p>
                <div className="mt-8">{step.content}</div>
              </div>
              <div className="mt-8 flex items-center justify-between gap-3 border-t border-border pt-6">
                <button
                  type="button"
                  onClick={previous}
                  disabled={activeIndex === 0}
                  className="inline-flex items-center gap-2 rounded-lg px-4 py-3 text-sm font-medium transition-colors hover:bg-surface disabled:pointer-events-none disabled:opacity-35"
                >
                  <ArrowLeft className="size-4" /> Vorige
                </button>
                <button
                  type="submit"
                  disabled={!step.isAnswered}
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:pointer-events-none disabled:opacity-35"
                >
                  {activeIndex === steps.length - 1 ? "Bekijk mijn uitkomst" : "Volgende"}
                  {activeIndex === steps.length - 1 ? <Check className="size-4" /> : <ArrowRight className="size-4" />}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </AnimatePresence>

      {showResult ? (
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border px-6 py-5 sm:px-8">
          <button type="button" onClick={previous} className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium hover:bg-surface">
            <ArrowLeft className="size-4" /> Antwoorden aanpassen
          </button>
          <button type="button" onClick={reset} className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-surface hover:text-foreground">
            <RotateCcw className="size-4" /> Opnieuw beginnen
          </button>
        </div>
      ) : null}
    </div>
  );
}
