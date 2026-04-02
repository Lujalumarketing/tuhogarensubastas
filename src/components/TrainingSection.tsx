import { getWhatsAppUrl, siteConfig } from "../data/siteConfig";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { WhatsAppIcon } from "./ui/whatsapp-icon";
import CtaLegalText from "./CtaLegalText";

// Editable: actualiza este numero cuando quieras reflejar demanda real.
const priorityInterestedCount = 37;

function TrainingSection() {
  return (
    <section className="section-pad relative py-6 sm:py-8 lg:py-12" aria-labelledby="training-title">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-50/40 to-background" aria-hidden="true" />
      
      <div className="wrap relative z-10">
        <Card className="linear-shell relative mx-auto overflow-hidden max-w-4xl p-8 sm:p-12">
          {/* Decorative elements */}
          <div className="soft-orb top-[-2rem] right-[-2rem] h-40 w-40 bg-blue-200/40 blur-[80px]" aria-hidden="true" />
          <div className="soft-orb bottom-[-2rem] left-[-2rem] h-40 w-40 bg-blue-100/40 blur-[80px]" aria-hidden="true" />
          
          <div className="relative">
            <p className="kicker bg-[#DBEAFE] border-blue-200 text-[#1D4ED8]">
              <svg className="h-3.5 w-3.5 mr-1 text-[#1D4ED8]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4.022z" />
              </svg>
              Formación
            </p>
            
            <h2 id="training-title" className="section-title mt-4">
              {siteConfig.training.title}
            </h2>
            
            <p className="section-copy text-muted-foreground/90">
              {siteConfig.training.text}
            </p>

            <p className="mt-4 text-sm font-semibold text-[#1D4ED8] sm:text-base">
              Acceso prioritario a la primera edición.
            </p>

            <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
              Más de {priorityInterestedCount} personas ya han pedido acceso prioritario.
            </p>
            
            <div className="stripe-line mt-6 max-w-sm" />
            
            <Button asChild className="btn-primary mt-8 w-full sm:w-auto">
              <a
                href={getWhatsAppUrl(
                  "Hola Javier, quiero acceso prioritario a la formación completa en subastas."
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className="h-4 w-4" />
                {siteConfig.training.cta}
              </a>
            </Button>
            <CtaLegalText
              className="sm:text-left sm:text-xs"
              prefixText="Al solicitar acceso aceptas las"
            />
          </div>
        </Card>
      </div>
    </section>
  );
}

export default TrainingSection;
