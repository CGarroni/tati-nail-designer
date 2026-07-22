const whatsappLink =
  "https://wa.me/5551994383663?text=Olá! Vim pelo site e gostaria de agendar um horário.";

const googleMapsLink =
  "https://www.google.com/maps/search/?api=1&query=R.+Adolfo+Lutz,+860+-+Canudos,+Novo+Hamburgo+-+RS";

const wazeLink =
  "https://waze.com/ul?q=R.%20Adolfo%20Lutz%2C%20860%20-%20Canudos%2C%20Novo%20Hamburgo%20-%20RS&navigate=yes";

const horarios = [
  { dia: "Segunda-feira", horario: "08:00 às 20:00" },
  { dia: "Terça-feira", horario: "08:00 às 20:00" },
  { dia: "Quarta-feira", horario: "08:00 às 20:00" },
  { dia: "Quinta-feira", horario: "08:00 às 20:00" },
  { dia: "Sexta-feira", horario: "08:00 às 20:00" },
  { dia: "Sábado", horario: "09:00 às 17:00" },
  { dia: "Domingo", horario: "Fechado" },
];

export default function Localizacao() {
  return (
    <section
      id="localizacao"
      className="bg-[#fcf8f6] px-4 py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-14 text-center">

          <span className="inline-flex rounded-full bg-[#f5ebe8] px-4 py-2 text-xs uppercase tracking-[0.18em] text-[#9a7d79]">
            Localização
          </span>

          <h2 className="mt-6 font-serif font-light text-[2.2rem] leading-[1.2] text-[#a9807d] md:text-[3.2rem]">
            Um espaço preparado para receber você.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-[17px] leading-8 text-[#6b5a5a]">
            Atendimento com hora marcada em um ambiente acolhedor,
            climatizado e pensado para proporcionar conforto em
            cada visita.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">

          {/* LOCAL */}

          <article className="rounded-[34px] border border-[#efe7e3] bg-white p-10 shadow-[0_15px_45px_rgba(74,61,61,.04)]">

            <div className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f5ebe8] text-xl">
                📍
              </div>

              <div>

                <p className="text-xs uppercase tracking-[0.15em] text-[#9a7d79]">
                  Endereço
                </p>

                <h3 className="mt-1 font-serif text-2xl font-light text-[#a9807d]">
                  Novo Hamburgo • RS
                </h3>

              </div>

            </div>

            <p className="mt-8 text-lg leading-8 text-[#6b5a5a]">
              Rua Adolfo Lutz, 860
              <br />
              Bairro Canudos
            </p>

            <div className="mt-10 flex flex-col gap-4">

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-[#cda5a3] px-8 py-4 text-center text-sm font-medium tracking-wider text-white shadow-[0_15px_30px_rgba(205,165,163,.30)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#c39694]"
              >
                Agendar pelo WhatsApp
              </a>

              <div className="grid gap-3 sm:grid-cols-2">

                <a
                  href={googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-[#e7dbd7] bg-[#faf6f4] px-6 py-3 text-center text-sm font-medium text-[#7c6664] transition hover:bg-[#f4ece8]"
                >
                  Google Maps
                </a>

                <a
                  href={wazeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-[#e7dbd7] bg-[#faf6f4] px-6 py-3 text-center text-sm font-medium text-[#7c6664] transition hover:bg-[#f4ece8]"
                >
                  Waze
                </a>

              </div>

            </div>

          </article>

          {/* HORÁRIOS */}

          <article className="rounded-[34px] border border-[#efe7e3] bg-white p-10 shadow-[0_15px_45px_rgba(74,61,61,.04)]">

            <h3 className="font-serif text-2xl font-light text-[#a9807d]">
              Horário de atendimento
            </h3>

            <div className="mt-8 space-y-5">

              {horarios.map((item) => (

                <div
                  key={item.dia}
                  className="flex items-center justify-between border-b border-[#f3ece9] pb-4"
                >

                  <span className="text-[15px] text-[#6b5a5a]">
                    {item.dia}
                  </span>

                  <span className="font-medium text-[#5c4e4e]">
                    {item.horario}
                  </span>

                </div>

              ))}

            </div>

          </article>

        </div>

      </div>
    </section>
  );
}