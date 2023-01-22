import { baseLanguage } from "../languages";

export default {
	type: "document",
	name: "paslaugos",
	title: "Paslaugos",
	preview: {
		select: {
			title: `title.${baseLanguage.id}`,
		},
	},
	fields: [
		{
			name: "order",
			title: "Order",
			type: "number",
			hidden: true,
		},
		{
			name: "title",
			title: "Title",
			type: "localeString",
		},
		{
			name: "slug",
			title: "Slug",
			type: "localeSlug",
			description:
				"Pagal jį bus sukurta nuoroda (URL). Pvz: /konsultacijos-porai",
		},
		{
			name: "truncatedBlurb",
			title: "Prierašas",
			type: "localeText", // TODO: validation for character limit
		},
		{
			name: "blurb",
			title: "Pilnas aprašas",
			type: "localeEditorial",
		},
		{
			name: "priceBlurb",
			title: "Kainodaros prierašas",
			type: "localeEditorial",
		},
		{
			name: "kainos",
			title: "Kainos",
			description: "Kainos (tik porų konsultacijoms kol kas)",
			type: "array",
			of: [{ type: "price" }],
			hidden: ({ document }) => {
				if (
					document.slug.lt.current == "poros-psichoterapija" ||
					document.slug.en.current == "couple-psychotherapy"
				) {
					return false;
				} else {
					return true;
				}
			},
		},
	],
};
