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
    <section id="servicos" className="px-4 py-20 md:py-32 bg-[#faf6f4]/50">
      <div className="mx-auto max-w-7xl space-y-12">
        <div className="max-w-2xl space-y-4">
          <span className="inline-flex rounded-full bg-[#f4e8e5] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#8a7472]">
            Serviços
          </span>

          <h2 className="font-serif text-3xl font-normal leading-tight text-[#4a3d3d] md:text-4xl lg:text-5xl">
            Serviços pensados para unir beleza, cuidado e acabamento elegante.
          </h2>

          <p className="text-base leading-relaxed text-[#6b5a5a] md:text-lg">
            Cada atendimento é realizado com atenção aos detalhes para oferecer uma experiência mais confortável, organizada e visualmente refinada.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {servicos.map((servico) => (
            <article
              key={servico.title}
              className="group rounded-3xl border border-[#f0eae6] bg-white p-8 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#dfceca] hover:shadow-lg"
            >
              <div className="space-y-4">
                <h3 className="font-serif text-2xl font-normal text-[#4a3d3d] group-hover:text-[#a9807d] transition-colors">
                  {servico.title}
                </h3>

                <p className="text-sm leading-relaxed text-[#6b5a5a] md:text-base">
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