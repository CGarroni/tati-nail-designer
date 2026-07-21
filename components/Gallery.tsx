"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

type GalleryItem = {
	src: string;
	alt: string;
	featured?: boolean;
};

const galleryItems: GalleryItem[] = [
	{
		src: "/galeria/nail3.jpg",
		alt: "Trabalho de unhas com acabamento delicado e elegante",
		featured: true,
	},
	{
		src: "/galeria/nail9.jpg",
		alt: "Unhas finalizadas com estilo sofisticado",
	},
	{
		src: "/galeria/nail10.jpg",
		alt: "Detalhes de esmaltação e acabamento profissional",
	},
	{
		src: "/galeria/nail11.jpg",
		alt: "Resultado de unhas com visual refinado",
	},
	{
		src: "/galeria/nail1.jpg",
		alt: "Blindagem ou esmaltação em gel com foco em brilho e uniformidade",
	},
	{
		src: "/galeria/nail6.jpg",
		alt: "Trabalho em unhas com formato e acabamento elegante",
	},
	{
		src: "/galeria/nail12.jpg",
		alt: "Unhas com acabamento delicado e estética bem alinhada",
	},
	{
		src: "/galeria/nail15.jpg",
		alt: "Resultado de unhas com visual sofisticado e harmonioso",
	},
	{
		src: "/galeria/nail2.jpg",
		alt: "Outro ângulo do mesmo trabalho em unhas com brilho e acabamento refinado",
	},
	{
		src: "/galeria/nail4.jpg",
		alt: "Trabalho em unhas com estilo delicado e acabamento uniforme",
	},
	{
		src: "/galeria/nail5.jpg",
		alt: "Outro ângulo do mesmo trabalho com detalhes do acabamento",
	},
	{
		src: "/galeria/nail7.jpg",
		alt: "Outro ângulo de unhas com visual elegante",
	},
	{
		src: "/galeria/nail8.jpg",
		alt: "Detalhes complementares de um mesmo trabalho em unhas",
	},
	{
		src: "/galeria/nail13.jpg",
		alt: "Outro ângulo de unhas com acabamento sofisticado",
	},
	{
		src: "/galeria/nail14.jpg",
		alt: "Variação do mesmo trabalho com foco nos detalhes",
	},
	{
		src: "/galeria/nail16.jpg",
		alt: "Outro ângulo de unhas com estética refinada",
	},
	{
		src: "/galeria/nail17.jpg",
		alt: "Detalhes finais de um trabalho em unhas com acabamento delicado",
	},
];

export default function Galeria() {
	const [expanded, setExpanded] = useState(false);

	const initialItems = useMemo(() => galleryItems.slice(0, 5), []);
	const extraItems = useMemo(() => galleryItems.slice(5), []);

	return (
		<section id="galeria" className="px-4 py-20 md:py-32 bg-[#faf6f4]/30">
			<div className="mx-auto max-w-7xl space-y-12">
				<div className="max-w-2xl space-y-4">
					<span className="inline-flex rounded-full bg-[#f4e8e5] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#8a7472]">
						Galeria
					</span>

					<h2 className="font-serif text-3xl font-normal leading-tight text-[#4a3d3d] md:text-4xl lg:text-5xl">
						Alguns resultados que refletem cuidado, delicadeza e acabamento.
					</h2>

					<p className="text-base leading-relaxed text-[#6b5a5a] md:text-lg">
						Cada detalhe é pensado para valorizar sua beleza com elegância,
						personalidade e um resultado visual bem finalizado.
					</p>
				</div>

				<div className="grid gap-6 md:grid-cols-12 md:grid-rows-[repeat(2,minmax(240px,1fr))]">
					{initialItems.map((item, index) => {
						const featured = index === 0;

						return (
							<article
								key={item.src}
								className={[
									"group relative overflow-hidden rounded-3xl border border-[#f0eae6] bg-white shadow-xs transition duration-300 hover:shadow-md",
									featured
										? "md:col-span-7 md:row-span-2 min-h-80 md:min-h-125"
										: "md:col-span-5 min-h-64",
								].join(" ")}
							>
								<Image
									src={item.src}
									alt={item.alt}
									fill
									sizes={
										featured
											? "(max-width: 768px) 100vw, 58vw"
											: "(max-width: 768px) 100vw, 35vw"
									}
									className="object-cover transition duration-700 group-hover:scale-105"
								/>
							</article>
						);
					})}
				</div>

				{expanded && (
					<div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pt-2">
						{extraItems.map((item) => (
							<article
								key={item.src}
								className="group relative min-h-72 overflow-hidden rounded-3xl border border-[#f0eae6] bg-white shadow-xs transition duration-300 hover:shadow-md"
							>
								<Image
									src={item.src}
									alt={item.alt}
									fill
									sizes="(max-width: 768px) 100vw, 33vw"
									className="object-cover transition duration-700 group-hover:scale-105"
								/>
							</article>
						))}
					</div>
				)}

				<div className="pt-2 text-center md:text-left">
					<button
						type="button"
						onClick={() => setExpanded((prev) => !prev)}
						className="rounded-full border border-[#dfceca] bg-[#f9f2f0] px-8 py-3.5 text-xs font-semibold uppercase tracking-widest text-[#5c4e4e] transition hover:bg-[#f4e8e5] hover:shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#cdbab2]"
					>
						{expanded ? "Ver menos trabalhos" : "Ver mais trabalhos"}
					</button>
				</div>
			</div>
		</section>
	);
}