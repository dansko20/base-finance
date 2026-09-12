import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Check } from "lucide-react";

import { Reveal } from "@/components/site/motion";
import { PillButton } from "@/components/site/PillButton";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Plan een gratis gesprek | DHCE Capital" },
      {
        name: "description",
        content:
          "Plan een gratis en vrijblijvend kennismakingsgesprek met een adviseur van DHCE Capital in Rotterdam of online.",
      },
      { property: "og:title", content: "Plan een gesprek | DHCE Capital" },
      {
        property: "og:description",
        content: "Maak kennis met onafhankelijk en duurzaam financieel advies.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section className="min-h-screen bg-surface px-5 pb-24 pt-40 sm:px-8">
      <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <p className="label-eyebrow">Contact</p>
          <h1 className="mt-8 max-w-xl text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.04]">
            Laten we je plannen bespreken
          </h1>
          <p className="mt-8 max-w-md text-muted-foreground">
            De eerste kennismaking duurt ongeveer een uur en is gratis. We bespreken
            je vraag, onze aanpak en wat een passend vervolg kost.
          </p>
          <div className="mt-12 space-y-4 border-t border-border pt-8 text-muted-foreground">
            <p>
              <a href="tel:+31102000000" className="transition-colors hover:text-foreground">
                +31 (0)10 200 00 00
              </a>
            </p>
            <p>
              <a
                href="mailto:advies@dhcecapital.nl"
                className="transition-colors hover:text-foreground"
              >
                advies@dhcecapital.nl
              </a>
            </p>
            <p>Weena 505, 3013 AL Rotterdam</p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="rounded-xl bg-background p-6 sm:p-10">
            {sent ? (
              <div className="flex min-h-[480px] flex-col items-center justify-center text-center">
                <span className="grid size-14 place-items-center rounded-full bg-accent text-primary">
                  <Check className="size-6" />
                </span>
                <h2 className="mt-6 text-3xl font-medium">Bedankt voor je bericht</h2>
                <p className="mt-4 max-w-sm text-muted-foreground">
                  We nemen binnen één werkdag contact met je op om een kennismaking in
                  te plannen.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  setSent(true);
                }}
                className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm">
                    Naam
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 outline-none transition-shadow focus:ring-2 focus:ring-ring/30"
                  />
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm">
                      E-mailadres
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 outline-none transition-shadow focus:ring-2 focus:ring-ring/30"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm">
                      Telefoonnummer
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 outline-none transition-shadow focus:ring-2 focus:ring-ring/30"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm">
                    Waar kunnen we mee helpen?
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full rounded-lg border border-input bg-background px-4 py-3 outline-none transition-shadow focus:ring-2 focus:ring-ring/30"
                  >
                    <option>Hypotheekadvies</option>
                    <option>Beleggingsadvies</option>
                    <option>Verduurzamen</option>
                    <option>Financiële planning</option>
                    <option>Anders</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm">
                    Vertel kort over je situatie
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full resize-none rounded-lg border border-input bg-background px-4 py-3 outline-none transition-shadow focus:ring-2 focus:ring-ring/30"
                  />
                </div>
                <PillButton>Verstuur aanvraag</PillButton>
                <p className="text-xs text-muted-foreground">
                  Door te versturen ga je akkoord met onze verwerking van je gegevens
                  om contact met je op te nemen.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}