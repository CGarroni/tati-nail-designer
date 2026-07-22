"use client";

import { useState } from "react";
import Image from "next/image";
import GalleryLightbox from "./GalleryLightbox";

type GalleryItem = {
  src: string;
  alt: string;
};

const galleryItems: GalleryItem[] = [
  {
    src: "/galeria/nail3.jpg",
    alt: "Trabalho de unhas com acabamento delicado e elegante",
  },
  {
    src: "/galeria/nail9.jpg",
    alt: "Unhas finalizadas com estilo sofisticado",
  },
  {
    src: "/galeria/nail10.jpg",
    alt: "Detalhes de esmaltação e acabamento profissional",
  },
  {
    src: "/galeria/nail11.jpg",
    alt: "Resultado de unhas com visual refinado",
  },
  {
    src: "/galeria/nail1.jpg",
    alt: "Blindagem ou esmaltação em gel com foco em brilho e uniformidade",
  },
  {
    src: "/galeria/nail6.jpg",
    alt: "Trabalho em unhas com formato e acabamento elegante",
  },
  {
    src: "/galeria/nail12.jpg",
    alt: "Unhas com acabamento delicado e estética bem alinhada",
  },
  {
    src: "/galeria/nail15.jpg",
    alt: "Resultado de unhas com visual sofisticado e harmonioso",
  },
  {
    src: "/galeria/nail2.jpg",
    alt: "Outro ângulo do mesmo trabalho",
  },
  {
    src: "/galeria/nail4.jpg",
    alt: "Trabalho em unhas com estilo delicado",
  },
  {
    src: "/galeria/nail5.jpg",
    alt: "Outro ângulo do acabamento",
  },
  {
    src: "/galeria/nail7.jpg",
    alt: "Visual elegante",
  },
  {
    src: "/galeria/nail8.jpg",
    alt: "Detalhes complementares",
  },
  {
    src: "/galeria/nail13.jpg",
    alt: "Acabamento sofisticado",
  },
  {
    src: "/galeria/nail14.jpg",
    alt: "Detalhes do trabalho",
  },
  {
    src: "/galeria/nail16.jpg",
    alt: "Estética refinada",
  },
  {
    src: "/galeria/nail17.jpg",
    alt: "Acabamento delicado",
  },
];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openImage = (index: number) => {
    setSelectedIndex(index);
  };

  const closeImage = () => {
    setSelectedIndex(null);
  };

  const previousImage = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === 0
        ? galleryItems.length - 1
        : selectedIndex - 1
    );
  };

  const nextImage = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === galleryItems.length - 1
        ? 0
        : selectedIndex + 1
    );
  };

  return (
    <>
      <section
        id="galeria"
        className="px-4 py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl">

          <div className="mx-auto max-w-3xl text-center">

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
              Galeria
            </span>

            <h2
              className="
                mt-6
                font-serif
                font-light
                text-[2.2rem]
                leading-[1.2]
                tracking-[0.01em]
                text-[#a9807d]
                md:text-[3.2rem]
              "
            >
              Cada detalhe revela o cuidado presente em cada atendimento.
            </h2>

            <p
              className="
                mx-auto
                mt-6
                max-w-2xl
                text-[17px]
                leading-8
                text-[#6b5a5a]
              "
            >
              Cada trabalho é realizado com atenção aos detalhes para oferecer
              um resultado delicado, elegante e pensado especialmente para cada
              cliente.
            </p>

          </div>

          <div
            className="
              mt-16
              grid
              grid-cols-2
              gap-5
              md:grid-cols-3
              xl:grid-cols-4
            "
          >
            {galleryItems.map((item, index) => (
              <button
                key={item.src}
                type="button"
                onClick={() => openImage(index)}
                className="
                  group
                  relative
                  aspect-4/5
                  overflow-hidden
                  rounded-[26px]
                  border
                  border-[#efe7e3]
                  bg-white
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width:768px)50vw, (max-width:1280px)33vw,25vw"
                  className="
                    object-cover
                    transition
                    duration-500
                    group-hover:scale-[1.04]
                  "
                />

                <div
                  className="
                    absolute
                    inset-0
                    bg-black/0
                    transition
                    duration-300
                    group-hover:bg-black/10
                  "
                />
								              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedIndex !== null && (
        <GalleryLightbox
          images={galleryItems}
          currentIndex={selectedIndex}
          onClose={closeImage}
          onPrevious={previousImage}
          onNext={nextImage}
        />
      )}
    </>
  );
}