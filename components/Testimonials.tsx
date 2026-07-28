import { testimonials } from "@/lib/testimonials";

export default function Testimonials() {
	return (
		<section id="avaliacoes" className="bg-[#fcf8f6] px-4 py-20 md:py-28">
			<div className="mx-auto max-w-7xl">
				{/* Cabeçalho */}

				<div className="mx-auto mb-16 max-w-3xl text-center">
					<span className="inline-flex rounded-full bg-[#ead7d5] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[#9a7d79]">
						Avaliações das Clientes
					</span>

					<h2 className="mt-6 font-serif font-light text-[2.2rem] leading-[1.2] text-[#a9807d] md:text-[3.2rem]">
						O carinho de quem já passou por aqui.
					</h2>

					<p className="mx-auto mt-6 max-w-2xl text-[17px] leading-8 text-[#6b5a5a]">
						Cada atendimento é realizado com dedicação, cuidado e atenção aos
						detalhes. As avaliações das clientes refletem exatamente a
						experiência que busco proporcionar todos os dias.
					</p>
				</div>

				{/* Nota */}

				<div className="mb-10 flex flex-col items-center">
					<div className="text-[22px] leading-none text-[#d4af37] md:text-[28px]">
						★★★★★
					</div>

					<div className="mt-2 font-serif text-[2.35rem] font-light leading-none text-[#a9807d] md:mt-3 md:text-5xl">
						5,0
					</div>

					<p className="mt-2 text-center text-[11px] font-medium uppercase tracking-[0.24em] text-[#9a7d79] md:text-xs">
						Baseado nas avaliações das clientes
					</p>
				</div>

				{/* Cards */}

				<div className="grid gap-6 md:grid-cols-2">
					{testimonials.map((testimonial) => (
						<article
							key={testimonial.id}
							className="
                rounded-[30px]
                border
                border-[#ece3df]
                bg-white
                p-8
                shadow-[0_15px_40px_rgba(74,61,61,0.04)]
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-[0_22px_45px_rgba(74,61,61,0.08)]
              "
						>
							<div className="mb-5 text-[#d4af37] text-xl">
								{"★".repeat(testimonial.rating)}
							</div>

							<p className="leading-8 text-[#6b5a5a] italic">
								&ldquo;{testimonial.review}&rdquo;
							</p>

							<div className="mt-8">
								<h3 className="font-serif text-xl font-light text-[#a9807d]">
									{testimonial.name}
								</h3>

								<p className="mt-1 text-sm text-[#8b7775]">
									Avaliação publicada no Google
								</p>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
