import { getWhatsAppUrl, siteConfig } from "../data/siteConfig";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { WhatsAppIcon } from "./ui/whatsapp-icon";
import CtaLegalText from "./CtaLegalText";

function FinalCTA() {
  return (
    <section className="section-pad relative overflow-hidden py-6 sm:py-10 lg:py-14" aria-labelledby="final-cta-title">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-50/40 to-background" aria-hidden="true" />
      <div className="soft-orb top-0 right-0 h-96 w-96 bg-blue-100/40 blur-[120px]" aria-hidden="true" />
      <div className="soft-orb bottom-0 left-0 h-96 w-96 bg-[#DBEAFE]/40 blur-[120px]" aria-hidden="true" />
      
      <div className="wrap relative z-10">
        <Card className="relative overflow-hidden rounded-[2.5rem] border border-[#E5E7EB] bg-white p-6 text-center shadow-[var(--shadow-card)] backdrop-blur-xl sm:p-10 lg:p-14">
          {/* Decorative elements inside card */}
          <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br from-blue-100 to-transparent blur-3xl" aria-hidden="true" />
          <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-gradient-to-tr from-blue-50 to-transparent blur-3xl" aria-hidden="true" />
          
          <div className="relative">
            <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-xs font-bold text-[#1D4ED8] shadow-sm backdrop-blur-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-[#1D4ED8] animate-pulse" />
              Resolvemos tu caso por WhatsApp
            </div>
            
            <h2 id="final-cta-title" className="section-title font-extrabold text-3xl sm:text-4xl lg:text-5xl">
              Tu siguiente decisión puede{" "}
              <span className="glow-text">
                cambiarlo todo
              </span>
            </h2>
            
            <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground sm:text-xl leading-relaxed">
              {siteConfig.finalCta.text}
            </p>
            
            <div className="my-8 flex items-center justify-center gap-4">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-blue-200 to-blue-200" />
              <div className="flex gap-1.5">
                <div className="h-2 w-2 rounded-full bg-[#1D4ED8] shadow-sm" />
                <div className="h-2 w-2 rounded-full bg-blue-300" />
                <div className="h-2 w-2 rounded-full bg-[#1D4ED8] shadow-sm" />
              </div>
              <div className="h-px w-24 bg-gradient-to-l from-transparent via-blue-200 to-blue-200" />
            </div>
            
            <div className="flex justify-center">
              <Button asChild size="lg" className="btn-primary text-base sm:text-lg px-10 py-6">
                <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="h-5 w-5 sm:h-6 sm:w-6" />
                  {siteConfig.finalCta.button}
                </a>
              </Button>
            </div>
            <CtaLegalText variant="whatsapp" />
            
            <p className="mt-6 text-sm text-muted-foreground">
              Sin compromiso • Respuesta rápida • Asesoría personalizada
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
}

export default FinalCTA;
