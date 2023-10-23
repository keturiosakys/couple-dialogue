import { baseLanguage } from "../languages";
import { defineField, defineType } from "sanity";

export default defineType({
	type: "document",
	name: "price",
	title: "Kaina",
	preview: {
		select: {
			title: `label.${baseLanguage.id}`,
		},
	},
	fields: [
		defineField({
			name: "label",
			title: "Pajamų lygis",
			type: "localeString",
			description: "pvz.: iki 1000 €",
		}),
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
});
