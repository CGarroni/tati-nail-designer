const whatsappLink =
  "https://wa.me/5551994383663?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20atendimentos%20da%20Tati.";

export default function WhatsappButton() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_24px_rgba(37,211,102,0.28)] transition hover:scale-[1.03] hover:bg-[#22c55e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="h-7 w-7 fill-current"
        aria-hidden="true"
      >
        <path d="M19.11 17.19c-.29-.15-1.71-.84-1.98-.94-.26-.1-.45-.15-.64.15-.19.29-.74.94-.91 1.13-.17.2-.34.22-.63.08-.29-.15-1.22-.45-2.32-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.08-.15-.64-1.55-.88-2.12-.23-.55-.47-.47-.64-.48h-.55c-.2 0-.51.08-.78.37-.26.29-1 1-.1 2.43.88 1.44 2.01 2.83 4.59 3.96 2.58 1.13 2.58.75 3.05.7.47-.05 1.52-.62 1.74-1.22.22-.6.22-1.12.15-1.22-.07-.1-.26-.17-.55-.31Z" />
        <path d="M16.03 3.2c-7.02 0-12.71 5.68-12.71 12.69 0 2.24.59 4.42 1.71 6.34L3.2 28.8l6.73-1.76a12.8 12.8 0 0 0 6.1 1.56h.01c7.01 0 12.7-5.69 12.7-12.7 0-3.39-1.32-6.57-3.71-8.96A12.61 12.61 0 0 0 16.03 3.2Zm0 23.25h-.01a10.66 10.66 0 0 1-5.43-1.49l-.39-.23-4 .05 1.08-3.9-.25-.4a10.56 10.56 0 0 1-1.63-5.61c0-5.88 4.78-10.66 10.65-10.66 2.84 0 5.5 1.11 7.51 3.12a10.56 10.56 0 0 1 3.11 7.53c0 5.88-4.78 10.66-10.64 10.66Z" />
      </svg>
    </a>
  );
}