"use client";

import { useEffect } from "react";
import Image from "next/image";

type GalleryLightboxProps = {
  images: {
    src: string;
    alt: string;
  }[];
  currentIndex: number;
  onClose: () => void;
  onPrevious: () => void;
  onNext: () => void;
};

export default function GalleryLightbox({
  images,
  currentIndex,
  onClose,
  onPrevious,
  onNext,
}: GalleryLightboxProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "Escape":
          onClose();
          break;

        case "ArrowLeft":
          onPrevious();
          break;

        case "ArrowRight":
          onNext();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onPrevious, onNext]);

  const image = images[currentIndex];

  return (
    <div
      className="fixed inset-0 z-999 flex items-center justify-center bg-black/80 backdrop-blur-md animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl px-4"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Fechar galeria"
          className="
            absolute
            -top-14
            right-4
            z-20
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-white/10
            text-white
            backdrop-blur
            transition
            hover:bg-white/20
          "
        >
          ✕
        </button>

        <button
          onClick={onPrevious}
          aria-label="Imagem anterior"
          className="
            absolute
            left-2
            top-1/2
            z-20
            -translate-y-1/2
            rounded-full
            bg-white/10
            p-3
            text-white
            backdrop-blur
            transition
            hover:bg-white/20
          "
        >
          ←
        </button>

        <button
          onClick={onNext}
          aria-label="Próxima imagem"
          className="
            absolute
            right-2
            top-1/2
            z-20
            -translate-y-1/2
            rounded-full
            bg-white/10
            p-3
            text-white
            backdrop-blur
            transition
            hover:bg-white/20
          "
        >
          →
        </button>

        <div className="overflow-hidden rounded-4xl bg-white shadow-2xl">
          <div className="relative aspect-4/5 md:aspect-16/10">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority
              sizes="100vw"
              className="object-contain bg-[#faf7f5]"
            />
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-white/80">
          {currentIndex + 1} de {images.length}
        </p>
      </div>
    </div>
  );
}