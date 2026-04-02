import { fearBlockContent } from "../data/fearBlock";
import { CheckItem } from "./ui/check-item";

function FearBlock() {
  return (
    <section id="miedos-reales" className="section-pad relative bg-[#F8FAFC]/70 pt-2 pb-2 sm:pt-3 sm:pb-4 lg:pt-4 lg:pb-6" aria-labelledby="fear-block-title">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-50/25 to-background" aria-hidden="true" />

      <div className="wrap relative z-10">
        <div className="section-shell mx-auto max-w-4xl px-8 py-10 sm:px-10 sm:py-12">
          <p className="kicker">{fearBlockContent.eyebrow}</p>

          <h2 id="fear-block-title" className="section-title text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            {fearBlockContent.title}
          </h2>

          <p className="section-copy max-w-3xl">{fearBlockContent.intro}</p>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {fearBlockContent.bullets.map((bullet) => (
              <CheckItem key={bullet} tone="primary" className="rounded-2xl border border-[#E5E7EB] bg-white/90 p-4 shadow-sm">
                <span className="font-medium text-[#374151]">{bullet}</span>
              </CheckItem>
            ))}
          </ul>

          <p className="mt-8 text-lg font-semibold leading-relaxed text-[#111827] sm:text-xl">
            {fearBlockContent.closing}
          </p>
        </div>
      </div>
    </section>
  );
}

export default FearBlock;
