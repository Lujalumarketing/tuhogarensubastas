import { getWhatsAppUrl } from "../data/siteConfig";
import type { ServiceItem } from "../types/content";
import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { CheckItem } from "./ui/check-item";
import { WhatsAppIcon } from "./ui/whatsapp-icon";
import CtaLegalText from "./CtaLegalText";

interface ServiceCardProps {
  service: ServiceItem;
  socialProof?: string;
}

const serviceEmojis: Record<string, string> = {
  "informe-pro": "📊",
  "acompanamiento-elite": "🎯",
  "subasta-360": "🏡",
  "sesion-estrategica": "💬"
};

function ServiceCard({ service, socialProof }: ServiceCardProps) {
  return (
      <Card
        id={`servicio-${service.id}`}
        className={`relative overflow-hidden rounded-3xl scroll-mt-24 transition-all duration-500 ${
          service.isRecommended
            ? "border-2 border-blue-500 bg-gradient-to-br from-[#F8FAFC] to-[#EFF4FA] shadow-2xl scale-[1.04] z-10 lg:scale-[1.05]"
            : "card"
        }`}
      >
      {service.isRecommended && (
        <>
          <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#DBEAFE] blur-[50px]" aria-hidden="true" />
          <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-[#1D4ED8]/5 blur-[60px]" aria-hidden="true" />
        </>
      )}

      {service.badge && (
        <div className="relative z-10 px-6 pt-5 sm:absolute sm:top-4 sm:right-4 sm:px-0 sm:pt-0">
          <span 
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] font-extrabold tracking-wide text-white sm:text-xs uppercase ${
              service.isRecommended
                ? "bg-gradient-to-r from-amber-500 to-yellow-400 shadow-[0_4px_12px_rgba(245,158,11,0.5)] ring-1 ring-yellow-300 drop-shadow-md"
                : "bg-slate-800 shadow-md"
            }`}
          >
            <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {service.badge}
          </span>
        </div>
      )}

      <CardHeader className="pb-4 sm:pr-28">
        <div className="mb-3 relative z-10">
          <CardTitle 
            className={`${
              service.isRecommended 
                ? "text-2xl font-black text-[#1D4ED8] tracking-tight" 
                : "text-xl font-bold text-[#111827]"
            }`}
          >
            <span className="mr-2" aria-hidden="true">{serviceEmojis[service.id] ?? "⭐"}</span>
            {service.name}
            <span className={`${service.isRecommended ? "text-blue-500" : "text-[#1D4ED8]"} ml-1.5 text-xs font-bold`}>{service.trademark}</span>
          </CardTitle>
          <p className={`${
            service.isRecommended 
              ? "text-[1.05rem] font-bold text-slate-800 mt-2.5" 
              : "text-[0.95rem] font-medium text-slate-700 mt-2"
            }`}
          >
            {service.description}
          </p>
          {service.microcopy && (
            <p className="text-sm text-slate-500 italic mt-2.5 bg-slate-50 p-2 rounded-md border border-slate-100">{service.microcopy}</p>
          )}
          {socialProof && (
            <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50/60 px-3 py-1 text-xs font-semibold text-emerald-700">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
              {socialProof}
            </p>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        <ul className="grid gap-3">
          {service.bullets.map((bullet) => (
            <CheckItem key={bullet} tone="primary" className="text-sm font-medium">
              {bullet}
            </CheckItem>
          ))}
        </ul>

        <div className="relative z-10 rounded-2xl bg-white border border-[#E5E7EB] p-4 p-5 shadow-sm">
          <div className="flex items-baseline gap-2">
            <p className="text-sm font-semibold text-[#6B7280] line-through opacity-70">
              {service.priceBefore}
            </p>
            <p className="text-2xl font-extrabold text-[#111827]">
              {service.priceNow}
            </p>
          </div>
          {service.priceReinforcement && (
            <p className="mt-1 text-xs font-semibold text-slate-700 leading-tight">
              {service.priceReinforcement}
            </p>
          )}
          <div className="mt-3 h-px w-full bg-gradient-to-r from-[#E5E7EB] via-[#E5E7EB] to-transparent" />
          {service.id === "acompanamiento-elite" && (
            <p className="mt-3 text-[13px] font-bold text-[#1D4ED8]">
              Incluye participar en dos subastas cubiertas.
            </p>
          )}
          {service.id === "subasta-360" && (
            <p className="mt-3 text-[13px] font-bold text-[#1D4ED8]">
              Incluye participar en hasta tres subastas.
            </p>
          )}
        </div>

        {service.notes.map((note, index) => (
          <p
            key={index}
            className={`text-muted-foreground leading-relaxed ${
              note.trim().startsWith("(") ? "text-xs italic" : "text-sm"
            }`}
          >
            {note.startsWith("Garantía:") ? (
              <>
                <strong className="text-foreground">Garantía:</strong>{" "}
                {note.replace("Garantía:", "").trim()}
              </>
            ) : (
              note
            )}
          </p>
        ))}
      </CardContent>

      <CardFooter className="pt-2 pb-4 flex flex-col items-start gap-3">
        {service.urgency && (
          <div className="w-full inline-flex items-center gap-2 text-xs font-bold text-amber-800 bg-amber-100/60 border border-amber-200/60 px-3 py-2 rounded-lg">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-500 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-amber-600"></span>
            </span>
            {service.urgency}
          </div>
        )}
        <div className="w-full">
          <Button
            asChild
            variant="default"
            className="relative z-10 w-full font-semibold transition-all duration-300 btn-primary"
          >
            <a
              href={getWhatsAppUrl(`Hola Javier, me interesa ${service.name}. Quiero más información.`)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon className="h-4 w-4" />
              {service.cta}
            </a>
          </Button>
          <CtaLegalText />
        </div>
      </CardFooter>
    </Card>
  );
}

export default ServiceCard;
