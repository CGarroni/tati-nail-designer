import Image from "next/image";

const whatsappLink =
  "https://wa.me/5551994383663?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20atendimentos%20da%20Tati.";

export default function Hero() {
  return (
    <section id="topo" className="bg-[#f8f3f1] px-4 pb-16 pt-10 md:pb-24 md:pt-16">
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
        <div className="space-y-6">
          <span className="inline-flex rounded-md bg-[#ead7d5] px-4 py-2 text-sm text-[#4a3d3d]">
            Atendimento com hora marcada em Novo Hamburgo
          </span>

          <div className="space-y-4">
            <h1 className="font-serif text-4xl font-normal leading-tight text-[#4a3d3d] md:text-6xl">
              Realce sua beleza com unhas feitas com cuidado, técnica e acabamento elegante.
            </h1>

            <p className="max-w-xl text-base leading-7 text-[#6b5a5a] md:text-lg">
              Blindagem, esmaltação em gel, alongamento e manutenção com atendimento individual, materiais esterilizados e horário agendado.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-[#b78f8c] bg-[#cda5a3] px-6 py-3 text-center text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.12)_inset] transition hover:border-[#ab817e] hover:bg-[#c49a98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#cda5a3]"
            >
              Agendar no WhatsApp
            </a>

            <a
              href="#servicos"
              className="rounded-md border border-[#cdbab2] bg-[#f4e8e5] px-6 py-3 text-center text-sm font-semibold text-[#5c4e4e] shadow-[0_0_0_1px_rgba(255,255,255,0.35)_inset] transition hover:border-[#c1aba2] hover:bg-[#efdfdb] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#cdbab2]"
            >
              Ver serviços
            </a>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-4xl border border-[#e9e3e0] bg-white shadow-sm">
          <Image
            src="/galeria/hero-desktop2.png"
            alt="Ambiente da Tati Silva Nail Designer"
            width={1536}
            height={2048}
            priority
            quality={92}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="h-full w-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}