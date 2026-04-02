import { useEffect, useState } from "react";

const COOKIE_CONSENT_KEY = "cookiesAccepted";

function initAnalytics() {
  if (typeof window === "undefined") {
    return;
  }

  // Simulacion de carga de analitica; reemplazar por GA real cuando proceda.
  if ((window as Window & { __analyticsInitialized?: boolean }).__analyticsInitialized) {
    return;
  }

  (window as Window & { __analyticsInitialized?: boolean }).__analyticsInitialized = true;
  console.info("initAnalytics(): analitica inicializada tras consentimiento.");
}

function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimatedIn, setIsAnimatedIn] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const forcePreview = params.get("previewCookies") === "1";
    const resetConsent = params.get("resetCookies") === "1";

    if (resetConsent) {
      try {
        localStorage.removeItem(COOKIE_CONSENT_KEY);
      } catch {
        // Si localStorage no esta disponible, seguimos mostrando el banner.
      }
    }

    if (forcePreview) {
      setIsVisible(true);

      const animationFrame = window.requestAnimationFrame(() => {
        setIsAnimatedIn(true);
      });

      return () => {
        window.cancelAnimationFrame(animationFrame);
      };
    }

    let savedChoice: string | null = null;

    try {
      savedChoice = localStorage.getItem(COOKIE_CONSENT_KEY);
    } catch {
      // Si localStorage no esta disponible en el navegador, mostramos banner igualmente.
      savedChoice = null;
    }

    if (savedChoice === "true") {
      initAnalytics();
      return;
    }

    if (savedChoice === "false") {
      return;
    }

    setIsVisible(true);

    const animationFrame = window.requestAnimationFrame(() => {
      setIsAnimatedIn(true);
    });

    return () => {
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, "true");
    } catch {
      // Ignorado: mantenemos la UX sin romper el flujo.
    }
    initAnalytics();
    setIsVisible(false);
  };

  const handleReject = () => {
    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, "false");
    } catch {
      // Ignorado: mantenemos la UX sin romper el flujo.
    }
    setIsVisible(false);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div
      className={`fixed right-3 bottom-3 left-3 z-[70] mx-auto max-w-3xl rounded-xl border border-[#E5E7EB] bg-white/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_10px_24px_rgba(15,23,42,0.10)] backdrop-blur-sm transition-all duration-500 sm:right-4 sm:bottom-4 sm:left-4 sm:p-4 ${
        isAnimatedIn ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      role="dialog"
      aria-live="polite"
      aria-label="Banner de cookies"
    >
      <div className="flex items-start justify-between gap-2 sm:gap-3">
        <p className="text-xs leading-relaxed text-[#4B5563] sm:text-sm">
          Utilizamos cookies para mejorar tu experiencia y analizar el uso de la web. Puedes aceptar todas las cookies o rechazarlas. Para más información, consulta nuestra{" "}
          <a className="font-semibold text-[#1D4ED8] underline-offset-2 hover:underline" href="/politica-de-cookies">
            Política de Cookies
          </a>
          .
        </p>

        <button
          type="button"
          onClick={handleClose}
          className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[#9CA3AF] transition-colors hover:bg-[#F9FAFB] hover:text-[#4B5563]"
          aria-label="Cerrar banner de cookies"
        >
          ×
        </button>
      </div>

      <div className="mt-3 flex flex-col gap-2 sm:mt-2 sm:flex-row sm:justify-end">
        <button
          type="button"
          onClick={handleReject}
          className="inline-flex h-9 items-center justify-center rounded-lg border border-[#D1D5DB] bg-white px-3.5 text-xs font-semibold text-[#374151] transition-colors hover:bg-[#F9FAFB] sm:text-sm"
        >
          Rechazar
        </button>
        <button
          type="button"
          onClick={handleAccept}
          className="inline-flex h-9 items-center justify-center rounded-lg border border-transparent bg-[#1D4ED8] px-3.5 text-xs font-semibold text-white transition-colors hover:bg-blue-700 sm:text-sm"
        >
          Aceptar todas
        </button>
      </div>
    </div>
  );
}

export default CookieBanner;
