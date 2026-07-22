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
    <section id="servicos" className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-7xl">

        <div className="max-w-3xl space-y-6">

          <span className="inline-flex rounded-full bg-[#f5ebe8] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[#9a7d79]">
            Serviços
          </span>

          <h2 className="font-serif font-light text-[2.2rem] leading-[1.2] tracking-[0.01em] text-[#a9807d] md:text-[3.2rem]">
            Cuidados pensados para valorizar sua beleza.
          </h2>

          <p className="max-w-2xl text-[17px] leading-8 text-[#6b5a5a]">
            Cada atendimento é realizado com atenção aos detalhes para oferecer
            unhas elegantes, durabilidade e um resultado que combina com seu
            estilo e sua rotina.
          </p>

        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {servicos.map((servico) => (
            <article
              key={servico.title}
              className="
                group
                rounded-[30px]
                border
                border-[#f0e7e4]
                bg-white
                p-8
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#e2cfca]
                hover:shadow-[0_18px_40px_rgba(74,61,61,0.06)]
              "
            >
              <div className="mb-6 h-px w-12 bg-[#d8bbb7]" />

              <h3 className="font-serif font-light text-[1.7rem] text-[#a9807d]">
                {servico.title}
              </h3>

              <p className="mt-4 text-[16px] leading-8 text-[#6b5a5a]">
                {servico.description}
              </p>
            </article>
          ))}

        </div>

      </div>
    </section>
  );
}