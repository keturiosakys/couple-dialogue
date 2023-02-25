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
			name: "kainos",
			title: "Kainos",
			description: "Kainos (tik porų konsultacijoms kol kas)",
			type: "array",
			of: [{ type: "price" }],
			//HACK: show prices only on certain pages
			hidden: ({ document }) => {
				if (document?.slug) {
					if (
						//@ts-ignore
						document?.slug.lt.current === "poros-psichoterapija" ||
						//@ts-ignore
						document?.slug.en.current === "couple-psychotherapy"
					) {
						return false;
					} else {
						return true;
					}
				} else { return false }
			},
		}),
	],
});
