import { getWhatsAppUrl, siteConfig } from "../data/siteConfig";
import { CheckItem } from "./ui/check-item";
import ProblemSection from "./ProblemSection";
import FearBlock from "./FearBlock";
import ActivitySignal from "./ActivitySignal";

function Hero() {
  const subtitleParagraphs = siteConfig.hero.subtitle.split("\n\n");

  const renderCaseReal = (text: string) => {
    const parts = text.split("caso real");

    if (parts.length !== 2) {
      return text;
    }

    return (
      <>
        {parts[0]}
        <span className="font-semibold text-slate-800 underline decoration-slate-300 decoration-2 underline-offset-4">caso real</span>
        {parts[1]}
      </>
    );
  };

  return (
    <>
    <section id="inicio" className="relative section-pad pt-2 sm:pt-3" aria-labelledby="hero-title">
      {/* 1. Fondo General: Azul muy claro -> blanco -> gris claro */}
      <div className="absolute inset-0 z-[-3] bg-gradient-to-br from-slate-50/50 via-white to-gray-50/80" aria-hidden="true" />
      
      {/* 2. Rejilla (Grid): Muy sutil (0.06), casi invisible en móvil */}
      <div className="absolute inset-0 z-[-2] bg-grid-pattern opacity-5 sm:opacity-75 [mask-image:linear-gradient(to_bottom,black_30%,transparent_100%)]" aria-hidden="true" />
      
      {/* 3. Glow Radial: Foco superior izquierdo (0.15), ultra difuminado */}
      <div className="absolute inset-0 z-[-1] bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.10),transparent_75%)] sm:bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_65%)]" aria-hidden="true" />
      
      <div className="wrap relative z-10">
        <div className="max-w-4xl">
        <div className="relative z-10">
          <p className="kicker !mb-0 animate-fade-in">
            <span className="inline-block h-2 w-2 rounded-full bg-[#1D4ED8] animate-pulse" />
            Asesoría en Subastas Inmobiliarias
          </p>

          <ActivitySignal />

          <h1 id="hero-title" className="mt-2 max-w-4xl text-4xl font-extrabold tracking-tight leading-[1.1] text-slate-900 sm:text-5xl lg:text-6xl">
            <span className="block mb-2">Compra tu vivienda en subasta</span>
            <span className="glow-text block">sin miedo a equivocarte</span>
          </h1>
          
          <div className="mt-6 max-w-lg text-[1.05rem] sm:text-lg text-slate-600 font-medium leading-[1.5] space-y-3">
            {subtitleParagraphs.map((paragraph) => (
              <p key={paragraph}>
                {renderCaseReal(paragraph)}
              </p>
            ))}
          </div>
          
          <div className="mt-10 inline-flex items-center gap-3 rounded-lg bg-slate-50/80 px-5 py-3.5 border border-slate-200 shadow-sm backdrop-blur-md transition-transform hover:scale-[1.02]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-slate-300 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-slate-400"></span>
            </span>
            <p className="text-sm font-semibold text-slate-700">{siteConfig.hero.personalProof}</p>
          </div>

          {/* Micro-CTA Suave */}
          <a 
            href={getWhatsAppUrl("Hola, he visto tu web y quiero que analices mi caso")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block cursor-pointer text-[0.95rem] leading-relaxed sm:text-base text-gray-700 transition-colors duration-200 hover:text-blue-600"
          >
            Escríbeme <span className="font-semibold text-blue-600">'HOGAR'</span> y vemos tu caso sin compromiso, paso a paso.
          </a>
        </div>
        </div>
      </div>
    </section>

    {/* SECCIÓN INYECTADA PARA FLUJO MENTAL ÓPTIMO: PROBLEMA Y MIEDOS */}
    <ProblemSection />
    <FearBlock />

    {/* SECCIÓN CONTINUACIÓN DEL HERO: BENEFICIOS FOTO Y TARJETAS */}
    <section className="relative pb-8 pt-0 sm:pb-16 sm:pt-2 lg:pb-20 lg:pt-3">
      <div className="wrap grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-16">
        <div className="relative z-10 flex flex-col justify-center">

          <p className="mb-10 text-xl font-medium sm:text-2xl text-slate-800 leading-relaxed max-w-lg">
            Y aquí es donde hacerlo con criterio marca la diferencia.
          </p>

          <ul className="grid gap-5 sm:max-w-xl text-slate-700" aria-label="Beneficios principales">
            {siteConfig.hero.valueBullets.map((bullet) => (
              <CheckItem key={bullet}>
                <span className="font-medium">{bullet}</span>
              </CheckItem>
            ))}
          </ul>

        </div>

        <div className="relative lg:ml-auto lg:mt-1">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-300/20 via-blue-100/40 to-transparent blur-3xl rounded-[3rem]" aria-hidden="true" />
          <div className="glass-panel relative mx-auto w-full max-w-sm overflow-hidden p-2 border-white/80">
            <img
              src={siteConfig.founderImagePath}
              alt="Foto de Javier Martínez, fundador de Tu Hogar en Subastas"
              className="mx-auto w-full max-h-[26rem] rounded-2xl object-contain shadow-md"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              width={1536}
              height={1536}
            />
            <div className="absolute right-4 bottom-4 rounded-full border border-blue-100 bg-white/95 px-4 py-2 text-xs font-bold text-[#1D4ED8] shadow-[0_4px_10px_rgba(0,0,0,0.1)] backdrop-blur-md">
              <span className="inline-block h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse" />
              Estrategia + Claridad
            </div>
          </div>
        </div>
      </div>
      
      <div className="wrap mt-10 grid gap-4 sm:mt-14 sm:grid-cols-3 sm:gap-5">
        {[
          { label: "Decisión", value: "Saber cuándo NO entrar es lo que te ahorra dinero.", icon: "🎯" },
          { label: "Riesgo", value: "Entender lo que nadie ve antes de pujar.", icon: "🛡️" },
          { label: "Acompañamiento", value: "No vas solo en una decisión que puede cambiar tu vida.", icon: "🤝" }
        ].map((item) => (
          <div 
            key={item.label}
            className="glass-panel group flex flex-col items-center text-center p-8 bg-white/80"
          >
            <span className="text-3xl mb-5 transform group-hover:scale-110 transition-transform duration-500 ease-out">{item.icon}</span>
            <p className="text-xs font-bold tracking-[0.15em] text-[#1D4ED8] uppercase mb-2">{item.label}</p>
            <p className="text-sm font-semibold text-slate-800">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}

export default Hero;
