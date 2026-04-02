import type { MouseEvent } from "react";
import { serviceFitContent } from "../data/serviceFit";

function ServiceFitBlock() {
  const handleServiceJump = (serviceId: string, event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const target = document.getElementById(`servicio-${serviceId}`);
    if (!target) {
      return;
    }

    target.scrollIntoView({ behavior: "smooth", block: "center" });
    window.history.replaceState(null, "", `#servicio-${serviceId}`);
  };

  return (
    <div className="mt-8 sm:mt-10">
      <div className="mb-6 max-w-3xl">
        <h3 className="text-2xl font-extrabold tracking-tight text-[#111827] sm:text-3xl">
          {serviceFitContent.title}
        </h3>
        <p className="mt-2 text-sm text-muted-foreground sm:text-base">{serviceFitContent.subtitle}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {serviceFitContent.items.map((item) => (
          <article
            key={item.id}
            className={`rounded-2xl border bg-white/90 p-5 shadow-sm ${
              item.isHighlighted
                ? "border-blue-300 shadow-[0_8px_24px_rgba(29,78,216,0.12)]"
                : "border-[#E5E7EB]"
            }`}
          >
            <span
              className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide ${
                item.isHighlighted
                  ? "bg-blue-100 text-[#1D4ED8]"
                  : "bg-slate-100 text-slate-700"
              }`}
            >
              {item.badge}
            </span>

            <h4 className="mt-3 text-base font-bold text-[#111827]">{item.title}</h4>
            <p className="mt-2 text-sm text-muted-foreground">{item.text}</p>

            <a
              href={`#servicio-${item.id}`}
              onClick={(event) => handleServiceJump(item.id, event)}
              className="mt-4 inline-flex items-center text-sm font-semibold text-[#1D4ED8] hover:underline"
            >
              {item.cta}
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}

export default ServiceFitBlock;
