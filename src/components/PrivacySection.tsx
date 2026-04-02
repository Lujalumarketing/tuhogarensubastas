function PrivacySection() {
  return (
    <section className="section-pad relative" id="politica-privacidad" aria-labelledby="privacy-title">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-50/30 to-background" aria-hidden="true" />

      <div className="wrap relative z-10">
        <div className="section-shell max-w-4xl px-8 py-10 sm:px-10 sm:py-12">
          <p className="kicker">Política de privacidad</p>
          <h2 id="privacy-title" className="section-title">
            Tratamiento de datos personales
          </h2>

          <div className="mt-6 space-y-6 break-words text-sm leading-relaxed text-muted-foreground sm:text-base">
            <div>
              <p className="font-semibold text-foreground">Responsable del tratamiento.</p>
              <p>Titular: Javier Martínez.</p>
              <p>
                Email: <a className="break-all text-[#1D4ED8] hover:underline" href="mailto:hola.tuhogarensubasta@gmail.com">hola.tuhogarensubasta@gmail.com</a>
              </p>
              <p>
                Web: <a className="break-all text-[#1D4ED8] hover:underline" href="https://tuhogarensubasta.com" target="_blank" rel="noopener noreferrer">tuhogarensubasta.com</a>
              </p>
              <p>Dirección: Almería. España.</p>
              <p>Datos identificativos completos disponibles a requerimiento de la autoridad competente.</p>
            </div>

            <div>
              <p className="font-semibold text-foreground">Finalidad del tratamiento.</p>
              <p>Los datos personales recogidos a través de esta web serán utilizados para:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Atender consultas y solicitudes.</li>
                <li>Gestionar la prestación de servicios.</li>
                <li>Mantener comunicación con el usuario.</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-foreground">Legitimación.</p>
              <p>
                La base legal para el tratamiento es el consentimiento del usuario al facilitar sus datos.
              </p>
            </div>

            <div>
              <p className="font-semibold text-foreground">Conservación de datos.</p>
              <p>
                Los datos se conservarán durante el tiempo necesario para cumplir con la finalidad para la que fueron recabados y durante los plazos legales aplicables.
              </p>
            </div>

            <div>
              <p className="font-semibold text-foreground">Destinatarios.</p>
              <p>No se cederán datos a terceros salvo obligación legal.</p>
            </div>

            <div>
              <p className="font-semibold text-foreground">Derechos del usuario.</p>
              <p>
                El usuario puede ejercer sus derechos de acceso, rectificación, supresión, limitación u oposición enviando un email a: <a className="break-all text-[#1D4ED8] hover:underline" href="mailto:hola.tuhogarensubasta@gmail.com">hola.tuhogarensubasta@gmail.com</a>.
              </p>
            </div>

            <div>
              <p className="font-semibold text-foreground">Seguridad.</p>
              <p>
                Se adoptan las medidas necesarias para garantizar la seguridad de los datos personales.
              </p>
            </div>

            <div>
              <p className="font-semibold text-foreground">Uso de WhatsApp.</p>
              <p>
                Al contactar a través de WhatsApp, el usuario acepta el tratamiento de sus datos conforme a esta política.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PrivacySection;
