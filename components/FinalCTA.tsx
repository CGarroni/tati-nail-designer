const whatsappLink =
  "https://wa.me/5551994383663?text=Olá! Vim pelo site e gostaria de agendar um horário.";

export default function FinalCTA() {
  return (
    <section className="px-4 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">

        <div
          className="
            rounded-[40px]
            border
            border-[#efe7e3]
            bg-[#fffaf8]
            px-8
            py-14
            text-center
            shadow-[0_18px_50px_rgba(74,61,61,0.05)]
            md:px-20
          "
        >

          <span
            className="
              inline-flex
              rounded-full
              bg-[#f5ebe8]
              px-4
              py-2
              text-xs
              uppercase
              tracking-[0.18em]
              text-[#9a7d79]
            "
          >
            Agende seu horário
          </span>

          <h2
            className="
              mt-7
              font-serif
              font-light
              text-[2.2rem]
              leading-[1.2]
              tracking-[0.01em]
              text-[#a9807d]
              md:text-[3.4rem]
            "
          >
            Sua beleza merece um momento só seu.
          </h2>

          <p
            className="
              mx-auto
              mt-7
              max-w-2xl
              text-[17px]
              leading-8
              text-[#6b5a5a]
            "
          >
            Reserve um horário e desfrute de um atendimento
            realizado com calma, dedicação e atenção aos
            mínimos detalhes para valorizar ainda mais sua beleza.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-10
              inline-flex
              items-center
              justify-center
              rounded-xl
              bg-[#cda5a3]
              px-8
              py-4
              text-sm
              font-medium
              tracking-wider
              text-white
              shadow-[0_18px_35px_rgba(205,165,163,0.30)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#c39694]
            "
          >
            Agendar pelo WhatsApp
          </a>

        </div>
      </div>
    </section>
  );
}