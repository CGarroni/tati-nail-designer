import Image from "next/image";

const whatsappLink =
	"https://wa.me/5551994383663?text=Olá! Vim pelo site e gostaria de agendar um horário.";

export default function Hero() {
	return (
		<section id="topo" className="relative overflow-hidden bg-[#f4ece8]">
			<div className="relative hidden xl:block min-h-[92vh]">
				<Image
					src="/galeria/nail-banner-desktop.png"
					alt="Hero desktop da Tati Silva Nail Designer"
					fill
					priority
					sizes="100vw"
					className="object-cover object-center"
				/>

				<a
					href={whatsappLink}
					target="_blank"
					rel="noopener noreferrer"
					className="
            absolute z-20
            left-[10%] top-[82%]
            xl:left-[15%] xl:top-[86%]
            2xl:left-[17%] 2xl:top-[88%]
            inline-flex min-h-13 items-center justify-center
            rounded-md bg-[#c99384] px-7 py-3
            text-sm font-semibold tracking-[0.04em] text-white
            shadow-[0_14px_30px_rgba(201,147,132,0.28)]
            transition hover:bg-[#bc8576]
            focus-visible:outline-none focus-visible:ring-2
            focus-visible:ring-[#c99384] focus-visible:ring-offset-2
          "
				>
					Agendar horário
				</a>
			</div>

			<div className="relative hidden md:block xl:hidden min-h-[78vh]">
				<Image
					src="/galeria/nail-banner-tablet.png"
					alt="Hero tablet da Tati Silva Nail Designer"
					fill
					priority
					sizes="100vw"
					className="object-cover object-center"
				/>

				<a
					href={whatsappLink}
					target="_blank"
					rel="noopener noreferrer"
					className="
            absolute z-20
            left-[10%] top-[82%]
            inline-flex min-h-12.5 items-center justify-center
            rounded-md bg-[#c99384] px-6 py-3
            text-sm font-semibold tracking-[0.04em] text-white
            shadow-[0_14px_30px_rgba(201,147,132,0.24)]
            transition hover:bg-[#bc8576]
            focus-visible:outline-none focus-visible:ring-2
            focus-visible:ring-[#c99384] focus-visible:ring-offset-2
          "
				>
					Agendar horário
				</a>
			</div>

			<div className="md:hidden bg-[#f4ece8]">
				<div className="relative min-h-[68vh]">
					<Image
						src="/galeria/nail-banner-mobile.png"
						alt="Hero mobile da Tati Silva Nail Designer"
						fill
						priority
						sizes="100vw"
						className="object-cover object-top"
					/>
				</div>

				<div className="relative z-10 bg-[#f4ece8] px-4 pb-8 pt-4">
					<a
						href={whatsappLink}
						target="_blank"
						rel="noopener noreferrer"
						className="
              flex min-h-13 w-full items-center justify-center
              rounded-md bg-[#c99384] px-6 py-3
              text-sm font-semibold tracking-[0.04em] text-white
              shadow-[0_14px_30px_rgba(201,147,132,0.24)]
              transition hover:bg-[#bc8576]
              focus-visible:outline-none focus-visible:ring-2
              focus-visible:ring-[#c99384] focus-visible:ring-offset-2
            "
					>
						Agendar horário
					</a>
				</div>
			</div>
		</section>
	);
}
