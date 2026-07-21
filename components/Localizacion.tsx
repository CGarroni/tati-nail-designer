const whatsappLink =
  "https://wa.me/5551994383663?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20atendimentos%20da%20Tati.";
const googleMapsLink =
  "https://www.google.com/maps/search/?api=1&query=R.+Adolfo+Lutz,+860+-+Canudos,+Novo+Hamburgo+-+RS";

const wazeLink =
  "https://waze.com/ul?q=R.%20Adolfo%20Lutz%2C%20860%20-%20Canudos%2C%20Novo%20Hamburgo%20-%20RS&navigate=yes";

const horarios = [
  { dia: "Segunda-feira", hora: "08:00 – 20:00" },
  { dia: "Terça-feira", hora: "08:00 – 20:00" },
  { dia: "Quarta-feira", hora: "08:00 – 20:00" },
  { dia: "Quinta-feira", hora: "08:00 – 20:00" },
  { dia: "Sexta-feira", hora: "08:00 – 20:00" },
  { dia: "Sábado", hora: "09:00 – 17:00" },
  { dia: "Domingo", hora: "Fechado" },
];

export default function Localizacao() {
  return (
    <section id="localizacao" className="px-4 py-20 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-[#f0eae6] bg-white p-8 md:p-10 shadow-xs flex flex-col justify-between">
          <div>
            <span className="inline-flex rounded-full bg-[#f4e8e5] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#8a7472]">
              Localização
            </span>

            <h2 className="mt-6 font-serif text-3xl font-normal leading-tight text-[#4a3d3d] md:text-4xl">
              Atendimento em Novo Hamburgo com conforto e praticidade.
            </h2>

            <p className="mt-4 text-base leading-relaxed text-[#6b5a5a]">
              R. Adolfo Lutz, 860 - Canudos, Novo Hamburgo - RS
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3.5">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#cda5a3] px-6 py-3.5 text-center text-xs font-semibold uppercase tracking-widest text-white shadow-sm transition hover:bg-[#c49a98] hover:shadow-md"
            >
              Agendar no WhatsApp
            </a>

            <div className="flex flex-col gap-3.5 sm:flex-row">
              <a
                href={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-full border border-[#dfceca] bg-[#f9f2f0] px-6 py-3.5 text-center text-xs font-semibold uppercase tracking-widest text-[#5c4e4e] transition hover:bg-[#f4e8e5]"
              >
                Google Maps
              </a>

              <a
                href={wazeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-full border border-[#dfceca] bg-[#f9f2f0] px-6 py-3.5 text-center text-xs font-semibold uppercase tracking-widest text-[#5c4e4e] transition hover:bg-[#f4e8e5]"
              >
                Waze
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-[#f0eae6] bg-white p-8 md:p-10 shadow-xs">
          <span className="inline-flex rounded-full bg-[#f4e8e5] px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#8a7472]">
            Horário de atendimento
          </span>

          <ul className="mt-6 space-y-4">
            {horarios.map((item) => (
              <li
                key={item.dia}
                className="border-b border-[#f8f4f2] pb-3.5 flex flex-col sm:flex-row sm:justify-between sm:items-center text-sm md:text-base gap-1 sm:gap-0"
              >
                <span className="text-[#6b5a5a]">{item.dia}</span>
                <span className="font-medium text-[#4a3d3d] tracking-wide">{item.hora}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}