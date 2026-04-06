import type { ServiceItem } from "../types/content";

export const services: ServiceItem[] = [
  {
    id: "informe-pro",
    name: "Informe Pro",
    trademark: "TM",
    description: "Analizo la subasta por ti y te digo claro si entrar o no.",
    bullets: [
      "Detecto cargas ocultas antes de que sea tarde",
      "Te explico exactamente qué estás comprando",
      "Verifico que compras la vivienda con plena propiedad",
      "Calculo el valor real para evitar sobreprecios",
      "Te digo exactamente cuánto debes pujar"
    ],
    priceBefore: "150 EUR",
    priceNow: "99 EUR",
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
      "Servicio 'Informe Pro' totalmente incluido",
      "Diseño tu plan de puja estratégico al milímetro",
      "Te acompaño paso a paso hasta que tengas la vivienda",
      "Resuelvo tus dudas urgentes en tiempo real"
    ],
    priceBefore: "398 EUR",
    priceNow: "199 EUR + 3%",
    priceReinforcement: "Acompañamiento real durante todo el proceso.",
    microcopy: "Ir acompañado marca la diferencia entre el éxito y cometer un error irreparable.",
    urgency: "Plazas limitadas para garantizar seguimiento real.",
    notes: [
      "El 3% sobre el valor se aplica solo si resultas adjudicatario definitivo (cuando la vivienda pase formalmente a tu nombre)."
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
      "Servicio 'Informe Pro' totalmente incluido",
      "Busco e identifico oportunidades rentables por ti",
      "Filtro proactivamente todo lo que implica riesgos",
      "Gestiono todo el proceso técnico y burocrático",
      "Tú decides si te encaja, yo lo ejecuto y resuelvo"
    ],
    priceBefore: "798 EUR",
    priceNow: "499 EUR + 4%",
    priceReinforcement: "Servicio completo para evitar errores críticos.",
    microcopy: "La vía más rápida y segura para quien valora exclusivamente su tiempo y paz mental.",
    urgency: "Solo acepto 2 clientes al mes para mantener exclusividad.",
    notes: [
      "El 4% sobre el valor se aplica solo si resultas adjudicatario definitivo (cuando la vivienda pase formalmente a tu nombre)."
    ],
    badge: "Delegación total",
    cta: "Quiero delegarlo todo"
  },
  {
    id: "sesion-estrategica",
    name: "Sesión Estratégica 1:1",
    trademark: "TM",
    description: "Resuelve tu caso concreto y entiende cómo actuar antes de dar el paso.",
    bullets: [
      "Aclaro tu mente y definimos tu próxima jugada",
      "Trazo un plan de acción seguro y a tu medida",
      "Pregunta cualquier duda técnica, te respondo claro",
      "2 horas exclusivas centradas solo en tu caso"
    ],
    priceBefore: "300 EUR",
    priceNow: "150 EUR",
    priceReinforcement: "Avanza seguro en lugar de improvisar perdiendo dinero.",
    microcopy: "Claridad profunda e inmediata para salir del bloqueo y avanzar con seguridad.",
    notes: [],
    badge: "Consulta puntual",
    cta: "Reservar sesión estratégica"
  }
];
