function LegalSection() {
  return (
    <section className="section-pad relative" id="aviso-legal" aria-labelledby="legal-title">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-50/30 to-background" aria-hidden="true" />

      <div className="wrap relative z-10">
        <div className="section-shell max-w-4xl px-8 py-10 sm:px-10 sm:py-12">
          <p className="kicker">Aviso legal</p>
          <h2 id="legal-title" className="section-title">
            Información legal
          </h2>

          <div className="mt-6 space-y-6 break-words text-sm leading-relaxed text-muted-foreground sm:text-base">
            <div>
              <p className="font-semibold text-foreground">Titular de la web.</p>
              <p>Nombre: Javier Martínez.</p>
              <p>
                Email de contacto: <a className="break-all text-[#1D4ED8] hover:underline" href="mailto:hola.tuhogarensubasta@gmail.com" target="_blank" rel="noopener noreferrer">hola.tuhogarensubasta@gmail.com</a>
              </p>
              <p>
                Sitio web: <a className="break-all text-[#1D4ED8] hover:underline" href="https://tuhogarensubasta.com" target="_blank" rel="noopener noreferrer">tuhogarensubasta.com</a>
              </p>
              <p>Dirección: Almería. España.</p>
              <p>Datos identificativos completos disponibles a requerimiento de la autoridad competente.</p>
            </div>

            <div>
              <p className="font-semibold text-foreground">Objeto.</p>
              <p>
                El presente sitio web tiene como finalidad ofrecer información, análisis y servicios relacionados con subastas inmobiliarias.
              </p>
            </div>

            <div>
              <p className="font-semibold text-foreground">Condiciones de uso.</p>
              <p>
                El acceso y uso de esta web atribuye la condición de usuario. El usuario se compromete a hacer un uso adecuado de los contenidos y a no emplearlos para actividades ilícitas o contrarias a la normativa vigente.
              </p>
            </div>

            <div>
              <p className="font-semibold text-foreground">Responsabilidad.</p>
              <p>
                El titular no se hace responsable del mal uso que se realice de los contenidos de esta web. Asimismo, no se garantiza la inexistencia de errores ni la disponibilidad continua del sitio web.
              </p>
            </div>

            <div>
              <p className="font-semibold text-foreground">Propiedad intelectual.</p>
              <p>
                Todos los contenidos de esta web (textos, imágenes, diseño, etc.) son propiedad del titular y están protegidos por la normativa vigente. Queda prohibida su reproducción, distribución o modificación sin autorización expresa del titular.
              </p>
            </div>

            <div>
              <p className="font-semibold text-foreground">Enlaces externos.</p>
              <p>
                Esta web puede contener enlaces a sitios de terceros, sobre los cuales el titular no tiene control ni asume responsabilidad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LegalSection;
