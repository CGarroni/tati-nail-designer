const highlights = [
  "Atendimento individual",
  "Horário agendado",
  "Materiais esterilizados",
  "Ambiente climatizado",
];

export default function Highlights() {
  return (
    <section className="px-4 py-20 md:py-32">
      <div className="mx-auto max-w-7xl rounded-3xl border border-[#f0eae6] bg-[#fffcfb] p-8 md:p-16 shadow-[0_10px_40px_rgba(74,61,61,0.03)]">
        <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:items-center">
          <div className="space-y-5">
            <span className="inline-flex rounded-full bg-[#f4e8e5] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#8a7472]">
              Diferenciais
            </span>

            <h2 className="font-serif text-3xl font-normal leading-tight text-[#4a3d3d] md:text-4xl lg:text-5xl">
              Um atendimento pensado para quem valoriza cuidado, conforto e tranquilidade.
            </h2>

            <p className="text-base leading-relaxed text-[#6b5a5a] md:text-lg">
              Cada detalhe do atendimento é pensado para oferecer mais organização, bem-estar e confiança do início ao fim.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item}
                className="group rounded-2xl border border-[#f4ece8] bg-white px-6 py-6 text-sm font-medium text-[#5c4e4e] shadow-xs transition duration-300 hover:border-[#dfceca] hover:shadow-md md:text-base"
              >
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#cda5a3] transition-transform duration-300 group-hover:scale-150" />
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}