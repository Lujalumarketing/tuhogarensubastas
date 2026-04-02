import { useEffect, useRef, useState } from "react";
import { siteConfig } from "../data/siteConfig";

function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    lastScrollY.current = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;

      if (currentY <= 20) {
        setIsVisible(true);
        lastScrollY.current = currentY;
        return;
      }

      if (currentY > lastScrollY.current) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 py-3 transition-all duration-300 sm:py-4 ${
        isVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <div className="wrap">
        <a
          href="/#inicio"
          aria-label="Ir al inicio"
          className="group mx-auto flex w-full max-w-[95%] sm:max-w-full items-center justify-between gap-3 glass-panel px-4 py-3 hover:-translate-y-0.5 md:gap-6 md:px-6 md:py-4"
        >
          <div className="min-w-0 text-left">
            <span className="block text-lg font-extrabold tracking-tight leading-tight text-[#0F172A] sm:text-xl">
              {siteConfig.brandTitle}
            </span>
            <span className="mt-1 block text-xs font-semibold tracking-[0.08em] text-[#64748B] uppercase sm:text-sm">
              Javier Martínez
            </span>
          </div>

          <span className="relative shrink-0">
            <span className="pointer-events-none absolute -inset-1.5 rounded-xl bg-gradient-to-br from-blue-200/45 via-sky-100/35 to-transparent blur-[6px]" aria-hidden="true" />
            <span className="relative block rounded-xl border border-[#BFDBFE] bg-white/95 p-2 shadow-[0_8px_20px_rgba(29,78,216,0.14)] ring-1 ring-blue-100 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_10px_24px_rgba(29,78,216,0.22)] md:p-2.5">
              <img
                src="/Logo_%20SIN%20EFECTOS_AMPLIADO.png"
                alt="Logo Tu Hogar en Subastas"
                className="h-10 w-10 rounded-md object-contain sm:h-12 sm:w-12"
                loading="eager"
                decoding="async"
                width={96}
                height={96}
              />
            </span>
          </span>
        </a>
      </div>
    </header>
  );
}

export default Header;
