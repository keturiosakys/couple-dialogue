import { defineField, defineType } from "sanity";

export default defineType({
	name: "book",
	title: "Knyga",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Sekcijos pavadinimas",
			type: "localeString",
		}),
		defineField({
			type: "a11yImage",
			name: "cover",
			title: "Viršelio nuotrauka",
		}),
		defineField({
			name: "description",
			title: "Aprašymas",
			type: "localeEditorial",
		}),
		defineField({
			name: "cta",
			title: "Nuoroda",
			type: "localeCta",
		}),
	],
	preview: {
		select: {
			title: "title.lt",
			media: "cover.1.image",
		},
	},
});
