const highlights = [
  "Atendimento individual",
  "Horário agendado",
  "Materiais esterilizados",
  "Ambiente climatizado",
];

export default function Highlights() {
  return (
    <section className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-7xl rounded-4xl border border-[#eadfdb] bg-[#fffaf8] p-8 md:p-12">
        <div className="grid gap-6 md:grid-cols-[0.95fr_1.05fr] md:items-center">
          <div className="space-y-4">
            <span className="inline-flex rounded-md bg-[#ead7d5] px-4 py-2 text-sm text-[#4a3d3d]">
              Diferenciais
            </span>

            <h2 className="font-serif text-3xl font-normal leading-tight text-[#4a3d3d] md:text-5xl">
              Um atendimento pensado para quem valoriza cuidado, conforto e tranquilidade.
            </h2>

            <p className="text-base leading-7 text-[#6b5a5a] md:text-lg">
              Cada detalhe do atendimento é pensado para oferecer mais organização, bem-estar e confiança do início ao fim.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-[#efe7e3] bg-white px-5 py-5 text-sm font-medium text-[#5c4e4e] shadow-sm md:text-base"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}