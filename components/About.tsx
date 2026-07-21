import Image from "next/image";

const whatsappLink =
  "https://wa.me/5551994383663?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20atendimentos%20da%20Tati.";

export default function About() {
  return (
    <section id="sobre" className="px-4 py-20 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2 lg:gap-16">
        <div className="overflow-hidden rounded-3xl border border-[#f0eae6] bg-white shadow-sm">
          <Image
            src="/galeria/hero-mobile2.png"
            alt="Tati Silva Nail Designer em seu espaço de atendimento"
            width={1536}
            height={2048}
            quality={92}
            sizes="(max-width: 768px) 100vw, 42vw"
            className="h-auto w-full object-cover transition duration-700 hover:scale-[1.02]"
          />
        </div>

        <div className="space-y-6">
          <span className="inline-flex rounded-full bg-[#f4e8e5] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#8a7472]">
            Sobre a profissional
          </span>

          <h2 className="font-serif text-3xl font-normal leading-tight text-[#4a3d3d] md:text-4xl lg:text-5xl">
            Cuidado, técnica e delicadeza em cada atendimento.
          </h2>

          <p className="text-base leading-relaxed text-[#6b5a5a] md:text-lg">
            Sou a Tati Silva, nail designer especializada em valorizar sua beleza com acabamento delicado, técnica e atenção aos detalhes.
          </p>

          <p className="text-base leading-relaxed text-[#6b5a5a]">
            Cada atendimento acontece de forma mais personalizada, com foco em conforto, organização e um resultado elegante para o seu dia a dia.
          </p>

          <div className="pt-2">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-full border border-[#dfceca] bg-[#f9f2f0] px-7 py-3.5 text-xs font-semibold uppercase tracking-widest text-[#5c4e4e] transition hover:bg-[#f4e8e5] hover:shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#cdbab2]"
            >
              Conversar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}