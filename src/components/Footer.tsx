import { siteConfig } from "../data/siteConfig";

function Footer() {
  return (
    <footer className="relative border-t border-[#E5E7EB] bg-[#F8FAFC]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(29,78,216,0.05),transparent_60%)]" aria-hidden="true" />
      
      <div className="wrap relative z-10">
        <div className="flex flex-col items-center justify-between gap-4 py-8 text-center sm:flex-row sm:text-left">
          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold text-foreground">
              © 2026 Tu Hogar en Subastas
            </p>
            <p className="text-xs text-muted-foreground">
              Javier Martínez
            </p>
            <p className="text-xs text-muted-foreground">
              Todos los derechos reservados.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-end sm:gap-3">
            <a
              className="group inline-flex items-center gap-2 rounded-xl border border-transparent px-4 py-2 text-sm font-semibold text-muted-foreground transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-[#1D4ED8]"
              href="/aviso-legal"
            >
              Aviso legal
            </a>
            <a
              className="group inline-flex items-center gap-2 rounded-xl border border-transparent px-4 py-2 text-sm font-semibold text-muted-foreground transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-[#1D4ED8]"
              href="/politica-privacidad"
            >
              Política de privacidad
            </a>
            <a
              className="group inline-flex items-center gap-2 rounded-xl border border-transparent px-4 py-2 text-sm font-semibold text-muted-foreground transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-[#1D4ED8]"
              href="/politica-cookies"
            >
              Política de cookies
            </a>
            <a
              className="group inline-flex items-center gap-2 rounded-xl border border-transparent px-4 py-2 text-sm font-semibold text-muted-foreground transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-[#1D4ED8]"
              href="/condiciones-uso"
            >
              Condiciones de uso
            </a>
            <a
              className="group inline-flex items-center gap-2 rounded-xl border border-transparent px-4 py-2 text-sm font-semibold text-muted-foreground transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-[#1D4ED8]"
              href="/condiciones-de-contratacion"
            >
              Condiciones de contratación
            </a>
            <a
              className="group inline-flex items-center gap-2 rounded-xl border border-transparent px-4 py-2 text-sm font-semibold text-muted-foreground transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-[#1D4ED8]"
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="h-4 w-4 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Instagram
            </a>
            <a
              className="group inline-flex items-center gap-2 rounded-xl border border-transparent px-4 py-2 text-sm font-semibold text-muted-foreground transition-all duration-300 hover:border-blue-200 hover:bg-blue-50 hover:text-[#1D4ED8]"
              href={siteConfig.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="h-4 w-4 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.94v5.666H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.063 2.063 0 11.001-4.126 2.063 2.063 0 01-.001 4.126zM7.115 20.452H3.558V9h3.557v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
        
        <div className="border-t border-[#E5E7EB] py-4">
          <p className="text-center text-xs text-muted-foreground">
            Asesoría independiente en subastas inmobiliarias • España.
          </p>
          <p className="mx-auto mt-2 max-w-4xl text-center text-[11px] leading-relaxed text-muted-foreground/85 sm:text-xs">
            Descargo de responsabilidad: Este sitio ofrece información y acompañamiento estratégico de carácter orientativo. No constituye asesoramiento legal, fiscal o financiero vinculante ni garantiza resultados en procesos de subasta. Cada operación debe evaluarse de forma individual y cuando proceda con profesionales especializados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
