import { defineField, defineType } from "sanity";

export default defineType({
	name: "consultant",
	title: "Konsultantė / Konsultantas",
	type: "document",
	fields: [
		defineField({
			name: "order",
			title: "Order",
			type: "number",
			hidden: true,
		}),
		defineField({
			name: "name",
			title: "Vardas (+ titulas)",
			type: "localeString",
		}),
		defineField({
			name: "headline",
			title: "Pozicija / Apibūdinimas",
			type: "localeString",
			description: "Pvz.: pscichoterapeutė (-as), mokymų vadovė (-as) ir pan.",
		}),
		defineField({
			name: "slug",
			title: "Slug",
			type: "slug",
			description:
				"Pagal jį sukuriamas URL. Pvz: coupledialogue.com/laurynas-keturakis",
			options: {
				source: "name",
				maxLength: 96,
			},
		}),
		defineField({
			type: "a11yImage",
			name: "profile",
			title: "Profilio nuotrauka",
		}),
		defineField({
			name: "shortBio",
			title: "Trumpas aprašymas",
			type: "localeText",
			description: "Matysis ant pirmojo puslapio.", // TODO: add character limit
		}),
		defineField({
			name: "bio_new",
			title: "Pilnas aprašymas",
			type: "localizedConsultantBioSections",
		}),
	],
	preview: {
		select: {
			title: "name.lt",
			media: "profile.1.image",
		},
	},
});
