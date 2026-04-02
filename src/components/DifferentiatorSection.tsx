import { siteConfig } from "../data/siteConfig";

function DifferentiatorSection() {
  return (
    <section className="section-pad relative py-5 sm:py-7 lg:py-10" aria-labelledby="differentiator-title">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" aria-hidden="true" />
      
      <div className="wrap relative z-10">
        <div className="section-shell mx-auto max-w-4xl px-8 py-10 sm:px-10 sm:py-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-100/50 border border-blue-200 px-4 py-1.5 mb-4 shadow-sm">
            <svg className="h-4 w-4 text-[#1D4ED8]" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-[0.7rem] font-extrabold tracking-[0.2em] text-[#1D4ED8] uppercase">Diferenciador</span>
          </div>
          
          <h2 id="differentiator-title" className="section-title">
            Tu interés va <span className="glow-text">primero</span>.
          </h2>
          
          <p className="section-copy leading-relaxed">
            {siteConfig.differentiator}
          </p>
          
          <div className="stripe-line mt-8 max-w-sm" />
        </div>
      </div>
    </section>
  );
}

export default DifferentiatorSection;
