export default {
	name: "consultant",
	title: "Konsultantė / Konsultantas",
	type: "document",
	fields: [
		{
			name: "order",
			title: "Order",
			type: "number",
			hidden: true,
		},
		{
			name: "name",
			title: "Vardas (+ titulas)",
			type: "localeString",
		},
		{
			name: "headline",
			title: "Pozicija / Apibūdinimas",
			type: "localeString",
			description:
				"Pvz.: pscichoterapeutė (-as), mokymų vadovė (-as) ir pan.",
		},
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			description:
				"Pagal jį sukuriamas URL. Pvz: coupledialogue.com/laurynas-keturakis",
			options: {
				source: "name",
				maxLength: 96,
			},
		},
		{
			type: "a11yImage",
			name: "profile",
			title: "Profilio nuotrauka",
		},
		{
			name: "shortBio",
			title: "Trumpas aprašymas",
			type: "localeText",
			description: "Matysis ant pirmojo puslapio.", // TODO: add character limit
		},
		{
			name: "bio_new",
			title: "Pilnas aprašymas",
			type: "localizedConsultantBioSections",
		},
	],
	preview: {
		select: {
			title: "name.lt",
			media: "profile.1.image",
		},
	},
};
