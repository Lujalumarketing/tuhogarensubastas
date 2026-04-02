import { useEffect, useState } from "react";
import { faqs } from "../data/faqs";
import { getWhatsAppUrl } from "../data/siteConfig";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { WhatsAppIcon } from "./ui/whatsapp-icon";

const ctaActivityMessages = [
  "José está revisando qué servicio elegir",
  "Ana quiere que analices su caso",
  "Paco está viendo el vídeo ahora",
  "Marcos quiere acceder al servicio",
  "Lucía está valorando si entrar en una subasta",
  "David está revisando si esta oportunidad tiene sentido",
  "Sergio está viendo cómo funciona el proceso"
];

function FaqSection() {
  const [activityIndex, setActivityIndex] = useState(0);

  useEffect(() => {
    if (ctaActivityMessages.length <= 1) {
      return;
    }

    const getRandomDelay = () => 120000 + Math.floor(Math.random() * 60001);

    const getNextIndex = (current: number) => {
      let next = current;

      while (next === current) {
        next = Math.floor(Math.random() * ctaActivityMessages.length);
      }

      return next;
    };

    let timeoutId: number;

    const scheduleNext = () => {
      timeoutId = window.setTimeout(() => {
        setActivityIndex((current) => getNextIndex(current));
        scheduleNext();
      }, getRandomDelay());
    };

    scheduleNext();

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section className="section-pad relative py-10 sm:py-14 lg:py-20" id="faq" aria-labelledby="faq-title">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-50/40 to-background" aria-hidden="true" />
      
      <div className="wrap relative z-10">
        <div className="mb-8 max-w-3xl sm:mb-10">
          <p className="kicker">
            <svg className="h-3.5 w-3.5 mr-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
            FAQ
          </p>
          <h2 id="faq-title" className="section-title">
            Preguntas <span className="glow-text">frecuentes</span>
          </h2>
          <div className="stripe-line mt-5 max-w-xl" />
        </div>

        <div className="max-w-3xl">
          <Accordion type="single" collapsible className="grid gap-4">
            {faqs.map((faq) => (
              <AccordionItem 
                key={faq.id} 
                value={`item-${faq.id}`}
                className="group rounded-2xl border border-[#E5E7EB] bg-white px-6 shadow-sm transition-all duration-300 hover:shadow-md hover:border-blue-200"
              >
                <AccordionTrigger className="font-semibold text-[#111827] group-hover:text-[#1D4ED8] transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="mt-8 text-center sm:mt-10">
          <p className="mx-auto max-w-2xl text-base font-semibold text-slate-800 sm:text-lg">
            Si has llegado hasta aquí, es porque no quieres equivocarte.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-slate-500">
            Cuéntame tu caso y te diré claro si lo que estás viendo tiene sentido o no.
          </p>

          <p className="mt-4 text-sm text-slate-500">Te respondo personalmente.</p>

          <div className="mt-6 flex justify-center sm:mt-8">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 px-6 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-green-600 md:text-lg"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Quiero que analices mi caso
            </a>
          </div>
          <p className="mt-3 text-xs text-muted-foreground sm:mt-4 sm:text-sm">
            Respuesta directa. Sin compromiso.
          </p>
          <div className="mt-3 flex items-center justify-center gap-2 text-sm text-gray-500">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" aria-hidden="true" />
            <span>{ctaActivityMessages[activityIndex]}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
