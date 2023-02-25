import { defineField, defineType } from "sanity";

export default defineType({
	name: "model",
	title: "Poros modelis",
	type: "document",
	fields: [
		defineField({
			name: "title",
			title: "Pavadinimas",
			type: "localeString",
		}),
		defineField({
			name: "description",
			title: "Trumpas aprašymas",
			type: "localeText",
			description:
				"Trumpas teksto anonsas kuris matysis pagrindiniame puslapyje",
		}),
		defineField({
			name: "model",
			title: "Aprašymas",
			type: "localeEditorial",
		}),
	],
});
