function ContractingSection() {
  return (
    <section
      className="section-pad relative"
      id="condiciones-contratacion"
      aria-labelledby="contracting-title"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-50/30 to-background" aria-hidden="true" />

      <div className="wrap relative z-10">
        <div className="section-shell max-w-4xl px-8 py-10 sm:px-10 sm:py-12">
          <p className="kicker">Condiciones de contratación</p>
          <h2 id="contracting-title" className="section-title">
            Condiciones de contratación
          </h2>

          <div className="mt-6 space-y-6 break-words text-sm leading-relaxed text-muted-foreground sm:text-base">
            <div>
              <p className="font-semibold text-foreground">1) Objeto del servicio.</p>
              <p>
                Estas condiciones regulan la contratación de los servicios profesionales ofrecidos en esta web por Javier Martínez, marca Tu Hogar en Subastas.
                Los servicios están orientados a análisis estratégico, acompañamiento y formación práctica en subastas inmobiliarias.
              </p>
              <p>
                Servicios actuales: Informe Pro (análisis de subasta), Acompañamiento en subastas, Subasta 360 y Sesión Estratégica 1:1.
              </p>
            </div>

            <div>
              <p className="font-semibold text-foreground">2) Proceso de contratación.</p>
              <p>
                La contratación se realiza por contacto directo (principalmente WhatsApp o email), donde se define el alcance del servicio,
                la información necesaria, plazos estimados y precio aplicable.
              </p>
              <p>
                El servicio se considera confirmado cuando el cliente acepta expresamente estas condiciones y se realiza el pago acordado,
                total o parcial según el servicio.
              </p>
            </div>

            <div>
              <p className="font-semibold text-foreground">3) Precios y forma de pago.</p>
              <p>
                Los precios vigentes son los publicados en la web o los comunicados por escrito al cliente antes de contratar.
                Cualquier coste adicional no previsto se informará previamente para su aceptación.
              </p>
              <p>
                La forma de pago, plazos y condiciones específicas (incluyendo porcentajes variables por éxito, cuando aplique)
                se pactarán por escrito antes de iniciar la prestación.
              </p>
            </div>

            <div>
              <p className="font-semibold text-foreground">4) Condiciones de prestación del servicio.</p>
              <p>
                El cliente se compromete a facilitar información veraz, completa y en plazo. La calidad del análisis y del acompañamiento
                depende directamente de la documentación recibida y de la situación real del expediente.
              </p>
              <p>
                Los plazos comunicados son estimaciones razonables y pueden variar por complejidad del caso, volumen de trabajo,
                respuesta de terceros o cambios en el procedimiento de subasta.
              </p>
            </div>

            <div>
              <p className="font-semibold text-foreground">5) Limitación de responsabilidad.</p>
              <p>
                El servicio tiene carácter informativo y estratégico basado en experiencia profesional. No constituye asesoramiento legal,
                fiscal ni financiero vinculante, ni sustituye la intervención de abogados, procuradores, técnicos o asesores especializados.
              </p>
              <p>
                Cada subasta depende de múltiples factores externos (cargas, estado del inmueble, situación posesoria, trámites administrativos,
                pujas de terceros y cambios normativos o procesales), por lo que el prestador no asume responsabilidad por resultados concretos,
                adjudicación final, rentabilidad, costes sobrevenidos o decisiones adoptadas por el cliente.
              </p>
              <p>
                La decisión final de pujar, no pujar o continuar una operación corresponde exclusivamente al cliente, bajo su propia responsabilidad.
              </p>
            </div>

            <div>
              <p className="font-semibold text-foreground">6) No garantía de resultados.</p>
              <p>
                No se garantiza la obtención de vivienda, adjudicación, ahorro económico, rentabilidad ni resultado determinado.
                Se garantiza únicamente la prestación diligente del servicio contratado dentro del alcance acordado.
              </p>
            </div>

            <div>
              <p className="font-semibold text-foreground">7) Cancelación y devoluciones.</p>
              <p>
                De acuerdo con la normativa de consumidores, el usuario dispone de un derecho de desistimiento de 14 días naturales.
              </p>
              <p>
                No obstante, al tratarse de servicios personalizados de análisis y acompañamiento en subastas inmobiliarias, el cliente acepta expresamente que la prestación del servicio pueda iniciarse antes de la finalización de dicho plazo.
              </p>
              <p>
                En consecuencia, una vez iniciado el servicio, el cliente pierde su derecho de desistimiento y no procederá devolución total.
              </p>
              <p>
                Si el cliente cancela antes del inicio efectivo del servicio, podrá solicitar devolución, descontando en su caso gastos de gestión o reservas de agenda.
              </p>
              <p>
                Si el servicio ya se ha iniciado, se podrá valorar una devolución parcial únicamente sobre tareas no ejecutadas, a criterio del prestador y según el estado real del trabajo.
              </p>
            </div>

            <div>
              <p className="font-semibold text-foreground">8) Protección legal del prestador.</p>
              <p>
                El contenido, metodología, documentación y materiales entregados son propiedad intelectual del titular.
                Queda prohibida su reproducción, cesión o distribución a terceros sin autorización expresa.
              </p>
              <p>
                El prestador podrá suspender o finalizar la prestación si detecta uso fraudulento, ocultación de información relevante,
                trato inadecuado o incumplimiento de estas condiciones por parte del cliente.
              </p>
            </div>

            <div>
              <p className="font-semibold text-foreground">9) Modificación de condiciones.</p>
              <p>
                Estas condiciones pueden actualizarse en cualquier momento para adaptarse a cambios legales, operativos o del servicio.
                La versión aplicable será la vigente en la fecha de contratación.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContractingSection;
