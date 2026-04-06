import type { ServiceItem } from "../types/content";

export const services: ServiceItem[] = [
  {
    id: "informe-pro",
    name: "Informe Pro",
    trademark: "TM",
    description: "Analizo la subasta por ti y te digo claro si entrar o no.",
    bullets: [
      "Analizo la subasta concreta que tú has encontrado",
      "Detecto cargas ocultas antes de que sea tarde",
      "Te explico exactamente qué estás comprando",
      "Verifico que compras la vivienda con plena propiedad",
      "Calculo el valor real para evitar sobreprecios",
      "Te digo exactamente cuánto debes pujar"
    ],
    priceBefore: "150 EUR",
    priceNow: "99 EUR",
    ivaIncluded: true,
    priceReinforcement: "Un error en subasta puede costarte miles de euros.",
    microcopy: "Decisión informada > perder dinero por no saber. Sin tecnicismos. Sin dudas. Solo decisión.",
    notes: [
      "Este tipo de análisis lo ofrecen otras empresas desde 300 EUR."
    ],
    badge: "Solo análisis",
    cta: "Analizar mi subasta"
  },
  {
    id: "acompanamiento-elite",
    name: "Acompañamiento Elite",
    trademark: "TM",
    description: "La opción más elegida para evitar errores.",
    bullets: [
      "Servicio 'Informe Pro' totalmente incluido, y además:",
      "Partimos de la subasta que tú has identificado y la optimizamos contigo",
      "Diseño tu plan de puja estratégico al milímetro",
      "Te acompaño paso a paso hasta que tengas la vivienda",
      "Resuelvo tus dudas urgentes en tiempo real"
    ],
    priceBefore: "398 EUR",
    priceNow: "199 EUR + 3%",
    ivaIncluded: true,
    priceReinforcement: "Acompañamiento real durante todo el proceso.",
    microcopy: "Ir acompañado marca la diferencia entre el éxito y cometer un error irreparable.",
    urgency: "Plazas limitadas para garantizar seguimiento real.",
    notes: [
      "El 3% sobre el valor se aplica solo si resultas adjudicatario definitivo (cuando la autoridad gestora de la subasta la inscriba a tu nombre)."
    ],
    badge: "Recomendado",
    isRecommended: true,
    cta: "Quiero entrar con acompañamiento"
  },
  {
    id: "subasta-360",
    name: "Subasta 360",
    trademark: "TM",
    description: "Para quien quiere delegarlo todo y minimizar riesgos al máximo.",
    bullets: [
      "Servicio 'Informe Pro' totalmente incluido, y además:",
      "Busco e identifico oportunidades rentables por ti",
      "Filtro proactivamente todo lo que implica riesgos",
      "Gestiono todo el proceso técnico y burocrático",
      "Tú decides si te encaja, yo lo ejecuto y resuelvo"
    ],
    priceBefore: "798 EUR",
    priceNow: "499 EUR + 4%",
    ivaIncluded: true,
    priceReinforcement: "Servicio completo para evitar errores críticos.",
    microcopy: "La vía más rápida y segura para quien valora exclusivamente su tiempo y paz mental.",
    urgency: "Solo acepto 2 clientes al mes para mantener exclusividad.",
    notes: [
      "El 4% sobre el valor se aplica solo si resultas adjudicatario definitivo (cuando la autoridad gestora de la subasta la inscriba a tu nombre)."
    ],
    badge: "Delegación total",
    cta: "Quiero delegarlo todo"
  },
  {
    id: "sesion-estrategica",
    name: "Sesión Estratégica 1:1",
    trademark: "™",
    description: "Analizo tu caso concreto y te digo si puedes entrar en subastas, qué opciones encajan contigo y cómo deberías enfocarlo.",
    bullets: [
      "Analizo tu situación económica real y tu objetivo de vivienda",
      "Valoro si puedes entrar en subastas sin ponerte en riesgo",
      "Definimos qué tipo de subastas encajan contigo",
      "Te marco los pasos que deberías dar a partir de ahora",
      "Resuelvo tus dudas con tu caso ya estudiado previamente"
    ],
    priceBefore: "300 EUR",
    priceNow: "150 EUR",
    ivaIncluded: true,
    priceReinforcement: "Avanza seguro en lugar de improvisar perdiendo dinero.",
    microcopy: "No es una llamada genérica: es un diagnóstico personalizado para saber si este camino tiene sentido en tu situación.",
    notes: [
      "👉 Sesión privada con análisis previo de tu caso (duración aproximada: 60-90 min).",
      "Antes de la sesión te enviaré un formulario previo para conocer tu situación y aprovechar mejor el tiempo."
    ],
    badge: "Consulta puntual",
    cta: "Reservar sesión estratégica"
  }
];
