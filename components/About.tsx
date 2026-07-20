import Image from "next/image";

const whatsappLink =
  "https://wa.me/5551994383663?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20atendimentos%20da%20Tati.";

export default function About() {
  return (
    <section id="sobre" className="px-4 py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
        <div className="overflow-hidden rounded-4xl border border-[#e9e3e0] bg-white shadow-sm">
          <Image
            src="/galeria/hero-mobile2.png"
            alt="Tati Silva Nail Designer em seu espaço de atendimento"
            width={1536}
            height={2048}
            quality={92}
            sizes="(max-width: 768px) 100vw, 42vw"
            className="h-auto w-full object-cover"
          />
        </div>

        <div className="space-y-5">
          <span className="inline-flex rounded-md bg-[#ead7d5] px-4 py-2 text-sm text-[#4a3d3d]">
            Sobre a profissional
          </span>

          <h2 className="font-serif text-3xl font-normal leading-tight text-[#4a3d3d] md:text-5xl">
            Cuidado, técnica e delicadeza em cada atendimento.
          </h2>

          <p className="text-base leading-7 text-[#6b5a5a] md:text-lg">
            Sou a Tati Silva, nail designer especializada em valorizar sua beleza com acabamento delicado, técnica e atenção aos detalhes.
          </p>

          <p className="text-base leading-7 text-[#6b5a5a] md:text-lg">
            Cada atendimento acontece de forma mais personalizada, com foco em conforto, organização e um resultado elegante para o seu dia a dia.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-md border border-[#cdbab2] bg-[#f4e8e5] px-6 py-3 text-sm font-semibold text-[#5c4e4e] shadow-[0_0_0_1px_rgba(255,255,255,0.35)_inset] transition hover:border-[#c1aba2] hover:bg-[#efdfdb] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#cdbab2]"
          >
            Conversar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}