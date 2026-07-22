import Image from "next/image";

const whatsappLink =
  "https://wa.me/5551994383663?text=Olá! Vim pelo site e gostaria de agendar um horário.";

export default function About() {
  return (
    <section id="sobre" className="px-4 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2">

        {/* Foto */}
        <div className="overflow-hidden rounded-[36px] border border-[#f0e7e4] bg-white">
          <Image
            src="/galeria/hero-mobile2.png"
            alt="Tati Silva Nail Designer em seu espaço de atendimento"
            width={1536}
            height={2048}
            quality={92}
            sizes="(max-width:768px)100vw,45vw"
            className="h-auto w-full object-cover transition duration-700 hover:scale-[1.02]"
          />
        </div>

        {/* Conteúdo */}
        <div className="space-y-7">

          <span className="inline-flex rounded-full bg-[#f5ebe8] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[#9a7d79]">
            Sobre
          </span>

          <h2 className="font-serif font-light text-[2.2rem] leading-[1.2] tracking-[0.01em] text-[#a9807d] md:text-[3.2rem]">
            Um atendimento pensado para realçar sua beleza.
          </h2>

          <p className="max-w-xl text-[17px] leading-8 text-[#6b5a5a]">
            Sou a Tati Silva, nail designer apaixonada por transformar cada
            atendimento em um momento de cuidado, leveza e bem-estar.
          </p>

          <p className="max-w-xl text-[17px] leading-8 text-[#6b5a5a]">
            Cada detalhe é preparado com carinho para que você se sinta
            acolhida, confortável e saia daqui com unhas elegantes, naturais e
            cheias de personalidade.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              rounded-xl
              border
              border-[#d8bbb7]
              bg-[#f8efec]
              px-7
              py-3.5
              text-sm
              font-medium
              tracking-[0.04em]
              text-[#8f6d69]
              transition-all
              duration-300
              hover:-translate-y-1px
              hover:bg-[#f3e6e2]
            "
          >
            Agendar meu atendimento
          </a>

        </div>

      </div>
    </section>
  );
}