import { baseLanguage } from "../languages";
import { defineField, defineType } from "sanity";

export default defineType({
  type: "document",
  name: "paslaugos",
  title: "Paslaugos",
  preview: {
    select: {
      title: `title.${baseLanguage.id}`,
    },
  },
  fields: [
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "localeString",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "localeSlug",
      description:
        "Pagal jį bus sukurta nuoroda (URL). Pvz: /konsultacijos-porai",
    }),
    defineField({
      name: "truncatedBlurb",
      title: "Prierašas",
      type: "localeText", // TODO: validation for character limit
    }),
    defineField({
      name: "blurb",
      title: "Pilnas aprašas",
      type: "localeEditorial",
    }),
    defineField({
      name: "priceBlurb",
      title: "Kainodaros prierašas",
      type: "localeEditorial",
    }),
    defineField({
      name: "price",
      title: "Kaina",
      type: "object",
      fields: [
        defineField({
          name: "price_1",
          title: "Kaina kai 1 psichoterapeutas (EUR per val.)",
          type: "number",
        }),
        defineField({
          name: "price_2",
          title: "Kaina kai 2 psichoterapeutai (EUR per val.)",
          type: "number",
        }),
      ],
    }),
  ],
});
