import { cn } from "../lib/utils";

type CtaLegalTextVariant = "default" | "whatsapp";

interface CtaLegalTextProps {
  variant?: CtaLegalTextVariant;
  className?: string;
  prefixText?: string;
}

const legalTextByVariant: Record<CtaLegalTextVariant, string> = {
  default: "Al solicitar este servicio aceptas las",
  whatsapp: "Al contactarme aceptas las"
};

function CtaLegalText({ variant = "default", className, prefixText }: CtaLegalTextProps) {
  return (
    <p className={cn("mt-2 text-center text-xs text-gray-600 sm:text-sm", className)}>
      {prefixText ?? legalTextByVariant[variant]}{" "}
      <a
        href="/condiciones-de-contratacion"
        className="text-blue-600 transition-colors duration-200 hover:text-blue-700 hover:underline"
      >
        condiciones de contratación
      </a>
      .
    </p>
  );
}

export default CtaLegalText;
