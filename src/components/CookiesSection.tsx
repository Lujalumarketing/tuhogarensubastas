function CookiesSection() {
  return (
    <section className="section-pad relative" id="politica-cookies" aria-labelledby="cookies-title">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-50/30 to-background" aria-hidden="true" />

      <div className="wrap relative z-10">
        <div className="section-shell max-w-4xl px-8 py-10 sm:px-10 sm:py-12">
          <p className="kicker">Política de cookies</p>
          <h2 id="cookies-title" className="section-title">
            Uso de cookies
          </h2>

          <div className="mt-6 space-y-6 break-words text-sm leading-relaxed text-muted-foreground sm:text-base">
            <div>
              <p className="font-semibold text-foreground">¿Qué son las cookies?</p>
              <p>
                Las cookies son pequeños archivos que se almacenan en tu dispositivo cuando navegas por un sitio web.
              </p>
            </div>

            <div>
              <p className="font-semibold text-foreground">Tipos de cookies utilizadas.</p>
              <p>Este sitio web puede utilizar:</p>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                <li>Cookies técnicas: necesarias para el funcionamiento básico del sitio web.</li>
                <li>Cookies de análisis: permiten conocer el uso del sitio web.</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-foreground">Finalidad.</p>
              <p>
                Las cookies permiten mejorar la experiencia del usuario y analizar el comportamiento de navegación.
              </p>
            </div>

            <div>
              <p className="font-semibold text-foreground">Gestión de cookies.</p>
              <p>
                El usuario puede configurar su navegador para aceptar, bloquear o eliminar cookies, así como para recibir avisos antes de su instalación.
              </p>
            </div>

            <div>
              <p className="font-semibold text-foreground">Desactivación de cookies.</p>
              <p>
                La desactivación de cookies puede afectar al correcto funcionamiento de la web.
              </p>
            </div>

            <div>
              <p className="font-semibold text-foreground">Cookies de terceros.</p>
              <p>
                Este sitio puede utilizar servicios de terceros que instalen cookies para análisis de uso y mejora del servicio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CookiesSection;
