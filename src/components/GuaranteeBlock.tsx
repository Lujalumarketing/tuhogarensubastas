function GuaranteeBlock() {
  return (
    <div id="garantia-proteccion" className="relative mt-10 overflow-hidden rounded-3xl border border-blue-100 bg-white p-5 sm:mt-12 sm:px-8 sm:pt-10 sm:pb-8 shadow-sm">
      <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-blue-50/50 blur-3xl" aria-hidden="true" />
      
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
        <p className="kicker mb-3 justify-center">
          <span className="inline-block h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse" />
          Garantía de Continuidad
        </p>
        <h3 className="text-2xl font-extrabold text-[#111827] sm:text-3xl lg:text-4xl tracking-tight leading-[1.15]">
          Si la primera subasta falla, <span className="text-blue-600 block sm:inline mt-1 sm:mt-0">tienes un Plan B cubierto.</span>
        </h3>
        <p className="mt-6 text-[1.05rem] leading-relaxed text-slate-700">
          El mayor miedo es: <span className="italic">«¿Qué pasa si me desaconsejas entrar porque encuentras cargas ocultas? ¿O si finalmente alguien nos supera la puja... tengo que volver a pagarte desde cero para intentarlo con otra?»</span>. 
          <br/><br/>
          La respuesta es rotundamente <strong>NO</strong>.
        </p>
      </div>

      <div className="relative z-10 mt-8 grid gap-4 sm:mt-10 sm:grid-cols-3 sm:gap-5">
        {/* Informe Pro */}
        <div className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50/60 p-6 text-center transition-transform hover:-translate-y-1">
          <h4 className="text-xl font-bold text-slate-900 mb-3">Informe Pro</h4>
          <p className="text-sm text-slate-600 mb-5 flex-grow">Si te desaconsejo pujar en tu primera opción porque detecto demasiados riesgos:</p>
          <div>
            <p className="text-base font-bold text-[#1D4ED8]">Analizo una 2ª vivienda por solo 30€.</p>
            <p className="text-xs text-slate-500 mt-2 font-medium">(Solo me abonas las tasas del nuevo expediente).</p>
          </div>
        </div>

        {/* Elite */}
        <div className="flex flex-col rounded-2xl border border-blue-200 bg-blue-50/50 p-6 text-center shadow-sm relative overflow-hidden transition-transform hover:-translate-y-1 scale-[1.02]">
          <h4 className="text-xl font-bold text-[#1D4ED8] mb-3">Acompañamiento Elite</h4>
          <p className="text-sm text-slate-700 mb-5 flex-grow">Si decidimos participar juntos en la subasta y alguien finalmente nos supera la puja:</p>
          <div>
            <p className="text-base font-bold text-[#1D4ED8]">Tienes cobertura para una 2ª subasta diferente.</p>
            <p className="text-xs text-slate-600 mt-2 font-medium">(Abonando solo los 30€ de tasas del nuevo inmueble).</p>
          </div>
        </div>

        {/* 360 */}
        <div className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50/60 p-6 text-center transition-transform hover:-translate-y-1">
          <h4 className="text-xl font-bold text-slate-900 mb-3">Subasta 360</h4>
          <p className="text-sm text-slate-600 mb-5 flex-grow">El servicio de delegación total premium para buscar rentabilidad segura:</p>
          <div>
            <p className="text-base font-bold text-[#1D4ED8]">Participamos en hasta 3 subastas distintas.</p>
            <p className="text-xs text-slate-500 mt-2 font-medium">(Sin ningún tipo de coste extra añadido entre ellas).</p>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-6 rounded-xl bg-slate-50 border border-slate-100 p-5 shadow-inner sm:mt-8 sm:p-5">
        <h5 className="sm:hidden text-xs uppercase tracking-wider font-bold text-slate-900 mb-5">Resumen Rápido</h5>
        
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-5 sm:gap-4 lg:gap-6 text-left sm:text-center">
          <strong className="hidden sm:inline text-slate-900 uppercase tracking-wider text-xs">Resumen Rápido:</strong> 
          
          <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-1.5">
            <p className="text-[15px] font-bold text-slate-800">Informe Pro</p>
            <p className="text-[14px] sm:text-[15px] text-slate-500 font-medium tracking-tight"><span className="text-slate-300 mr-1.5 font-normal">→</span>2ª opción por 30€</p>
          </div>
          
          <span className="hidden sm:inline text-slate-300">•</span>

          <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-1.5">
            <p className="text-[15px] font-bold text-slate-800">Elite</p>
            <p className="text-[14px] sm:text-[15px] text-slate-500 font-medium tracking-tight"><span className="text-slate-300 mr-1.5 font-normal">→</span>2 subastas (2ª por 30€)</p>
          </div>

          <span className="hidden sm:inline text-slate-300">•</span>

          <div className="flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-1.5">
            <p className="text-[15px] font-bold text-slate-800">Subasta 360</p>
            <p className="text-[14px] sm:text-[15px] text-slate-500 font-medium tracking-tight"><span className="text-slate-300 mr-1.5 font-normal">→</span>Hasta 3 subastas sin coste extra</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuaranteeBlock;
