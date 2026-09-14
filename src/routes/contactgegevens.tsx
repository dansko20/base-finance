import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/site/motion";

export const Route = createFileRoute("/contactgegevens")({
  head: () => ({ meta: [
    { title: "Contactgegevens | BASE FINANCE" },
    { name: "description", content: "Telefoonnummer, e-mailadres en bezoekadres van BASE FINANCE in Rotterdam." },
    { property: "og:title", content: "Contactgegevens | BASE FINANCE" },
    { property: "og:description", content: "Neem telefonisch, per e-mail of op kantoor contact op met BASE FINANCE." },
  ] }),
  component: Contactgegevens,
});

const gegevens = [
  { icon: Phone, label: "Telefoon", value: "+31 (0)10 200 00 00", href: "tel:+31102000000" },
  { icon: Mail, label: "E-mail", value: "advies@basefinance.nl", href: "mailto:advies@basefinance.nl" },
  { icon: MapPin, label: "Bezoekadres", value: "Weena 505, 3013 AL Rotterdam" },
];

function Contactgegevens() {
  return <section className="min-h-screen bg-background px-5 pb-24 pt-40 sm:px-8"><div className="mx-auto max-w-[1400px]"><Reveal><p className="label-eyebrow">Kennismaken</p><h1 className="mt-8 max-w-4xl text-[clamp(2.5rem,6vw,5rem)] font-medium leading-[1.04]">Contactgegevens</h1></Reveal><div className="mt-16 grid gap-6 lg:grid-cols-3">{gegevens.map((item, index) => <Reveal key={item.label} delay={index * 0.1}><article className="h-full rounded-xl bg-surface p-8"><item.icon className="size-6 text-primary" /><p className="mt-8 text-sm text-muted-foreground">{item.label}</p>{item.href ? <a href={item.href} className="mt-2 block text-xl font-medium transition-colors hover:text-primary">{item.value}</a> : <p className="mt-2 text-xl font-medium">{item.value}</p>}</article></Reveal>)}</div></div></section>;
}