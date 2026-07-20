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
		<section id="galeria" className="px-4 py-16 md:py-24">
			<div className="mx-auto max-w-7xl space-y-10">
				<div className="max-w-2xl space-y-4">
					<span className="inline-flex rounded-md bg-[#ead7d5] px-4 py-2 text-sm text-[#4a3d3d]">
						Galeria
					</span>

					<h2 className="font-serif text-3xl font-semibold leading-tight text-[#4a3d3d] md:text-5xl">
						Alguns resultados que refletem cuidado, delicadeza e acabamento.
					</h2>

					<p className="text-base leading-7 text-[#6b5a5a] md:text-lg">
						Cada detalhe é pensado para valorizar sua beleza com elegância,
						personalidade e um resultado visual bem finalizado.
					</p>
				</div>

				<div className="grid gap-4 md:grid-cols-12 md:grid-rows-[repeat(2,minmax(220px,1fr))]">
					{initialItems.map((item, index) => {
						const featured = index === 0;

						return (
							<article
								key={item.src}
								className={[
									"group relative overflow-hidden rounded-[28px] border border-[#e9e3e0] bg-white shadow-sm",
									featured
										? "md:col-span-7 md:row-span-2 min-h-80"
										: "md:col-span-5 min-h-55",
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
									className="object-cover transition duration-500 group-hover:scale-[1.02]"
								/>
							</article>
						);
					})}
				</div>

				<div className="md:hidden">
					<div className="grid grid-cols-1 gap-4">
						{expanded &&
							extraItems.map((item) => (
								<article
									key={item.src}
									className="group relative min-h-80 overflow-hidden rounded-3xl border border-[#e9e3e0] bg-white shadow-sm"
								>
									<Image
										src={item.src}
										alt={item.alt}
										fill
										sizes="100vw"
										className="object-cover transition duration-500 group-hover:scale-[1.02]"
									/>
								</article>
							))}
					</div>
				</div>

				<div className="hidden md:block">
					{expanded && (
						<div className="grid gap-4 md:grid-cols-3">
							{extraItems.map((item) => (
								<article
									key={item.src}
									className="group relative min-h-65 overflow-hidden rounded-[28px] border border-[#e9e3e0] bg-white shadow-sm"
								>
									<Image
										src={item.src}
										alt={item.alt}
										fill
										sizes="(max-width: 768px) 100vw, 33vw"
										className="object-cover transition duration-500 group-hover:scale-[1.02]"
									/>
								</article>
							))}
						</div>
					)}
				</div>

				<div>
					<button
						type="button"
						onClick={() => setExpanded((prev) => !prev)}
						className="rounded-md border border-[#cdbab2] bg-[#f4e8e5] px-6 py-3 text-sm font-semibold text-[#5c4e4e] shadow-[0_0_0_1px_rgba(255,255,255,0.35)_inset] transition hover:border-[#c1aba2] hover:bg-[#efdfdb] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#cdbab2]"
					>
						{expanded ? "Ver menos" : "Ver mais trabalhos"}
					</button>
				</div>
			</div>
		</section>
	);
}
