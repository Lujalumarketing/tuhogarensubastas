import { siteConfig } from "../data/siteConfig";
import { CheckItem } from "./ui/check-item";

function AudienceSection() {
  return (
    <section className="section-pad relative py-8 sm:py-10 lg:py-14" aria-labelledby="audience-title">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-50/40 to-background" aria-hidden="true" />
      
      <div className="wrap relative z-10">
        <div className="section-shell mx-auto max-w-4xl px-8 py-10 sm:px-10 sm:py-12">
          <p className="kicker">
            <svg className="h-3.5 w-3.5 mr-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
            </svg>
            Para quién es
          </p>
          
          <h2 id="audience-title" className="section-title">
            Este servicio es para ti si te identificas con esto
          </h2>
          
          <div className="stripe-line mt-5 max-w-xl" />

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {siteConfig.audience.map((item, index) => (
              <li key={item} className="group">
                <CheckItem className="h-full">
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-50 border border-blue-100 group-hover:bg-blue-100 transition-colors">
                      <span className="text-sm font-bold text-[#1D4ED8]">{index + 1}</span>
                    </div>
                    <span className="font-medium">{item}</span>
                  </div>
                </CheckItem>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AudienceSection;
