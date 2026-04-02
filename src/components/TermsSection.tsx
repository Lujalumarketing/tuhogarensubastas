function TermsSection() {
  return (
    <section className="section-pad relative" id="condiciones-uso" aria-labelledby="terms-title">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-50/30 to-background" aria-hidden="true" />

      <div className="wrap relative z-10">
        <div className="section-shell max-w-4xl px-8 py-10 sm:px-10 sm:py-12">
          <p className="kicker">Condiciones de uso</p>
          <h2 id="terms-title" className="section-title">
            Términos del servicio
          </h2>

          <div className="mt-6 space-y-6 break-words text-sm leading-relaxed text-muted-foreground sm:text-base">
            <div>
              <p className="font-semibold text-foreground">Objeto.</p>
              <p>
                El presente sitio web ofrece información, análisis y acompañamiento estratégico en materia de subastas inmobiliarias.
              </p>
            </div>

            <div>
              <p className="font-semibold text-foreground">Naturaleza del servicio.</p>
              <p>
                Los servicios ofrecidos tienen carácter informativo y estratégico, basados en experiencia y criterios propios. No constituyen asesoramiento legal, fiscal o financiero vinculante.
              </p>
            </div>

            <div>
              <p className="font-semibold text-foreground">Limitación de responsabilidad.</p>
              <p>
                El titular no garantiza resultados en procesos de subasta. Cada operación debe ser analizada de forma individual y el usuario es responsable de las decisiones que tome. Se recomienda, cuando proceda, contar con profesionales especializados.
              </p>
            </div>

            <div>
              <p className="font-semibold text-foreground">Relación con el usuario.</p>
              <p>
                La contratación de servicios no implica la existencia de una relación de asesoramiento legal ni representación jurídica.
              </p>
            </div>

            <div>
              <p className="font-semibold text-foreground">Uso del sitio web.</p>
              <p>
                El usuario se compromete a hacer un uso adecuado de la web y a no emplearla con fines ilícitos.
              </p>
            </div>

            <div>
              <p className="font-semibold text-foreground">Propiedad intelectual.</p>
              <p>
                Todos los contenidos son propiedad del titular y no pueden ser reproducidos sin autorización.
              </p>
            </div>

            <div>
              <p className="font-semibold text-foreground">Modificaciones.</p>
              <p>
                El titular se reserva el derecho de modificar el contenido del sitio web y las presentes condiciones en cualquier momento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TermsSection;
