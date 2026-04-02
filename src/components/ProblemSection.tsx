function ProblemSection() {
  return (
    <section className="relative section-pad" aria-labelledby="problem-title">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-background" aria-hidden="true" />
      
      <div className="wrap relative z-10">
        <div className="linear-shell mx-auto max-w-4xl px-6 py-10 text-center sm:px-10 sm:py-12">
          <div className="inline-flex items-center justify-center rounded-full bg-blue-100/50 border border-blue-200 px-4 py-2 mb-6 shadow-sm">
            <span className="text-sm font-bold text-[#1D4ED8] uppercase tracking-wider">El Problema</span>
          </div>
          
          <h2 id="problem-title" className="section-title text-3xl sm:text-4xl">
            El problema no es encontrar una subasta.
          </h2>
          
          <div className="my-6 flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-blue-300 to-blue-300/40" />
            <div className="h-2 w-2 rounded-full bg-[#1D4ED8] animate-pulse" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent via-blue-300 to-blue-300/40" />
          </div>
          
          <p className="mx-auto max-w-2xl text-xl font-bold sm:text-2xl glow-text">
            El problema es entrar en la equivocada.
          </p>
          
          <p className="mt-6 text-muted-foreground max-w-xl mx-auto">
            Sin el análisis correcto, una subasta puede convertirse en una trampa. 
            Te ayudo a evitarlo con estrategia y claridad.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ProblemSection;
