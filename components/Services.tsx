const servicos = [
  {
    title: "Blindagem",
    description:
      "Mais resistência e acabamento uniforme para unhas com aparência bonita por mais tempo.",
  },
  {
    title: "Esmaltação em gel",
    description:
      "Brilho duradouro, secagem prática e resultado elegante para a rotina do dia a dia.",
  },
  {
    title: "Alongamento",
    description:
      "Mais presença, formato bem definido e acabamento pensado para valorizar suas mãos.",
  },
  {
    title: "Manutenção",
    description:
      "Cuidados periódicos para preservar a estética, o conforto e a durabilidade do resultado.",
  },
  {
    title: "Banho em gel",
    description:
      "Uma opção delicada para fortalecer e realçar as unhas com visual mais alinhado.",
  },
  {
    title: "Decoração",
    description:
      "Detalhes que trazem personalidade ao atendimento sem perder elegância e harmonia.",
  },
];

export default function Servicos() {
  return (
    <section id="servicos" className="px-4 py-16 md:py-24">
      <div className="mx-auto max-w-7xl space-y-10">
        <div className="max-w-2xl space-y-4">
          <span className="inline-flex rounded-md bg-[#ead7d5] px-4 py-2 text-sm text-[#4a3d3d]">
            Serviços
          </span>

          <h2 className="font-serif text-3xl font-normal leading-tight text-[#4a3d3d] md:text-5xl">
            Serviços pensados para unir beleza, cuidado e acabamento elegante.
          </h2>

          <p className="text-base leading-7 text-[#6b5a5a] md:text-lg">
            Cada atendimento é realizado com atenção aos detalhes para oferecer uma experiência mais confortável, organizada e visualmente refinada.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {servicos.map((servico) => (
            <article
              key={servico.title}
              className="rounded-3xl border border-[#e9e3e0] bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="space-y-3">
                <h3 className="font-serif text-2xl font-normal text-[#4a3d3d]">
                  {servico.title}
                </h3>

                <p className="text-sm leading-7 text-[#6b5a5a] md:text-base">
                  {servico.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}