export type Testimonial = {
  id: number;
  name: string;
  rating: number;
  review: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Lili",
    rating: 5,
    review:
      "Ótimo atendimento e trabalho excelente! É a melhor!!",
  },
  {
    id: 2,
    name: "Henara Rosa",
    rating: 5,
    review:
      "Atendimento excelente! Uma profissional dedicada e atenciosa. Recomendo.",
  },
  {
    id: 3,
    name: "Glaura Nabinger",
    rating: 5,
    review:
      "Amei! Ótimo atendimento!!",
  },
  {
    id: 4,
    name: "Eve Daniele Nardes",
    rating: 5,
    review:
      "Ótima profissional. Trabalho impecável! Amo meus momentos. 🥰",
  },
];