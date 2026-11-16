import { createFileRoute } from "@tanstack/react-router";
import { convertToModelMessages, type UIMessage } from "ai";

const INSTRUCTIONS = `Je bent Max, de digitale assistent van BASE FINANCE: een fictief schoolproject van een adviesbureau in Rotterdam voor starters (hypotheekadvies en beleggingsadvies, één vaste adviseur, geen provisie, gratis kennismaking).
Spreek de bezoeker aan met "je". Antwoord kort, vriendelijk en in eenvoudig Nederlands. Geef algemene uitleg, geen persoonlijk financieel advies; verwijs voor persoonlijke vragen naar een gratis kennismaking via /plan-een-gesprek. Verwijs bij berekeningen naar /rekentools (maximale hypotheek, sparen of beleggen, box 3). Tarieven staan op /tarieven, partners op /onze-partners, de werkwijze op /werkwijze. Verzin geen cijfers of tarieven van BASE FINANCE.`;

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const apiKey = process.env["LOVABLE_API_KEY"];
        if (!apiKey) return Response.json({ error: "Max is even niet beschikbaar." }, { status: 500 });
        const { messages } = (await request.json()) as { messages: UIMessage[] };
        const { createResponsesCall } = await import("@/lib/ai/responses.server");
        const call = createResponsesCall(
          request,
          { baseURL: "https://ai.gateway.lovable.dev/v1", apiKey, model: "openai/gpt-6-astra" },
          await convertToModelMessages(messages.slice(-20)),
          INSTRUCTIONS,
        );
        return call.response();
      },
    },
  },
});
