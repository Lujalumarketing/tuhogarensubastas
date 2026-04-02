const rows = [
  { label: "Análisis jurídico", values: [true, true, true] },
  { label: "Certificación de cargas", values: [true, true, true] },
  { label: "Recomendación clara", values: [true, true, true] },
  { label: "Acompañamiento", values: [false, true, true] },
  { label: "Participación guiada", values: [false, true, true] },
  { label: "Búsqueda de oportunidades", values: [false, false, true] },
  { label: "Nº de oportunidades", values: ["1", "2", "3"] }
];

const fitRow = [
  "Si ya tienes una subasta y quieres saber si merece la pena",
  "Si quieres analizar y además entrar con más seguridad",
  "Si quieres delegarlo todo y reducir al máximo los errores"
];

const mobileHeaders = ["Informe Pro", "Acomp. Élite", "Subasta 360"];

const mobileRows = [
  { label: "Análisis", values: [true, true, true] },
  { label: "Cargas", values: [true, true, true] },
  { label: "Recomendación", values: [true, true, true] },
  { label: "Acompañamiento", values: [false, true, true] },
  { label: "Participación", values: [false, true, true] },
  { label: "Oportunidades", values: [false, false, true] },
  { label: "Nº opor.", values: ["1", "2", "3"] }
];

function serviceCell(value: boolean | string) {
  if (typeof value === "string") {
    return <span className="font-bold text-[#111827]">{value}</span>;
  }

  return value ? (
    <span className="text-lg font-black text-emerald-600">✔</span>
  ) : (
    <span className="text-lg font-bold text-slate-300">—</span>
  );
}

function ServiceComparisonBlock() {
  return (
    <section className="section-pad relative py-8 sm:py-10 lg:py-14" aria-labelledby="service-comparison-title">
      <div className="wrap relative z-10">
        <div className="mb-5 max-w-3xl">
          <h2 id="service-comparison-title" className="section-title text-3xl sm:text-4xl lg:text-5xl">
            ¿Qué incluye cada servicio?
          </h2>
        </div>

        <article className="rounded-2xl border border-[#E5E7EB] bg-white p-3 shadow-sm md:hidden">
          <div className="overflow-hidden rounded-xl border border-[#EEF2F7]">
            <table className="w-full table-fixed border-collapse text-[11px] leading-tight">
              <thead>
                <tr className="bg-slate-50/90">
                  <th className="w-[40%] px-2 py-2 text-left font-semibold text-slate-600">Comparativa</th>
                  {mobileHeaders.map((header, index) => (
                    <th
                      key={header}
                      className={`w-[20%] px-1 py-2 text-center font-extrabold ${index === 1 ? "text-[#1D4ED8]" : "text-[#111827]"}`}
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {mobileRows.map((row) => (
                  <tr key={row.label} className="border-t border-[#EEF2F7]">
                    <td className="px-2 py-2 font-semibold text-slate-700">{row.label}</td>
                    <td className="px-1 py-2 text-center">{serviceCell(row.values[0])}</td>
                    <td className="bg-blue-50/50 px-1 py-2 text-center">{serviceCell(row.values[1])}</td>
                    <td className="px-1 py-2 text-center">{serviceCell(row.values[2])}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-3 grid grid-cols-3 gap-2 text-[11px] leading-tight">
            <div className="rounded-lg border border-[#EEF2F7] bg-slate-50/70 p-2">
              <p className="font-semibold text-slate-500">Informe Pro</p>
              <p className="mt-1 text-slate-700">{fitRow[0]}</p>
            </div>
            <div className="rounded-lg border border-blue-200 bg-blue-50/40 p-2">
              <p className="font-semibold text-[#1D4ED8]">Acomp. Élite</p>
              <p className="mt-1 text-slate-700">{fitRow[1]}</p>
            </div>
            <div className="rounded-lg border border-[#EEF2F7] bg-slate-50/70 p-2">
              <p className="font-semibold text-slate-500">Subasta 360</p>
              <p className="mt-1 text-slate-700">{fitRow[2]}</p>
            </div>
          </div>
        </article>

        <div className="hidden overflow-x-auto rounded-2xl border border-[#E5E7EB] bg-white shadow-sm md:block">
          <table className="min-w-[760px] w-full border-collapse text-sm sm:text-base">
            <thead>
              <tr className="bg-slate-50/80 text-left">
                <th className="w-[28%] px-4 py-4 font-semibold text-slate-600">Comparativa</th>
                <th className="px-4 py-4 text-center font-bold text-[#111827]">Informe Pro</th>
                <th className="px-4 py-4 text-center font-bold text-[#1D4ED8]">
                  <span className="inline-flex items-center gap-2">
                    Acompañamiento Élite
                    <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[11px] font-extrabold uppercase tracking-wide text-[#1D4ED8]">
                      Más elegido
                    </span>
                  </span>
                </th>
                <th className="px-4 py-4 text-center font-bold text-[#111827]">Subasta 360</th>
              </tr>
            </thead>

            <tbody>
              {rows.map((row) => (
                <tr key={row.label} className="border-t border-[#EEF2F7]">
                  <td className="px-4 py-3.5 font-semibold text-slate-700">{row.label}</td>
                  <td className="px-4 py-3.5 text-center">{serviceCell(row.values[0])}</td>
                  <td className="bg-blue-50/40 px-4 py-3.5 text-center">{serviceCell(row.values[1])}</td>
                  <td className="px-4 py-3.5 text-center">{serviceCell(row.values[2])}</td>
                </tr>
              ))}

              <tr className="border-t border-[#EEF2F7] align-top">
                <td className="px-4 py-4 font-semibold text-slate-700">Para quién es mejor</td>
                <td className="px-4 py-4 text-sm text-slate-600">{fitRow[0]}</td>
                <td className="bg-blue-50/40 px-4 py-4 text-sm text-slate-700">{fitRow[1]}</td>
                <td className="px-4 py-4 text-sm text-slate-600">{fitRow[2]}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default ServiceComparisonBlock;
