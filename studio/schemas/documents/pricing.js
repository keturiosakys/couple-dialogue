import { baseLanguage } from "../languages";

export default {
	type: "document",
	name: "price",
	title: "Kaina",
	preview: {
		select: {
			title: `label.${baseLanguage.id}`,
		},
	},
	fields: [
		{
			name: "label",
			title: "Pajamų lygis",
			type: "localeString",
			description: "pvz.: iki 1000 €",
		},
		{
			name: "price_1",
			title: "Kaina kai 1 psichoterapeutas (EUR per val.)",
			type: "number",
		},
		{
			name: "price_2",
			title: "Kaina kai 2 psichoterapeutai (EUR per val.)",
			type: "number",
		},
	],
};
