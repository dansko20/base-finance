import daniloAsset from "@/assets/danilo-skoric.jpeg.asset.json";
import huubAsset from "@/assets/huub-klein.jpeg.asset.json";
import eliezerAsset from "@/assets/eliezer-reyes.jpeg.asset.json";
import marrouaneAsset from "@/assets/marrouane-harraou.jpeg.asset.json";
import charlotteAsset from "@/assets/charlotte-blanken.jpeg.asset.json";
import { Reveal } from "@/components/site/motion";
import { PillLink } from "@/components/site/PillButton";

const advisors = [
  {
    name: "Danilo Skoric",
    role: "Beleggingsadviseur",
    image: daniloAsset.url,
    paragraphs: [
      "Mijn naam is Danilo Skoric, financieel adviseur en mede-eigenaar van BASE FINANCE. Goed financieel advies begint voor mij niet bij een product of een snelle rekensom, maar bij wie jij bent en wat je echt wilt bereiken. Met een achtergrond in Business Studies, Sustainable Finance en Wft Basis combineer ik een scherpe, analytische blik met persoonlijke betrokkenheid.",
      "Ik kijk verder dan alleen wat cijfermatig haalbaar is: ik weeg altijd de duurzame impact en de langetermijnwaarde van een keuze mee. Soms betekent dat niet het maximale adviseren, maar juist wat op de lange termijn het beste bij jouw situatie past. Daarbij staan jouw wensen en toekomstplannen centraal, zodat een financiële keuze aansluit bij wat voor jou belangrijk is.",
      "Geen ingewikkeld vakjargon, maar eerlijke antwoorden in duidelijke taal. Ik neem de tijd om door te vragen en leg opties helder uit, zodat jij met een gerust en zeker gevoel weloverwogen beslissingen kunt nemen. Samen brengen we overzicht in de mogelijkheden en maken we de afwegingen begrijpelijk. Zo weet je niet alleen wat je kiest, maar ook waarom.",
    ],
  },
  {
    name: "Huub Klein",
    role: "Beleggingsadviseur",
    image: huubAsset.url,
    paragraphs: [
      "Als duurzaam financieel adviseur wil ik bekendstaan als iemand die eerlijk, betrouwbaar en duidelijk advies geeft, waarbij jouw belang centraal staat. Het advies moet passen bij je financiële situatie, maar ook bij je wensen, doelen en waarden. Ik vind het belangrijk dat je begrijpt waarom een advies bij je past en welke afwegingen daarbij een rol spelen.",
      "Duurzaamheid betekent voor mij dat ik verder kijk dan alleen rendement of lage maandlasten. Bij beleggingen kijk ik naar mens, milieu en goed bestuur. Bij hypotheken kijk ik naar de lange termijn, zoals energiezuinigheid en verduurzaming. Ik wil je goed informeren over de mogelijkheden en gevolgen, zodat je bewust kunt kiezen wat aansluit bij jouw toekomst.",
      "Mijn belangrijkste waarden zijn betrouwbaarheid, eerlijkheid, respect en verantwoordelijkheid. Daarom leg ik financiële informatie begrijpelijk uit, communiceer ik duidelijk en luister ik goed voordat ik advies geef. Als mede-eigenaar van het advieskantoor wil ik bijdragen aan een organisatie waarin transparantie en klantbelang centraal staan. Mijn doel is om financiële kennis te combineren met persoonlijke aandacht en een duurzame blik op de toekomst.",
    ],
  },
  {
    name: "Eliezer Reyes",
    role: "Hypotheekadviseur",
    image: eliezerAsset.url,
    paragraphs: [
      "Als financieel adviseur help ik je bij het vinden van een passende hypotheek en het maken van bewuste beleggingskeuzes. Ik luister naar jouw wensen en toekomstplannen en vertaal ingewikkelde financiële informatie naar heldere mogelijkheden. Daarbij kijken we samen naar wat nu bij je past en wat jouw keuzes kunnen betekenen voor de jaren die voor je liggen.",
      "Persoonlijke aandacht, transparantie en vertrouwen staan centraal in mijn aanpak. Ik geef je inzicht in de kosten, kansen en risico’s, zodat je begrijpt waarvoor je kiest en waarom een oplossing bij jouw situatie past. Er is ruimte om vragen te stellen en verschillende mogelijkheden rustig af te wegen. Zo maken we financiële keuzes overzichtelijk en begrijpelijk.",
      "Duurzaamheid speelt een belangrijke rol in mijn advies. Bij hypotheken kijk ik ook naar de energiezuinigheid en verduurzaming van je woning. Bij beleggen bespreken we hoe jouw financiële doelen samengaan met aandacht voor mens, milieu en maatschappij. Mijn doel is jou rust, inzicht en grip te geven op je financiën, zodat je met vertrouwen aan je toekomst kunt bouwen en bewust je volgende stap kunt zetten.",
    ],
  },
  {
    name: "Marrouane Harraou",
    role: "Beleggingsadviseur",
    image: marrouaneAsset.url,
    paragraphs: [
      "Als financieel adviseur help ik je om financiële keuzes begrijpelijk en overzichtelijk te maken. Ik vind het belangrijk dat je niet alleen weet welke mogelijkheden er zijn, maar ook begrijpt wat de kosten, voordelen en risico’s van een keuze zijn. Daarom nemen we de tijd om die mogelijkheden naast elkaar te zetten en de belangrijkste afwegingen helder te bespreken.",
      "Met mijn achtergrond in Business Studies en Sustainable Finance combineer ik mijn interesse in financiën met persoonlijk advies. Daarbij kijk ik niet alleen naar wat financieel aantrekkelijk is, maar ook naar de gevolgen op de lange termijn en naar duurzame mogelijkheden die bij jouw wensen passen. Jouw situatie en toekomstplannen vormen daarbij steeds het uitgangspunt voor ons gesprek.",
      "Eerlijkheid en betrouwbaarheid staan voor mij centraal. Ik luister naar jouw situatie en doelen en leg financiële informatie uit in duidelijke taal. Je moet kunnen begrijpen waarom een keuze bij je past, zonder dat ingewikkelde begrippen het gesprek bepalen. Zo wil ik je helpen om met vertrouwen keuzes te maken voor je woning, vermogen en financiële toekomst, met overzicht en aandacht voor wat jij belangrijk vindt.",
    ],
  },
  {
    name: "Charlotte Blanken",
    role: "Hypotheekadviseur",
    image: charlotteAsset.url,
    paragraphs: [
      "Als financieel adviseur sta ik voor eerlijkheid, transparantie en persoonlijke aandacht. Ik vind het belangrijk om goed te luisteren naar wat jij écht wilt en samen te kijken naar wat financieel haalbaar en verantwoord is. Jouw wensen en situatie vormen het vertrekpunt. Door rustig door te vragen, maken we duidelijk welke afwegingen voor jou belangrijk zijn en wat je wilt bereiken.",
      "Ik leg verschillende mogelijkheden, risico’s en gevolgen graag in begrijpelijke taal uit. Daarbij kijk ik niet alleen naar vandaag, maar ook naar de lange termijn. Duurzame mogelijkheden neem ik mee in mijn advies, zonder deze aan je op te dringen. Samen bespreken we wat bij je past, zodat je bewust kunt kiezen en begrijpt wat een beslissing voor jouw toekomst betekent.",
      "Mijn doel is om een persoonlijke vertrouwensband op te bouwen waarin je je vrij voelt om vragen te stellen. Er moet ruimte zijn om twijfels te bespreken en mogelijkheden tegen elkaar af te wegen. Ik wil niet dat mijn advies blind wordt gevolgd, maar dat we samen tot een financiële keuze komen die je begrijpt en waar je volledig achter staat. Zo blijft jouw eigen afweging centraal staan.",
    ],
  },
];

export function AdvisorTeam() {
  return (
    <section className="section-y bg-background" aria-labelledby="advisor-team-title">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8">
        <Reveal>
          <p className="label-eyebrow">Ons team</p>
          <h2 id="advisor-team-title" className="mt-8 max-w-3xl text-4xl font-medium leading-[1.1] sm:text-5xl">
            Persoonlijk advies begint bij mensen
          </h2>
        </Reveal>
        <div className="mt-16 space-y-16 lg:mt-20 lg:space-y-24">
          {advisors.map((advisor, index) => (
            <Reveal key={advisor.name}>
              <article aria-labelledby={`advisor-${index}`} className="grid items-center gap-8 border-t border-border pt-10 md:grid-cols-2 md:gap-12 lg:gap-20">
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <img
                    src={advisor.image}
                    alt={`${advisor.name}, ${advisor.role} bij BASE FINANCE`}
                    width={1024}
                    height={1280}
                    loading="lazy"
                    className="mx-auto aspect-[4/5] w-full max-w-[480px] rounded-lg object-cover object-[center_25%]"
                  />
                </div>
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <p className="text-sm font-medium text-primary">{advisor.role}</p>
                  <h3 id={`advisor-${index}`} className="mt-3 text-3xl font-medium leading-tight sm:text-4xl">{advisor.name}</h3>
                  <div className="mt-6 space-y-5 text-base leading-7 text-muted-foreground">
                    {advisor.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                  <PillLink to="/plan-een-gesprek" variant="ghost" className="mt-6">Maak kennis met {advisor.name.split(" ")[0]}</PillLink>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}