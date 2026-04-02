import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { WhatsAppIcon } from "./ui/whatsapp-icon";

interface FloatingWhatsAppButtonProps {
  phoneNumber: string;
  defaultMessage?: string;
  showTooltip?: boolean;
  tooltipText?: string;
}

function normalizePhoneNumber(phoneNumber: string): string {
  return phoneNumber.replace(/\D/g, "");
}

function FloatingWhatsAppButton({
  phoneNumber,
  defaultMessage = "Hola, me gustaria recibir mas informacion.",
  showTooltip = true,
  tooltipText = "Habla conmigo por WhatsApp"
}: FloatingWhatsAppButtonProps) {
  const [showHelpBubble, setShowHelpBubble] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const normalizedPhone = useMemo(() => normalizePhoneNumber(phoneNumber), [phoneNumber]);
  const bubbleSessionKey = useMemo(() => `waHelpBubbleClosed:${normalizedPhone}`, [normalizedPhone]);

  const waUrl = useMemo(() => {
    const baseUrl = `https://wa.me/${normalizedPhone}`;

    if (!defaultMessage || !defaultMessage.trim()) {
      return baseUrl;
    }

    return `${baseUrl}?text=${encodeURIComponent(defaultMessage)}`;
  }, [defaultMessage, normalizedPhone]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const isDesktop = window.matchMedia("(min-width: 640px)").matches;
    if (!isDesktop) {
      return;
    }

    try {
      if (window.sessionStorage.getItem(bubbleSessionKey) === "true") {
        return;
      }
    } catch {
      // Si sessionStorage falla, mostramos la burbuja una sola vez en esta carga.
    }

    const timerId = window.setTimeout(() => {
      setShowHelpBubble(true);
    }, 3000);

    return () => {
      window.clearTimeout(timerId);
    };
  }, [bubbleSessionKey]);

  const handleCloseHelpBubble = () => {
    setShowHelpBubble(false);

    try {
      window.sessionStorage.setItem(bubbleSessionKey, "true");
    } catch {
      // Ignorado para no bloquear UX.
    }
  };

  if (!isMounted) {
    return null;
  }

  return createPortal(
    <div className="group fixed right-4 bottom-24 z-[90] sm:right-6 sm:bottom-6">
      {showHelpBubble && (
        <div className="absolute right-0 bottom-full mb-[4.5rem] hidden w-60 rounded-xl border border-[#E5E7EB] bg-white px-4 py-3 shadow-lg sm:block">
          <button
            type="button"
            onClick={handleCloseHelpBubble}
            className="absolute top-2 right-2 inline-flex h-6 w-6 items-center justify-center rounded-full text-[#6B7280] transition-colors hover:bg-[#F3F4F6] hover:text-[#111827]"
            aria-label="Cerrar mensaje de ayuda de WhatsApp"
          >
            ×
          </button>
          <p className="pr-6 text-sm font-medium leading-relaxed text-[#111827]">¿Hablamos por WhatsApp?</p>
        </div>
      )}

      {showTooltip && (
        <div className="pointer-events-none absolute right-0 bottom-full mb-3 hidden whitespace-nowrap rounded-md bg-[#111827] px-3 py-1.5 text-xs font-medium text-white opacity-0 shadow-md transition-all duration-300 group-hover:translate-y-[-2px] group-hover:opacity-100 sm:block">
          {tooltipText}
        </div>
      )}

      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Abrir conversación por WhatsApp"
        className="group relative inline-flex h-[48px] w-[48px] items-center justify-center rounded-full border border-green-500/70 bg-white/90 text-green-500 shadow-lg backdrop-blur transition-all duration-300 hover:scale-105 hover:bg-green-50 sm:h-[56px] sm:w-[56px]"
      >
        <span
          className="pointer-events-none absolute -inset-1 rounded-full border border-green-400/35"
          aria-hidden="true"
        />
        <WhatsAppIcon className="h-6 w-6 sm:h-7 sm:w-7" />
      </a>
    </div>,
    document.body
  );
}

export default FloatingWhatsAppButton;
