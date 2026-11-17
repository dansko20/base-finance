import type { Fund } from "@/lib/fundSelection";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { PartnerLogo } from "./FundLogo";

export const percentage = (value: number) => `${value.toLocaleString("nl-NL", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}%`;

export function costLabel(fund: Fund) {
  if (!fund.annualCost.length) return null;
  return `${fund.annualCost.map(percentage).join(" tot ")}${fund.costIsIndicative ? " (indicatief)" : ""}`;
}

export function LeesMeer({ funds, label = "Lees meer" }: { funds: readonly Fund[]; label?: string }) {
  return <Dialog>
    <DialogTrigger className="mt-4 font-medium text-[hsl(214_90%_50%)] underline-offset-4 hover:underline">{label}</DialogTrigger>
    <DialogContent className="max-h-[85vh] max-w-2xl overflow-y-auto">
      <DialogHeader><DialogTitle>{funds.length === 1 ? funds[0].name : funds[0].manager}</DialogTitle><DialogDescription>Alles over {funds.length === 1 ? "dit fonds" : "onze fondsen van deze beheerder"}.</DialogDescription></DialogHeader>
      <div className="space-y-8">{funds.map(fund => <section key={fund.name}>
        <div className="flex flex-wrap items-center gap-4"><PartnerLogo logo={fund.logo} name={fund.manager} /><div><p className="text-sm text-muted-foreground">{fund.kind}</p><h3 className="text-xl font-medium">{fund.name}</h3></div></div>
        <dl className="mt-5 space-y-4 text-sm">
          <div><dt className="font-medium">Strategie</dt><dd className="mt-1 text-muted-foreground">{fund.details.strategy}</dd></div>
          <div><dt className="font-medium">Risico</dt><dd className="mt-1 text-muted-foreground">{fund.details.risk}</dd></div>
          <div><dt className="font-medium">Kosten</dt><dd className="mt-1 text-muted-foreground">{costLabel(fund) ? `${costLabel(fund)} per jaar` : "Geen kosten aangeleverd"}{fund.transactionCost !== null ? `, plus ${percentage(fund.transactionCost)} transactiekosten` : ""}</dd></div>
          <div><dt className="font-medium">Waarom dit past bij starters</dt><dd className="mt-1 text-muted-foreground">{fund.details.forStarters}</dd></div>
          <div><dt className="font-medium">Goed om te weten</dt><dd className="mt-1 text-muted-foreground">{fund.caution}</dd></div>
        </dl>
      </section>)}</div>
    </DialogContent>
  </Dialog>;
}
