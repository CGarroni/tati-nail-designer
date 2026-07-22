const highlights = [
	"Atendimento individual",
	"Horário agendado",
	"Materiais esterilizados",
	"Ambiente climatizado",
];

export default function Highlights() {
	return (
		<section className="px-4 py-20 md:py-28">
			<div className="mx-auto max-w-7xl rounded-[40px] bg-[#fffaf8] border border-[#f0e7e4] p-8 md:p-14">
				<div className="grid gap-14 md:grid-cols-[0.95fr_1.05fr] items-center">
					<div className="space-y-6">
						<span className="inline-flex rounded-full bg-[#f5ebe8] px-4 py-2 text-xs tracking-[0.18em] uppercase text-[#9a7d79]">
							Diferenciais
						</span>

						<h2 className="font-serif font-light text-[2.2rem] leading-[1.2] tracking-[0.01em] text-[#a9807d] md:text-[3.25rem]">
							Sua beleza merece um cuidado especial.
						</h2>

						<p className="max-w-xl text-[17px] leading-8 text-[#746464]">
							Um momento preparado para que você se sinta acolhida, confortável
							e confiante, com atenção aos detalhes que fazem toda a diferença
							no resultado final.
						</p>
					</div>

					<div className="grid gap-5 sm:grid-cols-2">
						{highlights.map((item) => (
							<article
								key={item}
								className="
                  rounded-[28px]
                  border
                  border-[#f2e9e6]
                  bg-white
                  p-7
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                "
							>
								<div className="mb-5 h-px w-10 bg-[#d8bbb7]" />

								<h3 className="font-serif text-[1.35rem] font-light leading-snug text-[#4b3d3d]">
									{item}
								</h3>
							</article>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
