import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { MessageCircle, Send, X } from "lucide-react";

const suggesties = [
  "Kan ik kopen met een studieschuld?",
  "Wat is het verschil tussen sparen en beleggen?",
  "Wat kost advies bij BASE FINANCE?",
];

export function MaxChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });
  const busy = status === "submitted" || status === "streaming";
  const send = (text: string) => {
    if (!text.trim() || busy) return;
    sendMessage({ text });
    setInput("");
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open ? (
        <div className="flex h-[min(560px,80vh)] w-[min(380px,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-soft">
          <div className="flex items-center gap-3 bg-primary px-5 py-4 text-primary-foreground">
            <span className="grid size-9 place-items-center rounded-full bg-accent font-medium text-primary">M</span>
            <div className="flex-1">
              <p className="font-medium">Max</p>
              <p className="text-xs text-primary-foreground/70">Digitale assistent van BASE FINANCE</p>
            </div>
            <button aria-label="Sluit Max" onClick={() => setOpen(false)}><X className="size-5" /></button>
          </div>
          <div className="flex-1 space-y-4 overflow-y-auto p-5 text-sm">
            <p className="text-muted-foreground">Hoi, ik ben Max! Stel je vraag over hypotheken, beleggen of onze werkwijze.</p>
            {messages.length === 0 && (
              <div className="flex flex-col gap-2">
                {suggesties.map((s) => (
                  <button key={s} onClick={() => send(s)} className="rounded-full border border-border px-4 py-2 text-left transition-colors hover:bg-accent">{s}</button>
                ))}
              </div>
            )}
            {messages.map((m) => {
              const text = m.parts.map((p) => (p.type === "text" ? p.text : "")).join("");
              if (!text) return null;
              return m.role === "user" ? (
                <div key={m.id} className="ml-auto max-w-[85%] rounded-2xl bg-primary px-4 py-2 text-primary-foreground">{text}</div>
              ) : (
                <div key={m.id} className="prose prose-sm max-w-none [&_a]:text-primary [&_a]:underline [&_p]:my-1.5 [&_ul]:my-1.5 [&_ul]:list-disc [&_ul]:pl-5"><ReactMarkdown>{text}</ReactMarkdown></div>
              );
            })}
            {status === "submitted" && <p className="text-muted-foreground">Max denkt na…</p>}
            {error && <p className="text-destructive">Max is even niet bereikbaar. Probeer het later opnieuw.</p>}
          </div>
          <form onSubmit={(e) => { e.preventDefault(); send(input); }} className="flex gap-2 border-t border-border p-3">
            <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Typ je vraag…" className="flex-1 rounded-full border border-input bg-background px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-ring/30" />
            <button aria-label="Verstuur" disabled={busy || !input.trim()} className="grid size-10 place-items-center rounded-full bg-primary text-primary-foreground disabled:opacity-50"><Send className="size-4" /></button>
          </form>
          <p className="px-4 pb-3 text-[11px] text-muted-foreground">Max geeft algemene uitleg, geen persoonlijk advies.</p>
        </div>
      ) : (
        <button onClick={() => setOpen(true)} className="flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-primary-foreground shadow-soft">
          <MessageCircle className="size-5" /> Vraag het Max
        </button>
      )}
    </div>
  );
}
