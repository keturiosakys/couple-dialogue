export default {
	name: "book",
	title: "Knyga",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Sekcijos pavadinimas",
			type: "localeString",
		},
		{
			type: "a11yImage",
			name: "cover",
			title: "Viršelio nuotrauka",
		},
		{
			name: "description",
			title: "Aprašymas",
			type: "localeEditorial",
		},
		{
			name: "cta",
			title: "Nuoroda",
			type: "localeCta",
		}
	],
	preview: {
		select: {
			title: "title.lt",
			media: "cover.1.image",
		},
	},
};

