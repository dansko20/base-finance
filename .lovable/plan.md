# Plan: rekentool en adviseursteam bijwerken

## Resultaat
- De rekentool op `/rekentools` volgt de korte publieksversie uit het aangeleverde Excel-bestand.
- De pagina **Over ons** toont vijf adviseurs met de opgegeven namen en functies.
- Danilo, Huub en Eliezer krijgen hun aangeleverde portretfoto; Marrouane en Charlotte krijgen een verzorgde tijdelijke fotoplaats totdat hun foto’s beschikbaar zijn.

## Werkzaamheden
1. **Excel-rekenmodel overnemen**
   - Vervang de huidige uitgebreide invoer door de velden uit het tabblad **Snelle berekening website**: maandsalaris, vaste 13e maand, ander vast inkomen, roodstand, andere leningen, DUO-maandbedrag, energielabel en verduurzamingsbedrag.
   - Toon de uitkomsten uit Excel: maximale lening zonder verduurzaming, maximale lening met verduurzaming en geschatte bruto maandlast.
   - Neem de Excel-logica over voor vakantiegeld, de actuele rente, financieringslasttabel, kredietlast, studieschuldfactor, energielabelbedragen, verduurzaming en extra leenruimte voor alleenstaanden.
   - Houd rekenregels en 2026-normen gescheiden van de vormgeving en behoud de waarschuwing dat de uitkomst indicatief is.

2. **Vormgeving rekentool**
   - Vertaal de gele Excel-invoervakken naar duidelijke websitevelden in de bestaande BASE FINANCE-stijl.
   - Laat resultaten direct en vloeiend bijwerken, met begrijpelijke toelichtingen uit het Excel-bestand.
   - Zorg dat de tool prettig werkt op telefoon en desktop.

3. **Onze adviseurs uitbreiden**
   - Voeg toe: Danilo Skoric — Beleggingsadviseur; Huub Klein — Beleggingsadviseur; Eliezer Reyes — Hypotheekadviseur; Marrouane Harraou — Hypotheekadviseur; Charlotte Blanken — Hypotheekadviseur.
   - Gebruik de drie portretten op basis van de gegeven persoonsbeschrijvingen.
   - Geef de twee profielen zonder foto een consistente tijdelijke afbeelding/initialenweergave.

4. **Eerder afgesproken dienstenfocus afronden**
   - Verwijder verwijzingen en keuzemogelijkheden voor andere adviestakken, zodat alleen Hypotheekadvies en Beleggingsadvies overblijven.

5. **Controle**
   - Vergelijk meerdere voorbeelduitkomsten met het Excel-bestand.
   - Controleer de rekentool en teamweergave visueel op desktop en mobiel.
   - Controleer links, formulieren en de actuele foutmeldingen van de site.

## Technisch
- De volledige officiële financieringslasttabel en normwaarden worden uit het Excel-bestand naar het aparte 2026-configuratiebestand vertaald.
- De portretten worden als geoptimaliseerde website-assets opgeslagen; het Excel-bestand zelf wordt niet als download of ingesloten spreadsheet getoond.