import type { SiteConfig } from "../types/content";

export const siteConfig: SiteConfig = {
  brandName: "Javier Martínez",
  brandTitle: "Tu Hogar en Subastas",
  whatsAppNumber: "34601656135",
  instagramUrl: "https://instagram.com/javiermartinez.subastas",
  linkedinUrl: "https://www.linkedin.com/in/javier-mart%C3%ADnez-s%C3%A1nchez-20985b260",
  founderImagePath: "/foto javi camisa blanca-1536.webp",
  defaultWhatsAppMessage:
    "Hola Javier, quiero información para empezar en subastas con claridad.",
  legalName: "Javier Martínez",
  legalYear: new Date().getFullYear(),
  hero: {
    title: "Invierte en subastas con criterio, sin improvisar.",
    subtitle:
      "Yo también empecé con dudas, sin saber si una subasta era una oportunidad o un riesgo.\n\nEn menos de 2 meses conseguí mi vivienda caso real.\n\nAhora ayudo a personas como tú a hacerlo con más claridad y sin cometer errores.",
    personalProof:
      "Trabajo contigo de forma cercana, explicando cada paso en lenguaje directo y sin letra pequeña.",
    valueBullets: [
      "Análisis profesional antes de pujar",
      "Acompañamiento real durante el proceso",
      "Enfoque en oportunidades que sí merecen la pena"
    ],
    primaryCta: "Hablar por WhatsApp"
  },
  training: {
    title: "Formación completa en subastas — en proceso",
    text: "Estoy creando una formación para que puedas analizar subastas por tu cuenta, entender el proceso completo y tomar decisiones con seguridad. Sin depender de terceros. Sin ir a ciegas.",
    cta: "Quiero acceso prioritario"
  },
  differentiator:
    "Si una subasta no es buena para ti, te lo diré claro aunque no contrates nada. Prefiero que tomes una buena decisión a corto plazo antes que venderte una expectativa que no se cumple.",
  story:
    "Yo también estuve en tu lugar: mucha información suelta, dudas técnicas y miedo a cometer un error caro. Por eso creé Tu Hogar en Subastas. Para que no avances a ciegas y puedas tomar decisiones con criterio y tranquilidad.",
  audience: [
    "Quieres comprar tu vivienda pero sientes que siempre llegas tarde",
    "Buscas oportunidades reales pero no quieres cometer un error caro",
    "Necesitas claridad antes de poner dinero sobre la mesa",
    "Valoras un acompañamiento cercano y honesto"
  ],
  finalCta: {
    title: "Tu siguiente decisión puede cambiarlo todo.",
    text: "Escríbeme por WhatsApp y cuéntame tu caso. Te diré con claridad si lo que estás viendo tiene sentido o no, y cómo deberías plantearlo.",
    button: "Quiero empezar por WhatsApp"
  }
};

export function getWhatsAppUrl(message?: string): string {
  const encoded = encodeURIComponent(message || siteConfig.defaultWhatsAppMessage);
  return `https://wa.me/${siteConfig.whatsAppNumber}?text=${encoded}`;
}
